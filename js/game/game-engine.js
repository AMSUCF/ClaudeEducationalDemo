// Main Game Engine - Orchestrates the game flow

let metricsTracker;
let currentScenarioIndex = 0;
let gameState = 'intro'; // intro, playing, consequence, ending

// Initialize game
function initGame() {
    metricsTracker = new MetricsTracker();

    // Check for saved game
    const hasSave = metricsTracker.loadState();
    if (hasSave) {
        if (confirm('Continue from saved game?')) {
            currentScenarioIndex = metricsTracker.getCurrentScenario();
            if (currentScenarioIndex >= NARRATIVE_DATA.scenarios.length) {
                // Saved game was complete
                metricsTracker.reset();
                currentScenarioIndex = 0;
            } else {
                // Resume from save
                startGameFromSave();
                return;
            }
        } else {
            metricsTracker.reset();
        }
    }
}

// Start game button
function startGame() {
    hideElement('intro-screen');
    showElement('game-screen');
    gameState = 'playing';

    if (!metricsTracker) {
        initGame();
    }

    loadScenario(currentScenarioIndex);
}

// Start game from saved state
function startGameFromSave() {
    hideElement('intro-screen');
    showElement('game-screen');
    gameState = 'playing';
    metricsTracker.updateDisplay();
    loadScenario(currentScenarioIndex);
}

// Load a scenario
function loadScenario(index) {
    if (index >= NARRATIVE_DATA.scenarios.length) {
        endGame();
        return;
    }

    const scenario = NARRATIVE_DATA.scenarios[index];

    // Update year display
    document.getElementById('year-display').textContent = scenario.year;

    // Update scene background
    if (typeof changeScene === 'function') {
        changeScene(scenario.scene);
    }

    // Update scenario title
    document.getElementById('scenario-title').textContent = scenario.title;

    // Update scenario text
    const scenarioTextElement = document.getElementById('scenario-text');
    scenarioTextElement.innerHTML = '';
    scenario.text.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        scenarioTextElement.appendChild(p);
    });

    // Update pressure indicator
    const pressureElement = document.getElementById('pressure-indicator');
    if (scenario.pressure) {
        pressureElement.textContent = scenario.pressure;
        pressureElement.classList.remove('hidden');
    } else {
        pressureElement.classList.add('hidden');
    }

    // Hide consequence display
    hideElement('consequence-display');

    // Show choices section
    showElement('choices-section');

    // Render choices
    renderChoices(scenario.choices, index);

    // Update metrics display
    metricsTracker.updateDisplay();
}

// Render choice buttons
function renderChoices(choices, scenarioIndex) {
    const choiceButtonsContainer = document.getElementById('choice-buttons');
    choiceButtonsContainer.innerHTML = '';

    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.onclick = () => makeChoice(choice, scenarioIndex);
        choiceButtonsContainer.appendChild(button);
    });
}

// Handle choice selection
function makeChoice(choice, scenarioIndex) {
    gameState = 'consequence';

    // Hide choices
    hideElement('choices-section');

    // Apply consequences
    const changes = metricsTracker.applyConsequences(choice.consequences);

    // Show consequence display
    showConsequence(choice.outcome, changes);

    // Animate metric changes
    metricsTracker.animateChanges(changes);

    // Save state
    metricsTracker.saveState();
}

// Show consequence of choice
function showConsequence(outcome, changes) {
    const consequenceElement = document.getElementById('consequence-display');
    const consequenceText = document.getElementById('consequence-text');
    const metricChangesContainer = document.getElementById('metric-changes');

    // Set outcome text
    consequenceText.textContent = outcome;

    // Display metric changes
    metricChangesContainer.innerHTML = '';
    for (let metric in changes) {
        const change = changes[metric];
        if (change.change !== 0) {
            const changeDiv = document.createElement('div');
            changeDiv.className = 'metric-change ' + (change.change > 0 ? 'positive' : 'negative');

            const label = document.createElement('div');
            label.textContent = metricsTracker.getMetricName(metric);
            changeDiv.appendChild(label);

            const value = document.createElement('div');
            value.className = 'metric-change-value';
            value.textContent = (change.change > 0 ? '+' : '') + change.change;
            changeDiv.appendChild(value);

            metricChangesContainer.appendChild(changeDiv);
        }
    }

    showElement('consequence-display');
}

// Continue to next scenario
function continueGame() {
    currentScenarioIndex++;
    metricsTracker.nextScenario();

    if (currentScenarioIndex >= NARRATIVE_DATA.scenarios.length) {
        endGame();
    } else {
        hideElement('consequence-display');
        loadScenario(currentScenarioIndex);
    }
}

// End game and show ending
function endGame() {
    gameState = 'ending';

    hideElement('game-screen');
    showElement('ending-screen');

    // Determine ending based on metrics
    const finalMetrics = metricsTracker.getMetrics();
    const ending = ENDINGS.determineEnding(finalMetrics);

    // Display ending
    document.getElementById('ending-title').textContent = ending.title;

    const endingDescElement = document.getElementById('ending-description');
    endingDescElement.innerHTML = '';
    ending.description.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        endingDescElement.appendChild(p);
    });

    // Display final metrics
    document.getElementById('final-equity').textContent = finalMetrics.equity;
    const budgetAmount = Math.round((finalMetrics.budget / 100) * 700000);
    document.getElementById('final-budget').textContent = `$${Math.round(budgetAmount / 1000)}K`;
    document.getElementById('final-scores').textContent = finalMetrics.scores;
    document.getElementById('final-morale').textContent = finalMetrics.morale;
    document.getElementById('final-autonomy').textContent = finalMetrics.autonomy;

    // Display reflection questions
    const reflectionElement = document.getElementById('reflection-questions');
    if (ending.reflection) {
        reflectionElement.innerHTML = '<ul>';
        ending.reflection.forEach(question => {
            reflectionElement.innerHTML += `<li>${question}</li>`;
        });
        reflectionElement.innerHTML += '</ul>';
    }

    // Clear saved game
    metricsTracker.clearState();
}

// Restart game
function restartGame() {
    // Reset everything
    if (metricsTracker) {
        metricsTracker.reset();
    }
    currentScenarioIndex = 0;
    gameState = 'intro';

    // Hide ending, show intro
    hideElement('ending-screen');
    hideElement('game-screen');
    showElement('intro-screen');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Utility functions
function showElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
    }
}

function hideElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('hidden');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initGame();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press 'R' to restart (when on ending screen)
        if (e.key === 'r' && gameState === 'ending') {
            restartGame();
        }

        // Press 'Enter' to continue (when on consequence screen)
        if (e.key === 'Enter' && gameState === 'consequence') {
            continueGame();
        }

        // Press number keys 1-4 to select choices
        if (gameState === 'playing' && e.key >= '1' && e.key <= '4') {
            const choiceIndex = parseInt(e.key) - 1;
            const choiceButtons = document.querySelectorAll('.choice-btn');
            if (choiceButtons[choiceIndex]) {
                choiceButtons[choiceIndex].click();
            }
        }
    });
});

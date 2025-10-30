// Metrics Tracker - Manages game metrics and state

class MetricsTracker {
    constructor() {
        this.metrics = {
            equity: 70,
            budget: 70,  // Represents percentage of healthy budget
            scores: 65,
            morale: 75,
            autonomy: 80
        };

        this.history = [];
        this.currentScenario = 0;
    }

    // Apply consequences from a choice
    applyConsequences(consequences) {
        const changes = {};

        for (let metric in consequences) {
            const change = consequences[metric];
            const oldValue = this.metrics[metric];
            const newValue = this.clamp(oldValue + change, 0, 100);

            this.metrics[metric] = newValue;
            changes[metric] = {
                old: oldValue,
                new: newValue,
                change: change
            };
        }

        this.history.push({
            scenario: this.currentScenario,
            changes: changes,
            metrics: { ...this.metrics }
        });

        return changes;
    }

    // Clamp value between min and max
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    // Update display of all metrics
    updateDisplay() {
        for (let metric in this.metrics) {
            const value = this.metrics[metric];
            this.updateMetricDisplay(metric, value);
        }
    }

    // Update individual metric display
    updateMetricDisplay(metric, value) {
        const valueElement = document.getElementById(`${metric}-value`);
        const barElement = document.getElementById(`${metric}-bar`);

        if (valueElement) {
            if (metric === 'budget') {
                // Special display for budget
                const budgetAmount = Math.round((value / 100) * 700000);
                valueElement.textContent = `$${Math.round(budgetAmount / 1000)}K`;
            } else {
                valueElement.textContent = value;
            }
        }

        if (barElement) {
            barElement.style.width = `${value}%`;

            // Update color based on value
            barElement.classList.remove('good', 'warning', 'danger');
            if (value >= 60) {
                barElement.classList.add('good');
            } else if (value >= 30) {
                barElement.classList.add('warning');
            } else {
                barElement.classList.add('danger');
            }
        }
    }

    // Animate metric changes
    animateChanges(changes) {
        for (let metric in changes) {
            const change = changes[metric];
            const valueElement = document.getElementById(`${metric}-value`);

            if (valueElement) {
                // Create change indicator
                const indicator = document.createElement('span');
                indicator.className = 'metric-change-indicator';
                indicator.textContent = change.change > 0 ? `+${change.change}` : change.change;
                indicator.style.color = change.change > 0 ? '#2d6a4f' : '#d62828';

                // Position near metric value
                valueElement.parentElement.style.position = 'relative';
                indicator.style.position = 'absolute';
                indicator.style.top = '-10px';
                indicator.style.right = '10px';
                indicator.style.fontSize = '0.9rem';
                indicator.style.fontWeight = 'bold';

                valueElement.parentElement.appendChild(indicator);

                // Fade out and remove
                setTimeout(() => {
                    indicator.style.transition = 'opacity 1s';
                    indicator.style.opacity = '0';
                    setTimeout(() => indicator.remove(), 1000);
                }, 2000);
            }

            // Animate bar
            this.updateMetricDisplay(metric, change.new);
        }
    }

    // Get current scenario index
    getCurrentScenario() {
        return this.currentScenario;
    }

    // Advance to next scenario
    nextScenario() {
        this.currentScenario++;
    }

    // Check if game is over
    isGameOver() {
        return this.currentScenario >= NARRATIVE_DATA.scenarios.length;
    }

    // Get metrics for ending calculation
    getMetrics() {
        return { ...this.metrics };
    }

    // Calculate average metric
    getAverageMetric() {
        const values = Object.values(this.metrics);
        return values.reduce((a, b) => a + b, 0) / values.length;
    }

    // Save game state to localStorage
    saveState() {
        const state = {
            metrics: this.metrics,
            history: this.history,
            currentScenario: this.currentScenario
        };

        try {
            localStorage.setItem('principalsDilemma_save', JSON.stringify(state));
            this.showSaveIndicator();
        } catch (e) {
            console.error('Failed to save game state:', e);
        }
    }

    // Load game state from localStorage
    loadState() {
        try {
            const saved = localStorage.getItem('principalsDilemma_save');
            if (saved) {
                const state = JSON.parse(saved);
                this.metrics = state.metrics;
                this.history = state.history;
                this.currentScenario = state.currentScenario;
                return true;
            }
        } catch (e) {
            console.error('Failed to load game state:', e);
        }
        return false;
    }

    // Clear saved state
    clearState() {
        try {
            localStorage.removeItem('principalsDilemma_save');
        } catch (e) {
            console.error('Failed to clear game state:', e);
        }
    }

    // Show save indicator
    showSaveIndicator() {
        const indicator = document.getElementById('save-indicator');
        if (indicator) {
            indicator.classList.add('show');
            setTimeout(() => {
                indicator.classList.remove('show');
            }, 2000);
        }
    }

    // Reset metrics to initial state
    reset() {
        this.metrics = {
            equity: 70,
            budget: 70,
            scores: 65,
            morale: 75,
            autonomy: 80
        };
        this.history = [];
        this.currentScenario = 0;
        this.clearState();
    }

    // Get metric name for display
    getMetricName(metric) {
        const names = {
            equity: 'Student Equity',
            budget: 'Budget Health',
            scores: 'Test Scores',
            morale: 'Teacher Morale',
            autonomy: 'Curriculum Autonomy'
        };
        return names[metric] || metric;
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MetricsTracker;
}

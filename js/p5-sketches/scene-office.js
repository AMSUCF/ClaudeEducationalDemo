// P5.js Scene Backgrounds for Game
// Simple generated backgrounds representing different locations

let currentScene = 'office';
let sceneTransition = 0;
let bookColors = []; // Store book colors to prevent flashing
let canvasInitialized = false; // Track if canvas has been created

// Setup is called once when p5 initializes
function setup() {
    // Initialize book colors
    initializeBookColors();

    // Try to initialize canvas, but it may fail if container is hidden
    initializeCanvas();
}

// Initialize the canvas (can be called multiple times safely)
function initializeCanvas() {
    // Don't re-initialize if already done
    if (canvasInitialized) {
        return;
    }

    let container = document.getElementById('game-canvas-container');

    // Check if container exists and is visible with dimensions
    if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
        let canvas = createCanvas(container.offsetWidth, 400);
        canvas.parent('game-canvas-container');
        canvasInitialized = true;
    }
}

// Initialize book colors at startup
function initializeBookColors() {
    bookColors = [];
    const colorOptions = [
        [139, 69, 19],    // Brown
        [120, 40, 40],    // Dark red
        [40, 60, 100],    // Dark blue
        [60, 100, 60],    // Dark green
        [100, 80, 40],    // Tan
        [80, 60, 80],     // Purple
        [100, 60, 60],    // Muted red
        [60, 80, 100],    // Blue-gray
        [80, 100, 80],    // Sage green
        [120, 100, 60],   // Golden brown
        [70, 70, 100],    // Blue-purple
        [100, 70, 50]     // Orange-brown
    ];

    for (let i = 0; i < 12; i++) {
        bookColors.push(random(colorOptions));
    }
}

// Draw is called continuously
function draw() {
    // Try to initialize canvas if not already done
    if (!canvasInitialized) {
        initializeCanvas();
        // If still not initialized, skip drawing
        if (!canvasInitialized) {
            return;
        }
    }

    // Draw scene based on current scene type
    switch(currentScene) {
        case 'office':
            drawOfficeScene();
            break;
        case 'classroom':
            drawClassroomScene();
            break;
        case 'staff':
            drawStaffRoomScene();
            break;
        default:
            drawOfficeScene();
    }
}

// Principal's Office Scene
function drawOfficeScene() {
    // Background - warm office colors
    background(210, 180, 140); // tan

    // Window
    fill(135, 206, 235); // sky blue
    noStroke();
    rect(width * 0.7, 50, width * 0.25, height * 0.4);

    // Window panes
    stroke(139, 69, 19);
    strokeWeight(3);
    line(width * 0.825, 50, width * 0.825, 50 + height * 0.4);
    line(width * 0.7, 50 + height * 0.2, width * 0.95, 50 + height * 0.2);

    // Desk
    noStroke();
    fill(101, 67, 33); // dark brown
    rect(width * 0.1, height * 0.6, width * 0.6, height * 0.3, 5);

    // Computer monitor
    fill(50, 50, 50);
    rect(width * 0.35, height * 0.4, width * 0.2, height * 0.15, 3);
    fill(100, 100, 150);
    rect(width * 0.37, height * 0.42, width * 0.16, height * 0.11);

    // Papers on desk
    fill(255, 255, 240);
    rect(width * 0.15, height * 0.65, width * 0.1, height * 0.08);
    rect(width * 0.27, height * 0.67, width * 0.08, height * 0.06);

    // Bookshelf (adjusted to not overlap with desk)
    fill(80, 50, 20);
    rect(width * 0.02, height * 0.2, width * 0.12, height * 0.6);

    // Books (using static colors from initialization)
    for (let i = 0; i < 12; i++) {
        let bookX = width * 0.03;
        let bookY = height * 0.25 + (i % 4) * height * 0.12;
        let bookH = height * 0.1;
        let bookW = width * 0.012;

        // Use pre-initialized colors
        if (bookColors[i]) {
            fill(bookColors[i][0], bookColors[i][1], bookColors[i][2]);
        } else {
            fill(100, 70, 50); // Fallback color
        }
        rect(bookX + floor(i / 4) * width * 0.035, bookY, bookW, bookH);
    }

    // Subtle animation - time of day changes
    let timeOverlay = map(sin(frameCount * 0.01), -1, 1, 0, 50);
    fill(255, 200, 100, timeOverlay);
    rect(0, 0, width, height);
}

// Classroom Scene
function drawClassroomScene() {
    // Background - institutional green
    background(200, 220, 200);

    // Floor
    fill(180, 160, 140);
    rect(0, height * 0.7, width, height * 0.3);

    // Chalkboard
    fill(40, 60, 40);
    rect(width * 0.15, height * 0.1, width * 0.7, height * 0.4, 5);

    // Chalk tray
    fill(160, 140, 120);
    rect(width * 0.15, height * 0.48, width * 0.7, height * 0.04);

    // Some chalk marks on board
    stroke(255, 255, 200);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < 3; i++) {
        let x = width * 0.2 + i * width * 0.2;
        let y = height * 0.25;
        line(x, y, x + width * 0.1, y);
    }
    noStroke();

    // Desks (simple representation)
    fill(160, 120, 80);
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            let deskX = width * 0.15 + col * width * 0.2;
            let deskY = height * 0.6 + row * height * 0.08;
            rect(deskX, deskY, width * 0.08, height * 0.05, 2);
        }
    }

    // Window on side
    fill(135, 206, 235);
    rect(width * 0.02, height * 0.15, width * 0.08, height * 0.3);

    // Subtle animation - light flickering
    let flicker = random() > 0.95 ? random(10, 30) : 0;
    if (flicker > 0) {
        fill(255, 255, 255, flicker);
        rect(0, 0, width, height);
    }
}

// Staff Room Scene
function drawStaffRoomScene() {
    // Background - neutral beige
    background(230, 220, 210);

    // Table
    fill(140, 100, 60);
    ellipse(width * 0.5, height * 0.65, width * 0.5, height * 0.3);

    // Chairs (simplified)
    fill(100, 80, 60);
    for (let i = 0; i < 6; i++) {
        let angle = i * (TWO_PI / 6);
        let chairX = width * 0.5 + cos(angle) * width * 0.3;
        let chairY = height * 0.65 + sin(angle) * height * 0.2;
        ellipse(chairX, chairY, width * 0.06, height * 0.08);
    }

    // Coffee maker
    fill(60, 60, 60);
    rect(width * 0.85, height * 0.4, width * 0.08, height * 0.15, 3);
    fill(200, 100, 50);
    rect(width * 0.87, height * 0.43, width * 0.04, height * 0.05);

    // Bulletin board
    fill(180, 140, 100);
    rect(width * 0.05, height * 0.1, width * 0.3, height * 0.4);

    // Papers on bulletin board
    for (let i = 0; i < 6; i++) {
        fill(255, 255, 240);
        let paperX = width * 0.08 + (i % 3) * width * 0.08;
        let paperY = height * 0.15 + floor(i / 3) * height * 0.15;
        rect(paperX, paperY, width * 0.05, height * 0.08);
    }

    // Notices on papers (lines)
    stroke(0);
    strokeWeight(1);
    for (let i = 0; i < 6; i++) {
        let paperX = width * 0.08 + (i % 3) * width * 0.08;
        let paperY = height * 0.15 + floor(i / 3) * height * 0.15;
        for (let j = 0; j < 3; j++) {
            line(paperX + width * 0.005, paperY + height * 0.02 + j * height * 0.02,
                 paperX + width * 0.045, paperY + height * 0.02 + j * height * 0.02);
        }
    }
    noStroke();

    // Coffee cups on table
    fill(255, 255, 255);
    ellipse(width * 0.45, height * 0.6, width * 0.04, height * 0.05);
    ellipse(width * 0.58, height * 0.62, width * 0.04, height * 0.05);

    // Subtle animation - steam from coffee
    if (frameCount % 3 === 0) {
        fill(200, 200, 200, 100);
        let steamY = height * 0.58 - (frameCount % 30);
        ellipse(width * 0.45, steamY, width * 0.02, height * 0.03);
    }
}

// Function to change scene (called from game engine)
function changeScene(newScene) {
    currentScene = newScene;
}

// Resize canvas when window resizes
function windowResized() {
    // If canvas not initialized yet, try to initialize it
    if (!canvasInitialized) {
        initializeCanvas();
        return;
    }

    // Resize existing canvas
    let container = document.getElementById('game-canvas-container');
    if (container && container.offsetWidth > 0) {
        resizeCanvas(container.offsetWidth, 400);
        // Reinitialize book colors after resize
        initializeBookColors();
    }
}

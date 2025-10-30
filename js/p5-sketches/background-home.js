// P5.js Home Page Background Animation
// Retro grid with floating particles

let particles = [];
let gridSize = 50;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-background');
    canvas.style('z-index', '-1');

    // Create particles
    for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    // Gradient background
    drawGradient();

    // Draw grid
    drawRetroGrid();

    // Update and display particles
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function drawGradient() {
    // Cream to light teal gradient
    let c1 = color(247, 244, 234); // cream
    let c2 = color(200, 230, 240); // light teal

    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(0, y, width, y);
    }
}

function drawRetroGrid() {
    stroke(0, 78, 137, 30); // primary-teal with low opacity
    strokeWeight(1);

    // Vertical lines
    for (let x = 0; x < width; x += gridSize) {
        line(x, 0, x, height);
    }

    // Horizontal lines
    for (let y = 0; y < height; y += gridSize) {
        line(0, y, width, y);
    }
}

class Particle {
    constructor() {
        this.reset();
        this.y = random(height);
    }

    reset() {
        this.x = random(width);
        this.y = 0;
        this.size = random(3, 8);
        this.speed = random(0.5, 2);
        this.color = random() > 0.5 ? color(255, 107, 53, 150) : color(0, 78, 137, 150); // orange or teal
    }

    update() {
        this.y += this.speed;
        this.x += sin(frameCount * 0.01 + this.y * 0.01) * 0.5;

        if (this.y > height) {
            this.reset();
        }
    }

    display() {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, this.size);

        // Add glow effect
        fill(this.color._getRed(), this.color._getGreen(), this.color._getBlue(), 50);
        circle(this.x, this.y, this.size * 2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

const prob0 = 0.01;
const prob1 = 0.86;
const prob2 = 0.93;
const prob3 = 1;

let repeats = 1000;
let alpha = 10;
let size = 1.5;
let x = 0;
let y = 0;

function setup() {
    createCanvas(600, 800);
    background(0);
}

function drawPoint() {
    stroke(0,255,0,alpha);
    strokeWeight(size);
    let px = map(x, -3, 3, 0, 600);
    let py = map(y, 11, 0, 0, 800);
    point(px, py);
}

function nextPoint() {
    let nextX = 0;
    let nextY = 0;

    let rand = random(1);

    if (rand < prob0){
        nextX = 0;
        nextY = 0.16 * y;
    }
    else if (rand < prob1) {
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
    }
    else if (rand < prob2) {
        nextX = 0.20 * x - 0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
    }
    else {
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
    }
    x = nextX;
    y = nextY;
}

function draw() {
    for (let i = 0; i < repeats; i++)
    {
        drawPoint();
        nextPoint();
    }
}
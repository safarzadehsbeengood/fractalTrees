let height = 600;
let width = 600;

function setup() {
    createCanvas(height, width);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(100);
    stroke(255);
    translate(width / 2, height);
    branch(150);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    angle = slider.value();
    
    if (len > 3) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
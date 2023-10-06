let height = window.innerHeight - 100;
let width = window.innerWidth;

function setup() {
    createCanvas(width, height);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    slider.style('width', '100%');
}

function draw() {
    background(10);
    stroke(255);
    translate(width / 2, height);
    branch(height / 4);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    angle = slider.value();
    
    if (len > 4) {
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
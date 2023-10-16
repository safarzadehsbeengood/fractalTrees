const slider = document.getElementById("slider");
const sliderWrapper = document.querySelector("sliderWrapper");
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight / 2);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.style("z-index", "0");
  cnv.position(x, y);

  // slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  // slider.style('width', '100%');
}

function draw() {
  // background(255);
  stroke(0);
  rect(0, 0, width, height);
  translate(width / 2, height);
  branch(height / 3 + 1);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  angle = slider.value;

  if (len > height / 100) {
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

window.onresize = () => {
  setup();
};

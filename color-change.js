//creating a link to both the change color btn and the color box then linking it to a string
const color_box_btn = document.getElementById("change-color-btn");
const color_box = document.getElementById("color-box");
const color_box2 = document.getElementById("color-box2");
const color_box_btn2 = document.getElementById("change-color-btn2");

// creating a function in order to link the button to an eventlistner
const getRandomColor = () => {
  const color_number = Math.floor(Math.random() * 5) + 1; // 1,2,3,4,5

  //creating an ifelse statement for each colors a
  if (color_number === 1) {
    //giving the styling background red
    color_box.style.backgroundColor = "Red";
  } else if (color_number === 2) {
    //giving the styling background blue
    color_box.style.backgroundColor = "Blue";
  } else if (color_number === 3) {
    //giving the styling background green
    color_box.style.backgroundColor = "Green";
  } else if (color_number === 4) {
    //giving the styling background yellow
    color_box.style.backgroundColor = "Yellow";
  } else if (color_number === 5) {
    //giving the styling background orange
    color_box.style.backgroundColor = "Orange";
  }
};

//click button linked through eventlistner to function
color_box_btn.addEventListener("click", getRandomColor);

//Done

function getRandomColor2() {
  let rando = Math.floor(100000 + Math.random() * 900000);

  color_box2.style.backgroundColor = `#${rando}`;
}

color_box_btn2.addEventListener("click", getRandomColor2);

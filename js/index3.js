// const height = document.getElementById("height");
// const weight = document.getElementById("weight");
const heightText = document.getElementById("height_text");
const weightText = document.getElementById("weight_text");
const calcBtn = document.getElementById("calc_btn");
const result = document.getElementById("result");
const selectorBasic = document.getElementById("selector_basic");
const selectorOptions = document.getElementById("selector_options");
const selectorOptionsInner = document.getElementById("selector_options_inner");
const selectorBasicText = document.getElementById("selector_basic_text");
const selectorOptionsInnerLis = document.querySelectorAll("#selector_options_inner > li");

let heightVal = 170;
let weightVal = 60;
let transform = 0;

// height.addEventListener("change", function(e) {
//   heightVal = Number(e.target.value);
//   heightText.value = heightVal;
// });

// weight.addEventListener("change", function(e) {
//   weightVal = Number(e.target.value);
//   weightText.value = weightVal;
// });

// heightText.addEventListener("change", function(e) {
//   heightVal = Number(e.target.value);
//   height.value = heightVal;
// });

// weightText.addEventListener("change", function(e) {
//   weightVal = Number(e.target.value);
//   weight.value = weightVal;
// });


calcBtn.addEventListener("click", function(e) {
  result.textContent = weightVal / Math.pow(heightVal / 100, 2);
});

selectorBasic.addEventListener("click", function(e) {
  e.stopPropagation();
  if ( selectorOptions.style.display === "flex") {
    selectorOptions.style.display = "none";
  } else {
    selectorOptions.style.display = "flex";
  }
});

document.addEventListener("click", function() {
  selectorOptions.style.display = "none";
});

selectorOptions.addEventListener("wheel", function(e) {
  e.stopPropagation();
  if (e.deltaY > 0) {
    if (transform > -200) {
      transform -= 50;
    }
  } else {
    if (transform < 0) {
      transform += 50;
    }
  }
  selectorOptionsInner.style.transform = `translateY(${transform}px)`;
});

for (let i = 0; i < selectorOptionsInnerLis.length; i++) {
  selectorOptionsInnerLis[i].addEventListener("click", function() {
    selectorBasicText.textContent = selectorOptionsInnerLis[i].textContent
  });
}



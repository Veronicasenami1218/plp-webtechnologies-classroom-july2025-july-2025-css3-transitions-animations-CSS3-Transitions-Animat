// Part 2: Functions with parameters and return values

let globalCounter = 0; // Global variable

function incrementCounter(step) {
  // local variable
  let newCount = globalCounter + step;
  globalCounter = newCount;
  return newCount;
}

function changeBoxColor(boxId, color) {
  const box = document.getElementById(boxId);
  box.style.backgroundColor = color;
}

// Part 3: Combining CSS + JS
const jsBox = document.getElementById("jsBox");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", () => {
  jsBox.classList.add("move");
  console.log("Counter:", incrementCounter(1)); // show function reuse
});

stopBtn.addEventListener("click", () => {
  jsBox.classList.remove("move");
  changeBoxColor("jsBox", "tomato"); // use function with parameter
});

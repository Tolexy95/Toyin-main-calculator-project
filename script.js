const toggleDiv = document.querySelector(".toggle-div");
const body = document.body;
const link = ["style.css", "style2.css", "style3.css"];
const themeStyle = document.getElementsByTagName("link")[0];

let displayScreen = document.getElementById("display-input");

const numKeys = document.querySelectorAll(".numbers");
const equalButton = document.querySelector(".equal-Btn");
const resetButton = document.querySelector(".reset-Btn");
const deleteButton = document.querySelector(".delete-button");
const squareRtnBtn = document.querySelector(".squareRoot");
const squareBtn = document.querySelector(".square");
const percentBtn = document.querySelector(".percent");

// function to toggle between each styles
toggleDiv.style.justifyContent = "flex-start";
function toggleButton() {
  if (toggleDiv.style.justifyContent == "flex-start") {
    toggleDiv.style.justifyContent = "center";
  } else if (toggleDiv.style.justifyContent == "center") {
    toggleDiv.style.justifyContent = "flex-end";
  } else {
    toggleDiv.style.justifyContent = "flex-start";
  }
}

// function to change styles
function toggleStyle() {
  if (themeStyle.getAttribute("href") == "style.css") {
    themeStyle.setAttribute("href", "style2.css");
  } else if (themeStyle.getAttribute("href") == "style2.css") {
    themeStyle.setAttribute("href", "style3.css");
  } else {
    themeStyle.setAttribute("href", "style.css");
  }
}

// function to display buttons on the screen
let result = "";

function updateValue(value) {
  result += value;
  displayScreen.innerHTML = result.slice(0, 20);
}
numKeys.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateValue(btn.innerHTML);
  });
});

// functions to evaluate using the equal_to key
function evaluateValue() {
  displayScreen.innerHTML = eval(result);
  result = displayScreen.innerHTML;
}

//function to clear all values
function clearValue() {
  displayScreen.innerHTML = "";
  result = "";
}

//function to delete one value at a time

function deleteValue() {
  displayScreen.innerHTML = displayScreen.innerHTML.slice(0, -1);
  result = result.slice(0, -1);
}

//function to evaluate square-root
function evalSquareRoot() {
    //  displayScreen.value ="√(" + value + ")";
     displayScreen.innerHTML = Math.sqrt(result);
     result = displayScreen.innerHTML;
  }
///function to evaluate square
  function evalSquare() {
    displayScreen.innerHTML = result * result;
    result =displayScreen.innerHTML;
  }


  //function to evaluate percentage

  function evalPercent() {
    displayScreen.innerHTML = result/100;
    result = displayScreen.innerHTML;
  }

//All event listener
toggleDiv.addEventListener("click", toggleButton);
toggleDiv.addEventListener("click", toggleStyle);
equalButton.addEventListener("click", evaluateValue);
resetButton.addEventListener("click", clearValue);
deleteButton.addEventListener("click", deleteValue);
squareRtnBtn.addEventListener("click", evalSquareRoot);
squareBtn.addEventListener("click", evalSquare);
percentBtn.addEventListener("click", evalPercent);





//  let value = "";

  // squareRtnBtn.addEventListener("click", () => {
  //   value += "√";
  //   displayScreen.innerHTML = value;
  // });
  
  // equalButton.addEventListener("click", () => {
  //   if (value.startsWith("√")) {
  //     const number = parseFloat(value.slice(1));
  //     displayScreen.innerHTML = Math.sqrt(number);
  //     result = displayScreen.innerHTML;
  //     value = "";
  //   }
  // });
  
// 1. Create a button that displays an alert when clicked:

// 2. Create an input field that logs the input value when submitted:

// 3. Create an image that changes when clicked:

// 4. Create a div that changes color when the mouse hovers over it:

// 5. Create a checkbox that toggles the visibility of a paragraph:

const buttonToClick = document.querySelector(".button");
buttonToClick.addEventListener("click", () => alert("Gotcha"));

const input = document.getElementById("input");
const button = document.getElementById("button");
button.addEventListener("click", () => console.log(input.value));

const imageSwap = document.querySelector("#image1");
imageSwap.addEventListener(
  "mousedown",
  () =>
    (imageSwap.src =
      "https://images.unsplash.com/photo-1682420420091-ca2afcdf6956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
);
imageSwap.addEventListener(
  "mouseup",
  () =>
    (imageSwap.src =
      "https://images.unsplash.com/photo-1681928676479-d6b689b21406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80")
);

const divHover = document.querySelector("#hover");
divHover.addEventListener(
  "mouseover",
  () => (divHover.style.backgroundColor = "lightblue")
);

const checkbox = document.querySelector("#checkbox");
const para = document.querySelector("#para");
checkbox.addEventListener("click", () => {
  if (checkbox.checked === true) {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
});

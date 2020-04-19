const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btnC");
const exactly = document.querySelector(".btnExactly");
const input = document.querySelector("input");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.sum;
    input.value += value;
  });
});

exactly.addEventListener("click", function (e) {
  if (input.value === "") {
    input.value = "Please Enter a Value";
  } else {
    let sum = eval(input.value);
    input.value = sum;
  }
});

clear.addEventListener("click", function (e) {
  input.value = "";
});

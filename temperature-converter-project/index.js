// Variables
const btn = document.querySelector("#btn");
let result = document.querySelector("#result");

// Event Listener
btn.addEventListener("click", function () {
  let fahrenheitTemp = document.querySelector("#temperature").value;

  fahrenheitTemp = parseInt(fahrenheitTemp);

  result.textContent = Math.round((fahrenheitTemp - 32) * (5 / 9));
});

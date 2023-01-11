import { MinPrices } from "./data.js";

const typeSelector = document.querySelector('#type');
const priceInput = document.querySelector('#price');

typeSelector.addEventListener('change', function () {
  priceInput.min = MinPrices[typeSelector.value];
  priceInput.placeholder = MinPrices[typeSelector.value];
});

const timeInSelector = document.querySelector('#timein');
const timeOutSelector = document.querySelector('#timeout');

timeInSelector.addEventListener('change', function () {
  timeOutSelector.value = timeInSelector.value;
});

timeOutSelector.addEventListener('change', function () {
  timeInSelector.value = timeOutSelector.value;
});

export { typeSelector, priceInput, timeInSelector, timeOutSelector };

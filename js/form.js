import { MinPrices } from "./data.js";

const typeSelector = document.querySelector('#type');
const priceInput = document.querySelector('#price');

typeSelector.addEventListener('change', () => {
  priceInput.min = MinPrices[typeSelector.value];
  priceInput.placeholder = MinPrices[typeSelector.value];
});

const timeInSelector = document.querySelector('#timein');
const timeOutSelector = document.querySelector('#timeout');

timeInSelector.addEventListener('change', () => {
  timeOutSelector.value = timeInSelector.value;
});

timeOutSelector.addEventListener('change', () => {
  timeInSelector.value = timeOutSelector.value;
});

const roomNumber = document.querySelector('#room_number');
const guestsCapacity = document.querySelector('#capacity');
const capacityOptions = guestsCapacity.options;

capacityOptions[0].setAttribute('disabled', '');
capacityOptions[1].setAttribute('disabled', '');
capacityOptions[3].setAttribute('disabled', '');


roomNumber.addEventListener('input', () => {
  if (roomNumber.value === '1') {
    capacity.value = '1';

    capacityOptions[0].setAttribute('disabled', '');
    capacityOptions[1].setAttribute('disabled', '');
    capacityOptions[2].removeAttribute('disabled');
    capacityOptions[3].setAttribute('disabled', '');
  } else if (roomNumber.value === '2') {
    capacity.value = '2';

    capacityOptions[0].setAttribute('disabled', '');
    capacityOptions[1].removeAttribute('disabled');
    capacityOptions[2].removeAttribute('disabled');
    capacityOptions[3].setAttribute('disabled', '');
  } else if (roomNumber.value === '3') {
    capacity.value = '3';

    capacityOptions[0].removeAttribute('disabled');
    capacityOptions[1].removeAttribute('disabled');
    capacityOptions[2].removeAttribute('disabled');
    capacityOptions[3].setAttribute('disabled', '');
  } else {
    capacity.value = '0';

    capacityOptions[0].setAttribute('disabled', '');
    capacityOptions[1].setAttribute('disabled', '');
    capacityOptions[2].setAttribute('disabled', '');
    capacityOptions[3].removeAttribute('disabled');
  }
});

const titleInput = document.querySelector('#title');
const addressInput = document.querySelector('#address');

titleInput.addEventListener('input', () => {
  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  priceInput.reportValidity();
});

const form = document.querySelector('.ad-form');

addressInput.addEventListener('input', (evt) => {
  evt.target.value = '';
});


console.log(addressInput.validity);

addressInput.addEventListener('invalid', () => {
  if (addressInput.validity.valueMissing) {
    addressInput.setCustomValidity('Укажите координаты маркером на карте');
  } else {
    addressInput.setCustomValidity('');
  }
});






export { typeSelector, priceInput, timeInSelector, timeOutSelector };

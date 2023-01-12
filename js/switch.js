const adForm = document.querySelector('.ad-form');
const formMapFilters = document.querySelector('.map__filters');
const formElements = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');
const headerInput = document.querySelector('.ad-form-header__input');

const disablePage = () => {
  adForm.classList.add('ad-form--disabled');

  formMapFilters.classList.add('map__filters--disabled');

  formElements.forEach(element => {
    element.setAttribute('disabled', '');
  });

  mapFilters.forEach(element => {
    element.setAttribute('disabled', '');
  });

  mapFeatures.setAttribute('disabled', '');

  headerInput.setAttribute('disabled', '');
};

const enablePage = () => {
  adForm.classList.remove('ad-form--disabled');

  formMapFilters.classList.remove('map__filters--disabled');

  formElements.forEach(element => {
    element.removeAttribute('disabled');
  });

  mapFilters.forEach(element => {
    element.removeAttribute('disabled');
  });

  mapFeatures.removeAttribute('disabled');

  headerInput.removeAttribute('disabled');
};

export { disablePage, enablePage };

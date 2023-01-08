import { ApartmentType, apartFeatures } from './data.js';

const makeNewCard = (parameters) => {
  const popupTemplate = document.querySelector('#card').content;
  const clonedPopupTemplate = popupTemplate.querySelector('.popup').cloneNode(true);
  const apartOffer = parameters.offer;

  const popupTitle = clonedPopupTemplate.querySelector('.popup__title');
  popupTitle.textContent = apartOffer.title;

  const popupAddress = clonedPopupTemplate.querySelector('.popup__text--address');
  popupAddress.textContent = apartOffer.address;

  const popupPrice = clonedPopupTemplate.querySelector('.popup__text--price');
  popupPrice.textContent = apartOffer.price;

  const popupType = clonedPopupTemplate.querySelector('.popup__type');
  popupType.textContent = ApartmentType[apartOffer.type];

  const popupCapacity = clonedPopupTemplate.querySelector('.popup__text--capacity');
  popupCapacity.textContent = apartOffer.rooms + ' комнаты для ' + apartOffer.guests + ' гостей';

  const popupTime = clonedPopupTemplate.querySelector('.popup__text--time');
  popupTime.textContent = 'Заезд после ' + apartOffer.checkin + ', выезд до ' + apartOffer.checkout;

  const popupFeatures = clonedPopupTemplate.querySelector('.popup__features');

  for (let feature of apartFeatures) {
    if (!apartOffer.features.includes(feature)) {
      const hiddenFeatures = popupFeatures.querySelector('.popup__feature--' + feature);
      hiddenFeatures.classList.add('hidden');
    }
  }

  const popupDescription = clonedPopupTemplate.querySelector('.popup__description');
  popupDescription.textContent = apartOffer.description;

  const popupPhotos = clonedPopupTemplate.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('.popup__photo');
  const popupPhotoTemplate = popupPhoto.cloneNode(true);

  if (apartOffer.photos.length === 0) {
    popupPhoto.classList.add('hidden');
  }

  for (let i = 0; i < apartOffer.photos.length; i++) {
    if (i === 0) {
      popupPhoto.src = apartOffer.photos[i];
    } else {
      const clonedPopupPhoto = popupPhotoTemplate.cloneNode(true);
      clonedPopupPhoto.src = apartOffer.photos[i];
      popupPhotos.appendChild(clonedPopupPhoto);
    }
  }

  const popupAvatar = clonedPopupTemplate.querySelector('.popup__avatar');
  popupAvatar.src = parameters.author.avatar;


  return clonedPopupTemplate;
};

export { makeNewCard };

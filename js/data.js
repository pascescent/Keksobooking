import { randomIntegner, randomFloatNumber, flatParam } from "./util.js";

const APARTMENTS_COUNT = 10;
const LENGTH_FLOAT_LOCATION = 5;
const LocationLatitude = {
  MIN: 35.65,
  MAX: 35.7
};
const LocationLongitude = {
  MIN: 139.7,
  MAX: 139.8
}
const ApartmentType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало'
}
const MinPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000
}

const apartTypes = ['palace', 'flat', 'house', 'bungalow'];
const apartFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const apartPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
                    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
                    'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
const checkTime = ['12:00', '13:00', '14:00'];

let apartments = [];

const fullApartments = (count = 10) => {
  for (let i = 0; i < count; i++) {
    apartments.push({
    	author: {
        avatar: 'img/avatars/user' + (i < 9 ? '0' + (i + 1)  : i + 1) + '.png'
      },
      offer: {
        title: 'Ужасная квартирка',
        address: '',
        price: randomIntegner(10000, 100000),
        type: apartTypes[randomIntegner(0, apartTypes.length - 1)],
        rooms: randomIntegner(1, 5),
        guests: '',
        checkin: checkTime[randomIntegner(0, checkTime.length -1)],
        checkout: checkTime[randomIntegner(0, checkTime.length -1)],
        features: flatParam(apartFeatures),
        description: 'Очень ужасная квартирка',
        photos: flatParam(apartPhotos)
      },
      location: {
        x: randomFloatNumber(LocationLatitude.MIN, LocationLatitude.MAX, LENGTH_FLOAT_LOCATION),
        y: randomFloatNumber(LocationLongitude.MIN, LocationLongitude.MAX, LENGTH_FLOAT_LOCATION)
      }
    });
    apartments[i].offer.address = apartments[i].location.x + ', ' + apartments[i].location.y;
    apartments[i].offer.guests = Math.ceil(apartments[i].offer.rooms * 1.5);

  }
};





export { APARTMENTS_COUNT, LENGTH_FLOAT_LOCATION, LocationLatitude, LocationLongitude, ApartmentType, MinPrices, apartTypes, apartFeatures, apartPhotos, checkTime, apartments, fullApartments };

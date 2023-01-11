import { APARTMENTS_COUNT, fullApartments, apartments } from './data.js';
import { makeNewCard } from './template.js';
import './form.js';

fullApartments(2);


console.log(apartments);

console.log('a');

document.querySelector('#map-canvas').appendChild(makeNewCard(apartments[0]))

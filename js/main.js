import { APARTMENTS_COUNT, fullApartments, apartments } from './data.js';
import { makeNewCard } from './template.js';
import './form.js';
import { disablePage, enablePage } from './switch.js';

fullApartments(2);

disablePage();

console.log(apartments);



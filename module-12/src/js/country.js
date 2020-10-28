'use strict';
import countrySearch from './fetchCountries';
import refs from './refs';
import oneCountry from '../templates/templatesOneCountry.hbs';
import countryList from '../templates/templatesManyCoutry.hbs';

import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');
var debounce = require('lodash.debounce');

refs.searchForm.addEventListener('input', debounce(countrySearchInput, 500));

function countrySearchInput(elem) {
  elem.preventDefault();
  clearContainer();
  const searchQuery = elem.target.value;

  countrySearch
    .fetchCountrries(searchQuery)
    .then(data => {
      if (data.length > 10) {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
          addClass: 'myPnotify',
          // closer: false,
          // sticker: false,
          // closerHover: true,
          // stickerHover: true,
          // mouseReset: true,
        });
      } else if (data.status === 404) {
        error({
          text:
            'No country has been found. Please enter a more specific query!',
          addClass: 'myPnotify',
        });
      } else if (data.length === 1) {
        buildList(data, oneCountry);
      } else if (data.length <= 10) {
        buildList(data, countryList);
      }
    })
    .catch(Error => {
      Error({
        text: 'You must enter query parameters!',
        addClass: 'myPnotify',
      });
      console.log(Error);
    });
}

function buildList(countryes, template) {
  const list = countryes.map(count => template(count)).join();
  refs.articlesContainer.insertAdjacentHTML('afterbegin', list);
}

function clearContainer() {
  refs.articlesContainer.innerHTML = '';
}

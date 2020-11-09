'use strict';

import refs from './refs';
import servise from './apiService';
import cardImage from '../templates/templatesImage.hbs';

refs.searchForm.addEventListener('submit', searchImageInputHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchImageInputHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.elements.query;
  clearList();
  servise.resetPage();
  servise.searchQuerry = input.value;
  servise.fetchArticles().then(hits => {
    const markup = buildListTamplate(hits);
    insertList(markup);
  });
  input.value = '';
}

function loadMoreBtnHandler() {
  servise.fetchArticles().then(hits => {
    const markup = buildListTamplate(hits);
    insertList(markup);
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  });
}

function insertList(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}

function buildListTamplate(items) {
  return cardImage(items);
}

function clearList() {
  refs.gallery.innerHTML = '';
}

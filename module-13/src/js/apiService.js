'use strict';

const base = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  async fetchArticles(query) {
    const keyApi = '19009263-30a6a89df12a665822c0a250f';
    const reqParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyApi}`;
    const res = await fetch(base + reqParams);
    const parseRes = await res.json();
    this.incrementPage();
    return parseRes.hits;
    // console.log(parseRes.hits);
  },

  get searchQuerry() {
    return this.query;
  },

  set searchQuerry(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};

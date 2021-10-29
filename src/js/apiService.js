const API_KEY = '24048066-a9af356d7e5c6815eb6be670e';
const BASE_URL = 'https://pixabay.com/api/';
const MAIN_SEARCH_SETTINGS = '?image_type=photo&orientation=horizontal&';

export default class ApiImagesService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async onFetchImages() {
    const url = `${BASE_URL}${MAIN_SEARCH_SETTINGS}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return await fetch(url).then(response => {
      this.incrementPage();
      return response.json();
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

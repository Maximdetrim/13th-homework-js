import axios from 'axios';

export default {
  searchQuery: '',
  page: 1,

  apiKey: `19512727-32501378dd7f5085677b9caf0`,
  async searchImages() {
    const result = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    );
    this.incrementPage();
    return result.data.hits;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};

import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showNoImagesMessage } from './js/render-function.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  }
});
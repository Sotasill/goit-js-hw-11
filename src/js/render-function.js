// render-functions.js
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clear the gallery before rendering new images

  if (images.length === 0) {
    showNoImagesMessage();
    return;
  }

  const cardsMarkup = images.map(image => createImageCard(image)).join('');
  gallery.insertAdjacentHTML('beforeend', cardsMarkup);
}

function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
    <div class="image-card">
      <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${downloads}
        </p>
      </div>
    </div>
  `;
}

export function showNoImagesMessage() {
  iziToast.info({
    title: 'Info',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
}

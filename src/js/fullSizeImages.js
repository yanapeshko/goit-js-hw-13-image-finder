import * as basicLightbox from 'basiclightbox';
import refs from './refs.js';
const { galleryEL } = refs;

galleryEL.addEventListener('click', onImageClick);

function onImageClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.preventDefault();

  const fullImageLink = e.target.getAttribute('data-src');
  const imageAlt = e.target.getAttribute('alt');
  // const imageWidth = e.target.getAttribute('data-width');

  const instance = basicLightbox.create(`<img src=${fullImageLink} alt=${imageAlt}/>`);

  instance.show();
}

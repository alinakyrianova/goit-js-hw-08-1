// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryAdd = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a></li>`
  )
  .join("");
galleryEl.innerHTML = galleryAdd;

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
console.log(galleryItems);

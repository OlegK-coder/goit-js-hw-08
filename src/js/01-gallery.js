// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const galleryItem = createImgCard(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItem);

function createImgCard(galleryItems) {
return galleryItems
    .map(({preview, original, description}) => {
        return `
    <li>
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `}).join('');   
}

new SimpleLightbox('.gallery a', { 
    showCounter: false,
    disableScroll: false,
    captionsData: 'alt',
    captionDelay: 250,
    docClose: true,
});

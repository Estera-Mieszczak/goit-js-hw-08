import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCard = galleryItems.map(
    (item) => `<li class= "list"><a class = "gallery__item" href = "${item.original}"><img class = "gallery__image" src = "${item.preview}" alt = "${item.description}"/></a></li>`
).join("");

gallery.innerHTML = galleryCard;

const lightbox = new SimpleLightbox('.gallery, a', {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

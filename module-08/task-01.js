"use strict";
import galleryItems from "./gallery-items.js";
//
document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    modal: document.querySelector("div.lightbox"),
    modalImg: document.querySelector("img.lightbox__image"),
    gallery: document.querySelector("ul.js-gallery"),
  };
  let modalIndex;
  const galleryFotos = galleryItems.map((image, index) => {
    const galleryLi = document.createElement("li");
    galleryLi.classList.add("gallery__item");
    const galleryA = document.createElement("a");
    galleryA.classList.add("gallery__link");
    galleryA.href = image.original;

    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = image.preview;
    galleryImg.alt = image.description;
    galleryImg.dataset.sourse = image.original;
    galleryImg.dataset.index = index;

    galleryA.appendChild(galleryImg);
    galleryLi.appendChild(galleryA);
    return galleryLi;
  });

  refs.gallery.append(...galleryFotos);

  const imageSwop = () => {
    refs.modalImg.src = galleryItems[modalIndex].original;
    refs.modalImg.alt = galleryItems[modalIndex].description;
  };

  const modalKeypress = (event) => {
    switch (event.key) {
      case "Escape":
        onModalClose();
        break;
      case "ArrowRight":
        if (modalIndex + 1 < galleryItems.length) {
          modalIndex++;
          imageSwop();
        }
        break;
      case "ArrowLeft":
        if (modalIndex - 1 >= 0) {
          modalIndex--;
          imageSwop();
        }
    }
  };

  const onModalOpen = (src, alt) => {
    refs.modal.classList.add("is-open");
    refs.modalImg.src = src;
    refs.modalImg.alt = alt;

    document.addEventListener("keydown", modalKeypress);
  };
  const onModalClose = () => {
    refs.modal.classList.remove("is-open");
    refs.modalImg.src = "";
    refs.modalImg.alt = "";
    document.removeEventListener("keydown", modalKeypress);
  };

  const galleryClik = (event) => {
    const { target } = event;
    if (target.classList.contains("gallery__image")) {
      event.preventDefault();
      const openImg = target.dataset.sourse;
      const openImgAlt = target.alt;
      modalIndex = target.dataset.index;
      onModalOpen(openImg, openImgAlt);
    }
  };

  const modalClik = (event) => {
    const { target } = event;
    if (
      target.classList.contains("lightbox__button") ||
      target.classList.contains("lightbox__overlay")
    ) {
      onModalClose();
    }
  };
  refs.gallery.addEventListener("click", galleryClik);
  refs.modal.addEventListener("click", modalClik);
});

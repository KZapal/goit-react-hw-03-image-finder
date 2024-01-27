import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, largeImageURL, onClick }) => (
  <li className={css.ImageGalleryItem}>
    <img
      src={src}
      alt={alt}
      className={css.ImageGalleryItemImage}
      onClick={() => onClick(largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;

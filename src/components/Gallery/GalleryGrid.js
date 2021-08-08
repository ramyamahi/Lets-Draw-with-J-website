import React from 'react';

const GalleryGrid = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((galleryItem) => {
        const { id, title, img } = galleryItem;
        return (
          <article key={id} className='gallery-item'>
            <img src={img} alt={title} className='photo' />
          </article>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
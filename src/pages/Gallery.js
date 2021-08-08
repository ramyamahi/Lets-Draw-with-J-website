import React, { useState } from 'react';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import Categories from '../components/Gallery/Categories';
import { gallery } from '../data';
const allCategories = ['all', ...new Set(gallery.map((item) => item.category))];

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState(gallery);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setGalleryItems(gallery);
      return;
    }
    const newItems = gallery.filter((item) => item.category === category);
    setGalleryItems(newItems);
  };

  return (
    <main>
      <section className="gallery section">
        <Categories categories={categories} filterItems={filterItems} />
        <GalleryGrid items={galleryItems} />
      </section>
    </main>
  );
}

export default Gallery;
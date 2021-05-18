import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  1024: { items: 1 },
};

const items = [
  <div className='w-full'>
    <img
      src='https://images.pokemontcg.io/swsh5/155.png'
      className='showcase-image mx-auto'
      onDragStart={handleDragStart}
    />
  </div>,
  <div className='w-full'>
    <img
      src='https://images.pokemontcg.io/swsh5/146.png'
      className='showcase-image mx-auto'
      onDragStart={handleDragStart}
    />
  </div>,
  <img
    src='https://images.pokemontcg.io/swsh5/169.png'
    className='showcase-image mx-auto'
    onDragStart={handleDragStart}
  />,
  <img
    src='https://images.pokemontcg.io/swsh5/169.png'
    className='showcase-image mx-auto'
    onDragStart={handleDragStart}
  />,
];

const Carousel = () => {
  return (
    <div style={{ width: '300px' }} className='mx-auto pt-8 mb-4 lg:mb-0'>
      <AliceCarousel
        responsive={responsive}
        items={items}
        animationType='fadeout'
        animationDuration='1000'
        fadeOutAnimation={true}
        autoPlayInterval={3000}
        autoPlayDirection='rtl'
        autoPlay={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        infinite
        paddingLeft={0}
        paddingRight={0}
        activeIndex={1}
      />
    </div>
  );
};

export default Carousel;

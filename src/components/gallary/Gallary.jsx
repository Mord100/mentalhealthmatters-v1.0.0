import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image1 from '../../assets/event/WhatsApp Image 2024-07-06 at 14.41.04.jpeg'
import Image2 from '../../assets/event/event2.jpeg'
import Image3 from '../../assets/event/event4.jpeg'
import Image4 from '../../assets/event/event3.jpeg'
import Image5 from '../../assets/event/event5.jpeg'
import Image6 from '../../assets/event/event6.jpeg'
import Image7 from '../../assets/event/event7.jpeg'
import Image8 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.23.jpeg'
import Image9 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.24.jpeg'
import Image10 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.25.jpeg'
import Image12 from '../../assets/event/WhatsApp Image 2024-07-06 at 14.41.04 (1).jpeg'
import Image13 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.27.jpeg'
import Image14 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'






const ImageGalleryComponent = () => {
  const images = [
    {
      original: Image1,
      thumbnail: Image1
    },
    {
      original: Image2,
      thumbnail: Image2,
    },
    {
      original: Image3,
      thumbnail: Image3,
    },
    {
      original: Image13,
      thumbnail: Image13,
    },
    {
      original: Image12,
      thumbnail: Image12,
    },
    {
      original: Image14,
      thumbnail: Image14,
    },
    {
      original: Image4,
      thumbnail: Image4,
    },
    {
      original: Image5,
      thumbnail: Image5,
    },
    {
      original: Image6,
      thumbnail: Image6,
    },
    {
      original: Image7,
      thumbnail: Image7,
    },
    {
      original: Image8,
      thumbnail: Image8,
    },
    {
      original: Image9,
      thumbnail: Image9,
    },
    {
      original: Image10,
      thumbnail: Image10,
    },
  ];

  return (
    <div id='gallery' className="container mx-auto p-4 lg:px-40 py-10">
      <div className="py-4">
        <h1 className='text-3xl font-bold border-b pb-8 '>Our Gallery</h1>
      <p className='py-4 text-gray-600'>
         Browse images from our events...
      </p>
      </div>
      
      <div className="border-2 border-gray-200 rounded-b-md ">
        <ReactImageGallery items={images} showThumbnails={true}
        showPlayButton={false}
        showNav={false}
        autoPlay={true}
        slideInterval={2000}
        className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageGalleryComponent;

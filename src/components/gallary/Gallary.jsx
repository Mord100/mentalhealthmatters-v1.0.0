import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image1 from '../../assets/event/event1.jpeg'
import Image2 from '../../assets/event/event2.jpeg'
import Image3 from '../../assets/event/event4.jpeg'


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
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image1,
      thumbnail: Image1,
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

import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageGalleryComponent = () => {
  const images = [
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
      original: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      thumbnail: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
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

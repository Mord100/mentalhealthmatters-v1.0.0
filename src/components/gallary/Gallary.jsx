import React, { useState, useEffect } from 'react';
import { Dialog, Transition, DialogPanel } from "@headlessui/react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fragment } from 'react';

// Event Images
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
import Image15 from '../../assets/event/WhatsApp Image 2025-05-02 at 8.35.25 PM.jpeg'
import Image16 from '../../assets/event/WhatsApp Image 2025-05-02 at 8.35.24 PM (1).jpeg'
import Image17 from '../../assets/event/WhatsApp Image 2025-05-02 at 8.35.25 PM (2).jpeg'
import Image18 from '../../assets/event/WhatsApp Image 2025-05-02 at 8.35.25 PM (3).jpeg'
import Image19 from '../../assets/event/WhatsApp Image 2025-05-02 at 8.35.24 PM.jpeg'
// import Image19 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'
// import Image20 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'
// import Image21 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'
// import Image22 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'
// import Image23 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'
// import Image24 from '../../assets/event/WhatsApp Image 2024-07-01 at 10.31.29 (1).jpeg'





const ImageGalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { id: 1, src: Image1, category: "", title: "" },
    { id: 2, src: Image2, category: "", title: "" },
    { id: 3, src: Image3, category: "", title: "" },
    { id: 4, src: Image13, category: "", title: "" },
    { id: 5, src: Image12, category: "", title: "" },
    { id: 6, src: Image14, category: "", title: "" },
    { id: 7, src: Image4, category: "", title: "" },
    { id: 8, src: Image5, category: "", title: "" },
    { id: 9, src: Image6, category: "", title: "" },
    { id: 10, src: Image7, category: "", title: "" },
    { id: 11, src: Image8, category: "", title: "" },
    { id: 12, src: Image9, category: "", title: "" },
    { id: 13, src: Image10, category: "", title: "" },
    { id: 14, src: Image15, category: "", title: "" },
    { id: 15, src: Image16, category: "", title: "" },
    { id: 16, src: Image17, category: "", title: "" },
    { id: 17, src: Image18, category: "", title: "" },
    { id: 18, src: Image19, category: "", title: "" },
  ];

  // Number of images to show per slide based on screen size
  const getImagesPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 4;
  };

  const [imagesPerSlide, setImagesPerSlide] = useState(getImagesPerSlide());
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setImagesPerSlide(getImagesPerSlide());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    setIsAutoPlaying(true);
  };

  // Get current slide images
  const getCurrentSlideImages = () => {
    const startIndex = currentSlide * imagesPerSlide;
    return images.slice(startIndex, startIndex + imagesPerSlide);
  };

  // Get visible indicators (sliding window)
  const getVisibleIndicators = () => {
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);

    if (totalSlides <= maxVisible) {
      return Array.from({ length: totalSlides }, (_, i) => i);
    }

    let start = Math.max(0, currentSlide - half);
    let end = Math.min(totalSlides - 1, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(0, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <section id='gallery' className="bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        {/* Gallery Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-display font-light text-neutral-400">03</span>
            <div className="w-12 h-px bg-neutral-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-normal leading-[0.9] text-neutral-900 tracking-tight mb-6">
                Community
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-display font-light italic text-neutral-600 -mt-2 lg:-mt-4">
                  Gallery
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg font-body text-neutral-600 leading-relaxed max-w-md">
                Moments captured from our events, workshops, and community gatherings.
                Each image tells a story of connection, healing, and shared experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute top-[40%] -translate-y-1/2 -left-4 lg:-left-8 z-10">
            <button
              onClick={prevSlide}
              className="group w-12 h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            >
              <ChevronLeftIcon className="h-5 w-5 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300" />
            </button>
          </div>

          <div className="absolute top-[40%] -translate-y-1/2 -right-4 lg:-right-8 z-10">
            <button
              onClick={nextSlide}
              className="group w-12 h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            >
              <ChevronRightIcon className="h-5 w-5 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300" />
            </button>
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid gap-6 lg:gap-8" style={{
                    gridTemplateColumns: `repeat(${imagesPerSlide}, 1fr)`
                  }}>
                    {images
                      .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                      .map((image, index) => (
                        <div
                          key={image.id}
                          className="group cursor-pointer"
                          onClick={() => openModal(image)}
                        >
                          <div className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/5] hover:shadow-xl transition-all duration-500">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                                <div className="text-xs font-sans font-medium text-white/70 uppercase tracking-wider mb-2">
                                  {image.category}
                                </div>
                                <h3 className="text-base lg:text-lg font-serif text-white leading-tight">
                                  {image.title}
                                </h3>
                              </div>
                            </div>

                            {/* Index Number */}
                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <span className="text-xs font-display font-light text-white/70">
                                {String(slideIndex * imagesPerSlide + index + 1).padStart(2, '0')}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {getVisibleIndicators().map((slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 ${
                  slideIndex === currentSlide
                    ? 'w-8 h-2 bg-primary rounded-full'
                    : 'w-2 h-2 bg-neutral-300 rounded-full hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-sans font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            >
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isAutoPlaying ? 'bg-primary' : 'bg-neutral-400'
              }`} />
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </button>
          </div>
        </div>

      </div>

      {/* Image Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900/90 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative max-w-4xl w-full">
                  {selectedImage && (
                    <>
                      <div className="relative">
                        <img
                          src={selectedImage.src}
                          alt={selectedImage.title}
                          className="w-full h-auto rounded-2xl shadow-2xl"
                        />

                        {/* Close Button */}
                        <button
                          onClick={closeModal}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Image Info */}
                      <div className="mt-6 text-center">
                        <div className="text-sm font-sans font-medium text-white/70 uppercase tracking-wider mb-2">
                          {selectedImage.category}
                        </div>
                        <h3 className="text-2xl font-serif text-white">
                          {selectedImage.title}
                        </h3>
                      </div>
                    </>
                  )}
                </DialogPanel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default ImageGalleryComponent;

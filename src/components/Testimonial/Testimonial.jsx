import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Stephen Fry",
    text: "It's not all bad. Heightened self-consciousness, apartness, an inability to join in, physical shame and self-loathing—they are not all bad. Those devils have been my angels. Without them, I would never have disappeared into language, literature, the mind, laughter and all the mad intensities that made and unmade me.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dolly Parton",
    text: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Abraham Lincoln",
    text: "Folks are usually about as happy as they make their minds up to be.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10 font-family">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full rounded-md sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

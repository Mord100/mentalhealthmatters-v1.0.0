import React from "react";
import communityImage from "../../assets/website/team.jpg";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 py-10 lg:py-0 dark:text-white duration-300  ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={communityImage}
              alt="Community"
              className="w-full sm:max-w-[350px] rounded-md md:max-w-[500px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl mx-8 bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐ Community</p>
              <h1 className="font-bold">
                Join Our <span className="font-normal">Movement</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 font-sans sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-family font-bold"
              style={{ lineHeight: 1.2 }}
            >
              MENTAL <br/>
              WELLNESS BRAND &{" "}
              <br/>
              <span className="text-gray-600">Community</span>
            </h1>
            <p className=" text-lg" data-aos="fade-up" data-aos-delay="300">
              We are dedicated to fostering a supportive environment for mental
              health awareness and well-being. Our community provides resources,
              support, and a safe space for individuals navigating mental health
              challenges.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="bg-gray-800 text-white py-2 px-4 rounded-md"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

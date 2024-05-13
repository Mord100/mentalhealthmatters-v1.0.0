import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";

const servicesData = [
  {
    name: "Wellness Assessments",
    icon: <AiOutlineSafety className="text-4xl text-gray-800" />,
    link: "#",
    description:
      "Comprehensive assessments to evaluate your mental wellness and identify areas for improvement.",
    aosDelay: "0",
  },
  {
    name: "Peer Support Groups",
    icon: <BiSupport className="text-4xl text-gray-800" />,
    link: "#",
    description:
      "Join supportive groups facilitated by peers who understand and can offer empathy and encouragement.",
    aosDelay: "300",
  },
  {
    name: "Healthy Living Workshops",
    icon: <GiHealthNormal className="text-4xl text-gray-800" />,
    link: "#",
    description:
      "Engage in workshops promoting healthy habits, stress management techniques, and overall well-being practices.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black font-family dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold font-family sm:text-3xl text-gray-800 dark:text-white"
            >
              Explore Our Mental Wellness Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-lg"
            >
              Discover services designed to promote mental well-being and
              enhance your quality of life.
            </p>
          </div>

          {/* Services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{service.icon}</div>
                <h1 className="text-lg font-semibold">{service.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

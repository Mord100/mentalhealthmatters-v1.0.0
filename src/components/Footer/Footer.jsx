import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About Mental Health",
    link: "/#about",
  },
  {
    title: "Supportive Features",
    link: "/#features",
  },
  {
    title: "Our Works in Mental Health",
    link: "/#works",
  },
  {
    title: "Join Our Mental Health Community",
    link: "/#community",
  },
];
const HelpLinks = [
  {
    title: "24/7 Mental Health Support",
    link: "/#support",
  },
  {
    title: "Confidentiality Details",
    link: "/#confidentiality-details",
  },
  {
    title: "Terms & Conditions for Mental Health Services",
    link: "/#terms",
  },
  {
    title: "Privacy Policy for Mental Health Matters",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Mental Health Guides",
    link: "/#guides",
  },
  {
    title: "Mental Wellness Blogs",
    link: "/#blogs",
  },
  {
    title: "Subscribe to Our Mental Health Channel",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#363636] text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Mental Wellness Matters
            </h1>
            <p className="text-lg">
              Providing resources, support, and a safe space for individuals navigating mental health challenges. Let's break the stigma together!
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-gray-600 duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-gray-600  duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-gray-600  duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Discover
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-gray-600 space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help & Support
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-gray-600 space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-gray-600 space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

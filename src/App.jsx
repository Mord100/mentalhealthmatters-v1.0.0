import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blogs/Blog.jsx";
import Footer from "./components/Footer/Footer";
import Gallary from "./components/gallary/Gallary.jsx";
import Products from "./components/Products/Products.jsx";
import Team from "./components/Team/Team.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      {/* <BrandsLogo /> */}
      <Services />
      <Gallary/>
      <Products/>
      <Team/>
      <Testimonial />
      {/* <Blog/> */}
      <Footer />
    </div>
  );
};

export default App;

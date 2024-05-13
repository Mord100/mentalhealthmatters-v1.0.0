import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
    description:
      "Anxiety can be debilitating, but understanding its signs and symptoms is the first step toward managing it. Learn about effective coping strategies in this comprehensive guide.",
    author: "John Doe",
    date: "May 5, 2023",
  },
  {
    id: 2,
    image: Img2,
    title: "Breaking the Silence: Overcoming Stigma Around Depression",
    description:
      "Depression affects millions worldwide, yet stigma often prevents open discussion. Discover how breaking the silence can lead to greater understanding and support for those with depression.",
    author: "Jane Smith",
    date: "June 12, 2023",
  },
  {
    id: 3,
    image: Img3,
    title: "Self-Care for Mental Wellness: Tips for Prioritizing Your Well-Being",
    description:
      "In our fast-paced world, self-care is essential for maintaining mental wellness. Explore practical tips and strategies to prioritize self-care and nurture your mental health.",
    author: "Alex Johnson",
    date: "July 21, 2023",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 font-family dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-gray-800/50 py-2 pl-2 text-3xl font-semibold">
            Mental Health Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

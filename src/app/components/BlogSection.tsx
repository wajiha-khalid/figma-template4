'use client';
import Image from 'next/image';

function BlogSection() {
  const blogs = [
    {
      id: 1,
      img: "/images/Blog1.png",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", // Blue color for title
    },
    {
      id: 2,
      img: "/images/Blog2.png",
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#FB2E86", // Pink color for title
    },
    {
      id: 3,
      img: "/images/Blog3.png",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", // Blue color for title
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
      {/* Section Heading */}
      <h2 className="text-center text-[#151875] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
        Latest Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-screen-xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-start bg-white p-4 md:p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
          >
            {/* Blog Image */}
            <div className="relative w-full h-48 md:h-60 lg:h-72 rounded-lg overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Author & Date Section */}
            <div className="flex items-center space-x-2 mt-3">
              {/* Author Icon */}
              <Image
                src="/images/pen.png"
                alt="Pen"
                width={20}
                height={20}
                className="text-[#151875]"
              />
              <span className="text-[#151875] font-medium text-sm">{blog.author}</span>

              {/* Calendar Icon */}
              <Image
                src="/images/calendar.png"
                alt="Calendar"
                width={20}
                height={20}
                className="text-[#151875]"
              />
              <span className="text-[#151875] font-medium text-sm">{blog.date}</span>
            </div>

            {/* Blog Title */}
            <h3
              className="font-bold text-lg md:text-xl lg:text-2xl mt-3 leading-snug"
              style={{ color: blog.titleColor }}
            >
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-gray-600 text-sm md:text-base mt-2 leading-5">
              {blog.description}
            </p>

            {/* Read More */}
            <button
              className="text-sm md:text-base font-medium mt-3 underline text-pink-600 hover:text-pink-800 transition-all duration-200"
              style={{ color: blog.titleColor }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;

import React from "react";

const page = () => {
  const blogs = [
    {
      slug: "introduction-to-javascript",
      title: "Introduction to JavaScript: The Basics You Need to Know",
      description:
        "Explore the fundamentals of JavaScript, the most popular programming language for web development. Learn about variables, functions, loops, and how JavaScript powers the modern web.",
    },
    {
      slug: "responsive-web-design",
      title: "Mastering Responsive Web Design for Every Device",
      description:
        "Learn how to create responsive web designs that look great on all devices. This blog covers media queries, flexible layouts, and best practices for mobile-first design.",
    },
    {
      slug: "nodejs-introduction",
      title: "Getting Started with Node.js for Backend Development",
      description:
        "An introduction to Node.js, a powerful JavaScript runtime used for server-side development. Learn how to set up your first Node.js project and understand its asynchronous nature.",
    },
    {
      slug: "react-hooks-overview",
      title: "Understanding React Hooks: useState and useEffect",
      description:
        "A deep dive into React Hooks, focusing on useState and useEffect, two essential hooks for managing state and side effects in functional components.",
    },
    {
      slug: "mongodb-crud-tutorial",
      title: "MongoDB CRUD Operations: A Step-by-Step Guide",
      description:
        "Learn how to perform Create, Read, Update, and Delete operations in MongoDB, a popular NoSQL database. This tutorial provides code examples and practical usage.",
    },
    {
      slug: "seo-optimization-techniques",
      title: "SEO Optimization Techniques for Better Search Rankings",
      description:
        "Discover proven SEO techniques to improve your website's visibility in search engines. Topics include keyword research, on-page SEO, link building, and technical SEO strategies.",
    },
    {
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs. Flexbox: Which Layout System Should You Use?",
      description:
        "A comparison of CSS Grid and Flexbox, two powerful layout systems in modern CSS. Learn when and why to use each, with examples of common use cases.",
    },
    {
      slug: "jwt-authentication-express",
      title: "Implementing JWT Authentication in Express.js",
      description:
        "Secure your Express.js applications by implementing JWT (JSON Web Token) authentication. This blog walks you through the steps of setting up JWT for user authentication.",
    },
    {
      slug: "async-await-javascript",
      title: "Understanding Async/Await in JavaScript",
      description:
        "Simplify your asynchronous code with async/await in JavaScript. Learn how to write cleaner and more readable code while handling promises and asynchronous operations.",
    },
    {
      slug: "web-performance-optimization",
      title: "Web Performance Optimization: Tips to Speed Up Your Site",
      description:
        "Learn effective techniques for optimizing your website's performance. This blog covers lazy loading, image optimization, minification, and other ways to improve loading speed.",
    },
    {
      slug: "graphql-vs-rest-api",
      title: "GraphQL vs REST: Which API Style Should You Choose?",
      description:
        "An in-depth comparison of GraphQL and REST APIs. Understand the differences, benefits, and use cases to help you choose the right API style for your project.",
    },
    {
      slug: "tailwind-css-tutorial",
      title: "Tailwind CSS: A Beginner's Guide to Utility-First CSS",
      description:
        "Get started with Tailwind CSS, a utility-first CSS framework that makes it easy to build responsive and modern user interfaces. Learn how to style your web projects efficiently.",
    },
  ];

  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-4xl text-bold my-8'> Next Blog </h1>

      <div className='grid grid-cols-3 gap-6'>
        {blogs.map((blog) => (
          <div className='border py-6 px-4' key={blog.slug}>
            <h1 className='font-bold text-2xl'>{blog.title}</h1>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

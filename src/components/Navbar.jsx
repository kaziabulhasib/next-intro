import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "about", // Wrapped in quotes
      path: "/about",
    },
    {
      title: "contact", // Wrapped in quotes
      path: "/contact",
    },
    {
      title: "blog", // Wrapped in quotes
      path: "/blog",
    },
  ];

  return (
    <div className='flex justify-between px-24 bg-red-400 py-6 my-4'>
      <p>Next</p>
      <ul className='flex justify-evenly gap-6'>
        {links?.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

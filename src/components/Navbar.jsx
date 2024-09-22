"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
  ];

  return (
    <div className='flex justify-between px-24 bg-red-400 py-6 my-4'>
      <p>Next</p>
      <ul className='flex justify-evenly gap-6'>
        {links?.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${pathName === link.path && "text-white"}`}>
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

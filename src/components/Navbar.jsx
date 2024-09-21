import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='flex justify-between px-24 bg-red-400 py-6 my-4'>
      <p>Next</p>
      <ul className='flex justify-evenly gap-6'>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>contact</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

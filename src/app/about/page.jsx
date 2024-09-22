import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-4xl text-bold'> Next About </h1>
      <h1 className='text-center text-2xl text-medium  my-4'>
        <Link href='/about/team'>
          meet our <span className='underline text-red-500'>Team</span>
        </Link>
      </h1>
    </div>
  );
};

export default page;

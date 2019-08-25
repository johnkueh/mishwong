import React from 'react';
import Link from 'next/link';

const Card = ({ title, desc, link, bgColor }) => (
  <div
    style={{ backgroundColor: bgColor }}
    className="card w-100 md:w-48.5 mb-10 p-6 sm:p-12 h-128 lg:h-168 bg-blue-100"
  >
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-lg my-5">{desc}</p>
    <Link href="/project/[id]" as={link}>
      <a className="font-bold" href={link}>
        Read more
      </a>
    </Link>
  </div>
);

export default Card;

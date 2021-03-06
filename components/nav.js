import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <div className="flex items-center justify-between py-6">
    <div>
      <Link href="/">
        <a>Michele Wong</a>
      </Link>
    </div>
    <div className="flex">
      <Link href="/">
        <a href="/" className="link block py-4 pl-12">
          <div>Work</div>
        </a>
      </Link>
      <Link href="/about">
        <a href="/about" className="link block py-4 pl-12">
          <div>About</div>
        </a>
      </Link>
    </div>
    <style jsx>
      {`
        a > div {
          transition: all 0.2s ease-in-out;
        }
        a:hover > div {
          transform: translateY(-10px);
          transition: all 0.2s ease-in-out;
        }
      `}
    </style>
  </div>
);

export default Nav;

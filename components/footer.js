import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div className="flex justify-between pt-8 pb-16">
    <div>
      <Link href="mailto:michele257@gmail.com">
        <a target="new" className="mr-5" href="mailto:michele257@gmail.com">
          Email
        </a>
      </Link>
      <Link href="https://dribbble.com/mishwong">
        <a target="new" className="mr-5" href="https://dribbble.com/mishwong">
          Dribbble
        </a>
      </Link>
      <Link href="https://dribbble.com/mishwong">
        <a target="new" className="mr-5" href="https://dribbble.com/mishwong">
          LinkedIn
        </a>
      </Link>
    </div>
  </div>
);

export default Footer;

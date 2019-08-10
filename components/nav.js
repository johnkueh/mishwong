import React from "react";

const Nav = () => (
  <div className="flex items-center justify-between py-6">
    <div>Michele Wong</div>
    <div className="flex">
      <a href="#" className="link block py-4 pl-12">
        <div>Work</div>
      </a>
      <a href="#" className="link block py-4 pl-12">
        <div>About</div>
      </a>
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

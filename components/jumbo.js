import React from "react";

const Jumbo = ({ title, desc, imgUrl }) => (
  <div className="flex flex-wrap lg:flex-no-wrap items-center justify-between w-100 py-20">
    <div className="mb-12 md:w-full lg:mb-0 lg:w-1/2 lg:pr-4">
      <h1 className="text-6xl font-bold font-heading">{title}</h1>
      <p className="text-2xl">{desc}</p>
    </div>
    <div className="lg:w-1/2">
      <div className="img-wrapper">
        <img className="w-full" src={imgUrl} />
      </div>
    </div>
  </div>
);

export default Jumbo;

import React from 'react';

const Image = ({ src, caption }) => (
  <div className="my-8">
    <img className="mx-auto" alt={caption} src={src} />
    <div className="caption text-center my-5">{caption}</div>
    <style jsx>
      {`
        .caption {
          color: #888888;
        }
      `}
    </style>
  </div>
);

export default Image;

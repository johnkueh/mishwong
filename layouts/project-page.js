import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default ({ title, caption, background_color, cover_image, project_info, children }) => {
  return (
    <>
      <div style={{ backgroundColor: background_color }}>
        <div className="container mx-auto px-8">
          <Head title="Mishwong | Product designer" />
          <Nav />
          <div className="flex flex-wrap lg:flex-no-wrap items-center justify-between w-100 mt-20">
            <div className="md:w-full mb-0 text-center">
              <h1 className="text-5xl font-bold font-heading mb-3">{title}</h1>
              <p className="text-xl">{caption}</p>
              {cover_image ? (
                <img className="mt-10" alt="Cover" src={cover_image} />
              ) : (
                <div className="mb-20" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 xl:mt-20 xl:w-3/5">
        <Metadata metadata={project_info} />
        <div className="content mb-20" dangerouslySetInnerHTML={{ __html: children }} />
        <Footer />
      </div>
    </>
  );
};

const Metadata = ({ metadata = [] }) => {
  return (
    <div className="metadata md:float-right pt-16 md:p-16">
      {metadata.map(({ title, list_item = [] }, idx) => (
        <div key={title} className={`meta mb-5 pb-5 ${metadata.length !== idx + 1 && 'border-b'}`}>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <ul>
            {list_item.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Links = ({ links }) => {
  return (
    <ul>
      {Object.keys(links).map(label => (
        <li key={label}>
          <a href={links[label]}>{label}</a>
        </li>
      ))}
    </ul>
  );
};

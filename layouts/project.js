import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Project = ({ metadata = [], title, caption, bgColor, children }) => (
  <>
    <div style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-8">
        <Head title="Mishwong | Product designer" />
        <Nav />
        <div className="flex flex-wrap lg:flex-no-wrap items-center justify-between w-100 py-20">
          <div className="mb-12 md:w-full lg:mb-0 text-center">
            <h1 className="text-5xl font-bold font-heading mb-5">{title}</h1>
            <p className="text-xl">{caption}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-10 xl:mt-20 xl:w-3/5">
      <Metadata metadata={metadata} />
      <div className="content mb-20">{children}</div>
      <Footer />
    </div>
  </>
);

const Metadata = ({ metadata }) => {
  const titles = Object.keys(metadata);

  return (
    <div className="metadata md:float-right pt-16 md:p-16">
      {titles.map((title, idx) => (
        <div key={title} className={`meta mb-5 pb-5 ${titles.length !== idx + 1 && 'border-b'}`}>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <Links links={metadata[title]} />
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

export const withLayout = meta => props => <Project {...meta} {...props} />;

export default Project;

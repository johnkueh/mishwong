import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default ({ title, caption, background_color }) => {
  return ({ children }) => {
    return (
      <>
        <div style={{ backgroundColor: background_color }}>
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
          <div className="content mb-20">{children}</div>
          <Footer />
        </div>
      </>
    );
  };
};

import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="container mx-auto px-8">
      <Head title="About Mishwong" />
      <Nav />
      <div className="flex flex-wrap lg:flex-no-wrap items-center justify-center w-100 py-20">
        <div className="w-2/5">
          <div className="img-wrapper mb-12 lg:mb-0 lg:mr-16">
            <img alt="Profile" className="w-full" src="/static/about.png" />
          </div>
        </div>
        <div className="mb-12 md:w-full lg:mb-0 lg:pr-4">
          <h1 className="text-4xl font-bold font-heading mb-5">A bit about me</h1>
          <p className="text-xl mb-8">
            My journey as a designer is rather unusual. I taught myself design when I was 25 years
            old after working in finance for a few years because I wanted to develop skills and get
            a job where I could solve problems creatively.
          </p>
          <p className="text-xl mb-8">
            I believe that great work is a outcome of applying both the head 💡and heart ❤️.
          </p>
          <p className="text-xl">
            In my spare time you will find me going on long walks with my dog or throwing dinner
            hangs (my husband cooks Japanese food 🍣, I pour the drinks 🍷).
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

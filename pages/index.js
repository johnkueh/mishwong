import React, { useEffect, useState } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Jumbo from '../components/jumbo';
import Card from '../components/card';

const Home = () => {
  return (
    <div className="container mx-auto px-8">
      <Head title="Mishwong | Product designer" />
      <Nav />
      <Jumbo
        title="Hello."
        desc="I’m Michele, a product designer based in sunny Sydney. I enjoy creating
        user-centered and delightful digital products."
        imgUrl="/static/order-completed-5.png"
      />
      <div className="lg:my-16 flex flex-wrap justify-between">
        <Card
          bgColor="#DDEEFE"
          title="Whale Trail"
          desc="Whale Trail lets users find whales and see them come to live using AR technology."
          link="/project/whale-trail"
        />
        <Card
          bgColor="#FCEAE4"
          title="FrogID"
          desc="FrogID is a national citizen science project that is helping us learn more Whale Trail lets users find whales and see them come live using AR technology."
          link="/project/frog-id"
        />
        <Card
          bgColor="#F9F6CC"
          title="Project Title"
          desc="Whale Trail lets users find whales and see them come to live using AR technology."
          link="http://google.com"
        />
        <Card
          bgColor="#DEF5F1"
          title="Project Title"
          desc="FrogID is a national citizen science project that is helping us learn more Whale Trail lets users find whales and see them come live using AR technology."
          link="http://google.com"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

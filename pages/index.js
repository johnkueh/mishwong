import React from 'react';
import orderBy from 'lodash/orderBy';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Jumbo from '../components/jumbo';
import Card from '../components/card';
import { frontMatter } from './project/*.mdx';

const Home = () => {
  const cards = orderBy(frontMatter.filter(page => page.show_on_homepage), 'display_order');
  return (
    <div className="container mx-auto px-8">
      <Head title="Mishwong | Product designer" />
      <Nav />
      <Jumbo
        title="Hello."
        desc="I’m Michele, a product designer based in sunny Sydney!. I enjoy creating
        user-centered and delightful digital products."
        imgUrl="/static/order-completed-5.png"
      />
      <div className="lg:my-16 flex flex-wrap justify-between">
        {cards.map(page => (
          <Card
            key={page.__resourcePath}
            bgColor={page.background_color}
            title={page.title}
            desc={page.caption}
            link={formatPath(page.__resourcePath)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

function formatPath(p) {
  return p.replace(/\.mdx$/, '');
}

export default Home;

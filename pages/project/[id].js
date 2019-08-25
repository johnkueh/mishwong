import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../layouts/project-page';
import frontMatter from '../../static/content/*.md';

const Project = () => {
  const router = useRouter();
  const slug = router.query.id; 
  const page = frontMatter.filter(page => page.attributes.slug === slug)[0];

  return (
    <Layout {...page.attributes}>{page.html}</Layout>
  )  
}

export default Project;
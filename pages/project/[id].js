import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../../layouts/project-page';
import frontMatter from '../../static/content/*.md';

const Project = ({router}) => {
  
  const slug = router.query.id; 

  if(!slug) return null;

  const page = frontMatter.filter(page => page.attributes.slug === slug)[0];

  return (
    <Layout {...page.attributes}>{page.html}</Layout>
  )  
}

export default withRouter(Project);
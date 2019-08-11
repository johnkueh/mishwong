import React from 'react';
import { withRouter } from 'next/router';
import App, { Container } from 'next/app';
import ProjectLayout from '../layouts/project';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps, router } = this.props;
    const { route } = router;
    if (route.includes('/project/')) {
      return (
        <Container>
          <ProjectLayout>
            <Component {...pageProps} />
          </ProjectLayout>
        </Container>
      );
    }

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withRouter(MyApp);

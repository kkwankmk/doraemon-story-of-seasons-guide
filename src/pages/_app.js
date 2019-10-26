import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../modules/core/components/layout';

const theme = {
  colors: {
    primary1: '#fec748',
    primary2: '#d62139',
    primary3: '#aec33a',
    primary4: '#253f58'
  }
};

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Page from '../components/Page';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps , apollo} = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <Page>
          <Component {...pageProps} />
        </Page>
      </React.Fragment>
    );
  }
}

export default MyApp;
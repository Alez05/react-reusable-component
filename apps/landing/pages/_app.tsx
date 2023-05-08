import { Global } from '@myorg/atom';
import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to landing!</title>
      </Head>
      <main className="app">
        <Global />
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;

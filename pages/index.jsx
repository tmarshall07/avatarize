import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AvatarEditor from '../components/AvatarEditor';
import Header from '../components/Header';
import HeaderBar from '../components/home/HeaderBar';
import { H1, P, A, textFont, headingFont } from '../helpers/typography';
import Box from '../components/ui/Box';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderBar />
        <AvatarEditor />
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          T
        </a>
      </footer>

      <style jsx global>
        {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
          font-family: ${textFont};
        }
        body {
          margin: 0;
        }
        main {
          max-width: 1200px;
          padding: 30px;
          margin: auto;
        }
        p { font-size: 1.6rem; }
        h1 { font-size: 3.2rem; }
        h2 { font-size: 2.4rem; }
        h3 { font-size: 1.8rem; }
        h4 { font-size: 1.6rem; }
        h5 { font-size: 1.6rem; }
        img { display: block }
        h1, h2, h3, h4, h5 {
          font-family: "${headingFont}";
          letter-spacing: 0.05em;
        }
        p, a, li, ul {
          font-family: "${textFont}";
        }
      `}
      </style>
    </div>
  );
}

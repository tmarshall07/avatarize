import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 1rem 0;
`;

function Header() {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500,700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/ef00d42d41.js" crossOrigin="anonymous" />
        <script src="/libs/anime.min.js" />
        <script src="/libs/exif.js" />
      </Head>
      <style jsx global>
        {`
        html {
          font-size: 62.5%;
          font-family: Quicksand;
        }
        body {
          margin: 0;
        }
        p { font-size: 1.6rem; }
        h1 { font-size: 3.2rem; }
        h2 { font-size: 2.4rem; }
        h3 { font-size: 1.8rem; }
        h4 { font-size: 1.6rem; }
        h5 { font-size: 1.6rem; }
        img { display: block }
      `}
      </style>
    </Container>
  );
}

export default Header;

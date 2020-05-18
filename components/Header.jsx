import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';
import { headingFont, textFont } from '../helpers/typography';

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
        <link href={`https://fonts.googleapis.com/css2?family=${headingFont.replace(' ', '+')}&family=${textFont}&display=swap`} rel="stylesheet" />
        <script src="https://kit.fontawesome.com/ef00d42d41.js" crossOrigin="anonymous" />
      </Head>
    </Container>
  );
}

export default Header;

'use client';

import React from 'react';
import Box from '../ui/Box';
import { A, P } from '../../helpers/typography';
import { Button, H1 } from '@tannerjs/tailwind-theme-rizz/src/index';

function HeaderBar(props) {
  return (
    <Box margin="3rem 0 8rem 0">
      <Button>Hello world</Button>
      <H1>Avatizer</H1>
      <P textAlign="center" fontSize={18}>
        An avatar generator featuring&nbsp;
        <A href="https://www.instagram.com/pablostanley/" target="_blank" rel="noopener noreferrer">
          Pablo Stanley&apos;s
        </A>
        &nbsp;beautiful&nbsp;
        <A href="https://openpeeps.com" target="_blank" rel="noopener noreferrer">
          Open Peeps library
        </A>
        .
      </P>
    </Box>
  );
}

HeaderBar.propTypes = {};

export default HeaderBar;

'use client';

import React from 'react';
import { H1, Box, A, P } from '@tannerjs/tailwind-theme-rizz/src/index';

function HeaderBar() {
  return (
    <Box cn="flex flex-col gap-3">
      <H1 cn="text-center sm:text-[64px]">Avatizer</H1>
      <P cn="text-center">
        An avatar generator featuring the{' '}
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

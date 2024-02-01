'use client';

import React from 'react';
import { H1, Box, A, H4 } from '@tannerjs/tailwind-theme-rizz';

function HeaderBar() {
  return (
    <Box cn="flex flex-col gap-2 bg-primary-800 p-5">
      <H1 cn="text-secondary-400 text-center sm:text-[128px] text-[64px]">Avatars</H1>
      <H4 cn="text-primary-100 text-center opacity-75">
        An avatar generator with the{' '}
        <A cn="text-primary-100 italic" href="https://openpeeps.com" target="_blank" rel="noopener noreferrer">
          Open Peeps library
        </A>
        .
      </H4>
    </Box>
  );
}

HeaderBar.propTypes = {};

export default HeaderBar;

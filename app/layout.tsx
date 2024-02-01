/* eslint-disable camelcase */
import React from 'react';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { Metadata } from 'next';
import { Open_Sans, Supermercado_One, Rubik } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-open-sans' });
const supermercado = Supermercado_One({ subsets: ['latin'], weight: ['400'], variable: '--font-supermercado' });
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Avatar Labs',
  description: 'Make an avatar.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${supermercado.variable} ${openSans.variable} ${rubik.variable}`}>{children}</body>
    </html>
  );
}

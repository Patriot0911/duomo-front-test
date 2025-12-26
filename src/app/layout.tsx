import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import Layout from '../components/layout/Layout';
import { plusJakarta } from '../fonts/plusJakarta';
import { lora } from '@/fonts/lora';

import '@/styles/global.scss';

export const metadata: Metadata = {
  title: "Duomo | Test Task",
};

const RootLayout = ({ children, }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${lora.variable}`}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;

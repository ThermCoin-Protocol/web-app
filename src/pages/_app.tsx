import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ComponentType, ReactElement, ReactNode } from 'react';
import '@/styles/index.css';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

import React from 'react';

import SideNav from './SideNav';
import Footer from './footer';
import Navbar from './navbar';
import BottomNav from './BottomNav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface IDocsLayout {
  children: any;
  docs: any;
}

interface IDocsLayoutContext {
  docs: any;
  currentDoc: string;
  currentDocOrder: number;
  setCurrentDoc?: any;
  setCurrentDocOrder?: any;
}

export const DocsLayoutContext = React.createContext<IDocsLayoutContext>({
  docs: [],
  currentDoc: '',
  currentDocOrder: 0,
  setCurrentDoc: () => {},
  setCurrentDocOrder: () => {},
});

const DocsLayout: React.FC<IDocsLayout> = ({ children, docs }) => {
  const [currentDoc, setCurrentDoc] = React.useState('');
  const [currentDocOrder, setCurrentDocOrder] = React.useState(0);

  return (
    <>
      <DocsLayoutContext.Provider
        value={{
          docs,
          currentDoc,
          setCurrentDoc,
          currentDocOrder,
          setCurrentDocOrder,
        }}
      >
        <div className="flex min-h-screen flex-col text-primary">
          <Navbar />
          <div className="m-4 flex flex-grow flex-col md:mx-8 lg:mx-10 lg:flex-row">
            <div className="z-10 mb-4 h-fit lg:sticky lg:top-10 lg:mr-10 lg:mb-0 lg:w-64">
              <SideNav />
            </div>
            <div className="flex flex-col">
              <main className="grow">{children}</main>
              <div className="relative bottom-0">
                <BottomNav />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </DocsLayoutContext.Provider>
    </>
  );
};

export default DocsLayout;

import React from 'react';

import SideNav from './SideNav';
import Footer from './footer';
import Navbar from './navbar';
export interface IDocsLayout {
  children: any;
  docs: any;
}

interface IDocsLayoutContext {
  docs: any;
  currentDoc: string;
  setCurrentDoc?: any;
}

export const DocsLayoutContext = React.createContext<IDocsLayoutContext>({
  docs: [],
  currentDoc: '',
  setCurrentDoc: () => {},
});

const DocsLayout: React.FC<IDocsLayout> = ({ children, docs }) => {
  const [currentDoc, setCurrentDoc] = React.useState('');

  return (
    <>
      <DocsLayoutContext.Provider value={{ docs, currentDoc, setCurrentDoc }}>
        <div className="flex min-h-screen flex-col text-primary">
          <Navbar />
          <div className="m-4 flex flex-grow flex-col md:m-8 lg:m-10 lg:flex-row">
            <div className="sticky top-10 top-4 z-10 mb-4 h-fit sm:w-56 md:top-8 lg:mr-10 lg:mb-0 lg:w-64">
              <SideNav />
            </div>
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </div>
      </DocsLayoutContext.Provider>
    </>
  );
};

export default DocsLayout;

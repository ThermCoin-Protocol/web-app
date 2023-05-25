import Link from 'next/link';
import React from 'react';
import { DocsLayoutContext } from './DocsLayout';

export default function BottomNav() {
  return (
    <DocsLayoutContext.Consumer>
      {({ docs, setCurrentDoc, currentDocOrder }) => {
        console.log(currentDocOrder);
        return (
          <nav className="mt-10">
            <div className="flex w-full flex-row">
              {currentDocOrder === 0 && (
                <>
                  <div className="h-100 w-1/2"></div>

                  <div className="h-100 w-1/2">
                    <Link href={`/docs/${docs[currentDocOrder + 1].slug}`}>
                      <div
                        className="rounded--md flex h-full cursor-pointer items-center justify-end rounded-md border-2 border-primary p-4 hover:bg-primary hover:text-base-100"
                        onClick={() => {
                          setCurrentDoc(docs[currentDocOrder].slug);
                        }}
                      >
                        <div className="text-xl md:tracking-wide lg:tracking-wider xl:tracking-widest">
                          {docs[currentDocOrder + 1].frontmatter.title}
                        </div>
                        <div className="text-xl md:ml-4 md:ml-2">&#8594;</div>
                      </div>
                    </Link>
                  </div>
                </>
              )}
              {currentDocOrder === docs.length - 1 && (
                <>
                  <div className="h-100 w-1/2">
                    <Link href={`/docs/${docs[currentDocOrder - 1].slug}`}>
                      <div
                        className="flex h-full cursor-pointer items-center rounded-md border-2 border-primary p-4 hover:bg-primary hover:text-base-100"
                        onClick={() => {
                          setCurrentDoc(docs[currentDocOrder - 1].slug);
                        }}
                      >
                        <div className="mr-2 text-xl md:mr-4">&#8592;</div>
                        <div className="text-xl md:tracking-wide lg:tracking-wider xl:tracking-widest">
                          {docs[currentDocOrder - 1].frontmatter.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="h-100 w-1/2"></div>
                </>
              )}
              {currentDocOrder > 0 && currentDocOrder < docs.length - 1 && (
                <>
                  <div className="h-100 w-1/2">
                    <Link href={`/docs/${docs[currentDocOrder - 1].slug}`}>
                      <div
                        className="flex h-full cursor-pointer items-center rounded-tl-md rounded-bl-md border-2 border-primary p-4 hover:bg-primary hover:text-base-100"
                        onClick={() => {
                          setCurrentDoc(docs[currentDocOrder - 1].slug);
                        }}
                      >
                        <div className="mr-2 text-xl md:mr-4">&#8592;</div>
                        <div className="text-xl md:tracking-wide lg:tracking-wider xl:tracking-widest">
                          {docs[currentDocOrder - 1].frontmatter.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="h-100 w-1/2">
                    <Link href={`/docs/${docs[currentDocOrder + 1].slug}`}>
                      <div
                        className="flex h-full cursor-pointer justify-end rounded-tr-md rounded-br-md border-2 border-l-0 border-primary p-4 hover:bg-primary hover:text-base-100"
                        onClick={() => {
                          setCurrentDoc(docs[currentDocOrder + 1].slug);
                        }}
                      >
                        <div className="text-xl md:tracking-wide lg:tracking-wider xl:tracking-widest">
                          {docs[currentDocOrder + 1].frontmatter.title}
                        </div>
                        <div className="ml-2 text-xl md:ml-4">&#8594;</div>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </nav>
        );
      }}
    </DocsLayoutContext.Consumer>
  );
}

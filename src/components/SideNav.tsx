import Link from 'next/link';
import React from 'react';
import { DocsLayoutContext } from './DocsLayout';

export default function SideNav() {
  return (
    <DocsLayoutContext.Consumer>
      {({ docs, currentDoc, setCurrentDoc, setCurrentDocOrder }) => {
        return (
          <aside className="h-fit bg-base-100">
            <nav className="flex flex-col rounded-md border-2 border-primary">
              {docs.map((doc: any, index: number) => (
                <div
                  key={doc.slug}
                  onClick={() => {
                    setCurrentDocOrder(doc.frontmatter.order);
                    setCurrentDoc(doc.slug);
                  }}
                >
                  <Link href={`/docs/${doc.slug}`} key={doc.slug}>
                    <div
                      key={doc.slug}
                      className="cursor-pointer hover:text-primary"
                    >
                      {index === docs.length - 1 ? (
                        <div
                          key={doc.slug + 'div'}
                          className="cursor-pointer p-4 hover:bg-primary hover:text-base-100"
                        >
                          {doc.slug === currentDoc ? (
                            <div className="flex items-center justify-between">
                              <div className="text-xl">
                                {doc.frontmatter.title}
                              </div>
                              <div className="text-xl">&#8594;</div>
                            </div>
                          ) : (
                            <div className="text-xl">
                              {doc.frontmatter.title}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          key={doc.slug + 'div'}
                          className="cursor-pointer border-b-2 border-primary p-4 hover:bg-primary hover:text-base-100"
                        >
                          {doc.slug === currentDoc ? (
                            <div className="flex items-center justify-between">
                              <div className="text-xl">
                                {doc.frontmatter.title}
                              </div>
                              <div className="text-xl">&#8594;</div>
                            </div>
                          ) : (
                            <div className="text-xl">
                              {doc.frontmatter.title}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </aside>
        );
      }}
    </DocsLayoutContext.Consumer>
  );
}

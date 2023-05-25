import React from 'react';
import { NextPageWithLayout } from '../_app';
import DocsLayout, { DocsLayoutContext } from '@/components/DocsLayout';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface DocsPageProps {
  docs: any;
  currentDoc: string;
}

const markDownTailwindClassNamees = `
  grow
  max-w-4xl
  [&>br]:my-8
  [&>h1]:text-5xl font-bold tracking-wider
  [&>h2]:text-4xl font-bold tracking-wider
  [&>h3]:text-3xl font-bold tracking-wider
  [&>h4]:text-2xl font-bold tracking-wider
  [&>p]:text-xl
`;

const DocsPage: NextPageWithLayout<DocsPageProps> = ({ docs, currentDoc }) => {
  return (
    <DocsLayoutContext.Consumer>
      {({ setCurrentDoc, setCurrentDocOrder }) => {
        setCurrentDoc(currentDoc);
        setCurrentDocOrder(
          docs.findIndex((doc: any) => doc.slug === currentDoc),
        );
        let roadmap: any;
        if (currentDoc === 'roadmap') {
          roadmap = docs.find((doc: any) => doc.slug === currentDoc).frontmatter
            .phases;
        }

        return (
          <>
            {currentDoc === 'roadmap' && (
              <div className="  max-w-4xl">
                <h1 className="mb-8 text-5xl font-bold tracking-wider">
                  Roadmap
                </h1>
                {roadmap.map((phase: any, index: number) => (
                  <ol className="border-l-2 border-primary" key={index}>
                    <li>
                      <div className="flex-start flex items-center">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                        <p className="text-xl text-accent dark:text-primary">
                          {phase.content.date}
                        </p>
                      </div>
                      <div className="mb-6 ml-4 mt-2">
                        <h4 className="mb-1.5 text-4xl font-semibold">
                          {phase.content.title}
                        </h4>
                        <p className="mb-3 text-xl text-primary dark:text-primary">
                          {phase.content.text}
                        </p>
                      </div>
                    </li>
                  </ol>
                ))}
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: docs.find((doc: any) => doc.slug === currentDoc)
                  .contentHtml,
              }}
              className={markDownTailwindClassNamees}
            />
          </>
        );
      }}
    </DocsLayoutContext.Consumer>
  );
};

export default DocsPage;

DocsPage.getLayout = (page) => {
  return (
    <DocsLayout docs={page.props.children[0].props.docs}>{page}</DocsLayout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('documents'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getDocs = async () => {
  const files = fs.readdirSync(path.join('documents'));

  const docs = files.map(async (filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('documents', filename),
      'utf-8',
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString().replace(/\n/g, '<br />');

    return {
      slug,
      frontmatter,
      contentHtml,
    };
  });

  return docs;
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const docsPromise = await getDocs();

  const docs = await Promise.all(docsPromise);

  docs.sort((a: any, b: any) =>
    a.frontmatter.order > b.frontmatter.order ? 1 : -1,
  );

  return {
    props: {
      docs,
      currentDoc: slug,
    },
  };
};

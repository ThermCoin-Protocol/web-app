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

const markDownTailwindClasses = `
  max-w-4xl
  mx-auto
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
      {({ setCurrentDoc }) => {
        setCurrentDoc(currentDoc);
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: docs.find((doc: any) => doc.slug === currentDoc)
                .contentHtml,
            }}
            className={markDownTailwindClasses}
          />
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

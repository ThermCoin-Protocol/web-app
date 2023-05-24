import React from 'react';
import fs from 'fs';
import path from 'path';
import DocsLayout from '../../components/DocsLayout';
import matter from 'gray-matter';
import { NextPageWithLayout } from '../_app';
import { DocsLayoutContext } from '../../components/DocsLayout';

interface DocsProps {
  docs: any;
}

const Docs: NextPageWithLayout<DocsProps> = ({ docs }) => {
  console.log('docs: ', docs !== undefined); // "docs:  true
  return (
    <DocsLayoutContext.Consumer>
      {({ setCurrentDoc }) => {
        setCurrentDoc(''); // "TypeError: setCurrentDoc is not a function
        return (
          <h1 className="text-3xl font-bold tracking-wide">
            Welcome to the Docs
          </h1>
        );
      }}
    </DocsLayoutContext.Consumer>
  );
};

export default Docs;

Docs.getLayout = (page) => {
  return (
    <DocsLayout docs={page.props.children[0].props.docs}>{page}</DocsLayout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('documents'));

  const docs = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('documents', filename),
      'utf-8',
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  docs.sort((a: any, b: any) =>
    a.frontmatter.order > b.frontmatter.order ? 1 : -1,
  );

  return {
    props: {
      docs,
    },
  };
};

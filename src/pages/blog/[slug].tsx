import React from 'react';
import { sanityClient, urlFor } from '../../../sanity';
import { BlogPost } from '../../typings';
import { GetStaticPaths, GetStaticProps } from 'next';
import PortableText from 'react-portable-text';
import Image from 'next/image';
import { NextPageWithLayout } from '../_app';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Layout from '@/components/Layout';
import Head from 'next/head';
import CommentForm from '@/components/blog/commentForm';

interface BlogProps {
  post: BlogPost;
  comments: any[];
}

const serializers = {
  h1: (props: any) => (
    <h1 className="my-5 text-4xl font-bold sm:text-4xl" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="my-5 text-3xl font-bold sm:text-3xl" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="my-5 text-2xl font-bold sm:text-2xl" {...props} />
  ),
  normal: (props: any) => <p className="my-5 text-xl" {...props} />,
  link: (props: any) => <a className="text-blue-500" {...props} />,
  underline: (props: any) => (
    <span className="border-b-2 border-gray-800" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-4 text-xl italic"
      {...props}
    />
  ),
  // i need to add the ul and ordered list styles
  ul: (props: any) => (
    <ul className="m-4 list-inside list-disc text-xl" {...props} />
  ),
  ol: (props: any) => (
    <ol className="m-4 list-inside list-decimal text-xl" {...props} />
  ),
  li: (props: any) => <li className="m-4" {...props} />,
  youtube: (props: any) => {
    const { url } = props;
    if (!url) {
      return <div>Missing YouTube URL</div>;
    }
    const id = getYouTubeId(url);
    if (!id) {
      return <div>Missing YouTube ID</div>;
    }
    return (
      <div>
        <LiteYouTubeEmbed id={id} title="YouTube Embed" />
      </div>
    );
  },
};

const BlogPostPage: NextPageWithLayout<BlogProps> = ({
  post,
  comments,
}: BlogProps) => {
  return (
    <>
      <Head>
        <title>ThermCoin - {post.title}</title>
        <meta
          property="title"
          content={`ThermCoin - ${post.title}`}
          key="title"
        />
        <meta
          name="description"
          content="The ThermCoin protocol is a decentralized, open-source, and community-driven project that aims to create a new digital currency that is based on energy economics."
          key="desc"
        />
        <meta
          property="og:image"
          content={
            post.mainImage ? urlFor(post.mainImage).url()! : './logo.png'
          }
        />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
      </Head>
      <div className="flex flex-col text-primary">
        {post && (
          <div className="mx-auto max-w-4xl lg:mt-4">
            <div className="p-4 xl:p-0">
              <div className="mb-5 flex flex-wrap items-center justify-start">
                {post.categories.map((category) => (
                  <div
                    key={category._id}
                    className="justify-self-initial col-span-2 mb-2 mr-2 w-fit items-center justify-center rounded-md border-2 border-secondary py-1 px-2 text-lg font-bold text-secondary"
                  >
                    <div>{category.title}</div>
                  </div>
                ))}
              </div>
              <div className="mb-2 flex flex-col flex-wrap sm:flex-row sm:justify-between">
                <h1 className="text-left text-5xl font-bold text-primary sm:mb-5">
                  {post.title}
                </h1>
                <p className="mt-4 text-xl text-secondary">
                  Published {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            {post.mainImage && (
              <Image
                width="1600"
                height="1000"
                className="h-full w-full object-cover"
                src={urlFor(post.mainImage).url()!}
                alt="post photo"
                priority
              />
            )}
            <article className="mt-6 p-4 xl:p-0">
              <div className="mb-20">
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={post.body}
                  serializers={serializers}
                />
              </div>
              <CommentForm _id={post._id} />
            </article>
            {comments && comments.length > 0 && (
              <div className="mx-auto my-20 flex w-full max-w-4xl flex-col border-t-2 border-gray-800 px-4 pt-4">
                <h2 className="text-2xl font-bold">Comments</h2>
                {comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="mt-4 rounded border-2 border-primary p-4"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p className="text-xl font-bold">{comment.name}</p>
                        <p className="text-secondary">
                          {new Date(comment._createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2">{comment.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;
  const posts: BlogPost[] = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    author,
    categories[]->{
      _id,
      title
    },
    slug {
      current
    },
    mainImage{
      asset->{
        url
      },
    },
    publishedAt,
    body
  }`;

  const query2 = `*[_type == "comment" && post._ref == $id]{
    _id,
    name,
    comment,
    _createdAt
  } | order(_createdAt desc)`;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  const comments = await sanityClient.fetch(query2, { id: post._id });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      comments,
    },
    revalidate: 60,
  };
};

export default BlogPostPage;

BlogPostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

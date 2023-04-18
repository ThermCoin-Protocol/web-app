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

interface BlogProps {
  post: BlogPost;
}

const BlogPostPage: NextPageWithLayout<BlogProps> = ({ post }: BlogProps) => {
  return (
    <div className="flex flex-col text-gray-800">
      {post && (
        <div className="mx-auto max-w-4xl lg:mt-4">
          <div className="p-4 xl:p-0">
            <div className="mb-5 flex flex-wrap items-center justify-start">
              {post.categories.map((category) => (
                <div
                  key={category._id}
                  className="justify-self-initial col-span-2 mb-2 mr-2 w-fit items-center justify-center rounded-full border border-gray-800 py-1 px-2 font-medium text-gray-800"
                >
                  <div>{category.title}</div>
                </div>
              ))}
            </div>
            <div className="mb-2 flex flex-col flex-wrap sm:flex-row sm:justify-between">
              <h1 className="text-left text-5xl font-bold sm:mb-5">
                {post.title}
              </h1>
              <p className="mt-4 text-xl">
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
                serializers={{
                  h1: (props: any) => (
                    <h1 className="my-5 text-2xl font-bold" {...props} />
                  ),
                  h2: (props: any) => (
                    <h2 className="my-5 text-xl font-bold" {...props} />
                  ),
                  h3: (props: any) => (
                    <h3 className="my-5 text-lg font-bold" {...props} />
                  ),
                  normal: (props: any) => (
                    <p className="my-5 text-lg" {...props} />
                  ),
                  a: (props: any) => <a className="text-blue-500" {...props} />,
                  blockquote: (props: any) => (
                    <blockquote
                      className="border-l-4 border-gray-300 pl-4 text-lg italic"
                      {...props}
                    />
                  ),
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
                }}
              />
            </div>
          </article>
        </div>
      )}
    </div>
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
  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export default BlogPostPage;

BlogPostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

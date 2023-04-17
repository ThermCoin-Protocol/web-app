import React from "react";
import { sanityClient, urlFor } from "../../../sanity";
import {BlogPost} from "../../typings";
import { GetStaticPaths, GetStaticProps } from "next";
import PortableText from 'react-portable-text';
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";

interface BlogProps {
  post: BlogPost;
}

const BlogPostPage: NextPageWithLayout<BlogProps> = ({ post }: BlogProps) => {
  return (
    <div className="flex flex-col text-gray-800">
      {post && (
        <div className="max-w-4xl mx-auto lg:mt-4">
          <div className="p-4 xl:p-0">
            <div className="flex flex-wrap justify-start items-center mb-5">
              {
                post.categories.map((category) => (
                  <div key={category._id} className="col-span-2 justify-self-initial justify-center items-center font-medium py-1 px-2 rounded-full text-gray-800 border border-gray-800 w-fit mb-2 mr-2">
                    <div>{category.title}</div>
                  </div>
                ))
              }
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between mb-2 flex-wrap'>
              <h1 className="text-5xl text-left font-bold sm:mb-5">{post.title}</h1>
              <p className="text-xl mt-4">
                Published {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          {post.mainImage && <Image
            width="1600"
            height="1000"
            className="w-full h-full object-cover"
            src={urlFor(post.mainImage).url()!}
            alt="post photo"
            priority
          />}
          <article className="p-4 xl:p-0 mt-6">
            <div className="mb-20">
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl font-bold my-5" {...props} />
                  ),
                  h2: (props: any) => (
                    <h2 className="text-xl font-bold my-5" {...props} />
                  ),
                  h3: (props: any) => (
                    <h3 className="text-lg font-bold my-5" {...props} />
                  ),
                  normal: (props: any) => (
                    <p className="text-lg my-5" {...props} />
                  ),
                  a: (props: any) => (
                    <a className="text-blue-500" {...props} />
                  ),
                  blockquote: (props: any) => (
                    <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4" {...props} />
                  ),
                }}
              />
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

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
}

export default BlogPostPage;

BlogPostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

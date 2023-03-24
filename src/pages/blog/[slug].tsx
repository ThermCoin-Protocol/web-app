import React from "react";
import { sanityClient, urlFor } from "../../../sanity";
import {BlogPost} from "../../typings";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";

interface BlogProps {
  post: BlogPost;
}

const BlogPostPage: NextPageWithLayout<BlogProps> = ({ post }: BlogProps) => {
  return (
    <div className="flex flex-col text-gray-800">
      <h1 className="text-7xl mx-20 text-left">{post.title}</h1>
      <div className="flex-grow flex">
        <div className="hover:cursor-pointer hover:bg-gray-200 h-fit m-20">
            <div key={post._id} className="flex flex-col w-fit">
              <Image src={urlFor(post.mainImage).url()} width={1600} height={1000}        
                className="absolute w-full object-cover"    
              />
              <h2>{post.title}</h2>
            </div>
        </div>
      </div>
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
  };
}

export default BlogPostPage;

BlogPostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

import React from "react";
import { sanityClient, urlFor } from "../../../sanity";
import {BlogPost} from "../../typings";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

interface BlogProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogProps) {
  console.log(post);
  return (
    <div>
      <Navbar />
      <h1>{post.title}</h1>
      <Image src={urlFor(post.mainImage).url()} width={100} height={100}            
      />
      <Footer />
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
import React from "react";
import { sanityClient, urlFor } from "../../../sanity";
import {BlogPost} from "../../typings";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";

interface BlogProps {
  posts: [BlogPost];
}

const BlogPage: NextPageWithLayout<BlogProps> = ({ posts }: BlogProps) => {
  return (
    <div className="flex flex-col text-gray-800">
      <h1 className="text-7xl mx-20 text-left">Blog</h1>
      <div className="flex-grow flex">
        {posts.map((post, index) => (
          <div key={index} className="hover:cursor-pointer hover:bg-gray-200 h-fit m-20">
            <Link href={`/blog/${post.slug.current}`}>
              <div key={post._id} className="flex flex-col w-fit">
                <Image src={urlFor(post.mainImage).url()} width={1600} height={1000}  
                  className="absolute w-full object-cover"          
                />
                <h2>{post.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;

BlogPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
}
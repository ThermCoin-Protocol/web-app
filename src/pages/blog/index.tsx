import React from "react";
import { sanityClient, urlFor } from "../../../sanity";
import {BlogPost} from "../../typings";
import { GetServerSideProps } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  posts: [BlogPost];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div className="flex h-screen flex-col text-gray-800">
      <Navbar />
      <h1 className="text-7xl mx-20 text-left">Blog</h1>
      <div className="flex-grow flex">
        {posts.map((post) => (
          <div className="hover:cursor-pointer hover:bg-gray-200 h-fit m-20">
            <Link href={`/blog/${post.slug.current}`}>
              <div key={post._id} className="flex flex-col w-fit">
                <Image src={urlFor(post.mainImage).url()} width={300} height={300}            
                />
                <h2>{post.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
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
import React from "react";
import { sanityClient, urlFor } from "../../../sanity";
import {BlogPost} from "../../typings";
import { GetServerSideProps } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

interface BlogProps {
  posts: [BlogPost];
}

export default function Blog({ posts }: BlogProps) {
  console.log(posts);
  return (
    <div>
      <Navbar />
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <Image src={urlFor(post.mainImage).url()} width={100} height={100}            
          />
        </div>
      ))}
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
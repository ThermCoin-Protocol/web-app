import React, { useEffect, useState } from "react";
import { sanityClient } from "../../../sanity";
import {BlogPost, Category} from "../../typings";
import { GetServerSideProps } from "next";
// import Image from "next/image";
import Link from "next/link";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import CategorySelect from "@/components/blog/category";

interface BlogProps {
  posts: BlogPost[];
  categories: Category[];
}

const BlogPage: NextPageWithLayout<BlogProps> = ({ posts, categories }: BlogProps) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [change, setChange] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    // check if category is already selected and remove it
    let check = false;
    selectedCategories.map((selectedCategory: Category, index: number) => {
      if (selectedCategory.title === category) {
        const temp: Category[] = selectedCategories;
        temp.splice(index, 1);
        setSelectedCategories(temp);
        setChange(!change);
        check = true;
      }
    });
    if (check) {
      return;
    }
    const temp: Category[] = selectedCategories;
    temp.push({title: category, _id: ""});
    setChange(!change);
    setSelectedCategories(temp);
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredPosts(posts);
      return;
    } else {
      const temp: BlogPost[] = [];
      posts.map((post: BlogPost) => {
        post.categories.map((category: Category) => {
          selectedCategories.map((selectedCategory: Category) => {
            if (category.title === selectedCategory.title) {
              temp.push(post);
            }
          });
        });
      });
      setFilteredPosts(temp);
    }
    console.log("useEffect: ", selectedCategories);
  }, [selectedCategories, change]);

  return (
    <div className="flex flex-col text-gray-800 mx-10 lg:mx-20 md:mx-20">
      {/* <h1 className="text-7xl text-left mb-10">Blog</h1> */}
      {/* <div className="self-center xl:w-3/5 cursor-pointer h-fit content-center mb-10 border border-black rounded-3xl p-10">
        <Link href={`/blog/${posts[0].slug.current}`}>
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-3xl text-left">{posts[0].title}</h2>
              <p className="text-lg text-left">{posts[0].publishedAt}</p>
            </div>
            <div className="flex flex-row">
              {posts[0].categories.map((category: Category, index: number) => (
                <p key={index} className="text-lg text-left">{category.title}</p>
              ))}
            </div>
            <p className="text-lg text-left">{posts[0].publishedAt}</p>
            
          <Image src={urlFor(posts[0].mainImage).url()} width={1600} height={1000}  
            className="absolute w-full object-cover"          
          />
          </div>
        </Link>
      </div> */}
      <div className="grid lg:grid-cols-5">
        <div className=" border-b border-black lg:border-base-100 col-span-5 lg:col-span-1 sticky top-0 lg:top-20 z-10 bg-base-100 py-5 mb-5 lg:py-0 h-fit">
          <h2 className="text-3xl text-left">Categories</h2>
          <CategorySelect categories={categories} handleCategoryChange={handleCategoryChange} />
        </div>
        <div className="col-span-5 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mb-10">
          {filteredPosts.map((post, index) => (
            <div key={index} className="cursor-pointer h-fit">
              <Link href={`/blog/${post.slug.current}`}>
                <div key={post._id} className="flex flex-col w-full border border-black rounded-3xl p-10 h-80 hover:bg-[#F5F5F5]">
                  {/* <Image src={urlFor(post.mainImage).url()} width={1600} height={1000}  
                    className="absolute w-full object-cover"          
                  /> */}
                  <div className="w-full relative flex justify-between">

                    <h2 className="text-xl">{post.title}</h2>
                    <p className="text-lg text-left">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="border-b border-black w-full my-5">
                    {post.categories.map((category: Category, index: number) => (
                      <p key={index} className="text-lg text-left">{category.title}</p>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "post"]{
    title,
    slug,
    categories[]->{
      _id,
      title
    },
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  }`;
  const categoryQuery = '*[_type == "category"]{title}';
  const posts = await sanityClient.fetch(query);
  const categories = await sanityClient.fetch(categoryQuery);
  return {
    props: {
      posts,
      categories,
    },
  };
}

export default BlogPage;

BlogPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
}

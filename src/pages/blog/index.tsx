import React, { useEffect, useState } from "react";
import { sanityClient } from "../../../sanity";
import {BlogPost, Category} from "../../typings";
import { GetServerSideProps } from "next";
import Link from "next/link";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import CategorySelect from "@/components/blog/category";
import cn from "classnames";

interface BlogProps {
  posts: BlogPost[];
  categories: Category[];
}

const BlogPage: NextPageWithLayout<BlogProps> = ({ posts, categories }: BlogProps) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [change, setChange] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [small, setSmall] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSmall(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    });
  }, []);

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

  const handleShow = () => {
    setShow(!show);
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
    <div className="flex flex-col text-gray-800 px-4 md:px-10">
      <div className="grid lg:grid-cols-5">
        {small ? <div tabIndex={0} className={cn("border-b border-gray-800 lg:border-base-100 col-span-5 lg:col-span-1 sticky top-0 lg:top-20 z-10 bg-base-100 py-5 mb-5 lg:py-0 h-fit collapse collapse-arrow", {"collapse-close": !show}, {"collapse-open": show})}>
          <h2 className="text-3xl text-left collapse-title" onClick={() => handleShow()}>Categories</h2>
          <div className="collapse-content">
            <CategorySelect categories={categories} handleCategoryChange={handleCategoryChange} />
          </div>
        </div> :
        <div className="border-b border-gray-800 lg:border-base-100 col-span-5 lg:col-span-1 sticky top-0 lg:top-20 z-10 bg-base-100 py-5 mb-5 lg:py-0 h-fit">
          <h2 className="text-3xl text-left">Categories</h2>
          <CategorySelect categories={categories} handleCategoryChange={handleCategoryChange} />
        </div>}
        <div className="col-span-5 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mb-10">
          {filteredPosts.map((post, index) => (
            <div key={index} className="cursor-pointer h-fit">
              <Link href={`/blog/${post.slug.current}`}>
                <div key={post._id} className="flex flex-col w-full border border-gray-800 rounded-3xl p-5 md:p-10 h-80 hover:bg-[#F5F5F5] group">
                  <div className="w-full relative flex justify-between flex-wrap">
                    <h2 className="text-xl mb-2">{post.title}</h2>
                    <p className="text-lg text-left">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="border-b border-gray-800 w-full my-5 flex flex-wrap">
                    {post.categories.map((category: Category, index: number) => {
                      if (index > 0) {
                        return (
                          <>
                            <div key={index} className="justify-self-initial justify-center items-center font-medium py-1 rounded-full text-gray-800 w-fit mb-2 mr-2">
                              /
                            </div>
                            <div key={index} className="justify-self-initial justify-center items-center font-medium py-1 rounded-full text-gray-800 w-fit mb-2 mr-2">
                              {category.title}
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <div key={index} className="justify-self-initial justify-center items-center font-medium py-1 rounded-full text-gray-800 w-fit mb-2 mr-4">
                            {category.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="flex-grow flex place-items-center">
                    <p className="text-lg text-left">{post.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <a href="#_" className="relative inline-flex items-center px-10 py-3 overflow-hidden text-lg font-medium text-gray-800 border border-gray-800 rounded-full">
                      <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 hover:h-full top-1/2 duration-400 ease"></span>
                      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="relative">Read More</span>
                    </a>
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
    publishedAt,
    description,
    body
  } | order(publishedAt desc)`;
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

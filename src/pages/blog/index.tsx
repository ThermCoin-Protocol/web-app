import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../../sanity';
import { BlogPost, Category } from '../../typings';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import type { NextPageWithLayout } from '../_app';
import Layout from '@/components/Layout';
import CategorySelect from '@/components/blog/category';
import cn from 'classnames';
import Head from 'next/head';

interface BlogProps {
  posts: BlogPost[];
  categories: Category[];
}

const BlogPage: NextPageWithLayout<BlogProps> = ({
  posts,
  categories,
}: BlogProps) => {
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
    window.addEventListener('resize', () => {
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
    temp.push({ title: category, _id: '' });
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
    console.log('useEffect: ', selectedCategories);
  }, [selectedCategories, change]);

  return (
    <>
      <Head>
        <title>ThermCoin - Blog</title>
        <meta property="title" content="ThermCoin - Blog" key="title" />
        <meta
          name="description"
          content="The ThermCoin protocol is a decentralized, open-source, and community-driven project that aims to create a new digital currency that is based on energy economics."
          key="desc"
        />
        <meta property="og:image" content="./logo.png" />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
      </Head>
      <div className="flex flex-col px-4 text-gray-800 md:px-10">
        <div className="grid lg:grid-cols-5">
          {small ? (
            <div
              tabIndex={0}
              className={cn(
                'collapse-arrow collapse sticky top-0 z-10 col-span-5 mb-5 h-fit border-b border-gray-800 bg-base-100 py-5 lg:top-20 lg:col-span-1 lg:border-base-100 lg:py-0',
                { 'collapse-close': !show },
                { 'collapse-open': show },
              )}
            >
              <h2
                className="collapse-title text-left text-3xl"
                onClick={() => handleShow()}
              >
                Categories
              </h2>
              <div className="collapse-content">
                <CategorySelect
                  categories={categories}
                  handleCategoryChange={handleCategoryChange}
                />
              </div>
            </div>
          ) : (
            <div className="sticky top-0 z-10 col-span-5 mb-5 h-fit border-b border-gray-800 bg-base-100 py-5 lg:top-20 lg:col-span-1 lg:border-base-100 lg:py-0">
              <h2 className="text-left text-3xl">Categories</h2>
              <CategorySelect
                categories={categories}
                handleCategoryChange={handleCategoryChange}
              />
            </div>
          )}
          <div className="col-span-5 mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-4 lg:gap-10">
            {filteredPosts.map((post, index) => (
              <div key={post._id} className="cursor-pointer">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="group flex h-full w-full flex-col rounded-3xl border border-gray-800 p-5 hover:bg-[#F5F5F5] md:p-10">
                    <div className="relative flex w-full flex-wrap justify-between">
                      <h2 className="mb-2 text-xl">{post.title}</h2>
                      <p className="text-left text-lg">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="my-5 flex w-full flex-wrap border-b border-gray-800">
                      {post.categories.map(
                        (category: Category, index: number) => {
                          if (index > 0) {
                            return (
                              <>
                                <div
                                  key={category._id}
                                  className="justify-self-initial mb-2 mr-2 w-fit items-center justify-center rounded-full py-1 font-medium text-gray-800"
                                >
                                  /
                                </div>
                                <div
                                  key={index}
                                  className="justify-self-initial mb-2 mr-2 w-fit items-center justify-center rounded-full py-1 font-medium text-gray-800"
                                >
                                  {category.title}
                                </div>
                              </>
                            );
                          } else {
                            return (
                              <div
                                key={index}
                                className="justify-self-initial mb-2 mr-4 w-fit items-center justify-center rounded-full py-1 font-medium text-gray-800"
                              >
                                {category.title}
                              </div>
                            );
                          }
                        },
                      )}
                    </div>
                    <div
                      className="flex flex-grow place-items-center"
                      key={post._id + '1'}
                    >
                      <p className="text-left text-lg">{post.description}</p>
                    </div>
                    <div
                      className="flex justify-end pt-5 sm:pt-0"
                      key={index + '2'}
                    >
                      <a
                        href="#_"
                        className="relative inline-flex items-center overflow-hidden rounded-full border border-gray-800 px-10 py-3 text-lg font-medium text-gray-800"
                      >
                        <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-indigo-600 opacity-100 transition-all hover:h-full"></span>
                        <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-2">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
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
    </>
  );
};

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
};

export default BlogPage;

BlogPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

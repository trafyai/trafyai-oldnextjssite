import React from 'react'
import BlogSingleData from '@api/blog/BlogSingleData';
import BlogPage from '@components/blog-page/blog-single/BlogSingle'
// import Open from './opengraph-image'
import Image from './opengraph-image';

import Head from 'next/head';
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.slug
 
  
  const product = BlogSingleData.find(blog =>blog.id === id);


  return {
    title: product.title,
    description:product.metaDescription,
    // image: {
    //   url:'./opengraph-image.js',
    // },
    openGraph: {
      title: product.title,
      description:product.metaDescription,
      image: product.metaImage,
    },
  }
}

const page = ({params}) => {
  const {slug} = params;
  const BlogData = BlogSingleData.find(blog =>blog.id === slug);

  return (
    <div>
     <Head>
     <meta property="og:image" content={Image} />
     </Head>
     {/* <Open/> */}
     
      <BlogPage {...BlogData} />
    </div>
  )
}

export default page
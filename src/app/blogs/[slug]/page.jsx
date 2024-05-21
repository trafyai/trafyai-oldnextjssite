import React from 'react';
import BlogSingleData from '@api/blog/BlogSingleData'; // Assuming this fetches blog data
import BlogPage from '@components/blog-page/blog-single/BlogSingle'; // Blog post component

import Head from 'next/head';
export async function generateMetadata({ params, searchParams }, parent) {
  const id= params.slug;
  const product = BlogSingleData.find(blog => blog.id === id);

  return {
    title: product.title,
    description: product.metaDescription,
    metadataBase: `https://trafyai.com/blogs/${product.id}`,
    type: 'article',
    // image: product.metaImage,
    openGraph: {
      title: product.title,
      description: product.metaDescription,
         
    },
  }
}

const Page = ({ params }) => {
  const id = params.slug;
  const BlogData = BlogSingleData.find(blog => blog.id === id);

  return (
    <div>
       {/* <Head>
     <meta property="og:image" content={BlogData.metaImage} />
     </Head> */}
      <BlogPage {...BlogData} />
    </div>
  );
};

export default Page;
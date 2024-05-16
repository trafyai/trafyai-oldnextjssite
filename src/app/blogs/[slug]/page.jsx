import React from 'react'
import BlogSingleData from '@api/blog/BlogSingleData';
import BlogPage from '@components/blog-page/blog-single/BlogSingle'

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.slug
 
  
  const product = BlogSingleData.find(blog =>blog.id === id);


  return {
    title: product.title,
    description:product.metaDescription,
    openGraph: {
      title: product.title,
      description:product.metaDescription,
      images: product.metaImage,
    },
  }
}

const page = ({params}) => {
  const {slug} = params;
  const BlogData = BlogSingleData.find(blog =>blog.id === slug);

  return (
    <main>
     
      <BlogPage {...BlogData} />
    </main>
  )
}

export default page
import React from 'react'
import BlogSingleData from '@api/blog/BlogSingleData';
import BlogPage from '@components/blog-page/blog-single/BlogSingle'

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.slug
 
  // fetch data
  const product = BlogSingleData.find(blog =>blog.id === id);
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    // title: product.title,
    // description:product.metaDescription,
    // openGraph: {
    //   title: product.title,
    //   description:product.metaDescription,
    //   images: [product.metaImage],
    // },
  }
}

const page = ({params}) => {
  const {slug} = params;
  const BlogData = BlogSingleData.find(blog =>blog.id === slug);
  // console.log(` ${BlogData.id}`);
  return (
    <main>
     \
      <BlogPage {...BlogData} />
    </main>
  )
}

export default page
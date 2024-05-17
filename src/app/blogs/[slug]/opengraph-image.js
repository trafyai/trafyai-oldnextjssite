import { ImageResponse } from 'next/og'
import BlogSingleData from '@api/blog/BlogSingleData';
// import Image from 'next/image';

// export const alt = 'About Acme'
// export const size = {
//   width: 1200,
//   height: 630,
// }
// export const contentType = 'image/png'
 
// export default async function Image({ params }) {


// const id = params.slug
 
  
//   const post = BlogSingleData.find(blog =>blog.id === id);
 
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 48,
//           background: 'black',
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Image src={post.metaImage}/>
//       </div>
//     ),
//     {
//       ...size,
//     }
//   )
// }

export default function Image({ params }) {
    if (!params) return null;
   const id = params.slug;
   const post = BlogSingleData.find(blog =>blog.id === id);
   return (
       <Image src={post.metaImage}/>
   )

  }
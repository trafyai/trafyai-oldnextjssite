import { ImageResponse } from 'next/og'

export const alt = 'blog'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }) {


// const id = params.slug
 
  
//   const post = BlogSingleData.find(blog =>blog.id === id);

const post = await fetch(`https://trafyai.com/blogs/${params.slug}`).then((res) =>
    res.json()
  )
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={post.metaImage} width="100"/>
      </div>
    ),
    {
      ...size,
    }
  )
}


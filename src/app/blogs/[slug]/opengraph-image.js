import { ImageResponse } from 'next/og'
import BlogSingleData from '@api/blog/BlogSingleData'; // Assuming this fetches blog data
 
// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'


export default async function Image({ params }) {
    const id= params.slug;
    const product = BlogSingleData.find(blog => blog.id === id);
   
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: product.bgcolor,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           padding:'40px'
            
          }}
        >
        <h2 style={{
            fontSize:'60px',
            fontWeight:'bold',
            fontFamily:'Inter',
            textAlign:'center',
            lineHeight:'150%'
            
            }}>
                

        {product.title}

        </h2>
        

        
        
        </div>
      ),
      {
        ...size,
      }
    )
  }
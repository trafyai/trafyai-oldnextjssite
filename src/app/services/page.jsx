import React from 'react';
import Services from '@components/service-page/ServicePage';
import Banner from '@public/assets/Images/landing-page/banner-image.png';

export const metadata = {
  metadataBase: new URL("https://trafyai.com/services"),
  title: {
    default: 'Thinking of Growing your Business? think trafy',
    template:'%s | Thinking of Growing your Business? think trafy    '
  },
  openGraph:{
    title: 'Thinking of Growing your Business? think trafy',
    description: 'Your trusted partner for strategic growth, empowering brands to unlock their full potential and achieve targeted growth.',
    images:[Banner]
  }
  
}
const page = () => {
  return (
    <div>
        <Services/>
    </div>
  )
}

export default page
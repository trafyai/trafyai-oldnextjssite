import '@styles/globals.css';
import Header from '@components/common/header/header';
import Footer from '@components/common/footer/Footer';
import Banner from '@public/assets/Images/landing-page/banner-image.png';

export const metadata = {
 
  title: {
    default: 'Interactive Learning, Next Generation Courses.',
    template:'%s | trafy'
  },
  openGraph:{
    title: 'Interactive Learning, Next Generation Courses.',
    description: 'Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance',
    images:[Banner]
  },
  icons: {
    icon: '/Fav Icon.png'
  }
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}

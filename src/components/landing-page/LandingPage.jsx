import LandingHero from '@components/landing-page/LandingHero';
import LandingLearning from "@components/landing-page/LandingLearning";
import LandingExplore from "@components/landing-page/LandingExplore";
import LandingOptimised from "@components/landing-page/LandingOptimised";
import LandingReview from "@components/landing-page/LandingReview";
import LandingNewsletter from "@components/landing-page/LandingNewsletter";
import LandingBetterTogether from "@components/landing-page/LandingBetterTogether";

export default function landingPage(){
   
    return(
        <>
        {/* <Helmet>
            <title>trafy | Interactive Learning, Next Generation Courses.</title>
            <link rel="canonical" href="https://trafyai.com/"/>
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance" />
           
            <meta property="og:image" content={Banner} />
            <meta property="og:image:height" content="600"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:url" content="https://trafyai.com/"/>
            <meta property="og:title" content="Trafy | Interactive Learning, Next Generation Courses."/>
            <meta property="og:description" content="Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance"/> 
            
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Trafy" />

            <meta name="twitter:site" content="https://x.com/trafyai"/>
    </Helmet> */}
        <LandingHero/>
        <LandingLearning/>
        <LandingExplore/>
        <LandingOptimised/>
        <LandingBetterTogether/>
        <LandingReview/>
        <LandingNewsletter/>
        </>
    )
}
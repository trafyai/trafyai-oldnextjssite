import LandingHero from '@components/landing-page/LandingHero';
import LandingLearning from "@components/landing-page/LandingLearning";
import LandingExplore from "@components/landing-page/LandingExplore";
import LandingOptimised from "@components/landing-page/LandingOptimised";
import LandingReview from "@components/landing-page/LandingReview";
import LandingNewsletter from "@components/landing-page/LandingNewsletter";
import LandingBetterTogether from "@components/landing-page/LandingBetterTogether";
import '@styles/landing-page/LandingPage.css'

export default function landingPage(){
   
    return(
        <>
       
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
import Halfstar from '@public/assets/Images/comman/common/star_half.svg';
import Fullstar from '@public/assets/Images/comman/common/star_full.png';

const courseData = [
    {
        id:"uiux-course",
        title: "UI/UX Designing",
        description: "Learn core design principles, research techniques, and prototyping for seamless user experiences and modern trends.",
        bgColor:"#d9cefb",
        label: {
            one: "Wireframing",
            two: "Prototyping",
            three: "Spatial",
            four: "Responsive",
        },
        rating: "4.8",
        level: "Certification",
        duration: "6 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
  
    {
        id:"digital-marketing-course",
        title: "Digital Marketing",
        description: "Master digital marketing,  SEO, social media, content creation. Hands-on projects for real-world skills.",
        bgColor:"#fad5a4",       
        label: {
            one: "PPC’s",
            two: " Retarget",
            three: "Email",
            four: "Campaigns",
        },
        rating: "4.5",
        level: "Certification",
        duration: "4 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
   
    {
        title: "Artificial Intelligence",
        description: "Dive into emerging AI, learn core principles, its applications, use cases, and create AI projects.",
        bgColor:"#cefbdb",
        label: {
            one: "Machine Learning",
            two: "Deep Learning",
            three: "Neural Network"
        },
        rating: "4.7",
        level: "Certification",
        duration: "8 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
];

export default courseData;

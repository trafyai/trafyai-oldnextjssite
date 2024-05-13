import EmailMarketing from '@public/assets/Images/service-page/Email Marketing.svg';
import ContentMarketing from '@public/assets/Images/service-page/Content Marketing.svg';
import SocialMediaMarketing from '@public/assets/Images/service-page/Social Media Marketing.svg';
import DigitalMarketing from '@public/assets/Images/service-page/Digital Marketing.svg';
import InboundMarketing from '@public/assets/Images/service-page/Inbound Marketing.svg';
import PayPerClick from '@public/assets/Images/service-page/pay per click.svg';
import Seo from '@public/assets/Images/service-page/SEO (1).svg';
import Sales from '@public/assets/Images/service-page/sales.svg';


const serviceData=[
    
        { 
            id: 1, 
            title: "Email Marketing", 
            content: {
                heading: "Email Marketing",
                image:EmailMarketing,
                alt:"Email Marketing",
                description: "Build your community with our personalized email marketing services that enhances your brand communication and nurture lasting customer relationships.",
                subheading: "Features:",
                contents: [
                    "Email Automation",
                    "A/B Testing",
                    "Integrations",
                    "Reporting and analysis"
                ]
            } 
        },
        { 
            id: 2, 
            title: "SEO", 
            content: {
                heading: "SEO",
                image:Seo,
                alt:"SEO",
                description: "Gain Visibility at the top of search engine result page with the help of our SEO services and Boost your sales through the increased targeted traffic to your site.",
                subheading: "Features:",
                contents: [
                    "Keyword research and analysis",
                    "Onpage SEO",
                    "Technical SEO",
                    "Competitive Analysis"
                ]
            } 
        },
        { 
            id: 3, 
            title: "Content Marketing", 
            content: {
                heading: "Content Marketing",
                image:ContentMarketing,
                alt:"Content Marketing",
                description: "Connect with your audiences with our compelling content marketing strategies and elevate your online presence with captivating blog posts and social media contents.",
                subheading: "Features:",
                contents: [
                    "Content Strategy Development",
                    "SEO Friendly Content",
                    "Content Repurposing",
                    "Data and analytics"
                ]
            } 
        },
        { 
            id: 4, 
            title: "Sales", 
            content: {
                heading: "Sales",
                image:Sales,
                alt:"Sales",
                description: "Transform your sales approach with our comprehensive sales services from lead generation to closing deals, enhancing your overall sales process.",
                subheading: "Features:",
                contents: [
                    "Sales Process Development",
                    "CRM Implementation and Management",
                    "Sales Automation",
                    "Sales Performance Analytics"
                ]
            } 
        },
        { 
            id: 5, 
            title: "Pay Per Click", 
            content: {
                heading: "Pay Per Click",
                image:PayPerClick,
                alt:"Pay Per Click",
                description: "Increase your visibility and sales with our results-driven PPC campaign services achieving measurable success and ensuring optimal return on investment.",
                subheading: "Features:",
                contents: [
                    "Amazon Ads",
                    "Google Ads  ",
                    "Conversion Tracking",
                    "Data and analytics"
                ]
            } 
        },
        { 
            id: 6, 
            title: "Social Media Marketing", 
            content: {
                heading: "Social Media Marketing",
                image:SocialMediaMarketing,
                alt:"Social Media Marketing",
                description: "Enhance your brand visibility and foster connection with the audience with our social media marketing services and drive sales across social media platforms.",
                subheading: "Features:",
                contents: [
                    "Branding",
                    "Meta Ads",
                    "Community Management and Engagement",
                    "Lead Generation"
                ]
            } 
        },
        { 
            id: 7, 
            title: "Inbound Marketing", 
            content: {
                heading: "Inbound Marketing",
                image:InboundMarketing,
                alt:"Inbound Marketing",
                description: "Level up the journey from prospect to customer with our inbound marketing services by attracting, engaging and delighting your audience.",
                subheading: "Features:",
                contents: [
                    "Buyer Persona Development",
                    "Lead Nurturing",
                    "Marketing Automation",
                    "Analytics and Reporting"
                ]
            } 
        },
        { 
            id: 8, 
            title: "Revenue Operation", 
            content: {
                heading: "Revenue Operation",
                image:DigitalMarketing,
                alt:"Revenue Operation",
                description: "Create a custom sales and marketing pipeline that works for your product and industry. Maximize the profit with data based decisions",
                subheading: "Features:",
                contents: [
                    "Sales Funnel",
                    "Data Validation ",
                    "Custom Buyer's Journey",
                    "Education and Retargeting"
                ]
            } 
        },
        
 

];

export default serviceData;
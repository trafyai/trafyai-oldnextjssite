import React from "react";
import ServiceHeroSection from "@components/service-page/ServiceHeroSection";
import ServiceGrowSection from "@components/service-page/ServiceGrowSection";
import ServiceAiSection from "@components/service-page/ServiceAiSection";
import ServiceCourseSection from "@components/service-page/ServiceCourseSection";
import ServiceBetterSection from "@components/service-page/ServiceBetterSection";
import ServiceSubscribe from "@components/service-page/ServiceSubscribe";
import '@styles/services/Services.css'


function ServicePage() {
  return (
    <div>
        <ServiceHeroSection/>
        <ServiceGrowSection/>
        <ServiceAiSection/>
        <ServiceCourseSection/>
        <ServiceBetterSection/>
        <ServiceSubscribe/>
    </div>
  )
}

export default ServicePage;
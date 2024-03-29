import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Services from "../components/Services";
import Fleets from "../components/Fleets";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
    <Hero />
    <Services />
    <Fleets />
    <Testimonials />
    <Newsletter />
    <Contact title='Contact Us' subTitle='Get in touch with us via social media or fill the form below'/>
    <Faq />
    <Footer />
    </div>
  )
}

export default Home

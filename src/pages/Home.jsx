import React from "react";
import Hero from "../components/Hero";
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
    <Newsletter />
    <Testimonials />
    <Faq />
    <Footer />
    </div>
  )
}

export default Home

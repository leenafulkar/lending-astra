import React from "react";
import Header from "../../sections/header";
import Footer from "../../sections/footer";
import OptionSection from "../../sections/optinSection";
import Trust from "../../sections/Trust";
import Feature from "../../sections/featureSection";
import FeatureRate from "../../sections/RateSection";
import IntroSection from "../../sections/introSection";
import Blog from "../../sections/blogSection";
import What from "../../sections/whatSection";

const Home = () => {
  return (
    <>
      <OptionSection />
      <Trust />
      <Feature />
      <FeatureRate />
      <IntroSection />
      <Blog />
      <What />
    </>
  );
};

export default Home;

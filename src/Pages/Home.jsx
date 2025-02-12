import React from "react"
import HeroSection from "../Components/Hero";
import Categories from "../Components/Catagories";
import Benifits from "../Components/Benifits";
import PopularBooks from "../Components/PopularBooks";
import StartJouney from "../Components/SartJourney";
const Home = () => {
  return(
    <>
      <HeroSection />
      <Categories />
      <Benifits />
      <PopularBooks />
      <StartJouney />
    </>
  )
}

export default Home;
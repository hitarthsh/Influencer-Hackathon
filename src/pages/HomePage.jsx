import React from "react";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";

const HomePage = ({ setPage }) => (
  <>
    <Hero setPage={setPage} />
    <FeaturedProducts setPage={setPage} />
  </>
);

export default HomePage;

// src/pages/Home.js
import React from "react";
import Header from "../components/Header";
import CardDestinations from "../components/CardDestinations";
import CardSea from "../components/CardSea";
import CardGunung from "../components/CardGunung";
import CardAlam from "../components/CardAlam";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <CardDestinations />
      <br /> <br />
      <CardSea />
      <br /> <br />
      <CardGunung />
      <br /> <br />
      <CardAlam />
      <br /> <br />
      <CTA />
      <br /> <br />
      <Footer />
    </div>
  );
};

export default Home;

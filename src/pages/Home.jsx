// src/pages/Home.js
import React from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Filter from "../components/Filter";
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
      <Jumbotron />
      <Filter />
      <div className="lg:mb-[60px]" />
      <CardDestinations />
      <div className="lg:mb-[32px]" />
      <CardSea />
      <div className="lg:mb-[32px]" />
      <CardGunung />
      <div className="lg:mb-[32px]" />
      <CardAlam />
      <div className="lg:mb-[32px]" />
      <CTA />
      <div className="lg:mb-[32px]" />
      <Footer />
    </div>
  );
};

export default Home;

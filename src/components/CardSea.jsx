// src/components/CardSlider.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Container from "./Container";

import image1 from "../assets/img/sea/1.png";
import image2 from "../assets/img/sea/2.png";
import image3 from "../assets/img/sea/3.png";
import image4 from "../assets/img/sea/4.png";
import image5 from "../assets/img/sea/5.png";

// Dummy data untuk card
const cardData = [
  {
    id: 1,
    title: "Pantai Kelingking, Bali",
    description: "Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku",
    imageUrl: image1,
    code: "5D1N",
    price: "Rp 4.000.000",
    person: "/ Orang",
    rating: "4.5",
    available: true,
  },
  {
    id: 2,
    title: "Pantai Pandawa, Bali",
    description: "Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku",
    imageUrl: image2,
    code: "3D0N",
    price: "Rp 5.000.000",
    person: "/ Orang",
    rating: "4.5",
    available: true,
  },
  {
    id: 3,
    title: "Gili Meno, Lombok",
    description: "Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku",
    imageUrl: image3,
    code: "5D1N",
    price: "Rp 5.000.000",
    person: "/ Orang",
    rating: "4.5",
    available: true,
  },
  {
    id: 4,
    title: "Tanjung Tinggi, Belitung",
    description: "Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku",
    imageUrl: image4,
    code: "3D1N",
    price: "Rp 2.000.000",
    person: "/ Orang",
    rating: "4.5",
    available: true,
  },
  {
    id: 5,
    title: "Tanjung Benoa Bali",
    description: "Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku",
    imageUrl: image5,
    code: "3D1N",
    price: "Rp 2.000.000",
    person: "/ Orang",
    rating: "4.5",
    available: true,
  },
];

const CardSea = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
    draggable: true,
    initialSlide: cardData.findIndex((card) => card.id === 2),
  };

  const cardStyle = {
    width: "280px",
    height: "320px",
  };

  const imageStyle = {
    height: "200px",
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Container>
        <div className="p-4 flex justify-between items-center">
          <h2 className="lg:text-2xl md:lg:text-2xl font-semibold text-dark -ml-2 sm:text-xl">
            Vitamin Sea
          </h2>
          <div className="flex items-center space-x-8">
            <button onClick={goToPrevSlide}>
              <FaChevronLeft className="text-dark hidden lg:block md:block" />
            </button>
            <button onClick={goToNextSlide}>
              <FaChevronRight className="text-dark hidden lg:block md:block" />
            </button>
            <button className="text-primary flex items-center lg:text-md md:lg:text-md">
              LIHAT LIBURAN LAINNYA <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-5 p-2 lg:-ml-44 md:-ml-44 relative"
              style={cardStyle}
            >
              <div className="bg-white shadow-md rounded-md">
                <img
                  style={imageStyle}
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                {/* Teks di dalam gambar */}
                <div className="absolute bg-black text-white center-0 right-0 -mt-8 mr-2 p-2">
                  <h1 className="text-xs font-bold">{card.code}</h1>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{card.description}</p>
                  <div className="text-xl my-2 mb-5">
                    <span className="text-primary font-bold text-sm">
                      {card.price}
                    </span>{" "}
                    <span className="text-black text-sm">{card.person}</span>
                    <span className="text-yellow-500 ml-12">
                      &#9733;
                      <span className="text-black font-semibold text-lg">
                        {card.rating}
                      </span>
                    </span>
                  </div>
                  {card.available ? (
                    <button className="w-full mx-auto bg-primary hover:bg-pink-700 text-white font-semibold transition duration-300 py-2 px-4 rounded">
                      Pesan Sekarang
                    </button>
                  ) : (
                    <button className="w-full mx-auto bg-secondary hover:bg-gray-300 text-dark font-semibold transition duration-300 py-2 px-4 rounded">
                      Tidak Tersedia
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CardSea;

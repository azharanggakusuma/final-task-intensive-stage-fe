import React from "react";
import Container from "./Container";

import GooglePlay from "../assets/img/google-play.png";
import AppStore from "../assets/img/app-store.png";
import Phone1 from "../assets/img/phone-1.png";
import Phone2 from "../assets/img/phone-2.png";

const CTA = () => {
  return (
    <div className="relative w-full h-[491px] bg-primary overflow-hidden">
      <Container>
        <div className="inline-flex flex-col items-start gap-[48px] absolute top-[99px] left-[50px] overflow-hidden">
          <div className="inline-flex flex-col items-start gap-[8px] relative">
            <div className="flex flex-col items-start gap-[8px] relative">
              <div className="inline-flex flex-col items-start gap-[8px] relative">
                <div className="text-white font-bold text-4xl">
                  Download App
                </div>
              </div>
              <p className="relative self-stretch text-white">
                Download the app to manage your projects, keep track of the{" "}
                <br />
                progress and complete tasks without procastinating. Stay on
                track <br />
                and complete on time!
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[8px] relative overflow-hidden">
            <div className="relative w-fit text-white">Get the App</div>
            <div className="flex items-center gap-4">
              <img className="relative" alt="Google Play" src={GooglePlay} />
              <img className="relative" alt="App Store" src={AppStore} />
            </div>
          </div>
        </div>
        <div className="top-[-93px] left-[750px] absolute w-[232px] h-[464px]">
          <div className="relative h-[371px] top-[93px]">
            <img
              className="absolute w-[232px] h-[371px] top-0 left-0 object-cover"
              alt="Iphone x"
              src={Phone1}
            />
          </div>
        </div>
        <div className="top-[88px] left-[995px] absolute w-[232px] h-[464px]">
          <div className="relative h-[403px]">
            <img
              className="absolute w-[232px] h-[403px] top-0 left-0 object-cover"
              alt="Iphone x"
              src={Phone2}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;

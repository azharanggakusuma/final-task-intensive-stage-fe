import React from "react";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

import Logo from "../assets/img/logo.png";
import GooglePlay from "../assets/img/google-play.png";
import AppStore from "../assets/img/app-store.png";

export const Footer = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto h-[407px]">
      <div className="lg:left-[385px] inline-flex flex-col items-start gap-[32px] absolute top-0 lg:mt-3">
        <div className="relative w-[160px] font-semibold text-dark">
          Company
        </div>
        <div className="inline-flex flex-col items-start gap-[12px] relative">
          <div className="relative w-[160px]">About</div>
          <div className="relative w-[160px]">Press</div>
          <div className="relative w-[160px]">Careers</div>
          <div className="relative w-[160px]">Contact</div>
        </div>
      </div>
      <div className="lg:left-[550px] inline-flex flex-col items-start gap-[32px] absolute top-0 lg:mt-3">
        <div className="relative w-[160px] font-semibold text-dark">
          Support
        </div>
        <div className="inline-flex flex-col items-start gap-[12px] relative">
          <div className="relative w-[160px]">Help Center</div>
          <div className="relative w-[160px]">Terms of service</div>
          <div className="relative w-[160px]">Legal</div>
          <div className="relative w-[160px]">Privacy Policy</div>
        </div>
      </div>
      <div className="lg:left-[730px] inline-flex flex-col items-start gap-[32px] absolute top-0 lg:mt-3">
        <div className="relative w-[160px] font-semibold text-dark">
          Kerja Sama
        </div>
        <div className="inline-flex flex-col items-start gap-[12px] relative">
          <div className="relative w-[160px]">Daftar Jadi Hoster</div>
          <div className="relative w-[160px]">Hoster Terdaftar</div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[8px] absolute top-0 lg:left-[920px] overflow-hidden lg:mt-3">
        <div className="relative w-fit mt-[-1.00px] font-semibold text-dark mb-[29px]">
          Get the App
        </div>
        <div className="flex items-center gap-4">
          <img className="relative" alt="Google Play" src={GooglePlay} />
          <img className="relative" alt="App Store" src={AppStore} />
        </div>
      </div>
      <div className="absolute w-full h-[72px] bottom-0 left-0 bg-black">
        <div className="absolute top-[24px] left-[50px] text-white">
          © 2023 OPENTRIP. All rights reserved
        </div>

        <div className="absolute top-[24px] right-[13px] flex space-x-2 mr-10">
          <a
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-900"
            alt="Instagram"
            href=""
          >
            <FaInstagram className="text-white" />
          </a>

          <a
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-900"
            alt="Twitter"
            href=""
          >
            <FaTwitter className="text-white" />
          </a>

          <a
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-900"
            alt="Youtube"
            href=""
          >
            <FaYoutube className="text-white" />
          </a>
        </div>
      </div>

      <img
        className="absolute w-[216px] h-[30px] top-[11px] left-[50px]"
        alt="Group"
        src={Logo}
      />
    </div>
  );
};

export default Footer;
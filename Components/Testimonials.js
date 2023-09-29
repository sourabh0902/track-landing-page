"use client";
import Image from "next/image";
import React from "react";
import left from "../public/LeftImg.svg";
import right from "../public/RightImg.svg";
import stars from "../public/Stars.svg";
import star from "../public/Star.svg";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" text-xl mb-44 font-medium flex items-start">
          <h2 className="waivy">
            <span style={{ "--i": 1 }}>2</span>
            <span style={{ "--i": 2 }}>0</span>
            <span style={{ "--i": 3 }}>0</span>
            <span style={{ "--i": 4 }}>0</span>
            <span style={{ "--i": 5 }}>+</span>
          </h2>
          Happy users
        </div>
      </div>

      <div className=" flex w-full justify-center items-center mb-60 gap-11 ">
        <div
          className="w-[655px] flex testimonial-container-left"
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <Image
            src={left}
            width={250}
            height={250}
            alt="/"
            className="testimonial-left rounded-lg mr-10 imageShadow"
          />
          <div className=" inline">

            <div className="stars-container gap-1">
              <div className="star h-[18px] mt-4 ">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
            </div>
            <h2 className=" mt-[30px] text-lg font-medium typewriter">
              <Typewriter
                options={{
                  loop: true,
                  delay: 20,
                  deleteSpeed: 10,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "&#x275D Track has simplified all <br/> my tasks. Managing my work has become <br/> easier. &#x275E"
                    )
                    .changeDelay(1)
                    .pauseFor(5000)
                    .start();
                }}
              />
            </h2>
            <div className=" flex mt-[48px]">
              <h2 className=" text-base font-semibold mr-5">Jenny Wilson</h2>
              <h3 className=" text-base font-normal text-[#64748B]">
                Grower.io
              </h3>
            </div>
          </div>
        </div>

        <div
          className="w-[655px] flex testimonial-container-left"
          data-aos="flip-left"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <Image
            src={right}
            width={250}
            height={250}
            alt="/"
            className="testimonial-right rounded-lg mr-10"
          />
          <div className=" inline">
          <div className="stars-container gap-1">
              <div className="star h-[18px] mt-4 ">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
              <div className="star h-[18px] mt-4">
                <Image src={star} width={20} height={20} alt="/" />
              </div>
            </div>
            <h2 className=" mt-[30px] text-lg font-medium">
              <Typewriter
                options={{
                  loop: true,
                  delay: 20,
                  deleteSpeed: 10,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "&#x275D No more switching between taks. Time <br/> management has become efficient for <br/> my team. &#x275E"
                    )
                    .changeDelay(1)
                    .pauseFor(5000)
                    .start();
                }}
              />
            </h2>
            <div className=" flex mt-[48px]">
              <h2 className=" text-base font-semibold mr-5">Devon Lane</h2>
              <h3 className=" text-base font-normal text-[#64748B]">
                DLDesign.co
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

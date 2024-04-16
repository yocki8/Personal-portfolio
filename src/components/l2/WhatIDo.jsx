import React, { useRef } from 'react'
import DevSvg2 from "./DevSvg2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

export default function WhatIDo() {

    const para = useRef(null);
    const desc = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();

        const text = new SplitType(para.current, {
            types: "chars,words,lines",
        });

        gsap.from(text.chars, {
            opacity: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: para.current,
                start: "center 90%",
                end: "center 60%",
                scrub: true,
            },
        });

        gsap.from(desc.current, {
            rotate: "12deg",
            translateY: "100%",
            duration: 1,
            scrollTrigger: {
                trigger: desc.current,
                start: "bottom 90%",
            },
        });
    });
  return (
      <div className="relative flex justify-between">
          <div className="ml-5 h-64 w-64">
              <DevSvg2 />
          </div>
          <div className="w-[max(800px,65%)]">
              <div className="overflow-hidden">
                  <h1
                      ref={desc}
                      className="rotate- w-fit  origin-left text-sm uppercase tracking-[0.3em]"
                  >
                      What i do ?{" "}
                  </h1>
              </div>
              <div ref={para} className="relative py-2 text-[3em]">
                  <p className=" ">
                      My obsession is to deliver a{" "}
                      <span className="text-orangy">digital experience </span>{" "}
                      that not only serves a great purpose, but give your
                      business an unfair advantage.
                  </p>
              </div>
          </div>
      </div>
  );
}
 
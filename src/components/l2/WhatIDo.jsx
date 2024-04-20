import React, { useRef } from "react";
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
            opacity: 0.2,
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
        <div className="relative overflow-hidden flex justify-between">
            <div className="absolute right-0 flex md:opacity-100 opacity-10  justify-start md:relative">
                <DevSvg2 />
            </div>
            <div className="md:w-2/3">
                <div className="overflow-hidden">
                    <h1
                        ref={desc}
                        className="text-center md:text-left  origin-left text-xs md:text-sm uppercase tracking-[0.3em]"
                    >
                        What i do ?{" "}
                    </h1>
                </div>
                <div
                    ref={para}
                    className="py-2 text-xl md:text-[3em] md:leading-[72px]"
                >
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

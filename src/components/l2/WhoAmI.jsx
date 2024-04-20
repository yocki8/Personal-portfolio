import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import DevSvg from "../l2/DevSvg";
import { useRef } from "react";

export default function WhoAmI() {
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
        <div className="relative flex items-center justify-between">
            <div className="md:w-2/3">
                <div className="overflow-hidden ">
                    <h1
                        ref={desc}
                        className="origin-left md:text-left text-center text-xs md:text-sm  uppercase tracking-[0.3em]"
                    >
                        Who am I ?{" "}
                    </h1>
                </div>
                <div ref={para} className="text-xl md:leading-[72px] py-2 md:text-[3em]">
                    <p className="">
                        I am a <span className="text-orangy">passionate</span>{" "}
                        software developer helping people turn their ideas into
                        sites & apps that work.
                    </p>
                </div>
            </div>
            <div className="flex md:relative left-0 md:opacity-100  opacity-10 absolute justify-end">
                <DevSvg />
            </div>
        </div>
    );
}

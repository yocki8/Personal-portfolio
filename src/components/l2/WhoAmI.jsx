import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import DevSvg from "../l2/DevSvg";
import { useRef } from "react";

export default function WhoAmI() {
    const para = useRef(null);

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
    });

    return (
        <div className="relative flex items-center justify-between">
            <div className="w-[max(800px,70%)]">
                <h1 className=" text-sm uppercase tracking-[0.3em]">
                    Who am I ?{" "}
                </h1>
                <div ref={para} className="relative py-2 text-[3em]">
                    <p className=" ">
                        I am a <span className="text-orangy">passionate</span>{" "}
                        software developer helping people turn their ideas into
                        sites & apps that work
                    </p>
                </div>
            </div>
            <div className="h-64 mr-14 w-64">
                <DevSvg />
            </div>
        </div>
    );
}

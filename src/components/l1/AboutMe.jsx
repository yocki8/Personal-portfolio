import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import DevSvg from "../l2/DevSvg";


const WhoAmI = () => {
    const para = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);

        const text = new SplitType(para.current, {
            types: "chars,words",
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
        <div className="relative flex justify-between">
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
            <div className="h-64 w-64">
                <DevSvg />
            </div>
        </div>
    );
};

export default function AboutMe() {
    return (
        <section id="About Me" className="grid py-40 px-28 gap-20 text-muddy">
            <WhoAmI />
        </section>
    );
}

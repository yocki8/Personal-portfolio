import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import DevSvg from "../l4/DevSvg";
import RectSvg from "../l4/RectSvg";

const TextContent = () => {
    const para = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);

        const text = new SplitType(para.current, {
            types: "chars,words",
        });

        gsap.to(text.chars, {
            opacity: 0.5,
            stagger: 100,
            scrollTrigger: {
                trigger: para.current,
                start: "top 20%",
                end: "40% top",
                scrub: true,
            },
        });
    });
    return (
        <div>
            <div className="relative flex justify-between">
                <div className="w-[max(800px,70%)]">
                    <h1 className=" text-sm uppercase tracking-[0.3em]">
                        Who am I ?{" "}
                    </h1>
                    <div ref={para} className="relative py-2 text-[3em]">
                        <p className=" ">
                            I am a{" "}
                            <span className="text-orangy">passionate</span>{" "}
                            software developer helping people turn their ideas
                            into sites & apps that work
                        </p>
                    </div>
                </div>
                <div className="h-64 w-64">
                    <DevSvg />
                </div>
            </div>
            <div>
                <svg
                    class=" left-0 h-10 w-screen -translate-x-32 translate-y-10 scale-x-[8]"
                    viewBox="0 0 550 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.55371 59.9736C4.79866 64.9883 3.3605 93.4267 4.30466 94.6833M4.30466 94.6833C5.1111 95.7576 19.203 87.0479 32.9837 78.0476M4.30466 94.6833C26.1178 30.0914 99.197 28.863 153.422 30.58C219.012 32.6572 267.638 45.9569 321.191 52.1128C399.809 61.1508 502.938 64.503 546.384 2.92385"
                        stroke="currentColor"
                        stroke-width="5.58817"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};
export default function AboutMe() {
    return (
        <section className="px-28 text-muddy">
            <TextContent />
        </section>
    );
}

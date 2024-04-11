import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import DevSvg from "../l4/DevSvg";
import SkillsList from "../l4/SkillsList";
import CurveSvg from "../l4/CurveSvg";

const WhoAmI = () => {
    const para = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);

        const text = new SplitType(para.current, {
            types: "chars,words",
        });

        gsap.to(text.chars, {
            opacity: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: para.current,
                start: "top 20%",
                end: "40% top",
                scrub: true,
            },
        });
    });

    return (
        <div className="relative flex justify-between px-28">
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

const Skills = () => {
    return (
        <div className="grid  gap-5 px-28">
            <h1 className=" text-sm uppercase tracking-[0.3em]">skills</h1>
            <div className="rounded-3xl">
                <SkillsList />
            </div>
        </div>
    );
};
export default function AboutMe() {
    return (
        <section className="grid gap-20 text-muddy">
            <WhoAmI />
            <Skills />
        </section>
    );
}

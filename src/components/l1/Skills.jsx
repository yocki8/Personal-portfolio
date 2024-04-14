import React, { useRef } from "react";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { skillsList } from "../l2/SkillsList";
const SkillName = ({ num }) => {
    const skillRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(skillRef.current, {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: skillRef.current,
                start: "top 80%",
            },
        });
    });
    return (
        <ul ref={skillRef} className="flex items-center">
            {skillsList.map((skill) => {
                if (skill.tier == num)
                    return (
                        <li key={skill.name} className="group relative p-2">
                            <img
                                className={`h-16 w-16 ${skill.invert ? "invert" : ""}`}
                                src={skill.url}
                            ></img>
                            <div className="absolute -top-5 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-muddy opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <h1 className="px-1 py-2 text-center text-xs">
                                    {skill.name}
                                </h1>

                                <svg
                                    className="absolute left-1/2 -mt-2  h-6 w-6 -translate-x-1/2 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                >
                                    <g
                                        id="directional"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="blue"
                                        fillRule="evenodd"
                                    >
                                        <g id="drop-down" fill="#b7ab98">
                                            <polygon
                                                id="Shape"
                                                points="5 8 12 16 19 8"
                                            ></polygon>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </li>
                    );
            })}
        </ul>
    );
};

const Tier = ({ num, clr }) => {
    return (
        <li className="flex h-28 justify-start gap-4 border-b border-b-muddyo text-3xl">
            <div className={`grid w-40 place-items-center uppercase ${clr}`}>
                <h1>{num}</h1>
            </div>
            <SkillName num={num} />
        </li>
    );
};

export default function Skills() {
    return (
        <section id="Skills" className="grid  gap-5 px-28">
            <h1 className=" text-sm uppercase tracking-[0.3em]">skills</h1>
            <ul className="relative grid gap-4 font-bold text-chinese ">
                <Tier num={"s"} clr={"d1"} />
                <Tier num={"a"} clr={"d2"} />
                <Tier num={"b"} clr={"d3"} />
                <Tier num={"c"} clr={"d4"} />
            </ul>
        </section>
    );
}

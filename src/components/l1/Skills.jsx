import React, { useRef } from "react";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { skillsList } from "../global/SkillsList";

const SkillName = ({ num }) => {
    const skillRef = useRef(null);

    useGSAP(() => {
        gsap.from(skillRef.current, {
            scaleY: 0.6,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: skillRef.current,
                start: "top 90%",
            },
        });
    });
    return (
        <ul
            ref={skillRef}
            className="flex w-full  flex-wrap items-center md:gap-3"
        >
            {skillsList.map((skill) => {
                if (skill.tier == num)
                    return (
                        <li key={skill.name} className="group relative p-2">
                            <img
                                className={`h-6 w-6  md:h-14 md:w-14 ${skill.invert ? "invert" : ""}`}
                                src={skill.url}
                                alt={skill.name}
                            ></img>
                            <div className="absolute -top-5 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-muddy opacity-0 transition-all duration-300 group-hover:opacity-100">
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
        <li className="flex h-20 justify-start gap-4 border-b border-b-muddyo text-3xl md:h-32">
            <div
                className={`grid w-28 place-items-center uppercase md:w-40 ${clr}`}
            >
                <h1>{num}</h1>
            </div>
            <SkillName num={num} />
        </li>
    );
};

export default function Skills() {
    const desc = useRef();

    useGSAP(() => {
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
        <section id="2" className="grid gap-5  px-[7.5vw] pb-20 md:pt-20 ">
            <div className="overflow-hidden">
                <h1
                    ref={desc}
                    className="  origin-left text-center  text-xs uppercase tracking-[0.3em] md:text-left md:text-sm"
                >
                    Skills{" "}
                </h1>
            </div>
            <ul className="relative grid gap-4 font-bold text-chinese ">
                <Tier num={"s"} clr={"d1"} />
                <Tier num={"a"} clr={"d2"} />
                <Tier num={"b"} clr={"d3"} />
                <Tier num={"c"} clr={"d4"} />
            </ul>
        </section>
    );
}

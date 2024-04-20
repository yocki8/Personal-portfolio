import React, { useRef } from "react";
import project1 from "/image/project1.png";
import project2 from "/image/project2.png";
import project3 from "/image/project3.png";
import project4 from "/image/project4.png";
import { skillsList } from "../global/SkillsList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

const Technology = ({ name }) => {
    return (
        <li className=" grid place-items-center">
            {skillsList.map((skill) => {
                if (skill.name == name) {
                    return (
                        <img
                            key={skill.name}
                            className={`md:h-9 md:w-9 h-5 w-5 ${skill.invert ? "invert" : ""}`}
                            src={skill.url}
                        ></img>
                    );
                }
            })}
        </li>
    );
};

const Project = ({
    stack,
    imgSrc,
    imgTransition = false,
    name,
    stackName,
    design,
    aLink,
    year,
}) => {
    const img = useRef();
    const cont = useRef();
    useGSAP(() => {
        gsap.to(img.current, {
            top: imgTransition && "-12.5%",
            scrollTrigger: {
                trigger: cont.current,
                start: "center 70%",
                end: "center 10%",
                scrub: 3,
            },
        });
    });
    return (
        <li className="grid w-full md:items-center md:justify-between gap-10 md:flex  md:gap-0 ">
            <div className="rounded-xl bg-muddy w-full   transition-all duration-300 md:m-0 md:w-[45%]">
                <a href={aLink} target="_blank">
                    <div className="flex h-10 w-full items-center  justify-evenly gap-24 ">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-200"></div>
                            <div className="h-3 w-3 rounded-full bg-green-300"></div>
                        </div>

                        <h1 className="font-bold  text-chinese ">{name}</h1>
                    </div>
                    <div
                        ref={cont}
                        className="relative aspect-video scale-x-[1.03] overflow-hidden rounded-2xl transition-all  duration-300"
                    >
                        <img
                            ref={img}
                            draggable={true}
                            className=" absolute top-0 h-fit w-full"
                            src={imgSrc}
                        ></img>
                    </div>
                </a>
            </div>
            <div className="grid w-full m-auto md:m-0  md:w-1/2 gap-4 md:gap-14  ">
                <div className="m-auto grid gap-4 md:gap-4 ">
                    <div className="flex  md:text-base text-sm gap-2 md:gap-4">
                        {design && (
                            <div className="rounded-full border px-2 md:px-4  ">
                                <p>Design</p>
                            </div>
                        )}
                        <div className="rounded-full border px-2 md:px-4  ">
                            <p>Development</p>
                        </div>
                        <div className="rounded-full  bg-muddy  px-2 md:px-4 text-chinese">
                            <p>{year}</p>
                        </div>
                    </div>
                    <span className="h-[2px] bg-gradient-to-l from-transparent via-muddy to-transparent"></span>
                </div>

                <div className="grid  place-items-center gap-2 md:gap-4">
                    <h1 className="text-base tracking-[0.2em]">Tech Stack</h1>
                    <ul className="flex w-full flex-wrap justify-center  gap-6 px-2">
                        {stack.map((tech, ind) => {
                            return <Technology key={ind} name={tech} />;
                        })}
                    </ul>
                </div> 

                <p className="h-fit text-center text-3xl md:text-[3rem] tracking-wide text-night">
                    {"<" + stackName + "/>"}
                </p>
            </div>
        </li>
    );
};
export default function Projects() {
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
        <section id="3" className=" px-[7.5vw] pb-20 md:pt-20">
            <div className="grid gap-5 md:gap-10">
                <div className="overflow-hidden  ">
                    <h1
                        ref={desc}
                        className="origin-left text-center text-xs uppercase tracking-[0.3em] md:text-left md:text-sm"
                    >
                        My Projects{" "}
                    </h1>
                </div>
                <ul className="grid gap-16 md:gap-24">
                    <Project
                        imgSrc={project1}
                        name={"Sunrise Hotels"}
                        design={true}
                        imgTransition={true}
                        stackName={"FullStack"}
                        year={2024}
                        aLink={"https://hotel-management-system-xi.vercel.app/"}
                        stack={[
                            "Figma",
                            "React",
                            "GSAP",
                            "Redux",
                            "CSS",
                            "Tailwind",
                            "React Router",
                        ]}
                    />
                    <Project
                        imgSrc={project2}
                        name={"Visionary X (clone)"}
                        imgTransition={true}
                        stackName={"Frontend"}
                        aLink={"https://visionary-y.vercel.app/"}
                        design={true}
                        year={2024}
                        stack={[
                            "node js",
                            "GSAP",
                            "React",
                            "Tailwind",
                            "Sass",
                            "HTML",
                            "CSS",
                        ]}
                    />
                    <Project
                        imgSrc={project3}
                        name={"URL link shortener"}
                        stackName={"Backend"}
                        aLink={"https://github.com/yocki8/url-shortener/"}
                        design={false}
                        year={2024}
                        stack={[
                            "node js",
                            "ExpressJS",
                            "Javascript",
                            "CSS",
                            "MongoDB",
                            "Postman",
                            "EJS",
                        ]}
                    />
                    <Project
                        imgSrc={project4}
                        name={"Tik-Tak-Toe 3D"}
                        stackName={"Frontend"}
                        aLink={"https://yocki8.github.io/Tik-Tak-Toe-3D/"}
                        design={true}
                        year={2023}
                        stack={["Javascript", "CSS", "HTML"]}
                    />
                </ul>
            </div>
        </section>
    );
}

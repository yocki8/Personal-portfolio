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
                            className={`h-9 w-9 ${skill.invert ? "invert" : ""}`}
                            src={skill.url}
                        ></img>
                    );
                }
            })}
        </li>
    );
};

const Project = ({ stack, imgSrc, name, stackName, design, aLink, year }) => {

    const img = useRef();
    const cont = useRef();
    useGSAP(()=>{

        gsap.to(img.current,{
            top: '-20%',
            scrollTrigger:{
                trigger: cont.current,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: 2,
            }
        })

    })
    return (
        <li className=" flex  justify-between ">
            <div className="w-1/2 rounded-xl transition-all duration-300 hover:scale-105">
                <a href={aLink} target="_blank">
                    <div className="flex h-10 items-center justify-evenly gap-24 rounded-t-xl bg-muddy ">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-200"></div>
                            <div className="h-3 w-3 rounded-full bg-green-300"></div>
                        </div>

                        <h1 className="font-bold text-chinese">{name}</h1>
                    </div>
                    <div ref={cont} className="h-[20vw]  relative scale-105 overflow-hidden  rounded-2xl">
                        <img ref={img} className="h-fit w-full top-0 absolute" src={imgSrc}></img>
                    </div>
                </a>
            </div>
            <div className="mt-10 grid w-1/2  gap-10 px-20 ">
                <div className="m-auto grid gap-4 ">
                    <div className="flex gap-4">
                        {design && (
                            <div className="rounded-full border px-4  ">
                                <p>Design</p>
                            </div>
                        )}
                        <div className="rounded-full border px-4  ">
                            <p>Development</p>
                        </div>
                        <div className="rounded-full  bg-muddy  px-4 text-chinese">
                            <p>{year}</p>
                        </div>
                    </div>
                    <span className="h-[2px] bg-gradient-to-l from-transparent via-muddy to-transparent"></span>
                </div>
                <div className="grid place-items-center">
                    <h1 className="text-base tracking-[0.2em]">Tech Stack</h1>
                    <ul className="flex w-full flex-wrap justify-center  gap-6 px-2">
                        {stack.map((tech) => {
                            return <Technology name={tech} />;
                        })}
                    </ul>
                </div>
                <p className="h-fit text-center text-[3rem] tracking-wide text-night">
                    {"<" + stackName + "/>"}
                </p>
            </div>
        </li>
    );
};
export default function Projects() {
    return (
        <section id="3" className="px-28 pt-20">
            <div className="grid gap-10">
                <h1 className=" text-sm uppercase tracking-[0.3em]">
                    My Projects (yet){" "}
                </h1>
                <ul className="grid gap-24">
                    <Project
                        imgSrc={project1}
                        name={"Sunrise Hotels"}
                        design={true}
                        stackName={"FullStack"}
                        year={2024}
                        aLink={"https://hotel-management-system-xi.vercel.app/"}
                        stack={[
                            "Figma",
                            "React",
                            "GSAP",
                            "Redux",
                            "HTML",
                            "Tailwind",
                            "React Router",
                        ]}
                    />
                    <Project
                        imgSrc={project2}
                        name={"Visionary X"}
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

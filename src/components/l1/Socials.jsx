import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useData } from "../global/DataContext";

const Button = ({ name, href, tFlag = true }) => {
    return (
        <a href={href} target={tFlag ? "_blank" : ''}>
            <li className=" h-6 overflow-hidden text-lg transition duration-100  *:transition-all *:duration-300 hover:translate-x-1 *:hover:-translate-y-7   ">
                <h1>{name}</h1>
                <h1>{name}</h1>
            </li>
        </a>
    );
};

const Links = ({ name, buttons = [], tFlag }) => {
    return (
        <div className="relative">
            <h1 className="text-xl ">{name}</h1>
            <span className="absolute h-[1px] w-full bg-muddyo "></span>
            <ul className="mt-4 grid gap-[6px] opacity-70">
                {buttons.map((btn) => {
                    return (
                        <Button key={btn.name} href={btn.href} name={btn.name} tFlag={tFlag} />
                    );
                })}
            </ul>
        </div>
    );
};
export default function Socials() {
    const line = useRef();
    const title = useRef(null);
    const circle = useRef(null);
    const {screen} = useData();
    
    const getTime = () => {
        const now = new Date();

        let hours = now.getHours(); // Adding 5 for IST (GMT+5:30)
        let minutes = now.getMinutes();

        if (hours >= 24) {
            // hours -= 24;
        }

        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert midnight (0 hours) to 12 AM

        minutes = minutes < 10 ? "0" + minutes : minutes;

        const timeString = `${hours}:${minutes} ${ampm} IST`;

        return timeString;
        return ""
    };

    useGSAP(() => {
        gsap.from(title.current, {
            rotate: "6deg",
            translateY: "125%",
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: title.current,
                start: "top bottom",
            },
        });
        gsap.from(circle.current, {
            height: 300,
            width: 300,
            opacity: 0,
            delay: 0.2,
            scrollTrigger: {
                trigger: circle.current,
                start: "top bottom",
            },
        });
    });

    const handleMouseOver = () => {
        line.current.classList.remove("origin-right");
        line.current.classList.remove("scale-x-0");
    };
    const handleMouseOut = () => {
        line.current.classList.add("origin-right");
        line.current.classList.add("scale-x-0");
    };

    
    return (
        <section
            id="4"
            className="relative grid gap-16 overflow-hidden px-4  pb-8 md:px-[7.5vw] md:pt-20"
        >
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="z-10"
            >
                <h1 className=" text-center text-muddy opacity-60 md:translate-y-10 md:text-xl">
                    Got a project? Need an unfair advantage?
                </h1>
                <div className="relative h-[16vw] overflow-hidden">
                    <div ref={title}>
                        <h1 className="origin-left text-center text-[12vw] uppercase">
                            Get in T
                            <span className="md:drop-shadow-[5px_5px_0px_#b7ab986f] drop-shadow-[3px_3px_0px_#b7ab986f]">
                                <span className="md:drop-shadow-[10px_10px_0px_#b7ab986f] drop-shadow-[5px_5px_0px_#b7ab986f]">
                                    o
                                </span>
                            </span>
                            uch
                        </h1>
                        <div
                            ref={line}
                            className="scalex-0 absolute bottom-0 -mt-12  h-[6px] w-full origin-left bg-muddy transition-[transform] duration-700 md:bottom-auto"
                        ></div>
                    </div>
                </div>
            </div>

            <div className="z-10 m-auto grid w-full grid-cols-[2fr_1fr_1fr] gap-10">
                <Links
                    name={"Navigation"}
                    buttons={[
                        { name: "Intro", href: "#0" },
                        { name: "About Me", href: "#1" },
                        { name: "Skills", href: "#2" },
                        { name: "Projects", href: "#3" },
                    ]}
                    tFlag={false}
                />
                <Links
                    name={"Profiles"}
                    buttons={[
                        {
                            name: "Github",
                            href: "https://github.com/yocki8",
                        },
                        {
                            name: "Codeforces",
                            href: "https://codeforces.com/profile/yocki8",
                        },
                        {
                            name: "Codechef",
                            href: "https://www.codechef.com/users/yocki8",
                        },
                        {
                            name: "Leetcode",
                            href: "https://leetcode.com/yocki/",
                        },
                        {
                            name: "Instagram",
                            href: "https://www.instagram.com/yuvimalhotra0028/",
                        },
                    ]}
                />
                <Links
                    name={screen ? "Contact Me" : "Contact"}
                    buttons={[
                        {
                            name: "Linkedin",
                            href: "https://www.linkedin.com/in/yuvraj-malhotra-628933209/",
                        },

                        {
                            name: "Gmail",
                            href: "mailto:yocktherock1990@gmail.com",
                        },
                        {
                            name: "Twitter",
                            href: "https://twitter.com/Yuvi17700804",
                        },
                    ]}
                />
            </div>
            <span
                ref={circle}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full  bg-gradient-to-b from-matte via-transparent to-transparent"
            ></span>
            <div className="flex items-end">
                <div className="w-1/2 text-3xl md:text-6xl ">
                    <h1>©2024</h1>
                    <h1>Yuvraj Malhotra</h1>
                </div>
                <div className="text-2xl ">
                    <h1>Local Time</h1>
                    <h1 className="text-muddyo">{getTime()}</h1>
                </div>
            </div>
        </section>
    );
}

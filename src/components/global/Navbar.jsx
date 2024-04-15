import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import { useData } from "./DataContext";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Button = ({ side }) => {
    const { handleActiveSide, activeSide } = useData();
    let sideName;
    if (side == 0) sideName = "Intro";
    if (side == 1) sideName = "About Me";
    if (side == 2) sideName = "Skills";
    if (side == 3) sideName = "Projects";
    if (side == 4) sideName = "Education";
    if (side == 5) sideName = "Socials";

    return (
        <a href={`#${side}`}>
            <button
                onClick={() => handleActiveSide(side)}
                className={`group z-10 grid h-12  w-24 items-center rounded-xl  text-sm font-bold tracking-wide  ${activeSide == side ? "text-[#28282B]" : "text-muddy"} transition-all duration-200 hover:bg-[#b7ab981f] `}
            >
                <div className="z-10 h-5 overflow-hidden *:transition-all *:duration-[0.4s] group-hover:*:-translate-y-full">
                    <h1>{sideName}</h1>
                    <h1>{sideName}</h1>
                </div>
            </button>
        </a>
    );
};

const SlideBtn = () => {
    const { activeBtn } = useData();
    return (
        <button
            ref={activeBtn}
            data-pos={0}
            data-active={0}
            className="absolute top-2 h-12 w-24 rounded-xl bg-muddy transition-all duration-500  ease-[cubic-bezier(.25,.75,.5,1.25)] md:top-auto"
        ></button>
    );
};
export default function Navbar({}) {
    return (
        <nav className="fixed left-1/2 top-4 z-10 max-w-[90%] -translate-x-1/2 transition-all duration-500">
            <div className="flex items-center gap-3 rounded-3xl border-b-8 border-b-[#28282B] bg-[#343434] px-6  py-2 ">
                <SlideBtn />
                <Button side={0} />
                <Button side={1} />
                <Button side={2} />
                <Button side={3} />
                <Button side={4} />
                <Button side={5} />
            </div>
        </nav>
    );
}

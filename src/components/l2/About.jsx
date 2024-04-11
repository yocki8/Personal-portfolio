import React, { useRef } from "react";
import Education from "../l3/Education";
import AboutMe from "../l3/AboutMe";
import CurveSvg from "../l4/CurveSvg";

export default function About() {
    return (
        <div className="home relative min-h-dvh w-screen overflow-x-hidden bg-chinese  py-40 ">
            <AboutMe />
            <CurveSvg />
            <div className="h-dvh"></div>
            <Education />
        </div>
    );
}

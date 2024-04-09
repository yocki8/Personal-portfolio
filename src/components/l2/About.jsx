import React, { useRef } from "react";
import Education from "../l3/Education";
import AboutMe from "../l3/AboutMe";

export default function About() {
    return (
        <div className="home bg-chinese scroll m-auto min-h-dvh overflow-x-hidden  py-40 transition-all duration-1000">
            <AboutMe />
            <div className="h-dvh"></div>
            <Education />
        </div>
    );
}

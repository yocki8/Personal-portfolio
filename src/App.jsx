import React, { useLayoutEffect, useRef } from "react";
import Navbar from "./components/global/Navbar";
import Intro from "./components/l1/Intro";
import About from "./components/l1/AboutMe";
import Projects from "./components/l1/Projects";
import Socials from "./components/l1/Socials";
import Skills from "./components/l1/Skills";
import { useGSAP } from "@gsap/react";
import { useData } from "./components/global/DataContext";
import Observer from "gsap/Observer";

export default function App() {
    const app = useRef();
    const { handleActiveSide, screen } = useData();

    useGSAP(() => {
        Observer.create({
            target: window,
            type: "wheel",
            onWheel: (e) => {
                const element = e.event.target
                    ?.closest("section")
                    ?.getAttribute("id");
                if (element) handleActiveSide(element);
            },
        });
    });

    return (
        <>
            {screen && <Navbar />}
            <main
                ref={app}
                className="w-full scroll-smooth bg-chinese font-[avant]  text-muddy  selection:bg-lighty selection:text-darky"
            >
                <Intro />
                <About />
                <Skills />
                <Projects />
                <Socials/>
            </main>
        </>
    );
}

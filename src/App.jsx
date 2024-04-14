import React from "react";
import Navbar from "./components/global/Navbar";
import Intro from "./components/l1/Intro";
import About from "./components/l1/AboutMe";
import Projects from "./components/l1/Projects";
import Socials from "./components/l1/Socials";
import Skills from './components/l1/Skills';

export default function App() {
    return (
        <>
            <Navbar />
            <main className="w-full scroll-smooth bg-chinese font-[avant]  text-muddy  selection:bg-lighty selection:text-darky">
                <Intro />
                <About />
                <Skills />
                {/* <Projects /> */}
                {/* <Socials /> */}
                <div className="h-dvh"></div>
            </main>
        </>
    );
}

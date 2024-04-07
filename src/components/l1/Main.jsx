import React from "react";
import { useState, useEffect, useRef } from "react";
import Intro from "./../l2/Intro";
import About from "./../l2/About";
import Projects from "./../l2/Projects";
import Contact from "./../l2/Contact";
import Game from "./../l2/Game";
import Empty from "../l2/Empty";

const Side = ({ transform, impos = false, children }) => {
    return (
        <section
            className={`absolute h-full w-full overflow-hidden transition-all duration-1000`}
            style={{
                transform,
            }}
        >
            {children}
        </section>
    );
};

export default function Main({ side, animate }) {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [sideTransition, setSideTransition] = useState(false);
    const cube = useRef(null);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        const delay = (duration) =>
            new Promise((resolve) => {
                setTimeout(resolve, duration);
            });

        let rX, rY;
        if (side == 1) {
            rX = -0;
            rY = 0;
        }
        if (side == 2) {
            rX = 0;
            rY = -180;
        }
        if (side == 3) {
            rX = 0;
            rY = 90;
        }
        if (side == 4) {
            rX = 0;
            rY = -90;
        }
        if (side == 5) {
            rX = 90;
            rY = 0;
        }
        if (side == 6) {
            rX = -90;
            rY = 0;
        }

        if (animate) {
            Promise.resolve()
                .then(() => timeline1())
                .then(() => delay(500))
                .then(() => timeline2())
                .then(() => delay(1000))
                .then(() => timeline3());

            const timeline1 = () => {
                setSideTransition(true);
                cube.current.classList.add("*:opacity-75");
            };

            const timeline2 = () => {
                cube.current.style.scale = "0.3";
                cube.current.style.transform = `rotateX(${rX - 30 + "deg"}) rotateY(${rY - 30 + "deg"})`;
            };
            
            const timeline3 = () => {
                setSideTransition(false);
                cube.current.style.scale = "1";
                cube.current.classList.remove("*:opacity-75");
                cube.current.style.transform = `rotateX(${rX + "deg"}) rotateY(${rY + "deg"}) `;
            };
        } else {
            cube.current.style.transform = `rotateX(${rX + "deg"}) rotateY(${rY + "deg"}) `;
        }
    }, [side]);

    const whatToTranslate = (num) => {
        if (sideTransition) return window.innerHeight / 2 + 2;

        if (side == 3 || side == 4) {
            if (num == 5 || num == 6) return window.innerHeight / 2 + 2;
            else return window.innerWidth / 2 + 2;
        } else {
            if (num == 3 || num == 4) return window.innerWidth / 2 + 2;
            else return window.innerHeight / 2 + 2;
        }
    };

    return (
        <main
            id="cube"
            ref={cube}
            className={`relative h-full w-full ${animate ? "transition-all duration-1000" : ""}`}
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            <Side
                transform={`perspective(10000cm) translateZ(${whatToTranslate(1)}px)`}
            >
                <Intro isTransitioning={sideTransition} />
            </Side>

            <Side
                transform={`perspective(10000cm) translateZ(-${whatToTranslate(2)}px) scaleX(-1)`}
            >
                <About isTransitioning={sideTransition} />
            </Side>

            <Side
                transform={`perspective(10000cm) translateX(-${whatToTranslate(3)}px) rotateY(90deg) scaleX(-1)`}
            >
                <Projects
                    isTransitioning={sideTransition}
                    flag={side == 5 || side == 6}
                    animate={animate}
                />
            </Side>
            <Side
                transform={`perspective(10000cm) translateX(${whatToTranslate(4)}px) rotateY(90deg)`}
            >
                <Contact
                    isTransitioning={sideTransition}
                    flag={side == 5 || side == 6}
                    animate={animate}
                />
            </Side>

            <Side
                transform={`perspective(10000cm) translateY(${whatToTranslate(5)}px) rotateX(90deg) scaleY(-1)`}
            >
                <Game isTransitioning={sideTransition} animate={animate} />
            </Side>
            <Side
                transform={`perspective(10000cm) translateY(-${whatToTranslate(6)}px) rotateX(90deg)`}
            >
                <Empty isTransitioning={sideTransition} animate={animate} />
            </Side>
        </main>
    );
}

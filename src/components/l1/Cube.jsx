import React from "react";
import { useState, useEffect, useRef } from "react";
import Intro from "../l2/Intro";
import About from "../l2/About";
import Projects from "../l2/Projects";
import Socials from "../l2/Socials";
import Game from "../l2/Game";
import Empty from "../l2/Empty";
import { useData } from "../global/DataContext";

const Side = ({ transform, children }) => {
    const { animate, cubeAnimating } = useData();
    return (
        <section
            className={`absolute h-full w-full opacity-[0.999]`}
            style={{
                transition: animate ? "all 1s" : " ",
                transform,
                width: cubeAnimating ? window.innerHeight : "100%",
            }}
        >
            {children}
        </section>
    );
};

const sideData = {
    1: {
        rx: 0,
        ry: 0,
    },

    2: {
        rx: 180,
        ry: 0,
    },

    3: {
        rx: 0,
        ry: 90,
    },

    4: {
        rx: 0,
        ry: -90,
    },
    5: {
        rx: 90,
        ry: 0,
    },
    6: {
        rx: -90,
        ry: 0,
    },
};

export default function Cube() {
    const { activeSide, animate, cubeAnimating, setCubeAnimating } = useData();

    const cube = useRef(null);

    useEffect(() => {
        // return;
        const delay = (duration) =>
            new Promise((resolve) => {
                setTimeout(resolve, duration);
            });

        const rX = sideData[activeSide].rx;
        const rY = sideData[activeSide].ry;

        if (animate) {
            Promise.resolve()
                .then(() => timeline2(1500))
                .then(() => timeline3(1000))
                .then(() => timeline4(0));

            const timeline2 = (duration) => {
                cube.current.classList.add("*:overflow-hidden");
                setCubeAnimating(true);
                cube.current.style.scale = "0.3";
                cube.current.style.transform = `rotateX(${rX - 30}deg) rotateY(${rY - 30}deg)`;
                return delay(duration);
            };

            const timeline3 = (duration) => {
                setCubeAnimating(false);
                cube.current.style.scale = "1";
                cube.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) `;

                return delay(duration);
            };

            const timeline4 = (duration) => {
                cube.current.classList.remove("*:overflow-hidden");
                return delay(duration);
            };
        } else {
            cube.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
        }
    }, [activeSide]);

    const whatToTranslate = (num) => {
        if (cubeAnimating) return window.innerHeight / 2 + 2;
        if (activeSide == 1 || activeSide == 2) {
            if (num == 3 || num == 4) window.innerWidth / 2 + 2;
            else return window.innerHeight / 2 + 2;
        }
        if (activeSide == 3 || activeSide == 4) {
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
            className={`relative h-dvh w-full ${animate ? "transition-all duration-1000" : ""}`}
            style={{
                transformStyle: "preserve-3d",
                // transform: "rotateY(180deg) scaleX(-1) scaleY(-1)",
            }}
        >
            <Side transform={` translateZ(${whatToTranslate(1)}px)`}>
                <Intro />
            </Side>

            <Side
                transform={` translateZ(-${whatToTranslate(2)}px)  scaleY(-1)`}
            >
                <About />
            </Side>

            <Side
                transform={` translateX(-${whatToTranslate(3)}px) rotateY(90deg) scaleX(-1)`}
            >
                <Projects />
            </Side>
            <Side
                transform={` translateX(${whatToTranslate(4)}px) rotateY(90deg)`}
            >
                <Socials />
            </Side>

            <Side
                transform={` translateY(${whatToTranslate(5)}px)  rotateX(90deg) scaleY(-1) ${activeSide == 3 || activeSide == 4 ? "rotate(90deg)" : ""}`}
            >
                <Game />
            </Side>
            <Side
                transform={`translateY(-${whatToTranslate(6)}px) rotateX(90deg)  ${activeSide == 3 || activeSide == 4 ? "rotate(90deg)" : ""}`}
            >
                <Empty />
            </Side>
        </main>
    );
}

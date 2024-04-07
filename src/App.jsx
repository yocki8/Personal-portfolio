import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/global/Navbar";
import Main from "./components/l1/Main";
export default function App() {
    const [side, setSide] = useState(1);
    const [animate, setAnimate] = useState(false);

    const handleSetSide = (side) => {
        setSide(side);
    };

    const handleAnimate = () => {
        setAnimate(!animate);
    };

    return (
        <div className="grid h-dvh select-none place-items-center overflow-hidden bg-black  font-[avant] text-white">
            <Navbar
                activeSide={side}
                handleSetSide={handleSetSide}
                handleAnimate={handleAnimate}
            />

            <Main
                side={side}
                animate={animate}
            />
        </div>
    );
}

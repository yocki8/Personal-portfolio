import React, { useRef, useState } from "react";

const Button = ({ side, handleSetSide, handleSetActive, activeSide }) => {
    let sideName;
    if (side == 1) sideName = "Intro";
    if (side == 2) sideName = "About";
    if (side == 3) sideName = "Projects";
    if (side == 4) sideName = "Contact";
    if (side == 5) sideName = "Game";
    if (side == 6) sideName = "Empty";
    return (
        <button
            onClick={handleSetActive}
            data-side={side}
            className={`z-10 h-12 w-20 rounded-xl  text-sm font-bold tracking-wide  ${activeSide == side ? "text-[#28282B]" : "text-[--muddy]"} transition-all duration-200 hover:bg-[#b7ab981f] `}
        >
            {sideName}
        </button>
    );
};

export default function Navbar({ activeSide, handleSetSide, handleAnimate }) {
    const activeBtn = useRef();

    const handleSetActive = (e) => {
        const side = e.target.dataset.side;
        const diff = e.target.dataset.side - activeSide;
        const pos = Number(activeBtn.current.dataset.pos);
        const calc = pos + 80 * diff + 12 * diff;
        activeBtn.current.style.transform = `translateX(${calc}px)`;
        activeBtn.current.dataset.pos = calc;
        handleSetSide(side);
    };

    return (
        <nav className={`absolute top-4 z-10`}>
            <li className="reltive grid items-center gap-3 rounded-3xl border-b-8 border-b-[#28282B] bg-[#343434] px-10  py-2 md:flex">
                <button
                    ref={activeBtn}
                    data-pos={0}
                    className="absolute top-2 h-12 w-20 rounded-xl bg-[--muddy] transition-all duration-500 ease-[cubic-bezier(.25,.75,.5,1.25)] md:top-auto"
                ></button>
                <Button
                    activeSide={activeSide}
                    side={1}
                    handleSetActive={handleSetActive}
                />
                <Button
                    activeSide={activeSide}
                    side={2}
                    handleSetActive={handleSetActive}
                />
                <Button
                    activeSide={activeSide}
                    side={3}
                    handleSetActive={handleSetActive}
                />
                <Button
                    activeSide={activeSide}
                    side={4}
                    handleSetActive={handleSetActive}
                />
                <Button
                    activeSide={activeSide}
                    side={5}
                    handleSetActive={handleSetActive}
                />
                <Button
                    activeSide={activeSide}
                    side={6}
                    handleSetActive={handleSetActive}
                />
                <div className="ml-4 grid items-center gap-2">
                    <h1 className="text-center text-xs tracking-[0.3em]">
                        cube
                    </h1>

                    <label className="relative inline-flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            value=""
                            className="peer sr-only pointer-events-none"
                        />
                        <div
                            onClick={handleAnimate}
                            className="peer h-4 w-16 rounded-xl bg-[#343434] shadow-inner shadow-gray-900 outline-none ring-2 ring-[--matte] transition duration-300 after:absolute after:-left-2 after:-top-2 after:flex after:h-8 after:w-8 after:items-center  after:justify-center after:rounded-xl after:border-4 after:border-[--matte] after:bg-gray-50 after:outline-none after:duration-500 peer-checked:bg-[--muddy] peer-checked:after:translate-x-14 peer-hover:outline-none peer-hover:ring-[6px]  peer-hover:ring-[--matte]"
                        ></div>
                    </label>
                </div>
            </li>
        </nav>
    );
}

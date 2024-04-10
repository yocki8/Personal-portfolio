import React from "react";
import educationSvg from "../../../public/svg/education.svg";
const Card = () => {
    return (
        <div className="m-auto w-1/2 rounded-3xl bg-[#1B1B1B] text-center">
            <h1 className="my-2 text-2xl">Indus Public School </h1>
            <div className="h-52 rounded-xl  bg-matte"></div>
        </div>
    );
};

const TextContent = () => {
    return (
        <div className="relative m-auto flex gap-2 text-xl">
            <h1 className="bg-chinese h-10 rounded-lg text-4xl  font-bold ">
                Education
            </h1>
            <img className=" h-12 w-12" src={educationSvg}></img>
        </div>
    );
};

const RainbowSvg = () => {
    return (
        <div
            className="absolute right-40
                      top-0 h-20 w-20 rotate-90"
        ></div>
    );
};
export default function Education() {
    return (
        <section id="Education" className="bg-orangy relative text-muddy grid gap-10">
            <TextContent />
            <div className="relative  grid gap-10">
                <Card />
                <Card />
                <RainbowSvg />
            </div>
        </section>
    );
}

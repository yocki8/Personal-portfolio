import React from "react";
import achieve from "/svg/achievement.svg"
const BeforeText = ({ text }) => {
    return (
        <li className="grid h-[9vw] place-items-center border-t border-muddyo   text-orangy last:border-b">
            <h1>{text}</h1>
        </li>
    );
};

const AfterText = ({ text }) => {
    return (
        <li className="group grid h-[9vw] place-items-center">
            <div className="relative z-10 rounded-full flex h-0 w-full items-center justify-center overflow-hidden bg-orangy text-chinese transition-all duration-1000 group-hover:h-full">
                <h1>{text}</h1>
            </div>
        </li>
    );
};
export default function Achievements() {
    return (
        <div className="grid relative place-items-center gap-10 ">
            <h1 className=" text-sm uppercase tracking-[0.3em]">
                My Achievements{" "}
            </h1>
            <div className="relative w-full text-[5vw]">
                <ul>
                    <BeforeText text={"3* at Codechef"} />
                    <BeforeText text={"SIH Finalist"} />
                    <BeforeText text={"Pupil at Codeforces"} />
                    <BeforeText text={"Ideathon Finalist"} />
                    <BeforeText text={"120+ Typing Speed"} />
                </ul>
                <ul className="absolute top-0 w-full text-center">
                    <AfterText text={"3* at Codechef"} />
                    <AfterText text={"SIH Finalist"} />
                    <AfterText text={"Pupil at Codeforces"} />
                    <AfterText text={"Ideathon Finalist"} />
                    <AfterText text={"120+ Typing Speed"} />
                </ul>
            </div>
            <img src={achieve} className="md:h-96 h-32 pointer-events-none opacity-20 rotate-12 absolute md:top-40 -left-10 md:-left-32 "></img>
        </div>
    );
}

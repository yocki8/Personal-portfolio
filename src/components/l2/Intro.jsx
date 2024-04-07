import React, { useRef } from "react";
import texture from "../../../public/image/bTexture.jpg";
import snoopy from "../../../public/image/snoopy.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Snoopy = ( )=>{
    return (
        <div className="relative">
            <span className=" absolute -bottom-4 -right-4 z-10 h-1/3 w-1/3 border-b border-r"></span>
            <span className=" absolute -bottom-10 -right-10 z-10 h-1/4 w-1/4 border-b border-r"></span>
            <img src={snoopy} className=" d1 h-96 w-96  brightness-75"></img>
        </div>
    );
}
const TextContent = ({ isTransitioning }) => {
    const line = useRef();
    const intro = useRef();
    useGSAP(() => {
        // const text = new SplitType(line.current, { types: "lines" });
        // gsap.from(text.lines, {
        //     opacity: 0,
        //     stagger: 0.5,
        //     duration: 2,
        //     delay: 1,
        // });

        const tl = gsap.timeline();
        const text = new SplitType(intro.current, { types: "lines" });

        tl.from(text.lines, {
            duration: 1,
            opacity: 0,
            stagger: 1,
        })
            .from(line.current, {
                width: 0,
            })
            .from(line.current, {
                height: 0,
                duration: 1,
            });
    });
    return (
        <div
            className={`relative m-20 whitespace-nowrap rounded-2xl px-8 py-4 transition-all duration-1000`}
        >
            <span className="absolute  -ml-4 -mt-4 h-1/2 w-1/2 rounded-xl  border-l border-t"></span>
            <div ref={intro} className="grid gap-6">
                <h1 className="">Hy there,</h1>
                <h1 className=" rounded-2xl font-[Meatloaf] text-[3em] font-normal">
                    I'm Yuvraj Malhotra
                </h1>
                {/* <div className="flex"> */}
                <h1 className="">
                    <span className="mr-2 rounded-full border-b-8 border-l-8 border-[--matte]  bg-[--lighty] px-2  text-[--darky]">
                        &
                    </span>
                    I'm a
                </h1>
            </div>
            <div className="-mt-14 ml-36 h-40">
                <div
                    ref={line}
                    className=" ml-5 grid gap-2 overflow-hidden border-y"
                >
                    {" "}
                    <h1 className=" mt-2">Software Developer</h1>
                    <h1>Competitive Programmer</h1>
                    <h1 className=" mb-2 ">Web Developer</h1>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};
export default function Intro({ isTransitioning }) {
    return (
        <div
            id="home"
            className={`relative m-auto flex h-full w-full items-center gap-10 overflow-x-hidden overflow-y-scroll text-4xl text-[--lighty] transition-all duration-1000`}
            style={{
                width: isTransitioning ? window.innerHeight : "100%",
            }}
        >
            <img src={texture} className="absolute -z-10 h-full w-full"></img>
            <TextContent isTransitioning={isTransitioning} />
            <Snoopy />
        </div>
    );
}

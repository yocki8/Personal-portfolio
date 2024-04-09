import React, { useRef } from "react";
import texture from "../../../public/image/bTexture.jpg";
import snoopy from "../../../public/image/snoopy.jpg";
import wtsp from "../../../public/svg/whatsapp.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Snoopy = () => {
    return (
        <div className="relative inv">
            <span className=" absolute -bottom-4 -right-4 z-10 h-1/3 w-1/3 border-b border-r"></span>
            <span className=" absolute -bottom-10 -right-10 z-10 h-1/4 w-1/4 border-b border-r"></span>
            <img src={snoopy} className="rounded-tr-[2em] rounded-bl-[2em] h-96 w-96  brightness-75"></img>
        </div>
    );
};
const TextContent = () => {
    const line = useRef();
    const intro = useRef();

    useGSAP(() => {
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
        <div className="m-20 grid gap-2">
            <div
                className={`relative whitespace-nowrap rounded-2xl px-8 py-4 transition-all duration-1000`}
            >
                <span className="absolute  -ml-6 -mt-6 h-1/2 w-1/2 rounded-xl  border-l border-t"></span>
                <div ref={intro} className="grid gap-6">
                    <h1 className="">Hy there,</h1>
                    <h1 className="rounded-2xl font-[Meatloaf] text-[3em] font-normal">
                        I'm Yuvraj Malhotra
                    </h1>
                    <h1 className="">
                        <span className="mr-2 rounded-full border-b-8 border-l-8 border-matte  bg-lighty px-2  text-darky">
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
                        <h1 className=" mt-2">
                            Software{" "}
                            <span className="text-orangy">Engineer</span>
                        </h1>
                        <h1>
                            Competitive{" "}
                            <span className="text-orangy">Programmer</span>
                        </h1>
                        <h1 className=" mb-2 ">
                            Web <span className="text-orangy">Developer</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="m-auto -mb-20 flex items-end text-2xl text-muddy ">
                <label>Let's </label>
                <a href="https://wa.link/kpwvek" target="_blank">
                    <button className="group relative ml-4 flex items-center gap-2 overflow-hidden rounded-xl border px-4 py-2 text-white transition-all duration-300  hover:text-matte">
                        <img
                            src={wtsp}
                            className="h-6 w-6  invert transition-all  duration-300 group-hover:invert-0"
                        ></img>
                        <h1>Connect !</h1>
                        <span className="absolute left-1/2 top-full -z-10 h-full w-1/2 -translate-x-1/2 rounded-full bg-muddy transition-all duration-300 group-hover:scale-[3.5]"></span>
                    </button>
                </a>
            </div>
        </div>
    );
};
export default function Intro() {
    return (
        <div
            id="home"
            className={`relative m-auto flex h-full w-full items-center gap-10 text-4xl transition-all duration-1000`}
        >
            <img src={texture} className="absolute -z-10 h-full w-full"></img>
            <TextContent />
            <Snoopy />
        </div>
    );
}
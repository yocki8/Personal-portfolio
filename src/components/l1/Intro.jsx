import React, { useRef } from "react";
import snoopy from "/image/snoopy.jpg";
import wtsp from "/svg/whatsapp.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Snoopy = () => {
    return (
        <div className="relative">
            <span className=" absolute -bottom-4 -right-4 z-10 h-1/3 w-1/3 border-b border-r"></span>
            <span className=" absolute -bottom-10 -right-10 z-10 h-1/4 w-1/4 border-b border-r"></span>
            <img
                src={snoopy}
                draggable="false"
                className="h-96 w-96 rounded-bl-[2em] rounded-tr-[2em]  brightness-75"
            ></img>
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
            duration: 0.5,
            opacity: 0,
            delay: 0.7,
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
        <div className="mt-14 text-lighty whitespace-nowrap grid">
            <div className="relative">
                <span className="absolute -ml-6 -mt-6 h-1/2 w-1/2 rounded-xl border-l border-t"></span>
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
                <div className="-mt-14 ml-40 h-40">
                    <div
                        ref={line}
                        className="grid gap-2 overflow-hidden border-y"
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
            <div className="mx-auto mt-10 flex items-end gap-6 text-2xl text-muddy ">
                <label>Let's </label>
                <a href="https://wa.link/kpwvek" target="_blank">
                    <div className="group relative overflow-hidden rounded-xl">
                        <button className="relative z-10 flex items-center gap-2 overflow-hidden rounded-xl border px-4 py-2 text-white transition-all duration-300  group-hover:text-black">
                            <img
                                src={wtsp}
                                className="h-6 w-6 invert transition-all  duration-300 group-hover:invert-0"
                            ></img>
                            <h1 className="">Connect !</h1>
                        </button>
                        <span className="absolute left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-muddy transition-all duration-300 group-hover:scale-[3.5]"></span>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default function Intro() {

    return (
        <section
            style={{
                backgroundSize: "cover",
                backgroundImage: "url(image/bTexture.jpg)",
            }}
            id="Intro"
            className="flex h-dvh w-full items-center justify-between px-32 text-4xl"
        >
            <TextContent />
            <Snoopy />
        </section>
    );
}

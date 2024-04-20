import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/gsap-core";
import React, { useRef } from "react";

const TextBlock = ({ summary, para }) => {
    const block = useRef(null);

    useGSAP(() => {
        gsap.from(block.current, {
            color: "transparent",
            duration: 1,
            scrollTrigger: {
                trigger: block.current,
                start: "top 85%",
            },
        });
    });
    return (
        <li
            ref={block}
            className="relative grid gap-2  bg-muddy p-4 text-chinese"
        >
            <h1 className="md:w-fit flex  rounded-full bg-orangy px-4 pb-1 pt-2 md:py-1 font-bold">
                {summary}
            </h1>
            <p className="ml-2  md:text-lg">{para}</p>
        </li>
    );
};

export default function HowIHelp() {
    const desc = useRef();

    useGSAP(() => {
        gsap.from(desc.current, {
            rotate: "12deg",
            translateY: "100%",
            duration: 1,
            scrollTrigger: {
                trigger: desc.current,
                start: "bottom 90%",
            },
        });
    });

    return (
        <div className="grid gap-5 md:gap-10">
            <div className="overflow-hidden">
                <h1
                    ref={desc}
                    className=" origin-left text-center  text-xs uppercase tracking-[0.3em] md:text-left md:text-sm"
                >
                    how can i help you ?{" "}
                </h1>
            </div>
            <ol className="grid gap-2 overflow-hidden rounded-2xl shadow-[-10px_10px_10px_10px_black]">
                <TextBlock
                    summary={"Want cool Websites ?"}
                    para={
                        "Okay, I can help you by designing, building, and hosting a beautiful site that'll grow your business."
                    }
                />
                <TextBlock
                    summary={"Want to convert your idea into reality?"}
                    para={
                        "Got a next million dollor idea, Well, I'm here to help you in converting that idea to reality by my developement skills. I provide a powerful Web Application that fits your exact needs and can scale to millions."
                    }
                />
                <TextBlock
                    summary={"Want to sell online?"}
                    para={
                        "Cool, that is why I'm here to help you set up an e-commerce store that looks amazing, fast and makes you money."
                    }
                />
            </ol>
        </div>
    );
}

import React from "react";

export default function Contact({ isTransitioning, flag, animate }) {
    return (
        <div
            className={`d3 m-auto flex h-full w-full items-center justify-center gap-10 text-4xl ${animate ? "transition-all duration-1000" : ""}`}
            style={{
                width: isTransitioning || flag ? window.innerHeight : "100%",
            }}
        >
            <h1>4</h1>
            <h1>Contact</h1>
        </div>
    );
}

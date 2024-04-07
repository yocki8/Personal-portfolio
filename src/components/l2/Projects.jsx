import React from "react";

export default function Projects({ isTransitioning, flag, animate }) {
    return (
        <div
            className={`d2 m-auto flex h-full w-full items-center justify-center gap-10 text-4xl ${animate ? "transition-all duration-1000" : ""}`}
            style={{
                width: isTransitioning || flag ? window.innerHeight : "100%",
            }}
        >
            <h1>3</h1>
            <h1>Projects</h1>
        </div>
    );
}

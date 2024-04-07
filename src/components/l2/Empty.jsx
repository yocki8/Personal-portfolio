import React from "react";

export default function Empty({ isTransitioning }) {
    return (
        <div
            className="d5 m-auto flex h-full w-full items-center justify-center gap-10 text-4xl transition-all duration-1000"
            style={{
                width: isTransitioning ? window.innerHeight : "100%",
            }}
        >
            <h1>6</h1>
            <h1>Empty</h1>
        </div>
    );
}

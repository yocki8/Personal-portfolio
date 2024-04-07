import React from "react";

export default function Game({ isTransitioning }) {
    return (
        <div
            className="d4 m-auto flex h-full w-full items-center justify-center gap-10 text-4xl transition-all duration-1000"
            style={{
                width: isTransitioning ? window.innerHeight : "100%",
            }}
        >
            <h1>5</h1>
            <h1>Game</h1>
        </div>
    );
}

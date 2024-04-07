import React from "react";
import camera from "../../../public/image/camera.jpeg";

export default function About({ isTransitioning }) {
    return (
        <div
            className="d1 m-auto flex h-full w-full items-center justify-center gap-10 text-4xl transition-all duration-1000"
            style={{
                width: isTransitioning ? window.innerHeight : "100%",
            }}
        >
            <img
                src={camera}
                className="h-full w-full object-cover"
                style={{ height: window.innerHeight, width: window.innerWidth }}
            ></img>
        </div>
    );
}

import React, { useState, useRef } from "react";
import Navbar from "./components/global/Navbar";
import Cube from "./components/l1/Cube";

export default function App() {
    return (
        <div
            className="grid place-items-center bg-black font-[avant]  text-lighty  selection:bg-lighty selection:text-darky"
        >
            <Navbar />
            <Cube />
        </div>
    );
}

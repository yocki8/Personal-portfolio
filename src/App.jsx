import React, { useState, useRef } from "react";
import Navbar from "./components/global/Navbar";
import Cube from "./components/l1/Cube";
import { useData } from "./components/global/DataContext";

export default function App() {
    const { position } = useData();
    return (
        <div className="grid h-dvh w-dvw place-items-center bg-chinese font-[avant]  text-lighty  selection:bg-lighty selection:text-darky">
            <Navbar />
            <Cube />
        </div>
    );
}

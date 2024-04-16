import React, { useRef } from "react";
import WhoAmI from "../l2/WhoAmI";
import Achievements from "../l2/Achievements";
import HowIHelp from "../l2/HowIHelp";
import WhatIDo from "../l2/WhatIDo";

export default function AboutMe() {
    
    return (
        <section id="1" className="grid gap-56 px-28  pt-40 pb-20 text-muddy">
            <WhoAmI />
            <WhatIDo />
            <HowIHelp />
            <Achievements />
        </section>
    );
}

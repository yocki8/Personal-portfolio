import React from "react";
import Masonry from "react-responsive-masonry";

const list = [
    {
        name: "node js",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },

    {
        name: "C++",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
        name: "Python",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },

    {
        name: "React",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },

    {
        name: "Java",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Java_Black_icon.svg",
    },
    {
        name: "",
        url: "",
    },
];

const Card = ({ skill }) => {
    const rH = Math.floor(Math.random() * 150) + 100;
    return (
        <li
            style={{ height: rH + "px" }}
            className={`mr-4 mt-4 rounded-xl grid place-items-center border-x-[0.5px] border-x-muddyo bg-matte   text-center`}
        >
            <div className="grid   gap-2">
                <img src={skill.url} className="brightness h-16 w-16"></img>
                <h1 className="rounded-md bg-muddy text-chinese">
                    {skill.name}
                </h1>
            </div>
        </li>
    );
};
export default function SkillsList() {
    return (
        <ul className="flex flex-wrap gap-8 rounded-3xl">
            <Masonry className="" columnsCount={6}>
                {list.map((skill) => {
                    return <Card key={skill.name} skill={skill} />;
                })}
            </Masonry>
        </ul>
    );
}

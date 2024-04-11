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
        name: "C",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    },
    {
        name: "HTML",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
    },
    {
        name: "CSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
        name: "Sass ",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    },
    {
        name: "Tailwind",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
        name: "MongoDB",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb-svgrepo-com.svg",
    },
    {
        name: "Postman",
        url: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
    },
    {
        name: "EJS",
        url: "https://www.svgrepo.com/show/373574/ejs.svg",
    },
    {
        name: "ExpressJS",
        url: "https://www.svgrepo.com/show/330398/express.svg",
    },
    {
        name: "My sql",
        url: "https://www.svgrepo.com/show/373848/mysql.svg",
    },
    {
        name: "Vercel",
        url: "https://www.svgrepo.com/show/361653/vercel-logo.svg",
    },
    {
        name: "Digital ocean",
        url: "https://www.svgrepo.com/show/448218/digital-ocean.svg",
    },
    {
        name: "AWS",
        url: "https://www.svgrepo.com/show/448266/aws.svg",
    },
    {
        name: "Git",
        url: "https://www.svgrepo.com/show/452210/git.svg",
    },
    {
        name: "Github",
        url: "https://www.svgrepo.com/show/512317/github-142.svg",
    },
    {
        name: "Gitlab",
        url: "https://www.svgrepo.com/show/448226/gitlab.svg",
    },
    {
        name: "Figma",
        url: "https://www.svgrepo.com/show/452202/figma.svg",
    },
    {
        name: "Postgresql",
        url: "https://www.svgrepo.com/show/354200/postgresql.svg",
    },
];

const Card = ({ skill }) => {
    const rH = Math.floor(Math.random() * 50) + 100;
    return (
        <li
            style={{ height: rH + "px" }}
            className={` mr-2 mt-2 grid place-items-center rounded-lg bg-matte text-center transition-all duration-300  hover:bg-orangy`}
        >
            <div className="grid  gap-2">
                <img
                    src={skill.url}
                    className="brightness m-auto h-16 w-16"
                ></img>
                <h1 className=" rounded-md text-muddy">{skill.name}</h1>
            </div>
        </li>
    );
};
export default function SkillsList() {


    return(
        <ul className="grid gap-4">
            <li>
                <div className="h-40 w-40 d1 text-chinese text-4xl grid place-items-center"><h1>s</h1></div>
            </li>
            <li>
                <div className="h-40 w-40 d1"></div>
            </li>
        </ul>
    )
    return (
        <ul>
            <Masonry className="" columnsCount={6}>
                {list.map((skill) => {
                    return <Card key={skill.name} skill={skill} />;
                })}
            </Masonry>
        </ul>
    );
}

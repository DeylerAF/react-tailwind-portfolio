import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTelegramPlane, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiLaravel } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-2xl sm:text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Deyler Alvarez Fernández</span>
                </h1>
                <h2 className="text-2xl sm:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#009900"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    With a passion for turning innovative ideas into digital realities, I specialize in creating elegant, user-friendly web solutions that drive results. Let's collaborate and bring your digital vision to life.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/deyleraf/" target="_blank" >
                            <span className="bannerIcon">
                                <FaLinkedinIn />
                            </span>
                        </a>
                        <a href="https://github.com/DeylerAF" target="_blank" >
                            <span className="bannerIcon">
                                <FaGithub />
                            </span>
                        </a>
                        <a href="https://t.me/deyleraf" target="_blank" >
                            <span className="bannerIcon">
                                <FaTelegramPlane />
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiLaravel />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBanner
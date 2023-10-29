import React from "react";
import { FaTelegramPlane, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-contain rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">
                    Deyler Alvarez Fernández
                </h3>
                <p className="text-lg font-normal text-gray-400">
                    Full Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    With a passion for turning innovative ideas into digital realities, I specialize in creating elegant, user-friendly web solutions that drive results. Let's collaborate and bring your digital vision to life.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/deyleraf/"
                        target="_blank"
                    >
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </a>
                    <a href="https://github.com/DeylerAF" target="_blank">
                        <span className="bannerIcon">
                            <FaGithub />
                        </span>
                    </a>
                    <a href="https://t.me/deyleraf" target="_blank">
                        <span className="bannerIcon">
                            <FaTelegramPlane />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;

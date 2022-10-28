import React from "react";
import cx from "classnames";
import { useState } from "react";
import { useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function RightPanel({ heroRef, writingRef, projectsRef, skillsRef }) {
  const [activated, setActivated] = useState("");

  // aktif linki tespit ediyor
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        heroRef.current.getBoundingClientRect().top < window.screen.availHeight / 2 &&
        writingRef.current.getBoundingClientRect().top > 0
      ) {
        setActivated("hero");
      }
      if (
        writingRef.current.getBoundingClientRect().top < window.screen.availHeight / 2 &&
        projectsRef.current.getBoundingClientRect().top > 0 &&
        heroRef.current.getBoundingClientRect().top < 0
      ) {
        setActivated("writing");
      }
      if (
        projectsRef.current.getBoundingClientRect().top < window.screen.availHeight / 2 &&
        skillsRef.current.getBoundingClientRect().top > 0 &&
        writingRef.current.getBoundingClientRect().top < 0
      ) {
        setActivated("projects");
      }
      if (
        skillsRef.current.getBoundingClientRect().top < window.screen.availHeight / 2 &&
        projectsRef.current.getBoundingClientRect().top < 0
      ) {
        setActivated("skills");
      }
    });
  }, [heroRef, writingRef, projectsRef, skillsRef]);

  // tıklanılan linke göre sayfanın ilgili kısmına gidiyor
  const handleClick = (id) => {
    switch (id) {
      case 1:
        heroRef.current.scrollIntoView();
        break;
      case 2:
        writingRef.current.scrollIntoView();
        break;
      case 3:
        projectsRef.current.scrollIntoView();
        break;
      case 4:
        skillsRef.current.scrollIntoView();
        break;
    }
  };

  return (
    <div className="sticky top-8 flex flex-col">
      <div className="p-6 rounded-lg bg-[#232323] flex flex-col gap-8 w-[220px]">
        <ul className="flex flex-col">
          <li
            onClick={() => handleClick(1)}
            className={cx(
              "text-base flex items-center gap-1 p-2 select-none cursor-pointer hover:text-primary transition duration-300 rounded-md text-gray-200",
              {
                "!text-primary bg-[#202020]": activated === "hero",
              }
            )}>
            About
          </li>
          <li
            onClick={() => handleClick(2)}
            className={cx("text-base cursor-pointer p-2 select-none hover:text-primary transition duration-300 rounded-md text-gray-200", {
              "!text-primary bg-[#202020]": activated === "writing",
            })}>
            Writing
          </li>
          <li
            onClick={() => handleClick(3)}
            className={cx("text-base cursor-pointer p-2 select-none hover:text-primary transition duration-300 rounded-md text-gray-200", {
              "!text-primary bg-[#202020]": activated === "projects",
            })}>
            Projects
          </li>
          <li
            onClick={() => handleClick(4)}
            className={cx("text-base cursor-pointer p-2 select-none hover:text-primary transition duration-300 rounded-md text-gray-200", {
              "!text-primary bg-[#202020]": activated === "skills",
            })}>
            Skills
          </li>
        </ul>
        <div className="flex-col flex gap-4">
          <h4 className="text-white font-bold">Social Media</h4>
          <ul className="flex gap-6">
            <li>
              <a
                className="text-gray-300 hover:text-primary text-2xl transition duration-300"
                href="https://twitter.com/astrodokki"
                target="_blank"
                rel="noopener noreferrer">
                {<FaTwitter />}
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:text-primary text-2xl transition duration-300"
                href="https://linkedin.com/in/emirulucay"
                target="_blank"
                rel="noopener noreferrer">
                {<FaLinkedin />}
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:text-primary text-2xl transition duration-300"
                href="https://github.com/emirulucay"
                target="_blank"
                rel="noopener noreferrer">
                {<FaGithub />}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

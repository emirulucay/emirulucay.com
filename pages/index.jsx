import Head from "next/head";
import Link from "next/link";
import Project from "components/Project";
import { projects } from "data/projects";
import { External } from "data/icons";
import RightPanel from "components/RightPanel";
import { useEffect } from "react";
import { useRef } from "react";
import cx from "classnames";
import skills from "data/skills";
import Technology from "components/Technology";
import { getSortedPostsData } from "lib/posts";
import Date from "components/date";

export default function Home({ allPostsData }) {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const writingRef = useRef(null);

  useEffect(() => {
    heroRef.current.classList.add("delay");
    writingRef.current.classList.add("delay");
    projectsRef.current.classList.add("delay");
    skillsRef.current.classList.add("delay");
  }, []);

  return (
    <div className="container flex justify-between mx-auto pt-32 selection:bg-primary relative">
      <Head>
        <title>Emir Uluçay — Self taught designer and developer.</title>
        <meta name="description" content="18 years old self-taught designer and developer." />
      </Head>
      {/* left section */}
      <div className="flex flex-col">
        {/* hero section */}
        <div className="flex flex-col hero pt-12" ref={heroRef}>
          <h1 className="text-white font-bold">Emir Uluçay</h1>
          <div className="max-w-[550px] flex flex-col gap-4 text-gray-300 leading-relaxed mt-4">
            <p>
              I'm 18 years old self-taught designer and developer in Turkey. I love designing, coding and playing guitar. Also I'm improving
              my english.
            </p>
            <p>I'm using React, Next.js and TypeScript to creating awesome things.</p>

            <p>
              If you want to say hi, DM on Twitter or{" "}
              <a
                href="mailto:business.eux@gmail.com"
                className="select-none border-b-[1px] border-primary text-primary transition duration-300 hover:border-primary/80 hover:text-primary/80">
                contact
              </a>{" "}
              me.
            </p>
          </div>
        </div>

        {/* writings section */}
        <div className="flex flex-col py-8 mt-40 gap-8 writing" ref={writingRef}>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold">Writing</h3>
            <p className="text-gray-300 max-w-[550px]">
              Sometimes I'm writing about my days or weeks. I hope these writings help me to improve my english.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <article>
                  <Link href={`/writing/${id}`}>
                    <a className="text-primary transition duration-300 hover:text-primary/80">{title}</a>
                  </Link>
                  <br />
                  <small className=" text-gray-300">
                    <Date dateString={date} />
                  </small>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* projects section */}
        <div className="mt-40 pt-8 flex flex-col gap-12 projects" ref={projectsRef}>
          <h2 className="text-white font-bold">Projects</h2>
          <div className="flex flex-col gap-16">
            {projects.map((p, index) => (
              <Project name={p.name} url={p.url} text={p.text} key={index} technologies={p.technologies} />
            ))}
          </div>
          <div className={cx("mt-8 text-gray-300 hidden", { "!block": projects.length === 1 })}>
            <p>I have single project I can show you. But I have projects I'm working on now.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-12 mt-28 py-20 skills" ref={skillsRef}>
          <h3 className="text-white font-bold">Skills</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-8">
            {skills.map((s, index) => (
              <div className="w-full lg:w-1/3" key={index}>
                <Technology name={s} key={index} />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-300 opacity-20 mt-12" />
        <p className="text-gray-400 mt-4 mb-12 text-sm">
          created with ❤️ by{" "}
          <a className="text-white/80 transition duration-300 hover:text-white " href="https://emirulucay.com">
            Emir.
          </a>
        </p>
      </div>
      {/* right section */}
      <div className="hidden lg:block">
        <RightPanel heroRef={heroRef} projectsRef={projectsRef} skillsRef={skillsRef} writingRef={writingRef} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

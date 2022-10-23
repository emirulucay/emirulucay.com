import React from "react";
import { External } from "data/icons";
import Technology from "./Technology";

export default function Project({ name, url, text, technologies }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        {/* proje adı */}
        <h3 className="text-primary">
          <a
            className="select-none transition duration-300 hover:text-primary/80 flex items-center gap-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer">
            {name} <External className="text-8xl text-white" />
          </a>
        </h3>

        {/* proje açıklaması */}
        <div className="max-w-[550px] text-gray-300">
          <p>{text}</p>
        </div>

        {/* kullandığım teknolojiler */}
        <div className="flex flex-col gap-4 mt-2 text-gray-300">
          Technologies I used in this project:
          <div className="flex flex-col gap-4">
            {technologies.map((t, index) => (
              <Technology name={t} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

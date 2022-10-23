import React from "react";
import { SiNextdotjs, SiTailwindcss, SiReact, SiTypescript } from "react-icons/si";

export default function Technology({ name }) {
  // ikonu dinamikleştiriyor
  const getIcon = (name) => {
    switch (name) {
      case "Next.js":
        return <SiNextdotjs />;
        break;
      case "Tailwindcss":
        return <SiTailwindcss />;
        break;
      case "React":
        return <SiReact />;
        break;
      case "TypeScript":
        return <SiTypescript />;
        break;
    }
  };

  return (
    <div className="flex gap-2 items-center">
      {/* ikon */}
      <div className="text-white text-2xl">{getIcon(name)}</div>

      {/* text */}
      <div className="text-gray-300">{name}</div>
    </div>
  );
}

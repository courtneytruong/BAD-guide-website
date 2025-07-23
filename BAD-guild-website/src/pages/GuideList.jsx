import React from "react";
import guides from "../data/guides";
import { VscBook } from "react-icons/vsc";

export default function GuideList() {
  return (
    <main className="bg-neutral-50 rounded-2xl my-10 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className="text-4xl justify-items-center sm:text-4xl lg:text-5xl font-bold text-black mb-5">
        <span className="flex space-x-2">
          <VscBook className="relative top-[4px] align-middle" />
          <span>Guide Library</span>
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <a
            key={guide.id}
            href={guide.slug}
            className="block rounded-2xl bg-red-900 hover:bg-red-800 shadow-sm transition-all duration-200 p-4"
          >
            <h2 className="text-lg font-semibold text-neutral-50">
              {guide.title}
            </h2>
            <p className="text-sm font-semibold text-neutral-300  mt-1">
              {guide.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

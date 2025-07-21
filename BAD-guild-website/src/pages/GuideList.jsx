import React from "react";
import guides from "../data/guides";
import { VscBook } from "react-icons/vsc";

export default function GuideList() {
  return (
    <main className="bg-white p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className=" text-4xl text-shadow-lg/20 sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4">
        <span className="flex items-center space-x-2 ">
          <VscBook size={30} /> Guide Library
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <a
            key={guide.id}
            href={guide.slug}
            className="block rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 p-4"
          >
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              {guide.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {guide.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

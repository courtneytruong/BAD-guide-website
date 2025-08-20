//renders guide content using data file.
import { VscDebugBreakpointLog } from "react-icons/vsc";
import GuideImage from "./GuideImage";

export default function GuideRenderer({ guide }) {
  return (
    <article className="guide-content">
      {guide.sections.map((section, index) => (
        <div key={index} id={section.header} className="mb-10 scroll-mt-24">
          {/* Section Header */}
          <h2 className="justify-items-center text-2xl rounded-xl font-bold mb-2 items-center border-2 bg-gradient-to-r from-red-900 via-red-900 to-black text-white border-solid p-2">
            <span className="flex items-center gap-x-2">
              <VscDebugBreakpointLog /> {section.header}
              <VscDebugBreakpointLog />
            </span>
          </h2>

          {/* Paragraph Body + Images */}
          {section.body?.map((para, i) => {
            if (typeof para === "object" && para.type === "image") {
              return (
                <GuideImage
                  key={i}
                  src={para.src}
                  alt={para.alt}
                  caption={para.caption}
                />
              );
            }
            return (
              <p
                key={i}
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            );
          })}

          {/* Main List + Images */}
          {section.list && (
            <ul className="list-disc list-inside space-y-1 mt-2">
              {section.list.map((item, i) => {
                if (typeof item === "object" && item.type === "image") {
                  return (
                    <li key={i} className="list-none">
                      <GuideImage
                        src={item.src}
                        alt={item.alt}
                        caption={item.caption}
                      />
                    </li>
                  );
                }
                return (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                );
              })}
            </ul>
          )}

          {/* Subsections */}
          {section.subSections?.map((sub, subIndex) => (
            <div
              key={subIndex}
              id={sub.subHeader}
              className="mt-6 scroll-mt-20"
            >
              <h3 className="text-xl font-semibold mb-2">
                <span className="flex items-center gap-x-2">
                  <VscDebugBreakpointLog />
                  {sub.subHeader}
                </span>
              </h3>

              {/* Subsection List + Images */}
              {sub.list?.length > 0 && (
                <ul className="list-disc list-inside ml-5 space-y-1">
                  {sub.list.map((item, i) => {
                    if (typeof item === "object" && item.type === "image") {
                      return (
                        <li key={i} className="list-none">
                          <GuideImage
                            src={item.src}
                            alt={item.alt}
                            caption={item.caption}
                          />
                        </li>
                      );
                    }
                    return (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
}

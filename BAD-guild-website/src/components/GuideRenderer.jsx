//renders guide content using data file.

export default function GuideRenderer({ guide }) {
  return (
    <article>
      {guide.sections.map((section, index) => (
        <div key={index} id={section.header} className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-2">{section.header}</h2>

          {section.body?.map((para, i) => (
            <p
              key={i}
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}

          {section.list && (
            <ul className="list-disc list-inside space-y-1 mt-2">
              {section.list.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}

          {/* Subsections support */}
          {section.subSections?.map((sub, subIndex) => (
            <div
              key={subIndex}
              id={sub.subHeader}
              className="mt-6 scroll-mt-20"
            >
              <h3 className="text-xl font-semibold mb-2">{sub.subHeader}</h3>

              {/* Render bullet list if any */}
              {sub.list?.length > 0 && (
                <ul className="list-disc list-inside ml-5 space-y-1">
                  {sub.list.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
}

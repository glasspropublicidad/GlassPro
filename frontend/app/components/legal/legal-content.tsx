type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

type LegalContentProps = {
  sections: readonly LegalSection[];
  contactEmail?: string;
  contactPhone?: string;
};

export function LegalContent({
  sections,
  contactEmail,
  contactPhone,
}: LegalContentProps) {
  return (
    <section className="w-full px-6 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto grid gap-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[2rem] border border-[#0255D1]/12 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(12,76,120,0.16)] md:p-10"
          >
            <h2 className="text-2xl font-black text-[#373435] md:text-3xl">
              {section.title}
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[#373435]/72 md:text-base">
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.bullets ? (
                <ul className="space-y-3 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc marker:text-[#0255D1]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}

        {(contactEmail || contactPhone) && (
          <aside className="rounded-[2rem] border border-[#0255D1]/12 bg-[#F8FBFF] p-8 text-sm leading-7 text-[#373435]/72 shadow-[0_20px_60px_-35px_rgba(2,85,209,0.2)] md:p-10 md:text-base">
            <h2 className="text-2xl font-black text-[#373435]">
              Contacto
            </h2>
            <p className="mt-4">
              Si necesitas atención sobre estos documentos o sobre la información
              que compartiste con GlassPro, puedes comunicarte por los siguientes
              medios:
            </p>
            {contactEmail ? (
              <p className="mt-3">
                Correo:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-[#0255D1] underline decoration-[#0255D1]/30 underline-offset-4"
                >
                  {contactEmail}
                </a>
              </p>
            ) : null}
            {contactPhone ? (
              <p>
                Teléfono:{" "}
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="font-semibold text-[#0255D1] underline decoration-[#0255D1]/30 underline-offset-4"
                >
                  {contactPhone}
                </a>
              </p>
            ) : null}
          </aside>
        )}
      </div>
    </section>
  );
}

import siteConfig from "../config/site.config";

export default function Hero() {
  const { business, contact } = siteConfig;

  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
      <p className="eyebrow">{siteConfig.seo.city}</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-600 leading-tight text-ink sm:text-5xl">
        {business.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink/70">
        {business.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contacto" className="btn-primary">
          Pedir cita
        </a>
        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 font-medium text-ink hover:border-primary hover:text-primary"
        >
          {contact.phone}
        </a>
      </div>
    </section>
  );
}

import { Link } from "react-router"
import { services } from "../data/services"
import technicalSheet from "../imports/FICHA_TECNICA.pdf"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" aria-label="BPN, regresar al inicio">
            <img
              src="/images/bpn-logo-white.png"
              alt="Bacheo y Pavimentos del Noreste"
              className="h-11 w-auto"
            />
          </Link>
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Servicios"
          >
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="font-display text-sm font-bold uppercase tracking-wider text-white/65 transition-colors hover:text-orange"
              >
                {service.title}
              </a>
            ))}
          </nav>
          <Link
            to="/"
            className="border border-white/25 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider transition-colors hover:border-orange hover:text-orange"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/15">
          <div className="industrial-grid absolute inset-0 opacity-10" />
          <div className="relative mx-auto grid min-h-[34rem] max-w-7xl items-end gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
            <div className="lg:col-span-8">
              <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                Empresa de asfalto en Monterrey
              </p>
              <h1 className="font-display text-5xl font-bold uppercase leading-none sm:text-7xl">
                Servicios para vialidades que no pueden detenerse.
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-white/60 lg:col-span-4">
              Carpeta asfáltica, asfalto en frío y bacheo especializado con
              producción de mezcla en sitio, tecnología de alta presión y una
              operación diseñada para reducir cierres.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          {services.map((service) => (
            <article
              id={service.slug}
              key={service.slug}
              className="scroll-mt-24 border-b border-white/15 py-16 lg:py-20"
            >
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="font-tech text-sm font-bold text-orange">
                    {service.number}
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/65">
                    {service.intro}
                  </p>
                </div>
                <div className="grid gap-8 leading-relaxed text-white/65 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-orange py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-end lg:px-10">
            <div>
              <p className="mb-5 font-tech text-sm font-bold uppercase tracking-ultra text-white/70">
                Información técnica
              </p>
              <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                Conoce nuestro sistema de reparación.
              </h2>
            </div>
            <a
              href={technicalSheet}
              download
              className="bg-charcoal px-7 py-5 font-display font-bold uppercase tracking-wide transition-colors hover:bg-white hover:text-charcoal"
            >
              Descargar ficha técnica ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 bg-charcoal py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-xs uppercase tracking-widest text-white/40 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Bacheo y Pavimentos del Noreste</p>
          <p>Carpeta asfáltica · Asfalto en frío · Bacheo</p>
        </div>
      </footer>
    </div>
  )
}

import { useState } from "react"
import technicalSheet from "../imports/FICHA_TECNICA.pdf"

const navigation = [
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
]

const processSteps = [
  {
    number: "01",
    title: "Limpieza del bache",
    description:
      "Aire a alta velocidad retira piedras, polvo, agua e impurezas y permite detectar fisuras en la periferia.",
    image: "/images/process/01-limpieza.png",
  },
  {
    number: "02",
    title: "Sellado del bache",
    description:
      "La emulsión a alta presión sella grietas internas y externas para prevenir futuras filtraciones de agua.",
    image: "/images/process/02-sellado.png",
  },
  {
    number: "03",
    title: "Llenado a presión",
    description:
      "El agregado y la emulsión se combinan en sitio y se inyectan desde el fondo para una compactación superior.",
    image: "/images/process/03-llenado.png",
  },
  {
    number: "04",
    title: "Nivelación",
    description:
      "La reparación se lleva al nivel del asfalto original para recuperar una superficie continua y segura.",
    image: "/images/process/04-compactacion.png",
  },
  {
    number: "05",
    title: "Sellado final",
    description:
      "La mezcla se distribuye uniformemente para reforzar la adherencia y cohesión de sus partículas.",
    image: "/images/process/05-sellado-final.png",
  },
  {
    number: "06",
    title: "Poreo de la reparación",
    description:
      "Arena seca acelera el rompimiento de la emulsión y permite la apertura inmediata al tránsito.",
    image: "/images/process/06-poreo.png",
  },
]

const advantages = [
  {
    number: "01",
    title: "Mezcla fresca en sitio",
    copy: "Producimos únicamente el material necesario, sin depender de plantas de asfalto ni generar desperdicio.",
  },
  {
    number: "02",
    title: "Reparación durable",
    copy: "La aplicación a presión crea una mezcla fuerte y flexible con una compactación uniforme.",
  },
  {
    number: "03",
    title: "Menor afectación vial",
    copy: "Los bloqueos de tráfico son mínimos y la superficie puede utilizarse al terminar la intervención.",
  },
  {
    number: "04",
    title: "Operación más segura",
    copy: "Menos personal, herramientas y tiempo de exposición de la cuadrilla frente al flujo vehicular.",
  },
]

const testimonials = [
  {
    quote:
      "La intervención fue rápida y ordenada. El equipo pudo trabajar por zonas sin detener por completo nuestra operación, y la superficie quedó habilitada el mismo día.",
    role: "Responsable de mantenimiento",
    sector: "Operación industrial",
  },
  {
    quote:
      "Buscábamos una solución para varios puntos deteriorados del estacionamiento. El proceso fue claro, hubo poco desperdicio y el resultado se percibió desde el primer recorrido.",
    role: "Administración de instalaciones",
    sector: "Propiedad comercial",
  },
  {
    quote:
      "Lo más valioso fue reducir el tiempo de cierre. La cuadrilla llegó con el equipo necesario, atendió las áreas prioritarias y mantuvo una ejecución limpia y segura.",
    role: "Coordinación de operaciones",
    sector: "Logística y transporte",
  },
]

const gallery = [
  { position: "object-top", label: "Preparación de pavimento" },
  { position: "object-[center_34%]", label: "Unidad especializada BPN" },
  { position: "object-center", label: "Equipo de alta presión" },
  { position: "object-[center_70%]", label: "Aplicación de mezcla en sitio" },
  { position: "object-bottom", label: "Trabajo de reparación asfáltica" },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-concrete text-charcoal">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-concrete/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#inicio" aria-label="BPN, ir al inicio" className="block">
            <img
              src="/images/bpn-logo-primary.png"
              alt="Bacheo y Pavimentos del Noreste"
              className="h-11 w-auto"
            />
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegación principal"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#ficha"
            className="hidden items-center gap-4 bg-orange px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-charcoal lg:flex"
          >
            Ficha técnica <Arrow />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center border border-charcoal/20 lg:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-charcoal" />
              <span className="h-0.5 w-full bg-charcoal" />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-charcoal/10 bg-concrete px-6 py-6 lg:hidden"
            aria-label="Navegación móvil"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-charcoal/10 py-4 font-display text-lg font-bold uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#ficha"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-between bg-orange px-5 py-4 font-display font-bold uppercase text-white"
              >
                Ficha técnica <Arrow />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="relative flex min-h-screen items-end overflow-hidden bg-charcoal pt-20 text-white"
        >
          <div className="absolute inset-0">
            <img
              src="/images/bpn-field-collage.png"
              alt="Equipo especializado de BPN realizando trabajos de pavimentación"
              className="h-full w-full object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
          </div>

          <div className="industrial-grid absolute inset-0 opacity-20" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-24 lg:grid-cols-12 lg:px-10 lg:pb-24">
            <div className="lg:col-span-8">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-orange" />
                <p className="font-tech text-sm font-semibold uppercase tracking-ultra text-orange">
                  Ingeniería para vialidades
                </p>
              </div>
              <h1 className="max-w-5xl font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Empresa De Asfalto
                <span className="block text-orange">En Monterrey</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Reparación de carpeta asfáltica con tecnología de alta presión,
                mezcla fresca elaborada en sitio y una operación más limpia,
                segura y durable.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#proceso"
                  className="flex items-center justify-between gap-8 bg-orange px-7 py-4 font-display font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-charcoal"
                >
                  Conoce el proceso <Arrow />
                </a>
                <a
                  href={technicalSheet}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-8 border border-white/35 px-7 py-4 font-display font-bold uppercase tracking-wide transition-colors hover:border-white hover:bg-white hover:text-charcoal"
                >
                  Ver ficha técnica <Arrow />
                </a>
              </div>
            </div>

            <div className="flex items-end lg:col-span-4 lg:justify-end">
              <div className="border-l-2 border-orange pl-6">
                <p className="font-tech text-5xl font-bold text-white">BPN</p>
                <p className="mt-2 max-w-52 text-sm uppercase leading-relaxed tracking-wider text-white/60">
                  Bacheo y Pavimentos del Noreste
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-orange text-white"
          aria-label="Indicadores de desempeño"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-white/25 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
            <div className="py-8 sm:px-8 sm:first:pl-0">
              <p className="font-tech text-5xl font-bold">&lt;15</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/75">
                minutos por reparación
              </p>
            </div>
            <div className="py-8 sm:px-8">
              <p className="font-tech text-5xl font-bold">500 m²</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/75">
                de capacidad diaria
              </p>
            </div>
            <div className="py-8 sm:px-8 sm:last:pr-0">
              <p className="font-tech text-5xl font-bold">06</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/75">
                pasos en una operación
              </p>
            </div>
          </div>
        </section>

        <section id="tecnologia" className="bg-concrete py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
              <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                01 / Nuestra tecnología
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                La mejor empresa de asfalto.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-charcoal/75 sm:text-2xl">
                Como empresa de asfalto, somos especialistas en carpeta
                asfáltica, asfalto en frío y bacheo de alto rendimiento.
                Combinamos equipo especializado, materiales de calidad y una
                ejecución precisa para entregar vialidades más seguras,
                uniformes y duraderas.
              </p>
              <div className="mt-10 grid gap-px bg-charcoal/15 sm:grid-cols-2">
                {[
                  [
                    "Carpeta asfáltica",
                    "Instalación y reparación uniforme para vialidades resistentes y de larga duración.",
                  ],
                  [
                    "Asfalto en frío",
                    "Una solución eficiente para intervenir superficies sin depender de una planta de asfalto.",
                  ],
                  [
                    "Bacheo profesional",
                    "Reparaciones rápidas y precisas que reducen cierres viales y evitan el desperdicio.",
                  ],
                  [
                    "Tecnología especializada",
                    "Mezcla fresca en sitio, aplicación a presión y apertura inmediata al tráfico.",
                  ],
                ].map(([title, copy]) => (
                  <article key={title} className="bg-concrete p-6">
                    <span className="mb-5 block h-2 w-2 bg-orange" />
                    <h3 className="font-display text-xl font-bold uppercase">
                      {title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-charcoal/65">
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-8 border-b border-charcoal/20 pb-10 lg:flex-row lg:items-end">
              <div>
                <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                  02 / Proceso
                </p>
                <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                  Seis pasos.
                  <span className="block text-industrial">
                    Una sola operación.
                  </span>
                </h2>
              </div>
              <p className="max-w-md leading-relaxed text-charcoal/65">
                Limpiamos, sellamos, llenamos y terminamos cada reparación con
                un flujo continuo que reduce tiempos, personal y cierres viales.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-charcoal/15 bg-charcoal/15 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="group relative bg-white p-7 transition-colors hover:bg-sand"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="font-tech text-sm font-bold text-orange">
                      {step.number}
                    </span>
                    <img
                      src={step.image}
                      alt=""
                      className="h-24 w-24 rounded-full grayscale transition-all group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-charcoal/65">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="equipo"
          className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32"
        >
          <div className="industrial-grid absolute inset-0 opacity-10" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
              <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                03 / Equipo
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                Capacidad para responder.
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/65">
                Unidades autónomas de alta eficiencia, diseñadas para adaptarse
                a diferentes zonas de trabajo y mantener un ritmo constante de
                producción.
              </p>
            </div>

            <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:col-span-7">
              {[
                ["500", "m² diarios en condiciones determinadas"],
                ["2,000", "litros de almacenamiento de emulsión"],
                ["350", "cfm de soplador rotatorio"],
                ["95", "litros mínimos de tanque de agua"],
              ].map(([value, label]) => (
                <article key={label} className="bg-charcoal p-8">
                  <p className="font-tech text-5xl font-bold text-orange">
                    {value}
                  </p>
                  <p className="mt-4 max-w-56 text-sm uppercase leading-relaxed tracking-wider text-white/60">
                    {label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                  Trabajo en campo
                </p>
                <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                  Galería de proyectos.
                </h2>
              </div>
              <p className="max-w-lg leading-relaxed text-charcoal/65">
                Nuestro equipo lleva la producción de mezcla y la aplicación
                directamente al punto de reparación. Estas imágenes muestran la
                maquinaria, el personal y las condiciones reales en las que
                desarrollamos los trabajos de pavimentación y bacheo.
              </p>
            </div>

            <div className="grid auto-rows-[18rem] gap-3 sm:grid-cols-2 lg:grid-cols-12">
              {gallery.map((image, index) => (
                <figure
                  key={image.label}
                  className={`group relative overflow-hidden bg-charcoal ${
                    index === 0
                      ? "lg:col-span-7 lg:row-span-2"
                      : index === 1
                        ? "lg:col-span-5"
                        : index === 2
                          ? "lg:col-span-5"
                          : "lg:col-span-6"
                  }`}
                >
                  <img
                    src="/images/bpn-field-collage.png"
                    alt={image.label}
                    className={`h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 ${image.position}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6 pt-16">
                    <figcaption className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      {image.label}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="ventajas" className="bg-sand py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                  04 / Ventajas
                </p>
                <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                  Eficiencia que se ve en el camino.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {advantages.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-5 border-t border-charcoal/25 py-7 sm:grid-cols-[4rem_1fr]"
                  >
                    <span className="font-tech font-bold text-orange">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl leading-relaxed text-charcoal/65">
                        {item.copy}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-concrete py-24 sm:py-32"
          aria-labelledby="testimonios-title"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                  Experiencia de servicio
                </p>
                <h2
                  id="testimonios-title"
                  className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl"
                >
                  Lo que dicen nuestros clientes.
                </h2>
              </div>
              <p className="max-w-lg self-end leading-relaxed text-charcoal/65 lg:col-span-5 lg:col-start-8">
                Una reparación eficaz también se mide por la manera en que se
                integra a la operación del cliente. La rapidez, el orden y la
                comunicación son parte de cada proyecto que realizamos.
              </p>
            </div>

            <div className="grid gap-px bg-charcoal/15 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.role}
                  className="flex min-h-80 flex-col bg-white p-8"
                >
                  <span className="font-tech text-sm font-bold text-orange">
                    0{index + 1}
                  </span>
                  <blockquote className="mt-8 flex-1 font-display text-xl font-bold leading-relaxed">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="mt-8 border-t border-charcoal/15 pt-5">
                    <p className="font-display text-sm font-bold uppercase">
                      {testimonial.role}
                    </p>
                    <p className="mt-1 text-sm text-charcoal/50">
                      {testimonial.sector}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="bg-charcoal text-white">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center px-6 py-20 lg:px-16 lg:py-28">
              <div className="max-w-xl">
                <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                  Cobertura regional
                </p>
                <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">
                  Empresa de asfalto en Monterrey.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/65">
                  Atendemos proyectos de carpeta asfáltica, asfalto en frío y
                  bacheo en Monterrey y su zona metropolitana. Nuestra movilidad
                  nos permite llevar el equipo y la producción de mezcla al
                  lugar de trabajo, facilitando intervenciones en instalaciones
                  industriales, estacionamientos, accesos, patios y vialidades
                  de uso frecuente.
                </p>
                <p className="mt-6 leading-relaxed text-white/50">
                  Para preparar una propuesta consideramos la ubicación, la
                  extensión aproximada, el tipo de tránsito y las condiciones
                  visibles de la superficie. Esta información ayuda a definir el
                  alcance, organizar la operación y priorizar las áreas que
                  requieren atención.
                </p>
              </div>
            </div>
            <div className="min-h-[32rem] bg-industrial">
              <iframe
                title="Mapa de Monterrey, Nuevo León"
                src="https://www.google.com/maps?q=Monterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico&output=embed"
                className="h-full min-h-[32rem] w-full border-0 grayscale"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section
          className="bg-white py-24 sm:py-32"
          aria-labelledby="social-title"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-orange">
                  Redes sociales
                </p>
                <h2
                  id="social-title"
                  className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl"
                >
                  Sigue nuestro trabajo.
                </h2>
                <p className="mt-7 max-w-md leading-relaxed text-charcoal/65">
                  Compartimos procesos, avances de obra, detalles de nuestra
                  maquinaria y recomendaciones para conservar superficies
                  asfálticas en mejores condiciones.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
                {[
                  ["IG", "Instagram", "Proyectos y trabajo en campo"],
                  ["FB", "Facebook", "Novedades y cobertura de servicio"],
                  ["IN", "LinkedIn", "Tecnología y soluciones para empresas"],
                ].map(([mark, platform, description]) => (
                  <article
                    key={platform}
                    className="group flex min-h-64 flex-col justify-between border border-charcoal/15 p-6 transition-colors hover:border-orange hover:bg-sand"
                  >
                    <span className="font-tech text-3xl font-bold text-orange">
                      {mark}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase">
                        {platform}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="ficha"
          className="relative overflow-hidden bg-orange py-24 text-white sm:py-32"
        >
          <div className="absolute -right-16 -top-20 font-tech text-[18rem] font-bold leading-none text-white/10">
            BPN
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-6 font-tech text-sm font-bold uppercase tracking-ultra text-white/70">
              Información técnica
            </p>
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2 className="max-w-4xl font-display text-4xl font-bold uppercase leading-tight sm:text-6xl lg:text-7xl">
                Conoce a detalle nuestra tecnología.
              </h2>
              <a
                href={technicalSheet}
                download
                className="flex shrink-0 items-center justify-between gap-10 bg-charcoal px-7 py-5 font-display font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-charcoal"
              >
                Descargar ficha <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal py-14 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 lg:flex-row lg:items-end">
            <img
              src="/images/bpn-logo-white.png"
              alt="Bacheo y Pavimentos del Noreste"
              className="h-12 w-auto self-start"
            />
            <nav
              className="flex flex-wrap gap-x-8 gap-y-4"
              aria-label="Navegación del pie"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-sm font-bold uppercase tracking-wider text-white/60 transition-colors hover:text-orange"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-8 text-xs uppercase tracking-widest text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} Bacheo y Pavimentos del Noreste</p>
            <p>Infraestructura vial · México</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

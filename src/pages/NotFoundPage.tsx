import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-charcoal px-6 text-center text-white">
      <div>
        <p className="font-tech text-sm font-bold uppercase tracking-ultra text-orange">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold uppercase">
          Página no encontrada
        </h1>
        <Link
          to="/"
          className="mt-10 inline-block bg-orange px-7 py-4 font-display font-bold uppercase"
        >
          Regresar al inicio
        </Link>
      </div>
    </main>
  )
}

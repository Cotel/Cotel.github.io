export default function Header() {
  return (
    <header className="flex flex-col items-center text-center px-6 py-12 bg-accent text-white">
      <img
        src="/face-image.jpg"
        alt="Miguel Coleto Muñoz"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white"
      />
      <h1 className="text-4xl font-bold mb-2">
        Miguel Coleto Muñoz
      </h1>
      <h2 className="text-xl">
        Senior Fullstack & Founding Engineer
      </h2>
      <p className="text-lg mt-1 text-white/80">
        Scaling Products from Idea to 500k+ MAUs
      </p>
    </header>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f0e2] flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="text-center space-y-2">
        <h1 className="font-prettywise-black text-6xl md:text-8xl tracking-tight">
          2024
        </h1>
        <div className="font-prettywise-black text-5xl md:text-7xl tracking-tight space-y-2">
          <div>PORT</div>
          <div>FOLIO</div>
        </div>
        <div className="relative mt-4">
          <span className="font-prettywise-bold inline-block transform -rotate-6 text-xl md:text-2xl">
            Teun Elshout
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full max-w-6xl mt-16 md:mt-24">
        <div className="relative">
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-black" />

          {/* Navigation Items */}
          <ul className="font-aventra flex flex-wrap justify-between py-4 px-2 text-sm md:text-base">
            <li className="w-full md:w-auto text-center py-2 md:py-0">
              <span className="font-bold">WEB</span> DESIGN
            </li>
            <li className="w-full md:w-auto text-center py-2 md:py-0">
              SOCIAL MEDIA
            </li>
            <li className="w-full md:w-auto text-center py-2 md:py-0">
              <span className="font-bold">WEB</span> DEVELOPING
            </li>
            <li className="w-full md:w-auto text-center py-2 md:py-0">
              VIDEO EDITING
            </li>
            <li className="w-full md:w-auto text-center py-2 md:py-0">
              MARKETING
            </li>
          </ul>

          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
        </div>
      </nav>
    </main>
  );
}

<div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <main className="h-screen relative snap-start">
        <Image
          src="/images/achtergrond.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover z-0"
          quality={100}
          priority
        />

        <div className="absolute inset-0 bg-[#f8f0e2] bg-opacity-70 z-10" />

        <div className="relative z-20 h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-prettywise-black text-6xl md:text-8xl tracking-tight mb-[-3rem] ml-[-2.8rem]">
              2025
            </h1>
            <div className="font-prettywise-bold text-[10rem] ml-[-1.7rem] tracking-tight">
              <div className="mb-[-6rem] tracking-[5px]">PORT</div>
              <div className="tracking-[5px]">FOLIO</div>
            </div>
            <div className="relative mt-[-1rem]">
              <svg viewBox="0 0 400 80" className="w-96 h-24">
                <defs>
                  <path
                    id="curve"
                    d="M 20,40 Q 200,130 380,40"
                    fill="transparent"
                  />
                </defs>
                <text className="font-prettywise-bold text-2xl md:text-5xl fill-[#000000]" letterSpacing="0.1em">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Teun Elshout
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <nav className="w-full max-w-6xl mt-24">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#000000]" />
              
              <ul className="font-aventra flex justify-between py-8 px-2 text-lg md:text-xl">
                <li className="tracking-wider">
                  <span className="font-bold">WEB</span> DESIGN
                </li>
                <li className="tracking-wider">
                  SOCIAL MEDIA
                </li>
                <li className="tracking-wider">
                  <span className="font-bold">WEB</span> DEVELOPING
                </li>
                <li className="tracking-wider">
                  VIDEO EDITING
                </li>
                <li className="tracking-wider">
                  MARKETING
                </li>
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#000000]" />
            </div>
          </nav>

          <button 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/4 animate-bounce"
          >
          </button>
        </div>
      </main>
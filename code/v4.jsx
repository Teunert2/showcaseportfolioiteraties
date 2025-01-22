<div
  ref={secondPageRef}
  className="min-h-screen p-8 md:p-16 relative snap-start"
>
  <Image
    src="/images/background.png"
    alt="Background"
    fill
    sizes="100vw"
    className="object-cover z-[-1]"
    quality={100}
  />
  <div className="absolute inset-0 bg-[#f8f0e2] bg-opacity-70 z-[-1]" />

  <div className="relative z-10">
    <section className="mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
      <h2 className="text-4xl  mb-8 font-display font-petale">ONDERWIJS</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="font-objectivity border border-paars rounded-full px-4 py-1 text-sm">
            2016 - 2023
          </div>
          <h3 className="font-objectivity text-xl text-paars">
            Theresialyceum
          </h3>
        </div>
        <div className="flex items-start gap-4">
          <div className="font-objectivity border border-paars rounded-full px-4 py-1 text-sm">
            2023 - 2027
          </div>
          <div>
            <h3 className="font-objectivity text-xl text-paars">
              Fontys University
            </h3>
            <p className="font-objectivity text-xl text-paars">
              of Applied Sciences
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
      <div className="flex items-center gap-8">
        <div className="relative inline-block">
          <div className="border-[2px] border-paars px-4 py-1">
            <h2 className="text-4xl font-petale tracking-normal">SOFTWARE</h2>
          </div>
          <div className="absolute -left-[3px] -top-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
          <div className="absolute -right-[3px] -top-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
          <div className="absolute -left-[3px] -bottom-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>
          <div className="absolute -right-[3px] -bottom-[3px] w-1.5 h-1.5 border border-paars bg-white"></div>

          <div className="absolute left-1/2 -top-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-x-1/2"></div>
          <div className="absolute left-1/2 -bottom-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-x-1/2"></div>
          <div className="absolute top-1/2 -left-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-y-1/2"></div>
          <div className="absolute top-1/2 -right-[3px] w-1.5 h-1.5 border border-paars bg-white -translate-y-1/2"></div>
        </div>

        <div className="flex gap-4">
          <div className="">
            <Image
              src="/images/psd.png"
              alt="Photoshop"
              width={50}
              height={50}
              className="w-15 h-15"
            />
          </div>
          <div className="">
            <Image
              src="/images/figma.png"
              alt="Figma"
              width={50}
              height={50}
              className="w-15 h-15"
            />
          </div>
          <div className="">
            <Image
              src="/images/vsc.png"
              alt="Visual Studio"
              width={50}
              height={50}
              className="w-15 h-15"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-500 mt-32">
      <h2 className="text-4xl mb-6 font-display font-petale">CONTACT</h2>
      <div className="space-y-4">
        <Link
          href="mailto:teunelshout@gmail.com"
          className="font-objectivity flex items-center gap-4 text-paars hover:underline"
        >
          <div className="rounded-full border border-current p-2">
            <svg
              xmlns="http"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          teunelshout@gmail.com
        </Link>
        <Link
          href="https://linkedin.com/in/teun-elshout-26002a259/"
          className="font-objectivity flex items-center gap-4 text-paars hover:underline"
        >
          <div className="rounded-full border border-current p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          linkedin.com/in/teun-elshout-26002a259/
        </Link>
      </div>
    </section>

    {/* Portrait Image */}
    <div className="absolute top-16 right-48 w-96 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-700">
      <Image
        src="/images/teunelshout.png"
        alt="Portrait"
        width={400}
        height={600}
        className="grayscale sepia-[0.2] opacity-95 brightness-[0.98] contrast-[0.95]"
      />
      <div className="absolute bottom-[4rem] right-[-5rem]">
        <span className="font-handtekening text-[5rem] text-paars transform inline-block rotate-[-30deg] origin-bottom-right">
          Teun Elshout
        </span>
      </div>
    </div>
  </div>
</div>;

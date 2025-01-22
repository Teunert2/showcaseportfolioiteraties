eturn (
    <div className="min-h-screen bg-[#FAF9F6] p-8 md:p-16 relative">
      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 font-display">ONDERWIJS</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="border border-purple-600 rounded-full px-4 py-1 text-sm">
              2016 - 2023
            </div>
            <h3 className="text-xl text-purple-600">Theresialyceum</h3>
          </div>
          <div className="flex items-start gap-4">
            <div className="border border-purple-600 rounded-full px-4 py-1 text-sm">
              2023 - 2027
            </div>
            <div>
              <h3 className="text-xl text-purple-600">Fontys University</h3>
              <p className="text-xl text-purple-600">of Applied Sciences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="mb-16">
        <div className="border border-black inline-block px-6 py-2 mb-6">
          <h2 className="text-3xl font-display">SOFTWARE</h2>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#001E36] p-3 rounded">
            <Image
              src="/placeholder.svg"
              alt="Photoshop"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div className="bg-[#001E36] p-3 rounded">
            <Image
              src="/placeholder.svg"
              alt="Figma"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div className="bg-[#001E36] p-3 rounded">
            <Image
              src="/placeholder.svg"
              alt="Visual Studio"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-4xl font-bold mb-6 font-display">CONTACT</h2>
        <div className="space-y-4">
          <Link 
            href="mailto:teunelshout@gmail.com"
            className="flex items-center gap-4 text-purple-600 hover:underline"
          >
            <div className="rounded-full border border-current p-2">
              <Mail className="w-5 h-5" />
            </div>
            teunelshout@gmail.com
          </Link>
          <Link 
            href="https://linkedin.com/in/teun-elshout-26002a259/"
            className="flex items-center gap-4 text-purple-600 hover:underline"
          >
            <div className="rounded-full border border-current p-2">
              <Linkedin className="w-5 h-5" />
            </div>
            linkedin.com/in/teun-elshout-26002a259/
          </Link>
        </div>
      </section>

      {/* Portrait Image */}
      <div className="absolute top-16 right-16 w-96">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/showcase_portfolio_s3-dEtcdHg2FpjSHqpHrhgSlW4yEiQyv3.png"
          alt="Portrait"
          width={400}
          height={600}
          className="grayscale"
        />
        <div className="mt-4 text-right">
          <span className="font-signature text-4xl text-purple-600">Teun Elshout</span>
        </div>
      </div>
    </div>
  )
}

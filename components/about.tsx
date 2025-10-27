"use client"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1600&query=sustainable-eco-friendly-manufacturing-facility-green)",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img
              src="/eco-friendly-packaging-manufacturing-sustainable-p.jpg"
              alt="Aran Packaging Facility"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Leading <span className="text-green-600">Eco-Packaging</span> Solutions
            </h2>

            <p className="text-emerald-700 text-lg mb-6 leading-relaxed">
              Established in 2021, Aran Innovative Packaging is committed to providing sustainable, biodegradable, and
              compostable packaging solutions for businesses across India. Based in Salem, we serve businesses of all
              sizes with innovative eco-friendly alternatives.
            </p>

            <p className="text-emerald-700 text-lg mb-8 leading-relaxed">
              Our mission is to reduce plastic waste and promote sustainable business practices through high-quality,
              affordable, and environmentally responsible packaging solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "500+", label: "Happy Clients" },
                { number: "50+", label: "Product Types" },
                { number: "100%", label: "Eco-Friendly" },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-100 to-green-100 p-5 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-900">{stat.number}</div>
                  <div className="text-emerald-700 text-base font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

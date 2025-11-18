const routes = [
  {
    days: '3-Day Escape',
    route: ['Arusha', 'Tarangire', 'Ngorongoro Crater'],
  },
  {
    days: '5-Day Explorer',
    route: ['Arusha', 'Lake Manyara', 'Serengeti', 'Ngorongoro Crater'],
  },
  {
    days: '7-Day Grand Safari',
    route: ['Arusha', 'Tarangire', 'Central Serengeti', 'Northern Serengeti', 'Ngorongoro Crater'],
  },
]

export default function RoutesTimeline() {
  return (
    <section id="kilimanjaro" className="bg-[#23221c] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-white">Signature Routes</h2>
          <p className="text-white/70 mt-2">Curated itineraries tailored to your pace.</p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {routes.map((r, i) => (
              <div key={r.days} className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="sm:w-1/2" />
                <div className="sm:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c6aa6b]/20 border border-[#c6aa6b]/40 flex items-center justify-center text-[#c6aa6b] font-semibold">{i+1}</div>
                    <h3 className="font-[Playfair_Display] text-xl text-white">{r.days}</h3>
                  </div>
                  <div className="mt-3 text-white/80">
                    {r.route.map((stop, idx) => (
                      <div key={stop} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c6aa6b]" />
                        <p>{stop}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

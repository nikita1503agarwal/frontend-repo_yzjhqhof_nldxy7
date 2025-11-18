const testimonials = [
  {
    name: 'Elena, Spain',
    quote: 'Every detail was flawless. Our guide felt like family and the sightings were unbelievable.',
    avatar: 'https://i.pravatar.cc/100?img=5',
    flag: '🇪🇸',
  },
  {
    name: 'Michael, USA',
    quote: 'Effortless luxury with authentic heart. We saw the Big Five in two days!',
    avatar: 'https://i.pravatar.cc/100?img=15',
    flag: '🇺🇸',
  },
  {
    name: 'Sophie, UK',
    quote: 'The Kilimanjaro crew was exceptional. Summit day was emotional and triumphant.',
    avatar: 'https://i.pravatar.cc/100?img=32',
    flag: '🇬🇧',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-[#23221c]">Guest Stories</h2>
          <p className="text-[#23221c]/70 mt-2">Real moments from real journeys.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-[#c6aa6b]/30 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-[#23221c]">{t.name} <span className="ml-1">{t.flag}</span></p>
                  <p className="text-[#23221c]/60 text-sm">Verified guest</p>
                </div>
              </div>
              <p className="mt-4 text-[#23221c]/90">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

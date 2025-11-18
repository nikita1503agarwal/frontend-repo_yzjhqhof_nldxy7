const WHATSAPP = 'https://wa.me/255700000000?text=Hello%20Via%20Africa%20Expeditions!%20I%27m%20interested%20in%20your%20special%20offers.'

const offers = [
  {
    title: 'Green Season Luxury – 5 Nights',
    desc: 'Combine Serengeti and Ngorongoro in handpicked boutique camps. Includes private vehicle and expert guide.',
    price: 'From $3,950 pp',
  },
  {
    title: 'Kilimanjaro Private Lemosho – 8 Days',
    desc: 'Premium camp setup, gourmet meals, and elite summit team with high summit success rates.',
    price: 'From $2,890 pp',
  },
  {
    title: 'Zanzibar Hideaway – 4 Nights',
    desc: 'Oceanfront villa with butler service and dhow sunset cruise included.',
    price: 'From $1,680 pp',
  },
]

export default function SpecialOffers() {
  return (
    <section id="safaris" className="bg-[#faf9f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-[#23221c]">Special Offers</h2>
          <p className="text-[#23221c]/70 mt-2">Limited-time journeys with exclusive value.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div key={o.title} className="relative rounded-2xl bg-gradient-to-br from-[#c6aa6b]/20 via-white to-[#c6aa6b]/10 border border-[#c6aa6b]/30 p-6 shadow-sm">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow:'inset 0 1px 0 rgba(255,255,255,0.6)'}}></div>
              <h3 className="font-[Playfair_Display] text-xl text-[#23221c]">{o.title}</h3>
              <p className="text-[#23221c]/80 mt-2">{o.desc}</p>
              <p className="mt-4 font-semibold text-[#b4995c]">{o.price}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-[#c6aa6b] text-[#23221c] px-5 py-2 hover:bg-[#b4995c] transition-colors">Book via WhatsApp</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

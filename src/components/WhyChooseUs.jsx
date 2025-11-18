import { ShieldCheck, Leaf, Users } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Expert Guides', desc: 'Handpicked, certified professionals with decades in the bush.' },
  { icon: Users, title: 'Private Vehicles', desc: 'Every journey is private – tailored pace, premium comfort.' },
  { icon: Leaf, title: 'Sustainability', desc: 'We support local conservancies and low-impact travel.' },
]

export default function WhyChooseUs() {
  return (
    <section id="zanzibar" className="bg-[#faf9f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-[#23221c]">Why Choose Us</h2>
          <p className="text-[#23221c]/70 mt-2">Service with substance and soul.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl bg-white border border-[#c6aa6b]/30 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#c6aa6b]/20 border border-[#c6aa6b]/40 flex items-center justify-center text-[#c6aa6b]">
                <Icon />
              </div>
              <h3 className="font-[Playfair_Display] text-xl mt-4 text-[#23221c]">{title}</h3>
              <p className="text-[#23221c]/80 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

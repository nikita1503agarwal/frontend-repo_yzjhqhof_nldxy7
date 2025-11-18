const WHATSAPP = 'https://wa.me/255700000000?text=Hello%20Via%20Africa%20Expeditions!%20Please%20help%20me%20plan%20a%20trip.'

export default function Contact() {
  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const text = encodeURIComponent(`Hello Via Africa Expeditions! My name is ${name}. ${message} (${email})`)
    window.open(`https://wa.me/255700000000?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="bg-[#23221c] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-white">Plan With Us</h2>
          <p className="text-white/70 mt-2">Share your dreams — we handle the details.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm mb-1">Name</label>
                <input name="name" required className="w-full rounded-md bg-black/30 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#c6aa6b]" />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-md bg:black/30 bg-black/30 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#c6aa6b]" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-white/80 text-sm mb-1">Message</label>
              <textarea name="message" rows="5" className="w-full rounded-md bg-black/30 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#c6aa6b]" placeholder="Tell us dates, group size, interests..." />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="rounded-full bg-[#c6aa6b] text-[#23221c] px-6 py-3 font-medium hover:bg-[#b4995c]">Send via WhatsApp</button>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white underline underline-offset-4">Open Chat</a>
            </div>
          </form>

          <div className="text-white/90">
            <p className="text-[#c6aa6b] tracking-[0.25em] uppercase text-xs">Direct Lines</p>
            <h3 className="font-[Playfair_Display] text-2xl mt-2">Via Africa Expeditions</h3>
            <p className="mt-2 text-white/80">Arusha, Tanzania</p>
            <p className="mt-2">WhatsApp: +255 700 000 000</p>
            <p>Email: hello@viaafrica.co.tz</p>

            <div className="mt-6">
              <p className="text-white/70 text-sm">Trusted by explorers worldwide</p>
              <div className="mt-3 flex items-center gap-4">
                <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="TripAdvisor" className="h-8" />
                <div className="flex items-center text-[#c6aa6b]">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

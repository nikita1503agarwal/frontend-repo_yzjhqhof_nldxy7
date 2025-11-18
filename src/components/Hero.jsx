import { motion } from 'framer-motion'

const WHATSAPP = 'https://wa.me/255700000000?text=Hello%20Via%20Africa%20Expeditions!%20I%20would%20like%20to%20plan%20a%20private%20safari%2C%20Kilimanjaro%20trek%2C%20or%20Zanzibar%20escape.'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      {/* Background video/image */}
      <div className="absolute inset-0 -z-10">
        <video
          className="hidden sm:block h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-journey-through-the-savannah-8578/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <img
          className="sm:hidden h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1543246746-9e3c90d19f3c?q=80&w=2000&auto=format&fit=crop"
          alt="Serengeti sunrise"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#23221c]/90" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c6aa6b] tracking-[0.3em] uppercase text-xs mb-4"
          >
            Tanzania • East Africa
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-[Playfair_Display] text-5xl sm:text-6xl md:text-7xl leading-[1.05] drop-shadow-xl"
          >
            Explore Tanzania’s Wild Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/90"
          >
            Private Safaris | Kilimanjaro Treks | Zanzibar Escapes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6aa6b] hover:bg-[#b4995c] text-[#23221c] px-6 py-3 font-medium shadow-lg shadow-black/20 transition-colors"
            >
              Plan Your Adventure
            </a>
            <a href="#safaris" className="text-white/80 hover:text-white underline underline-offset-4">Discover More</a>
          </motion.div>
        </div>
      </div>

      {/* Parallax foreground silhouettes */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-t from-[#23221c] to-transparent" />
    </section>
  )
}

import { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536293508743-5a2ff6f2d3ad?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509098681022-2f909d21d935?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="about" className="bg-[#23221c] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl text-white">Gallery</h2>
          <p className="text-white/70 mt-2">Cinematic glimpses from the field.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => setLightbox(src)} className="group relative overflow-hidden rounded-2xl">
              <img src={src} alt="Safari" className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Safari large" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  )
}

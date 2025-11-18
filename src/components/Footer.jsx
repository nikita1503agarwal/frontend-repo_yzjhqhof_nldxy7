export default function Footer() {
  return (
    <footer className="bg-[#0f0f0d] text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Via Africa Expeditions. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://www.tripadvisor.com/" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="TripAdvisor" className="h-6" />
          </a>
          <a href="https://www.instagram.com/" className="hover:text-white">Instagram</a>
          <a href="https://www.facebook.com/" className="hover:text-white">Facebook</a>
          <a href="https://x.com/" className="hover:text-white">X</a>
        </div>
      </div>
    </footer>
  )
}

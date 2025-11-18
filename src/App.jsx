import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SpecialOffers from './components/SpecialOffers'
import RoutesTimeline from './components/RoutesTimeline'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#23221c]">
      <Navbar />
      <Hero />
      <SpecialOffers />
      <RoutesTimeline />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

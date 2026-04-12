import './App.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import VisitorCount from './components/VisitorCount'

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  }

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  // Sample news data - replace with actual data later
  const featuredNews = [
    {
      id: 1,
      title: "Story of the Namao",
      date: "January 22, 2026",
      excerpt: "The Lake Sturgeon (Namao) is in danger of extinction.",
      image: "/SturgeonBanner.jpg",
      category: "Events"
    }
  ]

  const quickLinks = [
    { title: "About TCN", to: "/pages/AboutTCN", icon: "🏛️" },
    { title: "Who We Are", to: "/pages/WorldViewHome", icon: "🌿" },
    { title: "Photo Gallery", to: "/pages/PhotoGallery", icon: "📷" },
    { title: "TCN Achimowin", to: "https://tcnaux.ca", icon: "👤" },
  ]

  return (
    <div className="relative w-full min-h-screen bg-[#F1F3E0]">
      {/* Hero Section - Full viewport with video/image background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="hidden lg:block h-full">
            <img src="/TCNairnsky.jpg" className="w-full h-full object-cover" alt="TCN Territory"/>
          </div>
          <div className="block lg:hidden h-full">
            <img src="/TCNairnsky.jpg" className="w-full h-full object-cover" alt="TCN Territory"/>
          </div>
          {/* Simple dark overlay */}
          <div className="absolute inset-0 bg-black/40"/>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col justify-between h-full"
          >
            <div className='flex flex-col justify-start items-center mt-12 pt-6'>
              <img 
                src="/tcnlogolg.png" 
                className="w-48 md:w-64 lg:w-80 mx-auto mb-6 drop-shadow-2xl"
                alt="TCN Logo"
              />
            </div>
            <div className="flex flex-col justify-end items-center mb-12 pb-6">
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/75 text-center drop-shadow-lg">
                Tataskweyak Cree Nation
              </div>
            </div>
            
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Bar */}
      <section className="sticky top-0 z-100 bg-[#778873] border-b-4 border-[#A1BC98]">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-evenly md:justify-center md:gap-8 py-3 md:py-4"
          >
            {quickLinks.map((link, index) => (
              <motion.div key={index} variants={fadeUp} className="flex-1 md:flex-none">
                <Link 
                  to={link.to}
                  className="flex flex-col items-center justify-center px-1 md:px-5 py-2 rounded-lg
                           text-white hover:bg-[#A1BC98] 
                           transition-all duration-300 group md:flex-row md:gap-2"
                >
                  <div className="text-xl md:text-2xl group-hover:scale-110 transition-transform mb-1 md:mb-0 text-center w-full md:w-auto">{link.icon}</div>
                  <div className="text-[10px] md:text-sm font-medium leading-tight text-center">{link.title}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F1F3E0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#778873]">
                Latest <span className="text-[#A1BC98]">News</span>
              </h2>
              <a 
                href="https://namaotcn.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#778873] hover:text-[#A1BC98] text-sm font-medium 
                         flex items-center gap-1 transition-colors"
              >
                View All 
                <span className="text-lg">→</span>
              </a>
            </div>
            <div className="w-20 h-1 bg-[#A1BC98] rounded-full"/>
          </motion.div>

          {/* News Grid - Bento Style */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col w-full"
          >
            {/* Featured Large Card */}
            <motion.div variants={fadeUp} className="w-full">
              <a href="https://namaotcn.ca/" target="_blank" rel="noopener noreferrer"
                className="group relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden
                            border-4 border-[#A1BC98] bg-white shadow-lg hover:shadow-xl 
                            transition-all duration-500">
                <div className="absolute inset-0 bg-black/30 z-10"/>
                <img 
                  src="/sturgeonimage1.jpg" 
                  className="absolute inset-0 w-full h-full object-cover 
                           group-hover:scale-105 transition-transform duration-700"
                  alt="Featured news"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-[#A1BC98] text-white text-xs font-bold 
                                 rounded-full mb-4">
                    Featured
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 
                               group-hover:text-[#D2DCB6] transition-colors">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2">
                    {featuredNews[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">{featuredNews[0].date}</span>
                    <span className="text-[#D2DCB6] group-hover:translate-x-2 transition-transform duration-300">
                      Read more →
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

           
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 md:py-24 px-4 bg-[#D2DCB6]">
        <div className="max-w-7xl mx-auto">
          {/* About Section - Asymmetric Layout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 mb-20"
          >
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden group border-4 border-[#778873] shadow-lg">
              <Link to="/pages/AboutTCN" className="block">
                <div className="aspect-[16/10] lg:aspect-[16/9]">
                  <img 
                    src="/tcnaboutbkg.jpg" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="About TCN"
                  />
                  <div className="absolute inset-0 bg-black/50"/>
                  <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                    <span className="text-[#D2DCB6] text-sm font-medium mb-2 tracking-wider">DISCOVER</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#D2DCB6] transition-colors">
                      About Tataskweyak<br/>Cree Nation
                    </h3>
                    <p className="text-white/90 max-w-md mb-6 text-sm md:text-base">
                      Learn about our rich history, vibrant culture, and the community that calls this beautiful land home.
                    </p>
                    <span className="inline-flex items-center text-[#D2DCB6] font-medium group-hover:gap-3 gap-2 transition-all">
                      Learn More <span className="text-xl">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <Link to="/pages/WorldViewHome" className="flex-1 group">
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden 
                              border-4 border-[#778873] shadow-lg hover:shadow-xl transition-all">
                  <img 
                    src="/Whoweare.jpg" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Who We Are"
                  />
                  <div className="absolute inset-0 bg-black/50"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-[#D2DCB6] text-xs font-medium mb-1 tracking-wider">EXPLORE</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D2DCB6] transition-colors">
                      About Who We Are
                    </h3>
                  </div>
                </div>
              </Link>

              <a href="https://tcntrsc.ca" target="_blank" rel="noopener noreferrer" className="flex-1 group">
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden 
                              border-4 border-[#778873] shadow-lg hover:shadow-xl transition-all">
                  <img 
                    src="/ourhomebkg.jpg" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Managing Our Territory"
                  />
                  <div className="absolute inset-0 bg-black/50"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-[#D2DCB6] text-xs font-medium mb-1 tracking-wider">STEWARDSHIP</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D2DCB6] transition-colors">
                      Managing Our Territory
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Two Column Feature Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp}>
              <Link to="/pages/PhotoGallery" className="group block">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#778873] 
                              shadow-lg hover:shadow-xl transition-all bg-white">
                  <div className="aspect-[16/10]">
                    <img 
                      src="/historyimg4.jpg" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Photo Gallery"
                    />
                    <div className="absolute inset-0 bg-black/40"/>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">📷</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#D2DCB6] transition-colors">
                          Photo Gallery
                        </h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        Browse through our collection of community photos and historical images.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="https://tcnaux.ca/" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#778873] 
                              shadow-lg hover:shadow-xl transition-all bg-white">
                  <div className="aspect-[16/10]">
                    <img 
                      src="/achimowintownbkg.jpg" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Member Portal"
                    />
                    <div className="absolute inset-0 bg-black/40"/>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">👤</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#D2DCB6] transition-colors">
                          TCN Achimowin
                        </h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        Access member services, documents, and community resources.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#778873] border-t-4 border-[#A1BC98]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <img src="/tcnlogolg.png" className="w-20 mb-4" alt="TCN Logo"/>
              <p className="text-white text-sm">
                Tataskweyak Cree Nation
              </p>
              <div className="mt-4">
                <VisitorCount />
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <div className="text-[#F1F3E0] text-sm space-y-2">
                <p>Tataskweyak Cree Nation</p>
                <p>Split Lake, MB R0B 1P0</p>
                <p>Phone: (204) 342-2045</p>
                <p>Fax: (204) 342-2270</p>
                <p>Email: tcnreception@tataskweyak.ca</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/pages/AboutTCN" className="text-[#F1F3E0] hover:text-[#D2DCB6] transition-colors">
                  About TCN
                </Link>
                <Link to="/pages/PhotoGallery" className="text-[#F1F3E0] hover:text-[#D2DCB6] transition-colors">
                  Photo Gallery
                </Link>
                <Link to="/pages/WorldViewHome" className="text-[#F1F3E0] hover:text-[#D2DCB6] transition-colors">
                  Who We Are
                </Link>
                <a href="https://tcnaux.ca" className="text-[#F1F3E0] hover:text-[#D2DCB6] transition-colors">
                  TCN Member Portal
                </a>
                <Link to="/pages/ContactUs" className="text-[#F1F3E0] hover:text-[#D2DCB6] transition-colors">
                  Contact Us
                </Link>
                <a href="https://tcntrsc.ca" className="text-[#F1F3E0] hover:text-[#D2DCB6] transition-colors">
                  TRSC
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#A1BC98] text-center">
            <p className="text-[#F1F3E0] text-sm">
              © {new Date().getFullYear()} Tataskweyak Cree Nation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import './App.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const
      }
    }
  }

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1.5,
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
      date: "Dec 19, 2025",
      excerpt: "The Lake Sturgeon (Namao) is in danger of extinction.",
      image: "/sturgeonimage1.jpg",
      category: "Events"
    },
    {
      id: 2,
      title: "Winter Road Update",
      date: "Dec 12, 2025",
      excerpt: "Important information regarding winter road conditions and travel advisories.",
      image: "/news/road.jpg",
      category: "Announcements"
    }
  ]

  const quickLinks = [
    { title: "About TCN", to: "/pages/AboutTCN", icon: "🏛️" },
    { title: "Who We Are", to: "/pages/WorldViewHome", icon: "🌿" },
    { title: "Photo Gallery", to: "/pages/PhotoGallery", icon: "📷" },
    { title: "Member Portal", to: "/TCN_Members/TCN_Greet", icon: "👤" },
  ]

  return (
    <div className="relative w-full min-h-screen bg-amber-400">
      {/* Hero Section - Full viewport with video/image background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="hidden lg:block h-full">
            <img src="/TCNairnsky.jpg" className="w-full h-full object-cover" alt="TCN Territory"/>
          </div>
          <div className="block lg:hidden h-full">
            <img src="/mobiletcnbkg22.jpg" className="w-full h-full object-cover" alt="TCN Territory"/>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-emerald-950"/>
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
      <section className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center gap-2 md:gap-8 py-4"
          >
            {quickLinks.map((link, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Link 
                  to={link.to}
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-5 py-2 rounded-lg
                           text-stone-300 hover:text-amber-300 hover:bg-amber-900/20 
                           transition-all duration-300 group"
                >
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-xs md:text-sm font-medium">{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-950 to-emerald-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Latest <span className="text-amber-400">News</span>
              </h2>
              <Link 
                to="/pages/CnCannouncements"
                className="text-amber-400 hover:text-amber-300 text-sm font-medium 
                         flex items-center gap-1 transition-colors"
              >
                View All 
                <span className="text-lg">→</span>
              </Link>
            </div>
            <div className="w-20 h-1 bg-amber-500 rounded-full"/>
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
              <div
                className="group relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden
                            border border-amber-900/30 bg-stone-800/50 hover:border-amber-600/50 
                            transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent z-10"/>
                <img 
                  src="/sturgeonimage1.jpg" 
                  className="absolute inset-0 w-full h-full object-cover 
                           group-hover:scale-105 transition-transform duration-700"
                  alt="Featured news"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-stone-900 text-xs font-bold 
                                 rounded-full mb-4">
                    Featured
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 
                               group-hover:text-amber-300 transition-colors">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-stone-300 text-sm md:text-base mb-4 line-clamp-2">
                    {featuredNews[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400/70 text-sm">{featuredNews[0].date}</span>
                    <span className="text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

           
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 md:py-24 px-4 bg-emerald-900">
        <div className="max-w-7xl mx-auto">
          {/* About Section - Asymmetric Layout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 mb-20"
          >
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden group">
              <Link to="/pages/AboutTCN" className="block">
                <div className="aspect-[16/10] lg:aspect-[16/9]">
                  <img 
                    src="/tcnaboutbkg.jpg" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="About TCN"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-transparent"/>
                  <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                    <span className="text-amber-400 text-sm font-medium mb-2 tracking-wider">DISCOVER</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                      About Tataskweyak<br/>Cree Nation
                    </h3>
                    <p className="text-stone-300 max-w-md mb-6 text-sm md:text-base">
                      Learn about our rich history, vibrant culture, and the community that calls this beautiful land home.
                    </p>
                    <span className="inline-flex items-center text-amber-400 font-medium group-hover:gap-3 gap-2 transition-all">
                      Learn More <span className="text-xl">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <Link to="/pages/WorldViewHome" className="flex-1 group">
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden 
                              border border-amber-900/30 hover:border-amber-600/50 transition-all">
                  <img 
                    src="/Whoweare.jpg" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Who We Are"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-amber-400 text-xs font-medium mb-1 tracking-wider">EXPLORE</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      About Who We Are
                    </h3>
                  </div>
                </div>
              </Link>

              <a href="https://tcntrsc.ca" className="flex-1 group">
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden 
                              border border-amber-900/30 hover:border-amber-600/50 transition-all">
                  <img 
                    src="/ourhomebkg.jpg" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Managing Our Territory"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30"/>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-amber-400 text-xs font-medium mb-1 tracking-wider">STEWARDSHIP</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
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
                <div className="relative rounded-2xl overflow-hidden border border-amber-900/30 
                              hover:border-amber-600/50 transition-all bg-stone-700/30">
                  <div className="aspect-[16/10]">
                    <img 
                      src="/historyimg4.jpg" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Photo Gallery"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"/>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">📷</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          Photo Gallery
                        </h3>
                      </div>
                      <p className="text-stone-300 text-sm">
                        Browse through our collection of community photos and historical images.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link to="/TCN_Members/TCN_Greet" className="group block">
                <div className="relative rounded-2xl overflow-hidden border border-amber-900/30 
                              hover:border-amber-600/50 transition-all bg-stone-700/30">
                  <div className="aspect-[16/10]">
                    <img 
                      src="/bandofficetab.jpg" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Member Portal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"/>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">👤</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          TCN Member Portal
                        </h3>
                      </div>
                      <p className="text-stone-300 text-sm">
                        Access member services, documents, and community resources.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <img src="/tcnlogolg.png" className="w-20 mb-4" alt="TCN Logo"/>
              <p className="text-stone-400 text-sm">
                Tataskweyak Cree Nation - Keepers of the land, water, and sky since time immemorial.
              </p>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <div className="text-stone-400 text-sm space-y-2">
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
                <Link to="/pages/AboutTCN" className="text-stone-400 hover:text-amber-400 transition-colors">
                  About TCN
                </Link>
                <Link to="/pages/PhotoGallery" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Photo Gallery
                </Link>
                <Link to="/pages/WorldViewHome" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Who We Are
                </Link>
                <Link to="/TCN_Members/TCN_Greet" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Member Portal
                </Link>
                <Link to="/pages/ContactUs" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
                <a href="https://tcntrsc.ca" className="text-stone-400 hover:text-amber-400 transition-colors">
                  TRSC
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-stone-800 text-center">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Tataskweyak Cree Nation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

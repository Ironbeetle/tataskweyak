import { Backbtn } from "../components/Backbtn";
import { Hamburger } from "../components/Hamburger";
import { motion } from "framer-motion";

export default function EconomicDevelopment() {
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
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const menuItems = [
        { label: "About Tataskweyak", to: "/pages/AboutTCN", color: "stone" as const },
        { label: "About Who We Are", to: "/pages/WorldViewHome", color: "stone" as const },
        { label: "Photo Gallery", to: "/pages/PhotoGallery", color: "stone" as const },
        { label: "Home", to: "/", color: "stone" as const },
    ]

    const DesktopNav = () => (
        <div className="hidden lg:block">
            <div className="bg-amber-900 backdrop-blur-sm border-b border-amber-600/50">
                <div className="grid grid-cols-4 gap-4 h-full items-center px-4">
                    <Backbtn />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    )

    const initiatives = [
        {
            title: "Hydroelectric Partnerships",
            description: "Working with Manitoba Hydro to ensure energy projects benefit our community and respect our environment.",
            image: "/tcnaboutbkg.jpg"
        },
        {
            title: "Community-Owned Businesses",
            description: "Supporting entrepreneurship among our members to serve both the community and wider region.",
            image: "/tcnaboutbkg.jpg"
        },
        {
            title: "Resource Management",
            description: "Balancing development with protection of our natural resources for future generations.",
            image: "/tcnaboutbkg.jpg"
        },
        {
            title: "Employment & Training",
            description: "Investing in education to prepare our members for jobs in new and existing industries.",
            image: "/tcnaboutbkg.jpg"
        }
    ]

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
            {/* Navigation */}
            <div className="sticky top-0 z-50">
                <Hamburger menuItems={menuItems} showBackButton={true} />
                <DesktopNav />
            </div>
            
            {/* Hero section */}
            <section className="relative">
                <div className="ecdevbkg h-[30vh] sm:h-[30vh] lg:h-[40vh] flex items-center justify-center bg-cover bg-center border-b-4 border-green-700">
                    <div className="relative z-10 text-center px-4">
                        <img src="/tcnlogosm.png" className="mx-auto w-16 sm:w-20 lg:w-24 mb-4 drop-shadow-lg" alt="TCN Logo" />
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 text-amber-50 drop-shadow-lg">
                            Economic Development
                        </h1>
                        <p className="text-md md:text-base lg:text-lg text-amber-100 drop-shadow-md">
                            Tataskweyak Cree Nation
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Initiatives Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Our Key <span className="text-amber-400">Initiatives</span>
                        </h2>
                        <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto" />
                    </motion.div>
                    
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {initiatives.map((initiative, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeUp}
                                className="group rounded-2xl overflow-hidden bg-stone-800/50 border border-amber-900/30 
                                         hover:border-amber-600/50 transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={initiative.image} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                        alt={initiative.title} 
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-amber-400 text-xl mb-3">{initiative.title}</h3>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        {initiative.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-24 px-4 bg-stone-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="bg-stone-800/50 rounded-2xl p-8 border border-amber-900/30">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                                Contact <span className="text-amber-400">Economic Development</span>
                            </h2>
                            <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8" />
                            
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-2/3">
                                    <p className="text-stone-300 mb-6">
                                        For business inquiries or to learn more about our economic development initiatives, please contact us:
                                    </p>
                                    <div className="space-y-2 text-stone-300">
                                        <p className="font-semibold text-white">Economic Development Office</p>
                                        <p>Tataskweyak Cree Nation</p>
                                        <p>Email: <a href="mailto:econdev@tataskweyak.ca" className="text-amber-400 hover:text-amber-300 transition-colors">econdev@tataskweyak.ca</a></p>
                                        <p>Phone: (204) 000-0000</p>
                                    </div>
                                </div>
                                <div className="md:w-1/3 flex items-center justify-center">
                                    <img src="/tcnlogosm.png" className="w-24 md:w-32" alt="TCN Logo" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

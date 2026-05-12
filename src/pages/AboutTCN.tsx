import TCNMap from "../components/TCNMap"
import { Backbtn } from "../components/Backbtn"
import { Hamburger } from "../components/Hamburger"
import { motion } from "framer-motion"

export default function AboutTCN() {
    const fadeUp = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
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
            <div className="bg-[#778873] backdrop-blur-sm border-b border-[#A1BC98]">
                <div className="grid grid-cols-4 gap-4 h-full items-center px-4">
                    <Backbtn />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    )

    return (
        <div className="w-full min-h-screen bg-[#F1F3E0]">
            {/* Navigation */}
            <div className="sticky top-0 z-50">
                <Hamburger menuItems={menuItems} showBackButton={true} />
                <DesktopNav />
            </div>

            {/* Hero Section */}
            <section className="relative">
                <div className="h-[30vh] sm:h-[30vh] lg:h-[40vh] flex items-center justify-center bg-cover bg-center border-b-4 border-[#778873]"
                     style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/tcnaboutbkg.jpg')" }}>
                    <div className="relative z-10 text-center px-4">
                        <img src="/tcnlogosm.png" className="mx-auto w-16 sm:w-20 lg:w-24 mb-4 drop-shadow-lg" alt="TCN Logo" />
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 text-white drop-shadow-lg">
                            About Tataskweyak Cree Nation
                        </h1>
                    </div>
                </div>
            </section>

            {/* Location & Map Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="apptext mb-2">
                            Our <span className="text-[#A1BC98]">Location</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#A1BC98] rounded-full mx-auto mb-6" />
                        <p className="apptext max-w-2xl mx-auto">
                            Tataskweyak Cree Nation is located on the shore of Split Lake, Manitoba.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <TCNMap />
                    </motion.div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-16 md:py-24 px-4 bg-[#F1F3E0]">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src='/TcnarialVintage.jpg' className='w-full h-full object-cover' alt="Historical TCN" />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-col justify-center">
                            <h3 className="apptext mb-4">
                                Our <span className="text-[#A1BC98]">History</span>
                            </h3>
                            <div className="w-20 h-1 bg-[#A1BC98] rounded-full mb-6" />
                            <p className="apptext leading-relaxed">
                                Tataskweyak Cree First Nation (TCN) has a rich history as one of the original 
                                Ininew peoples who have inhabited northern Manitoba for millennia.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <motion.div variants={fadeUp} className="flex flex-col justify-center order-2 lg:order-1">
                            <h3 className="apptext mb-4">
                                Our <span className="text-[#A1BC98]">Community</span>
                            </h3>
                            <div className="w-20 h-1 bg-[#A1BC98] rounded-full mb-6" />
                            <p className="apptext leading-relaxed">
                                Today, we are a thriving first nation of over 4,000 members, and roughly half live in the community.
                                We continue to blend traditional practices with modern development, maintaining our language, 
                                cultural values, and connection to the land while embracing education, technology, and economic opportunities.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#A1BC98] order-1 lg:order-2">
                            <img src='/tcnaboutbkg.jpg' className='w-full h-full object-cover' alt="TCN Community" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Governance Section */}
            <section className="py-16 md:py-24 px-4 bg-[#F1F3E0]">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src='/Eldersctn.jpg' className='w-full h-full object-cover' alt="TCN Elders" />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-col justify-center">
                            <h3 className="apptext mb-4">
                                Our <span className="text-[#A1BC98]">Governance</span>
                            </h3>
                            <div className="w-20 h-1 bg-[#A1BC98] rounded-full mb-6" />
                            <p className="apptext leading-relaxed">
                                Our First Nation government includes traditional forms of governance like the Elders' Tribunal and a peacekeepers 
                                system alongside contemporary administrative structures.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Chief & Council Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <img src='/tcnlogosm.png' className='w-20 md:w-24 mx-auto mb-6' alt="TCN Logo" />
                        <h2 className="apptext mb-2">
                            Chief & <span className="text-[#A1BC98]">Council 2025</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#A1BC98] rounded-full mx-auto" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden border border-[#A1BC98] mb-12"
                    >
                        <img src="/TCNCnC2025.jpg" className="w-full h-auto object-cover" alt="TCN Chief and Council 2025" />
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        {/* Chief Section */}
                        <motion.div variants={fadeUp} className="w-full mb-8 bg-[#F1F3E0] rounded-2xl p-6 border border-[#A1BC98]">
                            <div className="text-center">
                                <div className="text-[#A1BC98] font-medium mb-2 text-lg tracking-wider uppercase">
                                    Chief
                                </div>
                                <div className="text-xl md:text-3xl font-bold text-[rgba(26,26,26,0.8)]">
                                    Doreen Spence
                                </div>
                            </div>
                        </motion.div>

                        {/* Councillors Section */}
                        <motion.div variants={fadeUp} className="w-full space-y-3">
                            <div className="text-center mb-6">
                                <div className="text-[#A1BC98] font-medium text-xl tracking-wider uppercase">
                                    Council Members
                                </div>
                            </div>
                            
                            {[
                                "Alwyne Keeper",
                                "Abbie Garson Wavey", 
                                "Jonathan Kitchekeesik",
                                "Joan Ouskun",
                                "Ivan Keeper",
                                "Cynthia Ouskun" 
                            ].map((name, index) => (
                                <motion.div 
                                    key={index} 
                                    variants={fadeUp}
                                    className="bg-[#F1F3E0] rounded-xl p-4 border border-[#A1BC98] 
                                             hover:border-[#A1BC98] transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 text-md">Councillor</span>
                                        <span className="text-[rgba(26,26,26,0.8)] font-medium">{name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
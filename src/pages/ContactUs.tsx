import { ContactUs as ContactForm } from "../components/ContactForm"
import { Phone, Mail, MapPin } from "lucide-react"
import { Backbtn } from "../components/Backbtn"
import { Hamburger } from "../components/Hamburger"
import { motion } from "framer-motion"

export default function ContactUs() {
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
                            Contact Us
                        </h1>
                        <p className="text-md md:text-base lg:text-lg text-white drop-shadow-md">
                            Tataskweyak Cree Nation
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
                    >
                        <motion.div variants={fadeUp} 
                            className="flex flex-col items-center p-8 rounded-2xl bg-[#F1F3E0] 
                                       border border-[#A1BC98] hover:border-[#A1BC98] transition-all duration-300">
                            <Phone className="w-10 h-10 mb-4 text-[#A1BC98]" />
                            <h2 className="text-xl font-bold text-[#778873] mb-2">Phone</h2>
                            <a href="tel:+12043422045" className="text-[rgba(26,26,26,0.6)] text-lg hover:text-[#778873] transition-colors">
                                (204) 342-2045
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp}
                            className="flex flex-col items-center p-8 rounded-2xl bg-[#F1F3E0] 
                                       border border-[#A1BC98] hover:border-[#A1BC98] transition-all duration-300">
                            <Mail className="w-10 h-10 mb-4 text-[#A1BC98]" />
                            <h2 className="text-xl font-bold text-[#778873] mb-2">Email</h2>
                            <a href="mailto:tcnreception@tataskweyak.ca" className="text-[rgba(26,26,26,0.6)] text-lg hover:text-[#778873] transition-colors">
                                tcnreception@tataskweyak.ca
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp}
                            className="flex flex-col items-center p-8 rounded-2xl bg-[#F1F3E0] 
                                       border border-[#A1BC98] hover:border-[#A1BC98] transition-all duration-300">
                            <MapPin className="w-10 h-10 mb-4 text-[#A1BC98]" />
                            <h2 className="text-xl font-bold text-[#778873] mb-2">Address</h2>
                            <p className="text-[rgba(26,26,26,0.6)] text-lg text-center">
                                Split Lake, MB<br />R0B 1P0
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#778873] mb-2">
                                Send us a <span className="text-[#A1BC98]">Message</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#A1BC98] rounded-full mx-auto" />
                        </div>
                        <div className="bg-[#F1F3E0] rounded-2xl p-6 md:p-8 border border-[#A1BC98]">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

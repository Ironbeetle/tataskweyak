import { Button } from "../components/ui/button"
import { Backbtn } from "../components/Backbtn"
import { Hamburger } from "../components/Hamburger"
import { motion } from "framer-motion"

export default function Departments() {
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
                            Tataskweyak Cree Nation
                        </h1>
                        <p className="text-md md:text-base lg:text-lg text-white drop-shadow-md">
                            Local By-Laws
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img 
                                src="/TCNCnC2025.jpg" 
                                className="w-full h-full object-cover"
                                alt="TCN Chief and Council 2025"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-center text-center">
                            <img src='/tcnlogosm.png' className='w-20 md:w-24 mb-6' alt="TCN Logo" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#778873] mb-2">
                                Local <span className="text-[#A1BC98]">By-Laws</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#A1BC98] rounded-full mb-6" />
                            <p className="text-[rgba(26,26,26,0.6)] text-lg mb-8 max-w-md">
                                Access and download Tataskweyak Cree Nation's local by-laws and governance documents.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                                <Button className="bg-[#F1F3E0]0 hover:bg-[#778873] text-white px-6 py-3 rounded-lg transition-colors">
                                    Download Document
                                </Button>
                                <Button className="bg-[#778873] hover:bg-[#778873] text-white px-6 py-3 rounded-lg border border-[#A1BC98] transition-colors">
                                    View Document
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
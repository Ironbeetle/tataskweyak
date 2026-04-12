import { Backbtn } from "../components/Backbtn"
import { motion } from "framer-motion"
import { Hamburger } from "../components/Hamburger"
import '../App.css'


export default function WorldViewHome() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
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
                    <div/>
                    <div/>
                    <div/>
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
                <div className="ATKbkg h-[30vh] sm:h-[30vh] lg:h-[40vh] flex items-center justify-center bg-cover bg-center border-b-4 border-[#778873]">
                    <div className="relative z-10 text-center px-4">
                        <img src="/tcnlogosm.png" className="mx-auto w-16 sm:w-20 lg:w-24 mb-4 drop-shadow-lg" alt="TCN Logo" />
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-2 text-[rgba(26,26,26,0.6)] drop-shadow-lg">
                            Who We Are
                        </h1>
                        <p className="text-md md:text-base lg:text-2xl text-[rgba(26,26,26,0.6)] text-lg drop-shadow-md">
                            Our Worldview & Heritage
                        </p>
                    </div>
                </div>
            </section>

            {/* Forefathers Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
                    >
                        <div className="flex flex-col justify-center">
                            <h2 className="text-6xl md:text-4xl font-bold text-[#778873] mb-4">
                                Forefathers Of The <span className="text-[#A1BC98]">Split Lake Cree</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#A1BC98] rounded-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src="/historyimg3.jpg" loading="lazy" className="w-full h-full object-cover" alt="Historical image" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Water People Section */}
            <section className="py-16 md:py-24 px-4 bg-[#F1F3E0]">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src="/historyimg1.jpg" className="w-full h-full object-cover" loading="lazy" alt="Historical image" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="apptext leading-relaxed">
                                Our ancestors were a <span className="text-[#A1BC98] font-semibold">water people</span>.<br/>
                                Living along the shores of the lakes and rivers, they hunted and fished,
                                gathering herbs and berries along the shoreline.                       
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Knowledge Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        
                        <div className="flex flex-col justify-center">
                            <p className="apptext leading-relaxed">
                                Centuries of observation and experience has given our people 
                                an invaluable <span className="text-[#A1BC98] font-semibold">intimate knowledge</span> of our homeland ecosystem.
                            </p>  
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src="/traditionalhunters.png" loading="lazy" className="w-full h-full object-cover" alt="Traditional hunters" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Wisdom Section */}
            <section className="py-16 md:py-24 px-4 bg-[#F1F3E0]">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/ATKcirca.png" loading="lazy" className="w-full h-full object-cover" alt="Historical circa" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="apptext leading-relaxed">
                                This intimate knowledge enabled the identification and selection of the
                                most <span className="text-[#A1BC98] font-semibold">useful and fruitful areas</span> for residence and harvesting.
                            </p>
                        </div>
                        
                    </motion.div>
                </div>
            </section>

            {/* World View Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        
                        <div className="flex flex-col justify-center">
                            <p className="apptext leading-relaxed">
                                Our world view is based on the understanding that<br/><br/>
                                <span className="text-[#A1BC98] font-bold text-2xl md:text-3xl">All Things Are Related And Dependent On One Another.</span><br/><br/> 
                                We are but one component of the living natural world.
                            </p>  
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/owl.png" loading="lazy" className="w-full h-full object-cover" alt="Owl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Inter-Relatedness Section */}
            <section className="py-16 md:py-24 px-4 bg-[#F1F3E0]">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src="/ATKfront.jpg" loading="lazy" className="w-full h-full object-cover" alt="ATK Front" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="apptext leading-relaxed">
                                It is this understanding of the <br/>
                                <span className="text-[#A1BC98] font-bold">Inter-Relatedness of Things</span><br/> 
                                that is the very foundation of our culture and traditions.
                            </p>  
                        </div>
                        
                    </motion.div>
                </div>
            </section>

            {/* Teaching Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-[80%] mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        
                        <div className="flex flex-col justify-center">
                            <p className="apptext leading-relaxed">
                                We teach the <span className="text-[#A1BC98] font-semibold">values, beliefs and priorities</span> that govern our relationship 
                                with Mother Earth and all her beings.
                            </p>  
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-[#A1BC98]">
                            <img src="/ATKcircanew.png" loading="lazy" className="w-full h-full object-cover" alt="ATK Circa New" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Adapt & Prosper Section */}
            <section className="py-16 md:py-24 px-4 bg-[#E4EFE7]">
                <div className="max-w-[80%] mx-auto">
                    <div className="tcnvision relative rounded-2xl overflow-hidden border border-[#A1BC98] min-h-[80vh] flex flex-col justify-evenly items-center p-8">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
                        <div className="w-full max-w-4xl flex flex-col justify-evenly items-center text-center space-y-8">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }} 
                                className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                                    Adapt & Prosper
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}    
                                className="apptextw bg-gray-600/40 backdrop-blur-lg p-6 rounded-2xl">
                                As we modernize and evolve,
                                our traditional pursuits and respect for cultural practices and
                                customs are not forgotten.    
                            </motion.p>                  
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1, staggerChildren: 1.5 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                        >
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-[#A1BC98]"
                                loading="lazy"
                                src="/ATKimagewinter.jpg"
                                alt="Winter image"
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-[#A1BC98]"
                                loading="lazy"
                                src="/tradlife2.jpg"
                                alt="Traditional life"
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1.9, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-[#A1BC98]"
                                loading="lazy"
                                src="/pilotTCN.jpg"
                                alt="TCN Pilot"
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 2.1, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-[#A1BC98]"
                                loading="lazy"
                                src="/watertest1A.png"
                                alt="Water testing"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
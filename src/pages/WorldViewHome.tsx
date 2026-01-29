import { Backbtn } from "../components/Backbtn"
import { motion } from "framer-motion"
import { Hamburger } from "../components/Hamburger"
import '../App.css'


export default function WorldViewHome() {
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
            <div className="bg-amber-900 backdrop-blur-sm border-b border-amber-600/50">
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
        <div className="w-full min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
            {/* Navigation */}
            <div className="sticky top-0 z-50">
                <Hamburger menuItems={menuItems} showBackButton={true} />
                <DesktopNav />
            </div>

            {/* Hero Section */}
            <section className="relative">
                <div className="ATKbkg h-[30vh] sm:h-[30vh] lg:h-[40vh] flex items-center justify-center bg-cover bg-center border-b-4 border-green-700">
                    <div className="relative z-10 text-center px-4">
                        <img src="/tcnlogosm.png" className="mx-auto w-16 sm:w-20 lg:w-24 mb-4 drop-shadow-lg" alt="TCN Logo" />
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 text-amber-50 drop-shadow-lg">
                            Who We Are
                        </h1>
                        <p className="text-md md:text-base lg:text-lg text-amber-100 drop-shadow-md">
                            Our Worldview & Heritage
                        </p>
                    </div>
                </div>
            </section>

            {/* Forefathers Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                Forefathers Of The <span className="text-amber-400">Split Lake Cree</span>
                            </h2>
                            <div className="w-20 h-1 bg-amber-500 rounded-full" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30">
                            <img src="/historyimg3.jpg" loading="lazy" className="w-full h-full object-cover" alt="Historical image" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Water People Section */}
            <section className="py-16 md:py-24 px-4 bg-stone-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30">
                            <img src="/historyimg1.jpg" className="w-full h-full object-cover" loading="lazy" alt="Historical image" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                                Our ancestors were a <span className="text-amber-400 font-semibold">water people</span>.<br/>
                                Living along the shores of the lakes and rivers, they hunted and fished,
                                gathering herbs and berries along the shoreline.                       
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Knowledge Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30">
                            <img src="/traditionalhunters.png" loading="lazy" className="w-full h-full object-cover" alt="Traditional hunters" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                                Centuries of observation and experience has given our people 
                                an invaluable <span className="text-amber-400 font-semibold">intimate knowledge</span> of our homeland ecosystem.
                            </p>  
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Wisdom Section */}
            <section className="py-16 md:py-24 px-4 bg-stone-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                                This intimate knowledge enabled the identification and selection of the
                                most <span className="text-amber-400 font-semibold">useful and fruitful areas</span> for residence and harvesting.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30 order-1 lg:order-2">
                            <img src="/ATKcirca.png" loading="lazy" className="w-full h-full object-cover" alt="Historical circa" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* World View Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30">
                            <img src="/owl.png" loading="lazy" className="w-full h-full object-cover" alt="Owl" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                                Our world view is based on the understanding that<br/><br/>
                                <span className="text-amber-400 font-bold text-2xl md:text-3xl">All Things Are Related And Dependent On One Another.</span><br/><br/> 
                                We are but one component of the living natural world.
                            </p>  
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Inter-Relatedness Section */}
            <section className="py-16 md:py-24 px-4 bg-stone-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                                It is this understanding of the <br/>
                                <span className="text-amber-400 font-bold">Inter-Relatedness of Things</span><br/> 
                                that is the very foundation of our culture and traditions.
                            </p>  
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30 order-1 lg:order-2">
                            <img src="/ATKfront.jpg" loading="lazy" className="w-full h-full object-cover" alt="ATK Front" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Teaching Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="rounded-2xl overflow-hidden border border-amber-900/30">
                            <img src="/ATKcircanew.png" loading="lazy" className="w-full h-full object-cover" alt="ATK Circa New" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                                We teach the <span className="text-amber-400 font-semibold">values, beliefs and priorities</span> that govern our relationship 
                                with Mother Earth and all her beings.
                            </p>  
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Adapt & Prosper Section */}
            <section className="py-16 md:py-24 px-4 bg-stone-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="tcnvision rounded-2xl overflow-hidden border border-amber-900/30 min-h-[80vh] flex flex-col justify-evenly items-center p-8">
                        <div className="w-full max-w-4xl flex flex-col justify-evenly items-center text-center space-y-8">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }} 
                                className="text-4xl md:text-6xl font-bold text-amber-400 drop-shadow-lg">
                                    Adapt & Prosper
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}    
                                className="text-xl md:text-2xl text-white bg-stone-900/60 backdrop-blur-lg p-6 rounded-2xl">
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
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-amber-900/30"
                                loading="lazy"
                                src="/ATKimagewinter.jpg"
                                alt="Winter image"
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-amber-900/30"
                                loading="lazy"
                                src="/tradlife2.jpg"
                                alt="Traditional life"
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1.9, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-amber-900/30"
                                loading="lazy"
                                src="/pilotTCN.jpg"
                                alt="TCN Pilot"
                            />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 2.1, ease: "easeInOut" }}
                                className="rounded-xl object-cover w-full h-32 md:h-48 border border-amber-900/30"
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
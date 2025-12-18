import { Backbtn } from "../components/Backbtn"
import { Hamburger } from "../components/Hamburger"
import { motion } from "framer-motion"
import '../App.css'


export default function NamaoTCN() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    }

    const menuItems = [
        { 
      label: "About Tataskweyak", 
      to: "/pages/AboutTCN", 
      color: "stone" as const 
    },
    { 
      label: "About Who We Are", 
      to: "/pages/WorldViewHome", 
      color: "stone" as const 
    },
    { 
      label: "Photo Gallery", 
      to: "/pages/PhotoGallery", 
      color: "stone" as const 
    },
    { 
      label: "Home", 
      to: "/", 
      color: "stone" as const 
    },
    ]
    // Desktop Navigation
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
        <div className="w-screen min-h-screen genbkg">
             {/* Navigation */}
            <div className="sticky top-0 z-50">
                <Hamburger menuItems={menuItems} showBackButton={true} />
                <DesktopNav />
            </div>
            
            {/* Hero Section */}
            <div className="h-4 lg:h-16 w-full"/>
            <div className="ATKbkg w-full h-auto">
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row mb-16 p-4">
                    <div className="apptextBold p-4 flex flex-col justify-evenly w-full lg:w-1/2">
                        Protecting Namao<br/>
                        <span className="text-amber-300">Lake Sturgeon of the Churchill River</span>
                    </div>
                    <div className="flex justify-center object-cover p-4">
                        <img src="/underwater.jpg"
                            loading="lazy"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Introduction Section */}
            <div className="h-0 lg:h-[10vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full px-4 lg:px-16"
            >
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptextlgB p-4 text-amber-100 border-l-4 border-amber-500">
                            Since time immemorial, members of Tataskweyak Cree Nation have been the traditional stewards of the lands and waters.
                        </div>
                        <div className="apptext p-4">
                            All things are interconnected and deserving of our protection as our relatives. In the north, one of these relatives is namao or known as Lake Sturgeon to settlers.
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </motion.div>

            {/* Highlighted Quote Section */}
            <div className="h-[5vh] lg:h-[15vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-12 px-4"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="apptextBold text-amber-100">
                        "Tataskweyak members have inherent responsibilities under our inherent laws to protect namao and other living beings in our territory."
                    </div>
                </div>
            </motion.div>

            {/* Environmental Colonialism Section */}
            <div className="h-[5vh] lg:h-[15vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-4 lg:px-16"
            >
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="flex justify-center order-2 lg:order-1">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                    </div>
                    <div className="flex flex-col justify-center p-4 order-1 lg:order-2">
                        <div className="apptextlgB p-4 text-red-400">
                            Our way of life, culture, and environment are falling victim to environmental colonialism.
                        </div>
                        <div className="apptext p-4">
                            Knowledge keepers and land users from Tataskweyak Cree Nation have been engaged in efforts to protect what they believe to be the last remaining namao population on the lower Churchill River and ensure the voice and perspective of the namao is not overwhelmed by the economic interests of Manitoba Hydro.
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Churchill River Section */}
            <div className="h-[5vh] lg:h-[20vh] w-full"/>
            <div className="ATKbkg w-full py-12">
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-[90vw] mx-auto px-4">
                    <h2 className="apptextBold text-center mb-8">The Churchill River and Namao</h2>
                    <div className="grid lg:grid-cols-7 gap-6">
                        <div className="lg:col-span-4">
                            <div className="apptextlgB p-4 text-amber-200 mb-4">
                                For TCN, the Churchill River is not only a source of water, but a living entity deeply 
                                embedded in our cultural identity, traditional practices and <br/> community well-being.
                            </div>
                            <div className="apptext p-4">
                                Over generations of living with and on the river, Tataskweyak elders share stories of the namao providing our Nation with good food year round. Other parts of the namao, such as its skin and oil, provided important tools and trade items.
                            </div>
                        </div>
                        <div className="lg:col-span-3 flex justify-center items-center">
                            <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                        </div>
                    </div>
                    <div className="h-[5vh] lg:h-[15vh] w-full"/>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="lg:max-w-7xl apptextBold p-4 italic border-l-4 border-amber-400 ml-4">
                            Sacred stories from Tataskweyak elders refer to namao as grandfathers and grandmothers, demonstrating both the social and spiritual value of namao relations with Tataskweyak.
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Churchill River Diversion Section */}
            <div className="h-[5vh] lg:h-[15vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full px-4 lg:px-16"
            >
                <h2 className="apptextBold text-center mb-8">Churchill River Diversion</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="apptextBold p-4 mb-4">
                        While Manitoba Hydro's operations has profoundly altered the natural river system.<br/>
                        Tataskweyak's innate connection to the lands and waters, has never been severed.
                    </div>
                   
                </div>
                <div className="h-[5vh] lg:h-[10vh] w-full"/>
                <div className="grid lg:grid-cols-7 gap-6">
                    <div className="col-span-4 flex flex-col justify-center">
                        <div className="apptext lg:p-4 rounded-lg text-amber-100 mb-6 border-l-4 border-amber-500 px-4">
                            Manitoba Hydro built the Churchill River Diversion (CRD) in the 1970s in order to send more water down the Nelson River to power its hydroelectric dams. Up to 95% of the Churchill River's flow has been diverted to the Nelson River system to feed Manitoba's power needs.
                        </div>
                    </div>
                    <div className="col-span-3 flex justify-center items-center">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </motion.div>

            {/* Impact Grid Section */}
            <div className="h-[5vh] lg:h-[10vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full px-4 lg:px-16"
            >
                <div className="grid lg:grid-cols-2 gap-8 mx-auto">
                    <div className="p-4 rounded-lg">
                        <div className="apptextlgB text-amber-300 mb-4">
                            The flow of the Churchill River is dictated by the power needs of Manitoba Hydro.
                        </div>
                        <div className="apptext">
                            This need leaves the Churchill River with more extreme high and low flows, creating cycles of drought punctuated by extreme floods that make it hard for any species, including namao, to survive.
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg max-h-64"/>
                    </div>
                </div>
            </motion.div>

            {/* Critical Warning Section */}
            <div className="h-[5vh] lg:h-[15vh] w-full"/>
            <div className="ATKbkg w-full py-6 px-4">
                <div className="h-[5vh] lg:h-[10vh] w-full"/>
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-7 gap-8 mx-auto">
                    <div className="col-span-4 flex flex-col justify-center">
                        <div className="apptextBold text-red-300 text-center mb-4">
                            The entire CRD operates without a proper environmental review ever being done to understand how this change in flow would impact the Churchill River and the animals and people that rely on it.
                        </div>
                        <div className="apptext text-center">
                            Manitoba Hydro has already applied for a permanent licence to continue operations past September 2026.
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col justify-center">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg max-h-64"/>
                    </div>
                </motion.div>
                <div className="h-[5vh] lg:h-[10vh] w-full"/>
            </div>

            {/* Urgent Call Section */}
            <div className="h-[5vh] lg:h-[10vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full px-4 lg:px-16"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="apptextBold text-red-400 mb-6">
                        If action is not taken immediately we run the risk of permanent extinction of namao in the Lower Churchill River.
                    </div>
                    <div className="apptext p-4">
                        For too long, the people of southern Manitoba have lived comfortably off benefits provided by the north without understanding the permanent harms being caused. The north can be forgotten no longer, nor can we stand quiet while our lands and waters are taken advantage of. It is our responsibility as members of Tataskweyak Cree Nation to protect all our relations.
                    </div>
                </div>
            </motion.div>

            {/* TCN Sacrifice Section */}
            <div className="h-[5vh] lg:h-[20vh] w-full"/>
            <div className="ATKbkg w-full py-12">
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-[96vw] mx-auto px-4">
                    <h2 className="apptextBold text-center mb-8">TCN has Sacrificed to Save Namao</h2>
                    <div className="grid lg:grid-cols-7 gap-8">
                        <div className="col-span-4 flex flex-col justify-center lg:p-6">
                            <div className="apptext mb-4">
                                As a result of declines in namao populations, Tataskweyak placed a moratorium on namao harvesting in the mid-2010s.
                            </div>
                            <div className="apptextlgB text-amber-200 border-l-4 border-amber-400">
                                We took this step as part of our commitment to fulfill our inherent stewardship responsibilities for our lands and waters.
                            </div>
                            <div className="apptext">
                                The moratorium has been a significant sacrifice for our community, especially our Elders. Some Elders have gone without enjoying the gift of namao for the last 20 years, when this was once a critical source of food and connection to the land.
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-center items-center lg:p-2">
                            <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Research Section */}
            <div className="h-[5vh] lg:h-[15vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full px-4 lg:px-16"
            >
                <div className="grid lg:grid-cols-7 gap-4">
                    <div className="col-span-4 apptext p-6 text-amber-100 flex flex-col justify-center">
                        Tataskweyak has combined traditional and scientific knowledge to research how the CRD's operations have changed the flow of the Churchill River and impacted the habitat and health of the remaining namao population.
                    </div>
                    <div className="col-span-3 flex justify-center items-center lg:p-2">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </motion.div>
            <div className="h-[5vh] lg:h-[15vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full px-4 lg:px-16"
            >
                <div className="grid lg:grid-cols-7 gap-8">
                    <div className="col-span-3 flex justify-center items-center lg:p-2">
                        <img src="/underwater.jpg" loading="lazy" className="object-cover rounded-lg shadow-lg"/>
                    </div>
                    <div className="col-span-4 apptext p-4 flex flex-col justify-center">
                        The reports support what our Elders, knowledge keepers and land users have been saying is true – the CRD's reduced flow has led to the collapse of namao on the Churchill River.
                    </div>
                </div>
            </motion.div>

            {/* Calls to Action Section */}
            <div className="h-[5vh] lg:h-[20vh] w-full"/>
            <div className="ATKbkg w-full py-16 px-4">
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center">
                    <h2 className="apptextBold mb-8">Our Calls to Action</h2>
                    <div className="apptextlgB text-amber-100 mb-6">
                        Tataskweyak believes strongly in the importance of meaningful and in-depth consultation before decisions are made that affect our rights.
                    </div>
                </motion.div>
            </div>
            <div className="h-[5vh] lg:h-[20vh] w-full"/>
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-16 px-4"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="apptextBold text-amber-300 p-6">
                        We call on Canada and Manitoba to take immediate action to honour and protect our Treaty rights, and to ensure the Churchill River Diversion is operated in a way that ensures namao are able to live and thrive on the Churchill River.
                    </div>
                </div>
            </motion.div>

            {/* Footer Spacing */}
            <div className="h-[10vh] w-full"/>
        </div>
    )
}
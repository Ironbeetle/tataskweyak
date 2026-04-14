import { Backbtn } from "../components/Backbtn"
import { Hamburger } from "../components/Hamburger"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { motion } from "framer-motion"
import '../App.css'



export default function Achimowin() {

    const menuItems = [
        { label: "About Tataskweyak", to: "/pages/AboutTCN", color: "stone" as const },
        { label: "About Who We Are", to: "/pages/WorldViewHome", color: "stone" as const },
        { label: "Photo Gallery", to: "/pages/PhotoGallery", color: "stone" as const },
        { label: "Home", to: "/", color: "stone" as const },
    ]
    const DesktopNav = () => (
        <div className="hidden lg:block">
            <div className="bg-[#7b3306] backdrop-blur-sm border-b border-[#A1BC98]">
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
        <div id='apptosee' className='relative w-full min-h-screen genbkg'>
            {/* Navigation */}
            <div className="sticky top-0 z-50">
                <Hamburger menuItems={menuItems} showBackButton={true} />
                <DesktopNav />
            </div>
            {/* Hero Section */}
            <section className="lg:mt-1">
                <div className="tcnachimowin h-[30vh] sm:h-[30vh] lg:h-[50vh]"/>
            </section>
            <section className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-6">
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src='/Achimowin_logo.png'
                    alt="Tataskweyak Cree Nation Logo"
                    className='w-full max-w-[100px] md:max-w-[150px] lg:max-w-[150px] mb-6 lg:mb-10 self-center'
                />
                {/* Welcome Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-center mb-8 lg:mb-12"
                >
                    <p className="techtxtmb max-w-2xl mx-auto">
                    TCN ACHIMOWIN <br/>Your gateway to community services, updates, and connection.
                    </p>
                </motion.div>
            </section>
            
            {/* Tab menu */}
            <Tabs defaultValue="tab-a" className="w-full h-auto">
                <section className="flex justify-center px-4 lg:px-6 mt-6">
                    <div className="w-[95%] lg:w-[60%] grid grid-cols-1 lg:grid-cols-3 gap-6 h-[10vh]">
                        <div className="bg-[#7b3306] backdrop-blur-sm border-b border-[#A1BC98] rounded-lg flex items-center justify-center">
                            <TabsList className="bg-transparent p-0 h-auto w-auto">
                                <TabsTrigger value="tab-a" className="apptextw h-auto p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none">About the Project</TabsTrigger>
                            </TabsList>
                        </div>
                        <div className="bg-[#7b3306] backdrop-blur-sm border-b border-[#A1BC98] rounded-lg flex items-center justify-center">
                            <TabsList className="bg-transparent p-0 h-auto w-auto">
                                <TabsTrigger value="tab-b" className="apptextw h-auto p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none">News At A Glance</TabsTrigger>
                            </TabsList>
                        </div>
                        <div className="bg-[#7b3306] backdrop-blur-sm border-b border-[#A1BC98] rounded-lg flex items-center justify-center">
                            <TabsList className="bg-transparent p-0 h-auto w-auto">
                                <TabsTrigger value="tab-c" className="apptextw h-auto p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none">Enter Achimowin</TabsTrigger>
                            </TabsList>
                        </div>
                    </div>
                </section>

            {/* Tab A Section */}
            <TabsContent value="tab-a">
                <section className="w-full flex flex-col items-center justify-center px-4 lg:px-6 mt-12">
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-4 mb-6">
                            <div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 , delay: 0.1 ,ease: "easeInOut"}} 
                                    className="techtxtbbb w-auto mt-6 mb-6">
                                    Why We Are Doing This
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}} 
                                    className="techtxtmbb w-full mt-6 mb-6">
                                    This project has two main purposes:
                                </motion.div>
                                <ul className="flex flex-col justify-start items-start p-1 lg:p-6">
                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                    className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                        <span className="techtxtmbb">Better Communication and Access</span><br/>
                                        We want all TCN members to receive timely updates, important notices, 
                                        and easy access to services in one central place.
                                    </motion.li>

                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}} 
                                    className="techtxtmb list-disc list-inside mt-6 mb-6">
                                    <span className="techtxtmbb">Building Skills and Self-Reliance</span><br/>
                                    This project is more than just building a communications system. It's about TCN taking the first steps in 
                                    exploring new ways to problem solve and build tools to better the community and create business and
                                    job opportunities for everyone.
                                    </motion.li>
                                </ul>
                            </div>
                            <div className="flex justify-center items-center p-2 lg:p-6">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                    src="/tcngroup1.png"
                                    alt="TCN Web Panel"
                                    className="w-full self-center"
                                    style={{ objectFit: 'cover', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/>
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-6 mb-6">
                            <div className="flex flex-col justify-start items-start p-6">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , ease: "easeInOut"}}
                                className="techtxtbbb w-auto mt-2 lg:mt-6 mb-6">
                                Community Involvement
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.1 ,ease: "easeInOut"}}
                                className="techtxtmb w-full mt-6 mb-6">
                                For this project to succeed , we need TCN members involved in building and maintaining this system.<br/>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                className="techtxtmb mb-4">
                                By building this system ourselves, we are not just creating a tool, we are setting a path to being a self-reliant, 
                                future-focused Cree Nation.
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                className="techtxtmb mb-4">
                                By demonstrating that creating these things are possible, we are hoping to inspire TCN members to pursue their own projects, in technical fields.
                            </motion.div>
                            </div>
                            <div className="flex justify-center items-center p-0 lg:p-6">
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                src="/gamedesignteam.png"
                                alt="Design Team"
                                className="w-full self-center"
                                style={{ objectFit: 'contain', height: 'auto' }}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/>
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 w-full mt-6 mb-6">
                            <div className="col-span-3 flex flex-col justify-center items-start">
                                <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , ease: "easeInOut"}}
                                className="techtxtbbb mt-6 mb-6">
                                The Bigger Goal
                                </motion.div>
                                <div className="block lg:hidden flex justify-center items-center">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                    src="/group-photo.png"
                                    alt="TCN Group Photo"
                                    className="w-full self-center"
                                    style={{ objectFit: 'cover', height: 'auto' }}
                                />
                                </div>
                                <motion.ul
                                    className="flex flex-col justify-start items-start p-1 lg:p-6"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{
                                    hidden: { opacity: 1 },
                                    show: {
                                        opacity: 1,
                                        transition: { delay: 0.3, staggerChildren: 0.12, delayChildren: 0.1 },
                                    },
                                    }}
                                    >
                                <motion.li
                                    className="techtxtmb list-disc list-inside mb-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 12 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                    }}
                                    >
                                    <span className="techtxtmbb">
                                        Ownership — <br/>
                                    </span>
                                    TCN controlling our own digital tools.
                                </motion.li>
                                <motion.li
                                    className="techtxtmb list-disc list-inside mb-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 12 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                    }}
                                    >
                                    <span className="techtxtmbb">
                                    Learning — <br/>
                                    </span>
                                    Teaching skills that create new opportunities in TCN.
                                </motion.li>

                                <motion.li
                                    className="techtxtmb list-disc list-inside mb-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 12 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                    }}
                                    >
                                    <span className="techtxtmbb">
                                    Innovation — <br/>
                                    </span>
                                    Solving challenges in our own way.
                                </motion.li>

                                <motion.li
                                    className="techtxtmb list-disc list-inside mb-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 12 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                    }}
                                    >
                                    <span className="techtxtmbb">
                                    Community — <br/>
                                    </span>
                                    Making communication stronger and services easier to access for every member.
                                </motion.li>
                                </motion.ul>
                            </div>
                            <div className="col-span-2 flex justify-center items-center">
                                <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}}
                                src="/group-photo.png"
                                alt="TCN Group Photo"
                                className="hidden lg:block w-full self-center object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='h-[2vh] lg:h-[25vh]'/>
                    <div className="block lg:hidden h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/>
                </section>
            </TabsContent>

            {/* Tab B section */}
            <TabsContent value="tab-b">
                <section className="w-full flex flex-col items-center justify-center px-4 lg:px-6 mt-12">
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 w-full mt-6 mb-6">
                        <div className="col-span-3 flex flex-col justify-center items-start">
                            <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 , ease: "easeInOut"}}
                            className="techtxtbbb mt-6 mb-6">
                            The Bigger Goal
                            </motion.div>
                            <div className="block lg:hidden flex justify-center items-center">
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                src="/group-photo.png"
                                alt="TCN Group Photo"
                                className="w-full self-center"
                                style={{ objectFit: 'cover', height: 'auto' }}
                            />
                            </div>
                            <motion.ul
                                className="flex flex-col justify-start items-start p-1 lg:p-6"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                hidden: { opacity: 1 },
                                show: {
                                    opacity: 1,
                                    transition: { delay: 0.3, staggerChildren: 0.12, delayChildren: 0.1 },
                                },
                                }}
                                >
                            <motion.li
                                className="techtxtmb list-disc list-inside mb-4"
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                }}
                                >
                                <span className="techtxtmbb">
                                    Ownership — <br/>
                                </span>
                                TCN controlling our own digital tools.
                            </motion.li>
                            <motion.li
                                className="techtxtmb list-disc list-inside mb-4"
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                }}
                                >
                                <span className="techtxtmbb">
                                Learning — <br/>
                                </span>
                                Teaching skills that create new opportunities in TCN.
                            </motion.li>

                            <motion.li
                                className="techtxtmb list-disc list-inside mb-4"
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                }}
                                >
                                <span className="techtxtmbb">
                                Innovation — <br/>
                                </span>
                                Solving challenges in our own way.
                            </motion.li>

                            <motion.li
                                className="techtxtmb list-disc list-inside mb-4"
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                                }}
                                >
                                <span className="techtxtmbb">
                                Community — <br/>
                                </span>
                                Making communication stronger and services easier to access for every member.
                            </motion.li>
                            </motion.ul>
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}}
                            src="/group-photo.png"
                            alt="TCN Group Photo"
                            className="hidden lg:block w-full self-center object-contain"
                            />
                        </div>
                        </div>
                    </div>
                    <div className='h-[2vh] lg:h-[25vh]'/>
                    <div className="block lg:hidden h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/> 
                </section>
            </TabsContent>

            {/* Tab C section */}
            <TabsContent value="tab-c">
                <section className="w-full flex flex-col items-center justify-center px-4 lg:px-6 mt-12">
                    <div className="w-full max-w-7xl mx-auto py-12 lg:py-20">
                        <div className="flex flex-col justify-center items-center w-full">
                        {/* <motion.img 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 , ease: "easeInOut"}}
                            src='/Achimowin_logo.png'
                            alt="TCN Logo"
                            className='w-full max-w-[100px] md:max-w-[150px] lg:max-w-[150px] mb-8 lg:p-2'
                        /> */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 , delay: 0.1 ,ease: "easeInOut"}}
                            className="techtxtbb text-center w-full mt-6 mb-6">
                            100% TCN created and operated.
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                            className="techtxtbb text-center w-full mt-6 mb-12">
                            It belongs to us, and it will grow with us.
                        </motion.div>
                        
                        {/* Final Portal Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            className="w-full max-w-md mx-auto"
                        >
                            <a href="https://tcnaux.ca/" className='block' target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 text-white font-bold text-lg lg:text-xl py-5 lg:py-6 px-8 lg:px-12 rounded-xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 border-2 border-amber-500/50">
                                <div className="flex items-center justify-center gap-3">
                                <span>Enter Member Portal</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                </div>
                            </div>
                            </a>
                        </motion.div>
                        </div>
                    </div>
                </section>
            </TabsContent>
           
           
            </Tabs>
        </div>
    )
}
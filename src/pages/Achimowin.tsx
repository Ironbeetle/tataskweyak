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
        <div className='relative w-full min-h-[100%] genbkg'>
            {/* Navigation */}
            <div className="sticky top-0 z-50">
                <Hamburger menuItems={menuItems} showBackButton={true} />
                <DesktopNav />
            </div>
            {/* Hero Section */}
            <section>
                <div className="tcnachimowin h-[30vh] sm:h-[30vh] lg:h-[50vh] flex items-end justify-center pb-2 lg:pb-5">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                        className="h-auto w-[90%] sm:w-[70%] lg:w-[50%] flex flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-3 py-2 lg:px-6 lg:py-4 bg-gray-900/50 backdrop-blur-sm border-b border-[#A1BC98]">
                        <img
                            src='/Achimowin_logo.png'
                            alt="Tataskweyak Cree Nation Logo"
                            className='w-[50px] sm:w-[80px] md:w-[120px] lg:w-[150px] flex-shrink-0'
                        />
                        {/* Welcome Text */}
                        <div className="min-w-0">
                            <div className="techtxtmbyy max-w-2xl">
                            <span className="techtxtmby">TCN ACHIMOWIN</span><br/>Your gateway to community services, updates, and connection.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Content Tabs section */}
            <Tabs defaultValue="tab-a" className="w-full h-auto">
                <section className="flex justify-center px-4 lg:px-6 mt-6">
                    <div className="w-[95%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5">
                        <div className="tab-card">
                            <TabsList className="tab-list">
                                <TabsTrigger value="tab-a" className="apptextmenu tab-trigger">About the Project</TabsTrigger>
                            </TabsList>
                        </div>
                        <div className="tab-card">
                            <TabsList className="tab-list">
                                <TabsTrigger value="tab-b" className="apptextmenu tab-trigger">TCN Youth</TabsTrigger>
                            </TabsList>
                        </div>
                        <div className="tab-card">
                            <a href="https://tcnaux.ca/" target="_blank" rel="noopener noreferrer">
                                <div className="tab-list">
                                    <div className="flex flex-col items-center justify-center apptextmenu h-full">
                                        Enter Achimowin
                                    </div>
                                </div>
                            </a>
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
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.1 ,ease: "easeInOut"}} 
                                    className="techtxtbbb w-auto mt-6 mb-6">
                                    Why We Are Doing This
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}} 
                                    className="techtxtmbb w-full mt-6 mb-6">
                                    This project has two main purposes:
                                </motion.div>
                                <ul className="flex flex-col justify-start items-start p-1 lg:p-6">
                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                    className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                        <span className="techtxtmbb">Better Communication and Access</span><br/>
                                        We want all TCN members to receive timely updates, important notices, 
                                        and easy access to services in one central place.
                                    </motion.li>

                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}} 
                                    className="techtxtmb list-disc list-inside mt-6 mb-6">
                                    <span className="techtxtmbb">Building Skills and Self-Reliance</span><br/>
                                    This project is more than just building a communications system. It's about TCN taking the first steps in 
                                    exploring new ways to problem solve and build our own tools to better the community and create business and
                                    job opportunities for everyone.
                                    </motion.li>
                                </ul>
                            </div>
                            <div className="flex justify-center items-center p-2 lg:p-6">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
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
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , ease: "easeInOut"}}
                                    className="techtxtbbb w-auto mt-2 lg:mt-6 mb-6">
                                    We Can Now Do These Things
                                </motion.div>
                                <ul className="flex flex-col justify-center items-start p-1 lg:p-6">
                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.1 ,ease: "easeInOut"}}
                                    className="techtxtmb list-disc list-inside mb-6 lg:mb-4">
                                        <span className="techtxtmbb"> Personal Communications</span><br/>
                                        TCN administration and community programs can communicate with registered TCN members through text or email.
                                    </motion.li>

                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                    className="techtxtmb list-disc list-inside mb-6 lg:mb-4">
                                    <span className="techtxtmbb">Public Communications</span><br/>
                                    TCN members can view community bulletins and locally produced content.
                                    </motion.li>

                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                    className="techtxtmb list-disc list-inside mb-6 lg:mb-4">
                                    <span className="techtxtmbb">Program Services</span><br/>
                                    We can now develop applications for services such as housing , healthcare, and public utilities.
                                    </motion.li>

                                    <motion.li 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}}
                                    className="techtxtmb list-disc list-inside mb-6 lg:mb-4">
                                    <span className="techtxtmbb">Public Alerts</span><br/>
                                    Quick access to public safety information and emergency preparedness.
                                    </motion.li>

                                </ul>
                            </div>
                            <div className="flex justify-center items-center p-0 lg:p-6">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                    src="/tcnmaletruck.png"
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
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , ease: "easeInOut"}}
                                    className="techtxtbbb mt-6 mb-6">
                                    The Heart of TCN Achimowin
                                </motion.div>
                                <div className="block lg:hidden flex justify-center items-center">
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                        src="/tcnwebpanel1.png"
                                        alt="TCN Youth Group img"
                                        className="w-full self-center"
                                        style={{ objectFit: 'cover', height: 'auto' }}
                                    />
                                </div>
                               <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                    className="techtxtmb mb-4">
                                    We now have our own online space, where we can communicate, learn, and express ourselves.
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                    className="techtxtmb mb-4">
                                    We can start creating our own content for community building, learning and healing.<br/>
                                    To do this TCN will need member involvement in the following areas:
                                </motion.div>
                                <div className="grid grid-cols-1 lg:grid-cols-5 flex items-center justify-center">
                                    <ul className="col-span-2 flex flex-col justify-start items-start p-1 lg:p-6">
                                        <motion.li 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                        className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                        Content Creators
                                        </motion.li>
                                        <motion.li 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                        className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                        Communicators
                                        </motion.li>
                                        <motion.li 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                        className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                        Technicians
                                        </motion.li>
                                        <motion.li 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                        className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                        App Developers
                                        </motion.li>
                                    </ul>
                                    <div className="col-span-3 flex justify-center items-center p-0 lg:p-4">
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                            src="/TCN-Youth.png"
                                            alt="Design Team"
                                            className="w-full self-center"
                                            style={{ objectFit: 'contain', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 flex justify-center items-center">
                                <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{once:true}}
                                transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}}
                                src="/gamedesignteam.png"
                                alt="TCN Youth Tech Team img"
                                className="hidden lg:block w-full self-center object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/>
                    {/* Join Us - end of tab A */}
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="w-full mt-6 mb-6 flex flex-col lg:flex-col justify-center items-center">
                            <div className="w-[100%] lg:w-full flex flex-col justify-center items-center p-6">
                                <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{once:true}}
                                transition={{ duration: 0.5 , ease: "easeInOut"}}
                                className="techtxtbbb mt-6 mb-6">
                                Join Us At Achimowin
                                </motion.div>

                                <div className="w-full grid grid-cols-1 lg:grid-cols-5">
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                        className="col-span-3 flex flex-col justify-center items-start p-1">
                                        <div className="techtxttitle mb-4">
                                            Let's make TCN Achimowin an integral part of daily community life <br/>
                                            <span className="techtxtmbb">the go-to platform for every TCN member.</span>
                                        </div>
                                        <div className="techtxtmb mb-4">
                                            Come and activate your account on our private platform.
                                        </div>
                                        <div className="techtxtmb mb-4">
                                            TCN Achimowin will work best, when everyone has activated their account.
                                        </div>
                                    </motion.div>
                                    <div className="col-span-2 flex justify-center items-center p-0 lg:p-10">
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                            src="/group-photo.png"
                                            alt="Join The Network img"
                                            className="w-full self-center"
                                            style={{ objectFit: 'cover', height: 'auto' }}
                                        />
                                    </div>
                                </div>

                                {/* Final Portal Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    className="w-full max-w-md mx-auto"
                                >
                                    <a href="https://tcnaux.ca/" className='block' target="_blank" rel="noopener noreferrer">
                                    <div className="relative overflow-hidden bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 text-white font-bold text-lg lg:text-xl py-5 lg:py-6 px-8 lg:px-12 rounded-xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 border-2 border-amber-500/50">
                                        <div className="flex items-center justify-center gap-3">
                                        <span>Enter TCN Achimowin</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        </div>
                                    </div>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[2vh] lg:h-[25vh]'/>
                </section>
            </TabsContent>

            {/* Tab B section */}
            <TabsContent value="tab-b">
                <section className="w-full flex flex-col items-center justify-center px-4 lg:px-6 mt-12">
                    <div className="w-full lg:p-6 mx-auto">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{once:true}}
                            transition={{ duration: 0.5 , ease: "easeInOut"}}
                            className="techtxtbbb mt-6 mb-6 w-[95%] lg:w-[20%]">
                            TCN Youth
                        </motion.div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className='h-[2vh] lg:h-[8vh]'/>
                            <div className="block lg:hidden flex justify-center items-center">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                    src="/tcnmediamobileimg.png"
                                    alt="TCN Youth Group img"
                                    className="w-full self-center mb-6 lg:mb-0"
                                    style={{ objectFit: 'cover', height: 'auto' }}
                                />
                            </div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{once:true}}
                                transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                className="techtxtmb mb-4 p-4 lg:p-6 text-center"> 
                                Because technology underpins so many parts of modern life, technical skills have become essential.<br/><br/>
                                We are reaching out to the capable TCN youth, to come forward and participate in developing 
                                TCN Achimowin and bring it to it’s full potential. 
                            </motion.div>
                        </div>
                        <div className="w-full flex justify-center items-center p-4 lg:p-10">
                            <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{once:true}}
                            transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}}
                            src="/studioscene1.jpg"
                            alt="TCN Youth Studio img"
                            className="hidden lg:block w-full self-center object-contain"
                            />
                        </div>
                    </div> 
                    <div className="h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/>
                    {/* There are opportunities here... */}
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 w-full mt-6 mb-6">
                            <div className="col-span-3 flex flex-col justify-center items-start">
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , ease: "easeInOut"}}
                                    className="techtxtbbb mt-1 lg:mt-6 mb-6 lg:mb-12">
                                    Untapped Tech Opportunities
                                </motion.div>
                                <div className="block lg:hidden flex justify-center items-center mt-6 lg:mt-1 mb-12 lg:mb-0">
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                        src="/tcnwebpanel1.png"
                                        alt="TCN Youth Group img"
                                        className="w-full self-center"
                                        style={{ objectFit: 'cover', height: 'auto' }}
                                    />
                                </div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                    className="techtxtmb mb-4 lg:mb-8">
                                    <span className="techtxtmbb">There are more opportunities here in TCN than you think.</span><br/><br/>
                                    With some imagination and proper training we can establish business ventures right here in TCN, 
                                    and have meaningful and satisfying careers in areas such as:
                                </motion.div>
                                <div className="w-full flex items-center justify-start">
                                    <ul className="flex flex-col justify-start items-start p-1 lg:p-5">
                                        <motion.li 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                            className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                            Language & Traditional Knowledge Preservation
                                        </motion.li>
                                        <motion.li 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                            className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                            Land Stewardship and Environmental Monitoring
                                        </motion.li>
                                        <motion.li 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                            className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                            Technicnal Services & Product Development
                                        </motion.li>
                                        <motion.li 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                            className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                            Software and App Development
                                        </motion.li>
                                        <motion.li 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                            className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                            Digital Media and Game Development
                                        </motion.li>
                                        <motion.li 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}} 
                                            className="techtxtmb list-disc list-inside mb-6 lg:mb-6">
                                            Indoor Agriculture
                                        </motion.li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2 flex justify-center items-center">
                                <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{once:true}}
                                transition={{ duration: 0.5 , delay: 0.4 ,ease: "easeInOut"}}
                                src="/designteam.png"
                                alt="TCN Youth Tech Team img"
                                className="hidden lg:block w-full self-center object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[5px] w-full bg-amber-900 backdrop-blur-sm border-b border-amber-600/50 mt-12 mb-12"/>
                    {/* We will use this platform ... */}
                    <div className="w-full lg:p-6 mx-auto">
                        <div className="w-full mt-6 mb-6">
                            <div className="flex flex-col justify-center items-start">
                                 <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , ease: "easeInOut"}}
                                    className="techtxtbbb mt-6 mb-6 lg:mb-12">
                                    TCN Achimowin: Stepping Stone to a Brighter Future
                                </motion.div>
                                <div className="block lg:hidden flex justify-center items-center">
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{once:true}}
                                        transition={{ duration: 0.5 , delay: 0.2 ,ease: "easeInOut"}}
                                        src="/TCN-Youth.png"
                                        alt="TCN Youth Group img"
                                        className="w-full self-center"
                                        style={{ objectFit: 'cover', height: 'auto' }}
                                    />
                                </div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                    className="w-[95%] lg:w-[70%] techtxtmb mb-4">
                                    We will use this platform to inspire and educate TCN members to develop viable skills and abilities, so we can make 
                                    TCN a healthy and prosperous Cree Nation for us and the next generations. 
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5 , delay: 0.3 ,ease: "easeInOut"}}
                                    className="w-[95%] lg:w-[70%] techtxtmb mb-4">
                                    Announcements and Updates will be provided soon. 
                                </motion.div>
                                <div className="grid grid-cols-1 lg:grid-cols-3 flex items-center justify-center">
                                    <div className="flex justify-center items-center p-0 lg:p-4">
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                            src="/tcndronepilot.png"
                                            alt="Drone Pilot img"
                                            className="w-full self-center"
                                            style={{ objectFit: 'contain', height: 'auto' }}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center p-0 lg:p-4">
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                            src="/serverworking.png"
                                            alt="Server Working img"
                                            className="w-full self-center"
                                            style={{ objectFit: 'contain', height: 'auto' }}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center p-0 lg:p-4">
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{once:true}}
                                            transition={{ duration: 0.5 , delay: 0.5 ,ease: "easeInOut"}}
                                            src="/3dprinting.png"
                                            alt="3D Printing img"
                                            className="w-full self-center"
                                            style={{ objectFit: 'contain', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div className='h-[2vh] lg:h-[25vh]'/>
                </section>
            </TabsContent>

            </Tabs>
        </div>
    )
}
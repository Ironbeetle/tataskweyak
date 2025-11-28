import { Backbtn } from "../components/Backbtn";
import { Hamburger } from "../components/Hamburger";

export default function EconomicDevelopment() {
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
                <div />
                <div />
                <div />
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
            
            {/* Hero section */}
            <section className="relative">
                <div className="ecdevbkg h-[30vh] sm:h-[30vh] lg:h-[40vh] flex items-center justify-center bg-cover bg-center border-b-4 border-green-700">
                    <div className="relative z-10 text-center px-4">
                        <img src="/tcnlogosm.png" className="mx-auto w-16 sm:w-20 lg:w-24 mb-4 drop-shadow-lg" />
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 text-amber-50 drop-shadow-lg">
                            Tataskweyak Cree Nation
                        </h1>
                        <p className="text-md md:text-base lg:text-lg text-amber-100 drop-shadow-md">
                            Economic Development
                        </p>
                    </div>
                </div>
            </section>


            {/* Key initiatives section with cards */}
            <div className="bg-white/20 backdrop-blur-sm mt-12">
                <div className="container mx-auto px-4">
                    <h2 className="apptext text-center font-bold text-emerald-800 mb-8">Our Key Initiatives</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Initiative Card 1 */}
                        <div className="bg-white/70 rounded-lg shadow-md overflow-hidden">
                            <img src="/tcnaboutbkg.jpg" className="w-full h-48 object-cover" alt="Hydroelectric Partnership" />
                            <div className="p-4">
                                <h3 className="font-bold text-emerald-800 text-xl mb-2">Hydroelectric Partnerships</h3>
                                <p className="text-gray-700">
                                    Working with Manitoba Hydro to ensure energy projects benefit our community and respect our environment.
                                </p>
                            </div>
                        </div>
                        
                        {/* Initiative Card 2 */}
                        <div className="bg-white/70 rounded-lg shadow-md overflow-hidden">
                            <img src="/tcnaboutbkg.jpg" className="w-full h-48 object-cover" alt="Community Business" />
                            <div className="p-4">
                                <h3 className="font-bold text-emerald-800 text-xl mb-2">Community-Owned Businesses</h3>
                                <p className="text-gray-700">
                                    Supporting entrepreneurship among our members to serve both the community and wider region.
                                </p>
                            </div>
                        </div>
                        
                        {/* Initiative Card 3 */}
                        <div className="bg-white/70 rounded-lg shadow-md overflow-hidden">
                            <img src="/tcnaboutbkg.jpg" className="w-full h-48 object-cover" alt="Resource Management" />
                            <div className="p-4">
                                <h3 className="font-bold text-emerald-800 text-xl mb-2">Resource Management</h3>
                                <p className="text-gray-700">
                                    Balancing development with protection of our natural resources for future generations.
                                </p>
                            </div>
                        </div>
                        
                        {/* Initiative Card 4 */}
                        <div className="bg-white/70 rounded-lg shadow-md overflow-hidden">
                            <img src="/tcnaboutbkg.jpg" className="w-full h-48 object-cover" alt="Employment and Training" />
                            <div className="p-4">
                                <h3 className="font-bold text-emerald-800 text-xl mb-2">Employment & Training</h3>
                                <p className="text-gray-700">
                                    Investing in education to prepare our members for jobs in new and existing industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact section with business card style */}
            <div className="container mx-auto mt-12">
                <div className="max-w-2xl mx-auto bg-white/80 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="font-bold text-emerald-800 text-2xl mb-4 text-center">Contact Economic Development</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/2">
                                <p className="mb-4">
                                    For business inquiries or to learn more about our economic development initiatives, please contact us:
                                </p>
                                <p className="font-semibold">Economic Development Office</p>
                                <p>Tataskweyak Cree Nation</p>
                                <p>Email: <a href="mailto:econdev@tataskweyak.ca" className="text-emerald-700 underline">econdev@tataskweyak.ca</a></p>
                                <p>Phone: (204) 000-0000</p>
                            </div>
                            <div className="md:w-1/2 flex items-center justify-center">
                                <img src="/tcnlogosm.png" className="max-w-[120px]" alt="TCN Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-[10vh]" />
        </div>
    );
}

import { Link } from "react-router-dom"
import { ContactUs as ContactForm } from "../components/ContactForm"
import { Phone, Mail, MapPin } from "lucide-react"
import { Backbtn } from "../components/Backbtn"
import { useWindowWidth } from '../hooks/useWindowWidth'

export default function ContactUs() {
    const width = useWindowWidth();
    const Hamburger = () => {
        return(
            <div className="top-0 z-50 sticky">
                <div className="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <li className="flex flex-col justify-center items-center">
                            <Backbtn/>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/ChiefnCouncil" className='h-full'>
                                <div className='flex flex-col justify-center h-full navlink apptext'>
                                    Chief & Council
                                </div>
                            </Link>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/BandHall" className='h-full'>
                                <div className='flex flex-col justify-center h-full navlink apptext'>
                                    Band Office
                                </div>
                            </Link>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/AboutTCN" className='h-full'>
                                <div className='flex flex-col justify-center h-full navlink apptext'>
                                    About Us
                                </div>       
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    const LinkBar = () => {
        return(
            <div className="topnavbar">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 h-full">
                    <Backbtn/>
                    <Link to="/pages/ChiefnCouncil" className='h-full'>
                        <div className='flex flex-col justify-center h-full navlink apptextmini'>
                            Chief & Council
                        </div>
                    </Link>
                    <Link to="/pages/BandHall" className='h-full'>
                        <div className='flex flex-col justify-center h-full navlink apptextmini'>
                            Band Office
                        </div>
                    </Link>
                    <Link to="/pages/AboutTCN" className='h-full'>
                        <div className='flex flex-col justify-center h-full navlink apptextmini'>
                            About Us
                        </div>       
                    </Link>
                </div>
            </div>
        )
    }
    const Navselector = () => {
        if (width < 480) {
            return <Hamburger/>
        }else if (width > 481 && width < 1024){
            return <LinkBar/>
        }else {
            return <LinkBar/>
        }
    }
    return (
        <div className="w-full h-full genbkg overflow-y-scroll">
            <Navselector/>
            <div className="w-full h-full mt-12">
                <div className="flex flex-col items-center justify-start p-8">
                    <img src='/tcnlogosm.png' className='scale-imagemin mb-6'/>
                    <h1 className="apptext borderbot mb-12">Contact Tataskweyak Cree Nation</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-12">
                        <div className="flex flex-col items-center p-6 rounded-lg" style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
                            <Phone className="w-8 h-8 mb-4" />
                            <h2 className="apptextminib mb-2">Phone</h2>
                            <a href="tel:+12043422614" className="apptextminib hover:underline">
                                (204) 342-2045
                            </a>
                        </div>
                        <div className="flex flex-col items-center p-6 rounded-lg" style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
                            <Mail className="w-8 h-8 mb-4" />
                            <h2 className="apptextminib mb-2">Email</h2>
                            <a href="mailto:info@tataskweyak.mb.ca" className="apptextminib hover:underline">
                                tataskweyak.mb.ca
                            </a>
                        </div>
                        <div className="flex flex-col items-center p-6 rounded-lg" style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
                            <MapPin className="w-8 h-8 mb-4" />
                            <h2 className="apptextminib mb-2">Address</h2>
                            <p className="apptextminib text-center">
                                Split Lake, MB
                                <br />
                                R0B 1P0
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-4xl">
                        <h2 className="flex flex-col justify-center items-center apptext text-center mb-6 w-full">Send us a message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

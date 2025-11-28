import  {Link} from "react-router"
import { Button } from "../components/ui/button"
import { Backbtn } from "../components/Backbtn"
import { useWindowWidth } from '../hooks/useWindowWidth'

export default function Departments() {
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
                                    <div className='flex flex-col justify-center h-full navlink apptextmini'>
                                        Chief & Council
                                    </div>
                                </Link>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <Link to="/pages/BandHall" className='h-full'>
                                    <div className='flex flex-col justify-center h-full navlink apptextmini'>
                                        Band Office
                                    </div>
                                </Link>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <Link to="/pages/AboutTCN" className='h-full'>
                                    <div className='flex flex-col justify-center h-full navlink apptextmini'>
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
        <div className="w-screen h-screen genbkg overflow-y-scroll">
            <Navselector/>
            {/* top cnc banner */}
            <div className="w-full h-full mt-12">
                <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-2 pt-12">
                    <div className="flex flex-col justify-center items-center p-4">
                        <img src="/TCNCnC2025.jpg" className="scale-imagemax"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src='/tcnlogosm.png' className='scale-imagemin mb-6'/>
                        <div className="apptext borderbot mb-6">
                            Tataskweyak Cree Nation Local By-Laws
                        </div>
                       <div className="flex flex-row justify-center items-center gap-4 w-full">
                       <Button>
                            Download Document
                       </Button>
                       <Button>
                            View Document
                       </Button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
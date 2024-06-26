import { useState } from "react"
import { MenuItems } from "../items/MenuItems"
import { Link, useLocation } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5";


export const MobileNavbar = () => {

    const [mobileNavbarVisible, setMobileNavbarVisible] = useState<boolean>(false);

    const handleCloseNav = () => {
        setMobileNavbarVisible(false)
    };

    const handleOpenNav = () => {
        setMobileNavbarVisible(true)
    };

    const location = useLocation();

  return (

        <section className="right-0 absolute pt-[30px] overflow-x-hidden z-10">
            <div className="absolute right-0 top-0">
                {
                    mobileNavbarVisible ? (<><button className=" text-2xl p-3 rounded-xl text-white bg-[#380B41] border-2 border-white" onClick={handleCloseNav}><IoCloseSharp /></button>
                    </>) : (<><button className="text-2xl p-3 rounded-xl bg-[#380B41] text-white border-2 border-white" onClick={handleOpenNav}><FaBars /></button></>)
                }
                </div>
                
            <ul className={`mt-5 pt-[30px] bg-[#380B41] pb-[30px] rounded-xl transition-transform transform ${mobileNavbarVisible ? "translate-x-0" : "translate-x-[100vw]"}`}>
                {
                    MenuItems.map((item, index) => (
                        <li key={index} className="pt-[20px] pl-8">
                            <Link to={item.url} className={`text-2xl font-bold pr-[20px] ${location.pathname === item.url ? "text-purple-600" : "text-white"}`} >{item.title}</Link> 
                        </li>
                    ))
                }
            </ul>
        </section>
  )
}

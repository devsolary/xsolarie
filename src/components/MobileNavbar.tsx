import { useState } from "react"
import { MenuItems } from "./MenuItems"
import { Link } from "react-router-dom"


export const MobileNavbar = () => {

    const [mobileNavbarVisible, setMobileNavbarVisible] = useState<boolean>(false);

    const handleCloseNav = () => {
        setMobileNavbarVisible(false)
    };

    const handleOpenNav = () => {
        setMobileNavbarVisible(true)
    };

  return (

        <section className="right-0 absolute pt-[30px] overflow-x-hidden z-10">
            <div className="absolute right-0">
                {
                    mobileNavbarVisible ? (<><button className="text-xl text-white" onClick={handleCloseNav}>close</button>
                    </>) : (<><button className="text-xl text-white" onClick={handleOpenNav}>open</button></>)
                }
                </div>
                
            <ul className={`mt-[40px] pt-[30px] bg-purple-700 pb-[30px] rounded-xl transition-transform transform ${mobileNavbarVisible ? "translate-x-0" : "translate-x-[100vw]"}`}>
                {
                    MenuItems.map((item, index) => (
                        <li key={index} className="pt-[20px] pl-8">
                            <Link to={item.url} className="text-2xl font-bold pr-[20px] text-white" >{item.title}</Link> 
                        </li>
                    ))
                }
            </ul>
        </section>
  )
}

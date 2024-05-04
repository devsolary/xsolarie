import { useState } from "react";
import { MenuItems } from "../items/MenuItems";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export const LargeScreenNavbar = () => {
    const [joinTeamForm, setJoinTeamForm] = useState(false);
    
    const showJoinForm = () => {
        setJoinTeamForm(!joinTeamForm);
    }

    useGSAP(() => {
      gsap.to(".showForm", {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "Power4.out",
      })
    },[])


  return (
    <nav className="lg:overflow-hidden ">
        {
            joinTeamForm && (<div className="showForm bg-[#380b41] w-[50vw] ml-[25vw] z-10 rounded-3xl my-8 absolute h-[80vh] mt-[15vh]">
            <h1 className="text-center py-5 text-xl font-bold">Interested In Joining Our Team.
              </h1>
            <form action="" className="pt-[10px] px-10">
              <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[25px] px-[15px] mt-[10px] outline-none" placeholder="Full Name"/>
              <br />
              <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[25px] px-[15px] mt-[10px] outline-none" placeholder="Email Address"/>
              <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[25px] px-[15px] mt-[10px] outline-none" placeholder="Phone number"/>
              <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] pb-[150px] px-[15px] mt-[10px] py-0 outline-none" placeholder="Let us know your skills....."/>
              <button className="w-[50%] ml-[25%] my-7 bg-gradient-to-r from-purple-950 to-white font-bold p-2 rounded-3xl">Send Message</button>
            </form>
          </div>)
        }
        <section className="absolute lg:overflow-hidden border-b-2 w-[100vw] z-10">
            <ul className={`mt-[20px] pl-[30px] pb-[10px] flex ml-[45vw]`}>
                {
                    MenuItems.map((item, index) => (
                        <li key={index} className="pr-[30px]">
                            <Link className="text-sm text-white hover:text-gray-400" to={item.url}>{item.title}</Link>
                        </li>
                    ))
                }
                <button onClick={showJoinForm} className="font-bold bg-gradient-to-br from-[#380b41] to-purple-700 py-1 px-3 rounded-xl text-white hover:scale-125 transition-transform duration-700 ease-in-out">Join Xsolarie Dev Team</button>
            </ul>
        </section>
    </nav>
  )
}

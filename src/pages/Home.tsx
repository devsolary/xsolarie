import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Services from "../components/Services"
import Entertainment from "../components/Entertainment"
import Techbologies from "../components/Techbologies"
import Contact from "../components/Contact"

const Home = () => {

  useGSAP(() =>{
    gsap.fromTo(".h1SlideIn", {
      x:"-100%",
      opacity: 0
    }, {
      x:"0%",
      opacity: 1,
      duration: 1,
      ease: "Power4.out",
      delay: 0.5
    })
  }, [])

  useGSAP(() =>{
    gsap.fromTo(".pSlideIn", {
      x:"-100%",
      opacity: 0
    }, {
      x:"0%",
      opacity: 1,
      duration: 1,
      ease: "Power4.out",
      delay: 1
    })
  }, [])

  return (
    <> <div className="w-[100vw] h-[100vh] overflow-hidden bg-gradient-to-r from-purple-900 to-purple-500">
      <section className="mt-[60vh] py-[20px] px-[20px]">
        <h1  id="homeTop" className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-white py-[10px] pl-[5px] text-transparent bg-clip-text h1SlideIn">Welcome to Xsolarie</h1>
        <p className="text-xl font-bold bg-gradient-to-br  px-[10px] py-[10px] from-purple-600 to-purple-900 rounded-2xl pSlideIn text-gray-400">Exceptional digital solutions and captivating entertainment experience.
        </p>
      </section>
      </div>
      <div className="">
        <section className="pt-[50px] px-[20px]">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="py-[20px] text-xl">
          At Xsolarie, we are more than just a digital agency;
          we are your partners in success.
          <br />
          <br /> With a passion for technology and flair for creativity, out team of experts is committed to delivering outstanding results tailored to your unique need.
          <br />
          <br /> Learn more about our journey, value, and the talented individual behind our success.
          </p>
        </section>
      </div>
      <div>
        <Services />
      </div>
        <Entertainment />
      <div>
        <div>
          <Techbologies />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      </>
   
  )
}

export default Home
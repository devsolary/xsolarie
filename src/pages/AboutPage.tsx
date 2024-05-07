import aboutBg from "../assets/images/frontend-service.jpg"
import aboutImg from "../assets/images/aboutUs.png"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutPage = () => {
    const aboutScrollRef = useRef<HTMLDivElement>(null);

    //about animation
  useGSAP(() => {
    const about = aboutScrollRef.current;

    if (!about) return;

    gsap.from(about, {
      y: 100,
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <img src={aboutBg} alt="" className="absolute object-cover h-full w-full -z-10" />
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
            <div  className="lg:py-10 mt-8 lg:mt-0">
          <section ref={aboutScrollRef} className="pt-[50px] px-[20px] lg:flex lg:flex-row lg:mx-[5vw]">
            <div className="lg:w-[50vw] lg:mr-[10vw]">
          <h1 className="text-4xl font-extrabold text-white">About Us</h1>
          <p className="py-[20px] text-xl font-bold text-white">
            At Xsolarie, we are more than just a digital agency; we are your
            partners in success.
            <br />
            <br /> With a passion for technology and flair for creativity, our
            team of experts is committed to delivering outstanding results
            tailored to your unique need.
            <br />
            <br /> Learn more about our journey, value, and the talented
            individual behind our success.
            </p>
            </div>
            <img src={aboutImg} className="hidden lg:block " alt="about Image" />
        </section>
      </div>
    </div>
  )
}

export default AboutPage;
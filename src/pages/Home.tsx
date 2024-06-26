import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Services from "../components/Services";
import Entertainment from "../components/Entertainment";
import Techbologies from "../components/Technologies";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";
import homeBgVideo from "../assets/videos/homeBgVideo.mp4";
import aboutImg from "../assets/images/aboutUs.png"
import Preloading from "../components/Preloading";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const aboutScrollRef = useRef<HTMLDivElement>(null);
 
  //video homeBg
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return console.log("no video");
    } 
    if(video.paused){
      video.play();
    }

    const handleVideoEnd = () => {
      if (video) {
        const videoLength = video.duration;
        const loopVideoFrom = videoLength - 2.7;
        video.currentTime = loopVideoFrom;
        video.play();
      }
    };
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);
  // to menu Gsap animation
  useGSAP(() => {
    gsap.fromTo(
      ".h1SlideIn",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "Power4.out",
        delay: 1,
      }
    );
  }, []);
  //about animation
  useGSAP(() => {
    const about = aboutScrollRef.current;

    if (!about) return;

    gsap.from(about, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: about,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  //pslide in
  useGSAP(() => {
    gsap.fromTo(
      ".pSlideIn",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "Power4.out",
        delay: 1,
      }
    );
  }, []);



  return (
    <>
      {homeBgVideo ? (<div><div className="w-[100vw] h-[100vh] overflow-hidden bg-gradient-to-br from-purple-950 to-purple-500">
        <video
          autoPlay
          muted
          playsInline={true}
          key={homeBgVideo}
          ref={videoRef}
          preload="true"
          className="absolute h-[100vh] w-[100vw] object-cover z-0"
        >
          <source src={homeBgVideo} type="video/mp4"/>
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <section className="mt-[12vh] py-[20px] px-[20px] lg:mt-[15vh]">
          <h1
            id="homeTop"
            className="font-bold text-xl bg-gradient-to-r from-[#5BFFDB] to-white py-[10px] pl-[5px] text-transparent bg-clip-text h1SlideIn opacity-0 mt-10 text-center lg:mt-8"
          >
            Welcome to Xsolarie
          </h1>
          <p className="text-4xl font-bold px-[10px] py-[10px] pSlideIn text-white lg:mx-[20vw] lg:text-center lg:mt-14">
            Experience exceptional digital solutions and captivating
            entertainment experience.
          </p>
        </section>
      </div>
      <div  className=" bg-[#19042D] lg:py-10">
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
      <div className="bg-[#2E133A] overflow-hidden">
        <Services />
        <Entertainment />
        <Techbologies />
      </div>
      <div className="overflow-hidden">
      <Contact />
      </div></div>) : (<Preloading />)}
    </>
  );
};

export default Home;

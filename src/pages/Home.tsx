import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Services from "../components/Services";
import Entertainment from "../components/Entertainment";
import Techbologies from "../components/Techbologies";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";
import homeBgVideo from "../assets/videos/homeBgVideo.mp4";
import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const aboutScrollRef = useRef<HTMLDivElement>(null);
  //video homeBg
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return console.log("no video");
    } else {
      video.play().catch(() => {
        if(video)video.controls = true;
      })
    }


    const handleVideoEnd = () => {
      if (video) {
        const videoLength = video.duration;
        console.log(video);
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
      {" "}
      <div className="w-[100vw] h-[100vh] overflow-hidden bg-gradient-to-br from-purple-950 to-purple-500">
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
            className="font-bold text-xl bg-gradient-to-r from-[#5BFFDB] to-white py-[10px] pl-[5px] text-transparent bg-clip-text h1SlideIn opacity-0 mt-10 text-center "
          >
            Welcome to Xsolarie{" "}
          </h1>
          <p className="text-4xl font-bold px-[10px] py-[10px] pSlideIn text-white lg:mx-[20vw] lg:text-center">
            {" "}
            Experience Exceptional Digital Solutions and Captivating
            Entertainment Experience.
          </p>
        </section>
      </div>
      <div  className="bg-purple-400">
        <section ref={aboutScrollRef} className="pt-[50px] px-[20px]">
          <h1 className="text-4xl font-extrabold">About Us</h1>
          <p className="py-[20px] text-xl font-bold">
            At Xsolarie, we are more than just a digital agency; we are your
            partners in success.
            <br />
            <br /> With a passion for technology and flair for creativity, out
            team of experts is committed to delivering outstanding results
            tailored to your unique need.
            <br />
            <br /> Learn more about our journey, value, and the talented
            individual behind our success.
          </p>
        </section>
      </div>
      <div className="bg-purple-900">
        <Services />
        <Entertainment />
        <Techbologies />
      </div>
      <div className="bg-purple-400">
      <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

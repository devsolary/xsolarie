import { useRef } from "react";
import { ServiceItems } from "../items/ServicesItems";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const serviceRef = useRef<(HTMLDivElement | null)[]>([]);
  

//service gsap animation
  useGSAP(() => {
    if(!serviceRef) return;

    serviceRef.current.forEach((div) => {
      gsap.from(div, {
        y:100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: div,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
      })
    })
  });



  return (
    <div className="py-[50px] bg-purple-900 lg:h-[70vh] lg:flex lg:flex-row lg:overflow-x-hidden lg:py-0">
      <h1 className="font-bold text-center text-3xl border-b-2 lg:my-[20px] lg:absolute lg:text-center lg:ml-[5vw] text-white">
        SERVICES
      </h1>
      <section className="px-[30px] justify-center items-center lg:flex lg:flex-row lg:my-0 lg:px-0 lg:ml-[4vw] overflow-hidden" >
      {
        ServiceItems.map((service, i) => (
          <div key={i} ref={el => serviceRef.current[i] = el} 
          className="flex flex-col justify-center items-center from-gray-400 py-8 my-8 rounded-3xl lg:h-[45vh] lg:w-[17vw] lg:mx-[10px] lg:py-[30px]"
          style={{
            background: "radial-gradient(purple, #262650)",
          }}
        >
          <img
            src={service.image}
            alt=""
            className="h-[50vw] rounded-3xl lg:w-[15vw] lg:mt-2"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-[16px] lg:mt-[10px] text-white lg:mb-0">
            {service.title}
          </h1>
          <p className="mx-[30px] text-center text-2xl lg:text-[14px] lg:leading-3 text-white lg:mt-1">
            {service.description}
          </p>
        </div>
        ))
      }
      </section>
    </div>
  );
};

export default Services;

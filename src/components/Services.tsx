import { useRef } from "react";
import sampleImg from "../assets/images/Mask-group.png";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const uiUxRef = useRef<HTMLDivElement>(null);
  const appDevRef = useRef<HTMLDivElement>(null);
  const pManRef = useRef<HTMLDivElement>(null);

  //services animation
  //frontend 
  useGSAP(() => {

    const frontend = frontendRef.current;

    if(!frontend) return;
    
    gsap.from(frontend, {
      y:100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: frontend,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  });
  //backend
  useGSAP(()=> {
    const backend = backendRef.current;

    if(!backend) return;
    
    gsap.from(backend, {
      y:100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: backend,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  });
  // ui/ui
  useGSAP(() => {
    const uiUx = uiUxRef.current;

    if(!uiUx) return;
    
    gsap.from(uiUx, {
      y:100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: uiUx,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  })
  //appDevRef
  useGSAP(() => {
    const appDev = appDevRef.current;

    if(!appDev) return;
    
    gsap.from(appDev, {
      y:100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: appDev,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  })
  //project managemnt
  useGSAP(() => {
    const projectManagement = pManRef.current;

    if(!projectManagement) return;
    
    gsap.from(projectManagement, {
      y:100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: projectManagement,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  })

  return (
    <div className="py-[50px] bg-purple-900 lg:h-[70vh] lg:flex lg:flex-row lg:overflow-x-hidden lg:py-0">
      <h1 className="font-bold text-center text-3xl border-b-2 lg:my-[20px] lg:absolute lg:text-center lg:ml-[5vw] text-white">
        SERVICES
      </h1>
      <section className="px-[30px] justify-center items-center lg:flex lg:flex-row lg:my-0 lg:px-0 lg:ml-[4vw]">
        <div ref={frontendRef}
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #262650)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] text-white lg:mb-0">
            Frontend Development:
          </h1>
          <p className="mx-[30px] text-center text-2xl lg:text-[10px] lg:leading-3 text-white ">
            Crafting User-friendly interface that enhance user experience.
          </p>
        </div>
        <div ref={backendRef}
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #262650)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0 text-white ">
            Backend Development:
          </h1>
          <p className="mx-[30px] text-center text-2xl lg:text-[10px] lg:leading-3 text-white">
            Building robust and scalable backend system to power your
            application with latest technologies.
          </p>
        </div>
        <div ref={uiUxRef}
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #262650)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0 text-white ">
            UI/UX Design:
          </h1>
          <p className="mx-[30px] text-center text-2xl lg:text-[10px] lg:leading-3 text-white">
            designing visually stunning and intuitive interface that engage and
            delight users.
          </p>
        </div>
        <div ref={appDevRef}
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #262650)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0 text-white ">
            {" "}
            Mobile App Development:
          </h1>
          <p className="mx-[30px] text-center text-2xl lg:text-[10px] lg:leading-3 text-white ">
            Creating seamless mobile experiences on android and iOS platforms.
          </p>
        </div>
        <div ref={pManRef}
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #262650)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0 text-white ">
            project Management:
          </h1>
          <p className="mx-[30px] text-center text-2xl lg:text-[10px] lg:leading-3 text-white ">
            Ensuring smooth project execution from inception to complete.
          </p>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Services;

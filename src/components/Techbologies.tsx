import { useEffect, useState } from "react";
import {
  ProgrammingLanguageitems,
  MyObject,
} from "../items/ProgramminLanguageItem";
import { Frameworks } from "../items/Frameworks";
import { MobileDevItems } from "../items/mobileDe";
import { DesignToolItems } from "../items/DesignTools";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Techbologies = () => {
  const [pLcurr, setpLCurr] = useState(0);
  const [frameworkCurr, setFrameworkCurr] = useState(0);
  const [mobileDevCurr, setMobileDevCurr] = useState(0);
  const [animeCurr, setAnimeCurr] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  //checkscreen size function
  useEffect(() =>{ 
    const setScreenWidth = () => {
      if(window.innerWidth >= 768) {
        setIsLargeScreen(true)
      }
    }

    setScreenWidth();

    window.addEventListener("resize", setScreenWidth)

    return () => window.removeEventListener("resize", setScreenWidth)
  }, []);


//programming language next and prev

  const pLprev = (arr: MyObject[]) => {
    setpLCurr((pLcurr) => (pLcurr === 0 ? arr.length - 1 : pLcurr - 1));
  };

  const pLnext = (arr: MyObject[]) => {
    setpLCurr((pLcurr) => (pLcurr === arr.length - 1 ? 0 : pLcurr + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      pLnext(ProgrammingLanguageitems);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //framework next and prev

  const frameworkPrev = (arr: MyObject[]) => {
    setFrameworkCurr((frameworkCurr) =>
      frameworkCurr === 0 ? arr.length - 1 : frameworkCurr - 1
    );
  };

  const frameworkNext = (arr: MyObject[]) => {
    setFrameworkCurr((frameworkCurr) =>
      frameworkCurr === arr.length - 1 ? 0 : frameworkCurr + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      frameworkNext(Frameworks);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  //mobile Dev next and prev

  const mobileDevPrev = (arr: MyObject[]) => {
    setMobileDevCurr((mobileDevCurr) =>
      mobileDevCurr === 0 ? arr.length - 1 : mobileDevCurr - 1
    );
  };

  const mobileDevNext = (arr: MyObject[]) => {
    setMobileDevCurr((mobileDevCurr) =>
      mobileDevCurr === arr.length - 1 ? 0 : mobileDevCurr + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      mobileDevNext(MobileDevItems);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  //animation tool next and prev

  const animePrev = (arr: MyObject[]) => {
    setAnimeCurr((animeCurr) =>
      animeCurr === 0 ? arr.length - 1 : animeCurr - 1
    );
  };

  const animeNext = (arr: MyObject[]) => {
    setAnimeCurr((animeCurr) =>
      animeCurr === arr.length - 1 ? 0 : animeCurr + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animeNext(MobileDevItems);
    }, 6500);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="bg-purple-900 overflow-hidden">
      <h1 className="text-center text-2xl font-bold text-white border-b-2 lg:mx-[30vw] pb-2 mb-5">
        Technologies Use By Xsolarie
      </h1>
      <section className="px-[10vw]">
        <section className="">
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Programming Languages
          </h1>
          <button
            onClick={() => pLprev(ProgrammingLanguageitems)}
            className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2"
          >
            <FaArrowAltCircleLeft />
          </button>
          <div
            className={`flex flex-row overflow-x-hidden items-center mx-[10vw] transition ease-out duration-40`}
          >
            {ProgrammingLanguageitems.map((item, i) => (
              <div
                key={i}
                className="flex transition ease-out duration-100 px-[10vw] pb-4 lg:px-[7vw]"
                style={{
                  transform: `translateX(-${ isLargeScreen ? pLcurr * 30 : pLcurr * 60}vw)`,
                }}
              >
                <img src={item.image} alt="" className="h-[70px] w-[50px] rounded-3xl" />
                <p className="mx-5 w-[30vw] pt-[15px] text-sm font-bold text-white lg:w-[13vw]">
                  {item.title}
                </p>
              </div>
            ))}
            <button
              onClick={() => pLnext(ProgrammingLanguageitems)}
              className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-0 px-2 py-2 right-[10vw]"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </section>
        <section className="">
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Frameworks and Library
          </h1>
          <button
            onClick={() => frameworkPrev(Frameworks)}
            className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2"
          >
            <FaArrowAltCircleLeft />
          </button>
          <div
            className={`flex flex-row overflow-x-hidden items-center mx-[10vw] transition ease-out duration-40`}
          >
            {Frameworks.map((item, i) => (
              <div
                key={i}
                className="flex transition ease-out duration-40 px-[10vw] pb-4 lg:px-[7vw]"
                style={{
                  transform: `translateX(-${ isLargeScreen ? frameworkCurr * 30 : frameworkCurr * 60}vw)`,
                }}
              >
                <img src={item.image} alt="" className="h-[70px] w-[50px] rounded-3xl" />
                <p className="mx-5 w-[30vw] pt-[15px] text-sm font-bold text-white lg:w-[13vw]">
                  {item.title}
                </p>
              </div>
            ))}
            <button
              onClick={() => frameworkNext(Frameworks)}
              className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-0 px-2 py-2 right-[10vw]"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </section>
        <section className="">
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Mobile app Development
          </h1>
          <button
            onClick={() => mobileDevPrev(MobileDevItems)}
            className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2"
          >
            <FaArrowAltCircleLeft />
          </button>
          <div
            className={`flex flex-row overflow-x-hidden items-center mx-[10vw] transition ease-out duration-40`}
          >
            {MobileDevItems.map((item, i) => (
              <div
                key={i}
                className="flex transition ease-out duration-40 px-[10vw] pb-4 lg:px-[7vw]"
                style={{
                  transform: `translateX(-${ isLargeScreen ? mobileDevCurr * 30 : mobileDevCurr * 60}vw)`,
                }}
              >
                <img src={item.image} alt="" className="h-[70px] w-[50px] rounded-3xl" />
                <p className="mx-5 w-[30vw] pt-[15px] text-sm font-bold text-white lg:w-[13vw]">
                  {item.title}
                </p>
              </div>
            ))}
            <button
              onClick={() => mobileDevNext(MobileDevItems)}
              className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-0 px-2 py-2 right-[10vw]"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </section>
        <section className="">
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            3D Model & Game Development
          </h1>
          <button
            onClick={() => animePrev(DesignToolItems)}
            className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2"
          >
            <FaArrowAltCircleLeft />
          </button>
          <div
            className={`flex flex-row overflow-x-hidden items-center mx-[10vw] transition ease-out duration-40`}
          >
            {DesignToolItems.map((item, i) => (
              <div
                key={i}
                className="flex transition ease-out duration-40 px-[10vw] pb-4 lg:px-[7vw]"
                style={{
                  transform: `translateX(-${ isLargeScreen ? animeCurr * 30 : animeCurr * 60}vw)`,
                }}
              >
                <img src={item.image} alt="" className="h-[70px] w-[50px] rounded-3xl" />
                <p className="mx-5 w-[30vw] pt-[15px] text-sm font-bold text-white lg:w-[13vw]">
                  {item.title}
                </p>
              </div>
            ))}
            <button
              onClick={() => animeNext(DesignToolItems)}
              className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-0 px-2 py-2 right-[10vw]"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Techbologies;

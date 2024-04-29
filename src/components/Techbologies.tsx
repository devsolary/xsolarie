import { useState } from "react";
import sampleImg from "../assets/images/Mask-group.png";
import { ProgrammingLanguageitems } from "../items/ProgramminLanguageItem";

const Techbologies = () => {

    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? ProgrammingLanguageitems.length - 1 : curr - 1))
    };

    const next = () => {
        setCurr((curr) => (curr === ProgrammingLanguageitems.length - 1 ? 0 : curr + 1))
    };

    
  return (
    <div className="bg-purple-900">
      <h1 className="text-center text-2xl font-bold text-white">
        Technologies Use By Xsolarie
      </h1>
      <section className="px-[10vw]">
        <section>
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Programming Languages
          </h1>
          <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2">
            &lt;
          </button>
          <div className={`flex flex-row overflow-x-hidden items-center mx-[10vw] transition ease-out duration-40 `}
          >
                     {ProgrammingLanguageitems.map((item, i) => (
              <div key={i} className="flex transition ease-out duration-40 mx-[10vw] lg:mr-[15vw]"
              style={{
                transform : `translateX(-${0 * 60}vw)`
              }}>
                <img src={item.image} alt="" className="h-[70px] rounded-3xl" />
                <p className="mx-5 w-[30vw] pt-[15px] text-xl font-bold text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-3 px-2 py-2 right-[10vw]">
              &gt;
            </button>
        </section>
        <section>
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Framewoks & Libraries
          </h1>
          <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2">
            &lt;
          </button>
          <div className="flex flex-row overflow-x-scroll items-center mx-[10vw]">
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">React</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Angular</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Node.js</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Express.js</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Django</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Flask</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Vue.js</p>
            </div>
            <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-3 px-2 py-2 right-[10vw]">
              &gt;
            </button>
          </div>
        </section>
        <section>
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Mobile Development
          </h1>
          <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2">
            &lt;
          </button>
          <div className="flex flex-row overflow-x-scroll items-center mx-[10vw]">
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">
                React Native
              </p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Flutter</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Swift</p>
            </div>
            <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-3 px-2 py-2 right-[10vw]">
              &gt;
            </button>
          </div>
        </section>
        <section>
          <h1 className="font-bold py-2 lg:pl-[10vw] text-white">
            Images, 2D & 3D Design Tools
          </h1>
          <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-5 px-2 py-2">
            &lt;
          </button>
          <div className="flex flex-row overflow-x-scroll items-center mx-[10vw]">
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Blender</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Unity</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Figma</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">Sketch</p>
            </div>
            <div className="flex mr-[40vw] lg:mr-[15vw]">
              <img src={sampleImg} alt="" className="h-[70px] " />
              <p className="ml-[8vw] pt-[15px] text-xl font-bold">
                Adobe Creative Suite
              </p>
            </div>
            <button className="absolute font-bold text-2xl rounded-full bg-gradient-to-r from-[#772DB9] to-white mt-3 px-2 py-2 right-[10vw]">
              &gt;
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Techbologies;

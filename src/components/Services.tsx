import sampleImg from "../assets/images/Mask-group.png";

const Services = () => {
  return (
    <div className="py-[50px] bg-gradient-to-br from-purple-900 to-purple-300 lg:h-[70vh] lg:flex lg:flex-row lg:overflow-x-hidden lg:py-0">
      <h1 className="font-bold text-center text-3xl border-b-2 lg:my-[20px] lg:absolute lg:text-center lg:ml-[5vw]">
        SERVICES
      </h1>
      <section className="px-[30px] justify-center items-center lg:flex lg:flex-row lg:my-0 lg:px-0 lg:ml-[4vw]">
        <div
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #6C63FF, #6B3399)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0">
            Frontend Development:
          </h1>
          <p className="mx-[30px] text-center text-lg lg:text-[10px] lg:leading-3">
            Crafting User-friendly interface that enhance user experience.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #6C63FF, #6B3399)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0">
            Backend Development:
          </h1>
          <p className="mx-[30px] text-center text-lg lg:text-[10px] lg:leading-3">
            Building robust and scalable backend system to power your
            application with latest technologies.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #6C63FF, #6B3399)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0">
            UI/UX Design:
          </h1>
          <p className="mx-[30px] text-center text-lg lg:text-[10px] lg:leading-3">
            designing visually stunning and intuitive interface that engage and
            delight users.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #6C63FF, #6B3399)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0">
            {" "}
            Mobile App Development:
          </h1>
          <p className="mx-[30px] text-center text-lg lg:text-[10px] lg:leading-3">
            Creating seamless mobile experiences on android and iOS platforms.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center   from-gray-400 py-8 my-8 rounded-3xl lg:h-[200px] lg:w-[16vw] lg:mx-[10px] lg:py-[30px] lg:my-0"
          style={{
            background: "radial-gradient(purple, #6C63FF, #6B3399)",
          }}
        >
          <img
            src={sampleImg}
            alt=""
            className="h-[50vw] lg:w-[100px] lg:mt-8"
          />
          <h1 className="text-xl font-bold my-[20px] border-b-2 lg:text-sm lg:mt-[10px] lg:mb-0">
            project Management:
          </h1>
          <p className="mx-[30px] text-center text-lg lg:text-[10px] lg:leading-3">
            Ensuring smooth project execution from inception to complete.
          </p>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Services;

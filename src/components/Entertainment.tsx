import sampleImg from "../assets/images/Mask-group.png"

const Entertainment = () => {
  return (
    <div className="py-[50px] bg-gradient-to-br from-purple-900 to-purple-300 lg:flex lg:flex-row lg:overflow-hidden lg:py-0">
        <section className="lg:overflow-hidden">
            <h1 className="font-bold text-center text-xl border-b-2 pb-5 lg:my-[20px] lg:absolute lg:text-center lg:ml-[5vw] lg:text-sm lg:pb-2">Explore Xsolarie Entertaiment Zone</h1>
            <div className="justify-center items-center flex flex-col my-8 lg:my-8 lg:items-start">
              <div className="justify-center items-center flex flex-col lg:flex-row lg:items-start">
              <img src={sampleImg} alt="" className="h-[60vw] lg:w-[100px] lg:mt-8 lg:hidden"/>
            <div className="justify-center items-center flex flex-col px-10 lg:items-start lg:pr-[10vw]">
            <h1 className="text-2xl font-bold my-[20px] ml-[20px] lg:mt-[20px] lg:mb-0 lg:text-[16px]">Animations</h1>
            <p className="text-[18px] lg:w-[40vw] lg:h-[22vh] lg:text-[12px]">Bringing stories to life with captivating visuals and engaing narratives. From short, impactful clips to instricate, narrative driven sequence, each animation is a testament to the teams creativity. Our animations are designed not only to entertain but also to convey messages, tell stories, and evoke emotions, making them versatile assets for various applications.</p>
            <button className="bg-gradient-to-r p-3 my-5 rounded-2xl font-bold lg:my-0">Explore Animations Zone </button>
            </div>
            <img src={sampleImg} alt="" className="hidden lg:block lg:h-[50vh] lg:w-[30vw]"/>
            </div>
            <div className="justify-center items-center flex flex-col mt-14 px-8 lg:items-start lg:flex-row">
                <img src={sampleImg} alt="" className="h-[60vw] lg:mt-2 lg:h-[50vh] lg:w-[30vw]"/>
                <div className="justify-center items-center flex flex-col lg:ml-[15vw] lg:items-start">
                    <h1 className="text-2xl font-bold my-[20px] ml-[20px] lg:text-sm lg:mt-[10px] lg:mb-3 lg:text-[16px]">Games</h1>
                    <p className="text-[18px] lg:w-[40vw] lg:h-[22vh] lg:text-[12px]"> Developing immersive and entertaininggames that resonate with audiences of all ages. delves deep into the realm of interactive entertainment, creating games range from casual and accessible titles to more complex and immersive experience, offering something for everyone to enjoy.</p>
                    <button className="bg-gradient-to-r p-3 my-5 rounded-2xl font-bold">Explore Games Zone</button>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Entertainment;
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import animeVideo from "../assets/videos/animeVideo.mp4";
import gameVideo from "../assets/videos/gameVideo.mp4";

const Entertainment = () => {
  const gameRef = useRef<HTMLDivElement>(null);
  const animeRef = useRef<HTMLDivElement>(null);

  //animation and game animation
  //anime
  useGSAP(() => {
    const anime = animeRef.current;

    if (!anime) return;

    gsap.from(anime, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: anime,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
  });
  //game
  useGSAP(() => {
    const game = gameRef.current;

    if (!game) return;

    gsap.from(game, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: game,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="py-[50px] mt-0 bg-purple-900 lg:flex lg:flex-row overflow-hidden lg:py-0">
      <section className="lg:overflow-hidden">
        <h1 className=" font-bold text-white text-center text-2xl border-b-2 pb-5 lg:my-[20px] lg:absolute lg:text-center lg:ml-[7vw] lg:text-xl lg:pb-2">
          Explore Xsolarie Entertaiment Zone
        </h1>
        <div className="justify-center items-center flex flex-col my-8 lg:my-16 lg:items-start lg:mx-[70px]">
          <div
            ref={animeRef}
            className="justify-center items-center flex flex-col lg:flex-row lg:items-start"
          >
            <video
              autoPlay
              muted
              playsInline={true}
              key={1}
              loop
              className="rounded-3xl w-[80vw] lg:hidden"
            >
              <source src={animeVideo} />
            </video>
            <div className="justify-center items-center flex flex-col px-10 lg:items-start lg:pr-[10vw]">
              <h1 className="text-3xl font-bold text-white my-[20px] ml-[20px] lg:mt-[20px] lg:mb-0 lg:text-2xl">
                Animations
              </h1>
              <p className="text-xl text-white lg:w-[40vw] lg:h-[22vh] lg:text-lg">
                Bringing stories to life with captivating visuals and engaing
                narratives. From short, impactful clips to instricate, narrative
                driven sequence, each animation is a testament to the teams
                creativity. Our animations are designed not only to entertain
                but also to convey messages, tell stories, and evoke emotions,
                making them versatile assets for various applications.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-purple-400 p-3 text-xl  my-5 rounded-3xl font-bold lg:my-0 lg:mt-10">
                Explore Animations Zone
              </button>
            </div>
            <video
              autoPlay
              muted
              playsInline={true}
              key={2}
              loop
              className="rounded-3xl w-[80vw] hidden lg:block lg:h-[50vh] lg:w-[30vw]"
            >
              <source src={animeVideo} />
            </video>
          </div>
          <div
            ref={gameRef}
            className="justify-center items-center flex flex-col mt-8 px-8 lg:items-start lg:flex-row"
          >
            <video
              autoPlay
              muted
              playsInline={true}
              key={3}
              loop
              className="rounded-3xl w-[80vw] lg:h-[50vh] lg:w-[30vw]"
            >
              <source src={gameVideo} />
            </video>
            <div className="justify-center items-center flex flex-col lg:ml-[15vw] lg:items-start">
              <h1 className="text-3xl font-bold text-white my-[20px] ml-[20px] lg:mt-[10px] lg:mb-3 lg:text-2xl">
                Games
              </h1>
              <p className="text-xl text-white lg:w-[40vw] lg:h-[22vh] lg:text-lg">
                {" "}
                Developing immersive and entertaininggames that resonate with
                audiences of all ages. delves deep into the realm of interactive
                entertainment, creating games range from casual and accessible
                titles to more complex and immersive experience, offering
                something for everyone to enjoy.
              </p>
              <button className="bg-gradient-to-r  from-purple-600 to-purple-400 text-xl p-3 my-5 rounded-3xl font-bold">
                Explore Games Zone
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entertainment;

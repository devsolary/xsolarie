import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { FaFacebook, FaPhoneAlt, FaInstagram, FaTwitter } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {

  const contactHeaderRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const contactHeader = contactHeaderRef.current;
    const contact = contactRef.current;
    const form = formRef.current;

    if(!contactHeader) return;

    gsap.from(contactHeader, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger : {
        trigger: contactHeader,
        start: "top 80%",
        end: "bottom 5%",
        scrub: 1,
        toggleActions: "play none none reverse",
      }
    });

    if(!contact) return;

    gsap.from(contact, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger : {
        trigger: contact,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
      }
    });

    if(!form) return;

    gsap.from(form, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: form,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
      }
    })


  })

  return (
    <div className="px-[24px] py-8 bg-[#3D1B60] lg:px-[10vw] overflow-hidden">
        <div>
            <h1 ref={contactHeaderRef} className="text-3xl font-extrabold text-white">Contact Us</h1>
            <p ref={contactRef} className="font-bold text-xl text-white">Ready  to start your next project with us or havea question about our services? We'd love to hear from you! Get in touch with us today and let's create something extraordinary together.</p>
            <div ref={formRef}  className="bg-[#6F31AE] px-[10vw] border-2 rounded-3xl my-8 lg:mx-[15vw] lg:px-20">
              <h1 className="text-center py-5 text-2xl font-bold lg:text-lg lg:py-2 text-white">Want to request for our services or have a question.
                </h1>
                <p className="font-bold border-b-2 text-center pb-2 lg:text-sm lg:pb-3 text-white">Let Us know Below</p>
              <form action="" className="py-[30px] lg:py-0">
                <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[40px] px-[15px] mt-[30px] outline-none lg:h-[30px] lg:text-sm" placeholder="Full Name"/>
                <br />
                <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[40px] px-[15px] mt-[20px] outline-none lg:h-[30px] lg:text-sm" placeholder="Email Address"/>
                <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[40px] px-[15px] mt-[20px] outline-none lg:h-[30px] lg:text-sm" placeholder="Phone number"/>
                <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] h-[40px] px-[15px] mt-[20px] outline-none lg:h-[30px] lg:text-sm" placeholder="Message Subject"/>
                <input type="text" className=" bg-transparent border border-white rounded-3xl w-[100%] pb-[150px] px-[15px] mt-[20px] py-0 outline-none lg:pt-4" placeholder="Type your message ....."/>
                <button className="w-[50%] ml-[25%] my-7 bg-gradient-to-r from-purple-950 to-white font-bold p-2 rounded-3xl">Send Message</button>
              </form>
            </div>
            <div className=" bg-[#250B40] py-8 border-2 px-5 rounded-2xl">
                <p className="py-2 text-sm  flex flex-row text-white"><strong className="mr-2  flex flex-row">Email <MdOutlineMail className="mx-2 text-2xl "/> : </strong> contact@xsolarie.com</p>
                <p className="py-2 text-sm flex flex-row text-white"><strong  className="mr-2 flex flex-row">Phone <FaPhoneAlt className="mx-2 text-2xl"/>: </strong> +234-916-877-169</p>
                <p className="py-2 text-sm flex flex-row text-white"><strong className="py-2 flex flex-row mr-3">Instagram <FaInstagram className="mx-2 text-2xl" />: </strong>  xsolarie</p>
                <p className="py-2 flex flex-row text-white"><strong  className="mr-2 flex flex-row">Twitter <FaTwitter className="mx-2 text-2xl" />: </strong> xsolarie</p>
                <p className="py-2 text-sm flex flex-row text-white"><strong  className="mr-2 flex flex-row">facebook <FaFacebook className="mx-1 text-2xl mr-1" />: </strong>facebook.com/xsolarie</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
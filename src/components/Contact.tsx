
const Contact = () => {



  return (
    <div className="px-[24px] py-8  lg:px-[10vw]">
        <div>
            <h1 className="text-3xl font-extrabold">Contact Us</h1>
            <p className="font-bold text-xl">Ready  to start your next project with us or havea question about our services? We'd love to hear from you! Get in touch with us today and let's create something extraordinary together.</p>
            <div className="bg-purple-950 px-[10vw] rounded-3xl my-8 lg:mx-[15vw] lg:px-20">
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
            <div className="py-8">
                <p className="py-2"><strong className="mr-10">Email : </strong> contact@xsolarie.com</p>
                <p className="py-2"><strong  className="mr-7">Phone : </strong> +234-916-877-169</p>
                <p className="py-2"><strong>Instagram : </strong>      xsolarie</p>
                <p className="py-2"><strong  className="mr-7">Twitter : </strong> xsolarie</p>
                <p className="py-2"><strong  className="mr-2">facebook : </strong>facebook.com/xsolarie</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
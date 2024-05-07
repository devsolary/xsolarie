
const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="">
    <div className="bg-[#18042D] py-5 overflow-hidden">
    <p className="text-center font-bold text-xl text-white">{currentYear} &copy; Xsolarie Tech Inc.</p>
    <p className="text-center font-bold text-white">ALL RIGHT RESERVED</p>
      </div>
      </footer>
  )
}

export default Footer
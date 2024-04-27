
const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className="bg-purple-950 py-5">
    <p className="text-center font-bold text-xl text-white">{currentYear} &copy; Xsolarie Tech Inc.</p>
    <p className="text-center font-bold text-white">ALL RIGHT RESERVED</p>
  </div>
  )
}

export default Footer
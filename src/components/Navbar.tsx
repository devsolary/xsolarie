import { useEffect, useState } from "react"
import { MobileNavbar } from "./MobileNavbar";
import { LargeScreenNavbar } from "./LargeScreenNavbar";

const Navbar = () => {

  const [mobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {window.removeEventListener("resize", handleResize)}
  }, []);

  

  return (
    <>
    {
      mobileView ? (
        <MobileNavbar />
      ) : (
        <LargeScreenNavbar />
      )
    }
    </>
  )
}


export default Navbar
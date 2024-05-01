import { Circles } from "react-loader-spinner"

const Preloading = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex overflow-hidden bg-gradient-to-r from-purple-950 to-purple-600 justify-center items-center">
        <div>
            <Circles color="#203047"/>
        </div>
    </div>
  )
}

export default Preloading
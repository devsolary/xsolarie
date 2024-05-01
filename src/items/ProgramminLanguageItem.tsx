import javaScript from "../assets/images/js.png"
import python from "../assets/images/python.png"
import java from "../assets/images/java.png"
import swift from "../assets/images/swift.png"
import cPlusPlus from "../assets/images/c++.png"
import typeScript from "../assets/images/typescript.png"
import rust from "../assets/images/Rust.svg"

export interface MyObject {
    image : string;
    title : string;
}

export const ProgrammingLanguageitems : MyObject[] = [
    {
        image : javaScript,
        title : "javaScript"
    },
    {
        image : python,
        title : "Python"
    },
    {
        image : java,
        title : "Java"
    },
    {
        image : swift,
        title : "Swift"
    },
    {
        image : cPlusPlus,
        title : "C++"
    },
    {
        image : typeScript,
        title : "TS"
    },
    {
        image : rust,
        title : "Rust"
    },
]
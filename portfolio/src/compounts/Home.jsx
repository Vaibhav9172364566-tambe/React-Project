import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";


function Home() {
  return (

    <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12  md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-xl">Welcome In My Feed</span>
                <div className="flex  space-x-1 text-2xl md:text-4xl">
                <h1>Hello,I`m a</h1>
                {/* <span className="text-red-600 font-bold">Developer</span> */}
                <ReactTyped className="text-red-600 font-bold"
          strings={["Developer" ,"Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
                </div>
                <br></br>
                <p className="text-sm md:text-md text-justify">Vaibhav Tambe dgggggg </p>
                <br></br>
                {/* Socail Media Icon */}
                
                <div className="flex flex-col items-center md:flex-row  justify-between space-y-6 md:space-y-0">
                <div className=" space-y-2  ">
                    <h1 className="font-bold " >Available on</h1>
                    
                      <ul className="flex space-x-5">

                        <li>
                        <a href="https://www.linkedin.com/in/vaibhav-tambe-55a685273/" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                        </a>
                        </li>


                        <li>
                        <a href="https://www.facebook.com/vaibhavtambe.sagaj" target="_blank">
                        <FaFacebook className="text-2xl cursor-pointer" />
                        </a>
                        </li>


                        <li>
                        
                        <a href="https://www.instagram.com/accounts/login/" target="_blank">
                        <FaInstagram className="text-2xl cursor-pointer" />
                        </a>

                        
                        </li>

                        <li>
                        
                        <a href="https://t.me/Vaibhavtambe9172" target="_blank">
                        <FaTelegramPlane className="text-2xl cursor-pointer" />
                        </a>
                        </li>

                      </ul>
                </div>

                    <div className="space-y-2">
                    <h1 className="font-bold">Currently working on</h1>
                    
                    <div className="flex space-x-5">
                    <BiLogoSpringBoot className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                    <FaReact className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]"></FaReact>

                    <div/>

                    </div>
                </div>



                </div>

            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src="/public/img/vaibhav.jpg" alt="" 
            className="rounded-full md:w-[450px] md:h-[450px]"></img>

            </div>
            </div>

        </div>
        <hr></hr>
    </>
  )
}

export default Home
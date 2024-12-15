import React from "react";
import Logo from "./footerlogo.jsx";
import Numelogo from "../../assets/logo.jpg";
// import getstamp from "../assets/images/getstamp.png";
// import ncs from "../assets/images/ncs.png";
import TypingEffect1 from "../typingEffect/typingEffect";
import Vector1 from "../../assets/Vector 1.png";
import Vector2 from "../../assets/Vector 2.png";
import Vector3 from "../../assets/Vector 3.png";
import Vector4 from "../../assets/Vector 4.png";


{/* <div class="bg-[rgba(37,40,76,0.5)] md:w-[28rem] lg:w-[32rem] sm:w-full h-[8rem] rounded-md p-4"><div><h4 class="text-xl text-white font-textFont">Inauguration</h4><p class="text-gray-400 font-textFont mb-3">Inaugural by Shri Vishwanath D. Karad (Bell ceremony)</p></div><span class="text-gray-300 font-textFont">9:00 - 9:30 A.M.</span></div> */}

function Footer() {
    const text = "MADE BY NUMERATES";

    return (
      <>
        <footer className="flex justify-center w-full pt-16 pb-8 box-border border-0">
            <div className="w-11/12 max-w-screen-xl sm:px-16 box-border border-0">
                <div className="w-full px-8 py-16 gradient-footer rounded-lg box-border border-0 ">
                    <div className=" md:flex justify-between box-border border-0">
                         <div className="flex flex-wrap gap-8 mb-6 md:mb-0 box-border border-0">
                            <a href="https://ridemitwpu.in/" className="flex items-center w-full text-black no-underline box-border border-0">
                                <Logo alt="Ride Logo" src={Numelogo} className=" w-250 h-59.63 max-w-full pt-2 pb-2 mr-3 align-middle box-border border-0" width={150} />
                            </a>
                            {/* <a href="#" className="flex items-center h-12 mb-2 mr-3 text-black no-underline box-border border-0">
                                <Logo alt="GetStamp" src={Numelogo} className=" h-8 max-w-full align-middle box-border border-0 transform scale-125" width={150}/>
                            </a>
                            <a href="#" className="flex items-center h-12 mb-2 mr-3 text-black no-underline box-border border-0">
                                <Logo alt="NCS" src={Numelogo} className=" h-8 max-w-full align-middle box-border border-0" width={150}/>
                            </a> */}
                             </div>
                        {/* </div> */}
                        <div className="flex gap-6 sm:gap-6 flex-shrink-0 box-border border-0">
                            <div className="box-border border-0">
                                <h2 className="mb-6 text-sm font-semibold leading-5 text-white uppercase box-border border-0">Address</h2>
                                <ul className="m-0 p-0 list-none text-gray-400 font-medium box-border border-0">
                                    <li className="mb-4 max-w-xs box-border border-0">
                                        <a href="https://ridemitwpu.in/" className="text-gray-300 no-underline box-border border-0">MIT World Peace University, Paud Rd, Kothrud, Pune, Maharashtra 411038</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="box-border border-0">
                                <h2 className="mb-4 text-sm font-semibold leading-5 text-white flex-shrink-0 uppercase box-border border-0">Follow us</h2>
                                <ul className="m-0 p-0 list-none text-gray-400 font-medium box-border border-0">
                                    <li className="mb-3 box-border border-0">
                                        <a href="https://www.instagram.com/ride.mitwpu?igsh=MTZxaTBtYmhjcm1lYQ==" className="text-gray-300 hover:underline box-border border-0 hover:text-white">Instagram</a>
                                    </li>
                                    <li className="mb-3 box-border border-0">
                                        <a href="https://x.com/ride_mitwpu/" className="text-gray-300 hover:underline box-border border-0 hover:text-white">Twitter</a>
                                    </li>
                                    <li className="box-border border-0">
                                        <a href="https://www.linkedin.com/company/ride-mitwpu/" className="text-gray-300 hover:underline box-border border-0 hover:text-white">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="sm:mx-auto my-6 border-t border-gray-700 border-0 box-border" />
                    <div className="sm:flex sm:justify-between sm:items-center box-border border-0">
                        <TypingEffect1 text={text} speed={50} />
                        <div className="flex sm:mt-0 sm:justify-center mt-4 box-border border-0">
                            <a href="https://www.linkedin.com/company/ride-mitwpu/" className="text-gray-300 box-border no-underline border-0 hover:text-white">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="block w-4 h-4 align-middle box-border border-0">
                                    <path fillRule="evenodd" d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.12 20.44H3.56V9h3.56v11.44zM5.34 7.63a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm15.1 12.81h-3.56v-5.55c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.44-2.12 2.92v5.64H9.37V9h3.41v1.56h.05c.47-.89 1.62-1.84 3.34-1.84 3.57 0 4.22 2.35 4.22 5.4v6.32z" clipRule="evenodd" className="box-border border-0"></path>
                                </svg>
                                <span className="sr-only box-border border-0">LinkedIn page</span>
                            </a>
                            <a href="https://x.com/ride_mitwpu/" className="ml-5 text-gray-300 no-underline box-border border-0 hover:text-white ">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17" className="block w-4 h-4 align-middle box-border border-0">
                                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" className="box-border border-0"></path>
                                </svg>
                                <span className="sr-only box-border border-0">X page</span>
                            </a>
                             
                            <a href="https://www.instagram.com/ride.mitwpu?igsh=MTZxaTBtYmhjcm1lYQ==" className="ml-5 text-gray-300 no-underline box-border border-0 hover:text-white">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="block w-4 h-4 align-middle box-border border-0">
                                    <path fillRule="evenodd" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm-3.5 5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm7.75-5.25a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only box-border border-0">Instagram account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <img className="vectors" src={Vector1} alt="Tl" style={{ left: 250 }} />

        </>
    );
}

export default Footer;
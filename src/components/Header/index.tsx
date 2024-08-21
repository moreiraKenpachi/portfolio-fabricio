import { FaFacebook, FaLinkedin, FaRegListAlt, FaGithub } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { BiFileBlank } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import { FiServer } from "react-icons/fi";

import ImagemProfile from '../../assets/img/profile-img.jpg';

import { useEffect } from "react";

export default function Header() {

    useEffect(() => {

        const navbarlinks = document.querySelectorAll('.scrollto');        
        const navbarlinkActive = () => {
            const position = window.scrollY + 200;
            navbarlinks.forEach( navbarlink => {            
                const section = document.querySelector((navbarlink as HTMLAnchorElement).hash);
                if (position >= (section as HTMLElement)?.offsetTop
                    && position <= ((section as HTMLElement)?.offsetTop + (section as HTMLElement)?.offsetHeight)) {
                    navbarlink.classList.add('navbar');
                    const figuraIcone = navbarlink.querySelector('svg');
                    figuraIcone?.classList.add('navbar-icon');
                } else {
                    navbarlink.classList.remove('navbar');
                    const figuraIcone = navbarlink.querySelector('svg');
                    figuraIcone?.classList.remove('navbar-icon');
                }
            });

        };            
        window.addEventListener('load', navbarlinkActive);             
        
        return () => {
            window.addEventListener('scroll', navbarlinkActive);
        }

    }, []); 

    return (
        
        <header className=" fixed top-0 bottom-0 left-0 w-[300px]
                            z-[9997] p-[0_15px] bg-[#040b14] transition-all duration-500 overflow-y-auto">
            <div className=" flex flex-col">
                <div>
                    <img className=" m-[15px_auto] block w-[120px] border-8 rounded-full border-[#2c2f3f]" src={ImagemProfile} alt="image" />
                    <h1 className=" text-[24px] font-semibold m-0 p-0 font-headline text-center">
                        <a className=" text-white no-underline hover:text-white" href="index.html">Fabricio Bonete</a>
                    </h1>
                    <div className=" mt-3 text-center">
                        <a className="icon-link hover:bg-blue-500 hover:text-white hover:no-underline" href="#" title="facebook"><FaFacebook/></a>
                        <a className=" icon-link  hover:bg-blue-500 hover:text-white hover:no-underline" href="https://www.linkedin.com/in/fabr%C3%ADcio-bonete-b6571146/" title="linkedin"><FaLinkedin/></a>
                        <a className=" icon-link  hover:bg-blue-500 hover:text-white hover:no-underline" href="https://github.com/moreiraKenpachi" title="github"><FaGithub/></a>
                    </div>
                </div>
                <nav className="p-[30px_0_0_0]">
                    <ul className="list-none m-0 p-0">
                        <li className="relative whitespace-nowrap">
                            <a href="#hero"  className="scrollto active flex items-center text-[20px] duration-300 text-[#a8a9b4] p-[12px_15px] w-[55%] mb-2">
                                <IoStorefrontOutline style={{fontSize: 30, paddingRight: 8}} className="icon-home"/>
                                <span>Principal</span>
                            </a>
                        </li>
                        <li className="relative whitespace-nowrap">
                            <a href="#about"  className="scrollto flex items-center text-[20px] duration-300 text-[#a8a9b4] p-[12px_15px] w-[55%] mb-2">
                                <HiOutlineUser style={{fontSize: 30, paddingRight: 8}} className="icon-home"/>
                                <span>Sobre</span>
                            </a>
                        </li>
                        <li className="relative whitespace-nowrap">
                            <a href="#resume"  className="scrollto flex items-center text-[20px] duration-300 text-[#a8a9b4] p-[12px_15px] w-[55%] mb-2">
                                <BiFileBlank style={{fontSize: 30, paddingRight: 8}} className="icon-home"/>
                                <span>Resumo</span>
                            </a>
                        </li>
                        <li className="relative whitespace-nowrap">
                            <a href="#portfolio"  className="scrollto flex items-center text-[20px] duration-300 text-[#a8a9b4] p-[12px_15px] w-[55%] mb-2">
                                <FaRegListAlt style={{fontSize: 30, paddingRight: 8}} className="icon-home"/>
                                <span>Portfólio</span>
                            </a>
                        </li>
                        <li className="relative whitespace-nowrap">
                            <a href="#services"  className="scrollto flex items-center text-[20px] duration-300 text-[#a8a9b4] p-[12px_15px] w-[55%] mb-2">
                                <FiServer style={{fontSize: 30, paddingRight: 8}} className="icon-home"/>
                                <span>Serviços</span>
                            </a>
                        </li>                        
                    </ul>
                </nav>
            </div>
        </header>          
    )
}

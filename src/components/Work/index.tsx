import AOS from "aos";
import 'aos/dist/aos.css';

import { FaBriefcase } from "react-icons/fa";

import Contacts from "../Contacts";
import { useEffect } from "react";

export default function Service() {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    },[]);

    return (
      <>
      
        <section id="services">
          <div className="pl-[30px] pr-[30px]" data-aos="fade-right" data-aos-duration="1000">

              <div className="pb-[30px]">
                <h2 className="text-[55px] font-bold mb-5 pb-5 relative text-[#173b6c]
                              after:content-[''] after:absolute after:block after:w-[75px] after:h-[5px] after:bg-[#149ddd] 
                              after:bottom-0 after:left-0">Serviços</h2>
                <p className="mb-0 text-[30px]">Trabalhando com práticas modernas para entregar ao máximo no cliente.
                </p>
              </div>   

              <div className="grid grid-cols-3 gap-5 mt-4">
                <div className="mb-5 icon-box">
                  <div className="icon float-left flex items-center justify-center w-[54px] h-[54px] bg-[#149ddd]
                                  rounded-[50%] duration-500 border-[1px] border-solid border-[#149ddd]"><FaBriefcase className="icon-react"/></div>
                  <h4 className="ml-[80px] font-bold mb-[15px] text-[18px]"><a href="#" className="text-[#343a40]
                                    hover:text-[#149ddd]">App Inscricao para Acampamento</a></h4>
                  <p className="ml-[80px] leading-6 text-[14px]">Utilizando tecnologias React para frontend, e Nestjs para backend e bibliotecas de animações e muito mais.</p>
                </div>                

              </div>          

          </div>
        </section>

        <Contacts/>

      </>
    )
}
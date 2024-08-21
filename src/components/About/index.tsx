import AOS from "aos";
import 'aos/dist/aos.css';

import Facts from '../Facts';
import Skills from '../Skills';

import {SlArrowRight} from 'react-icons/sl';
import { useEffect } from 'react';

import Notification from "../Notification";

import ImagemProfile from '../../assets/img/profile-img.jpg';

export default function About() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[]);    

  return (
    <>
      <section id='about'>
        <div className="pl-[30px] pr-[30px]" data-aos="fade-right" data-aos-duration="1000">

            <div className="pb-[30px]">
              <h2 className="text-[55px] font-bold mb-5 pb-5 relative text-[#173b6c]
                            after:content-[''] after:absolute after:block after:w-[75px] after:h-[5px] after:bg-[#149ddd] 
                            after:bottom-0 after:left-0">Sobre</h2>
              <p className="mb-0 text-[30px]">Estudo TypeScript, React, NodeJs, Java, Prisma, Sequelize, TypeOrm, PostgreSQL, Docker, Nunjucks, Tailwinds, NestJS.
              </p>               
                     
            </div>
            <Notification/>
            
            <div className=" grid grid-cols-[1fr_2fr] gap-5">          
              <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="200">
                <img className="h-[450px]" src={ImagemProfile} alt="image" />
              </div>

              <div className="pt-4" data-aos="fade-left" data-aos-duration="8000" data-aos-delay="200">
                <h3 className="font-bold text-[50px] text-[#173b6c]">Desenvolvedor FullStack.</h3>
                <p className="font-caveat text-[35px]">Em constante evolução e sempre aprendendo com os melhores do mercado.
                </p>
                <div className=" grid grid-cols-2">
                  <div>
                    <ul className="list-none p-0">
                      <li className="mb-5 flex items-center"><SlArrowRight style={{color: 'blue'}}/><strong className="mr-[10px] ml-[10px] text-[25px]">Cidade:</strong> <span className="text-[25px]">Manaus</span></li>
                      <li className="mb-5 flex items-center"><SlArrowRight style={{color: 'blue'}}/><strong className="mr-[10px] ml-[10px] text-[25px]">Telefone:</strong> <span className="text-[25px]"> (92) 991134078</span></li>
                      <li className="mb-5 flex items-center"><SlArrowRight style={{color: 'blue'}}/><strong className="mr-[10px] ml-[10px] text-[25px]">Nível:</strong> <span className="text-[25px]">Constante evolução</span></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-none p-0">
                      <li className="mb-5 flex items-center"><SlArrowRight style={{color: 'blue'}}/><strong className="mr-[10px] ml-[10px] text-[25px]">Email:</strong> <span className="text-[25px]">fabi.bonete2@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
                <p className="mb-0 text-[30px]">
                  Desenvolvendo-se em Fullstack Developer Web e mobile, usualmente em ReactJs no frontend. 
                </p>
              </div>
            </div>

        </div>
      </section>

      <Facts/>
      <Skills/>
    </>
    
  )
}

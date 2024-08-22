import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Resume() {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    },[]);

    return (
      <section id="resume">
        <div className="pl-[30px] pr-[30px]" data-aos="fade-right" data-aos-duration="1000">

            <div className="pb-[30px]">
              <h2 className="text-[55px] font-bold mb-5 pb-5 relative text-[#173b6c]
                            after:content-[''] after:absolute after:block after:w-[75px] after:h-[5px] after:bg-[#149ddd] 
                            after:bottom-0 after:left-0">Resumo</h2>
              <p className="mb-0 text-[30px]">Procurando aperfeiçoar com o melhor que o mercado pode oferecer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="200">
                <h3 className="text-[26px] font-bold mt-5 mb-5 text-[#050d18]">Sumário</h3>
                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">fabricio bonete</h4>
                  <p><em>Desenvolvedor FullStack inovador e focado em prazos, buscando se desenvolver por mais de 2 anos
                     de experiência e projetando e desenvolvendo web software, desde o conceito inicial até a
                      entrega final refinada.</em></p>
                  <ul className="pl-5 pb-0">
                    <li className="pb-[10px] list-disc">Manaus, Amazonas</li>
                    <li className="pb-[10px] list-disc">92 99113-4078</li>
                    <li className="pb-[10px] list-disc">fabi.bonete2@gmail.com</li>
                  </ul>                  
                </div>

                <h3 className="text-[26px] font-bold mt-5 mb-5 text-[#050d18]">Educação</h3>
                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Desenvolvedor de sistema Java Full Stack</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2020 - 2024</h5>
                  <p className="mb-[10px]"><em> JDev Treinamento, Maringá, PR</em></p>
                  <p className="pb-0">Formando-se para desenvolvimento WEB e contínuo aprendizado. </p>
                </div>

                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Desenvolvimento de sistemas Full Stack</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2020 - 2024</h5>
                  <p className="mb-[10px]"><em>DevSamurai, São José dos Campos, SP</em></p>
                  <p className="pb-0">Formando-se para desenvolvimento WEB e mobile e contínuo aprendizado.</p>
                </div>

                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Desenvolvimento de sistemas Full Stack</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2020 - 2024</h5>
                  <p className="mb-[10px]"><em>Rocketseat, Santa Catarina</em></p>
                  <p className="pb-0">Formando-se para desenvolvimento WEB e mobile e contínuo aprendizado.</p>
                </div>

                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Especialista em desenvolvimento de sistemas em Python</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2020 - 2024</h5>
                  <p className="mb-[10px]"><em>Bylearn</em></p>
                  <p className="pb-0">Especializando-se para desenvolvimento WEB e contínuo aprendizado.</p>
                </div>

                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Data Science e Machine Learning</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2020 - 2024</h5>
                  <p className="mb-[10px]"><em>Sigmoidal, São José dos Campos, SP</em></p>
                  <p className="pb-0">Especializando-se para desenvolvimento WEB e contínuo aprendizado.</p>
                </div>

              </div>

              <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="200">

                <h3 className="text-[26px] font-bold mt-5 mb-5 text-[#050d18]">Experiência - Freelance</h3>
                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Desenvolvedor FullStack</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2024 - Presente</h5>
                  
                  <ul className="pl-5 pb-0">
                    <li className="pb-[10px] list-disc">Sistema de comunicação em tempo real, com uso de nextjs, typescript, socket.io e muito mais.</li>
                    <li className="pb-[10px] list-disc">Sistema de pesquisa semântica, com uso mongodb, openAI.</li>
                    <li className="pb-[10px] list-disc">Shopping de barbearia, com uso de nextjs, tailwind e muito mais.</li>
                    <li className="pb-[10px] list-disc">Multi Tenancy, com uso de docker, nextjs, nestjs, golang, kongoAPI gateway.</li>
                  </ul>
                </div>
                <div className="p-[0_0_20px_20px] -mt-[2px] border-l-[2px] border-solid border-[#1f5297] relative
                                before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:-left-[9px]
                                 before:top-0 before:bg-[#fff] before:border-[2px] before:border-solid before:border-[#1f5297]">
                  <h4 className="leading-[18px] text-[18px] font-bold uppercase font-headline text-[#050d18] mb-[10px]">Desenvolvedor de sistemas FullStack</h4>
                  <h5 className="text-[16px] bg-[#e4edf9] p-[5px_15px] inline-block font-semibold mb-[10px]">2023</h5>
                  <ul className="pl-5 pb-0">
                    <li className="pb-[10px] list-disc">API GitHub, com uso  de ReactJS(busca de repositório via nickname).</li>
                    <li className="pb-[10px] list-disc">Pedido online, com uso de docker, gateway de pagamento, integração front e back via axios.</li>
                    <li className="pb-[10px] list-disc">NodsJs Avançado, com uso de Sequelize, Redis, Sentry, JWT</li>
                    <li className="pb-[10px] list-disc">LaunchStore Avançado, com uso de MVC, nunjucks, SQL pure, integração front e back com axios.</li>
                    <li className="pb-[10px] list-disc">E ainda muito mais.</li>
                  </ul>
                </div>

              </div>
            </div>
        </div>
      </section>
    )
  }
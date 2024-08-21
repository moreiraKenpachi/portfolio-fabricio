import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CountUp from "react-countup";
import { BsEmojiSmile, BsJournalRichtext } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";

export default function Facts() {        

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      },[]);

    return (

        <section>
            <div className="pl-[30px] pr-[30px]" data-aos="fade-right" data-aos-duration="1000">
                <div className="pb-[30px]">
                    <h2 className="text-[55px] font-bold mb-5 pb-5 relative text-[#173b6c]
                            after:content-[''] after:absolute after:block after:w-[75px] after:h-[5px] after:bg-[#149ddd] 
                            after:bottom-0 after:left-0">Fatos</h2>
                    <p className="mb-0 text-[30px]">Dados informados compondo a quantidade de projetos realizados.
                    </p>
                </div>

                <div className="grid grid-cols-4">
                    <div>
                        <div className="p-[30px] w-[100%]">
                            <BsEmojiSmile className="block text-[44px] text-[#149ddd] float-left leading-[0]"/>
                            <span className="text-[48px] leading-10 block font-bold text-[#050d18] ml-[60px]"><CountUp end={1} duration={20}/></span>                            
                            <p className="p-[15px_0_0_0] m-[0_0_0_60px] font-headline text-[20px] text-[#122f57]"><strong>Clientes Felizes</strong> Satisfeitos</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-[30px] w-[100%]">
                            <BsJournalRichtext className="block text-[44px] text-[#149ddd] float-left leading-[0]"/>
                            <span className="text-[48px] leading-10 block font-bold text-[#050d18] ml-[60px]"><CountUp end={40} duration={20}/></span>
                            <p className="p-[15px_0_0_0] m-[0_0_0_60px] font-headline text-[20px] text-[#122f57]"><strong>Projetos</strong> Realizados</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-[30px] w-[100%]">
                            <FaHeadset className="block text-[44px] text-[#149ddd] float-left leading-[0]"/>
                            <span className="text-[48px] leading-10 block font-bold text-[#050d18] ml-[60px]"><CountUp end={394} duration={20}/></span>
                            <p className="p-[15px_0_0_0] m-[0_0_0_60px] font-headline text-[20px] text-[#122f57]"><strong>Suporte em horas</strong> Dedicação ao cliente</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-[30px] w-[100%]">
                            <IoPeopleOutline className="block text-[44px] text-[#149ddd] float-left leading-[0]"/>
                            <span className="text-[48px] leading-10 block font-bold text-[#050d18] ml-[60px]"><CountUp end={1} duration={20}/></span>
                            <p className="p-[15px_0_0_0] m-[0_0_0_60px] font-headline text-[20px] text-[#122f57]"><strong>Trabalho duro</strong> sempre visando o cliente</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
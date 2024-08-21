import ProgressBar from "@ramonak/react-progress-bar";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Skills() {

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
                            after:bottom-0 after:left-0">Skills</h2>
                    <p className="mb-0 text-[30px]">Com muita dedicação e disciplina pude aprender todos os dias.
                    </p>
                </div>

                <div className="grid grid-cols-2">
                    <div className="mr-5" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="200">
                        <div className="h-[60px] block bg-none rounded-none">
                            <span className="p-0 m-[0_0_6px_0] uppercase block font-semibold 
                                                font-headline text-[#050d18]">HTML <i className="float-right not-italic">100%</i></span>                            
                            <div className="bg-[#dce8f8] h-[20px] rounded-[50%]">
                                <ProgressBar completed={95} animateOnRender={true} initCompletedOnAnimation={20} transitionDuration="20s"/>
                            </div>
                        </div>

                        <div className="h-[60px] block bg-none rounded-none">
                            <span className="p-0 m-[0_0_6px_0] uppercase block font-semibold 
                                                font-headline text-[#050d18]">CSS <i className="float-right not-italic">65%</i></span>
                            <div className="bg-[#dce8f8] h-[20px] rounded-[50%]">                                
                                <ProgressBar completed={75} animateOnRender={true} initCompletedOnAnimation={20} transitionDuration="5s"/>
                            </div>
                        </div>

                        <div className="h-[60px] block bg-none rounded-none">
                            <span className="p-0 m-[0_0_6px_0] uppercase block font-semibold 
                                                font-headline text-[#050d18]">TypeScript <i className="float-right not-italic">76%</i></span>
                            <div className="bg-[#dce8f8] h-[20px] rounded-[50%]">                                
                                <ProgressBar completed={76} animateOnRender={true} initCompletedOnAnimation={20} transitionDuration="5s"/>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="mr-5" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="200">
                        <div className="h-[60px] block bg-none rounded-none">
                            <span className="p-0 m-[0_0_6px_0] uppercase block font-semibold 
                                                font-headline text-[#050d18]">Tecnology MVC <i className="float-right not-italic">62%</i></span>
                            <div className="bg-[#dce8f8] h-[20px] rounded-[50%]">                                
                                <ProgressBar completed={62} animateOnRender={true} initCompletedOnAnimation={20} transitionDuration="5s"/>
                            </div>
                        </div>

                        <div className="h-[60px] block bg-none rounded-none">
                            <span className="p-0 m-[0_0_6px_0] uppercase block font-semibold 
                                                font-headline text-[#050d18]">Tailwind CSS<i className="float-right not-italic">90%</i></span>
                            <div className="bg-[#dce8f8] h-[20px] rounded-[50%]">                                
                                <ProgressBar completed={90} animateOnRender={true} initCompletedOnAnimation={20} transitionDuration="5s"/>
                            </div>
                        </div>

                        <div className="h-[60px] block bg-none rounded-none">
                            <span className="p-0 m-[0_0_6px_0] uppercase block font-semibold 
                                                font-headline text-[#050d18]">Nunjucks <i className="float-right not-italic">85%</i></span>
                            <div className="bg-[#dce8f8] h-[20px] rounded-[50%]">                                
                                <ProgressBar completed={85} animateOnRender={true} initCompletedOnAnimation={20} transitionDuration="5s"/>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}
import { FormEvent, useEffect, useRef, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

import emailjs from '@emailjs/browser';

export default function Contacts() {
    const form = useRef<HTMLFormElement>(null);
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);   

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.current) return;

        setLoading(true);

        emailjs.sendForm(
            "service_bm6vxu7",
            "template_ppb3mmp",
            form.current, {
                publicKey:"_fBy1pHc1SjeOUz4U"
            })
            .then(
                () => {
                    setSuccess(true);
                    setLoading(false);
                },
                (error) => {
                    setError(true);
                    setLoading(false);
                    console.log(error);
                }
            )
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      },[]);

    return (
            
        <section className="pb-[130px]">
            <div className="pl-[30px] pr-[30px]" data-aos="fade-right" data-aos-duration="1000">

                <div className="pb-[30px]">
                    <h2 className="text-[55px] font-bold mb-5 pb-5 relative text-[#173b6c]
                                    after:content-[''] after:absolute after:block after:w-[75px] after:h-[5px] after:bg-[#149ddd] 
                                    after:bottom-0 after:left-0">Contato</h2>
                    
                </div> 

                <div className="grid grid-cols-2 gap-5">

                    <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="200">
                        <div className="p-[30px] bg-[#fff] w-[100%] shadow-[0_0_24px_0_rgba(0,0,0,0.12)]">
                            <div className="address">
                                <i className="text-[25px] text-[#149ddd] float-left w-[44px] h-[44px]
                                         bg-[#dff3fc] flex justify-center items-center rounded-[50px]
                                          transition-all duration-300"><CiLocationOn/></i>
                                <h4 className="p-[0_0_0_60px] text-[22px] font-semibold mb-[5px] text-[#050d18]">Localização:</h4>
                                <p className="p-[0_0_10px_60px] mb-[20px] text-[14px] text-[#173b6c]">Coroado 2, Manaus</p>
                            </div>

                            <div className="email">
                                <i className="text-[25px] text-[#149ddd] float-left w-[44px] h-[44px]
                                         bg-[#dff3fc] flex justify-center items-center rounded-[50px]
                                          transition-all duration-300"><MdOutlineEmail/></i>
                                <h4 className="p-[0_0_0_60px] text-[22px] font-semibold mb-[5px] text-[#050d18]">Email:</h4>
                                <p className="p-[0_0_10px_60px] mb-[20px] text-[14px] text-[#173b6c] pt-[5px]">fabi.bonete2@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="text-[25px] text-[#149ddd] float-left w-[44px] h-[44px]
                                         bg-[#dff3fc] flex justify-center items-center rounded-[50px]
                                          transition-all duration-300"><IoCallOutline/></i>
                                <h4 className="p-[0_0_0_60px] text-[22px] font-semibold mb-[5px] text-[#050d18]">Telefone:</h4>
                                <p className="p-[0_0_10px_60px] mb-[20px] text-[14px] text-[#173b6c]">92 991134078</p>
                            </div>

                            <iframe src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20manaus+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder={1} style={{border: 0, width: '100%', height: '255px'}} allowFullScreen></iframe>

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="200">
                        <form ref={form} onSubmit={sendEmail} className="p-[30px] bg-[#fff] w-[100%] shadow-[0_0_24px_0_rgba(0,0,0,0.12)]">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="pb-[8px] mb-[15px] flex flex-col">
                                    <label htmlFor="name" className="pb-[8px]">Seu nome</label>
                                    <input type="text" name="name" id="name" required title="por favor, coloca seu nome"
                                                className="rounded-[5px] text-[14px] shadow-none h-[44px] border-[#212529] border"/>
                                </div>
                                <div className="pb-[8px] mb-[15px] flex flex-col">
                                    <label htmlFor="email" className="pb-[8px]">Seu email</label>
                                    <input type="email" name="email" id="email" required title="por favor, coloca seu email"
                                            className="rounded-[5px] text-[14px] shadow-none h-[44px] border-[#212529] border"/>
                                </div>
                            </div>

                            <div className="pb-[8px] mb-[15px] flex flex-col">
                                    <label htmlFor="subject" className="pb-[8px]">Assunto</label>
                                    <input type="text" name="subject" id="subject" required title="por favor, coloca seu assunto"
                                                className="rounded-[5px] text-[14px] shadow-none h-[44px] border-[#212529] border"/>
                            </div>

                            <div className="pb-[8px] mb-[15px] flex flex-col">
                                    <label htmlFor="message" className="pb-[8px]">Messagem</label>
                                    <textarea name="message" id="message" rows={10} required title="por favor, coloca sua messagem"
                                        className="rounded-[5px] text-[14px] shadow-none p-[10px_15px] border-[#212529] border"></textarea>
                                    
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="flex items-center gap-2 bg-[#149ddd] border-[0] p-[10px_24px] text-[#fff] duration-500
                                                    rounded-[4px] hover:bg-[#37b3ed]" disabled={loading}>
                                            {loading && <FaSpinner className="h-4 w-4 animate-spin"/>}
                                            {success && <FaRegCheckCircle className="h-4 w-4 animate-spin"/>}
                                            Enviar messagem
                                </button>
                                {error && (
                                    <p> não foi possível enviar messagem, tente novamente.</p>
                                )}

                            </div>
                            
                        </form>
                    </div>

                </div>                    

            </div>
        </section>
    )
}
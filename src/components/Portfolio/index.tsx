import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import lightGallery from "lightgallery";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import imagemPortfolio1 from "../../assets/portfolio/portfolio-1.png";
import imagemPortfolio2 from "../../assets/portfolio/portfolio-2.png";
import imagemPortfolio3 from "../../assets/portfolio/portfolio-3.png";
import imagemPortfolio4 from "../../assets/portfolio/portfolio-4.png";
import imagemPortfolio5 from "../../assets/portfolio/portfolio-5.png";
import imagemPortfolio6 from "../../assets/portfolio/portfolio-6.png";
import imagemPortfolio7 from "../../assets/portfolio/portfolio-7.png";
import imagemPortfolio8 from "../../assets/portfolio/portfolio-8.png";
import imagemPortfolio9 from "../../assets/portfolio/portfolio-9.png";
import imagemPortfolio10 from "../../assets/portfolio/portfolio-10.png";
import imagemPortfolio11 from "../../assets/portfolio/portfolio-11.png";
import imagemPortfolio12 from "../../assets/portfolio/portfolio-12.png";

import Shuffle from "shufflejs";
import jQuery from "jquery";

export default function Portfolio() {
           
    useEffect(() => {
      AOS.init();
      AOS.refresh();
            
      const shuffleElement = document.getElementById('shuffle-container')!;      
      const shuffleInstance = new Shuffle(shuffleElement, {
        itemSelector: '.shuffle-item',        
      });
          
      jQuery('.shuffle-filter li').on('click', function() {
        const keyword = jQuery(this).attr('data-group');            
        shuffleInstance.filter(keyword);
      });      
    },[]);

    useEffect(() => {
      const galeriaLight = document.getElementById('shuffle-container')!;
        lightGallery(galeriaLight, {
          plugins: [lgZoom, lgThumbnail],
          speed: 500,
          mode: 'lg-fade'          
        });      
    }, []);     
  
    return (
      <section id="portfolio">
        <div className="pl-[30px] pr-[30px]" data-aos="fade-right" data-aos-duration="1000">

            <div className="pb-[30px]">
              <h2 className="text-[55px] font-bold mb-5 pb-5 relative text-[#173b6c]
                            after:content-[''] after:absolute after:block after:w-[75px] after:h-[5px] after:bg-[#149ddd] 
                            after:bottom-0 after:left-0">Portfólio</h2>
              <p className="mb-0 text-[30px]">Alguns projetos desenvolvidos com a mais moderna tecnologia, visando o atual mercado.
              </p>
            </div>   

            <div>
              <div className="flex justify-center">
                <ul className="shuffle-filter p-0 m-[0_auto_35px_auto] list-none text-center bg-[#272829] rounded-[50px]">
                  <li className="cursor-pointer inline-block p-[10px_15px_8px_15px] text-[24px] font-semibold leading-[1]
                                 uppercase text-[#fff] mb-[5px] transition-all duration-300 hover:text-[#149ddd]
                                  " data-group="all">All</li>
                  <li className="cursor-pointer inline-block p-[10px_15px_8px_15px] text-[24px] font-semibold leading-[1]
                                 uppercase text-[#fff] mb-[5px] transition-all duration-300 hover:text-[#149ddd]
                                  " data-group="app">App</li>
                  <li className="cursor-pointer inline-block p-[10px_15px_8px_15px] text-[24px] font-semibold leading-[1]
                                 uppercase text-[#fff] mb-[5px] transition-all duration-300 hover:text-[#149ddd]
                                  " data-group="card">Card</li>
                  <li className="cursor-pointer inline-block p-[10px_15px_8px_15px] mr-0 text-[24px] font-semibold leading-[1]
                                 uppercase text-[#fff] mb-[5px] transition-all duration-300 hover:text-[#149ddd]
                                  " data-group="web">Web</li>
                </ul>
              </div>
            </div>

                <div className="mb-[30px]">
                    <div id="shuffle-container" className="shuffle-container">
                          
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio1}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio1} alt="imagem"/></div></a>   
                          <a className="shuffle-item" data-groups= '["all","card"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio2}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio2} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","card"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio3}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio3} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio4}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio4} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","app"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio5}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio5} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","app"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio6}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img  className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio6} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","app"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio7}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img  className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio7} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio8}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio8} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio9}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio9} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio10}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio10} alt="iamgem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio11}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio11} alt="imagem"/></div></a>
                          <a className="shuffle-item" data-groups= '["all","web"]' data-sub-html="<head>
                              <style>
                                a.more-details {font-size: 25px; font-weight: 600;}
                                a.more-details:hover {color:blue}
                              </style>
                            </head>
                            <h4>Foto by - 
                            
                              Fabricio Bonete </h4>  
                            " href={imagemPortfolio12}>
                            <div className="portfolio-wrap duration-300 relative overflow-hidden z-[1] before:content-[''] before:bg-[#ffffff80]
                                        before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all
                                        before:duration-300 before:z-[2] before:opacity-0">
                              <img className="shuffle-picture" style={{padding: "0px"}} src={imagemPortfolio12} alt="imagem"/></div></a>
                    </div>
                </div>             
                
        </div>
      </section>
    )
  }



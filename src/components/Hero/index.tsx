import TypeIt from "typeit-react";

export default function Hero() {
    return (
      <section id="hero" className="flex flex-col justify-center items-center w-[88%] h-[100vh] ml-48
                           imagem-hero bg-cover before:content-[''] before:bg-[#050d184d] 
                           before:absolute before:bottom-0 before:top-0 before:left-0 before:right-2 before:z-[1]">
        
        <div className="relative z-[2] min-w-[300px]">
          <h1 className="m-[0_0_10px_0] text-[64px] font-bold leading-[56px] text-white">Fabricio Bonete</h1>
          <p className="text-white mb-[10px] text-[26px] font-headline">
            Desenvolvedor Frontend <span className="text-white pb-1 tracking-[1px] border-b-[3px] border-solid border-[#149ddd]"
                        >
                          <TypeIt options={{
                              strings: ["VueJS", "ReactJS", "NextJs", "nunjucks", "bootfaces", "primefaces Vue"], 
                              breakLines: false, 
                              loop: true, 
                              speed:75
                            }}>
                          </TypeIt>
                        </span>
          </p>
          <p className="text-white mb-[50px] text-[26px] font-headline">
            Desenvolvedor Backend <span className="text-white pb-1 tracking-[1px] border-b-[3px] border-solid border-[#149ddd]"
                        >
                          <TypeIt options={{
                              strings: ["Node.js", "Java", "TypeScript", "Prisma", "Sequelize", "PostgreSQL", "outros mais"], 
                              breakLines: false, 
                              loop: true, 
                              speed:75
                            }}>
                          </TypeIt>
                        </span>
          </p>
        </div>       

      </section>      
    )
  }
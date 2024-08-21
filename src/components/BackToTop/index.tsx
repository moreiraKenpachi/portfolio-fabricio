import BackToUp from '@uiw/react-back-to-top';
import { TbArrowBigUp } from "react-icons/tb";

export default function BackToTop() {
    
    return (
        
        <div className='container'>            
            <BackToUp style={{backgroundColor: 'blue', borderRadius:'25px'}}>
                <TbArrowBigUp className="text-[28px] leading-[0] text-blue-600"/>
            </BackToUp>
        </div>
        
    )
}
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Waypoint } from "react-waypoint";

export default function Notification() {

  const notificacao = () => {
    toast.success("Não esqueça de ver meu cv! Forte abraço.", {
      theme: "dark"
    });
  }

  return (
    <>
      <Waypoint onEnter={notificacao}/>      
      <ToastContainer/>
    </>
    
  )
  
         
}
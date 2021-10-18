import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import imgs from "../IMGS/exportsImg";
import Locate from './element/locate'

import AOS from 'aos'
import "aos/dist/aos.css"


const Services = React.memo(() => {
  const runButton =useRef()
  useEffect(() => {
    AOS.init({
      duration:300
    })
  },[])



  return (
 <Locate border={'servicesborder'}  color={'servicescolor'} vista={.9}>
      <Container id='services' >
     
     <img src={imgs.topbg2.src} alt="top" draggable='false'/>
      <h3 data-aos="fade-up">MY SERVICES</h3>
      <div  data-aos="fade-up">
        <div className="box">
          <span><img src={imgs.frontends.src} alt="Frontend" /></span>
          <div className="info">
            <h4>Frontend</h4>
            <p>Desarrollo de la interfaz gráfica de usuario de un sitio web/aplicación web</p>
          </div>
        </div>



        <div className="box">
          <span><img src={imgs.Backends.src} alt="Backend" /></span>
          <div className="info">
            <h4>Backend</h4>
            <p>Me encargo de que tu aplicación
      Sea mas completa y dinámica</p>
          </div>
        </div>



        <div className="box">
          <span><img src={imgs.mantenimientos.src} alt="Mantenimiento" /></span>
          <div className="info">
            <h4>Mantenimiento web</h4>
            <p>En caso de que quieras Modificar o mantener tu web actualizada</p>
          </div>
        </div>



        <div className="box">
          <span><img src={imgs.bots.src} alt="Bots" /></span>
          <div className="info">
            <h4>Discord Bots</h4>
            <p>Desarrollo de Bots dinámicos
</p>
          </div>
        </div>

        
        <div className="box">
          <span><img src={imgs.fulljobs.src} alt="job" /></span>
          <div className="info">
            <h4>Trabajo de tiempo completo </h4>
            <p>¿Buscas un Desarrollador Para tu Negocio? <a href="#contact" ref={runButton} /**onClick={(e) => party.confetti(e.target)} */>¡Contáctame!</a>
</p>
          </div>
        </div>


        <div className="box">
          <div className="info">
            <h4></h4>
            <p>
</p>
          </div>
        </div>
      </div>
    </Container>
  
 </Locate>
  );

})

export default Services
 

const Container = styled.section`
  height: 60vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top:2vh;

  h3{
    font-family: MV Boli;
    color: var(--primary);
    font-size:3rem;
  }
  >img {
    top: -16%;
    position: absolute;
    transform: rotateY(180deg);
  }
  >div{
      width:80%;
      height:50%;
      display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-wrap:wrap
    }
  .box{
      width:28%;
      display:flex;
      p{color:var(--text);
    }
    a{
        color:var(--purple);
        text-decoration: underline;
    }
    p,h4{
        font-family:Roboto;
    }
    h4{
        margin-bottom:1vh;
    }
   span{
    display:flex; justify-content:center;align-items:center;
      background:#2f2e39;
      border-radius:50%;
     min-height:60px;
   min-width:60px;
   box-shadow:0px 0px 5px rgba(1,1,1,.3);
   
   
    margin-right:3%;
    }
  }

@media (max-width:1300px){

 
 
  >div{
      width:90%;
      height:50%;
      display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-wrap:wrap
    }
  .box{
      width:30%;
      display:flex;
      p{color:var(--text);
    }
    a{
        color:var(--purple);
        text-decoration: underline;
    }
    p,h4{
        font-family:Roboto;
    }
    h4{
        margin-bottom:1vh;
    }
   span{
    display:flex; justify-content:center;align-items:center;
      background:#2f2e39;
      border-radius:50%;
      min-height:55px;
   min-width:55px;
   box-shadow:0px 0px 5px rgba(1,1,1,.3);
   
   
    margin-right:3%;
    }
  }


}
  @media (max-width:1200px){
  padding-top: 10%;
  height: 65vh;
  h3{
 margin-bottom:2vh;

  }
 
  >div{
      width:90%;
    }
  .box{
      width:50%;
      margin-bottom:5vh;
      p{color:var(--text);
        
       
    }
    p,h4{
        font-family:Roboto;
    }
    h4{
        margin-bottom:1vh;
    }
   span{
    display:flex; justify-content:center;align-items:center;
      background:#2f2e39;
      border-radius:50%;
   height:55px;
   width:55px;
   box-shadow:0px 0px 5px rgba(1,1,1,.3);
   
   
    margin-right:3%;
    }
  }

  }


  @media (max-width:800px){
    height: auto;

  overflow: hidden;
  justify-content: center;

  padding-top:15%;
  h3{
    font-size:2.3rem;
  }

 
  >div{
      width:100%;
      height:auto;
      flex-direction:column;
     
      
    }
  .box{
      width:90%;
      display:flex;
      p{color:var(--text);
    }
    a{
        color:var(--purple);
        text-decoration: underline;
    }
    p,h4{
        font-family:Roboto;
    }
    h4{
        margin-bottom:1vh;
    }
   span{
    display:flex; justify-content:center;align-items:center;
      background:#2f2e39;
      border-radius:50%;
     min-height:60px;
   min-width:60px;
   box-shadow:0px 0px 5px rgba(1,1,1,.3);
   
   
    margin-right:3%;
    }
  }


  }
`;

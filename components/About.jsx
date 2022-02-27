import React from "react";
import styled from "styled-components";
import imgs from "../IMGS/exportsImg";
import Locate from './element/locate'


const About = React.memo((props) =>{

  return (
   <Locate border={'aboutborder'} color={'aboutcolor'} vista={.6}> <AboutSpace id='aboutme'  >
   <img src={imgs.profile.src} alt='profile' data-aos="fade-up"/>
   <div className="info" data-aos="fade-up">
     <h3 >INFORMACION GENERAL</h3>
     <p translate='yes'>
     Mi nombre es Néstor Myrie  soy desarrollador web enfocado al frontend con conocimientos intermedio en JavaScript, me considero un desarrollador bastante autodidacta. Me gusta dar siempre el 100% y me esfuerzo por completar mis objetivos<br />
       <br />
       <p>Como podrás ver en mi portafolio no cuento con experiencia de diseño, pero maquetaré al 100% cualquier diseño</p>
       Soy un apasionado ala maquetación y desarrollo, me encargaré de darle vida a tu proyecto para que sea moderno y dinámico
     </p>
     <div className="love">
       <h4>ME ENCANTA</h4>
       <div>
         <img src={imgs.codeIcon.src} alt="code" />
         <img src={imgs.cameraIcon.src} alt="camera" />
         <img src={imgs.meditationIcon.src} alt="meditation" />
         <img src={imgs.learnIcon.src} alt="book" />
       </div>
     </div>
     <div className="numbers">
       <h4>Numeros</h4>
       <div>
         <p>
           <b>20</b> <br />
           AÑOS
         </p>
         <p>
           {" "}
           <b>4</b> <br />
           PROYECTOS <br />
           COMERCIALES
         </p>
         <p>
           {" "}
           <b>20</b> <br />
           PROYECTOS <br />
           PERSONALES
         </p>
       </div>
     </div>
   </div>
 </AboutSpace></Locate>
  );
})


export default  About
const AboutSpace = styled.section`
>img{
height:50%;
}


  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .info {
    width: 40%;
    margin-left: 4%;
    height: 54%;
    h3 {
      font-family: Rajdhani;
      font-size: 2rem;
      padding-left:2%;
      position:relative;
      &::before{
        content:'';
        height:70%;
        transform:translate(30%,20%);
        width:4px;
        background:var(--primary);
        position:absolute;
        left:0;
      }
    }
    p {
      font-family: Roboto;
      text-align: justify;
      color: var(--text);
    }
    .love,
    .numbers {
      margin-top: 2%;
      h4 {
        color: var(--primary);
        font-family: Roboto;
        border-bottom: 3px solid var(--primary);
        font-size: 1.5rem;
      }
      > div {
        margin-top: 2vh;

        display: flex;
        justify-content: space-between;
        width: 40%;
        img {
          height: 80%;
        }
      }
    }
    .numbers {
      p {
        text-align: center;
        font-size: 0.7rem;
      }
      b {
        font-size: 1.4rem;
        font-family:mv boli;
      }
    }
  }

  @media (max-width: 1400px) {
  .info {
    height: 64%;
    h3 {
      font-family: Rajdhani;
      font-size: 2rem;
    }
  
    .love,
    .numbers {
      margin-top: 2%;
      h4 {
        color: var(--primary);
        font-family: Roboto;
        border-bottom: 3px solid var(--primary);
        font-size: 1.2rem;
      }
      > div {
        margin-top: 2vh;

        display: flex;
        justify-content: space-between;
        width: 40%;
        
      }
    }
    .numbers {
      p {
        text-align: center;
        font-size: 0.8rem;
      }
      b {
        font-size: 1.5rem;
      }
    }
  }
  }
  @media (max-width: 1100px) {
   
    .info {
      height: 80%;

      .love,
      .numbers {
        h4 {
          font-size: 1.2rem;
        }
        > div {
          margin-top: 3vh;

          width: 50%;
        }
      }
      .numbers {
        p {
          text-align: center;
          font-size: 0.6rem;
        }
        b {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 800px) {
    margin-top:10%;
    padding-bottom:20%;
    >img{
          border-radius:500%;
          height:100px;
          width:100px;
          object-fit:cover;
          margin-bottom:5%;
      }
   
    height: auto;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  .info {
    width: 90%;
    margin-left: 0%;
    height: auto;
    h3 {
      font-size: 2rem;
    }
  
    .love,
    .numbers {
      margin-top: 3%;
      h4 {
        color: var(--primary);
        font-family: Roboto;
        border-bottom: 3px solid var(--primary);
        font-size: 1.4rem;
      }
      > div {
        margin-top: 20px;

        display: flex;
        justify-content: space-between;
        width: 100%;
      
      }
    }
    .numbers {
      p {
        text-align: center;
        font-size: 0.8rem;
      }
      b {
        font-size: 1.5rem;
      }
    }
  }
  }

`;

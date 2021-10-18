import React from "react";
import styled from "styled-components";
import Locate from './element/locate'

import imgs from "../IMGS/exportsImg";

const MySkills = React.memo(() => {
  return (
    <Locate  border={'skilborder'} color={'skilcolor'}  vista={.7}>
      
        <Container id='skills'>
        
       <img src={imgs.topbg.src} alt="top"  className='img top' draggable='false'/>
        
        <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom"> SKILLS </h3>
        <div >
          <div className="box"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p>
              <b>
                <img src={imgs.frontend.src} alt="Frontend" />
              </b>{" "}
              <h2>FRONTEND</h2>
            </p>
            <p>
            Cuento con conocimiento intermedio/avanzado en las siguientes tecnologías para la parte de maquetación:
            </p>
            <div className="icons">
              <span>
                {" "}
                <img src={imgs.css3.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.js.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.styled.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.sass.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.html.src} alt="img de recurso" />
              </span>
              <span>
                <img src={imgs.rreact.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.nextjs.src} alt="img de recurso" />
              </span>
            </div>
          </div>
          <div className="box"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p>
              <b>
                <img src={imgs.backendIcon.src} alt="backend" />
              </b>{" "}
              <h2>BACKEND</h2>
            </p>
            <p>
            En esta rama aunque no es mi área, he hecho proyectos medianos con las siguientes tecnologías
            </p>
            <div className="icons">
              <span>
                {" "}
                <img src={imgs.node.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.express.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.firebase.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.mongodb.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.mysql.src} alt="img de recurso" />
              </span>
            </div>
          </div>
          <div className="box"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p>
              <b>
                <img src={imgs.otras.src} alt="otras" />
              </b>{" "}
              <h2>OTRAS</h2>
            </p>
            <p>
            Estas son las tecnologías que uso constantemente fuera de las
              anteriores categorías
            </p>
            <div className="icons">
              <span>
                {" "}
                <img src={imgs.reactrouter.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.git.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.redux.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.figma.src} alt="img de recurso" />
              </span>
              <span>
                {" "}
                <img src={imgs.jquery.src} alt="img de recurso" />
              </span>
            </div>
          </div>
        </div>
  
       
    
      </Container>
    
    </Locate>
      )
  
    
  
})

 
export default MySkills

const Container = styled.section`

  height: 70vh;
  width: 100vw;
  position: relative;
  background: var(--sbg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
svg path{
  width:100vw !important;
}
  h3 {
    font-family: MV Boli;
    font-size: 3rem;
    color: var(--primary);
  }
  .img {
    position: absolute;
    max-width: 100vw;
    &.top {
      top: -4%;
      width: 100% !important;
    }
 
  }
  > div {

    height: 40%;
    width: 85%;
    display: flex;
    justify-content: space-evenly;
  }

  .box {
    width: 28%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 60%;
      width: 2px;
      background: var(--primary);
      right: -4%;
      opacity: 0.3;
    }

    > p {
      font-family: Roboto;
      color: var(--text);
      display: flex;
      align-items: center;
      h2 {
        font-family: Roboto;
        font-weight: 0;
      }
      b {
        padding: 2%;
        transform: translate(0%, 20%);
        background: #2f2e39;
        box-shadow: 1px 0px 15px rgba(1, 1, 1, 0.2);
        margin-right: 2%;
        margin-bottom: 3%;
      }
    }
    p:nth-child(2) {
      margin-bottom: 5%;
    }
    .icons {
      width: 80%;
      display: flex;
      flex-wrap: wrap;

      text-align: justify;
      span {
        width: 13%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3%;

        margin-bottom: 2%;

        box-shadow: 1px 0px 5px rgba(1, 1, 1, 0.3);
      }
    }
  }
  .box:last-child {
    &::before {
      content: "";
      display: none;
    }
  }

  @media (max-width: 1200px) {
    > div {
      width: 95%;
    }

    .box {
      padding: 0% 1%;
      width: 30%;
      &::before {
        content: "";
        right: -2%;
      }

      > p {
        font-family: Roboto;
        color: var(--text);
        display: flex;
        align-items: center;
        text-align: left;
        font-size: 0.9rem;
        h2 {
          font-family: Roboto;
          font-weight: 0;
        }
        b {
          padding: 2%;
          transform: translate(0%, 20%);
          background: #2f2e39;
          box-shadow: 1px 0px 15px rgba(1, 1, 1, 0.2);
          margin-right: 2%;
          margin-bottom: 3%;
        }
      }
      p:nth-child(2) {
        margin-bottom: 5%;
      }
      .icons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        text-align: justify;
        span {
          width: 13%;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-bottom: 2%;
        }
      }
    }
  }

  @media (max-width: 800px) {
    height: auto;
    overflow:hidden;

    padding: 14% 0px;

    .img {
    position: absolute;
    min-width: 200vw ;
    &.top {
      top: -2%;
      width: 100% !important;
    }
 
  }
    h3{
      font-size:2.3rem;

        margin-bottom:8%;
    }

    > div {
      height: auto;
      flex-direction: column;
      align-items:center;

      width: 90%;
     


    }

    .box {
      box-shadow: 1px 0px 15px rgba(1, 1, 1, 0.2);
      width: 95%;
      margin-bottom: 4%;
    padding:3%;
   
      &::before {
        display: none;
      }

      > p {
      font-family: Roboto;
      color: var(--text);
      display: flex;
      align-items: center;
      h2 {
        font-family: Roboto;
        font-weight: 0;
      }
      b {
        padding: 2%;
        transform: translate(0%, 20%);
        background: #2f2e39;
        box-shadow: 1px 0px 15px rgba(1, 1, 1, 0.2);
        margin-right: 2%;
        margin-bottom: 3%;
      }
    }

      .icons {
        width: 100%;

        span {
          width: 22%;
          margin-right: 3%;
        }
      }
    }
   
  }
`;

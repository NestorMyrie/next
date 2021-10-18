import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Provider from "./provider";
import Cart from "./element/cart";
import bg from '../IMGS/proyects.png'
import Loader from "./loader";
import { Helmet } from "react-helmet";
const Proyectos = () => {
  const [estado, setEstado] = useState(null);

  const api = useContext(Provider);
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (api.length > 0) {
        setEstado(api[0]);
        clearInterval(intervalo);
      }
      return'a'
    }, 60);
  }, [api]);

  useEffect(() => {
      setLoader(false)

  },[loader])

  return (
    <Container>

      {/* Properties metadata */}
      <Helmet> <title>Proyectos Realizados</title>
      </Helmet>
      <h1><span>Proyectos</span> Realizados</h1>
<p >En este apartado encontrarás proyectos realizados con permiso del cliente</p>
      {loader && <Loader></Loader>}
      {!loader && 
      <div className="proyectos">
       
        
      {estado !== null &&
     estado.map((e, i) => {
       if (e.status==="published" && e.categories[0].name ==='proyect') {
         return (
           <Cart
             title={e.title}
             ruta={`${e.featured_image_alt}`}
             
             description={e.meta_description}
             
             portada={e.featured_image}
             rutaname ={'VER PROYECTO'}
           />
         );
       }
     })}
 </div>}
    </Container>
  );
};
export default Proyectos;


const Container = styled.section`
>p{
  margin-top:10px;
  color:var(--text);
  font-family:mv boli;
  text-align:center
}
background:url(${bg.src});
background-attachment:fixed;
  min-height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom:5%;

  >h1 {
   
margin-top:10%;

    font-size: 3rem;
    font-family: mv boli;
    color: #ffffff;

    span{
      position: relative;
      &::after{
      content:'';
      width:70%;
      height:5px;
      border-radius:10px;
      bottom:-3px;
      left:0;
      background:var(--primary);
      position:absolute;
    }
    }
 
  }
  .proyectos{
    width:70%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top:2%;
    flex-wrap:wrap;
    div{
      margin-bottom:2%;
    }
  }


  @media (max-width:800px){
  width: 100%;
  display: flex;


  >h1 {
margin-bottom:10%;

    font-size: 2rem;
  
  
  }
  .proyectos{
    width:100%;
    justify-content:center;
    align-items:center;
    margin-top:2%;
    flex-wrap:wrap;
    >div{
      width:90%;

      margin-bottom:2%;
    }
  }
  }
`;

import React, { useEffect,useState } from "react";
import Header from "./Header.js";
import Nav from "./Navar";
import About from "./About";
import Skill from "./skills.jsx";
import Services from "./services.jsx";
import Form from "./form.jsx";
import ConfirmMesage from './element/SendMail'
import Loader from "./loader.js";
import styled from "styled-components";
import { useRouter } from "next/router";
const Portafolio =()=>{
  console.log(useRouter)
  
    //haciendo animacion de scroll

    const [loader,setLoader]=useState(true)
    useEffect(() => {
        setLoader(false)
        setTimeout(() => {
        document.body.style.setProperty('--opainitial','1')
          
        },300)
    },[loader])
  
    return (
      <Container>
       {loader && <Loader></Loader>}
        {!loader && (
        <div>

        

           <ConfirmMesage/>
        <Nav />
        <Header></Header>
  
        <About></About>
        <Skill />
        <Services />
        <Form />
        </div>
        )}
      </Container>
    );
  
}


const Container = styled.div`
opacity:var(--opainitial);
transition:opacity 1300ms;
`

export default  Portafolio

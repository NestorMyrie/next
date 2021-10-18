import React, { useEffect,useState } from "react";
import Header from "./Header.js";
import Nav from "./Navar";
import About from "./About";
import Skill from "./skills.jsx";
import Services from "./services.jsx";
import Form from "./form.jsx";
import ConfirmMesage from './element/SendMail'
import Loader from "./loader.js";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
const Portafolio =React.memo(()=>{
  console.log(useRouter)
  
    //haciendo animacion de scroll

    const [loader,setLoader]=useState(true)
    useEffect(() => {
      setTimeout(() => {
        setLoader(false)
      },500)
    },[loader])
  
    return (
      <div>
        <Helmet><title>Portafolio</title></Helmet>
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
      </div>
    );
  
}) 

export default  Portafolio

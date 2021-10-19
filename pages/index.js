import React from "react";
import Portafolio from "../components/portolio";
import  Head from 'next/head'
 function App (){
  return(
    <div>
      <Head>
        <title>Portafolio</title>
      <meta property="og:type" content="website"/>
    <script src="https://kit.fontawesome.com/37d9b1ae40.js" crossorigin="anonymous"></script>   

<meta property="og:url" content="https://nestormyrie.com/"/>
<meta property="og:title" content="Portafolio Personal"/>
<meta property="og:description" content="Portafolio personal y blog de tecnologias!"/>
<meta property="og:image" content="https://st2.depositphotos.com/4022475/5850/v/600/depositphotos_58509553-stock-illustration-black-space-invaders-pattern.jpg"/>

      </Head>
      <Portafolio></Portafolio>
      

    </div>
  )
}

export default App

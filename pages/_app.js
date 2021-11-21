import '../styles/globals.css'
import Head from 'next/head'
import Navresponsivr from '../components/navarresponsive'
import Navegator from '../components/element/navegator'
import Footer from '../components/footer'
import "prismjs/themes/prism-tomorrow.css";





function MyApp({ Component, pageProps }) {
  return<>
  <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Passion+One&family=Rajdhani&family=Roboto:wght@400;900&display=swap" rel="stylesheet"/>

    <link href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"/>
    <script src="https://kit.fontawesome.com/37d9b1ae40.js" crossorigin="anonymous"></script>   
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="NestorMyrie" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FF5F5F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
  
  
  </Head>

 <Component {...pageProps} />
 <Footer></Footer>
       <Navresponsivr></Navresponsivr>
      <Navegator/>
      
  </>
}

export default MyApp

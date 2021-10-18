import React,{useEffect,useState,useRef} from "react";
import headerIMG from "../IMGS/principalbg.webp"
import styled from "styled-components";

const Header = React.memo(() => {
const main =useRef()

    useEffect(() => {
      if(window.innerWidth > 800){
        document.addEventListener('scroll',() => {
      
          let scrol= document.documentElement.scrollTop
          document.body.style.setProperty('--bgposi',-(scrol * 0.1) +'px')
          })
      }


      return () => {
        document.removeEventListener('scroll',() => {
      
          let scrol= document.documentElement.scrollTop
          document.body.style.setProperty('--bgposi',-(scrol * 0.1) +'px')
          })
      }
    },[])
    useEffect(() => {
  setTimeout(() => {
    document.body.style.setProperty('--opaheader','1')
  },60)


    },[])
    
      return (
        <Main id='aboutme'  ref={main}>
          <div >
            <h1>
              <span>NESTOR</span> MYRIE
            </h1>
            <p><span>FRONTEND</span> DEVELOPER</p>
            <div className="social">
              <a href="https://github.com/NestorMyrie" target='_blank' rel="noopener noreferrer"><i class="fab fa-github"></i> </a>
              <a href="https://codepen.io/nestormyrie" target='_blank' rel="noopener noreferrer"><i class="fab fa-codepen"></i> </a>
              <a href="https://twitter.com/NestorMyrie" target='_blank' rel="noopener noreferrer"> <i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </Main>
      );
    
})
export default  Header

const Main = styled.section`


opacity:var(--opaheader);
text-align:center;
  width: 100vw;
  border-radius:0 0 50px 50px;
  transition:all 50ms;
  height: 80vh;
  background: url("${headerIMG.src}") no-repeat;
  background-position:0 var(--bgposi);
  background-attachment: fixed;
  background-size:cover;

  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;




  >div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
     h1{
       letter-spacing:5px;
       font-family:Passion One;
       font-size:6.4rem;
       color:white;
       
     }
     h1 span{
      -webkit-text-fill-color:transparent     ;
      -webkit-text-stroke:.1px white; 
   
     }
     p{
      font-size:3.3rem;
      font-family:Pathway Gothic One;
     
      span{
        position:relative;
        &::before{
          content:'';
          height:5px ;
          width:100%;
          background:var(--primary);
          position:absolute;
          bottom: -1%;
        }
      }
     }

  }

  .social{
    width:50%;
    height:8vh;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    a{
      font-size:1.5em;
      padding:3% 5%;
      border:1px solid white;
      &:hover{
       background:white;
       i{
      
      color:transparent;
      background: url("${headerIMG.src}") no-repeat;
      background-size: cover;
      -webkit-background-clip:text;
      -webkit-text-stroke:1px transparent;
    
   }
      }

    }
}


@media (max-width:1400px){

  height: 90vh;





  >div{
  
     h1{
       font-size:5.5rem;
       
     }
    
     p{
      font-size:3.5rem;
      font-family:Pathway Gothic One;
     
    
     }

  }

  .social{
    width:50%;
    margin-top:3%;
    height:8vh;
   
    a{
      font-size:1.4em;
      &:hover{
       background:white;
      }

}}

}



@media (max-width:800px){
  width: 100%;
  height: 600px;

  border-radius:0 0 20px 20px;
  background-attachment:scroll;



  >div{
     h1{
       letter-spacing:5px;
       font-family:Passion One;
       font-size:3rem;
       
     }
     h1 span{
      -webkit-text-fill-color:transparent     ;
      -webkit-text-stroke:.2px white; 
   
     }
     p{
      font-size:1.9rem;
      font-family:Pathway Gothic One;
     
   
     }

  }

  .social{
    margin-top:5%;
    a{
      font-size:1.7rem;
     
 
    }
}
}
`;

import React from "react";
import  styled from "styled-components";
import Link from 'next/link'
import { useRouter } from "next/router";
const Container = (props) => {
    

    return(

    <Principal>
    {/* <img src={errorbg} alt="" />{" "} */}
  <p className='cuatrocerocuatro'>  <span>404 </span> <span className='border'>404</span></p>
   {props.blog && <p>
      No se Encontraron <b>Blogs</b> en esta categoria
    </p>}

    <p className='route'>
   La Ruta <b>{useRouter().asPath}</b> No existe o no se encuentra
    </p>

    <Link href='/' >
 <p className="back"> <svg
    width="19"
    height="16"
    viewBox="0 0 19 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.34363 6.98486L6.98426 0.344238C7.44324 -0.114746 8.18543 -0.114746 8.63953 0.344238L9.74304 1.44775C10.202 1.90674 10.202 2.64893 9.74304 3.10303L5.0409 7.81494L9.74793 12.522C10.2069 12.981 10.2069 13.7231 9.74793 14.1772L8.64441 15.2856C8.18543 15.7446 7.44324 15.7446 6.98914 15.2856L0.348513 8.64502C-0.115354 8.18604 -0.115354 7.44385 0.34363 6.98486V6.98486Z"
      fill="white"
    />
    <path
      d="M8.34363 6.98486L14.9843 0.344238C15.4432 -0.114746 16.1854 -0.114746 16.6395 0.344238L17.743 1.44775C18.202 1.90674 18.202 2.64893 17.743 3.10303L13.0409 7.81494L17.7479 12.522C18.2069 12.981 18.2069 13.7231 17.7479 14.1772L16.6444 15.2856C16.1854 15.7446 15.4432 15.7446 14.9891 15.2856L8.34851 8.64502C7.88465 8.18604 7.88465 7.44385 8.34363 6.98486V6.98486Z"
      fill="white"
    />
  </svg>{" "}
 REGRESAR</p>
</Link>
  </Principal>
  )
}


export default Container;

const Principal = styled.div`
height:80vh;
width:100vw;;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Roboto;
   

    .route{
      text-align:justify;
        b{
            color:var(--primary)
        }


       





        
    }


    .back {
    color: var(--primary);
    border: 1px solid var(--primary);
    align-self: center;

    font-family: roboto;
    padding: 1%;
    border-radius: 5px;
    display: flex;
    width: auto;
    margin-top: 4%;
    justify-content: space-evenly;

    svg path {
      fill: var(--primary);
    }
    &:hover {
      border: 1px solid var(--purple);
      color: var(--purple);
      svg {
        animation: move 600ms forwards;
        path {
          fill: var(--purple);
        }
      }
    }
  }
.cuatrocerocuatro{
    position:relative;
}
    span:nth-child(1){
        font-family:mv boli;

        font-size:9rem;
        color:var(--primary);
        position:relative;
        z-index:3;
        text-shadow:7px -2px 0px var(--purple);
        
    }

    span:nth-child(2){
        top:0;
        right:-4%;
font-family:mv boli;
        font-size:9rem;
        -webkit-text-fill-color:transparent     ;
      -webkit-text-stroke:1px white; 
position:absolute;
z-index:1;

    }

p{
    cursor:pointer;
}
    
 
    
  `

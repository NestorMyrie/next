import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link'
import Head from 'next/head'


import prism from 'prismjs'
require('prismjs/components/prism-javascript')
export default function Page({ data }) {

 //https://api.buttercms.com/v2/posts/?auth_token=283cd9d21094b8358fecd40bda277b3ee034c0a1"
const {slug,body,featured_image,title ,summary} =data.data
const container_content =useRef()

useEffect(() => {
  container_content.current.innerHTML=body;
  prism.highlightAll();
},[])
  return (
    <div>
      <Head>
        <title>{`${title}`}</title>
      <meta property="og:title" content={`${title}`}/>
 <meta property="og:description" content={`${summary}`}/>
   <meta property="og:image" content={`${featured_image}`}/>
   <meta property="og:image:width" content="300" /> 
<meta property="og:image:height" content="200" />
  <meta property="og:url" content="http://nestormyrie.com"/>

 
        
      </Head>
      <Container>
        <img src={featured_image}></img>
        <div className='info' ref={container_content}>

            
        </div>
       
      <div> <Link href="/blog" >
             <p className="back">
             <svg
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
              REGRESAR A BLOG
             </p>
            </Link></div>
      </Container>
      
    </div>
  );
}

// export async function getStaticPaths() {

//   try {

//     const res = await fetch(
//       "https://api.buttercms.com/v2/posts/?auth_token=283cd9d21094b8358fecd40bda277b3ee034c0a1"
//     );
//     const datos = await res.json();

//     const paths = datos.data.map(({slug})=>({params:{id:slug}}));
//     return {
//       paths,
//       fallback:false
 
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(
      `https://api.buttercms.com/v2/posts/${params.id}/?auth_token=283cd9d21094b8358fecd40bda277b3ee034c0a1`
    );

    const data = await res.json();
    
    return {
      props: { data },
      // revalidate: 10
    };
  } catch (err) {
    console.log(err);
  }
}

const Container = styled.section`
b{
  font-weight:bold
}
  input {
    color: green;
  }
  a {
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: mv boli;
    color: var(--purple);
    margin-bottom: 20px;
    font-size: 1.4rem;
  }
  h1 {
    font-family: roboto;
    color: var(--primary);

    font-size: 2rem;
    margin-top: 40px;
    margin-left: 10px;
    position: relative;
    &::before {
      content: "";
      height: 100%;
      left: -1%;
      width: 5px;
      position: absolute;
      background: var(--primary);
    }
  }
  p {
    color: var(--text);
  }
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    color: var(--purple);
  }
  pre {
    padding: 2%;
    width:100%;

    border-radius: 5px;
    code {
      color: var(--purple);
    }
  }

  margin-bottom: 10%;
  min-height: 60vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  > div {
    max-width: 1500px;
    width: 60%;
  }
  .info {
    p {
      margin-bottom: 1%;
      text-align: justify;
    }
    ul,
    ol {
      list-style: inside;
    }
    p,
    li {
      font-family: Roboto;
    }
  }
  .back {
    cursor:pointer;
    color: var(--primary);
    border: 1px solid var(--primary);
    align-self: flex-start;

    font-family: roboto;
    padding: 1%;
    border-radius: 5px;
    display: flex;
    width: 20%;
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

  @media (max-width: 1300px) {
    > div {
      width: 70%;
    }

    .back {
      font-family: roboto;
      width: 30%;
    }
  }
  @keyframes move {
    30% {
      transform: translate(-10%);
    }
    60% {
      transform: translate(0%);
    }
    90% {
      transform: translate(-10%);
    }
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }
    h4 {
      margin-bottom: 10px;
      font-size: 1.4rem;
    }
    min-height: auto;

    h1 {
      font-size: 1.5rem;
      text-align: justify;
      &::before {
        height: 2rem;
        left: -3%;
        width: 5px;
        position: absolute;
        background: var(--primary);
      }
    }
    > div {
      width: 90%;
    }
    .info {
      p {
        margin-bottom: 5%;
        text-align: justify;
        img {
          width: 100%;
        }
      }
      ul,
      ol {
        list-style: inside;
      }
      p,
      li {
        font-family: Roboto;
      }
    }
    .back {
      color: var(--primary);
      border: 1px solid var(--primary);
      align-self: flex-start;
      font-family: roboto;
      padding: 5%;
      border-radius: 5px;
      display: flex;
      width: 50%;
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
        pre {
          margin-bottom: 120px !important;
        }
      }
    }
  }



  .download{
    display:inline-block;
    text-decoration:none;
    text-transform:uppercase;
    margin-top:10px;
    color:var(--purple);
    border:1px solid var(--purple);
    padding:.5rem 1rem;
    border-radius:3px;
    position:relative;

    &::before{
      font-family: "Font Awesome 5 Free";
   content: "\f019";
   display: inline-block;
   padding-right: 3px;
   vertical-align: middle;
   font-weight: 900;

   transform:translate(-20%,-10%)
    }
    &::after{
      content:'';
      clip-path: circle(0.0% at 100% 0);
      z-index:-1;

      position:absolute;
      left:0;
      top:0;
      transition:clip-path 400ms;
      height:100%;
      width:100%;
      background-color:var(--primary);
    }
    &:hover{
      color:white;
      font-weight:bold;
      border:1px solid white;

      &::after{
      content:'';
      clip-path: circle(100% at 100% 0);
    
    }
    }
   
  }
  .material{

  }

`;

import React, { useState, useEffect, useContext, useRef } from "react";
import Cart from "../../components/element/cart.jsx";
import styled from "styled-components";
import Loader from "../../components/loader";
import bg from "../../IMGS/proyects.png";
import Error from "../../components/element/Error";
import AOS from "aos";
import "aos/dist/aos.css";

import Head from 'next/head'

function Index({datos}) {
  const container = useRef();
  const nav = useRef();
  const [api, setApi] = useState(null);
  //mostrare un div si no hay elementos en la categoria
  const [error, setError] = useState(false);

  const [loader, setLoader] = useState(true);
  //creare un estado para verificar que categoria de blogs quiere ver el usuario
  //por defecto mostrara todo
  const [category, setCategory] = useState({
    all: true,
    frontend: false,
    backend: false,
    material: false,
    hacks: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [loader]);

  //creare un toggle para el navvar
  //le pasare como argumento el elemento que quiero que conseve la clase
  const toggle = (element) => {
    nav.current.childNodes.forEach((elementoo) => {
      elementoo.classList.remove("active");
    });
    element.classList.add("active");
  };



  // const intervalo = setInterval(() => {
  //   //Aca verifico si en el provider no esta vacio
  //   if (datos.length > 0) {
  //     //en caso de que no este vacio recorre todo
  //     setApi(datos[0]);
  //     //
  //     clearInterval(intervalo);
  //   }
  // }, 90);

  // useEffect(() => {
  //   return intervalo;
  // }, [api]);
  //aca estoy aplicando una clase que viene desde la api con la categoria, asi que al precionar
  //el click verifico el id que viene desde la api y solo muestro la categoria con la que coincida
  const cat = (e) => {
    if (e.target.id === "all") {
      setError(false);
      toggle(e.target);
      setCategory({
        all: true,
        frontend: false,
        backend: false,
        material: false,
        hacks: false,
      });
    }

    if (e.target.id === "frontend") {
      toggle(e.target);

      if (document.getElementsByClassName(e.target.id)[0] === undefined) {
        setError(true);
      } else {
        setError(false);
      }
      setCategory({
        all: false,
        frontend: true,
        backend: false,
        material: false,
        hacks: false,
      });
    }
    if (e.target.id === "backend") {
      toggle(e.target);
      if (document.getElementsByClassName(e.target.id)[0] == undefined) {
        setError(true);
      } else {
        setError(false);
      }

      setCategory({
        all: false,
        frontend: false,
        backend: true,
        material: false,
        hacks: false,
      });
    }
    if (e.target.id === "material") {
      toggle(e.target);
      if (document.getElementsByClassName(e.target.id)[0] == undefined) {
        setError(true);
      } else {
        setError(false);
      }

      setCategory({
        all: false,
        frontend: false,
        backend: false,
        material: true,
        hacks: false,
      });
    }

    if (e.target.id === "hacks") {
      toggle(e.target);
      if (document.getElementsByClassName(e.target.id)[0] == undefined) {
        setError(true);
      } else {
        setError(false);
      }

      setCategory({
        all: false,
        frontend: false,
        backend: false,
        material: false,
        hacks: true,
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <div>
   <Head>
     <title>BLOG</title>
      <meta property="og:title" content='BLOG'/>
 <meta property="og:description" content="BIENVENID@S A MI BLOG DE TECNOLOGIA"/>
   <meta property="og:image" content='https://st2.depositphotos.com/4022475/5850/v/600/depositphotos_58509553-stock-illustration-black-space-invaders-pattern.jpg'/>
  <meta property="og:url" content="http://nestormyrie.com"/>
        
      </Head>

      <Main
        frontend={category.frontend}
        all={category.all}
        backend={category.backend}
        material={category.material}
        hacks={category.hacks}
      >
       
        <nav>
          <h1>Categorias</h1>
          <ul ref={nav}>
            <li className=" visible active" id="all" onClick={cat}>
              All
            </li>
            <li className="visible" id="frontend" onClick={cat}>
              {" "}
              FRONTEND
            </li>
            <li className="visible" id="backend" onClick={cat}>
              BACKEND
            </li>
            <li className="visible" id="material" onClick={cat}>
              MATERIAL
            </li>
            <li className="visible" id="hacks" onClick={cat}>
              DEVELOPMENT HACKS{" "}
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
          <div ref={container}>
        {/* {api == undefined && <Loader />} */}

            {datos.data.map((e, i) => {
              if (e.status == "published" && e.categories[0].name == "blog") {
                return (
                  <div className={e.tags[0].name}>
                    <Cart
                      key={i}
                      title={e.title}
                      description={e.summary}
                      ruta={`/blog/${e.slug}`}
                      portada={e.featured_image}
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-center"
                    ></Cart>
                  </div>
                );
              }
            })}
            {error && <Error ky="blogs" blog />}
          </div>
      </Main>
    </div>
  );
}


export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(
      `https://api.buttercms.com/v2/posts/?auth_token=283cd9d21094b8358fecd40bda277b3ee034c0a1`
    );

    const datos = await res.json();
    
    return {
      props: { datos },
      // revalidate: 10
    };
  } catch (err) {
    console.log(err);
  }
}



export default Index;

const Main = styled.section`
  min-height: 75vh;
  background: url(${bg.src});
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3%;
  padding-top: 5%;

  nav {
    width: 50%;
    margin-bottom: 3%;

    h1 {
      font-family: Mv boli;
      font-size: 4rem;
      text-align: center;
      margin-bottom: 2vh;
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      li {
        margin-bottom: 2%;

        width: 20%;

        text-align: center;
        border-radius: 10px;
        padding: 1% 0;

        font-family: roboto;
      }
      .visible {
        font-size: 1rem;
        border: 1px solid var(--purple);
        color: var(--purple);
        transition: border 100ms, color 100ms;
        cursor: pointer;
        &:hover {
          border: 1px solid var(--primary);
          color: var(--primary);
        }
      }
      .active {
        color: white;
        border: 1px solid var(--primary);
        background: var(--primary);
        &:hover {
          color: white;
        }
      }
    }
  }

  > div {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    > div {
      width: 20%;
      > div {
        width: 100%;
        margin-right: 0.1%;
        margin-bottom: 6%;
      }
    }
  }

  //aca pondre las clases para manipular d eunamanera mas sencilla el display al
  //aplicar el filtro de busqueda

  .frontend {
    display: ${(props) => {
      if (props.frontend || props.all) {
        return "block";
      } else {
        return "none";
      }
    }};
  }
  .backend {
    display: ${(props) => {
      if (props.backend || props.all) {
        return "block";
      } else {
        return "none";
      }
    }};
  }
  .material {
    display: ${(props) => {
      if (props.material || props.all) {
        return "block";
      } else {
        return "none";
      }
    }};
  }
  .hacks {
    display: ${(props) => {
      if (props.hacks || props.all) {
        return "block";
      } else {
        return "none";
      }
    }};
  }

  @media (max-width: 1400px) {
    nav {
      width: 80%;
    }
    > div > div {
      width: 28%;
    }
  }

  @media (max-width: 1300px) {
    nav {
      width: 70%;
    }
    > div > div {
      width: 40%;
    }
  }

  @media (max-width: 800px) {
    nav {
      margin-top: 15%;
      width: 90%;
      margin-bottom: 3%;

      h1 {
        font-size: 4rem;
        margin-bottom: 20px;
      }
      ul {
        justify-content: space-evenly;
        li {
          font-size: 1.2rem;
          width: 40%;
          margin-bottom: 4%;
        }
      }
    }

    > div {
      width: 100%;
      > div {
        width: 90%;
        margin-right: 0.1%;
        margin-bottom: 10%;
      }
    }
  }
`;

// <Cart
//         title="Elephant css"
//         description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci, "
//       ></Cart>

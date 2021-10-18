import React, { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Prueba(props) {
  const checker = () => {
    if (window.location.pathname == "/proyectos") {
      window.open(props.ruta);
    }
  };
  return (
    <Carta portada={props.portada}>
      <div className="img"></div>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.date}</p>
      {
          !props.rutaname && (
          


<span>  <a
            href={props.ruta}
            onClick={checker}
          >
          VER BLOG
          </a></span>
          )
      }

        {
        props.rutaname && (
<span><a href={props.ruta} target='_blank'>VER PROYECTOS</a></span>
            )
        }
      </div>
    </Carta>
  );
}

const Carta = styled.div`
  min-height: 300px;

  width: 300px;
  box-shadow: 0px 0px 4px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
  padding-bottom: 10px;
  background: var(--bg);

  position: relative;
  margin-bottom: 130px;

  .img {
    width: 100%;
    min-height: 170px;

    background: url(${(props) => props.portada});
    background-size: cover;
    background-position: center;
  }
  h3 {
    margin-top: 10px;
    font-family: roboto;
    font-size: 0.99rem;
  }
  p {
    color: var(--text);
    font-size: 0.8rem;
    width: 85%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 130px;
  }

  span {
      a{
          color:var(--primary);
      }
    display: block;
    cursor:pointer;
    width: 95%;
    padding: 1% 0;
    height: 30px;
    border: 1px solid var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    transition: box-shadow 300ms;
    margin: 0;
    &:hover {
      box-shadow: 100px 0px 56px var(--primary) inset;
      color: white;
    }
  }

  @media (max-width: 800px) {
  }
`;

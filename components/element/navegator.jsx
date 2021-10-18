import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Navegator = () => {
  const top = () => {
    window.scroll({
      top: 0,
    });
  };
  const router = useRouter();
  return (
    <Container>
      <Link
        href="/"
        
        onClick={top}
      >
        <p className={router.asPath == "/" ? "active" : ""}>PORTAFOLIO</p>
      </Link>
      <Link href="/proyectos" onClick={top}>
        <p className={router.asPath == "/proyectos" ? "active" : ""}>
          PROYECTOS
        </p>
      </Link>
      <Link href="/blog" onClick={top}>
        <p className={router.pathname.includes('blog')  ? "active" : ""}>BLOG</p>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  border-left: 2px solid white;
  height: 120px;
  width: 20%;
  top: 30%;
  left: 2%;
  z-index: 10;
  font-family: Roboto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  p {
    display: block;
    cursor: pointer;
    transition: margin 200ms;

    margin-left: 3%;

    color: var(--text);

    position: relative;

    &::before {
      content: "";
      top: 48%;
      width: 10%;
      height: 2px;
      background: white;
      left: -18%;
      position: absolute;
      transition: width 200ms;
    }
  }
  .active {
    color: white;
    margin-left: 10%;

    &::before {
      content: "";
      width: 15%;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default Navegator;

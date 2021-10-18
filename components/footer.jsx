import React from "react";
import imgs from "../IMGS/exportsImg";
import styled from "styled-components";

import {useRouter} from 'next/router'
const Footer = React.memo(() => {
  // let location = useLocation();
  //   let modify = location.pathname.replace("/blog/page/", "");

    const toUp= () => {
      window.scroll({
        top:0
      })
    }
  return (

     <Main /**bg={modify} */>
      <div className="social">
        <h4>Social</h4>
        <div>
          <a href="https://twitter.com/NestorMyrie" target='_blank' rel="noopener noreferrer">
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5 17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451 18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834 15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048 3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544 1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115 7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068 1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303 5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0 20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302 0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799 2.80771 24.9999 2.41118C24.302 3.42637 23.4295 4.33052 22.4302 5.06025Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://discord.gg/mUes2DXzES" target='_blank' rel="noopener noreferrer">
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3175 1.49295C18.7875 0.80295 17.1475 0.29295 15.4325 0.00295017C15.4172 1.80819e-05 15.4014 0.00190762 15.3872 0.0083575C15.3731 0.0148074 15.3613 0.0254985 15.3535 0.0389502C15.1435 0.40795 14.9095 0.88895 14.7455 1.26895C12.9266 0.997187 11.0774 0.997187 9.25848 1.26895C9.07582 0.847811 8.86983 0.437174 8.64148 0.0389502C8.63374 0.0253329 8.62203 0.0143999 8.60792 0.0076103C8.5938 0.000820665 8.57795 -0.00150281 8.56248 0.000950073C6.84848 0.29095 5.20848 0.80095 3.67748 1.49195C3.66431 1.49747 3.65314 1.5069 3.64548 1.51895C0.533481 6.09395 -0.319519 10.556 0.0994806 14.962C0.100647 14.9727 0.103996 14.9832 0.109326 14.9926C0.114655 15.0021 0.121853 15.0104 0.130481 15.017C1.94687 16.3394 3.97282 17.3468 6.12348 17.997C6.13847 18.0016 6.15451 18.0016 6.16949 17.9969C6.18448 17.9923 6.19772 17.9832 6.20748 17.9709C6.66948 17.3509 7.08148 16.6959 7.43348 16.0079C7.45448 15.9679 7.43448 15.9199 7.39248 15.9039C6.74649 15.6607 6.12057 15.3671 5.52048 15.0259C5.5097 15.0198 5.50061 15.0111 5.49404 15.0005C5.48746 14.99 5.48361 14.978 5.48281 14.9656C5.48202 14.9532 5.48432 14.9408 5.48949 14.9295C5.49467 14.9183 5.50257 14.9084 5.51248 14.9009C5.63848 14.8079 5.76448 14.711 5.88448 14.614C5.89528 14.6052 5.90829 14.5997 5.92206 14.5979C5.93584 14.5961 5.94983 14.5982 5.96248 14.604C9.88948 16.368 14.1425 16.368 18.0235 14.604C18.0362 14.5979 18.0503 14.5955 18.0643 14.5971C18.0782 14.5987 18.0915 14.6042 18.1025 14.6129C18.2225 14.7109 18.3475 14.8079 18.4745 14.9009C18.4845 14.9083 18.4925 14.918 18.4979 14.9292C18.5032 14.9403 18.5057 14.9527 18.5051 14.9651C18.5045 14.9774 18.5008 14.9895 18.4945 15.0001C18.4881 15.0107 18.4791 15.0196 18.4685 15.0259C17.8705 15.3699 17.2485 15.661 16.5955 15.903C16.5855 15.9066 16.5763 15.9123 16.5687 15.9198C16.561 15.9272 16.5551 15.9362 16.5512 15.9462C16.5473 15.9561 16.5456 15.9668 16.5462 15.9774C16.5467 15.9881 16.5496 15.9985 16.5545 16.0079C16.9145 16.695 17.3265 17.3489 17.7795 17.9699C17.7889 17.9827 17.802 17.9922 17.8171 17.9972C17.8321 18.0022 17.8483 18.0025 17.8635 17.9979C20.0178 17.3496 22.0471 16.3417 23.8655 15.017C23.8744 15.0107 23.8818 15.0027 23.8873 14.9934C23.8928 14.9841 23.8963 14.9737 23.8975 14.9629C24.3975 9.86895 23.0595 5.44295 20.3485 1.52095C20.3418 1.5082 20.3308 1.49827 20.3175 1.49295ZM8.02048 12.2789C6.83848 12.2789 5.86348 11.2099 5.86348 9.89895C5.86348 8.58695 6.81948 7.51895 8.02048 7.51895C9.23048 7.51895 10.1965 8.59595 10.1775 9.89895C10.1775 11.2109 9.22148 12.2789 8.02048 12.2789ZM15.9955 12.2789C14.8125 12.2789 13.8385 11.2099 13.8385 9.89895C13.8385 8.58695 14.7935 7.51895 15.9955 7.51895C17.2055 7.51895 18.1715 8.59595 18.1525 9.89895C18.1525 11.2109 17.2065 12.2789 15.9955 12.2789Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/nestor.myrie.3" target='_blank' rel="noopener noreferrer">
            <svg
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2792 11.2494L10.8498 7.63H7.28305V5.28125C7.28305 4.29125 7.78113 3.32562 9.37869 3.32562H11V0.244375C11 0.244375 9.52888 0 8.12195 0C5.18485 0 3.26508 1.73375 3.26508 4.87187V7.63062H0V11.25H3.26508V20H7.28305V11.25L10.2792 11.2494Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="mailto:nestormyriee@gmail.com" rel="noopener noreferrer">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 14H16V5.25L10 9L4 5.25V14H2V2H3.2L10 6.25L16.8 2H18V14ZM18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="center">
        <h4>CUENTA LA LEYENDA</h4>
        <p>
        ¡Por cada café que toma un programador aumenta su RAM cerebral y su SSD de aprendizaje!
        </p>
        <a href="https://www.buymeacoffee.com/NestorMyrie" target="_blank" rel="noopener noreferrer">
          <img src={imgs.coffe.src} alt="buy me a coffe" />
        </a>
      </div>

      <div className='cms'>
        <h4>CMS de uso</h4>
     <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer">
     <img src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5" alt="ButterCmsLogo" />
     </a>
      </div>
      <div className="paginat">
        <h4>Paginacion</h4>
        <ul>
          <li>
            <a href='/' activeClassName='active' exact onClick={toUp}>PORTFOLIO</a>
          </li>
          <li>
            <a href='/blog' activeClassName='active'onClick={toUp} >BLOG</a>
          </li>
          <li>
            <a href='/Proyectos' activeClassName='active' onClick={toUp}>PROYECTOS</a>
          </li>
          
        </ul>
      </div>

    </Main>
   
  );

})
    



export default Footer
const Main = styled.footer`
.active{
  color:var(--purple);
}
  height: 23vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background:${(props)=> props.bg==='/' ?'var(--bg)':'var(--sbg)'}; */
background:${()=>useRouter().asPath=='/'?'var(--bg)':'var(--sbg)'};
  h4 {
    font-size: 1.3rem;
    margin-bottom: 2vh;
    font-family: roboto;
    font-weight:lighter;
  }
  .social {
    width: 13%;
    text-align: center;

    > div {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      a {
        width: 10%;
        border: 1px solid white;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: border 100ms;
        svg path {
          transition: fill 100ms;
          fill: var(--text);
        }
        &:hover {
          svg path {
            fill: var(--purple);
          }
          border: 1px solid var(--purple);
        }
      }
    }
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 15%;
    font-family: Roboto;
    text-align: center;

    p {
      font-size: 0.8rem;
      color: var(--text);

      margin-bottom: 2vh;
    }
    img {
      width: 60%;
    }
  }

  .paginat {
    ul {
      list-style: url(${imgs.listarrow.src});
      list-style-position: inside;
      li a {
        font-family: Roboto;
        font-size: 0.8rem;
      }
    }
  }

  .cms{
    width:10%;
    text-align:center;
    
    
    img{
      width:100%;
    }
  }

  @media (max-width: 1300px) {
    height: 25vh;
    padding: 2% 0;

    .social {
      width: 18%;
    }
    .center {
      width: 23%;
    }
  }

  @media (max-width: 800px) {
    padding:5% 0;

    .cms{
    width:50%;
    text-align:center;
    
    
    img{
      width:100%;
    }
  }
    height: auto;
    flex-direction: column;

    margin-bottom: 75px;

    h4 {
      margin-bottom: 10px;
    }
    div{
      margin-bottom:10px;
    }
    .social {
      width: 70%;
      text-align: center;
    }
    .center {
      width: 90%;
      margin-top: 20px;
    }

    .paginat {
      display: none;
    }
  }
`;

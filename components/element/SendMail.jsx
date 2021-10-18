import React,{useRef,useEffect,useState} from "react";
import styled from 'styled-components'
import imgs from '../../IMGS/exportsImg'


 const ConfirmMesage= () => {
     const [resize,setResize] =useState()
const container = useRef()
const content = useRef()


const close = (props) => {
    document.body.style.setProperty('--formBg','transparent')
            document.body.style.setProperty('--formScale','0')
    setTimeout(() => {
    document.body.style.setProperty('--formDisplay','none')
        

    },500)


 
}
 useEffect(() => {

    const elementheight=container.current.clientHeight *30/100;
    setResize(elementheight)
    window.addEventListener('resize',() => {
        setResize(elementheight )
    
    })


},[resize])
    return(
<Container ref={container} alto={resize}>
  <div id='ocult' ref={content}> 
     <img src={imgs.svgForm} alt="form" />
      <div>
<span>
<h4>GRACIAS POR CONTACTARME</h4>
<p className='info'>ME PONDRE EN CONTACTO LO ANTES POSIBLE!</p>
</span>
<p className='close' onClick={close}>CERRAR </p>
      </div>
  </div>
</Container>
    )
  

}
export default ConfirmMesage

const Container = styled.div`
height:100vh;
width:100vw;
position:fixed;
z-index:10;
background:var(--formBg);
display:var( --formDisplay);


transition:background 400ms;
justify-content:center;
align-items:center;
.info{
    text-align:center;
    font-size:1.3rem;
}
>div{
    transform:scale(var(--formScale));
transition:transform 400ms;

    background:var(--bg);
    width:50%;
    min-height:50%;
    border-radius:20px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    *{
        font-family:Rajdhani;
    }
    div:nth-child(2){
      span{margin-bottom:20%}
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        h4{
            color:var(--primary)
        }

        .close{
            color:var(--purple)
            
        }
        .close{
            cursor:pointer;
            font-size:1.4rem;
            align-self:flex-end;
            font-family:roboto;
            border-bottom:1px solid transparent;

            &:hover{
                border-bottom:1px solid var(--primary);
            }
        }
        h4{
          
            font-size:2.4rem;
        }
       
    }



}

@media (max-width:800px){
height:100%;
img{
    height:200px;
    margin-bottom:4%;
}
>div{
    min-height:40%;
    height:auto;

    transform:scale(var(--formScale));
padding:5% 1%;

    width:90%;
    flex-direction:column;
    
    div:nth-child(2){
      span{margin-bottom:10%}
        justify-content:space-evenly;
       
        .close{
          align-self:center;
        }
        h4{
          text-align:center;
            font-size:1.4rem;
        }
       
    }



}
}

`
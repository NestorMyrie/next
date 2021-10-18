import React from "react";
import styled from "styled-components";


const Nav = (props) => {


// console.log(skill)

  return (
    

     <div>
      <Navar>
      <ul>
        <li className="about " >
          <a href ='#aboutme'>ABOUT ME</a>
        </li>
        <li  className='skills' >
          <a href="#skills"  > SKILLS</a>
        </li>
        <li className={'services'}>
          <a href="#services"> SERVICES</a>
        </li>
        <li className='contact'>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </Navar> 
     </div>

    
  );
};



export default Nav;

const Navar = styled.nav`
  position: fixed;
z-index: 1;
 
  font-family: Rajdhani;

  top: 5%;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
.skills{
    
    
    border:var(--skilborder);
  a{
    color:var(--skilcolor);
  }
  }

  .about{
    
    
    border:var(--aboutborder);
  a{
    color:var(--aboutcolor);
  }
  }

  .services{
    
    
    border:var(--servicesborder);
  a{
    color:var(--servicescolor);
  }
  }

  .contact{
    
    
    border:var(--contactborder);
  a{
    color:var(--contactcolor);
  }
  }

  ul {
  list-style:none;
    margin-right:10%;
   width: 30%;

    display: flex;
    align-items: center;

    justify-content: space-evenly;
    font-size: 1.7rem;
    li {
     

      padding: 1% 2%;
    
      border-radius: 5%;
    }
  }
a{
  transition:color 300ms, border 300ms;
}
  @media  (max-width:1600px){
   ul{
     width:40%;
     font-size: 1.2rem;
   }
  }

  @media (max-width:800px){
    display:none;
  }
 
`;

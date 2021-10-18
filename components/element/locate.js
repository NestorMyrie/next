import React from "react";
import { useInView } from "react-intersection-observer";
 
 
 const Locate = (props) => {


  const {ref, inView,entry} =useInView({
        threshold:props.vista
      })
    
   if(window.innerWidth > 800){
    if(inView){
      // --skilborder:1px solid transparent;
      // --skilcolor:#B8B8B8;
      document.body.style.setProperty(`--${props.border}`,`1px solid #FF0451`)
      document.body.style.setProperty(`--${props.color}`,'#FF0451')
    
    }else{
      document.body.style.setProperty(`--${props.border}`,'transparent')
      document.body.style.setProperty(`--${props.color}`,'#B8B8B8')
    
    }
   }
    return(
        <div ref={ref}>
          
            {props.children}
        </div>
    )

 }

 export default Locate
import { createContext } from "react";



// const change = () => {
//     console.log(modify)
//     var list = []
//     return new Promise((res, err) => {
//       fetch(")
//         .then((res) => res.json())
//         .then((elementos) => {
//           //filtro los resultados para que solo me muestre el que coincida con la url
//           const elementmap = elementos.data;
//           elementmap.map((e) => {
//             if (e.slug == modify) {
//               list.push(e)
//             }
//           });

//           // setApi(elementmap)
        
//         });
// return list
//     });
//   };

const info =[]
      fetch("https://api.buttercms.com/v2/posts/?auth_token=283cd9d21094b8358fecd40bda277b3ee034c0a1")
      .then(re=>re.json())
      .then(element=>info.push(element.data))
    
 




 const datos = createContext( info)
 export default datos
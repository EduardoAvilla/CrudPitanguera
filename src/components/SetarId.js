import React, { useState } from 'react';
 function SetarId(props) { 


   const [count, setCount] = useState(0);
 
    let setar= ()=> setCount(count + 1);
    setar()
    {console.log(count)}
  
const alerta =()=>{
alert("pegou porra")
}      
   

  return (
    <div> 
        
        

     
    </div>
  )
};

export default SetarId;

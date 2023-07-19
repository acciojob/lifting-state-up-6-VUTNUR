import React,{useState} from "react";

const Child=({value,func})=>{
        function remove(e){
            let result=value.map((elem,index)=>{
                 if(e.target.className==index){
                    return {...elem,completed: true}
                 }
                 return elem;
            })
            func(result);
        }
    return(
        <div>
            <h3>Child Component</h3>
            <ul>
            {
                value.map((elem,index)=>{
                  return  (
                    <li>{elem.text}
                    
                     {
                        !elem.completed &&
                        <button  className={index} onClick={remove}>Complete</button>
                     }  
                       </li>
                       
                    )
                     } )
            }
            </ul>
        </div>
    )
}
export default Child;
import React,{useState} from "react";

const Child=({value,func})=>{
        function remove(e){
            let result=value.filter((elem,index)=>{
                 return e.target.className!=index;
            })
            func(result);
        }
    return(
        <div>
            <ul>
            {
                value.map((elem,index)=>{
                  return  (
                        <li>{elem}<button  className={index} onClick={remove}>Complete</button></li>
                    )
                     } )
            }
            </ul>
        </div>
    )
}
export default Child;
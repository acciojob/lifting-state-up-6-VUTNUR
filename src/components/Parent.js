import React,{useState} from "react";
import Child from "./Child"

const Parent=()=>{
   let [todos, setTodos]=useState([{ id: 1, text: 'Learn React', completed: false },
   { id: 2, text: 'Build a todo app', completed: false },
   { id: 3, text: 'Deploy to production', completed: false }]
);
    return (
        <div>
            <h1>Parent Component</h1>
            <Child value={todos} func={setTodos}/>
        </div>
    )
}
export default Parent;



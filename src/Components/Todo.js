import React from 'react';
import { BsTrashFill } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

export default function Todo({ todos, completeTask, removeTask }) {
    return todos.map((todo,index) => (
        <div className= {todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
            <div className='todo-text'>{todo.text}</div>
            <div className='icons' key={todo.id}>
                <BsCheckLg className={todo.isComplete ? 'hide': 'tick'} onClick={() => { completeTask(todo.id) }}></BsCheckLg>
                <BsTrashFill className='cross' onClick={() => { removeTask(todo.id) }}></BsTrashFill>
            </div>
        </div>
    ));

}
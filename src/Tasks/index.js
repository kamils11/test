import React from 'react';
import './style.css';

const Tasks = ({tasks , hideDoneTask}) => (
    <ul className="section__ul">
        {tasks.map(task => (
            <li className={task.done && hideDoneTask ? 'tasks__item--hiden': ''}>
               <div className="section__ul__li__div">
                    <button className='js-doneTaskButton'>{task.done ? "❌" : "✔️"}</button>
                    <div className ="section__ul__li__div__div">
                        <span className= {task.done ? 'style ' : ''}>
                            {task.content}
                        </span>
                    </div>
                    <button className ='js-removeTaskButton'>🗑️</button>
                </div>
            </li>
        ))}
    </ul>
)

export default Tasks;
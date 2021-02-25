import React from 'react';
import './style.css';

const Tasks = (props) => (
    <ul className="section__ul js-tasksList">
        {props.tasks.map(task => (
            <li className={task.done && props.hideDoneTask ? 'tasks__item--hiden': ''}>
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
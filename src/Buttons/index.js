import React from 'react';


const Buttons = (props) => {

if(props.tasks.length === 0)return null;

    return (
        <div className={`style__div__div `}>
            <button className={`style__div__button `}> 
                {props.hideDoneTask ? 'Pokaż' : 'Ukryj'} ukończone
            </button>
            <button className={`style__div__button ${props.tasks.every(({done}) => done ? 'disabled' : '')}`}>  Ukończ wyszystkie</button>
        </div>
    )
}

export default Buttons;
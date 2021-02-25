import React from 'react';


const Buttons = (tasks , hideDoneTask) => (

tasks.length > 0 && (

        <div className={`style__div__div `}>
            <button className={`style__div__button `}> 
                {hideDoneTask ? 'Pokaż' : 'Ukryj'} ukończone
            </button>
            <button 
            className={`style__div__button `}
            disabled={tasks.every(({done}) => done ? 'disabled' : '')}
            >  Ukończ wyszystkie</button>
        </div>
    )
);

export default Buttons;
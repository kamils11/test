
import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';

const tasks = [
  { id: 1, content: 'nauczyć się reacta', done: false },
  { id: 2, content: 'posprzątć pokuj', done: true },
];

const hideDoneTask = false;

function App() {
  return (

    <main>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <section className='section'>
        <Form />
      </section>
      <section className='section'>
        <div className='section__div'>
          <h3 className='style__div__h3'>Dodane zadania</h3>
         <Buttons tasks={tasks} hideDoneTask={hideDoneTask} />
        </div>
        <Tasks tasks={tasks} hideDoneTask={hideDoneTask} />
      </section>
    </main>


  );
}

export default App;

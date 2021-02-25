
import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
  { id: 1, content: 'nauczyć się reacta', done: false },
  { id: 2, content: 'posprzątć pokuj', done: true },
];

const hideDoneTask = false;

function App() {
  return (

    <Container>
      
      <Header title={"To Do List"} />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} 
      />

      <Section
        title={'Dodane zadania'}
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
        ekstraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
      />

    </Container>


  );
}

export default App;

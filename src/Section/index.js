import React from 'react';
import './style.css';

const Section = ({ title, body, ekstraHeaderContent }) => (


    <section className='section'>
        <header>
            <h1>{title}</h1>
        </header>
        {ekstraHeaderContent}
        {body}


    </section>

);

export default Section;
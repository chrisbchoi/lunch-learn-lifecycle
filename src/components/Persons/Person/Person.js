import React from 'react';
import styles from './Person.module.css';
const person = props => {
  console.log('[Person.js] rendering...');
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;

import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../context/AuthContext';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);

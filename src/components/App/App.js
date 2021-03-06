import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import Todo  from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () =>
 (<Router>
  <div className={styles.wrap}>
    <Card className={styles.sidebar}>
        <MenuList className = {styles.menu}>
            <NavLink exact to='/' className={styles.link} activeClassName={styles.active}> Обо мне </NavLink>
            <NavLink to='/todo'className={styles.link} activeClassName={styles.active}> Дела </NavLink>
            <NavLink to='/contacts' className={styles.link} activeClassName={styles.active}> Контакты </NavLink>
        </MenuList>
    </Card>

    <Card className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
    </Card>
    </div>
  </Router>
);

export default App;

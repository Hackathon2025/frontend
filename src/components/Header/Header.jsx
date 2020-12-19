import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import ButtonAddAction from '../ButtonAddAction/ButtonAddAction';

const Header = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.logo}>logo</div>
      <h1 className={styles.title}>Инициативы</h1>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <NavLink to="/allcards" activeClassName={styles.linkActive}>Все карточки</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/userscards" activeClassName={styles.linkActive}>Мои карточки</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/initialAction">
        <ButtonAddAction>Предложить инициативу</ButtonAddAction>
      </NavLink>
    </div>
  </div>
);

export default Header;

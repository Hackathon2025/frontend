import React from 'react';
import { Route, Switch } from 'react-router-dom'; // импортируем Switch
import Card from '../Card/Card';
import styles from './Main.module.css';

const Main = () => (
  <Switch>
    <Route exact path="/">
      <section className={styles.main}>
        <p>Привет, здесь, возможно, должена быть главная страница</p>
      </section>
    </Route>
    <Route path="/allcards">
      <section className={styles.main}>
        <p>Здесь будут отображены все карточки</p>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Route>
    <Route path="/userscards">
      <section className={styles.main}>
        <p>Здесь будут отображены только пользовательские карточки</p>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Route>
  </Switch>
);

export default Main;

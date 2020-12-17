import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonAddAction.module.css';

const ButtonAddAction = (props) => {
  const { children } = props;
  return (
    <button type="button" value="value" className={styles.button}>
      {children}
    </button>
  );
};
ButtonAddAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonAddAction;

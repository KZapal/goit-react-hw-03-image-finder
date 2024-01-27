import React from 'react';
import css from './Button.module.css';

const Button = ({ onLoadMore }) => (
  <button type="button" className={css.Button} onClick={onLoadMore}>
    Load more
  </button>
);

export default Button;
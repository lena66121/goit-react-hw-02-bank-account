import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

class Controls extends Component {
  handleChange = ({ target }) => {
    this.props.handleChange(target.value);
  };

  handleClick = e => {
    this.props.handleClick(e);
  };

  render() {
    const { props } = this;
    const { value } = props;
    return (
      <section className={styles.controls}>
        <input type="number" value={value} onChange={this.handleChange} />
        <button type="button" name="deposit" onClick={this.handleClick}>
          Deposit
        </button>
        <button type="button" name="withdraw" onClick={this.handleClick}>
          Withdraw
        </button>
      </section>
    );
  }
}

Controls.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Controls;

import React, { Component } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {
  state = {
    balance: 5000,
    transactions: [],
    value: '',
    deposit: 0,
    withdraw: 0,
  };

  handleChange = inputValue => {
    this.setState({
      value: inputValue,
    });
  };

  handleClick = e => {
    const { balance } = this.state;
    const { name } = e.target;
    const value = parseFloat(this.state.value);
    const date = new Date();

    const transaction = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date: date.toLocaleString(),
    };
    if (name === 'withdraw' && value > balance) {
      toast.error('На счету недостаточно средств для проведения операции!');
      this.reset();
    } else if (this.state.value === '' || value === 0) {
      toast.warning('Введите сумму для проведения операции!');
      this.reset();
    } else {
      this.setState(
        state => {
          state.transactions.push(transaction);
        },
        () => this.updateBalance(name, value),
      );
      this.reset();
    }
  };

  updateBalance = (name, value) => {
    if (name === 'deposit') {
      this.setState(prevValue => ({
        deposit: prevValue.deposit + value,
        balance: prevValue.balance + value,
      }));
    } else {
      this.setState(prevValue => ({
        withdraw: prevValue.withdraw + value,
        balance: prevValue.balance - value,
      }));
    }
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { balance, withdraw, deposit, transactions } = this.state;
    const { value } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          value={value}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <Balance balance={balance} withdraw={withdraw} deposit={deposit} />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}

export default Dashboard;
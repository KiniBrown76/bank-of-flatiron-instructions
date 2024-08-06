import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import TransactionForm from './Components/TransactionForm';
import TransactionTable from './Components/TransactionTable';
import TransactionRow from './Components/TransactionRow';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.UpperCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
    <header>Bank of Flatiron</header>
    <aside className="sidebar">
      <TransactionForm addTransaction={addTransaction} />
    </aside>
    <main className="content">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </main>
  </div>
  );
}

export default App;
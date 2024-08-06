import React from 'react';

function TransactionRow({ transaction, onDelete }) {
  const handleDelete = () => {
    fetch(`https://transaction-db.vercel.app/transactions/${transaction.id}`, {
      method: 'DELETE'
    }).then(() => onDelete(transaction.id));
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TransactionRow;
import React from "react";
import "./TransactionList.css";
import { useSelector } from "react-redux";
import Transaction from "../Transaction/Transaction";

const TransactionList: React.FC = () => {
  const list = useSelector((store) => store?.transactions?.filteredList);
  return (
    <div className="transaction-list">
      {list?.length > 0 &&
        list.map((transaction) => (
          <div key={transaction.transactionId} className="transaction-group">
            <h2 className="transaction-date">{transaction.date}</h2>
            <div className="transaction-container">
              <Transaction transaction={transaction} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TransactionList;

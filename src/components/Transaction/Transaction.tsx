import React from "react";
import "./Transaction.css";

// Defined the Transaction type
interface TransactionProps {
  transaction: {
    id: number;
    logoUrl: string;
    transactionTitle: string;
    suburb: string;
    shortCategory: string;
    amount: number;
    currency: string;
    cashflow: string;
  };
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <div className="transaction-icon">
          <img src={transaction.logoUrl} />
        </div>
        <div className="transaction-header">
          <p className="transaction-title">{transaction.transactionTitle}</p>
          <div className="transaction-subtitle">
            <p className="transaction-suburb">{transaction.suburb}</p>
            {transaction.suburb && transaction.shortCategory && (
              <p className="divider">&nbsp; | &nbsp;</p>
            )}
            <p className="transaction-category">{transaction.shortCategory}</p>
          </div>
        </div>
      </div>

      <div className="transaction-amount-container">
        <span
          className={`transaction-amount ${
            transaction.cashflow == "outflow" ? "negative" : "positive"
          }`}
        >
          {transaction.cashflow == "outflow" ? "-" : "+"}
        </span>
        ${Math.abs(transaction.amount).toLocaleString()}
        {transaction.currency}
      </div>
    </div>
  );
};

export default Transaction;

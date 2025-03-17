import React, { useState } from "react";
import "./TabPanel.css";
import TransactionList from "../TransactionList/TransactionList";
import Toolbar from "../Toolbar/Toolbar";

const TabPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Transactions");
  const tabs: string[] = [
    "Transactions",
    "Statements",
    "Receipts",
    "Allocations",
  ];

  return (
    <div className="tab-panel">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Toolbar Component */}
      <Toolbar />

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "Transactions" && <TransactionList />}
        {activeTab === "Statements" && <TransactionList />}
        {activeTab === "Receipts" && <TransactionList />}
        {activeTab === "Allocations" && <TransactionList />}
      </div>
    </div>
  );
};

export default TabPanel;

import React from "react";
import "./AccountDetails.css";
const AccountDetails: React.FC = () => {
  return (
    <>
      <section className="account-details-container">
        <div className="account-header">
          <div className="account-info">
            <h2 className="account-title">Account Name</h2>
            <p className="account-balance">$100,000.00</p>
            <div className="account-meta">
              <div className="item-left">
                <p className="account-meta-item ">BSB: XXXXXXX</p>
              </div>
              <div className="item-right">
                <p className="account-meta-item ">Acc No. XXXXXXXXXX</p>
              </div>
            </div>
          </div>
          <div className="account-actions">
            <div className="action-group">
              <p className="action-button">Add Funds</p>
              <p className="action-button">Add Receipts</p>
            </div>
            <div className="action-group">
              <p className="action-button">Make Payment</p>
              <p className="action-button">Account Settings</p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="account-pagination">
        <p>Showing account X OF X</p>
        <button className="pagination-button">{"<"}</button>
        <button className="pagination-button">{">"}</button>
      </div> */}
    </>
  );
};

export default AccountDetails;

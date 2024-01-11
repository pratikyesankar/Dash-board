// TransactionActivity.js

import React from "react"
import "./Transactions.css" // Import the CSS file

const Transactions = [
  {
    orderid: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today 8:45 PM",
    orderAmount: "₹1125.00",
  },
  {
    orderid: "#281208",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Yesterday 3:00 PM",
    orderAmount: "₹1125.00",
  },
  {
    orderid: "#281207",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023 3:00 PM",
    orderAmount: "₹1125.00",
  },
  {
    orderid: "#281206",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023 3:00 PM",
    orderAmount: "₹1125.00",
  },
  {
    orderid: "#281205",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023 3:00 PM",
    orderAmount: "₹1125.00",
  },
  {
    orderid: "#281204",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023 3:00 PM",
    orderAmount: "₹1125.00",
  },
]

const TransactionActivity = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-grey-900">
        Transaction | This Month
      </h1>

      {/* First <p> tag */}
      <p
        style={{
          display: "inline-block",
          backgroundColor: "grey",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "8px",
          marginRight: "10px",
        }}
      >
        Payouts (22)
      </p>

      {/* Second <p> tag */}
      <p
        style={{
          display: "inline-block",
          backgroundColor: "skyblue",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "8px",
          marginRight: "10px",
        }}
      >
        Refund (6)
      </p>

      <br />

      {/* Search bar */}
      <input
        type="text"
        style={{
          marginTop: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        placeholder="Search..."
      />

      <div className="mt-4 w-full border rounded-md border-gray-200 bg-white">
        <table className="table-auto w-full">
          <thead className="px-6 py-4 bg-indigo-50">
            <tr className="text-gray-900 text-sm font-medium">
              <th>Order ID</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Refund Date</th>
              <th>Order Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y-2">
            {Transactions.map((transaction, index) => (
              <tr key={index} className="px-6 py-4">
                <td>{transaction.orderid}</td>
                <td>
                  <span className="success-dot"></span>
                  <span className="success-text">{transaction.status}</span>
                </td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.refundDate}</td>
                <td>{transaction.orderAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionActivity

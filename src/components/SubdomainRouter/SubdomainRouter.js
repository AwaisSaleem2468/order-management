import React from 'react';
import { useParams } from 'react-router-dom';
import OrdersTable from '../OrdersTable/OrdersTable';

// Import sampleOrders into SubdomainRouter
const sampleOrders = {
  daraz: [
    { orderId: 101, customerName: "Alice", amount: "$120", status: "Delivered" },
    { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
    { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
    // Add more orders here...
  ],
  foodpanda: [
    { orderId: 201, customerName: "Charlie", amount: "$50", status: "Delivered" },
    { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
    { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
    // Add more orders here...
  ],
  amazon: [
    { orderId: 301, customerName: "Eve", amount: "$200", status: "In Transit" },
    { orderId: 302, customerName: "Frank", amount: "$150", status: "Pending" },
    { orderId: 303, customerName: "Olivia", amount: "$300", status: "Delivered" },
    // Add more orders here...
  ]
};

const SubdomainRouter = () => {
  const { subdomain } = useParams();

  if (!sampleOrders[subdomain]) {
    return <div>Invalid Subdomain!</div>;
  }

  return (
    <div>
      <h1>Welcome to {subdomain.toUpperCase()} Orders Page</h1>
      <OrdersTable orders={sampleOrders[subdomain]} />
    </div>
  );
};

export default SubdomainRouter;
import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/order/list', {
        headers: {
          'Content-Type': 'application/json',
          // Include token if your auth middleware requires it
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched orders:', data);

      // Assuming backend returns { success: true, orders: [...] }
      setOrders(Array.isArray(data.orders) ? data.orders : []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading orders...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="ml-[30px] mt-[30px]">
          <h1 className="font-bold text-gray-700 text-xl mb-[20px]">All Orders</h1>
          <table className="min-w-full bg-white border border-gray-400">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-50">Order ID</th>
                <th className="py-2 px-4 border-b bg-gray-50">User</th>
                <th className="py-2 px-4 border-b bg-gray-50">Amount (₹)</th>
                <th className="py-2 px-4 border-b bg-gray-50">Payment Method</th>
                <th className="py-2 px-4 border-b bg-gray-50">Status</th>
                <th className="py-2 px-4 border-b bg-gray-50">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td className="py-2 px-4 border-b">{order._id}</td>
                    <td className="py-2 px-4 border-b">
                      {order.address?.email || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border-b">{order.amount}</td>
                    <td className="py-2 px-4 border-b">{order.paymentMethod}</td>
                    <td className="py-2 px-4 border-b">{order.status}</td>
                    <td className="py-2 px-4 border-b">
                      {new Date(order.createdAt || order.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;

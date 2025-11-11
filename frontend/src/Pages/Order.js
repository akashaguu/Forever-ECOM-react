import React, { useContext } from 'react';
import line2 from '../images/Rectangle 3605.png'
import { ShopContext } from '../component/Context/ShopContext';

function Orders() {
  const { cart } = useContext(ShopContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className='mt-16 flex justify-center items-center gap-2'>
                  <h2 className='text-gray-600 font-medium text-xl'>MY</h2>
                  <h2 className='text-xl'>ORDERS</h2>
                  <img src={line2} alt='line2'/>
      </div>

      <div className="border-t border-gray-300 mb-6"></div>

      {/* Orders */}
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="mb-6 border-b border-gray-300 pb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium">Order ID: #{item.id}</h2>
              <h2 className="text-green-600 font-medium">Order Placed</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="font-medium">{item.name}</h2>
                <div>Sizes: {item.size}</div>
                <div>Qty: {item.quantity}</div>
              </div>

              {/* Price */}
              <div className="font-medium">${item.price}</div>
            </div>
          </div>
        ))
      )}

      {/* Summary */}
      {cart.length > 0 && (
        <div className="mt-6 w-full max-w-xl ml-auto p-4 border border-gray-300 rounded">
          <div className="flex justify-between mb-1">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
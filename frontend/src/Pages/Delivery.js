import React, { useState, useContext } from 'react';
import line2 from '../images/Rectangle 3605.png'
import { ShopContext } from '../component/Context/ShopContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Delivery() {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  // handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle payment method selection
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // form validation
  const validateForm = () => {
    for (let key in formData) {
      if (!formData[key]) {
        toast.error(`Please fill out ${key}`);
        return false;
      }
    }
    if (!paymentMethod) {
      toast.error('Please select a payment method');
      return false;
    }
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return false;
    }
    return true;
  };

  // handle order submission
  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    try {
      // Get userId from localStorage or JWT
      const userId = localStorage.getItem("userid"); // replace with your login logic
      if (!userId) {
        toast.error("You must be logged in to place an order");
        return;
      }

      // Prepare order data
      
const orderData = {
  userId,
  address: formData,
  paymentMethod,
  items: cart.map(item => ({
    productId: item.id,
    quantity: item.quantity
  })),
  amount: total, // ✅ include amount
};
      // Send order to backend
      const response = await fetch("http://localhost:8000/api/order/place", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to place orders");
        return;
      }

      toast.success("Order placed successfully!");
      console.log("Order saved:", data);

      // Navigate to order confirmation page
      navigate("/order");

    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong while placing the order");
    }
  };

  return (
    <div className='flex'>
      <div>
        <div className="mt-16">
          <div className="ml-20 flex items-center gap-2">
            <h2 className="text-gray-600 font-medium text-xl">DELIVERY</h2>
            <h2 className="text-xl">INFORMATION</h2>
            <img src={line2} alt="line2" />
          </div>
        </div>

        <div>
          <div className='flex gap-2'>
            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' className='border border-gray-600 w-72 h-9 pl-4 mt-20 ml-20 pt-1 rounded-sm' />
            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' className='border border-gray-600 w-72 h-9 pl-4 mt-20 pt-1 rounded-sm' />
          </div>

          <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='border border-gray-600 w-[584px] h-9 pl-4 mt-5 ml-20 pt-1 rounded-sm' />
          <input type='text' name='street' value={formData.street} onChange={handleChange} placeholder='Street' className='border border-gray-600 w-[584px] h-9 pl-4 mt-5 ml-20 pt-1 rounded-sm' />

          <div className='flex gap-2'>
            <input type='text' name='city' value={formData.city} onChange={handleChange} placeholder='City' className='border border-gray-600 w-72 h-9 pl-4 mt-5 ml-20 pt-1 rounded-sm' />
            <input type='text' name='state' value={formData.state} onChange={handleChange} placeholder='State' className='border border-gray-600 w-72 h-9 pl-4 mt-5 pt-1 rounded-sm' />
          </div>

          <div className='flex gap-2'>
            <input type='text' name='zip' value={formData.zip} onChange={handleChange} placeholder='Zip Code' className='border border-gray-600 w-72 h-9 pl-4 mt-5 ml-20 pt-1 rounded-sm' />
            <input type='text' name='country' value={formData.country} onChange={handleChange} placeholder='Country' className='border border-gray-600 w-72 h-9 pl-4 mt-5 pt-1 rounded-sm' />
          </div>

          <input type='tel' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone Number' className='border border-gray-600 w-[584px] h-9 pl-4 mt-5 ml-20 pt-1 rounded-sm' />
        </div>
      </div>

      <div>
        <div className="ml-32 mt-24 flex flex-col gap-3">
          <div className="mt-16 flex items-center gap-2">
            <h2 className="text-gray-600 font-medium text-xl">CART</h2>
            <h2 className="text-xl">TOTALS</h2>
            <img src={line2} alt="line2" />
          </div>

          <div className="flex justify-between border-b w-[390px] h-10 text-sm">
            <h2 className="font-outfit">Subtotal</h2>
            <h2>${subtotal.toFixed(2)}</h2>
          </div>

          <div className="flex justify-between border-b w-[390px] h-10 text-sm">
            <h2 className="font-outfit">Shipping Fee</h2>
            <h2>${shipping}</h2>
          </div>

          <div className="flex justify-between w-[390px] h-10 text-sm">
            <h2 className="font-outfit">Total</h2>
            <h2>${total.toFixed(2)}</h2>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-gray-600 font-medium text-xl">PAYMENT</h2>
            <h2 className="text-xl">METHOD</h2>
            <img src={line2} alt="line2" />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 border border-gray-700 px-2 w-24 h-8 rounded">
              <input type="radio" name="payment" value="stripe" checked={paymentMethod === 'stripe'} onChange={handlePaymentChange} />
              <span>Stripe</span>
            </label>

            <label className="flex items-center gap-2 border border-gray-700 px-2 w-28 h-8 rounded">
              <input type="radio" name="payment" value="razorpay" checked={paymentMethod === 'razorpay'} onChange={handlePaymentChange} />
              <span>Razorpay</span>
            </label>

            <label className="flex items-center gap-2 border border-gray-700 px-2 w-40 h-8 rounded">
              <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={handlePaymentChange} />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;

import React, { useContext } from 'react'
import line2 from '../images/Rectangle 3605.png'
import deleteimg from '../images/bin_icon.png'
import { ShopContext } from '../component/Context/ShopContext'
import { NavLink } from 'react-router-dom';

function Cart() {
  const { cart, updateCartItem, removeFromCart } = useContext(ShopContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="mt-16">
      {/* Heading */}
      <div className="ml-20 flex items-center gap-2">
        <h2 className="text-gray-600 font-medium text-xl">YOUR</h2>
        <h2 className="text-xl">CART</h2>
        <img src={line2} alt="line2" />
      </div>

      {/* Cart Items */}
      <div className="mt-6 flex flex-col items-center gap-3">
        {cart.length === 0 ? (
          <h2 className="text-gray-600 mt-10">Your cart is empty.</h2>
        ) : (
          cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-row border-t border-b w-[1100px] h-32 items-center px-4"
            >
              <img
                src={Array.isArray(item.image) ? item.image[0] : item.image}
                alt={item.name}
                className="w-20 h-20 object-cover"
              />

              <div className="ml-6 flex-1">
                <h2 className="text-sm font-outfit">{item.name}</h2>

                <div className="flex items-center mt-3">
                  <div className="text-sm font-medium">${item.price}</div>

                  <button
                    className="border bg-gray-100 border-gray-300 w-10 h-10 text-center ml-5"
                  >
                    {item.size || 'M'}
                  </button>

                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => {
                    const value = Math.max(1, parseInt(e.target.value) || 1);
                    updateCartItem(item.id, value);
                  }}
                    className="border-2 w-20 h-8 ml-10 text-center"
                  />

                  <img
                    src={deleteimg}
                    alt="delete"
                    onClick={() => removeFromCart(item.id)}
                    className="w-5 h-5 ml-auto cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Totals */}
      {cart.length > 0 && (
        <div className="ml-[700px] flex flex-col gap-3">
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

          <NavLink to={'/delivery'} className="ml-20 w-56 h-10 flex justify-center items-center bg-black text-white text-sm mt-2">
            <button type="button">Proceed to Checkout</button>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Cart

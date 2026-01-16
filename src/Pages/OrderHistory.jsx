import React from "react";
import { useSelector } from "react-redux";

export default function OrderHistory() {
  const orders = useSelector((state) => state.orders.orders);

  if (!orders || orders.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-gray-500 text-xl">You have no orders yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border"
          >
            <div className="flex justify-between mb-4">
              <div>
                <p className="font-semibold">Order #{index + 1}</p>
                <p className="text-gray-600">Order Date: {order.date}</p>
                <p className="text-gray-600">
                  Delivery By: {order.deliveryDate}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  Payment: {order.paymentType}
                </p>
                <p className="text-lg font-bold text-green-600">
                  ₹{order.totalAmount}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Items</h3>
              <div className="divide-y">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between py-2">
                    <div>
                      <p>{item.title}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

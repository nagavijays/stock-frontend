"use client"
import React from 'react';
import { useState } from 'react';
import axios from "axios";

export default function PlaceOrder({ setReload, user, setUser }) {

    const ORDER_URL = "/api/order";
    const [order, setOrder] = useState({
        stock: "",
        quantity: "",
        price: 0
    });

    const handleChange = (e) => {
        const value = e.target.value;
        console.log("Name" + e.target.name);
        if (e.target.name == "user") {
            console.log("setting user...");
            setUser(value);
        }
        setOrder({
            ...order,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            stockId: order.stock,
            quantity: order.quantity,
            price: order.price,
            userId: order.user,
            orderType : order.orderType
        };
        axios.post(process.env.NEXTJS_BACKEND_BASEURL + ORDER_URL, orderData).then((response) => {
            console.log(response.status, response.data.token);
            setReload(true);
        });
    };

    return (
        <div className="p-8 rounded border border-gray-200">
            <h1 className="font-medium text-3xl">Place Order - Buy/Sell Stocks</h1>
            <p className="text-gray-600 mt-6">Enter stock, qty and price. Supported Order: Limit Order.  </p>

            <form onSubmit={handleSubmit}>
                <div className="mt-8 space-y-6">
                    
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Select User - (Temporarily selecting from drop down until authentication) </label>
                        <select name="user" value={order.user} onChange={handleChange}>
                            <option value="">Select a user</option>
                            <option value="russell">Russell</option>
                            <option value="jack">Jack</option>
                            <option value="john">John</option>
                            <option value="robin">Robin</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Stock Name</label>
                        <select name="stock" value={order.stock} onChange={handleChange}>
                            <option value="">Select a stock</option>
                            <option value="INFY">INFY - Infosys</option>
                            <option value="TCS">TCS - Tata Consultancy</option>
                            <option value="HDFCBAN">HDFCBAN - HDFC Bank</option>
                            <option value="RIL">RIL - Reliance</option>
                        </select>
                    </div>
                    <div>
                        <div class="title py-3 my-auto px-5 text-white text-sm font-semibold mr-3">Order Type</div>
                        <label class="flex radio p-2 cursor-pointer">
                            <input class="my-auto transform scale-125" type="radio" name="orderType" onChange={handleChange}/>
                            <div class="title px-2">Buy </div>
                        </label>

                        <label class="flex radio p-2 cursor-pointer">
                            <input class="my-auto transform scale-125" type="radio" name="orderType" onChange={handleChange}/>
                            <div class="title px-2">Sell </div>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                        <input type="text" name="quantity" id="quantity" value={order.quantity} onChange={handleChange} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="quantity" />
                    </div>

                    <div>
                        <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                        <input type="text" name="price" id="price" value={order.price} onChange={handleChange} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Price" />
                    </div>
                </div>

                <div className="space-x-4 mt-8">
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Place Order</button>

                    {/* <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Reset</button> */}
                </div>
            </form>
        </div>
    )
}

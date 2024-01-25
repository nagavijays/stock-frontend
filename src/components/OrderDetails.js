"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function OrderDetails({ reload, setReload, user, setTransactionDetail}) {

    const ORDER_URL = "/api/order";
    const [orders, setOrders] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.NEXTJS_BACKEND_BASEURL + ORDER_URL + "/" + user);
                setOrders(response.data);
                setLoading(false);
                setReload(false);
            } catch (error) {
                console.error(error);
            }
        };
        if (reload) {
            fetchData();
            setReload(false);
        }
        if (user) {
            fetchData();
        }
    }, [reload, user]);

    const handleFetchTransactions = (e, orderId, orderType) => {
        const value = e.target.value;
        setTransactionDetail({
            orderId : orderId,
            orderType: orderType
        });
    };

    return (
        <div className="p-8 rounded border border-gray-200">
            <h1 className="font-medium text-3xl">Order Details</h1>
            <section className="py-1 bg-blueGray-50">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : orders.length === 0 ? (
                        <p>No Orders.</p>
                    ) : (
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Select to View
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Order Id
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Stock Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Order Type
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Quantity
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Price
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order.id}>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                <label className="flex radio p-2 cursor-pointer">
                                                    <input className="my-auto transform scale-125" type="radio" name="orderType" value={order.id} onClick={e => handleFetchTransactions (e, order.id, order.orderType) }  />
                                                    <div className="title px-2">View Transactions </div>
                                                </label>
                                            </th>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                {order.id}
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {order.stockId}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {order.orderType}
                                            </td>
                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {order.quantity}
                                            </td>
                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {order.price}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {order.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    )}


                </div >
            </section >
        </div >
    )
}


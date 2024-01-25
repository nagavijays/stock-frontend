"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function TransactionHistory({ transactionDetail }) {

    const TRANSACTION_URL = "/api/transaction";
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(process.env.NEXTJS_BACKEND_BASEURL + TRANSACTION_URL + "/" + transactionDetail.orderId + "/" + transactionDetail.orderType);
                setTransactions(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        if(transactionDetail)
            fetchData();

    }, [transactionDetail]);

    return (
        <div className="p-8 rounded border border-gray-200">
            <h1 className="font-medium text-3xl">Trade Transactions</h1>
            <section className="py-1 bg-blueGray-50">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : transactions.length === 0 ? (
                        <p>No Transactions.</p>
                    ) : (
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Transaction Id
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Stock Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Order Id
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Trade Quantity
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Date/Time
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {transactions.map(transaction => (

                                        <tr key={transaction.transactionId}>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                {transaction.transactionId}
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {transaction.stockId}
                                            </td>
                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {transaction.buyerOrderId}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                {transaction.tradedQuantity}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                {transaction.executedTime}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}


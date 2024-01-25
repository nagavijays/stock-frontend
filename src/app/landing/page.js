"use client"

import OrderDetails from '@/components/OrderDetails'
import PlaceOrder from '@/components/PlaceOrder'
import TransactionHistory from '@/components/TransactionHistory'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Landing() {
    const [reload, setReload] = useState(true);
    const [user, setUser] = useState(null);
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <PlaceOrder setReload={setReload} user={user} setUser={setUser}/>
                <OrderDetails reload={reload} setReload={setReload} user={user} />
                <TransactionHistory />
            </div>
        </section>
    )
}

import OrderDetails from '@/components/OrderDetails'
import PlaceOrder from '@/components/PlaceOrder'
import TransactionHistory from '@/components/TransactionHistory'
import React from 'react'

export default function Landing() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <PlaceOrder />
                <OrderDetails />
                <TransactionHistory />
            </div>
        </section>
    )
}

import React from 'react'

export default function PlaceOrder() {
    return (
        <div className="p-8 rounded border border-gray-200">
            <h1 className="font-medium text-3xl">Place Order - Buy/Sell Stocks</h1>
            <p className="text-gray-600 mt-6">Enter stock, qty and price. Supported Order: Limit Order.  </p>

            <form>
                <div className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Stock Name</label>
                        <input type="text" name="stock" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Select stock" />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                        <input type="text" name="quanity" id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="quantity" />
                    </div>

                    <div>
                        <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                        <input type="text" name="price" id="job" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Price" />
                    </div>
                </div>

                <div className="space-x-4 mt-8">
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Place Order</button>

                    <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                </div>
            </form>
        </div>
    )
}

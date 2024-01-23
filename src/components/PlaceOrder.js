import React from 'react'

export default function PlaceOrder() {
    return (
        <div class="p-8 rounded border border-gray-200">
            <h1 class="font-medium text-3xl">Place Order - Buy/Sell Stocks</h1>
            <p class="text-gray-600 mt-6">Enter stock, qty and price. Supported Order: Limit Order.  </p>

            <form>
                <div class="mt-8 space-y-6">
                    <div>
                        <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Stock Name</label>
                        <input type="text" name="stock" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Select stock" />
                    </div>

                    <div>
                        <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                        <input type="text" name="quanity" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="quantity" />
                    </div>

                    <div>
                        <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                        <input type="text" name="price" id="job" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Price" />
                    </div>
                </div>

                <div class="space-x-4 mt-8">
                    <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Place Order</button>

                    <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                </div>
            </form>
        </div>
    )
}

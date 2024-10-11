import React, { useState } from "react";
import Navbar from './components/Navbar'
import ProductSlider from './components/ProductSlider'
import bestSellersData from '../src/data/products.json'


function HomePage() {
    const { bestSellers } = bestSellersData;

    const [products, setProducts] = useState(bestSellers);

    return (
        <>
            <Navbar />

            <section className='bg-custom-radial h-screen'>
                <div className="container mx-auto">
                    <h2 className='font-martel mb-6'> Best Seller</h2>
                    <ProductSlider products={products} />
                </div>
            </section>

        </>
    )
}

export default HomePage

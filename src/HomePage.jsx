import React, { useState } from "react";
import Navbar from './components/Navbar'
import { images } from "./assets/assets";
import ProductSlider from './components/ProductSlider'

function HomePage() {
    const productList = [
        {
            name: "Larry Lightkeeper Lamp",
            power: "Illuminates the truth",
            price: "$40",
            src: images.product1,
            id: 1,
        },
        {
            name: "Olly the Optimist",
            power: "Mood Booster",
            price: "$40",
            src: images.product2,
            id: 2,
        },
        {
            name: "Gizmo the Green Guardian",
            power: "Nature’s Protector",
            price: "$40",
            src: images.product3,
            id: 3,
        },
        {
            name: "Milo the Mischief",
            power: "Radiant Energy",
            price: "$40",
            src: images.product4,
            id: 4,
        },
    ]

    const [products, setProducts] = useState(productList);

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

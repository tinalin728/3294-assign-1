import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import ProductSlider from './components/ProductSlider'
import productsData from '../src/data/products.json'



function HomePage() {
    const { bestSellers, newArrivals } = productsData;

    const [bestSellersProducts, setBestSellersProducts] = useState(bestSellers);
    const [newArrivalsProducts, setNewArrivalsProducts] = useState(newArrivals);

    //update wishlist number in the nav
    const [wishlistCount, setWishlistCount] = useState(0);
    const updateWishlist = (isAdded) => {
        let newCount = wishlistCount;
        if (isAdded) {
            newCount += 1;
        } else {
            newCount = Math.max(newCount - 1, 0)
        }
        setWishlistCount(newCount);
    }



    return (
        <>
            <Navbar wishlistCount={wishlistCount} />

            <section className="bg-custom-radial h-screen overflow-hidden">
                <div className="container mx-auto">
                    <h2 className='font-martel mb-6'> Best Seller</h2>
                    <ProductSlider products={bestSellersProducts} updateWishlist={updateWishlist} />
                </div>
            </section>

            <section>
                <div className="container mx-auto overflow-hidden">
                    <ProductSlider products={newArrivalsProducts} updateWishlist={updateWishlist} />
                </div>
            </section>

        </>
    )
}

export default HomePage

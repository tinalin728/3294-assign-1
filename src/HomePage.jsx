import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import ProductSlider from './components/ProductSlider'
import productsData from '../src/data/products.json'



function HomePage() {
    const { bestSellers, newArrivals } = productsData;

    const [bestSellersProducts, setBestSellersProducts] = useState(bestSellers);

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

    useEffect(() => {
        const storedFavCounts = JSON.parse(localStorage.getItem("favCounts"));
        if (storedFavCounts) {
            setWishlistCount(storedFavCounts);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favCounts", JSON.stringify(wishlistCount))
    }, [wishlistCount]);

    return (
        <>
            <Navbar wishlistCount={wishlistCount} />

            <Hero />

            <section className="overflow-hidden py-6">
                <div className="container mx-auto">
                    <h2 className='font-martel mb-6'> Best Seller</h2>
                    <ProductSlider products={bestSellersProducts} updateWishlist={updateWishlist} />
                </div>
            </section>


        </>
    )
}

export default HomePage

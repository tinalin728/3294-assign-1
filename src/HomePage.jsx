import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import ProductSlider from './components/slick-slider/ProductSlider'
import SliderCard from "./components/slick-slider/SliderCard";

function HomePage() {
    //fetch necessary data from product json data
    // const { bestSellers, newArrivals } = productsData;
    // const monsterIcon = productsData.icons[0]

    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [monsterIcon, setMonsterIcon] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [favorite, setFavorite] = useState([]);

    //Fetch data from products.json
    useEffect(() => {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                const { bestSellers, icons } = data;
                setBestSellingProducts(bestSellers);
                setMonsterIcon(icons[0]);
            });
    }, [])


    //update wishlist number in the nav
    const updateWishlist = (isAdded) => {
        let newCount = wishlistCount;
        if (isAdded) {
            newCount += 1;
        } else {
            newCount = Math.max(newCount - 1, 0)
        }
        setWishlistCount(newCount);
        localStorage.setItem("favCounts", JSON.stringify(newCount))
    }

    useEffect(() => {
        const storedFavCounts = JSON.parse(localStorage.getItem("favCounts"));
        if (storedFavCounts) {
            setWishlistCount(storedFavCounts);
        }
    }, [])


    // favorite button
    const toggleFav = (productId) => {
        let newFavs;

        if (favorite.includes(productId)) {
            // Remove from favorites
            newFavs = favorite.filter((singleFav) => productId !== singleFav);
            //setFavorite(newFavs);
            updateWishlist(false);
        } else {
            // Add to favorites
            newFavs = ([...favorite, productId]);
            updateWishlist(true);
        }

        setFavorite(newFavs);

        //update local storage
        localStorage.setItem("favBtn", JSON.stringify(newFavs));
    };

    //fetch from local storage for fav states
    useEffect(() => {
        const storedFavs = localStorage.getItem('favBtn');
        if (storedFavs) {
            const favorites = JSON.parse(storedFavs);
            setFavorite(favorites);
        }
    }, []);


    return (
        <>
            <Navbar wishlistCount={wishlistCount} />

            <Hero />

            <section className="overflow-hidden py-12 md:py-16">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="-mt-5">
                            <img src={monsterIcon.src} alt={monsterIcon.title} className="max-w-[50px]" />
                        </div>
                        <h2 className='font-martel'> Monthly Favorite Squad</h2>
                    </div>

                    <ProductSlider
                        products={bestSellingProducts}
                        favorites={favorite}
                        toggleFavorite={toggleFav} />
                </div>
            </section>

            <section className="overflow-hidden py-12 md:py-16">
                <div className="container mx-auto">
                    <h2 className="font-martel mb-8">Our Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bestSellingProducts.map((product) => (
                            <SliderCard
                                key={product.id}
                                product={product}
                                isFav={favorite}
                                handleFavClick={toggleFav}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage

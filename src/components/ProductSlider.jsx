import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import SliderArrowNext from "./SliderArrowNext";
import SliderArrowPrev from "./SliderArrowPrev";
import SliderCard from "./SliderCard";

function ProductSlider({ products, updateWishlist }) {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SliderArrowNext />,
        prevArrow: <SliderArrowPrev />,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const [favorite, setFavorite] = useState([]);



    const toggleFav = (productId) => {
        if (favorite.includes(productId)) {
            // Remove from favorites
            const newFavs = favorite.filter((singleFav) => productId !== singleFav);
            setFavorite(newFavs);

            updateWishlist(false);
        } else {
            // Add to favorites
            setFavorite([...favorite, productId]);
            updateWishlist(true);
        }

    };

    // load favs from local storage
    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavs) { setFavorite(storedFavs) }
    }, []);

    // store favs at local storage
    useEffect(() => {
        if (favorite.length > 0) {

            localStorage.setItem('favorites', JSON.stringify(favorite));
        }
    }, [favorite]);



    return (
        <Slider {...settings}>

            {products.map((singleProduct) => {
                return (
                    <SliderCard key={singleProduct.id}
                        product={singleProduct}
                        isFav={favorite}
                        handleFavClick={toggleFav}
                    />
                );
            })}

        </Slider >
    );
}

export default ProductSlider

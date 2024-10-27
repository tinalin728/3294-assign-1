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

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/slider.css';
import SliderArrowNext from "./SliderArrowNext";
import SliderArrowPrev from "./SliderArrowPrev";
import SliderCard from "./SliderCard";

function ProductSlider({ products, favorites, toggleFavorite }) {
    var settings = {
        infinite: true,
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



    return (
        <Slider {...settings}>

            {products.map((singleProduct) => {
                return (
                    <SliderCard key={singleProduct.id}
                        product={singleProduct}
                        isFav={favorites}
                        handleFavClick={toggleFavorite}
                    />
                );
            })}

        </Slider >
    );
}

export default ProductSlider

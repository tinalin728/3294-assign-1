import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import SliderArrowNext from "./SliderArrowNext";
import SliderArrowPrev from "./SliderArrowPrev";
import ProductCard from "./ProductCard";

function ProductSlider(props) {

    const products = props.products;
    console.log(props, products)

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
    const favBtn = (productId) => {
        if (favorite.includes(productId)) {

            console.log(productId);

            const newFavs = favorite.filter((singleFav) => {
                return productId !== singleFav;
            });
            setFavorite(newFavs);

        } else {
            setFavorite([...favorite, productId],);
        }
    }

    return (
        <Slider {...settings}>

            {products.map((singleProduct) => {
                return (
                    <ProductCard key={singleProduct.id}
                        product={singleProduct}
                        isFav={favorite}
                        toggleFavorite={favBtn}
                    />
                );
            })}

        </Slider >
    );
}

export default ProductSlider

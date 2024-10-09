import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../assets/assets";
import './slider.css';


const productList = [

    {
        name: "Larry Lightkeeper Lamp",
        power: "Illuminates the truth",
        price: "$40",
        src: images.product1,
    },
    {
        name: "Olly the Optimist",
        power: "Mood Booster",
        price: "$40",
        src: images.product2,
    },
    {
        name: "Gizmo the Green Guardian",
        power: "Nature’s Protector",
        price: "$40",
        src: images.product3,
    },
    {
        name: "Milo the Mischief",
        power: "Radiant Energy",
        price: "$40",
        src: images.product4,
    },
]

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "white", fontSize: '30px' }} />
        </div>
    );
}


function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white", fontSize: '30px' }} />
        </div>
    );
}

function ProductSlider() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow to="prev" />,
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

    const [products, setProducts] = useState(productList);
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

            {productList.map((product) => {
                return (
                    <div key={product.name} className='shadow-md rounded-xl bg-[#fafafa]'>
                        <div className='p-4'>
                            <div className='relative mb-2'>
                                <button className="text-2xl absolute top-2 text-gray-400" onClick={() => {
                                    favBtn(product.name);
                                }}>
                                    {favorite.includes(product.name) ? <FontAwesomeIcon icon={faHeart} className="text-red-600" /> : <FontAwesomeIcon icon={faHeart} />}

                                </button>
                                <img src={product.src} alt={product.name} />
                            </div>
                            <p className='text-gray-500'>{product.power}</p>
                            <h3 className='mb-4'> {product.name}</h3>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg'>{product.price}</p>
                                <button className='text-2xl border-2 w-12 h-12 rounded-full flex justify-center items-center border-soft-purple text-soft-purple hover:bg-soft-purple hover:text-white transition-all duration-300'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div>

            </div>

        </Slider >
    );
}

export default ProductSlider

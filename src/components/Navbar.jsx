import { useState } from "react";
import logo from "../../public/assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCartShopping, faUser, faBurger } from '@fortawesome/free-solid-svg-icons'


function Navbar({ wishlistCount }) {

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50">
            <div className="border-b py-4 md:py-6">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button className="text-xl md:hidden" >
                                <FontAwesomeIcon icon={faBurger} />
                            </button>

                            <form action="search" >
                                <button type="submit" className="pr-2">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                                </button>
                                <input type="text" placeholder="Search" className="hidden md:inline-block" />
                            </form>
                        </div>

                        <a><img src={logo} alt="logo" className="w-20 md:w-28" /></a>

                        <div className="flex items-center gap-4 lg:gap-6">
                            <a className="hidden md:flex md:justify-between md:items-center md:gap-2">
                                <span> {wishlistCount} </span>
                                <FontAwesomeIcon icon={faHeart} className="text-xl" />
                            </a>

                            <a href="#" >
                                <p className="hidden md:inline-block"> Account</p>

                                <FontAwesomeIcon icon={faUser} className="text-xl inline-block md:hidden" />
                            </a>


                            <a className="flex justify-between items-center gap-2">
                                <p className="hidden md:inline-block"> Cart </p>
                                <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block md:border-b md:py-6">
                <div className="container mx-auto flex justify-center items-center gap-8">
                    <a href="#">Shop</a>
                    <a href="#">Monsters by Age</a>
                    <a href="#">Build Your Monster</a>
                    <a href="#" className="text-soft-blue">Sale</a>
                </div>
            </div>
        </header >
    )
}

export default Navbar

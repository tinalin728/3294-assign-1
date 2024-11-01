import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function AddToCartBtn() {



    return (
        <>
            <button className="relative w-12 h-12 rounded-full z-10 flex items-center justify-center text-soft-purple
                overflow-hidden shadow-md
                before:content-['']
                before:absolute
                before:h-[100px]
                before:w-[100px]
                before:rounded-full
                before:bg-gradient-to-r before:from-violet-400 before:to-pink-100
                before:animate-rotate

                after:content-['']
                after:absolute
                after:bg-white
                after:inset-[3px]
                after:rounded-full

                transition-all duration-500 ease-in-out
                hover:text-white
                hover:after:bg-gradient-to-r hover:after:from-violet-400 hover:after:to-pink-100
                hover:after:inset-0
                
            ">
                <FontAwesomeIcon icon={faPlus} className="text-2xl z-20" />
            </button>


        </>
    )
}

export default AddToCartBtn

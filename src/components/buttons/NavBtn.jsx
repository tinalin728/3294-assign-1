import React from 'react'

function NavBtn({ text, variant, href }) {
    const baseClasses = "border-2 px-6 py-2 inline-flex z-10 group"
    const styles = {
        primary: `relative bg-white border-black`,
        secondary: `relative bg-black border-white text-white`,
    }

    return (

        <div className='inline-flex items-center group relative cursor-pointer'>
            <a href={href} className={`${baseClasses} ${styles[variant]}`}> {text} </a>
            <div className={`absolute w-full h-full border-2 top-2 left-2 z-0 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:left-0 ${variant === 'primary' ? 'border-black' : 'border-white'}`}></div>
        </div>

    )
}

export default NavBtn

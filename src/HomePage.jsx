import React from 'react'
import Navbar from './components/Navbar'
import ProductSlider from './components/ProductSlider'

function HomePage() {
    return (
        <>
            <Navbar />

            <section className='bg-custom-radial h-screen'>
                <div className="container mx-auto">
                    <h2 className='font-martel mb-6'> Best Seller</h2>

                    <ProductSlider />
                </div>
            </section>

        </>
    )
}

export default HomePage

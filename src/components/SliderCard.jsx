import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'

function SliderCard({ product, isFav, handleFavClick }) {

    return (
        <div className='shadow-md rounded-xl bg-[#fafafa]'>
            <div className='p-4'>
                <div className='relative mb-2'>
                    <button className="text-2xl absolute top-2 text-gray-400" onClick={() => {
                        handleFavClick(product.id);
                    }}>
                        {isFav.includes(product.id) ? <FontAwesomeIcon icon={faHeart} className="text-red-600" /> : <FontAwesomeIcon icon={faHeart} />}

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
    )
}

export default SliderCard

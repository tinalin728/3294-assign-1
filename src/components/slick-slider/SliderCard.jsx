import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import AddToCartBtn from '../buttons/AddToCartBtn';


function SliderCard({ product, isFav, handleFavClick }) {

    return (
        <div className='shadow-md rounded-xl bg-soft-grey'>
            <div className='p-4'>
                <div className='relative mb-2'>
                    <button className="text-2xl absolute top-2 text-gray-400" onClick={() => {
                        handleFavClick(product.id);
                    }}>
                        {isFav.includes(product.id) ? <FontAwesomeIcon icon={faHeart} className="text-red-600" /> : <FontAwesomeIcon icon={faHeart} />}

                    </button>
                    <img src={product.src} alt={product.name} />
                </div>
                <span className='text-gray-500'>{product.power}</span>
                <h3 className='mb-4'> {product.name}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-lg'>{product.price}</p>
                    <AddToCartBtn />

                </div>
            </div>
        </div>
    )
}

export default SliderCard

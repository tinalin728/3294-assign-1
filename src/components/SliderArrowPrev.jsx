import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


function SliderArrowPrev(props) {

    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white", fontSize: '30px' }} />
        </div>
    );
}

export default SliderArrowPrev

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function SliderArrowNext(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "grey", fontSize: '30px' }} />
        </div>
    );
}

export default SliderArrowNext

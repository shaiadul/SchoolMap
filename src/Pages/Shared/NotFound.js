import React from 'react';
import notFoundPic from '../../images/404.png'

const NotFound = () => {
    return (
        <div className=''>
            <img className='w-100 h-1/4 mx-auto my-auto' src={notFoundPic} alt="" />
        </div>
    );
};

export default NotFound;
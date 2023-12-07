import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MobileBanner = () => {

    const images = [
        {
            original: 'https://www.ccsinsight.com/wp-content/uploads/2023/07/Mobile_phones_collection.png',
        },
        {
            original: 'https://progressbangladesh.com/en/wp-content/uploads/sites/6/2019/08/buy-second-hand-mobile-e1566879912819.jpg',
        },
        {
            original: 'https://www.paktales.com/wp-content/uploads/2019/10/featured-image-1.jpg',
        },
       
    ];


    return (
        <div className='my-10'>
            <div className=''>
                <ImageGallery  showNav={true}
                 showPlayButton={false} 
                 autoPlay={true}
                 showThumbnails={false}
                showFullscreenButton={false}
                slideInterval={2000}
                items={images} />

            </div>
        </div >
    );
};



export default MobileBanner;
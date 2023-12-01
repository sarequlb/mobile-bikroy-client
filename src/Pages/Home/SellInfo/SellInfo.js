import React from 'react';
import saleImg from '../../../assets/time.jpg'
import text from '../../../assets/text.jpg'
import photo from '../../../assets/image.jpg'
import price from '../../../assets/price.jpg'

const SellInfo = () => {
    return (
        <div className='mb-20'>
            <div className="hero">
                <div className="">
                    <img alt='' src={saleImg} className=" w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold mt-5 mb-5">Sell fast on Mobile Bikroy</h1>
                        <p className="mb-20">Below are some tips on how to post your items</p>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:mx-0 px-5 gap-10'>
                <div>
                    <img src={text} alt='' />
                    <h1 className='mb-5 text-2xl text-red-900'>Add as much detail as you can</h1>
                    <p>Ads with clear details get more views! Include keywords and information that  buyers will be interested in. Remember to  be honest while providing these details</p>
                </div>
                <div>
                    <img  src={photo} alt='' />
                    <h1 className='mb-5 text-2xl text-red-900'>Add great photos</h1>
                    <p>Use clear photos of the item you're selling. Ads with real photos get up to 10 times more  views than ads with catalogue/stock photos.  Make sure the lighting is good and take photos <br/> from different angles.</p>
                </div>
                <div>
                    <img  src={price} alt='' />
                    <h1 className='mb-5 text-2xl text-red-900'>Pick the right price</h1>
                    <p>Everything sells if the price is right! Browse similar ads on Bikroy and choose a competitive price. In general, the lower the price, the higher is the demand. If you are willing to negotiate, be sure to select the Negotiable option while posting the ad.</p>
                </div>
            </div>
        </div>
    );
};

export default SellInfo;
import oppo from '../../../assets/oppo.2.jpg'
import samsung from '../../../assets/samsung.3.jpg'
import google from '../../../assets/google.1.jpg'

const MobileBanner = () => {

    const MobileItems = [
        {
            id: 1,
            image: oppo
        },
        {
            id: 2,
            image: samsung

        },
        {
            id: 3,
            image: google
        },

    ]


    return (
        <div className='my-10'>
            <div className="carousel w-full rounded">
                {
                    MobileItems.map(mobilItem =>
                        <div id={`item${mobilItem.id}`} className="carousel-item w-full" >
                            <img src={mobilItem.image} className="w-full" alt='' />
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div >
    );
};



export default MobileBanner;
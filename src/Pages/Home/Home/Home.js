import React from 'react';
import MobileBanner from '../MobileBanner/MobileBanner';
import Categories from '../Categories/Categories';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import SellInfo from '../SellInfo/SellInfo';
import AddReview from '../AddReview/AddReview';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <MobileBanner></MobileBanner>
            <Categories></Categories>
            <SellInfo></SellInfo>
            {/* <CustomerReviews></CustomerReviews>
            <AddReview></AddReview>
            <Contact></Contact> */}
        </div>
    );
};

export default Home;
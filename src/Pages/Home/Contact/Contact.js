import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='text-center mb-60 shadow-lg py-10'>
            <h1 className='text-3xl mb-2'>Questions? Get in touch!</h1>
            <p className='mb-5'>Every day from 10:00 AM to 8:00 PM</p>

            <div className='flex justify-center items-center gap-10'>
                <div className='border-r-2 px-10 py-3'>
                    <div className='flex justify-center items-center gap-2 mb-3'>
                        <FaPhone className='text-primary text-2xl'></FaPhone>
                        <p className=''>Call us</p>
                    </div>
                    <p>01537417341</p>
                </div>
                <div>
                    <div className='flex justify-center items-center gap-2 mb-3'>
                        <MdEmail className='text-primary text-2xl'></MdEmail>
                        <p>Email Us</p>
                    </div>
                    <p>mobilebikroy.biz.com</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;
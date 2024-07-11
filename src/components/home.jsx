// src/components/Layout.js
import React from 'react';
import Icon from './icon';

import productImage from '../assets/images/productImage.png';
import Navigation from './navigation';
import RadioButton from './radio';
import RadioButtons from './radio';

const HomePage = (props) => {
    const data = [
        { value: 'Option 1', image: 'https://example.com/image1.jpg', text: 'Option 1' },
        { value: 'Option 2', image: 'https://example.com/image2.jpg' },
        { value: 'Option 3', text: 'Option 3' },
    ];
    const handleSelect = (value) => {
        console.log(`Selected: ${value}`);
    };
    return (

        <>
            <div className='container'>
                <section className='section'>
                    <div className='row align-items-center'>
                        <div className='col-2 d-flex flex-column gap-4'>
                            <p className='leadHeading'>In stock</p>
                            <h2 className='heading'>    Refurbished iPhone 14 Pro</h2>
                            <div className='ratingContainer'>
                                <p>Reviews: 4/5</p>
                                <div className='starConatiner'>
                                    <Icon color="#EFD67C" size={22} icon="star" />
                                    <Icon color="#EFD67C" size={22} icon="star" />
                                    <Icon color="#EFD67C" size={22} icon="star" />
                                    <Icon color="#929292" size={22} icon="star" />
                                </div>
                            </div>
                            <p>
                                Bringing you Dynamic Island, access your music while scrolling social media. Apple iPhone 14 Pro colours - Deep Purple, Gold, Silver and Space Black
                            </p>

                           
                        </div>
                        <div className='col-3'>
                            <img src={productImage} alt="productImage"  className='w-100'/>
                        </div>
                        <div className='col-3'>


                            <RadioButtons></RadioButtons>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
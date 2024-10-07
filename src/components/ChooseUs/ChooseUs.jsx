import React from 'react'

import {FiCoffee } from 'react-icons/fi'
import { GiKnifeFork } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";


export default function ChooseUs() {
  return (
    <div className='py-5' style={{backgroundColor:'rgb(249 250 251)'}}>
      <div className="container py-5">
        <h2 data-aos="fade-in" className="text-center text-dark text-capitalize fs-2">why choose us</h2>
        <div className="row my-5">
            <div data-aos="fade-up" data-aos-delay="500" className="col-md-6 col-xl-3">
                <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                    <p className='text-gray fw-semibold'>Enjoy a variety of freshly brewed coffee and refreshing beverages.</p>
                    <p className='rotate-90 text-primary fw-bold fs-3'>....</p>
                    <FiCoffee className='text-primary fs-1'/>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="500" className="col-md-6 col-xl-3">
                <div className='d-flex flex-column-reverse text-center justify-content-center align-items-center'>
                    <p className='text-gray fw-semibold'>Indulge in a delightful dining experience with carefully crafted dishes.</p>
                    <p className='rotate-90 text-secondary fw-bold fs-3'>....</p>
                    <GiKnifeFork className='text-secondary fs-1'/>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="col-md-6 col-xl-3">
                <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                    <p className='text-gray fw-semibold'>Explore our diverse menu, offering a selection of appetizers, mains, and desserts.</p>
                    <p className='rotate-90 text-primary fw-bold fs-3'>....</p>
                    <MdRestaurantMenu className='text-primary fs-1'/>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="500" className="col-md-6 col-xl-3">
                <div className='d-flex flex-column-reverse text-center justify-content-center align-items-center'>
                    <p className='text-gray fw-semibold'>Order your favorite meals with ease and enjoy fast, convenient service.</p>
                    <p className='rotate-90 text-secondary fw-bold fs-3'>....</p>
                    <FaUtensils className='text-secondary fs-1'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

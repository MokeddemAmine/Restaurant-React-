import React from 'react'
import {FaPhone} from 'react-icons/fa6';
import {IoLocationSharp } from 'react-icons/io5'
import {MdEmail} from 'react-icons/md';

export default function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer className='mt-3'>
      <div data-aos="fade-down" className="container bg-primary py-3 px-3 px-lg-5">
            <h2 className="text-center fs-2 text-capitalize text-white my-3">contact us</h2>
            <div className="row my-4">
                <div className="col-md-4 text-center text-white p-3 p-md-5">
                    <IoLocationSharp className='display-4'/>
                    <p className='mt-3'>#133, 2nd Main, ghazaouet city, 13002, Tlemcen Algeria</p>
                </div>
                <div className="col-md-4 text-center text-white p-3 p-md-5">
                    <MdEmail className='display-4'/>
                    <p className="mt-3">
                        <span className="d-block">info@food.com</span>
                        <span className="d-block">dz@food.com</span>
                    </p>
                </div>
                <div className="col-md-4 text-center text-white p-3 p-md-5">
                    <FaPhone className='display-4'/>
                    <p className="mt-3">
                        <span className="d-block">+213 655069573 - Sales & Services</span>
                        <span className="d-block">+213 655069573 - Whatsapp & Telegram</span>
                    </p>
                </div>
            </div>
            <div className="my-3 bg-white w-100" style={{height:'2px'}}></div>
            <div className="row my-2 align-items-center justify-content-between">
                <div className="col-md-6 text-center text-md-start text-white text-uppercase">
                    &copy; {year} m.m.amine all right reserved
                </div>
                <div className="col-md-6 text-center justify-content-center mt-3 mt-md-0 justify-content-md-end pages d-flex gap-4">
                    <a href="" className='text-capitalize text-white'>privacy policy</a>
                    <a href="" className='text-capitalize text-white'>terms & conditions</a>
                </div>
            </div>
      </div>
    </footer>
  )
}

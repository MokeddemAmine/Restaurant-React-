import React from 'react'
import PrimaryButton from '../Shared/PrimaryButton'
import lemon from '../../assets/banner/lemon.png';
import kiwi from '../../assets/banner/kiwi.png';
import apple from '../../assets/banner/apple.png';
import tomato from '../../assets/banner/tomato.png';
import leaf from '../../assets/banner/leaf.png';

export default function Banner() {
  return (
    <>
      <div className="container py-5">
        <div className="position-relative">

        
        <h2 data-aos="fade-up" data-aos-delay="300" className="z-1 fw-semibold text-dark fs-2 text-capitalize text-center my-5">taste the healthy difference</h2>
        <div data-aos="fade-up" data-aos-delay="500" className="row py-5 z-1">
            <div className="col-md-6 fw-semibold">
                We know that <span className="text-primary">time</span> is the greatest value in the modern world. Our healthy meal plan delivery service Good Food in Tlemcen is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthly meals.
            </div>
            <div className="col-md-6"></div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="row py-5 z-1">
            <div className="col-md-6"></div>
            <div className="col-md-6 fw-semibold mt-4 mt-md-0">
                We know that <span className="text-primary">time</span> is the greatest value in the modern world. Our healthy meal plan delivery service Good Food in Tlemcen is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthly meals.
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="my-5 py-5 d-flex justify-content-center">
            <PrimaryButton value="choose your meal plan"/>
        </div>
        {/* fruits section  */}
        <div id="fruits">
            <div className="position-absolute z-n1 opacity-75 leaf">
                <img src={leaf} alt="" data-aos="fade-right" />
            </div>
            <div className="position-absolute z-n1 opacity-75 lemon">
                <img src={lemon} alt="" data-aos="fade-left" />
            </div>
            <div className="position-absolute z-n1 opacity-75 tomato">
                <img src={tomato} alt="" data-aos="fade-right" />
            </div>
            <div className="position-absolute z-n1 opacity-75 apple">
                <img src={apple} alt="" data-aos="fade-left" />
            </div>
            <div className="position-absolute z-n1 opacity-75 kiwi">
                <img src={kiwi} alt="" data-aos="zoom-in" />
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

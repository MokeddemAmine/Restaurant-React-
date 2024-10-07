import React from 'react'
import HeroImg from '../../assets/hero.png';
import HeroBack from '../../assets/hero-back.png';
import PrimaryButton from '../Shared/PrimaryButton';

const backStyle = {
    backgroundImage:`url(${HeroBack})`,
    backgroundRepear:"no-repeat",
    backgroundSize:'cover',
    width:'100%',
    height:'100%',
}

export default function Hero() {
  return (
    <>
      <div className="relative z-n1" style={backStyle}>
        <div className="container py-4">
            <div className="row align-items-center" style={{minHeight:'600px'}}>
                <div className="text dark order-md-1 order-2 col-md-6">
                    <h1 data-aos="fade-up" className='my-4 text-capitalize fs-1 fw-semibold'>
                       fresh & healthy meal plan <span className="text-secondary display-4" style={{fontFamily:'Ephesis'}}> delivery</span> in tlemcen 
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                        Delicious Meals <br/>
                        Delivered to Your Door <br/>
                        From 140$/week
                    </p>
                    <div className="button" data-aos="fade-up" data-aos-delay="500">
                      <PrimaryButton value="choose you meal plan"/>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" className="order-md-2 order-1 col-md-6">
                    <img src={HeroImg} className='w-100 h-100'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

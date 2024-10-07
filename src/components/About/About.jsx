import React from 'react'
import BgImage from '../../assets/about/polygon.png';
import vector from '../../assets/about/vector.png';
import SecondaryButton from '../Shared/SecondaryButton';
const BGStyle = {
    backgroundImage:`url(${BgImage})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    width:'100%',
    height:'100%',
    position:'relative',
}
export default function About() {
  return (
    <div className="about" style={BGStyle}>
        <div className="container position-relative z-3 py-5" style={{minHeight:'500px'}}>
            <h2 className="text-center text-white py-3 fs-2 fw-semibold my-5 text-capitalize">about us</h2>
            <div className="content bg-white p-4 rounded">
                <p> Welcome to Our Restaurant, where we bring passion and flavor to every plate. Located in the heart of Tlemcen, our restaurant offers a unique dining experience that combines fresh, locally-sourced ingredients with innovative culinary techniques. Whether you’re joining us for a casual lunch, a romantic dinner, or a family celebration, our warm atmosphere and exceptional service will make every visit memorable. We pride ourselves on crafting dishes that cater to all tastes, offering a diverse menu that blends traditional flavors with modern flair. Come and enjoy the perfect meal, tailored just for you!</p>
                <div className="d-flex justify-content-center my-4">
                    <SecondaryButton backColor="#e83667"/>
                </div>
            </div>
            <div className="bg-vector position-absolute top-0 left-0 right-0">
                <img src={vector} alt="" className='w-100' />
            </div>
        </div>
    </div>
      

  )
}

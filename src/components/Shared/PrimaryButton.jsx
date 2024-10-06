import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryButton = (props) => {
  return (
    <>
      <div className="d-flex align-items-center" id='primary-btn'>
        <button className="bg-primary text-white px-3 py-2 text-capitalize border-0">{props.value}</button>
        <FaArrowRight className='bg-primaryDark text-white p-2 fa-arrow-right-btn'/>
      </div>
    </>
  )
}

export default PrimaryButton

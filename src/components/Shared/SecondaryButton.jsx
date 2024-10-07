import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function SecondaryButton(props) {
  return (
      <button style={{backgroundColor:props.backColor}} className="text-capitalize border-0 text-white d-flex align-items-center gap-2 px-3 py-1 fs-6" id='my-account-btn'>
        <FaUser/>
        my account
      </button>
  )
}

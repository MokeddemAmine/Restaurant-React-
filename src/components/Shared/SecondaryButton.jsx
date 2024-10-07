import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { handleContext } from '../../App';

export default function SecondaryButton(props) {
  const handleLogin = useContext(handleContext);

  return (
      <button onClick={handleLogin} style={{backgroundColor:props.backColor}} className="text-capitalize border-0 text-white d-flex align-items-center gap-2 px-3 py-1 fs-6" id='my-account-btn'>
        <FaUser/>
        my account
      </button>
      
  )
}

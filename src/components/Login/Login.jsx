import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

export default function Login({toggleLogin,setToggleLogin}) {
  return (
    <div>
        { toggleLogin && 
            <div className='vw-100 vh-100 z-2 position-fixed top-0 start-0 login'>
            <div className="position-fixed z-3 left-50 top-50 start-50 shadow-sm bg-white rounded p-3 form">
              <div className="d-flex align-items-center justify-content-between">
                  <h2 className="fs-4 fw-bold text-dark text-capitalize">login</h2>
                  <IoCloseOutline className='fs-4 cursor-pointer' onClick={() => setToggleLogin(false)}/>
              </div>
              <form action="" className="mt-3">
                  <input type="email" placeholder='Enter Email' className="form-control mb-3" />
                  <input type="password" placeholder='Enter Password' className="form-control mb-3" />
                  <div className="d-grid">
                  <button type="submit" className="btn btn-primary text-white text-capitalize" onClick={() => setToggleLogin(false)} >login</button>
                  </div>
              </form>
              <div className="mt-4">
                  <p className="text-center text-capitalize">or login with</p>
                  <div className="d-flex justify-content-center gap-2">
                      <FaFacebook className='fs-2 cursor-pointer facebook-icon'/>
                      <FaGoogle className='fs-2 cursor-pointer google-icon'/>
                  </div>
              </div>
            </div>
          </div>
        }

    </div>
    
  )
}

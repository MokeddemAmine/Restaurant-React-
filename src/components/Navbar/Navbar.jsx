import React from 'react'
import {FaBars, FaCaretDown, FaUser} from 'react-icons/fa';

const NavLinks = [
    {
        id:1,
        name:'home',
        link:'/#',
    },
    {
        id:2,
        name:'about',
        link:'/#',
    },
    {
        id:3,
        name:'contact',
        link:'/#',
    }
];

const DropDownLinks = [
    {
        id:1,
        name:'Vegetagles',
        link:'/#',
    },
    {
        id:2,
        name:'Fruits',
        link:'/#',
    },
    {
        id:3,
        name:'Grains',
        link:'/#',
    }
]
export default function Navbar() {
  return (
    <>
    
      <div className="navbar navbar-expand-lg bg-white shadow">
        <div className="container d-flex justify-content-between align-items-center py-4 py-sm-3">
            {/* logo section  */}
            <div className="fw-bold text-capitalize fs-3">logo</div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-links" aria-controls="nav-links" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars/>
            </button>
            {/* navliks section  */}
            <div className='collapse navbar-collapse' id='nav-links'>
                <ul className='navbar-nav ms-auto list-unstyled d-flex align-items-center gap-5 mb-0' id='navlinks'>
                    {
                        NavLinks.map(({id,name,link}) => (
                            <li key={id}>
                                <a href={link} className='text-dark text-capitalize d-inline-block fw-semibold hover-link1'>{name}</a>
                            </li>
                        ))
                    }
                    {/* dropdown  */}
                    <li className='cursor-pointer dropdown-link position-relative'>
                        <a href="/#" className='text-dark text-capitalize d-inline-block fw-semibold hover-link1'>
                            <div className="d-flex align-items-center gap-1 py-2">
                                DropDown 
                                <span>
                                    <FaCaretDown className='caret'/>
                                </span>
                            </div>
                            
                        </a>
                        {/* dropdown section  */}
                        <div className='drop-links position-absolute z-3 bg-white d-none shadow-sm p-2 rounded top-100 lef-0 right-0'>
                            <ul className="list-unstyled">
                                {DropDownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='fs-6 d-inline-block w-100 rounded text-dark p-2 hover-link2'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    {/* login button section  */}
                    <li>
                        <button className='text-capitalize bg-secondary border-0 text-white d-flex align-items-center gap-2 px-3 py-1 fs-6' id='my-account-btn'>
                            <FaUser/>
                            my account
                        </button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

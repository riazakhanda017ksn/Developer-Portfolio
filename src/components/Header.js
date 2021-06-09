import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="flex justify-between py-3 px-5 absolute w-full text-white">
        <div className="logo">
          <h2 className="text-1xl lg:text-1xl">
            <Link to="/">MernStack</Link>
          </h2>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/projects">Services</Link>
            </li>
            <li>
              <Link
                to="/hire"
               
              >
               Buy Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className=" overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl text-center font-bold text-right mb-10 lg:text-center lg:text-5xl lg:px-56 ">
            We Create <span className="text-blue-500">Awesome Website</span> Which You Want
           
          </h1>

          <div className="ml-auto lg:ml-0">
            <Link
              to="/hire"
              className="mr-5 bg-blue-500 p-3 px-5 rounded-full font-semibold transition-all hover:bg-red-500"
            >
            Choose Website
            </Link>
            <Link
              to="/projects"
              className="mr-5 bg-red-500 p-3 px-5 rounded-full font-semibold transition-all hover:bg-blue-500"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase

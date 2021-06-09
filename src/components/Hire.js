import React from 'react'

const Hire = () => {
  return (
    <>
      <section className="showcase ">
        <div className="pt-5  overlay flex flex-col items-center justify-center ">
        

            <form
              name="Feedback form"
              method="post"
              className="mt-5 flex flex-col bg-red-600 py-5 px-10 rounded lg:w-5/12"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-red-500 text-RED-500 placeholder-red-500 font-semibold"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-red-500 text-Red-500 placeholder-red-500 font-semibold"
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Enter message"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-red-500 text-red-500 placeholder-red-500 font-semibold"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-red-800"
              />
            </form>
          </div>
       
      </section>
    </>
  )
}

export default Hire

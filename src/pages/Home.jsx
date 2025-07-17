import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col place-content-center sm:flex-row mt-10 m-2 p-2 gap-3'>
       <div className='flex flex-col place-content-center'>
          <h2 className='text-4xl font-bold text-center text-orange-500'>
            Welcome To Omega solutions
          </h2>
          <p className='text-2xl font-semibold text-center'>
             We are passionate developers building scalable
              and user-friendly web applications using modern technologies 
              like React, Node.js, and MongoDB.
          </p>
       </div>
       
       <div>
           <img className='w-[1500px] rounded-md' src="https://codequotient.com/blog/wp-content/uploads/2023/02/Is-a-Front-End-Developer-Course-Enough-for-Web-Development.jpg" alt="" />
       </div>

    </div>
  )
}

export default Home
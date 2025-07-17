import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'

const UserPage = () => {
  const [data,setData] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
 
  const fetchData=async()=>{
   try{
    setIsLoading(true)
     const responce =await fetch('https://jsonplaceholder.typicode.com/users/1')
    const result = await responce.json()
    
    setData(result)
    

   }catch(error){
    console.log("cannot fetch data",error)
   }finally{
    setIsLoading(false)
   }
  
  }

  useEffect(()=>{
  fetchData()
 },[])

 if(isLoading) return (<div className='text-orange-500 flex place-content-center mt-52 '>Loading....</div>)

  return (
    <div className='flex place-content-center mt-40'>
      {data ?(
        <div className='flex flex-col place-content-center gap-4 rounded-lg shadow-lg p-6'>
           <div className='flex place-content-center'>
             <FaUser className='text-8xl text-center text-orange-500'/>
           </div>
           <div className='flex flex-col place-content-center'>
             <h2 className='text-2xl font-semibold p-4'><span className='text-orange-500'>Name:</span> {data.name}</h2>
             <p className='text-2xl font-semibold p-4'><span className='text-orange-500'>Email:</span> {data.email}</p>
             <p className='text-2xl font-semibold p-4'><span className='text-orange-500'>Phone:</span> {data.phone}</p>
           </div>
        </div>
      ):(
        <div>
          <p>No user found</p>
        </div>
      )}
       
        
    </div>
  )
}

export default UserPage
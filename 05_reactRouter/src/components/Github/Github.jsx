// import React, {useEffect,useState} from 'react'

// const Github = () => {
// const [data, setData] =useState({})
//     useEffect(() => {
//         fetch( "https://api.github.com/users/bregman-arie")
//         .then (response => response.json())
//         .then (data => {
//             console.log(data)
//             setData(data)
//         })
      
    
      
//     }, [])
    

//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
//       Github followers: {data.followers}
//       <img src={data.avatar_url} alt="profile" />
//     </div>
//   )
// }

// export default Github

import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch("https://api.github.com/users/bregman-arie")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])


  return (
    <div>
    <div className='flex items-center justify-center gap-4 m-4 bg-gray-600 text-white p-4 rounded-xl shadow-lg'>
      
      <img
        src={data.avatar_url}
        alt="profile"
        className="w-12 h-12 rounded-full border-2 border-[#016A5C"
      />

      <p className='text-xl font-semibold'>
        Github Followers: {data.followers}
      </p>
      

    </div>
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

  {/* Image */}
  <img
    src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?ga=GA1.1.1877215758.1691305633&semt=ais_hybrid"
    alt="Programming illustration"
    className="w-full md:w-1/2 h-auto rounded-xl object-cover max-h-[320px]"
  />

  {/* Text Content */}
  <div className="md:w-1/2 space-y-4 text-center md:text-left">
    
    <h2 className="text-3xl font-bold text-gray-800">
      Modern Web Development
    </h2>

    <p className="text-gray-600 leading-relaxed">
      Building scalable and high-performance web applications using modern 
      technologies like React, JavaScript, and Tailwind CSS. Focused on 
      creating clean UI, efficient code, and seamless user experiences.
    </p>

    <button className="bg-blue-600  px-6 py-2 rounded-lg hover:bg-[#016A5C] transition">
      Learn More
    </button>

  </div>

</div>
    
    </div>
  )
}

export default Github

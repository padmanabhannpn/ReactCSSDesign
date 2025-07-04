import { useState } from 'react'
import './App.css'

function App() {
 
  return (
    <>
     
     {/* Background Color
     
     bg-[color]-[shade]
     */}


{/* <div style={{height:100,width:100, backgroundColor:'red'}}></div>

<div className='divelement'> Text </div>


 <div className="bg-cyan-300 p-10 m-10 text-white text-2xl flex gap-2">

<p className='bg-red-700 p-5'>Test OneTest One</p>
<p className='bg-red-700 p-5'>Test Two</p>
<p className='bg-red-700 p-5'>Test Three</p>
<p className='bg-red-700 p-5'>Test Four</p>
<p className='bg-red-700 p-5'>Test Five</p>
<p className='bg-red-700 p-5'>Test Six</p>

 </div> */}

 <div className="min-h-screen bg-[#2A7A5A] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold italic text-center mb-4 text-blue-600">
          Responsive Tailwind Card
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-100 p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Card One</h2>
            <p className="text-gray-700">This is a responsive card.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Card Two</h2>
            <p className="text-gray-700">Try resizing your screen.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Card Three</h2>
            <p className="text-gray-700">Responsive layout using Tailwind.</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App

import React from 'react'

function Hero() {
  return (
    <div className={`hero-section text-center h-[100vh]`}>
        <h1 className='text-primary text-[5rem] font-extrabold'>We Build Your <br /> SoftWare<br /><span className='text-primary'>.</span></h1>
        <p className='w-[60%] mx-auto leading-6 text-center'>Lorem ipsum dolor sit amet consectetur adi excepturi officia saepe! Vel porro veritatis suscipit facere!</p>
        <button className='btn btn-primary mt-4'>Get Started</button>
    </div>
  )
}

export default Hero
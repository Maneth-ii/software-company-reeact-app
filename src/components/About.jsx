import React from 'react'

function About() {
  return (
    <section className=' h-[100vh] mt-20'>
            <div className='flex w-90 justify-between px-10 items-center gap-6'>

            <div className='flex-1'>
                <h1 className='font-bold text-3xl mb-4'>RotoLabs</h1>
                <p className='leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, soluta facere enim est illum ipsa cere suscipit. Eveniet fugiat reprehenderit quo. A eveniet doloremque repudiandassimus adipisci perferendis accusantium tenetur ex labore magnam ullam quae dolore saepe sapiente eaque! Perferendis fugit corrupti molestias ducimus ipsa, ratione modi magnam sunt labore mollitia.</p>
            </div>

            <img className='w-[50%] rounded-xl' src="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
           
        
    </section>
  )
}

export default About
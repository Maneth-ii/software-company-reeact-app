import React from 'react'

function Navbar({setTheme}) {
  return (
    <div className='md:flex p-3 mx-10'>
        <h1 className='first-letter:text-primary font-extrabold text-3xl text-center'>RotoLabs</h1>
        <ul className='text-center rounded-md md:flex justify-center md:border-none gap-10 w-full border-2 border-teal-300'>
            <li className='py-2 '>Home</li>
            <li className='py-2 '>About</li>
            <li className='py-2 '>Contact</li>
        </ul>
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn text-s rounded-full m-1">Theme</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={()=> setTheme("dark")}><a>Dark</a></li>
                <li onClick={()=> setTheme("light")}><a>Light</a></li>
                <li onClick={()=> setTheme("winter")}><a>Winter</a></li>
                <li onClick={()=> setTheme("cupcake")}><a>Cupcake</a></li>
                <li onClick={()=> setTheme("luxury")}><a>LUXURY</a></li>
                <li onClick={()=> setTheme("dracula")}><a>Dracula</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import EngCard from './EngCard'

function OurEng() {
    const Eng = [
        {
            name:"andrei"
            ,image:"https://images.ctfassets.net/aq13lwl6616q/3jyqzyDMgKDqWLua869Q0Z/86124d5fbcfc747a0348e631aba7c0f6/andrei.jpg?w=300&h=299&fl=progressive&q=100&fm=jpg&bg=transparent"
            ,desc:"Fullstack Developer"
            ,exp:"over 10 years of experience"
        },
        {
            name:"kevin powell"
            ,image:"https://pbs.twimg.com/profile_images/1506979715919364119/zibgmk12_400x400.jpg"
            ,desc:"frontend Developer"
            ,exp:"over 20 years of experience"
        },
        {
            name:"jeff delaney"
            ,image:"https://pbs.twimg.com/profile_images/747456997390356480/lSJzA_gK_400x400.jpg"
            ,desc:"Fullstack Developer"
            ,exp:"over 10 years of experience"
        },
        {
            name:"the Primeagen"
            ,image:"https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb@2x.jpg"
            ,desc:"Backend Developer"
            ,exp:"over 10 years of experience"
        }
    ]
  return (
    <div>
         <h1 className='text-center mx-auto text-[3rem] mt-20 font-bold'>Our Engineers</h1>
         <div className='grid grid-cols-3 mt-10'>
            <EngCard Eng = {Eng}/>
         </div>
    </div>
  )
}

export default OurEng
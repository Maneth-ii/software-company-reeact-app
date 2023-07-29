import React from 'react'
import Card from './Card'

function Services() {
    const services = [
        {
            title:"App Development",
            image:"https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            description:'android and ios app development',
            Technologies:['Swift','Kotlin' , 'Dart' , 'React Native']
        },
        {
            title:"Web Development",
            image:"https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            description:'Modern full stack web delopment',
            Technologies:['React','NextJs' , 'Vue' , 'Svelte']
        },
        {
            title:"Backend Development",
            image:'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            description:'Serverside Development with modern powerfull tools and libraries',
            Technologies:['Nodejs' , 'Rust', 'GO']
        }
    ]
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-20 min-h-[90vh] w-[80%]'>
        <h1 className='font-bold text-[5rem] text-center col-span-3 mb-2'>Our Services</h1>

        {services.map((ser) => <Card ser={ser}/>)}
    </section>
  )
}

export default Services
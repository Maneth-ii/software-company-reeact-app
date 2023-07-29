import React from 'react'

function Card({ser}) {
  return (
    <div className="card card-bordered w-80 bg-base-100 hover:shadow-2xl hover:translate-x-1 translate-y-1 transition-all  shadow-xl">
    <figure><img src={ser.image} alt={ser.title} /></figure>
    <div className="card-body relative">
        <h2 className="card-title">{ser.title}</h2>
        <p>{ser.description}</p>
        {
            ser.Technologies.map((each)=>{
                return(
                    <div className="badge badge-neutral my-3">{each}</div>
                )
            })
        }
        <div className="card-actions justify-end">
        <button className="btn btn-outline w-full">{'Buy'}</button>
        </div>
    </div>
    </div>
  )
}

export default Card
import React from 'react';

function EngCard({ Eng }) {
  return (
    Eng.map((aEng) => {
      return (
        <div key={aEng.name} className="card text-center card-bordered w-100 mb-20 mx-auto bg-base-200 bottom-2 hover:shadow-2xl hover:translate-x-1 translate-y-1 transition-all  shadow-xl">
          <figure ><img className='w-[300px]' src={aEng.image} alt={`${aEng.name}'s picture`} /></figure>
          <div className="card-body text-center  relative">
            <h2 className="text-2xl font-bold  card-title">{aEng.name}</h2>
            <p>_{aEng.desc}_</p>
            <h6 className='text-sm'>*{aEng.exp}</h6>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      );
    })
  );
}

export default EngCard;

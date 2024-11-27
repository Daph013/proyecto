import React from 'react'
import Hero from './Hero'

const Inicio = () => {
  return (
    <>
    <Hero/>
    <div className='text-center'>
    <h1 className='py-5 mx-auto text-bold'> Deja tu Review</h1>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
</div>
    </>
  )
}

export default Inicio
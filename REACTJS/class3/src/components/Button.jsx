import React from 'react'

const Button = (props) => {
  console.log(props);
  return (
    <div className='my-2 py-4'>
      <h2 className='h-fit w-fit mx-8 bg-emerald-600 text-2xl py-2 text-amber-50 rounded px-6 font-bold'>{props.text}</h2>
    </div>
  )
}

export default Button

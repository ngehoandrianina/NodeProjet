import React from 'react'

const Toast = ({Success,Message}) => {
    const bg = Success ? 'bg-[#25f333]' : 'bg-[#f63d3d]'
  return (
    <>
    {
    <div className={` ${bg} fixed bottom-2 right-2 border w-100 h-20 text-center p-5 rounded-xl text-white`}>
        <h1 className='font-light text-2xl'>{Message}</h1>
    </div>
    }
    </> 
  )
}

export default Toast
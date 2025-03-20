import React, { useEffect, useState } from 'react'

const Modification = ({setShow,NumCompt,Nom,Solde}) => {
    
  return (
    <>
    <div class="absolute right-29 -mt-26.5">
    <div class="bg-[#fff] px-5 py-5 rounded-t-none rounded-lg border lg:w-[300px] border-gray-400 max-w-lg lg:max-w-[768px]">
      <h4 class="text-xl font-bold">
        Modification : {numcompt}
      </h4>
      <form class="py-5">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 ">
          <div className=''>
            <label class="block font-semibold text-black">
              Nom
            </label>
            <input type="text" 
            onChange={(e)=>setNom(e.target.value)}
            placeholder='Nom'  className="mt-2 block w-full h-12 rounded-md border border-gray-400 shadow-sm  sm:text-sm md:text-base pl-3" />
          </div>
          <div className=''>
            <label class="block font-semibold text-black">
              Solde
            </label>
            <input  type="number"
            onChange={(e)=>setSolde(e.target.value)} value={solde}
             placeholder='Solde' class="mt-2 block w-full h-12 rounded-md border border-gray-400 shadow-sm  sm:text-sm md:text-base pl-3"  />
          </div>
        </div>
      </form>
      <div class="flex justify-end ">
        <button onClick={()=>setShow(false)} type="button" className="mr-3 px-5 py-2 border border-gray-400 rounded-md shadow-sm font-semibold text-black bg-white hover:bg-gray-100">
          Cancel
        </button>
        <button type="submit" className="px-5 py-2 border border-transparent rounded-md shadow-sm font-semibold text-white bg-black hover:bg-gray-800">
          Submit
        </button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Modification
import React, { useState } from 'react'
import Modification from './Modification'

const Row = ({NumCompt,Nom,Solde,setShow}) => {
 
    
  return (
   <>
    <tr className='border-b-2 border-gray-400'>
    <td class="px-8 py-5 w-[25%] ">
    {NumCompt}
    </td>
    <td class="px-8 py-5 text-gray-500 w-[25%]">
     {Nom}
    </td>
    <td class="px-8 py-5 text-gray-500 w-[25%]">
     {Solde}
    </td>
    <td class="px-8 py-5 text-gray-500 w-[15%]">
      {Solde < 1000 ? 'insufisant' : Solde > 5000 ? 'Elelve':'Moyen'}
    </td>
    <td class="px-4 py-5 flex">
    <button onClick={()=>GetUpdate(numcompt,nom,solde)} className='text-blue-700 m-2'><img src='icone/edit.png' width={20} /></button>
    <button href="javascript:void(0);" className='text-red-600 m-2'><img src='icone/trash.png' width={20} /></button>
    </td>
    </tr>
   </> 
  )
}

export default Row
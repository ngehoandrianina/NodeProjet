import React, { useEffect, useState } from 'react'
import AjoutModif from './AjoutModif'
import Stat from './Stat'
import Modification from './Modification'
import Row from './Row'
import axios from 'axios'
const ListeUser = ({RefreshApp}) => {
  const [show,setShow] = useState(false)
  const [client,setClient] = useState([])
  const [refresh,setRefresh] = useState(false)
 
  useEffect(()=>{
    fetch('http://localhost:8081/GetAllClient')
    .then(re=>re.json())
    .then(res=>{
      setClient(res)
    })
    .catch(err=>{
      console.error(err)
    })
    RefreshApp((prev)=>!prev)
  },[refresh])
  const [numcompt,setNumcompt] = useState('')
  const [nom,setNom] = useState('')
  const [solde,setSolde] = useState('')
  const [modif,setModif] =useState(false)

  const GetUpdate = (num,nom,solde) =>{
    setNumcompt(num)
    setNom(nom)
    setSolde(solde)
    setShow(true)
    setModif(true)
}
  const Delete = (num) =>{
      const id = num
      fetch(`http://localhost:8081/Delete/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
      })
      .then(res=>{
       if(res.ok === true){
        setRefresh((prev)=>!prev)
       }
      })

  }
  
  return (
    <> 

<section className='mt-20'>
  <div className="flex justify-center items-start min-h-screen p-5">
    <AjoutModif Show={show} setShow={setShow} NumCompt={numcompt} Nom={nom} Solde={solde} Modif={modif} Refresh={setRefresh} />
    <div className="w-full max-w-7xl border border-gray-400 rounded-lg overflow-x-auto">
      <div className="p-10 min-w-[1000px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-6xl font-bold mb-2">Clients</p>
            <p className="text-gray-500">
             Liste des Client inscrit dans la base de donner
            </p>
          </div>
          <button onClick={()=>setShow(true)} className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-[#343333] cursor-pointer">
            Ajouter Client
          </button>
        </div>
      </div>
      
      <table className="w-full text-left min-w-[1000px] ">
        <thead>
          <tr className=''>
            <th className="px-8 py-3 border-b border-gray-400 w-[25%]">
              Numero de compte
            </th>
            <th className="px-8 py-3 border-b border-gray-400 w-[25%]">
              Nom
            </th>
            <th className="px-8 py-3 border-b border-gray-400 w-[25%]">
              Solde
            </th>
            <th className="px-8 py-3 border-b border-gray-400 w-[20%]">
              Observation
            </th>
            <th className="px-8 py-3 border-b border-gray-400 w-[10%]">
            Options
            </th>
          </tr>
        </thead>
        <tbody className=''>
          {
            client.map((client,key)=>(
              <tr className='border-b-2 border-gray-400' key={key}>
    <td className="px-8 py-5 w-[25%] ">
    {client.numcompt}
    </td>
    <td className="px-8 py-5 text-gray-500 w-[25%]">
     {client.nom}
    </td>
    <td className="px-8 py-5 text-gray-500 w-[25%]">
     {client.solde}
    </td>
    <td className="px-8 py-5 text-gray-500 w-[15%]">
      {client.solde < 1000 ? 'insufisant' : client.solde > 5000 ? 'Elelve':'Moyen'}
    </td>
    <td className="px-4 py-5 flex">
    <button onClick={()=>GetUpdate(client.numcompt,client.nom,client.solde)} className='text-blue-700 m-2 cursor-pointer'><img src='icone/edit.png' width={20} className='hover:scale-120' /></button>
    <button onClick={()=>Delete(client.numcompt)} className='text-red-600 m-2 cursor-pointer'><img src='icone/trash.png' width={20} className='hover:scale-120' /></button>
    </td>
    </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
</section>

    </>
  )
}

export default ListeUser

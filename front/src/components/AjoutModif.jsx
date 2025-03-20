import React from 'react'
import { useState,useEffect } from 'react'

const AjoutModif = ({Show,setShow,NumCompt,Nom,Solde,Modif,Refresh}) => {
  const [numcompt,setNumcompt] = useState('')
    const [nom,setNom] = useState('')
    const [solde,setSolde] = useState('')
    useEffect(()=>{
        setNumcompt(NumCompt)
        setNom(Nom)
        setSolde(Solde)
    },[NumCompt,Nom,Solde])

    const Ajouter = (e) =>{
      e.preventDefault()
      const Client = {numcompt,nom,solde}
      fetch('http://localhost:8081/AddClient',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(Client)
      })
      .then(res=>{
       if(res.ok === true){
          setNom('')
          setSolde('')
          Refresh((prev)=>!prev)
          setTimeout(() => {
            setShow(false)
          }, 1000);
       }
      })
    }
    const Modifier = async (e)=>{
      e.preventDefault()
      const data = {nom,solde}
      const id = numcompt

      try{
      const res = await fetch(`http://localhost:8081/update/${id}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
      })
      
       if(res.ok === true){
          setNom('')
          setSolde('')
          Refresh((prev)=>!prev)
          setTimeout(() => {
            setShow(false)
          }, 1000);
       }
      }catch(err){
        console.log(err)
      }
    }
  return (
    <>
      {
        Show && (
  <section className='fixed w-screen bg-[#00000098] backdrop-blur-sm h-screen top-0 left-0 flex justify-center'>
  <div className="flex items-center justify-center ">
    <div className="bg-[#fff] px-14 py-8 rounded-lg border lg:w-[400px] border-gray-400 max-w-lg lg:max-w-[768px]">
      
        { !Modif ? <h4 className="text-xl md:text-3xl font-bold  text-center">Ajouter Client</h4> : 
        <h4 className="text-xl md:text-3xl font-bold  text-center">Modification de : {numcompt}</h4>
        }
      
      <form className="py-10">
        <div className="grid grid-cols-1 md:grid-rows-1 gap-4 ">
        {
          !Modif ?  <div className=''>
            <label className="block font-semibold text-black">
              Numero de compte
            </label>
            <input type="text" placeholder='Numero de compte'
              onChange={(e)=>setNumcompt(e.target.value)} value={numcompt || ""}
              className="mt-2 block w-full h-12 rounded-md border border-gray-400 shadow-sm  sm:text-sm md:text-base pl-3" />
          </div> : ''
        }
       
          <div className=''>
            <label className="block font-semibold text-black">
              Nom
            </label>
            <input type="text" placeholder='Nom'
              onChange={(e)=>setNom(e.target.value)} value={nom || ""}
              className="mt-2 block w-full h-12 rounded-md border border-gray-400 shadow-sm  sm:text-sm md:text-base pl-3" />
          </div>
          <div className=''>
            <label className="block font-semibold text-black">
              Solde
            </label>
            <input type="number" placeholder='Solde'
               onChange={(e)=>setSolde(e.target.value)} value={solde || ""}
               className="mt-2 block w-full h-12 rounded-md border border-gray-400 shadow-sm  sm:text-sm md:text-base pl-3" />
          </div>
        </div>
      
        
      </form>
      <div className="flex justify-end ">
        <button onClick={()=>setShow(false)} type="button" className="mr-3 px-5 py-2 border border-gray-400 rounded-md shadow-sm font-semibold text-black bg-white hover:bg-gray-100">
          Annuler
        </button>
        {
          Modif ?
        <button onClick={Modifier} className="px-5 py-2 border border-transparent rounded-md shadow-sm font-semibold text-white bg-black hover:bg-gray-800">
          Modifier
        </button> :
        <button onClick={Ajouter} className="px-5 py-2 border border-transparent rounded-md shadow-sm font-semibold text-white bg-black hover:bg-gray-800">
          Envoyer
        </button>
          
        }
        
      </div>
    </div>
  </div>
</section>
        )
      }


    </>
  )
}

export default AjoutModif

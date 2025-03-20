import React,{useEffect,useState} from 'react'

const Stat = ({Total,Max,Min}) => {
  const [total,setTotal] = useState('')
  const [min,setMin] = useState('')
  const [max,setMax] = useState('')
  useEffect(()=>{
      setTotal(Total)
      setMax(Max)
      setMin(Min)
  },[Total,Max,Min])
  return (
    <>
      
<div className="flex justify-center items-center bg-gray-100 p-5 md:p-10">
  <div className="sm:w-[60%]">
    <p className="font-bold mb-4 text-lg">Statistique des Clients</p>
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className="bg-gradient-to-r from-[#c4e1ee] to-white p-8 rounded-lg shadow-md w-full">
        <div className="flex justify-between w-full md:items-end">
          <div className="flex flex-col">
            <p className=" text-lg font-bold text-gray-500 mb-3 md:mb-6">
              Total Solde Client
            </p>
            <p className="font-semibold text-xl md:text-3xl">
              {total}
            </p>
          </div>
          <p className="text-gray-500 font-thin">Ar</p>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#ffffff] to-[#f5f8f4] p-8 rounded-lg shadow-md w-full">
        <div className="flex justify-between w-full md:items-end">
          <div className="flex flex-col">
            <p className="font-bold text-lg text-gray-500 mb-3 md:mb-6">
              Solde Maximal 
            </p>
            <p className="font-semibold text-xl md:text-3xl">
              {max}
              
            </p>
          </div>
          <p className="text-gray-500 font-thin">Ar</p>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#e4a8a8] to-white p-8 rounded-lg shadow-md w-full">
        <div className="flex justify-between w-full md:items-end">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-gray-500 mb-3 md:mb-6">
             Solde Minimal
            </p>
            <p className="font-semibold text-xl md:text-3xl">
              {min}
              
            </p>
          </div>
          <p className="text-gray-500 font-thin">Ar</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Stat

import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Title,Tooltip,Legend)
const Chart = ({Total,Max,Min}) => {
  const [total,setTotal] = useState('')
  const [min,setMin] = useState('')
  const [max,setMax] = useState('')
  useEffect(()=>{
      setTotal(Total)
      setMax(Max)
      setMin(Min)
  },[Total,Max,Min])
  const data = {
    labels:['Total','Max','Min'],
    datasets: [
        {
            label:'Representation de Solde Total,Maximal,Minimal des clients',
            data:[total,max,min],
            backgroundColor:['#c4e1ee','#07eac4','#e22121'],
            barThickness: 40,
        },
        
    ]
}
  return (
    <>
    <div className="px-10 md:px-20 p-20 ">
      <div className="border rounded-lg border-dashed border-gray-400 flex items-center justify-center text-gray-400 h-40  md:h-[642px] p-10">
      <Bar data={data}  />
      </div>
    </div>
    </>
  )
}

export default Chart

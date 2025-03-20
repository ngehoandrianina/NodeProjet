import { useState,useEffect } from 'react'
import './App.css'
import ListeUser from './components/ListeUser'
import Stat from './components/Stat'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import Toast from './components/Toast'

function App() {
  const [total,setTotal] = useState('')
  const [Min,setMin] = useState('')
  const [Max,setMax] = useState('')
  const [refresh,setRefresh] = useState(false)
  
  useEffect(()=>{
    fetch('http://localhost:8081/GetTM')
    .then(re=>re.json())
    .then(res=>{
      setTotal(res.totalSolde)
      setMax(res.soldeMax)
      setMin(res.soldeMin)
    })
    .catch(err=>{
      console.error(err)
    })
  },[refresh])
  return (
    <>
      <Navbar />  
      <ListeUser  RefreshApp={setRefresh} />
      <Stat Total={total} Max={Max} Min={Min} />
      <Chart Total={total} Max={Max} Min={Min}/>
    </>
  )
}

export default App

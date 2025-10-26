import React, { useState,useEffect } from 'react'
import List from "./components/List"
import Form from './components/Form'
import { api } from './components/api'

const App = () => {
  const [data,setData] = useState([])
  const fetchData= async ()=>{
    const res=await api.get("/todolists")
    setData(res.data)
    console.log("res",res.data);
    
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='w-full '>
     <div className='flex flex-col jsutify-center items-center shadow-lg mt-8  mx-auto bg-white rounded-lg '>
    <Form />
    <List data={data}/>
    </div>
    </div>
   
  )
}

export default App

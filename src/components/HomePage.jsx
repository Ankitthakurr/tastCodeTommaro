import Card from './Card'
import React, { useContext, useEffect, useState } from 'react'
import CardContext from '../context/CardContext'

const HomePage = () => {
    const [select,setSelect] = useState(1)
    const {cardData,data,pageLength} = useContext(CardContext)
    useEffect(()=>{
        data()
    },[])
    console.log(pageLength)
  return (
   <div>
     <div className='flex justify-center my-3 flex-wrap items-center gap-4 bg-white '>
      {cardData.slice((select-1)*6,((select-1)*6+6)).map((item,i)=> <Card key={i} item={item}/>)}
    </div>
    <div className='flex justify-center gap-2 mb-4'>
        {Array(Math.ceil(pageLength)).fill(null).map((item,i)=><div onClick={()=>setSelect(i+1)} key={i} className={`${select == i+1 ?  "bg-gray-400 text-white cursor-pointer rounded-full w-8 h-8 flex justify-center items-center": "bg-slate-200 text-black cursor-pointer rounded-full w-8 h-8 flex justify-center items-center"} `}><span>{i+1}</span></div>)}
      </div>
   </div>
  )
}

export default HomePage

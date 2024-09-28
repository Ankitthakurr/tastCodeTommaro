import { createContext, useState } from "react";

const CardContext = createContext()

export const CardProvider = ({children})=>{

    const [cardData,setCardData]=useState([])
    // const [mainData,setMainData]=useState()
    const [pageLength,setPageLength]=useState([])

    const data = async()=>{
       const res = await fetch("https://jsonplaceholder.typicode.com/posts")
       const data = await res.json()
       setCardData(data)
       setPageLength(data.length/6)
    }

    const deleteData = (id)=>{
      setCardData(cardData.filter(item=>item.id != id ))
      setPageLength(cardData.length/6)
    }

    return <CardContext.Provider value={{cardData,data,deleteData,pageLength}}>
         {children}
    </CardContext.Provider>
}

export default CardContext
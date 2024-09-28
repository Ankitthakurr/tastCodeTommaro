
import { useContext } from "react"
import cartImage from "../assets/cartImage.jpg" 
import CardContext from "../context/CardContext"

const Card = ({item}) => {
    const {deleteData} = useContext(CardContext)
  return (
    <div className='px-4 py-2 bg-white w-[28%] h-[340px] flex flex-col justify-between  shadow'>
        <div className="flex justify-end"><button onClick={()=>deleteData(item?.id)} className="cross">X</button></div>
      <h2 className="text-[18px] font-bold">{item?.title.length > 100 ?  item?.title.slice(0,70)+"..." : item?.title}</h2>
      <p className="font-medium">{item?.body.length > 100 ?  item?.body.slice(0,92)+"..." : item?.body}</p>
      <p className="text-[grey]">Sat,29 Dec 2020 10:25 GMT</p>
      <img className="w-full h-[140px] object-fill rounded-lg" src={cartImage} alt="" />
    </div>
  )
}

export default Card

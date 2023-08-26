import { useEffect, useState } from 'react'
import data from '../../Data.json'
import { useParams } from 'react-router-dom'

const HostVanInfo = () => {
    const [currentVan,setCurrentVan] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        const findVanInfo = data.find((van)=> van.id === id)
        setCurrentVan(findVanInfo)
    },[id])
  return (
    <div className='flex flex-col'>
        <h3>{`${currentVan.name}`}</h3>
    </div>
  )
}

export default HostVanInfo
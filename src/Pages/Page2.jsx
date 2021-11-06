import React from 'react'
import { useState,useEffect } from 'react'
import {useUser} from "../Context/user"
import { Link } from 'react-router-dom'

const Page2 = () => {

    const {GlobalData,setGlobalData} = useUser();
    
    useEffect(() => {
        
        console.log("global tiene ", GlobalData)
      
    }, [])

    return (
        <div>

            <span>Pagina 2 {GlobalData.nombre} </span>
            <span>Pagina 2 {GlobalData.apellido} </span>
            <button onClick = { ()=> setGlobalData({...GlobalData, apellido: "rivera"}) } > asdf </button>
            <Link to="/page1"> link para page 1</Link>
           
            
        </div>
    )
}

export default Page2
  
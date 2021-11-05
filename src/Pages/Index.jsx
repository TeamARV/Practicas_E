import React from 'react'
import { useState,useEffect } from 'react'

import MyNavbar from '../Components/MyNavbar'









const Index = () => {



    const [variable1, setvariable1] = useState("nada")

    const [variable2, setvariable2] = useState(0)
    const [variable3, setvariable3] = useState(0)
    const [variable4, setvariable4] = useState(0)

    useEffect(() => {
        setvariable4(parseInt(variable2)+parseInt(variable3))
        console.log("algo paso",variable2+variable3)
    }, [variable2,variable3])
  

    const funcionbutton =()=>{
            setvariable1("")
    }

 

    return (
        <div>

         

            <span>pagina Index  {variable1}</span> <br />
            <input value={variable1} onChange={(e)=>{ setvariable1(e.target.value)}} type="text" />
            <button onClick={funcionbutton}> soy un botón Clean</button>

            <br /><span>test suma </span>
            <input onChange={(e)=>{ setvariable2(e.target.value)}} type="number" />
            <input onChange={(e)=>{ setvariable3(e.target.value)}} type="number" />
            <span>la salida es {variable4}</span> 

<i class="fas fa-gamepad"/>
        
            
        </div>
    )
}

export default Index




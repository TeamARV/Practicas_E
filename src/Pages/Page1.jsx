import React from 'react'
import {useUser} from "../Context/user"

const Page1 = () => {
    

    const {GlobalData,setGlobalData} = useUser();

    return (
        <div>

            <span>pagina 1 {GlobalData.apellido} </span>
            <span>pagina 1 {GlobalData.nombre} </span>

            

            
            
        </div>
    )
}

export default Page1

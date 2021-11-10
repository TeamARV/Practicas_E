import React from 'react'
import {useUser} from "../Context/user"
import { Link } from 'react-router-dom';

const Page1 = () => {
    

    const {GlobalData,setGlobalData} = useUser();

    return (
        <div>

            <span>pagina 1 {GlobalData.apellido} </span>
            <span>pagina 1 {GlobalData.nombre} </span>
            <Link to="/page2"> link para page 1</Link>

            

            
            
        </div>
    )
}

export default Page1

import React from 'react'
import MyNavbar from '../Components/MyNavbar'
import Myfootbar from '../Components/Myfootbar'

const Plantilla = ({children}) => {
    return (
        <div>

            <MyNavbar/>
            {children}
            <Myfootbar/>
            
        </div>
    )
}

export default Plantilla

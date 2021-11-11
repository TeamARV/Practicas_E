import React from 'react'
import { useState,useEffect } from 'react'
import MyCarousel from "../Components/MyCarousel"
import MyCard from '../Components/MyCard'


/* MODULO GESTION USUARIOS LADING PAGE */


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

<div className="SliderImg">
<div className="row col-sm-12">
    
<div className="col-sm-7 align-self-center ">
            <MyCarousel img1="https://i.imgur.com/ak0Afh9.jpg" img2="https://i.imgur.com/4FtlyqU.jpg" img3="https://i.imgur.com/lyKdwUi.jpg"
            img4="https://i.imgur.com/utKI3lz.jpg"/>
          
    </div>
    <span className=" der col-sm-5 h4 align-self-center justify-content-end" >

    <MyCard info="<INSERT NAME> ayuda a los equipos a hacer avanzar el trabajo."/> <br /><br />

    <MyCard info="Maneje su trabajo en equipo. Administre proyectos, organice tareas y desarrolle el espíritu de equipo, todo en un solo lugar."/><br /><br />

    <MyCard info="Colabora, gestiona proyectos y alcanza nuevos picos de productividad. Desde los rascacielos hasta la oficina en casa, la forma en que trabaja su equipo es única: 
    consígalo todo con  <INSERT NAME./>"/>

    </span>
   
</div>

</div>

<div className="mt-4 row col-sm-12 align-self-center justify-content-center"> <br /> <br /> 
<span className="row col-sm-2 "> <button type="button" class="btn btn-dark"> Start Doing  <i class="fas fa-sign-out-alt"/></button></span>
</div>


            <br />
            <span>pagina Index  {variable1}</span> <br />
            <input value={variable1} onChange={(e)=>{ setvariable1(e.target.value)}} type="text" />
            <button onClick={funcionbutton}> soy un botón Clean</button>

            <br /><span>test suma </span>
            <input onChange={(e)=>{ setvariable2(e.target.value)}} type="number" />
            <input onChange={(e)=>{ setvariable3(e.target.value)}} type="number" />
            <span>la salida es {variable4}</span> 

<i className="fas fa-gamepad"/>
        
            
        </div>
    )
}

export default Index




import React from 'react'
import { useState,useEffect } from 'react'
import MyCarousel from "../Components/MyCarousel"











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
<div className="row">
    
    <div className="col-sm-6">
            <MyCarousel img1="https://i.imgur.com/ak0Afh9.jpg" img2="https://i.imgur.com/4FtlyqU.jpg" img3="https://i.imgur.com/BIjdS7W.jpg"
            img4="https://i.imgur.com/utKI3lz.jpg"/>
          <p className="card-text">imagenes  <i className="fas fa-arrow-right text-success"></i> </p>
    </div>
  
      <div className="col-sm-6">
            <MyCarousel img1="https://i.imgur.com/ak0Afh9.jpg" img2="https://i.imgur.com/4FtlyqU.jpg" img3="https://i.imgur.com/BIjdS7W.jpg"
            img4="https://i.imgur.com/utKI3lz.jpg"/>
          <p className="card-text">descripcion  <i className="fas fa-arrow-right text-success"></i> </p>
      </div>
      
</div>
</div>


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




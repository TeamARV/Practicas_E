import React from 'react'


const MyCard = (props) => {
    return (

      <div class="card border-secondary mb" >
  <div class="card-body ">
    <p class="card-text text-center">{props.info}</p>
  </div>
</div>


    )
}

export default MyCard

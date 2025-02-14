import React from "react"

const Incrementar = React.memo(({incrementarPadre}) => {
  console.log('redibujando')
  return (
    <div>
      <button className=" btn btn-primary" onClick={()=> incrementarPadre(10)}>+1</button>
    </div>
  )
})

export default Incrementar


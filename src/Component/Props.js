import React from 'react'

const Props = (data) => {
  return (
    <>
        <div>
            <p>{data.datas}</p>
            <button onClick={data.inc}>Increments</button>
            <button onClick={data.dec}>Decrement</button>
        </div>
    </>
  )
}

export default Props
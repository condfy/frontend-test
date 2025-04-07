import React, { useState, useEffect } from 'react'

function Count() {
  var [count, setCount] = useState(0)

  const increment = () => {
    setCount(count++)
  }

  useEffect(() => {
    console.log("Total de cliques: {count}")
  }, [])

  return (
    <>
      <h2>Contador de cliques</h2>
      <div>
        <button onClick={increment()}>
          {`Cliques: ${count}`}
        </button>
      </div>
    </>
  )
}

export { Count }

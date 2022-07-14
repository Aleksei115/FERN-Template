import React, { useState } from 'react'
import { Button } from '@mui/material'

export const App = () => {
    const [counter, setCounter] = useState(10)
  return (
    <div>
        <div>{counter}</div>
        <Button onClick={() => { setCounter(counter + 1) }}>+1</Button>
        <Button onClick={() => { setCounter(counter - 1) }}>+1</Button>
    </div>
  )
}

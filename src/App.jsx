import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './routes/Homepage'
import NotFound from './routes/NotFound'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
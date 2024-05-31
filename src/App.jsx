import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <div className='app-container'>
        <div className='side-panel'>

        </div>
        <div className='main-panel'>
          <Card />
        </div>
      </div>
    </>
  )
}

export default App

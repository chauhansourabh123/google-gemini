
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import { useContext, useEffect, useState } from 'react'
import { Context } from './Context/Context'

function App() {

  const [state, setState] = useState(true)

  
  return (
    <div className='app'>

      {state ? <Sidebar /> : null}
      <Main />
    </div>
  )
}

export default App

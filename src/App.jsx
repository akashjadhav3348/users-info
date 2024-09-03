import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AllUsers from './componants/AllUsers'
// import propsType from''

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h6 className='text-center text-white bg-dark p-2'>Dummy Json In Card</h6>
      <AllUsers/>
    </>
  )
}

export default App

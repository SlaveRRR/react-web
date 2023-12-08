import React, { FC} from 'react'

import './App.css'
import NavBar from './components/NavBar';
import MainRouter from './app/routing';



const App: FC = () => {


  return (

    <>
     
        <NavBar />
        <MainRouter />
     
    </>
  )

}
export default App



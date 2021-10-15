import React, { useState } from 'react'
import Buscar from './components/Buscar'

import ListData from './components/ListData'


const App = () => {
    const [categoria, setlista] = useState('')
    return <>
        <h1>WELCOME</h1>
        <Buscar setlista={setlista} />
        <hr />
        <ListData Inputdata={categoria} />

    </>
}




export default App
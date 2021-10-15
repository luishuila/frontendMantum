import React, { useState, useEffect } from 'react'


const Buscar = ({ setlista }) => {
    const [state, setstate] = useState({
        name: ''
    })
    const { name } = state

    useEffect(() => {
        setlista(name)
    })


    const InputChange = (e) => {

        setstate({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    return (
        <>
          
            <hr />
            <div className="form-group">
                <input

                    type="text"
                    name="name"
                    className="form-control"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => { InputChange(e) }}
                    placeholder="BUSCAR"
                />
            </div>


        </>
    )
}

export default Buscar

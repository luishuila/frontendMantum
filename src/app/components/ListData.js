import React from 'react'
import { UseApi } from '../hook/UseApi'
import Lista from './Lista'

export default function ListData({ Inputdata = "" }) {
  const { data } = UseApi(Inputdata)
  let dats = []
  if (Inputdata.length > 0) {
    const datos = data.filter(datadd => datadd.name.toString().toLowerCase().includes(Inputdata.toLowerCase()) || datadd.agency.toString().toLowerCase().includes(Inputdata.toLowerCase()))
    dats = datos
  } else {
    dats = data
  }


  return <>
    <h1>LISTAR</h1>

    <div className="list-group">

      {
        dats.map((data, index) => (
          <Lista key={index} dataquery={data}
          />
        ))
      } </div>



  </>
}


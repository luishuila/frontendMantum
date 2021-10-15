import { useState, useEffect } from "react"
import ApiRestHttp from "../helper/ApiRestHttp"

export const UseApi = ({ Inputdata }) => {

    const [state, setstate] = useState({
        data: [],
        carga: true
    })

    useEffect(() => {
        (async function () {
            const data = await ApiRestHttp();
            setstate({
                data: data,
                carga: false
            })

        })()
    }, [Inputdata])

    return state;

}
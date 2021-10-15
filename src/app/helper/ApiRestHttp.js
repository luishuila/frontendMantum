
export const ApiRestHttp = async () => {

    const url = `http://localhost:8001/api/Myttc`
    const resp = await fetch(url, {
        method: 'GET'
    });
    const data = await resp.json(resp);
    return data;

}


export default ApiRestHttp
import axios from "axios";

export const TRAER_CLIMA="TRAER_CLIMA";


export const getCityClima=(name)=>{
    return async function(dispatch){
        try{
            const response= await axios.get(`http://localhost:3001/clima/name/${name}`);
            if(response.status !== 200){
                throw new Error('Error al obtener el clima de esa ciudad');
            }
            dispatch({
                type:TRAER_CLIMA,
                payload:response.data,
            })
        }catch(error){
            dispatch({
                type:'TRAER_CLIMA_ERROR',
                payload:error.message,
            })
        }
    }

}
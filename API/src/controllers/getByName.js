const axios = require('axios');
require('dotenv').config();

const getClima = async (name) => {
    try {
        if (!name) {
            throw new Error("Ingrese un nombre válido");
        }

        const accessKey = process.env.ACCESS_KEY;
        const URL = `http://api.weatherstack.com/current?access_key=1144a4b5cab179864a638aaa510e63bf&query=${name}`;
        const response = await axios.get(URL);

        if (response.data.error) {
            throw new Error(`API error: ${response.data.error.info}`);
        }

        const data = response.data;
        return {
            request: {
                type: data.request.type,
                query: data.request.query,
                language: data.request.language,
                unit: data.request.unit
            },
            location: {
                name: data.location.name,
                country: data.location.country,
                region: data.location.region,
                lat: data.location.lat,
                lon: data.location.lon,
                timezone_id: data.location.timezone_id,
                localtime: data.location.localtime,
                localtime_epoch: data.location.localtime_epoch,
                utc_offset: data.location.utc_offset
            },
            current: {
                observation_time: data.current.observation_time,
                temperature: data.current.temperature,
                weather_code: data.current.weather_code,
                weather_icons: data.current.weather_icons,
                weather_descriptions: data.current.weather_descriptions,
                wind_speed: data.current.wind_speed,
                wind_degree: data.current.wind_degree,
                wind_dir: data.current.wind_dir,
                pressure: data.current.pressure,
                precip: data.current.precip,
                humidity: data.current.humidity,
                cloudcover: data.current.cloudcover,
                feelslike: data.current.feelslike,
                uv_index: data.current.uv_index,
                visibility: data.current.visibility,
                is_day: data.current.is_day
            }
        };
    } catch (error){
    if (error.response) {
        // Error de respuesta del servidor
        throw new Error(`Error en la respuesta de la API: ${error.response.data.error.info}`);
    } else if (error.request) {
        // Error de solicitud sin respuesta
        throw new Error("No se recibió respuesta del servidor de la API");
    } else {
        // Otro tipo de error
        throw new Error(`Error al hacer la solicitud a la API: ${error.message}`);
    }
}
}

module.exports = getClima;

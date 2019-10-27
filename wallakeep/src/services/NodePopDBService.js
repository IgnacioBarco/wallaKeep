import Advert from '../models/Advert';

const API_URL = 'http://localhost:3001';
const ALL_ADVERTS = API_URL + '/apiv1/anuncios'
const ADVERT = API_URL + '/apiv1/anuncios'
const data = {
    method: "GET",
    headers: {
        Accept: "application/json, text/plain, */*"
    }
}



const api = () => {
    return {
        searchAll: async () => {
            try {
                const response = await fetch(ALL_ADVERTS, data)

                console.log(response)

                if (!response.ok) {
                    throw new Error('Error fetching searchAll')
                }

                const dataDetails = response.json();

                // const { success, count, results } = dataDetails;

                // if (success === false) {
                //     return "no hay ninguna cerveza con ese id";
                // }

                return dataDetails;

            } catch (err) {
                console.log('error: ' + err);
                throw err;
            }
        },

        searchAdvert: async (id) => {
            try {
                const response = await fetch(`${ADVERT}/${id}`, data)

                console.log(response)

                if (!response.ok) {
                    throw new Error('Error fetching searchAll')
                }

                const dataDetails = response.json();

                // const { success, count, results } = dataDetails;

                // if (success === false) {
                //     return "no hay ninguna cerveza con ese id";
                // }

                return dataDetails;

            } catch (err) {
                console.log('error: ' + err);
                throw err;
            }
        },

    }
}

export default api;

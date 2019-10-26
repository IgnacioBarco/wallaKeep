import Advert from '../models/Advert';

const API_URL = 'http://localhost:3001';
const ALL_ADVERTS = API_URL + '/apiv1/anuncios'
const data = { 
    method: "GET" ,
    headers:{ 
        Accept: "application/json, text/plain, */*"
    },
    mode: "no-cors"
}
   


const api = () => {
    return {
        searchAll : async (id) => {
            try {
                const response = await fetch('http://localhost:3001/apiv1/anuncios'
                , data)

                console.log(response)
                
                if (!response.status===0) {
                    throw new Error('Error fetching jjkghjgkhjgkh')
                }
                
                const dataDetails = await response.json();
                
                const { success, count, results } = dataDetails;

                if (success === false) {
                    return "no hay ninguna cerveza con ese id";
                }

                return results;

            } catch (err) {
                console.log('error: ' + err);
                throw err;
            }    
        }
    }
}

export default api;

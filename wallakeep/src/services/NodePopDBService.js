const API_URL = 'http://localhost:3001/apiv1';
const ALL_ADVERTS = API_URL + '/anuncios'
const ADVERT = API_URL + '/anuncios'
const TAGS = API_URL + '/tags'
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

                if (!response.ok) {
                    throw new Error('Error fetching searchAll')
                }

                const dataDetails = response.json();

                return dataDetails;

            } catch (err) {
                console.log('error searchAll: ' + err);
                throw err;
            }
        },

        searchFiltered: async (filter) => {
            try {
                const response = await fetch(`${ADVERT}?${filter}`, data)

                if (!response.ok) {
                    throw new Error('Error fetching searchAll')
                }

                const dataDetails = response.json();

                return dataDetails;

            } catch (err) {
                console.log('error searchFiltered: ' + err);
                throw err;
            }
        },

        searchAdvert: async (id) => {
            try {
                const response = await fetch(`${ADVERT}/${id}`, data)

                if (!response.ok) {
                    throw new Error('Error fetching searchAdvert')
                }

                const dataDetails = response.json();

                return dataDetails;

            } catch (err) {
                console.log('error searchAdvert: ' + err);
                throw err;
            }
        },

        searchTags: async () => {
            try {
                const response = await fetch(TAGS, data)

                if (!response.ok) {
                    throw new Error('Error fetching searchTags')
                }

                const dataDetails = response.json();

                return dataDetails;

            } catch (err) {
                console.log('error searchTags: ' + err);
                throw err;
            }
        },
    }
}

export default api;

import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HDb8V3Rj0LmviJkvGgmRTA3BsKgH1jZhd3NIU57faY4'
        },
        params: {
            query: term,
        }
    })
    return response.data.results
}

export default searchImages
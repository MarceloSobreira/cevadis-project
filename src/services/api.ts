import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers'
})

export function getBeers(perPages: number) {
  return api.get(`?per_page=${perPages}`)
}

export default api;
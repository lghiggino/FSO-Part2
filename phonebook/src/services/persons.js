import axios from "axios"
const baseUrl = (process.env.NODE_ENV === "development") | (process.env.NODE_ENV === "test")
? "http://localhost:3001/api/persons"
: "api/persons";

const getAll = () => {
    return  axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const updateNumber = (id, newObject) => {
    return  axios.put(`${baseUrl}/${id}`, newObject)
}

async function remove(id) {
    await axios.delete(`${baseUrl}/${id}`)
    return await axios.get(baseUrl)
}

export default { getAll, create, updateNumber, remove }
import axios from "axios";

const url = "http://localhost:5000/transactions";

export const fetchTrans = () => axios.get(url);
export const createTrans = (newTran) => axios.post(url, newTran);
export const deleteTrans = (id) => axios.delete(`${url}/${id}`);

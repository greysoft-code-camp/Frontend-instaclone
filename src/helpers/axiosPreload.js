import axios from 'axios';

const randomUserbaseUrl = "https://www.randomuser.me/api";
const laravelApi = "https://q-gram.herokuapp.com/api";

export default (url, _live) => axios.get(`${(_live? laravelApi : randomUserbaseUrl) + url}`)

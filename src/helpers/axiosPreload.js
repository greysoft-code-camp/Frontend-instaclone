import axios from 'axios';

const randomUserbaseUrl = "https://www.randomuser.me/api";
const laravelApi = "";

export default (url, _live) => axios(`${(_live? laravelApi : randomUserbaseUrl) + url}`)
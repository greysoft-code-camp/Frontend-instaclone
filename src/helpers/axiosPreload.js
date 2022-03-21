import axios from 'axios';

const baseUrl = "https://www.randomuser.me/api";

export default url => axios(`${baseUrl + url}`)
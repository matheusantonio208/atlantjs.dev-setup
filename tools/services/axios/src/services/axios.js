/*
 * Import this file to connect in exampleApi
 */
import axios from 'axios';

const exampleApi = axios.create({
  baseURL: 'https://api.github.com',
});

export default exampleApi;

import { IApi, User, RequestResponse } from './interface-api';
const axios = require('axios');
const qs = require('qs');
const env = require('dotenv').config().parsed;
const APIKEY = env['API-KEY'];

export default class Users implements IApi {
    // id: number;
    // name: string;
  constructor() {}

    public async getUsers(url: string): Promise<User> {
  
      const response = await axios.get(`${url}/users/`, {
              headers: {
                authorization: APIKEY,
              }
            })
      return response.data
            // .then( (response) => response.data)
            // .catch( (error) => error);;
    }

    public async addUser(url:string, body: {User: any}): Promise<RequestResponse> {
        // const data = { 'id': 2, "name": "Nico"};
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(body),
          url: `${url}/users/`,
        };
        const postResponse = await axios(options);
        return postResponse.data;
        // .then((response) => console.log(response.data))
        // .catch((error) => console.error(error));
    }

} 
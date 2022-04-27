import { stringify } from 'querystring';
import { IApi, User, RequestResponse } from './interface-api';
const axios = require('axios');
const qs = require('qs');
const env = require('dotenv').config().parsed;
const APIKEY = env['API-KEY'];

export default class Users implements IApi {
  // static getUsers(url: string): any {
  //   throw new Error("Method not implemented.");
  // }
  age!: number;
  name!: string;
  url!: string;
  // data: string;
  constructor() {}

    public async getUsers(url: string): Promise<[User]> {// Promise<User[]> {
  
      const getResponse = await axios.get(`${url}/users/`, {
              headers: {
                authorization: APIKEY,
              }
            })
            .then( (response: any) => response.data) 
            .catch( (error: string) => error);
      
      return getResponse;
    }

    public async addUser(url:string, body: User): Promise<RequestResponse> {
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(body),
          url: `${url}/users/`,
        };
        const postResponse = await axios(options)
        .then((response: any) => console.log(response.data))
        .catch((error: any) => console.error(error));
        return postResponse;
    }

};
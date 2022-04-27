import { IApi, User, RequestResponse } from './interface-api';
const axios = require('axios');
const qs = require('qs');

export default class Users implements IApi {
  // static getUsers(url: string): any {
  //   throw new Error("Method not implemented.");
  // }
  urlEndpoint: string;
  apiKey: string;

  constructor(urlEndpoint: string, apiKey: string) {
    this.urlEndpoint = urlEndpoint;
    this.apiKey = apiKey;
  }

    public async getUsers(): Promise<[User]> {
  
      const getResponse = await axios.get(this.urlEndpoint, {
              headers: {
                authorization: this.apiKey,
              }
            })
            .then( (response: any) => response.data) 
            .catch( (error: string) => error);
      
      return getResponse;
    }

    public async addUser(body: User): Promise<RequestResponse> {
        const options = {
          method: 'POST',
          headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            authorization: this.apiKey, },
          data: qs.stringify(body),
          url: this.urlEndpoint,
        };
        const postResponse = await axios(options)
        .then((response: any) => response.data)
        .catch((error: any) => error);
        return postResponse;
    }

};

const axios = require('axios');
const env = require('dotenv').config().parsed;
const APIKEY = env['API-KEY'];

export default class Users implements IApi {
    id: number;
    name: string;

    const getUsers = async(url: string): Promise<User> {
  
        await axios.get(`${url}/users/`, {
              headers: {
                authorization: APIKEY,
              }
            })
            .then( (response) => response.data)
            .catch( (error) => error);;
    }

    const addUser = async(url:string, body: {User}): Promise<RequestResponse> {
        // const data = { 'id': 2, "name": "Nico"};
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(body),
          url: `${url}/users/`,
        };
        await axios(options)
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    }

} 
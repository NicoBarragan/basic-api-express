// const axios = require('axios');
// const qs = require('qs');
// const env = require('dotenv').config().parsed;
// const APIKEY = env['API-KEY']
// const url = "http://localhost:3000"


// async function useApi(url) {
  
  //   axios.get(`${url}/users/`, {
    //     headers: {
//       authorization: APIKEY,
//     }
//   })
//   .then( (response) => console.log(response.data))
//   .catch( () => console.error(error));;

//   const data = { 'id': 2, "name": "Nico"};
//   const options = {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //     data: qs.stringify(data),
  //     url: `${url}/users/`,
  //   };
  //   await axios(options)
  //   .then((response) => console.log(response.data))
  //   .catch(() => console.error(error));
  
  //   await axios.get(`${url}/users/`, {
    //     headers: {
      //       authorization: APIKEY,
      //     }
      //   })
      //   .then( (response) => console.log(response.data))
      //   .catch( () => console.error(error));
      // }
      
      // useApi();
      
import Users from "./users";
const url: string = "http://localhost:3000"


console.log(Users.getUsers(url))
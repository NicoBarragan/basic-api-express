import Users from "./users";

const env: any = require('dotenv').config().parsed;
const APIKEY: string = env['API-KEY'];
const URL: string = env['URL'];
const usersEndpoint: string = env['USERS-ENDPOINT'];

const users = async (url: string, endpoint: string): Promise<void> => {
  const users = new Users(`${URL}${usersEndpoint}`, APIKEY);
  
  let usersGet = await users.getUsers();
  console.log(usersGet);
  
  const nico = {id: 2, name: "Nico"};
  const usersPost = await users.addUser(nico);
  console.log(usersPost);

  usersGet = await users.getUsers();
  console.log(usersGet);
}

// users(URL, usersEndpoint);
users(2, 2);
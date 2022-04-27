import Users from "./users";
const url: string = "http://localhost:3000"

const users = new Users

const print = async () => {
  let usersGet = await users.getUsers(url)
  console.log(usersGet);
  
  const nico = {id: 2, name: "Nico"};
  const usersPost = await users.addUser(url, nico);
  console.log(usersPost);

  usersGet = await users.getUsers(url)
  console.log(usersGet);
}

print()
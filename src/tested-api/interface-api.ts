type User = {
    id: number;
    name: string;
};

type RequestResponse = {
    data: any;
}

interface IApi {
    getUsers(url: string): Promise<User>,
    addUser(url:string, body: {User}): Promise<RequestResponse>
}

export {IApi, User, RequestResponse};
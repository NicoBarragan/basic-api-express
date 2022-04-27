type User = {
    id: number;
    name: string;
};

type RequestResponse = {
    data: any;
}

interface IApi {
    getUsers(): Promise<[User]>,
    addUser(body: User): Promise<RequestResponse>
}

export {IApi, User, RequestResponse};
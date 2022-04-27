class Human {
    name: string;
    age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }

}

const nico = new Human("Nico", 20);

console.log(nico.name);
function createInstructor(firstName, lastName) {
    return {firstName, lastName};
}


let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite"
}

let inatructor = {
    firstName = "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, verb, noise) {
    let animal = {
        species,
        noise,
        [verb]() {
            return `The ${this.species} says ${this.noise}`;
        }
    }
    return animal;
}
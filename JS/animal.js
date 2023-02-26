const YOUNG_ANIMAL_DESCRIPTION = "Young"
const OLD_ANIMAL_DESCRIPTION = "Old"

class Animal {
    id;
    name;
    type;
    age;

    constructor(id, name, type, age) {
        this.id = id
        this.name = name
        this.type = type
        this.age = age
    }
}

class AnimalController {
    animal;

    findAnimalOutput(animal) {
        if (animal == null) return "No animal found"

        let ageDescription = YOUNG_ANIMAL_DESCRIPTION

        if (animal.age > 40) {
            ageDescription = OLD_ANIMAL_DESCRIPTION
        }

        return "This is a " + animal.type + " " + animal.name + animal.id + ". It is very " + ageDescription
    }
}

class AnimalView {
    logOutput(output) {
        // View - Either log, show in UI
        // or send as response from server
        console.log(output);
    }
}

animal = new Animal(
    1, "Cat", "pet", 25
)

animalController = new AnimalController()
animalView = new AnimalView()

animalView.logOutput(animalController.findAnimalOutput(animal))



// This is a pet Cat
// This is a pet Dog
// This is a pet Cat1
// This is a non pet Elephant
// This is a pet cat1. It is very Old
// This is a pet cat2. It is very Young
// This is a pet dog2. It is very Young


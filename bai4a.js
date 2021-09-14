class Animal {
    constructor(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    toString(animal) {
        return this.getName() + " " + this.getWeight();
    }
}

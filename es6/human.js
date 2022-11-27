class Human {
    constructor() {
        this.persons = [];
    }

    setHuman({ id: id, name: name }) {
        this.persons.push({ id: id, name: name });
    }

    getHuman(id) {
        for (let i = 0; i < this.persons.length; i++) {
            if (id === this.persons[i].id) {
                return this.persons[i].name;
            }
        }
    }
}

const man = new Human();
man.setHuman({ id: 1, name: "Jane" });
man.setHuman({ id: 2, name: "David" });
console.log(man);
console.log(man.getHuman(2))
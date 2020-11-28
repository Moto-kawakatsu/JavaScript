const person = {
    name: ['Code', 'Mafia'],
    age: 23,
    gender: 'male',
    interests: {
        sport: 'soccer',
        music: 'piano'
    },
    getFullName: function() {
        console.log(this.name[0] + this.name[1])
    }
};
person.age = 12;
console.log(person.age)
person.getFullName();
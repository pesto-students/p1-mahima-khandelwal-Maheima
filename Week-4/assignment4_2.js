var Person = function(){}

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}


function Teacher() {
}



Teacher.prototype.teach = function (name,age) {
    Person(name, age);
    
    console.log(`${this.name} is now teaching ${name}`);

}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)



var him = new Teacher();

him.initialize('Adam', 45);
him.teach('inheritance')
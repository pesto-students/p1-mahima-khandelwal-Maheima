var Person = function(){}

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}


function Teacher() {
}

Teacher.prototype.teach = function (subject, name,age) {
    const t = Person.call(name, age);
    
    console.log(subject);

}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

var him = new Teacher();

him.initialize('Adam', 45);
him.teach('inheritance')
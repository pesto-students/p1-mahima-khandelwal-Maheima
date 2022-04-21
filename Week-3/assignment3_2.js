var fruits = {
    name: 'Mango',
    getName: function(){
        return this.name
    }
}

var getfruitsName = fruits.getName.bind(fruits);
console.log(getfruitsName());

function i_call(){
    var shoppingList = [
        this.grocery,
        this.apparels,
        this.vegetables,
    ]
    console.log(shoppingList);
}

var day1 = {
    grocery: {grocery: ['bread', 'butter', 'Spices']},
    apparels: {apparels: ['colognes', 'handkerchiefs']},
    vegetables: {vegetables: ['gourd', 'tomatoes']}
}

i_call.call(day1)

function i_apply(){
    var changeableArray = [1,8,43,6];
    var max = Math.max.apply(null, changeableArray);
    var min = Math.min.apply(null, changeableArray);
    console.log(max, min);
}
i_apply()
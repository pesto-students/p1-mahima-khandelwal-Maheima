const doTask1 = async () =>{return 5};
const doTask2 = async () =>{console.log('task2')};
const doTask3 = async () =>{console.log('task3')};

async function* gen(callback1, callback2, callback3){
    yield await callback1(); 
    yield await callback2();
    yield await callback3();
}

const getMe = gen(doTask1, doTask2, doTask3);
console.log(getMe.next().then((value) => console.log(value)));
console.log(getMe.next().then((value) => console.log(value)));
console.log(getMe.next().then((value) => console.log(value)));

/* 
    Below function is memoize.
    - It takes the function multiply as its argument and its children accepts all the arg from multiply
    - We save the arguments in the form of string to the variable key and it is checked with the current arg
    if it matches the current arg then, the value strored at that key is returned else the args is sent to the reducer funtion
    ato perform action and its key is stored in the cache
*/
function memoize(fn) {
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        console.log('function called with' + key);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}


function multiply(a,b){
    return a * b
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}
const memoizeMul = memoize(multiply);

time(()=>memoizeMul(10, 100));
time(()=>memoizeMul(400, 500));
time(()=>memoizeMul(10, 100));
time(()=>memoizeMul(10, 100));
time(()=>memoizeMul(10, 100));
time(()=>memoizeMul(400, 500));



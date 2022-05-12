const hasDuplicate = (arr) => arr.length !== new Set(arr).size;
console.log(hasDuplicate([1,5,7,6,7,6,6]));

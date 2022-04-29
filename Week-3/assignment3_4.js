function createStack() {
  let items= [];
  return {
    
    push(item) {
      items.push(item);
      console.log(items);

    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack(); //creates an instance of stack
stack.push(10);
stack.push(5);
stack.pop(); 
console.log(stack.items);


// stack.items = [34,45,67];
// stack.some = [1, 5,0]
// console.log(stack.items)
// console.log(stack)

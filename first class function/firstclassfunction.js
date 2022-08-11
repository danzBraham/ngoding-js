// Function as a variable
const hello = () => {
   console.log('Hello!');
}

// Function as an argument (callback function)
const say = callback => {
   callback()
}

// Function return function
const sayHello = () => {
   return () => {
      console.log('Hello!');
   }
}

hello();
say(hello);
sayHello()();
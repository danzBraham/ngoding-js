const obj = '{"age": 17}';

try {
   const user = JSON.parse(obj);
   if (!user.name) {
      throw new SyntaxError("'name' is required");
   }
   console.log(user.name);
   console.log(user.age);
} catch (error) {
   if (error instanceof SyntaxError) {
      console.log(`JSON Error: ${error.message}`);
   } else if (error instanceof ReferenceError) {
      console.log(error.message);
   } else {
      console.log(error.stack);
   }
}
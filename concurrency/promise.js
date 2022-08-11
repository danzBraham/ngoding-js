const executorFunction = (resolve, reject) => {
   const isCoffeeMakerReady = true;
   if (isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat!");
   } else {
      reject("Maaf mesin kopi sedang tidak bisa digunakan")
   }
}

const makeCoffee = () => {
   return new Promise(executorFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);
const getCoffee = () => {
   return new Promise((resolve, reject) => {
      const seeds = 100;
      setTimeout(() => {
         if (seeds >= 10) {
            resolve("Biji kopi didapatkan!");
         } else {
            reject("Biji kopi habis!");
         }
      }, 1000);
   });
}

// Menulis proses asynchronous yang normal
// function makeCoffee() {
//    getCoffee().then((coffee) => {
//       console.log(coffee);
//    }).catch((err) => {
//       console.log(err);
//    });
// }

// Menulis proses asynchronous dengan gaya synchronous
async function makeCoffee() {
   try {
      const coffee = await getCoffee();
      console.log(coffee);
   } catch (rejectedReason) {
      console.log(rejectedReason);
   }
}

makeCoffee();
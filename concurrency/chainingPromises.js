const state = {
   stock: {
      coffeeBeans: 300,
      water: 2000
   },
   isCoffeeMachineBusy: false
}

const checkAvailability = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (!state.isCoffeeMachineBusy) {
            resolve("Mesin kopi siap digunakan!");
         } else {
            reject("Maaf, mesin kopi sedang sibuk");
         }
      }, 1000);
   });
}

const checkStock = () => {
   return new Promise((resolve, reject) => {
      state.isCoffeeMachineBusy = true;
      setTimeout(() => {
         if (state.stock.coffeeBeans >= 20 && state.stock.water >= 250) {
            resolve("Stok cukup. Kopi bisa dibuat!");
         } else {
            reject("Maaf, stok tidak cukup untuk membuat kopi");
         }
      }, 1500);
   });
}

const brewCoffee = () => {
   console.log("Kopi Anda sedang dibuat...");
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("Kopi sudah siap!");
      }, 2000);
   });
}

function makeEspresso() {
   checkAvailability()
   .then(value => {
      console.log(value);
      return checkStock();
   })

   .then(value => {
      console.log(value);
      return brewCoffee();
   })

   .then(value => {
      state.isCoffeeMachineBusy = false;
      console.log(value);
   })

   .catch(rejectedReason => {
      state.isCoffeeMachineBusy = false;
      console.log(rejectedReason);
   })
}

makeEspresso();
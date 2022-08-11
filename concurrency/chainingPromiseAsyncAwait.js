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
            reject("Mesin kopi sedang sibuk!");
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
            reject("Stok tidak cukup untuk membuat kopi!");
         }
      }, 1500);
   });
}

const boilWater = () => {
   return new Promise((resolve, reject) => {
      console.log("Memanaskan air...");
      setTimeout(() => {
         resolve("Air sudah mendidih!");
      }, 2000);
   });
}

const grindCoffee = () => {
   return new Promise((resolve, reject) => {
      console.log("Menggiling biji kopi...");
      setTimeout(() => {
         resolve("Biji kopi sudah tergiling!")
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

async function makeEspresso() {
   try {
      await checkAvailability();
      await checkStock();
      await Promise.all([boilWater(), grindCoffee()]);
      const coffee = await brewCoffee();
      console.log(coffee);
   } catch (rejectedReason) {
      console.log(rejectedReason);
   }
}

makeEspresso();
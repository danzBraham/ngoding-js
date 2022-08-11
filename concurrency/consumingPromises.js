const stock = {
   coffeeBeans: 300,
   water: 1000
}

const checkStock = () => {
   return new Promise((resolve, reject) => {
      if (stock.coffeeBeans >= 20 && stock.water >= 250) {
         resolve("Stok cukup. Kopi bisa dibuat!");
      } else {
         reject("Stok tidak cukup untuk membuat kopi!");
      }
   });
}

const handleSucces = resolvedValue => {
   console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
   console.log(rejectionReason);
}

checkStock().then(handleSucces).catch(handleFailure);
const orderCoffee = callback => {
   let coffee = null;
   console.log('Kopi sedang dibuat, tunggu sebentar ya...');
   setTimeout(() => {
      coffee = 'Kopi sudah jadi!';
      callback(coffee);
   }, 3000);
}

orderCoffee(coffee => {
   console.log(coffee);
});
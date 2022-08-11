const playerOne = {
   name: 'Zidan',
   age: 17,
   favoriteFood: 'Steak',
   address: {
      city: 'Denpasar',
      province: 'Bali'
   }
};

const playerTwo = {
   name: 'Thomas',
   age: 33,
   address: {
      city: 'Citayem',
      province: 'Jawa Barat'
   }
};

const playerThree = {
   name: 'Jay',
   age: 24,
   address: {
      city: 'Bandung',
      province: 'Jawa Barat'
   }
};

const playerFour = {
   name: 'Ayanokouji',
   age: 17,
   favoriteFood: 'Cockroach'
};

// const { name: firstName = 'Shelby', age, favoriteFood = 'Chicken', address: {city}} = playerOne;
// console.log(firstName);
// console.log(age);
// console.log(favoriteFood);
// console.log(city);

// const {name, age, ...rest} = playerTwo;
// console.log(name);
// console.log(age);
// console.log(rest);

// const playerFive = {...playerThree, ...playerFour};
// console.log(playerFive);

function printUser({name, age, favoriteFood = 'Rice', address: {city}}) {
   console.log(`My name ${name}, age ${age}, favorite food ${favoriteFood}, i live in ${city}`);
}

printUser(playerOne);
function attackerAndWalker({name}){
   return {
      attack: () => console.log(`${name} attacked`),
      walk: () => console.log(`${name} walked`)
   }
}

// Dengan function declaration
// function swimmer({name}) {
//    return {
//       swim: () => console.log(`${name} swam`)
//    }
// }

// Dengan arrow function
const swimmer = ({name}) => ({
   swim: () => console.log(`${name} swam`)
})

function flyer({name}) {
   return {
      fly: () => console.log(`${name} flew`)
   }
}

function swimmingMonster(mons) {
   const monster = {name: mons};

   // Cara 1
   // return {
   //    ...monster,
   //    ...attackerAndWalker(monster),
   //    ...swimmer(monster)
   // }

   // Cara 2
   return Object.assign(monster, attackerAndWalker(monster), swimmer(monster))
}

function flyingMonster(mons) {
   const monster = {name: mons};

   return {
      ...monster,
      ...attackerAndWalker(monster),
      ...flyer(monster)
   }
}


function flyingSwimmingMonster(mons) {
   const monster = {name: mons};

   return {
      ...monster,
      ...attackerAndWalker(monster),
      ...swimmer(monster),
      ...flyer(monster)
   }
}

const fsm = flyingSwimmingMonster('Kaido');
fsm.walk();
fsm.attack();
fsm.swim()
fsm.fly();

const sm = swimmingMonster('Sea Monster');
sm.walk();
sm.attack();
sm.swim();

const fm = flyingSwimmingMonster('God Enel');
fm.walk();
fm.attack();
fm.fly();
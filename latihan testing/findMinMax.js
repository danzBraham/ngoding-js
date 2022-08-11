// const findMin = (a, b, c) => {
//    if (a < b && a < c) {
//       return a;
//    } else if (b < a && b < c) {
//       return b;
//    } else {
//       return c
//    }
// }

// const findMin = (a, b, c) => {
//    let minValue = a;
//    if (a < b) {
//       minValue = a;
//    } else if (b < a) {
//       minValue = b;
//    }
//    if (c < minValue) {
//       minValue = c;
//    }
   
//    return minValue;
// }

// const findMin = (a, b, c) => {
//    if (a < b) {
//       if (a < c) {
//          return a;
//       } else {
//          return c;
//       }
//    } else if (b < a) {
//       if (b < c) {
//          return b;
//       } else return c;
//    } else {
//       return c;
//    }
// }

const findMin = (a, b, c) => {
   let minValue = 0;
   if (a < b) {
      minValue = a;
   } else if (b < a) {
      minValue = b;
   } else {
      minValue = c;
   }
   return minValue;
}

// const findMax = (a, b, c) => {
//    if (a > b && a > c) {
//       return a;
//    } else if (b > a && b > c) {
//       return b;
//    } else {
//       return c;
//    }
// }

// const findMax = (a, b, c) => {
//    return Math.max(a, b, c);
// }

   const findMax = (a, b, c) => {
      if ( a > b || a > c) {
         return a;
      } else if (b > a || b > c) {
         return b;
      } else {
         return c;
      }
   }

// const findMax = (a, b, c) => {
//    if (a < b && a < c) {
//       return a;
//    } else if (b < a && b < c) {
//       return b;
//    } else {
//       return c;
//    }
// }

module.exports = {findMin, findMax}
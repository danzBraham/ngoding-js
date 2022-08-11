class ValidationError extends Error {
   constructor(message) {
      super(message);
      this.name = "ValidationError";
   }
}

const validateNumberInput = (a, b, c) => {
   if (typeof a !== "number") {
      throw new ValidationError("Argumen pertama harus number");
   }
   if (typeof b !== "number") {
      throw new ValidationError("Argumen kedua harus number");
   }
   if (typeof c !== "number") {
      throw new ValidationError("Argumen ketiga harus number");
   }
}

const detectTriangle = (a, b, c) => {
   try {
      validateNumberInput(a, b, c);
   } catch (error) {
      if (error instanceof ValidationError) {
         return error.message;
      }
   }
   if (a === b && b === c) {
      return 'Segitiga sama sisi';
   } else if (a === b || b === c || a === c) {
      return 'Segitiga sama kaki';
   } else {
      return 'Segitiga sembarang';
   }
}

const segitiga = detectTriangle(1, false, 4);
console.log(segitiga);
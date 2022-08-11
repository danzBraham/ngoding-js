// [1] List of Abstraction
const canSendMessage = ({message}) => ({
   sendMessage: () => console.log(`Send message: ${message}`)
});

const checkIsValidPhone = ({from}) => ({
   isValid: () => console.log(`valid phone ${from}`)
});

// [2] Create object composition
const personalEnterprise = (from, message, store) => {
   // [3] Attributes
   const self = {
      from,
      message,
      store
   }

   // [4] Method
   const personalEnterpriseBehaviors = ({store}) => ({
      createCatalog: () => console.log(`Catalog has created ${store}`)
   })

   return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
}

const pe = personalEnterprise('zidan@gmail.com', 'Hai, produk baru nih', 'Shelby store');
pe.isValid();
pe.sendMessage();
pe.createCatalog();
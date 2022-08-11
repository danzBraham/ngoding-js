class NetworkError extends Error {
   constructor(message) {
      super(message);
      this.name = 'NetworkError';
   }
}

const fetchingUserFromInternet = isOffline => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (!isOffline) {
            resolve({name: "John", age: 18});
         } else {
            reject(new NetworkError("Gagal mendapatkan data dari internet"));
         }
      }, 500);
   });
}

async function gettingUserName() {
   try {
      const user = await fetchingUserFromInternet();
      return user.name;
   } catch (error) {
      console.log(error.message);
   }
}

gettingUserName();

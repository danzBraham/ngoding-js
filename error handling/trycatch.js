try {
   console.log("Awal blok try");
   errorcode;
   console.log("Akhir blok try");
} catch (error) {
   // parameter error merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
} finally {
   // finally akan tetap dieksekusi tidak peduli error atau tidak
   console.log("Akan tetap dieksekusi");
}
const age = prompt('Masukkan Tanggal Lahir');

const myAge = age => {
   const ultah = new Date(age);
   const today = Date.now();

   const diffMs = today - ultah.getTime();
   const diffDate = new Date(diffMs);

   return diffDate.getFullYear() - 1970;
}

console.log(myAge(age));

const h1 = document.getElementById('age');
h1.innerHTML = `Umur Anda ${myAge(age)} Tahun`;
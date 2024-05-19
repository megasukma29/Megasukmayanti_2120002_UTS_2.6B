document.getElementById('calculateButton').addEventListener('click', function() {
  // Mendapatkan nilai dari input
  var inputInteger = parseInt(document.getElementById('inputInteger').value);
  var inputOdd = parseInt(document.getElementById('inputOdd').value);

  // Memastikan inputOdd adalah bilangan ganjil
  if (inputOdd % 2 !== 1) {
    alert("Mohon masukkan bilangan ganjil untuk input kedua.");
    return;
  }

  // Menghitung hasil perkalian
  var result = inputInteger * inputOdd;

  // Menampilkan hasil
  document.getElementById('result').innerHTML = "Hasil perkalian dari " + inputInteger + " dan " + inputOdd + " adalah " + result + ".";
});

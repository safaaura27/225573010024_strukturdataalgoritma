// Cara lambat (O(n^2))
function cariPasanganLambat(arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
// Cara cepat (O(n))
function cariPasanganCepat(arr, target){
    const seen = new Set();

    for (let num of arr){
        let complement = target - num;

        if (seen.has(complement)){
            return [complement, num];
        }

        seen.add(num);
    }

    return null;
}
// Data yang digunakan
const angka = [2, 7, 11, 15];
const target = 9;
// Menampilkan hasil
console.log("Hasil cara lambat:", cariPasanganLambat(angka, target));
console.log("Hasil cara cepat:", cariPasanganCepat(angka, target));
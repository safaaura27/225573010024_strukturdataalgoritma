//1.Object Destructuring
const produk = {
nama    : 'Laptop',
merk    :'TechBrand',
harga   : 125000000,
stok    : 15,
garansi : '1 tahun',
};

//cara baru : object destructuring
const { nama, harga, stok } = produk;
console.log(`${nama}  | Rp.${harga.toLocaleString()} | Stok: ${stok}`);
//Destructuring dengan alias
const { nama: namaProduk, garansi: periodeGaransi } = produk;
console.log(`Produk: ${namaProduk} | Garansi: ${periodeGaransi}`);
//Destructuring dengan nilai default
const { warna = 'Tidak Diketaui', stok: jumlahStok = 0 } = produk;
console.log('Warna: &{warna} | Stok: ${jumlahStok}`);')

//2. Array Destructuring 
const koordinat = [10, 25, 5];
const [x, y, z] = koordinat;
console.log('\n=== Array Destructuring ===');
console.log('x=${x}, y=${y}, z=${z}');
//skip element dengan koma 
const [, kedua,  , ] = [100, 200, 300, 400];
console.log('Elemen kedua:', kedua);
//swap dua variabel dengan Destructuring 
let a = 'pertama', b = 'kedua';
console.log('Sebelum swap:',  a, b);
[a, b] = [b, a];
console.log('Setelah swap:', a, b);

//3. Spread Operator
const buah = ['apel', 'jeruk', 'mangga'];
const sayur = ['bayam', 'worter', ];
// menyalin array 
const salinanBuah = [...buah];
salinanBuah.push('pisang');
console.log('\n=== Spread Operator ===');
console.log('Asli:', buah);
console.log('Salinan:', salinanBuah);
// menggabungkan array
const semuaMakanan = [...buah, ...sayur, 'Tenmpe'];
console.log('Gabungan:', semuaMakanan);
//spread pada object
const profil = { nama: 'Safa', umur: 19, kota: 'Lhokseumawe'};
const profilUpdate = { ...profil, kota: 'Bandung', pekerjaan: 'Developer' };
console.log('Profil Asli:', profil);
console.log('Profil Update:', profilUpdate);

//4. Rest Parameter
function jumlahSemua(...angka) {
    console.log('Argumen diterima :', angka);
    return angka.reduce((total, n) => total + n, 0);
}
console.log('\n=== Rest Parameter ===');
console.log('Total:', jumlahSemua(1, 2, 3));
console.log('Total:', jumlahSemua(10, 20, 30, 40, 50));
const [kepala, ...ekor] = [1, 2, 3, 4, 5];
console.log('Kepala:', kepala);
console.log('Ekor:', ekor);

//latihan
console.log('\n=== Latihan ====')
const timA = ['safa', 'aura', 'fazil'];
const timB = ['akmal', 'kamel'];
const timGabungan = [...timA, ...timB, 'vikran'];
const [kapten, ...anggota] = timGabungan;
console.log('Kapten :', kapten);
console.log('Anggota :', anggota);

const pengaturanDefault = {
    tema : 'terang',
    bahasa : 'id',
    notifikasi : true,
    fontSize : 14
}
console.log('Pengaturan Default :', pengaturanDefault);

const settingDefault ={
    bahasa : 'id',
    notifikasi : true
}

const pengaturanUser = {tema : 'gelap', ...settingDefault, fontSize : 16};
console.log('Pengaturan User :', pengaturanUser);
console.log('tema :', pengaturanUser.tema, 'font size :', pengaturanUser.fontSize);
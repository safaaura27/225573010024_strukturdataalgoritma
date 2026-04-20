// 1. membuat object literal//
const mahasiswa = {
    nama    : 'Safa Aura',
    umur    : 19,
    jurusan : 'Teknik Informatika',
    ipk     : 3.65,
    aktif   : true,
};

//2. membuat property//
console.log('=== Alses Property===');
console.log('Nama     :', mahasiswa.nama);
console.log('Jurusan  :', mahasiswa['jurusan']);
// bracket notation berguna jika key disimpan di variabel//
const keyYangDicari = 'ipk';
console.log('IPK      :', mahasiswa[keyYangDicari]);

//3. menambah dan mengubah property//
mahasiswa.email = 'safaaura27@gmail.com';
mahasiswa.umur = 20;
console.log('\nSetelah diubah:', mahasiswa);

/4. menghapus property//
delete mahasiswa.aktif;
console.log('\nSetelah dihapus:', mahasiswa);

//5. menambhahkan method ke object//
const dosen = {
    nama       : 'Dr. Ahmad Fauzi',
    mataKUliah : 'Struktur Data',
    pengalaman : 10, //tahun
    perkenalan() {
        return `Halo, saya ${this.nama},mengajar ${this.mataKUliah} .`;
    },
    statusSenior() {
        if (this.pengalaman > 10) {
            return '${this.nama} adalah dosen senior.';
        }
        return '${this.nama} adalah dosen junior.';
    }
};
console.log('\n=== Method pada Object===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

//6. iterasi properti dengan for...in//
console.log('\n=== Iterasi Object===');
for (const key in dosen) {
    if(typeof dosen[key] !== 'function') {
        console.log(`   ${key}: ${dosen[key]}`);
    }
}
//Object.keys(), Object.values(), Object.entries()
console.log('Keys   :', Object.keys(mahasiswa));
console.log('Values :', Object.values(mahasiswa));

const buku ={
    judul : 'Galaksi',
    pengarang : 'DAVISPA',
    tahunTerbit : '2021',
    harga : '250000',
    tersedia : 'true',

info(){
    return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia" : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}
//latihan
const koleksiBuku = [
    {
        judul: 'Interaksi',
        pengarang: 'TULUS',
        tahunTerbit: 2005,
        harga: '200000',
        tersedia :true,
        info(){
            return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "tersedia" : "Tidak Tersedia"}`;
        },
        diskon(persen) {
            return this.harga *(1 - persen / 100);
        }
},
{
    judul: 'Lantas',
    pengarang: 'JUICY LUICY ',
    tahunTerbit: '2019',
    harga : 180000,
    tersedia: false,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
},
{
    judul: 'Shameless',
    pengarang: 'CAMILA CABELLO',
    tahunTerbit: '2013', 
    harga: '1500000',
    tersedia: true,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}];
koleksiBuku.forEach(buku => {
    console.log(buku.info());
});
console.log('Buku tersedia (filter):')
const bukuTersedia = koleksiBuku.filter(buku => buku.tersedia === true);
console.log('Total buku tersedia: ' + bukuTersedia.length + ' judul\n');
bukuTersedia.forEach(buku => {
    console.log(buku.info());
});

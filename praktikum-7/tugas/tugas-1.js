class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; // "darurat" atau "biasa"
        this.waktuDaftar = waktuDaftar;
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = [];
        this.antrianBiasa = [];
    }

    // Menambahkan pasien ke antrian
    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.push(pasien);
        } else {
            this.antrianBiasa.push(pasien);
        }

        console.log(
            `${pasien.nama} masuk antrian (${pasien.prioritas})`
        );
    }

    // Melayani pasien
    layani() {
        let pasien;

        if (this.antrianDarurat.length > 0) {
            pasien = this.antrianDarurat.shift();
        } else if (this.antrianBiasa.length > 0) {
            pasien = this.antrianBiasa.shift();
        } else {
            console.log("Tidak ada pasien dalam antrian");
            return;
        }

        console.log(
            `Melayani pasien: ${pasien.nama} (${pasien.prioritas})`
        );
    }

    // Menampilkan isi antrian
    tampilkanAntrian() {
        console.log("\n=== Antrian Darurat ===");

        if (this.antrianDarurat.length === 0) {
            console.log("Kosong");
        } else {
            this.antrianDarurat.forEach((p, index) => {
                console.log(
                    `${index + 1}. ${p.nama} - ${p.prioritas}`
                );
            });
        }

        console.log("\n=== Antrian Biasa ===");

        if (this.antrianBiasa.length === 0) {
            console.log("Kosong");
        } else {
            this.antrianBiasa.forEach((p, index) => {
                console.log(
                    `${index + 1}. ${p.nama} - ${p.prioritas}`
                );
            });
        }
    }
}

// Membuat objek antrian rumah sakit
const rs = new AntrianRS();

// Data 10 pasien
const daftarPasien = [
    new Pasien(1, "Budi", "biasa", "08:00"),
    new Pasien(2, "Siti", "darurat", "08:05"),
    new Pasien(3, "Andi", "biasa", "08:10"),
    new Pasien(4, "Rina", "darurat", "08:15"),
    new Pasien(5, "Doni", "biasa", "08:20"),
    new Pasien(6, "Lina", "biasa", "08:25"),
    new Pasien(7, "Ayu", "darurat", "08:30"),
    new Pasien(8, "Rizky", "biasa", "08:35"),
    new Pasien(9, "Tono", "darurat", "08:40"),
    new Pasien(10, "Maya", "biasa", "08:45")
];

console.log("=== SIMULASI ANTRIAN RUMAH SAKIT ===\n");

// Daftarkan semua pasien
daftarPasien.forEach(pasien => rs.daftar(pasien));

// Tampilkan antrian
rs.tampilkanAntrian();

// Layani semua pasien
console.log("\n=== PROSES PELAYANAN ===");

while (
    rs.antrianDarurat.length > 0 ||
    rs.antrianBiasa.length > 0
) {
    rs.layani();
}
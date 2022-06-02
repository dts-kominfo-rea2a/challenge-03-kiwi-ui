// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (nama,kuantitas) => {
  let hasil = [];
  for (let counter = 0; counter < dataBelanjaan.length; counter++){
    let prosesHasil = "-" + " " + dataBelanjaan[counter].nama + " x " + dataBelanjaan[counter].kuantitas
    hasil.push(prosesHasil);
  };
  return hasil;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (kuantitas, harga) => {
  let hasil = null;
  for (let counter = 0; counter < dataBelanjaan.length; counter++){
    hasil = dataBelanjaan[counter].harga * dataBelanjaan[counter].kuantitas + hasil;
    // ?console.log(sum(dataBelanjaan[counter].kuantitas * dataBelanjaan[counter].harga));
  }
  return hasil;
};
// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

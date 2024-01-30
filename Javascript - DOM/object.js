var siswa = new Object();
siswa.namaDepan ="Rizal "
siswa.namaBelakang ="Ramdhani"
siswa.namaLengkap = function(){
    return this.namaDepan + "" +this.namaBelakang;
};

//object json
var siswa2 = {
    namaDepan: "Raka ",
    namaBelakang: "Putra",
    namaLengkap: function(){
        return this.namaDepan + "" + this.namaBelakang;
    },
};


alert("nama: " + siswa.namaLengkap());
alert("nama: " + siswa2.namaLengkap());


var PersonKelas = require ('../person/person');

class PersonValid extends PersonKelas{
  constructor(...args) {
    super(...args)
  }

  valid(){
      //console.log(this.nik.length)
      if (this.nik.length < 16){
         return 'NIK yang dimasukan tidak sesuai format atau kurang angka'
      } else if (this.nik.length > 16){
          return 'NIK yang dimasukkan tidak sesuai format atau lebih angka'
      } else {
          return 'NIK sesuai format'
      }
  }

  validbod(){
      //console.log(this.birthOfDate[2])
      var day = [this.birthOfDate[8],this.birthOfDate[9]];
      var month = [this.birthOfDate[5],this.birthOfDate[6]];
      var year = [this.birthOfDate[2],this.birthOfDate[3]];
      var cekbod = day.concat(month,year)
      var x = cekbod.toString()
      //console.log(x)
      var ceknik = [this.nik[6],this.nik[7],this.nik[8],this.nik[9],this.nik[10],this.nik[11],]
      var y = ceknik.toString()
      //console.log(y)
      if (x.localeCompare(y) == 0){
          return "NIK dan tanggal lahir sesuai"
      } else {
          return "NIK dan tanggal lahir tidak sesuai"
      }
  }
} 

module.exports = PersonValid;
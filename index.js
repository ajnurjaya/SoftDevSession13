var nama = 'asep'
var nik = '3273302208900003'
var birth = '2002-08-22'

var PersonKelas = require('./domain/person/person');
var person1 = new PersonKelas(nama, nik, birth);
console.log(person1.getWeekType());
console.log(person1.getAge()[0]);

var PersonAge = require('./domain/umur/age');
var age1 = new PersonAge(nama, nik, birth);
console.log(age1.age());

console.log('\n===================\n')

var nama2 = 'asep'
var nik2 = '3273302208900003'
var birth2 = '1990-08-22'

var PersonKelas = require('./domain/person/person');
var person2 = new PersonKelas(nama2, nik2, birth2);
console.log(person2.getWeekType());
console.log(person2.getAge()[0]);

var PersonAge = require('./domain/umur/age');
var age2 = new PersonAge(nama2, nik2, birth2);
console.log(age2.age());
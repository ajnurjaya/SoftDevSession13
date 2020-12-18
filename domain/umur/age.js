var PersonKelas = require ('../person/person');

class PersonAge extends PersonKelas{
  constructor(...args) {
    super(...args)
  } 

age() {
    //console.log(super.getAge());
    if(super.getAge()[1] < 20){
        return "Merupakan seorang Generasi Z"
    } else if (super.getAge()[1] >= 20 && super.getAge()[1] < 30) {
        return "Merupakan seorang Milenial Muda"
    } else if (super.getAge()[1] >= 30 && super.getAge()[1] < 40){
        return "Merupakan seorang Milenial Tua"
    } else {
        return "merupakan seorang Baby Boomer"
    }
}
}
module.exports = PersonAge;
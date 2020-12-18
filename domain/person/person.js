class PersonKelas {
    constructor(name, nik, bod){
        this.name = name;
        this.nik = nik;
        this.birthOfDate = bod;
    }

    getWeekType() {
        var day = new Date(this.birthOfDate).getDay()
        if (day > 0 && day < 6){
            return this.name + " lahir pada tipe minggu weekday"
        } else if (day === 0 || day === 6){
            return this.name + " lahir pada tipe minggu weekend"
        } else {
            return "tanggal lahir" + this.name+ ' bermasalah'
        }
    }

    getAge(){
        var birthOfDate = Date.parse(this.birthOfDate)
        var now = Date.now()
        var diff = now - birthOfDate
        var diffDate = new Date(diff)
        var umur = Math.abs(diffDate.getUTCFullYear() -1970);
        return ["Saat ini berumur " + umur, umur]
    }
}

module.exports = PersonKelas;
class Singleton{
    constructor(){
        console.log('Singleton constructor');
        if(Singleton.instance){
            console.log('Singleton ya existe');
            return Singleton.instance;
        }
        console.log('Singleton creandose');
        Singleton.instance = this;
    }
    static getInstance(){
        return Singleton.instance;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton();

console.log('************');

class WeekDays{
    daysEs = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    constructor(lang){
        this.lang = lang;
        if(WeekDays.instance){
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays(){
        return this.lang === 'es' ? this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays('es') ;
const weekDays2 = new WeekDays('es') ;

console.log(weekDays.getDays());
console.log(weekDays2.getDays());
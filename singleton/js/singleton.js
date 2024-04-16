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
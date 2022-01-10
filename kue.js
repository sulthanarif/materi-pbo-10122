class Kue {
    constructor(gula,berat,aksesoris){
        this._bahan = 'tepung';
        this._gula = gula ;
        this._berat = berat;
        this._aksesoris = aksesoris;
    };
    // getter
    get bahan(){
        return this._bahan
    };
    
    get gula(){
        return this._gula
    };
    
    get berat(){
        return this._berat
    };
    
    get aksesoris(){
        return this._aksesoris
    };

    // setter
    set gula(value){
        this._gula = value;
    };
    set berat(value){
        this._berat = value;
    };
    set aksesoris(value){
        this._berat = value;
    };
}

// objek
// const kuePutu = new Kue('gula jawa',10,'daun');
// console.log(kuePutu);

class KuePutu extends Kue{
    constructor(gulaLevel, ...args){
        super(...args)
        this._gulaLevel = gulaLevel;
    }
    // getter
    get gulaLevel(){
        return this._gulaLevel
    };
    // setter
    set gulaLevel(value){
        this._gulaLevel = value;
    };
};

class KueCubit extends Kue{
    constructor(...args){
        super(...args)
        this._bahan = ['tepung','telur']; 
    }
    
};

class KueWkwk extends Kue{
    constructor(...args){
        super(...args)
        this._bahan = ['tepung','telur'];
    }
};

const kuePutu = new KuePutu(70,'gula merah', 10, 'daun');
const kueCubit = new KueCubit('gula pasir', 10, 'meses');
const kueWkwk = new KueWkwk('aokwoka',10,'kokwokwok');
console.log(kuePutu)
console.log(kueCubit)
console.log(kueWkwk)
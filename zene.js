class Szam{
    #cim;
    #hossz;

    constructor(nev,hossz){
        this.cim = cim;
        this.hossz = hossz;
    }

    get cim(){
        return this.#cim;
    }
    set cim(cim){
        this.#cim = cim;
    }
    get hossz(){
        return this.#hossz;
    }
    set hossz(hossz){
        this.#hossz = hossz;;
    }
}
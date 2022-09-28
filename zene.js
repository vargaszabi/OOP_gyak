class Szam{
    #cim;
    #hossz;

    constructor(cim,hossz){
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
        if(hossz >=0){
            this.#hossz = hossz;;
        } else{
            throw new Error("A másodperc nem lehet negatív")
        }
    }
}
let lista = [];

function gombKatt(){
    let cim = document.getElementById("cim").value;
    let hossz = document.getElementById("hossz").value;
    lista.push(new Szam(cim, hossz));
}

document.getElementById('gomb').addEventListener('click',gombKatt)

console.log(lista);
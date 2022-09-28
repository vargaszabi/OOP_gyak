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
let össz = 0;

function gombKatt(){
    let cim = document.getElementById("cim").value;
    let hossz = parseInt(document.getElementById("hossz").value);
    lista.push(new Szam(cim, hossz));
    for(let i = 0; i < lista.length; i++){
        össz += lista[i].hossz;
    }
    document.getElementById('kiirat').innerHTML = össz;
}

document.getElementById('gomb').addEventListener('click',gombKatt)

console.log(lista);
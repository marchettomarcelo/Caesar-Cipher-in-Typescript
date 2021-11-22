

var CesarCypher = (frase:string):any => {
    
    const adicionar = 20
    const alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var cifra = ""
   
    for(let i=0; i<frase.length; i++){

        var letraatual = alfab.indexOf(frase[i])
       

        cifra += alfab[(letraatual + adicionar) % 26]
    }
    return cifra
}
var deCypher = (fraseCod: string, bias:number): string => {

    const alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var decifra = ""
    
    for(let i=0; i<fraseCod.length; i++){

        var letraatual = alfab.indexOf(fraseCod[i])
        var ajustes = letraatual - bias

        if (ajustes < 0){
            decifra += alfab[alfab.length + ajustes]
        } else{
            decifra += alfab[ajustes % 26]
        }
    }
    return decifra
}




var result =  deCypher(CesarCypher("abzy"), 20)
console.log(result)


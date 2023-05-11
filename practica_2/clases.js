

class Grupos {
    constructor (a, b, c, d) {
        this.nombre = a;
        this.genero = b;
        this.integrantes = c;
        this.activo = d;
    }
    
    integrantesNuevos(integrante){
        this.integrantes = integrante;
        console.log(`El grupo ahora tiene  ${this.integrantes} integrantes`)
    }

    cambioGenero(genero){
        this.genero=genero;
        console.log(`El grupo cambio el genero a  ${this.genero} `)
    }
}
const OneDirecction = new Grupos ('BoyBand  One Direcction', 'Pop', 5, false);
const Exo = new Grupos ('Group Exo', 'K-pop', 9, true);
const Morat = new Grupos (' Banda Morat ', 'pop latino', 5, true);
const BigBang = new Grupos ('Grupo  BigBang', 'K_pop', 5, false);

console.log( ' La BoyBand One Direcction:', OneDirecction );
OneDirecction.integrantesNuevos(5);
OneDirecction.cambioGenero('rock');

console.log(' El Group Exo:', Exo);
Exo.integrantesNuevos(9);

console.log('La banda Morat:', Morat);
Morat.integrantesNuevos(5);

console.log('Grupo:', BigBang);
BigBang.integrantesNuevos(4);
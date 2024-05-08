class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, 
        Salud: ${this.salud}, 
        Velocidad: ${this.velocidad}, 
        Fuerza: ${this.fuerza}`);
    }

    drinkSake(){
        this.salud += 10;
    }
}
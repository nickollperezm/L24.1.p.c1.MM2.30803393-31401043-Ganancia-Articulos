export default class Cl_tienda {
    constructor() {
        this.acumPrecio = 0;
        this.contArticulos = 0;
        this.contArtMas65 = 0;
    }

    procesarArticulo(articulo) {
        this.acumPrecio += articulo.precio;
        this.contArticulos++;
        if(articulo.precio > 65){
            this.contArtMas65++;
        }
    }

    promPrecioVenta() {
        return this.acumPrecio / this.contArticulos;
    }

    artMas65() {
        return this.contArtMas65;
    }
}
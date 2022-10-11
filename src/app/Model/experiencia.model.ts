export class experiencia{
    
    id?: number;
    puesto: String;
    empresa: String;
    periodo: String;
    descripcion: String;
    urlfoto: String;
    

    constructor(puesto: String, empresa: String, periodo: String, descripcion: String, urlfoto: String){
                this.puesto = puesto;
                this.empresa = empresa;
                this.periodo = periodo;
                this.descripcion = descripcion;
                this.urlfoto = urlfoto;
            }
}
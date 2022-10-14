export class Experiencia{
    
    id?: number;
    puesto: string;
    empresa: string;
    periodo: string;
    descripcion: string;
    

    constructor(puesto: string, empresa: string, periodo: string, descripcion: string){
                this.puesto = puesto;
                this.empresa = empresa;
                this.periodo = periodo;
                this.descripcion = descripcion;
            }
}
export class Educacion {
    id?: number;
    titulo: string;
    institucion: string;
    periodo: string;

    constructor(titulo: string, institucion: string, periodo: string) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.periodo = periodo;
    }


}

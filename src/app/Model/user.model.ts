export class user{
    
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    titulo: String;
    descripcion: String;
    urlPerfil: String;
    urlBanner: String;
    ulinkedin: String;
    uinstagram: String;
    ufacebook: String;
    ugithub: String;

    constructor(nombre: String, apellido: String,email: String, titulo: String, descripcion: String,
            urlPerfil: String, urlBanner: String, ulinkedin: String,
            uinstagram: String, ufacebook: String, ugithub: String){
                this.nombre = nombre;
                this.apellido = apellido;
                this.email = email;
                this.titulo = titulo;
                this.descripcion = descripcion;
                this.urlPerfil = urlPerfil;
                this.urlBanner = urlBanner;
                this.ulinkedin = ulinkedin;
                this.uinstagram = uinstagram;
                this.ufacebook = ufacebook;
                this.ugithub = ugithub;
            }
}
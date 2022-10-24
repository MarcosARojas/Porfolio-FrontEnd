export class user{
    
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    titulo: String;
    descripcion: String;
    urlPerfil: String;
    urlBanner: String;
    uLinkedin: String;
    uInstagram: String;
    uFacebook: String;
    uGitHub: String;

    constructor(nombre: String, apellido: String,email: String, titulo: String, descripcion: String,
            urlPerfil: String, urlBanner: String, uLinkedin: String,
            uInstagram: String, uFacebook: String, uGitHub: String){
                this.nombre = nombre;
                this.apellido = apellido;
                this.email = email;
                this.titulo = titulo;
                this.descripcion = descripcion;
                this.urlPerfil = urlPerfil;
                this.urlBanner = urlBanner;
                this.uLinkedin = uLinkedin;
                this.uInstagram = uInstagram;
                this.uFacebook = uFacebook;
                this.uGitHub = uGitHub;
            }
}
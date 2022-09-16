export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;
    imgPerfil: String;
    imgBanners: String;
    linkLinkedin: String;
    linkInstagram: String;
    linkFacebook: String;
    linkGithub: String;

    constructor(nombre: String, apellido: String,titulo: String, descripcion: String,
            imgPerfil: String, imgBanners: String, linkLinkedin: String,
            linkInstagram: String, linkFacebook: String, linkGithub: String){
                this.nombre = nombre;
                this.apellido = apellido;
                this.titulo = titulo;
                this.descripcion = descripcion;
                this.imgPerfil = imgPerfil;
                this.imgBanners = imgBanners;
                this.linkLinkedin = linkLinkedin;
                this.linkInstagram = linkInstagram;
                this.linkFacebook = linkFacebook;
                this.linkGithub = linkGithub;
            }
}
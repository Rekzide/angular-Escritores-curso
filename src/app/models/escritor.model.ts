export class Escritor {
  id: number;
  nombre: string;
  apellidos: string;
  imagen: string;
  pais: string;

  constructor(pId: number, pNombre: string, pApellidos: string, pImgagen: string, pPais: string) {
      this.id = pId;
      this.nombre = pNombre;
      this.apellidos = pApellidos;
      this.imagen = pImgagen;
      this.pais = pPais;
  }
}

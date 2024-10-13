export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = () => {
      return nombre;
    };
    this._impuesto = () => {
      return impuesto;
    };
  }
  getNombre() {
    return this._nombre;
  }
  setNombre(nombre) {
    return (this._nombre = () => {
      return nombre;
    });
  }
  calcularImpuesto() {
    let i = this._impuesto()._montoBrutoAnual();
    let d = this._impuesto()._deducciones();
    return `El cliente ${this._nombre()} debe pagar un impuesto de: ${(i - d) * 0.21}`;
  }
}

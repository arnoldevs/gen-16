export default class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = () => {
      return montoBrutoAnual;
    };
    this._deducciones = () => {
      return deducciones;
    };
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }

  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    return (this._montoBrutoAnual = () => {
      return nuevoMontoBrutoAnual;
    });
  }
  set deducciones(nuevasDeducciones) {
    return (this._deducciones = () => {
      return nuevasDeducciones;
    });
  }
}

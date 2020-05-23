import CommonSelect from "./_CommonSelect";

export default class EstadosCivis extends CommonSelect {
  static options = [
    { value: 'Solteiro(a)', label: 'Solteiro(a)' },
    { value: 'Casado(a)', label: 'Casado(a)' },
    { value: 'Divorciado(a)', label: 'Divorciado(a)' },
    { value: 'Separado(a)', label: 'Separado(a)' },
    { value: 'Viúvo(a)', label: 'Viúvo(a)' },
  ];

  state = {
    options: EstadosCivis.options
  }
}
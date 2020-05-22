import CommonSelect from "./_CommonSelect";

export default class EstadosCivis extends CommonSelect {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'Solteiro(a)', label: 'Solteiro(a)' },
        { value: 'Casado(a)', label: 'Casado(a)' },
        { value: 'Divorciado(a)', label: 'Divorciado(a)' },
        { value: 'Separado(a)', label: 'Separado(a)' },
        { value: 'Viúvo(a)', label: 'Viúvo(a)' },
      ]
    }
  }
}
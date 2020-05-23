import CommonSelect from "./_CommonSelect";

export default class GrausInstrucao extends CommonSelect {
  static options = [
    { value: 'Ensino Fundamental incompleto', label: 'Ensino Fundamental incompleto' },
    { value: 'Ensino Fundamental completo', label: 'Ensino Fundamental completo' },
    { value: 'Ensino Médio incompleto', label: 'Ensino Médio incompleto' },
    { value: 'Ensino Médio completo', label: 'Ensino Médio completo' },
    { value: 'Ensino Superior incompleto', label: 'Ensino Superior incompleto' },
    { value: 'Ensino Superior completo', label: 'Ensino Superior incompleto' }
  ];

  state = {
    options: GrausInstrucao.options
  }
}
import CommonSelect from "./_CommonSelect";

export default class Racas extends CommonSelect {
  static options = [
    { value: 'Branca', label: 'Branca' },
    { value: 'Parda', label: 'Parda' },
    { value: 'Preta', label: 'Preta' },
    { value: 'Amarela', label: 'Amarela' },
    { value: 'Indígena', label: 'Indígena' },
  ];

  state = {
    options: Racas.options
  }
}
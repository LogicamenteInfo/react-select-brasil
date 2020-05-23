import CommonSelect from "./_CommonSelect";

export default class CategoriasCNH extends CommonSelect {
  static options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'AB', label: 'AB' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
  ];

  state = {
    options: CategoriasCNH.options
  }
}
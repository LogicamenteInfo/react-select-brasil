import CommonSelect from "./_CommonSelect";

export default class CategoriasCNH extends CommonSelect {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'AB', label: 'AB' },
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' },
        { value: 'E', label: 'E' },
      ]
    }
  }
}
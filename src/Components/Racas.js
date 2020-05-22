import CommonSelect from "./_CommonSelect";

export default class Racas extends CommonSelect {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'Branca', label: 'Branca' },
        { value: 'Parda', label: 'Parda' },
        { value: 'Preta', label: 'Preta' },
        { value: 'Amarela', label: 'Amarela' },
        { value: 'Indígena', label: 'Indígena' },
      ]
    }
  }
}
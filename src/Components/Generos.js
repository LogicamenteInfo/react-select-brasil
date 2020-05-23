import CommonSelect from "./_CommonSelect";

export default class Generos extends CommonSelect {
  static options = [
    { value: 'Homem', label: 'Homem' },
    { value: 'Mulher', label: 'Mulher' },
    { value: 'Não binário', label: 'Não binário' },
    { value: 'Cisgênero', label: 'Cisgênero' },
    { value: 'Transexual', label: 'Transexual' },
  ];

  state = {
    options: Generos.options
  }
}
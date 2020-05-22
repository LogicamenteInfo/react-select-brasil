import CommonSelect from "./_CommonSelect";

export default class Nacionalidades extends CommonSelect {

  static nacionalidades = ['Antiguano', 'Argentino', 'Bahamense', 'Barbadiano', 'Belizenho', 'Boliviano', 'Brasileiro', 'Chileno', 'Colombiano', 'Costarriquenho', 'Cubano', 'Dominicano', 'Equatoriano', 'Salvadorenho', 'Granadino', 'Guatemalteco', 'Guian\u00eas', 'Guianense', 'Haitiano', 'Hondurenho', 'Jamaicano', 'Mexicano', 'Nicaraguense', 'Panamenho', 'Paraguaio', 'Peruano', 'Portorriquenho', 'Dominicana', 'S\u00e3o-cristovense', 'S\u00e3o-vicentino', 'Santa-lucense', 'Surinam\u00eas', 'Trindadense', 'Uruguaio', 'Venezuelano', 'Alem\u00e3o', 'Austr\u00edaco', 'Belga', 'Croata', 'Dinamarqu\u00eas', 'Eslovaco', 'Esloveno', 'Espanhol', 'Franc\u00eas', 'Grego', 'H\u00fangaro', 'Irland\u00eas', 'Italiano', 'Noruego', 'Holand\u00eas', 'Polon\u00eas', 'Portugu\u00eas', 'Brit\u00e2nico', 'Ingl\u00eas', 'Gal\u00eas', 'Escoc\u00eas', 'Romeno', 'Russo', 'S\u00e9rvio', 'Sueco', 'Su\u00ed\u00e7o', 'Turco', 'Ucraniano', 'Americano', 'Canadense', 'Angolano', 'Mo\u00e7ambicano', 'Sul-africano', 'Zimbabuense', 'Arg\u00e9lia', 'Comorense', 'Eg\u00edpcio', 'L\u00edbio', 'Marroquino', 'Gan\u00e9s', 'Queniano', 'Ruand\u00eas', 'Ugandense', 'Bechuano', 'Marfinense', 'Camaronense', 'Nigeriano', 'Somali', 'Australiano', 'Neozeland\u00eas', 'Afeg\u00e3o', 'Saudita', 'Armeno', 'Bangladesh', 'Chin\u00eas', 'Norte-coreano', 'Sul-coreano', 'Indiano', 'Indon\u00e9sio', 'Iraquiano', 'Iraniano', 'Israelita', 'Japon\u00eas', 'Malaio', 'Nepal\u00eas', 'Omanense', 'Paquistan\u00eas', 'Palestino', 'Qatarense', 'S\u00edrio', 'Cingal\u00eas', 'Tailand\u00eas', 'Timorense', '\u00c1rabe', 'Vietnamita', 'Iemenita'];

  constructor(props) {
    super(props);
    this.state = {
      options: Nacionalidades.nacionalidades.map((n) => {
        return { value: n, label: n }
      })
    }
  }
}
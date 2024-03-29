import { ActionMeta, OnChangeValue } from "react-select";
import { CommonSelect, Option, SelectProps } from "./CommonSelect";

export type EstadosProps = keyof typeof Brasil;

type CidadesOption = Option & {
  ibge?: number | null;
};

type CidadesSelectProp = Omit<SelectProps, "onChange"> & {
  estado?: EstadosProps | null;
  onChange: (
    newValue: OnChangeValue<CidadesOption, false>,
    actionMeta: ActionMeta<CidadesOption>
  ) => void;
};

export const Cidades = ({ estado, ...props }: CidadesSelectProp) => {
  const options = estado
    ? Brasil[estado]
    : [{ value: "", label: "Aguardando seleção do estado." }];
  return <CommonSelect options={options} {...props} />;
};

interface IBrasil {
  [key: string]: CidadesOption[];
}

export const Brasil: IBrasil = {
  AC: [
    {
      value: "Acrelândia",
      label: "Acrelândia",
      ibge: 1200013,
    },
    {
      value: "Assis Brasil",
      label: "Assis Brasil",
      ibge: 1200054,
    },
    {
      value: "Brasiléia",
      label: "Brasiléia",
      ibge: 1200104,
    },
    {
      value: "Bujari",
      label: "Bujari",
      ibge: 1200138,
    },
    {
      value: "Capixaba",
      label: "Capixaba",
      ibge: 1200179,
    },
    {
      value: "Cruzeiro do Sul",
      label: "Cruzeiro do Sul",
      ibge: 1200203,
    },
    {
      value: "Epitaciolândia",
      label: "Epitaciolândia",
      ibge: 1200252,
    },
    {
      value: "Feijó",
      label: "Feijó",
      ibge: 1200302,
    },
    {
      value: "Jordão",
      label: "Jordão",
      ibge: 1200328,
    },
    {
      value: "Mâncio Lima",
      label: "Mâncio Lima",
      ibge: 1200336,
    },
    {
      value: "Manoel Urbano",
      label: "Manoel Urbano",
      ibge: 1200344,
    },
    {
      value: "Marechal Thaumaturgo",
      label: "Marechal Thaumaturgo",
      ibge: 1200351,
    },
    {
      value: "Plácido de Castro",
      label: "Plácido de Castro",
      ibge: 1200385,
    },
    {
      value: "Porto Acre",
      label: "Porto Acre",
      ibge: 1200807,
    },
    {
      value: "Porto Walter",
      label: "Porto Walter",
      ibge: 1200393,
    },
    {
      value: "Rio Branco",
      label: "Rio Branco",
      ibge: 1200401,
    },
    {
      value: "Rodrigues Alves",
      label: "Rodrigues Alves",
      ibge: 1200427,
    },
    {
      value: "Santa Rosa do Purus",
      label: "Santa Rosa do Purus",
      ibge: 1200435,
    },
    {
      value: "Sena Madureira",
      label: "Sena Madureira",
      ibge: 1200500,
    },
    {
      value: "Senador Guiomard",
      label: "Senador Guiomard",
      ibge: 1200450,
    },
    {
      value: "Tarauacá",
      label: "Tarauacá",
      ibge: 1200609,
    },
    {
      value: "Xapuri",
      label: "Xapuri",
      ibge: 1200708,
    },
  ],
  AL: [
    {
      value: "Água Branca",
      label: "Água Branca",
      ibge: 2700102,
    },
    {
      value: "Anadia",
      label: "Anadia",
      ibge: 2700201,
    },
    {
      value: "Arapiraca",
      label: "Arapiraca",
      ibge: 2700300,
    },
    {
      value: "Atalaia",
      label: "Atalaia",
      ibge: 2700409,
    },
    {
      value: "Barra de Santo Antônio",
      label: "Barra de Santo Antônio",
      ibge: 2700508,
    },
    {
      value: "Barra de São Miguel",
      label: "Barra de São Miguel",
      ibge: 2700607,
    },
    {
      value: "Batalha",
      label: "Batalha",
      ibge: 2700706,
    },
    {
      value: "Belém",
      label: "Belém",
      ibge: 2700805,
    },
    {
      value: "Belo Monte",
      label: "Belo Monte",
      ibge: 2700904,
    },
    {
      value: "Boca da Mata",
      label: "Boca da Mata",
      ibge: 2701001,
    },
    {
      value: "Branquinha",
      label: "Branquinha",
      ibge: 2701100,
    },
    {
      value: "Cacimbinhas",
      label: "Cacimbinhas",
      ibge: 2701209,
    },
    {
      value: "Cajueiro",
      label: "Cajueiro",
      ibge: 2701308,
    },
    {
      value: "Campestre",
      label: "Campestre",
      ibge: 2701357,
    },
    {
      value: "Campo Alegre",
      label: "Campo Alegre",
      ibge: 2701407,
    },
    {
      value: "Campo Grande",
      label: "Campo Grande",
      ibge: 2701506,
    },
    {
      value: "Canapi",
      label: "Canapi",
      ibge: 2701605,
    },
    {
      value: "Capela",
      label: "Capela",
      ibge: 2701704,
    },
    {
      value: "Carneiros",
      label: "Carneiros",
      ibge: 2701803,
    },
    {
      value: "Chã Preta",
      label: "Chã Preta",
      ibge: 2701902,
    },
    {
      value: "Coité do Nóia",
      label: "Coité do Nóia",
      ibge: 2702009,
    },
    {
      value: "Colônia Leopoldina",
      label: "Colônia Leopoldina",
      ibge: 2702108,
    },
    {
      value: "Coqueiro Seco",
      label: "Coqueiro Seco",
      ibge: 2702207,
    },
    {
      value: "Coruripe",
      label: "Coruripe",
      ibge: 2702306,
    },
    {
      value: "Craíbas",
      label: "Craíbas",
      ibge: 2702355,
    },
    {
      value: "Delmiro Gouveia",
      label: "Delmiro Gouveia",
      ibge: 2702405,
    },
    {
      value: "Dois Riachos",
      label: "Dois Riachos",
      ibge: 2702504,
    },
    {
      value: "Estrela de Alagoas",
      label: "Estrela de Alagoas",
      ibge: 2702553,
    },
    {
      value: "Feira Grande",
      label: "Feira Grande",
      ibge: 2702603,
    },
    {
      value: "Feliz Deserto",
      label: "Feliz Deserto",
      ibge: 2702702,
    },
    {
      value: "Flexeiras",
      label: "Flexeiras",
      ibge: 2702801,
    },
    {
      value: "Girau do Ponciano",
      label: "Girau do Ponciano",
      ibge: 2702900,
    },
    {
      value: "Ibateguara",
      label: "Ibateguara",
      ibge: 2703007,
    },
    {
      value: "Igaci",
      label: "Igaci",
      ibge: 2703106,
    },
    {
      value: "Igreja Nova",
      label: "Igreja Nova",
      ibge: 2703205,
    },
    {
      value: "Inhapi",
      label: "Inhapi",
      ibge: 2703304,
    },
    {
      value: "Jacaré dos Homens",
      label: "Jacaré dos Homens",
      ibge: 2703403,
    },
    {
      value: "Jacuípe",
      label: "Jacuípe",
      ibge: 2703502,
    },
    {
      value: "Japaratinga",
      label: "Japaratinga",
      ibge: 2703601,
    },
    {
      value: "Jaramataia",
      label: "Jaramataia",
      ibge: 2703700,
    },
    {
      value: "Jequiá da Praia",
      label: "Jequiá da Praia",
      ibge: 2703759,
    },
    {
      value: "Joaquim Gomes",
      label: "Joaquim Gomes",
      ibge: 2703809,
    },
    {
      value: "Jundiá",
      label: "Jundiá",
      ibge: 2703908,
    },
    {
      value: "Junqueiro",
      label: "Junqueiro",
      ibge: 2704005,
    },
    {
      value: "Lagoa da Canoa",
      label: "Lagoa da Canoa",
      ibge: 2704104,
    },
    {
      value: "Limoeiro de Anadia",
      label: "Limoeiro de Anadia",
      ibge: 2704203,
    },
    {
      value: "Maceió",
      label: "Maceió",
      ibge: 2704302,
    },
    {
      value: "Major Isidoro",
      label: "Major Isidoro",
      ibge: 2704401,
    },
    {
      value: "Mar Vermelho",
      label: "Mar Vermelho",
      ibge: 2704906,
    },
    {
      value: "Maragogi",
      label: "Maragogi",
      ibge: 2704500,
    },
    {
      value: "Maravilha",
      label: "Maravilha",
      ibge: 2704609,
    },
    {
      value: "Marechal Deodoro",
      label: "Marechal Deodoro",
      ibge: 2704708,
    },
    {
      value: "Maribondo",
      label: "Maribondo",
      ibge: 2704807,
    },
    {
      value: "Mata Grande",
      label: "Mata Grande",
      ibge: 2705002,
    },
    {
      value: "Matriz de Camaragibe",
      label: "Matriz de Camaragibe",
      ibge: 2705101,
    },
    {
      value: "Messias",
      label: "Messias",
      ibge: 2705200,
    },
    {
      value: "Minador do Negrão",
      label: "Minador do Negrão",
      ibge: 2705309,
    },
    {
      value: "Monteirópolis",
      label: "Monteirópolis",
      ibge: 2705408,
    },
    {
      value: "Murici",
      label: "Murici",
      ibge: 2705507,
    },
    {
      value: "Novo Lino",
      label: "Novo Lino",
      ibge: 2705606,
    },
    {
      value: "Olho d'Água das Flores",
      label: "Olho d'Água das Flores",
      ibge: 2705705,
    },
    {
      value: "Olho d'Água do Casado",
      label: "Olho d'Água do Casado",
      ibge: 2705804,
    },
    {
      value: "Olho d'Água Grande",
      label: "Olho d'Água Grande",
      ibge: 2705903,
    },
    {
      value: "Olivença",
      label: "Olivença",
      ibge: 2706000,
    },
    {
      value: "Ouro Branco",
      label: "Ouro Branco",
      ibge: 2706109,
    },
    {
      value: "Palestina",
      label: "Palestina",
      ibge: 2706208,
    },
    {
      value: "Palmeira dos Índios",
      label: "Palmeira dos Índios",
      ibge: 2706307,
    },
    {
      value: "Pão de Açúcar",
      label: "Pão de Açúcar",
      ibge: 2706406,
    },
    {
      value: "Pariconha",
      label: "Pariconha",
      ibge: 2706422,
    },
    {
      value: "Paripueira",
      label: "Paripueira",
      ibge: 2706448,
    },
    {
      value: "Passo de Camaragibe",
      label: "Passo de Camaragibe",
      ibge: 2706505,
    },
    {
      value: "Paulo Jacinto",
      label: "Paulo Jacinto",
      ibge: 2706604,
    },
    {
      value: "Penedo",
      label: "Penedo",
      ibge: 2706703,
    },
    {
      value: "Piaçabuçu",
      label: "Piaçabuçu",
      ibge: 2706802,
    },
    {
      value: "Pilar",
      label: "Pilar",
      ibge: 2706901,
    },
    {
      value: "Pindoba",
      label: "Pindoba",
      ibge: 2707008,
    },
    {
      value: "Piranhas",
      label: "Piranhas",
      ibge: 2707107,
    },
    {
      value: "Poço das Trincheiras",
      label: "Poço das Trincheiras",
      ibge: 2707206,
    },
    {
      value: "Porto Calvo",
      label: "Porto Calvo",
      ibge: 2707305,
    },
    {
      value: "Porto de Pedras",
      label: "Porto de Pedras",
      ibge: 2707404,
    },
    {
      value: "Porto Real do Colégio",
      label: "Porto Real do Colégio",
      ibge: 2707503,
    },
    {
      value: "Quebrangulo",
      label: "Quebrangulo",
      ibge: 2707602,
    },
    {
      value: "Rio Largo",
      label: "Rio Largo",
      ibge: 2707701,
    },
    {
      value: "Roteiro",
      label: "Roteiro",
      ibge: 2707800,
    },
    {
      value: "Santa Luzia do Norte",
      label: "Santa Luzia do Norte",
      ibge: 2707909,
    },
    {
      value: "Santana do Ipanema",
      label: "Santana do Ipanema",
      ibge: 2708006,
    },
    {
      value: "Santana do Mundaú",
      label: "Santana do Mundaú",
      ibge: 2708105,
    },
    {
      value: "São Brás",
      label: "São Brás",
      ibge: 2708204,
    },
    {
      value: "São José da Laje",
      label: "São José da Laje",
      ibge: 2708303,
    },
    {
      value: "São José da Tapera",
      label: "São José da Tapera",
      ibge: 2708402,
    },
    {
      value: "São Luís do Quitunde",
      label: "São Luís do Quitunde",
      ibge: 2708501,
    },
    {
      value: "São Miguel dos Campos",
      label: "São Miguel dos Campos",
      ibge: 2708600,
    },
    {
      value: "São Miguel dos Milagres",
      label: "São Miguel dos Milagres",
      ibge: 2708709,
    },
    {
      value: "São Sebastião",
      label: "São Sebastião",
      ibge: 2708808,
    },
    {
      value: "Satuba",
      label: "Satuba",
      ibge: 2708907,
    },
    {
      value: "Senador Rui Palmeira",
      label: "Senador Rui Palmeira",
      ibge: 2708956,
    },
    {
      value: "Tanque d'Arca",
      label: "Tanque d'Arca",
      ibge: 2709004,
    },
    {
      value: "Taquarana",
      label: "Taquarana",
      ibge: 2709103,
    },
    {
      value: "Teotônio Vilela",
      label: "Teotônio Vilela",
      ibge: 2709152,
    },
    {
      value: "Traipu",
      label: "Traipu",
      ibge: 2709202,
    },
    {
      value: "União dos Palmares",
      label: "União dos Palmares",
      ibge: 2709301,
    },
    {
      value: "Viçosa",
      label: "Viçosa",
      ibge: 2709400,
    },
  ],
  AM: [
    {
      value: "Alvarães",
      label: "Alvarães",
      ibge: 1300029,
    },
    {
      value: "Amaturá",
      label: "Amaturá",
      ibge: 1300060,
    },
    {
      value: "Anamã",
      label: "Anamã",
      ibge: 1300086,
    },
    {
      value: "Anori",
      label: "Anori",
      ibge: 1300102,
    },
    {
      value: "Apuí",
      label: "Apuí",
      ibge: 1300144,
    },
    {
      value: "Atalaia do Norte",
      label: "Atalaia do Norte",
      ibge: 1300201,
    },
    {
      value: "Autazes",
      label: "Autazes",
      ibge: 1300300,
    },
    {
      value: "Barcelos",
      label: "Barcelos",
      ibge: 1300409,
    },
    {
      value: "Barreirinha",
      label: "Barreirinha",
      ibge: 1300508,
    },
    {
      value: "Benjamin Constant",
      label: "Benjamin Constant",
      ibge: 1300607,
    },
    {
      value: "Beruri",
      label: "Beruri",
      ibge: 1300631,
    },
    {
      value: "Boa Vista do Ramos",
      label: "Boa Vista do Ramos",
      ibge: 1300680,
    },
    {
      value: "Boca do Acre",
      label: "Boca do Acre",
      ibge: 1300706,
    },
    {
      value: "Borba",
      label: "Borba",
      ibge: 1300805,
    },
    {
      value: "Caapiranga",
      label: "Caapiranga",
      ibge: 1300839,
    },
    {
      value: "Canutama",
      label: "Canutama",
      ibge: 1300904,
    },
    {
      value: "Carauari",
      label: "Carauari",
      ibge: 1301001,
    },
    {
      value: "Careiro",
      label: "Careiro",
      ibge: 1301100,
    },
    {
      value: "Careiro da Várzea",
      label: "Careiro da Várzea",
      ibge: 1301159,
    },
    {
      value: "Coari",
      label: "Coari",
      ibge: 1301209,
    },
    {
      value: "Codajás",
      label: "Codajás",
      ibge: 1301308,
    },
    {
      value: "Eirunepé",
      label: "Eirunepé",
      ibge: 1301407,
    },
    {
      value: "Envira",
      label: "Envira",
      ibge: 1301506,
    },
    {
      value: "Fonte Boa",
      label: "Fonte Boa",
      ibge: 1301605,
    },
    {
      value: "Guajará",
      label: "Guajará",
      ibge: 1301654,
    },
    {
      value: "Humaitá",
      label: "Humaitá",
      ibge: 1301704,
    },
    {
      value: "Ipixuna",
      label: "Ipixuna",
      ibge: 1301803,
    },
    {
      value: "Iranduba",
      label: "Iranduba",
      ibge: 1301852,
    },
    {
      value: "Itacoatiara",
      label: "Itacoatiara",
      ibge: 1301902,
    },
    {
      value: "Itamarati",
      label: "Itamarati",
      ibge: 1301951,
    },
    {
      value: "Itapiranga",
      label: "Itapiranga",
      ibge: 1302009,
    },
    {
      value: "Japurá",
      label: "Japurá",
      ibge: 1302108,
    },
    {
      value: "Juruá",
      label: "Juruá",
      ibge: 1302207,
    },
    {
      value: "Jutaí",
      label: "Jutaí",
      ibge: 1302306,
    },
    {
      value: "Lábrea",
      label: "Lábrea",
      ibge: 1302405,
    },
    {
      value: "Manacapuru",
      label: "Manacapuru",
      ibge: 1302504,
    },
    {
      value: "Manaquiri",
      label: "Manaquiri",
      ibge: 1302553,
    },
    {
      value: "Manaus",
      label: "Manaus",
      ibge: 1302603,
    },
    {
      value: "Manicoré",
      label: "Manicoré",
      ibge: 1302702,
    },
    {
      value: "Maraã",
      label: "Maraã",
      ibge: 1302801,
    },
    {
      value: "Maués",
      label: "Maués",
      ibge: 1302900,
    },
    {
      value: "Nhamundá",
      label: "Nhamundá",
      ibge: 1303007,
    },
    {
      value: "Nova Olinda do Norte",
      label: "Nova Olinda do Norte",
      ibge: 1303106,
    },
    {
      value: "Novo Airão",
      label: "Novo Airão",
      ibge: 1303205,
    },
    {
      value: "Novo Aripuanã",
      label: "Novo Aripuanã",
      ibge: 1303304,
    },
    {
      value: "Parintins",
      label: "Parintins",
      ibge: 1303403,
    },
    {
      value: "Pauini",
      label: "Pauini",
      ibge: 1303502,
    },
    {
      value: "Presidente Figueiredo",
      label: "Presidente Figueiredo",
      ibge: 1303536,
    },
    {
      value: "Rio Preto da Eva",
      label: "Rio Preto da Eva",
      ibge: 1303569,
    },
    {
      value: "Santa Isabel do Rio Negro",
      label: "Santa Isabel do Rio Negro",
      ibge: 1303601,
    },
    {
      value: "Santo Antônio do Içá",
      label: "Santo Antônio do Içá",
      ibge: 1303700,
    },
    {
      value: "São Gabriel da Cachoeira",
      label: "São Gabriel da Cachoeira",
      ibge: 1303809,
    },
    {
      value: "São Paulo de Olivença",
      label: "São Paulo de Olivença",
      ibge: 1303908,
    },
    {
      value: "São Sebastião do Uatumã",
      label: "São Sebastião do Uatumã",
      ibge: 1303957,
    },
    {
      value: "Silves",
      label: "Silves",
      ibge: 1304005,
    },
    {
      value: "Tabatinga",
      label: "Tabatinga",
      ibge: 1304062,
    },
    {
      value: "Tapauá",
      label: "Tapauá",
      ibge: 1304104,
    },
    {
      value: "Tefé",
      label: "Tefé",
      ibge: 1304203,
    },
    {
      value: "Tonantins",
      label: "Tonantins",
      ibge: 1304237,
    },
    {
      value: "Uarini",
      label: "Uarini",
      ibge: 1304260,
    },
    {
      value: "Urucará",
      label: "Urucará",
      ibge: 1304302,
    },
    {
      value: "Urucurituba",
      label: "Urucurituba",
      ibge: 1304401,
    },
  ],
  AP: [
    {
      value: "Amapá",
      label: "Amapá",
      ibge: 1600105,
    },
    {
      value: "Calçoene",
      label: "Calçoene",
      ibge: 1600204,
    },
    {
      value: "Cutias",
      label: "Cutias",
      ibge: 1600212,
    },
    {
      value: "Ferreira Gomes",
      label: "Ferreira Gomes",
      ibge: 1600238,
    },
    {
      value: "Itaubal",
      label: "Itaubal",
      ibge: 1600253,
    },
    {
      value: "Laranjal do Jari",
      label: "Laranjal do Jari",
      ibge: 1600279,
    },
    {
      value: "Macapá",
      label: "Macapá",
      ibge: 1600303,
    },
    {
      value: "Mazagão",
      label: "Mazagão",
      ibge: 1600402,
    },
    {
      value: "Oiapoque",
      label: "Oiapoque",
      ibge: 1600501,
    },
    {
      value: "Pedra Branca do Amapari",
      label: "Pedra Branca do Amapari",
      ibge: 1600154,
    },
    {
      value: "Porto Grande",
      label: "Porto Grande",
      ibge: 1600535,
    },
    {
      value: "Pracuúba",
      label: "Pracuúba",
      ibge: 1600550,
    },
    {
      value: "Santana",
      label: "Santana",
      ibge: 1600600,
    },
    {
      value: "Serra do Navio",
      label: "Serra do Navio",
      ibge: 1600055,
    },
    {
      value: "Tartarugalzinho",
      label: "Tartarugalzinho",
      ibge: 1600709,
    },
    {
      value: "Vitória do Jari",
      label: "Vitória do Jari",
      ibge: 1600808,
    },
  ],
  BA: [
    {
      value: "Abaíra",
      label: "Abaíra",
      ibge: 2900108,
    },
    {
      value: "Abaré",
      label: "Abaré",
      ibge: 2900207,
    },
    {
      value: "Acajutiba",
      label: "Acajutiba",
      ibge: 2900306,
    },
    {
      value: "Adustina",
      label: "Adustina",
      ibge: 2900355,
    },
    {
      value: "Água Fria",
      label: "Água Fria",
      ibge: 2900405,
    },
    {
      value: "Aiquara",
      label: "Aiquara",
      ibge: 2900603,
    },
    {
      value: "Alagoinhas",
      label: "Alagoinhas",
      ibge: 2900702,
    },
    {
      value: "Alcobaça",
      label: "Alcobaça",
      ibge: 2900801,
    },
    {
      value: "Almadina",
      label: "Almadina",
      ibge: 2900900,
    },
    {
      value: "Amargosa",
      label: "Amargosa",
      ibge: 2901007,
    },
    {
      value: "Amélia Rodrigues",
      label: "Amélia Rodrigues",
      ibge: 2901106,
    },
    {
      value: "América Dourada",
      label: "América Dourada",
      ibge: 2901155,
    },
    {
      value: "Anagé",
      label: "Anagé",
      ibge: 2901205,
    },
    {
      value: "Andaraí",
      label: "Andaraí",
      ibge: 2901304,
    },
    {
      value: "Andorinha",
      label: "Andorinha",
      ibge: 2901353,
    },
    {
      value: "Angical",
      label: "Angical",
      ibge: 2901403,
    },
    {
      value: "Anguera",
      label: "Anguera",
      ibge: 2901502,
    },
    {
      value: "Antas",
      label: "Antas",
      ibge: 2901601,
    },
    {
      value: "Antônio Cardoso",
      label: "Antônio Cardoso",
      ibge: 2901700,
    },
    {
      value: "Antônio Gonçalves",
      label: "Antônio Gonçalves",
      ibge: 2901809,
    },
    {
      value: "Aporá",
      label: "Aporá",
      ibge: 2901908,
    },
    {
      value: "Apuarema",
      label: "Apuarema",
      ibge: 2901957,
    },
    {
      value: "Araças",
      label: "Araças",
    },
    {
      value: "Aracatu",
      label: "Aracatu",
      ibge: 2902005,
    },
    {
      value: "Araci",
      label: "Araci",
      ibge: 2902104,
    },
    {
      value: "Aramari",
      label: "Aramari",
      ibge: 2902203,
    },
    {
      value: "Arataca",
      label: "Arataca",
      ibge: 2902252,
    },
    {
      value: "Aratuípe",
      label: "Aratuípe",
      ibge: 2902302,
    },
    {
      value: "Aurelino Leal",
      label: "Aurelino Leal",
      ibge: 2902401,
    },
    {
      value: "Baianópolis",
      label: "Baianópolis",
      ibge: 2902500,
    },
    {
      value: "Baixa Grande",
      label: "Baixa Grande",
      ibge: 2902609,
    },
    {
      value: "Banzaê",
      label: "Banzaê",
      ibge: 2902658,
    },
    {
      value: "Barra",
      label: "Barra",
      ibge: 2902708,
    },
    {
      value: "Barra da Estiva",
      label: "Barra da Estiva",
      ibge: 2902807,
    },
    {
      value: "Barra do Choça",
      label: "Barra do Choça",
      ibge: 2902906,
    },
    {
      value: "Barra do Mendes",
      label: "Barra do Mendes",
      ibge: 2903003,
    },
    {
      value: "Barra do Rocha",
      label: "Barra do Rocha",
      ibge: 2903102,
    },
    {
      value: "Barreiras",
      label: "Barreiras",
      ibge: 2903201,
    },
    {
      value: "Barro Alto",
      label: "Barro Alto",
      ibge: 2903235,
    },
    {
      value: "Barrocas",
      label: "Barrocas",
      ibge: 2903276,
    },
    {
      value: "Barro Preto",
      label: "Barro Preto",
      ibge: 2903300,
    },
    {
      value: "Belmonte",
      label: "Belmonte",
      ibge: 2903409,
    },
    {
      value: "Belo Campo",
      label: "Belo Campo",
      ibge: 2903508,
    },
    {
      value: "Biritinga",
      label: "Biritinga",
      ibge: 2903607,
    },
    {
      value: "Boa Nova",
      label: "Boa Nova",
      ibge: 2903706,
    },
    {
      value: "Boa Vista do Tupim",
      label: "Boa Vista do Tupim",
      ibge: 2903805,
    },
    {
      value: "Bom Jesus da Lapa",
      label: "Bom Jesus da Lapa",
      ibge: 2903904,
    },
    {
      value: "Bom Jesus da Serra",
      label: "Bom Jesus da Serra",
      ibge: 2903953,
    },
    {
      value: "Boninal",
      label: "Boninal",
      ibge: 2904001,
    },
    {
      value: "Bonito",
      label: "Bonito",
      ibge: 2904050,
    },
    {
      value: "Boquira",
      label: "Boquira",
      ibge: 2904100,
    },
    {
      value: "Botuporã",
      label: "Botuporã",
      ibge: 2904209,
    },
    {
      value: "Brejões",
      label: "Brejões",
      ibge: 2904308,
    },
    {
      value: "Brejolândia",
      label: "Brejolândia",
      ibge: 2904407,
    },
    {
      value: "Brotas de Macaúbas",
      label: "Brotas de Macaúbas",
      ibge: 2904506,
    },
    {
      value: "Brumado",
      label: "Brumado",
      ibge: 2904605,
    },
    {
      value: "Buerarema",
      label: "Buerarema",
      ibge: 2904704,
    },
    {
      value: "Buritirama",
      label: "Buritirama",
      ibge: 2904753,
    },
    {
      value: "Caatiba",
      label: "Caatiba",
      ibge: 2904803,
    },
    {
      value: "Cabaceiras do Paraguaçu",
      label: "Cabaceiras do Paraguaçu",
      ibge: 2904852,
    },
    {
      value: "Cachoeira",
      label: "Cachoeira",
      ibge: 2904902,
    },
    {
      value: "Caculé",
      label: "Caculé",
      ibge: 2905008,
    },
    {
      value: "Caém",
      label: "Caém",
      ibge: 2905107,
    },
    {
      value: "Caetanos",
      label: "Caetanos",
      ibge: 2905156,
    },
    {
      value: "Caetité",
      label: "Caetité",
      ibge: 2905206,
    },
    {
      value: "Cafarnaum",
      label: "Cafarnaum",
      ibge: 2905305,
    },
    {
      value: "Cairu",
      label: "Cairu",
      ibge: 2905404,
    },
    {
      value: "Caldeirão Grande",
      label: "Caldeirão Grande",
      ibge: 2905503,
    },
    {
      value: "Camacan",
      label: "Camacan",
      ibge: 2905602,
    },
    {
      value: "Camaçari",
      label: "Camaçari",
      ibge: 2905701,
    },
    {
      value: "Camamu",
      label: "Camamu",
      ibge: 2905800,
    },
    {
      value: "Campo Alegre de Lourdes",
      label: "Campo Alegre de Lourdes",
      ibge: 2905909,
    },
    {
      value: "Campo Formoso",
      label: "Campo Formoso",
      ibge: 2906006,
    },
    {
      value: "Canápolis",
      label: "Canápolis",
      ibge: 2906105,
    },
    {
      value: "Canarana",
      label: "Canarana",
      ibge: 2906204,
    },
    {
      value: "Canavieiras",
      label: "Canavieiras",
      ibge: 2906303,
    },
    {
      value: "Candeal",
      label: "Candeal",
      ibge: 2906402,
    },
    {
      value: "Candeias",
      label: "Candeias",
      ibge: 2906501,
    },
    {
      value: "Candiba",
      label: "Candiba",
      ibge: 2906600,
    },
    {
      value: "Cândido Sales",
      label: "Cândido Sales",
      ibge: 2906709,
    },
    {
      value: "Cansanção",
      label: "Cansanção",
      ibge: 2906808,
    },
    {
      value: "Canudos",
      label: "Canudos",
      ibge: 2906824,
    },
    {
      value: "Capela do Alto Alegre",
      label: "Capela do Alto Alegre",
      ibge: 2906857,
    },
    {
      value: "Capim Grosso",
      label: "Capim Grosso",
      ibge: 2906873,
    },
    {
      value: "Caraíbas",
      label: "Caraíbas",
      ibge: 2906899,
    },
    {
      value: "Caravelas",
      label: "Caravelas",
      ibge: 2906907,
    },
    {
      value: "Cardeal da Silva",
      label: "Cardeal da Silva",
      ibge: 2907004,
    },
    {
      value: "Carinhanha",
      label: "Carinhanha",
      ibge: 2907103,
    },
    {
      value: "Casa Nova",
      label: "Casa Nova",
      ibge: 2907202,
    },
    {
      value: "Castro Alves",
      label: "Castro Alves",
      ibge: 2907301,
    },
    {
      value: "Catolândia",
      label: "Catolândia",
      ibge: 2907400,
    },
    {
      value: "Catu",
      label: "Catu",
      ibge: 2907509,
    },
    {
      value: "Caturama",
      label: "Caturama",
      ibge: 2907558,
    },
    {
      value: "Central",
      label: "Central",
      ibge: 2907608,
    },
    {
      value: "Chorrochó",
      label: "Chorrochó",
      ibge: 2907707,
    },
    {
      value: "Cícero Dantas",
      label: "Cícero Dantas",
      ibge: 2907806,
    },
    {
      value: "Cipó",
      label: "Cipó",
      ibge: 2907905,
    },
    {
      value: "Coaraci",
      label: "Coaraci",
      ibge: 2908002,
    },
    {
      value: "Cocos",
      label: "Cocos",
      ibge: 2908101,
    },
    {
      value: "Conceição da Feira",
      label: "Conceição da Feira",
      ibge: 2908200,
    },
    {
      value: "Conceição do Almeida",
      label: "Conceição do Almeida",
      ibge: 2908309,
    },
    {
      value: "Conceição do Coité",
      label: "Conceição do Coité",
      ibge: 2908408,
    },
    {
      value: "Conceição do Jacuípe",
      label: "Conceição do Jacuípe",
      ibge: 2908507,
    },
    {
      value: "Conde",
      label: "Conde",
      ibge: 2908606,
    },
    {
      value: "Condeúba",
      label: "Condeúba",
      ibge: 2908705,
    },
    {
      value: "Contendas do Sincorá",
      label: "Contendas do Sincorá",
      ibge: 2908804,
    },
    {
      value: "Coração de Maria",
      label: "Coração de Maria",
      ibge: 2908903,
    },
    {
      value: "Cordeiros",
      label: "Cordeiros",
      ibge: 2909000,
    },
    {
      value: "Coribe",
      label: "Coribe",
      ibge: 2909109,
    },
    {
      value: "Coronel João Sá",
      label: "Coronel João Sá",
      ibge: 2909208,
    },
    {
      value: "Correntina",
      label: "Correntina",
      ibge: 2909307,
    },
    {
      value: "Cotegipe",
      label: "Cotegipe",
      ibge: 2909406,
    },
    {
      value: "Cravolândia",
      label: "Cravolândia",
      ibge: 2909505,
    },
    {
      value: "Crisópolis",
      label: "Crisópolis",
      ibge: 2909604,
    },
    {
      value: "Cristópolis",
      label: "Cristópolis",
      ibge: 2909703,
    },
    {
      value: "Cruz das Almas",
      label: "Cruz das Almas",
      ibge: 2909802,
    },
    {
      value: "Curaçá",
      label: "Curaçá",
      ibge: 2909901,
    },
    {
      value: "Dário Meira",
      label: "Dário Meira",
      ibge: 2910008,
    },
    {
      value: "Dias d'Ávila",
      label: "Dias d'Ávila",
      ibge: 2910057,
    },
    {
      value: "Dom Basílio",
      label: "Dom Basílio",
      ibge: 2910107,
    },
    {
      value: "Dom Macedo Costa",
      label: "Dom Macedo Costa",
      ibge: 2910206,
    },
    {
      value: "Elísio Medrado",
      label: "Elísio Medrado",
      ibge: 2910305,
    },
    {
      value: "Encruzilhada",
      label: "Encruzilhada",
      ibge: 2910404,
    },
    {
      value: "Entre Rios",
      label: "Entre Rios",
      ibge: 2910503,
    },
    {
      value: "Érico Cardoso",
      label: "Érico Cardoso",
      ibge: 2900504,
    },
    {
      value: "Esplanada",
      label: "Esplanada",
      ibge: 2910602,
    },
    {
      value: "Euclides da Cunha",
      label: "Euclides da Cunha",
      ibge: 2910701,
    },
    {
      value: "Eunápolis",
      label: "Eunápolis",
      ibge: 2910727,
    },
    {
      value: "Fátima",
      label: "Fátima",
      ibge: 2910750,
    },
    {
      value: "Feira da Mata",
      label: "Feira da Mata",
      ibge: 2910776,
    },
    {
      value: "Feira de Santana",
      label: "Feira de Santana",
      ibge: 2910800,
    },
    {
      value: "Filadélfia",
      label: "Filadélfia",
      ibge: 2910859,
    },
    {
      value: "Firmino Alves",
      label: "Firmino Alves",
      ibge: 2910909,
    },
    {
      value: "Floresta Azul",
      label: "Floresta Azul",
      ibge: 2911006,
    },
    {
      value: "Formosa do Rio Preto",
      label: "Formosa do Rio Preto",
      ibge: 2911105,
    },
    {
      value: "Gandu",
      label: "Gandu",
      ibge: 2911204,
    },
    {
      value: "Gavião",
      label: "Gavião",
      ibge: 2911253,
    },
    {
      value: "Gentio do Ouro",
      label: "Gentio do Ouro",
      ibge: 2911303,
    },
    {
      value: "Glória",
      label: "Glória",
      ibge: 2911402,
    },
    {
      value: "Gongogi",
      label: "Gongogi",
      ibge: 2911501,
    },
    {
      value: "Governador Mangabeira",
      label: "Governador Mangabeira",
      ibge: 2911600,
    },
    {
      value: "Guajeru",
      label: "Guajeru",
      ibge: 2911659,
    },
    {
      value: "Guanambi",
      label: "Guanambi",
      ibge: 2911709,
    },
    {
      value: "Guaratinga",
      label: "Guaratinga",
      ibge: 2911808,
    },
    {
      value: "Heliópolis",
      label: "Heliópolis",
      ibge: 2911857,
    },
    {
      value: "Iaçu",
      label: "Iaçu",
      ibge: 2911907,
    },
    {
      value: "Ibiassucê",
      label: "Ibiassucê",
      ibge: 2912004,
    },
    {
      value: "Ibicaraí",
      label: "Ibicaraí",
      ibge: 2912103,
    },
    {
      value: "Ibicoara",
      label: "Ibicoara",
      ibge: 2912202,
    },
    {
      value: "Ibicuí",
      label: "Ibicuí",
      ibge: 2912301,
    },
    {
      value: "Ibipeba",
      label: "Ibipeba",
      ibge: 2912400,
    },
    {
      value: "Ibipitanga",
      label: "Ibipitanga",
      ibge: 2912509,
    },
    {
      value: "Ibiquera",
      label: "Ibiquera",
      ibge: 2912608,
    },
    {
      value: "Ibirapitanga",
      label: "Ibirapitanga",
      ibge: 2912707,
    },
    {
      value: "Ibirapuã",
      label: "Ibirapuã",
      ibge: 2912806,
    },
    {
      value: "Ibirataia",
      label: "Ibirataia",
      ibge: 2912905,
    },
    {
      value: "Ibitiara",
      label: "Ibitiara",
      ibge: 2913002,
    },
    {
      value: "Ibititá",
      label: "Ibititá",
      ibge: 2913101,
    },
    {
      value: "Ibotirama",
      label: "Ibotirama",
      ibge: 2913200,
    },
    {
      value: "Ichu",
      label: "Ichu",
      ibge: 2913309,
    },
    {
      value: "Igaporã",
      label: "Igaporã",
      ibge: 2913408,
    },
    {
      value: "Igrapiúna",
      label: "Igrapiúna",
      ibge: 2913457,
    },
    {
      value: "Iguaí",
      label: "Iguaí",
      ibge: 2913507,
    },
    {
      value: "Ilhéus",
      label: "Ilhéus",
      ibge: 2913606,
    },
    {
      value: "Inhambupe",
      label: "Inhambupe",
      ibge: 2913705,
    },
    {
      value: "Ipecaetá",
      label: "Ipecaetá",
      ibge: 2913804,
    },
    {
      value: "Ipiaú",
      label: "Ipiaú",
      ibge: 2913903,
    },
    {
      value: "Ipirá",
      label: "Ipirá",
      ibge: 2914000,
    },
    {
      value: "Ipupiara",
      label: "Ipupiara",
      ibge: 2914109,
    },
    {
      value: "Irajuba",
      label: "Irajuba",
      ibge: 2914208,
    },
    {
      value: "Iramaia",
      label: "Iramaia",
      ibge: 2914307,
    },
    {
      value: "Iraquara",
      label: "Iraquara",
      ibge: 2914406,
    },
    {
      value: "Irará",
      label: "Irará",
      ibge: 2914505,
    },
    {
      value: "Irecê",
      label: "Irecê",
      ibge: 2914604,
    },
    {
      value: "Itabela",
      label: "Itabela",
      ibge: 2914653,
    },
    {
      value: "Itaberaba",
      label: "Itaberaba",
      ibge: 2914703,
    },
    {
      value: "Itabuna",
      label: "Itabuna",
      ibge: 2914802,
    },
    {
      value: "Itacaré",
      label: "Itacaré",
      ibge: 2914901,
    },
    {
      value: "Itaeté",
      label: "Itaeté",
      ibge: 2915007,
    },
    {
      value: "Itagi",
      label: "Itagi",
      ibge: 2915106,
    },
    {
      value: "Itagibá",
      label: "Itagibá",
      ibge: 2915205,
    },
    {
      value: "Itagimirim",
      label: "Itagimirim",
      ibge: 2915304,
    },
    {
      value: "Itaguaçu da Bahia",
      label: "Itaguaçu da Bahia",
      ibge: 2915353,
    },
    {
      value: "Itaju do Colônia",
      label: "Itaju do Colônia",
      ibge: 2915403,
    },
    {
      value: "Itajuípe",
      label: "Itajuípe",
      ibge: 2915502,
    },
    {
      value: "Itamaraju",
      label: "Itamaraju",
      ibge: 2915601,
    },
    {
      value: "Itamari",
      label: "Itamari",
      ibge: 2915700,
    },
    {
      value: "Itambé",
      label: "Itambé",
      ibge: 2915809,
    },
    {
      value: "Itanagra",
      label: "Itanagra",
      ibge: 2915908,
    },
    {
      value: "Itanhém",
      label: "Itanhém",
      ibge: 2916005,
    },
    {
      value: "Itaparica",
      label: "Itaparica",
      ibge: 2916104,
    },
    {
      value: "Itapé",
      label: "Itapé",
      ibge: 2916203,
    },
    {
      value: "Itapebi",
      label: "Itapebi",
      ibge: 2916302,
    },
    {
      value: "Itapetinga",
      label: "Itapetinga",
      ibge: 2916401,
    },
    {
      value: "Itapicuru",
      label: "Itapicuru",
      ibge: 2916500,
    },
    {
      value: "Itapitanga",
      label: "Itapitanga",
      ibge: 2916609,
    },
    {
      value: "Itaquara",
      label: "Itaquara",
      ibge: 2916708,
    },
    {
      value: "Itarantim",
      label: "Itarantim",
      ibge: 2916807,
    },
    {
      value: "Itatim",
      label: "Itatim",
      ibge: 2916856,
    },
    {
      value: "Itiruçu",
      label: "Itiruçu",
      ibge: 2916906,
    },
    {
      value: "Itiúba",
      label: "Itiúba",
      ibge: 2917003,
    },
    {
      value: "Itororó",
      label: "Itororó",
      ibge: 2917102,
    },
    {
      value: "Ituaçu",
      label: "Ituaçu",
      ibge: 2917201,
    },
    {
      value: "Ituberá",
      label: "Ituberá",
      ibge: 2917300,
    },
    {
      value: "Iuiú",
      label: "Iuiú",
    },
    {
      value: "Jaborandi",
      label: "Jaborandi",
      ibge: 2917359,
    },
    {
      value: "Jacaraci",
      label: "Jacaraci",
      ibge: 2917409,
    },
    {
      value: "Jacobina",
      label: "Jacobina",
      ibge: 2917508,
    },
    {
      value: "Jaguaquara",
      label: "Jaguaquara",
      ibge: 2917607,
    },
    {
      value: "Jaguarari",
      label: "Jaguarari",
      ibge: 2917706,
    },
    {
      value: "Jaguaripe",
      label: "Jaguaripe",
      ibge: 2917805,
    },
    {
      value: "Jandaíra",
      label: "Jandaíra",
      ibge: 2917904,
    },
    {
      value: "Jequié",
      label: "Jequié",
      ibge: 2918001,
    },
    {
      value: "Jeremoabo",
      label: "Jeremoabo",
      ibge: 2918100,
    },
    {
      value: "Jiquiriçá",
      label: "Jiquiriçá",
      ibge: 2918209,
    },
    {
      value: "Jitaúna",
      label: "Jitaúna",
      ibge: 2918308,
    },
    {
      value: "João Dourado",
      label: "João Dourado",
      ibge: 2918357,
    },
    {
      value: "Juazeiro",
      label: "Juazeiro",
      ibge: 2918407,
    },
    {
      value: "Jucuruçu",
      label: "Jucuruçu",
      ibge: 2918456,
    },
    {
      value: "Jussara",
      label: "Jussara",
      ibge: 2918506,
    },
    {
      value: "Jussari",
      label: "Jussari",
      ibge: 2918555,
    },
    {
      value: "Jussiape",
      label: "Jussiape",
      ibge: 2918605,
    },
    {
      value: "Lafaiete Coutinho",
      label: "Lafaiete Coutinho",
      ibge: 2918704,
    },
    {
      value: "Lagoa Real",
      label: "Lagoa Real",
      ibge: 2918753,
    },
    {
      value: "Laje",
      label: "Laje",
      ibge: 2918803,
    },
    {
      value: "Lajedão",
      label: "Lajedão",
      ibge: 2918902,
    },
    {
      value: "Lajedinho",
      label: "Lajedinho",
      ibge: 2919009,
    },
    {
      value: "Lajedo do Tabocal",
      label: "Lajedo do Tabocal",
      ibge: 2919058,
    },
    {
      value: "Lamarão",
      label: "Lamarão",
      ibge: 2919108,
    },
    {
      value: "Lapão",
      label: "Lapão",
      ibge: 2919157,
    },
    {
      value: "Lauro de Freitas",
      label: "Lauro de Freitas",
      ibge: 2919207,
    },
    {
      value: "Lençóis",
      label: "Lençóis",
      ibge: 2919306,
    },
    {
      value: "Licínio de Almeida",
      label: "Licínio de Almeida",
      ibge: 2919405,
    },
    {
      value: "Livramento de Nossa Senhora",
      label: "Livramento de Nossa Senhora",
      ibge: 2919504,
    },
    {
      value: "Luís Eduardo Magalhães",
      label: "Luís Eduardo Magalhães",
      ibge: 2919553,
    },
    {
      value: "Macajuba",
      label: "Macajuba",
      ibge: 2919603,
    },
    {
      value: "Macarani",
      label: "Macarani",
      ibge: 2919702,
    },
    {
      value: "Macaúbas",
      label: "Macaúbas",
      ibge: 2919801,
    },
    {
      value: "Macururé",
      label: "Macururé",
      ibge: 2919900,
    },
    {
      value: "Madre de Deus",
      label: "Madre de Deus",
      ibge: 2919926,
    },
    {
      value: "Maetinga",
      label: "Maetinga",
      ibge: 2919959,
    },
    {
      value: "Maiquinique",
      label: "Maiquinique",
      ibge: 2920007,
    },
    {
      value: "Mairi",
      label: "Mairi",
      ibge: 2920106,
    },
    {
      value: "Malhada",
      label: "Malhada",
      ibge: 2920205,
    },
    {
      value: "Malhada de Pedras",
      label: "Malhada de Pedras",
      ibge: 2920304,
    },
    {
      value: "Manoel Vitorino",
      label: "Manoel Vitorino",
      ibge: 2920403,
    },
    {
      value: "Mansidão",
      label: "Mansidão",
      ibge: 2920452,
    },
    {
      value: "Maracás",
      label: "Maracás",
      ibge: 2920502,
    },
    {
      value: "Maragogipe",
      label: "Maragogipe",
      ibge: 2920601,
    },
    {
      value: "Maraú",
      label: "Maraú",
      ibge: 2920700,
    },
    {
      value: "Marcionílio Souza",
      label: "Marcionílio Souza",
      ibge: 2920809,
    },
    {
      value: "Mascote",
      label: "Mascote",
      ibge: 2920908,
    },
    {
      value: "Mata de São João",
      label: "Mata de São João",
      ibge: 2921005,
    },
    {
      value: "Matina",
      label: "Matina",
      ibge: 2921054,
    },
    {
      value: "Medeiros Neto",
      label: "Medeiros Neto",
      ibge: 2921104,
    },
    {
      value: "Miguel Calmon",
      label: "Miguel Calmon",
      ibge: 2921203,
    },
    {
      value: "Milagres",
      label: "Milagres",
      ibge: 2921302,
    },
    {
      value: "Mirangaba",
      label: "Mirangaba",
      ibge: 2921401,
    },
    {
      value: "Mirante",
      label: "Mirante",
      ibge: 2921450,
    },
    {
      value: "Monte Santo",
      label: "Monte Santo",
      ibge: 2921500,
    },
    {
      value: "Morpará",
      label: "Morpará",
      ibge: 2921609,
    },
    {
      value: "Morro do Chapéu",
      label: "Morro do Chapéu",
      ibge: 2921708,
    },
    {
      value: "Mortugaba",
      label: "Mortugaba",
      ibge: 2921807,
    },
    {
      value: "Mucugê",
      label: "Mucugê",
      ibge: 2921906,
    },
    {
      value: "Mucuri",
      label: "Mucuri",
      ibge: 2922003,
    },
    {
      value: "Mulungu do Morro",
      label: "Mulungu do Morro",
      ibge: 2922052,
    },
    {
      value: "Mundo Novo",
      label: "Mundo Novo",
      ibge: 2922102,
    },
    {
      value: "Muniz Ferreira",
      label: "Muniz Ferreira",
      ibge: 2922201,
    },
    {
      value: "Muquém de São Francisco",
      label: "Muquém de São Francisco",
    },
    {
      value: "Muritiba",
      label: "Muritiba",
      ibge: 2922300,
    },
    {
      value: "Mutuípe",
      label: "Mutuípe",
      ibge: 2922409,
    },
    {
      value: "Nazaré",
      label: "Nazaré",
      ibge: 2922508,
    },
    {
      value: "Nilo Peçanha",
      label: "Nilo Peçanha",
      ibge: 2922607,
    },
    {
      value: "Nordestina",
      label: "Nordestina",
      ibge: 2922656,
    },
    {
      value: "Nova Canaã",
      label: "Nova Canaã",
      ibge: 2922706,
    },
    {
      value: "Nova Fátima",
      label: "Nova Fátima",
      ibge: 2922730,
    },
    {
      value: "Nova Ibiá",
      label: "Nova Ibiá",
      ibge: 2922755,
    },
    {
      value: "Nova Itarana",
      label: "Nova Itarana",
      ibge: 2922805,
    },
    {
      value: "Nova Redenção",
      label: "Nova Redenção",
      ibge: 2922854,
    },
    {
      value: "Nova Soure",
      label: "Nova Soure",
      ibge: 2922904,
    },
    {
      value: "Nova Viçosa",
      label: "Nova Viçosa",
      ibge: 2923001,
    },
    {
      value: "Novo Horizonte",
      label: "Novo Horizonte",
      ibge: 2923035,
    },
    {
      value: "Novo Triunfo",
      label: "Novo Triunfo",
      ibge: 2923050,
    },
    {
      value: "Olindina",
      label: "Olindina",
      ibge: 2923100,
    },
    {
      value: "Oliveira dos Brejinhos",
      label: "Oliveira dos Brejinhos",
      ibge: 2923209,
    },
    {
      value: "Ouriçangas",
      label: "Ouriçangas",
      ibge: 2923308,
    },
    {
      value: "Ourolândia",
      label: "Ourolândia",
      ibge: 2923357,
    },
    {
      value: "Palmas de Monte Alto",
      label: "Palmas de Monte Alto",
      ibge: 2923407,
    },
    {
      value: "Palmeiras",
      label: "Palmeiras",
      ibge: 2923506,
    },
    {
      value: "Paramirim",
      label: "Paramirim",
      ibge: 2923605,
    },
    {
      value: "Paratinga",
      label: "Paratinga",
      ibge: 2923704,
    },
    {
      value: "Paripiranga",
      label: "Paripiranga",
      ibge: 2923803,
    },
    {
      value: "Pau Brasil",
      label: "Pau Brasil",
      ibge: 2923902,
    },
    {
      value: "Paulo Afonso",
      label: "Paulo Afonso",
      ibge: 2924009,
    },
    {
      value: "Pé de Serra",
      label: "Pé de Serra",
      ibge: 2924058,
    },
    {
      value: "Pedrão",
      label: "Pedrão",
      ibge: 2924108,
    },
    {
      value: "Pedro Alexandre",
      label: "Pedro Alexandre",
      ibge: 2924207,
    },
    {
      value: "Piatã",
      label: "Piatã",
      ibge: 2924306,
    },
    {
      value: "Pilão Arcado",
      label: "Pilão Arcado",
      ibge: 2924405,
    },
    {
      value: "Pindaí",
      label: "Pindaí",
      ibge: 2924504,
    },
    {
      value: "Pindobaçu",
      label: "Pindobaçu",
      ibge: 2924603,
    },
    {
      value: "Pintadas",
      label: "Pintadas",
      ibge: 2924652,
    },
    {
      value: "Piraí do Norte",
      label: "Piraí do Norte",
      ibge: 2924678,
    },
    {
      value: "Piripá",
      label: "Piripá",
      ibge: 2924702,
    },
    {
      value: "Piritiba",
      label: "Piritiba",
      ibge: 2924801,
    },
    {
      value: "Planaltino",
      label: "Planaltino",
      ibge: 2924900,
    },
    {
      value: "Planalto",
      label: "Planalto",
      ibge: 2925006,
    },
    {
      value: "Poções",
      label: "Poções",
      ibge: 2925105,
    },
    {
      value: "Pojuca",
      label: "Pojuca",
      ibge: 2925204,
    },
    {
      value: "Ponto Novo",
      label: "Ponto Novo",
      ibge: 2925253,
    },
    {
      value: "Porto Seguro",
      label: "Porto Seguro",
      ibge: 2925303,
    },
    {
      value: "Potiraguá",
      label: "Potiraguá",
      ibge: 2925402,
    },
    {
      value: "Prado",
      label: "Prado",
      ibge: 2925501,
    },
    {
      value: "Presidente Dutra",
      label: "Presidente Dutra",
      ibge: 2925600,
    },
    {
      value: "Presidente Jânio Quadros",
      label: "Presidente Jânio Quadros",
      ibge: 2925709,
    },
    {
      value: "Presidente Tancredo Neves",
      label: "Presidente Tancredo Neves",
      ibge: 2925758,
    },
    {
      value: "Queimadas",
      label: "Queimadas",
      ibge: 2925808,
    },
    {
      value: "Quijingue",
      label: "Quijingue",
      ibge: 2925907,
    },
    {
      value: "Quixabeira",
      label: "Quixabeira",
      ibge: 2925931,
    },
    {
      value: "Rafael Jambeiro",
      label: "Rafael Jambeiro",
      ibge: 2925956,
    },
    {
      value: "Remanso",
      label: "Remanso",
      ibge: 2926004,
    },
    {
      value: "Retirolândia",
      label: "Retirolândia",
      ibge: 2926103,
    },
    {
      value: "Riachão das Neves",
      label: "Riachão das Neves",
      ibge: 2926202,
    },
    {
      value: "Riachão do Jacuípe",
      label: "Riachão do Jacuípe",
      ibge: 2926301,
    },
    {
      value: "Riacho de Santana",
      label: "Riacho de Santana",
      ibge: 2926400,
    },
    {
      value: "Ribeira do Amparo",
      label: "Ribeira do Amparo",
      ibge: 2926509,
    },
    {
      value: "Ribeira do Pombal",
      label: "Ribeira do Pombal",
      ibge: 2926608,
    },
    {
      value: "Ribeirão do Largo",
      label: "Ribeirão do Largo",
      ibge: 2926657,
    },
    {
      value: "Rio de Contas",
      label: "Rio de Contas",
      ibge: 2926707,
    },
    {
      value: "Rio do Antônio",
      label: "Rio do Antônio",
      ibge: 2926806,
    },
    {
      value: "Rio do Pires",
      label: "Rio do Pires",
      ibge: 2926905,
    },
    {
      value: "Rio Real",
      label: "Rio Real",
      ibge: 2927002,
    },
    {
      value: "Rodelas",
      label: "Rodelas",
      ibge: 2927101,
    },
    {
      value: "Ruy Barbosa",
      label: "Ruy Barbosa",
      ibge: 2927200,
    },
    {
      value: "Salinas da Margarida",
      label: "Salinas da Margarida",
      ibge: 2927309,
    },
    {
      value: "Salvador",
      label: "Salvador",
      ibge: 2927408,
    },
    {
      value: "Santa Bárbara",
      label: "Santa Bárbara",
      ibge: 2927507,
    },
    {
      value: "Santa Brígida",
      label: "Santa Brígida",
      ibge: 2927606,
    },
    {
      value: "Santa Cruz Cabrália",
      label: "Santa Cruz Cabrália",
      ibge: 2927705,
    },
    {
      value: "Santa Cruz da Vitória",
      label: "Santa Cruz da Vitória",
      ibge: 2927804,
    },
    {
      value: "Santa Inês",
      label: "Santa Inês",
      ibge: 2927903,
    },
    {
      value: "Santa Luzia",
      label: "Santa Luzia",
      ibge: 2928059,
    },
    {
      value: "Santa Maria da Vitória",
      label: "Santa Maria da Vitória",
      ibge: 2928109,
    },
    {
      value: "Santa Rita de Cássia",
      label: "Santa Rita de Cássia",
      ibge: 2928406,
    },
    {
      value: "Santa Teresinha",
      label: "Santa Teresinha",
    },
    {
      value: "Santaluz",
      label: "Santaluz",
      ibge: 2928000,
    },
    {
      value: "Santana",
      label: "Santana",
      ibge: 2928208,
    },
    {
      value: "Santanópolis",
      label: "Santanópolis",
      ibge: 2928307,
    },
    {
      value: "Santo Amaro",
      label: "Santo Amaro",
      ibge: 2928604,
    },
    {
      value: "Santo Antônio de Jesus",
      label: "Santo Antônio de Jesus",
      ibge: 2928703,
    },
    {
      value: "Santo Estêvão",
      label: "Santo Estêvão",
      ibge: 2928802,
    },
    {
      value: "São Desidério",
      label: "São Desidério",
      ibge: 2928901,
    },
    {
      value: "São Domingos",
      label: "São Domingos",
      ibge: 2928950,
    },
    {
      value: "São Felipe",
      label: "São Felipe",
      ibge: 2929107,
    },
    {
      value: "São Félix",
      label: "São Félix",
      ibge: 2929008,
    },
    {
      value: "São Félix do Coribe",
      label: "São Félix do Coribe",
      ibge: 2929057,
    },
    {
      value: "São Francisco do Conde",
      label: "São Francisco do Conde",
      ibge: 2929206,
    },
    {
      value: "São Gabriel",
      label: "São Gabriel",
      ibge: 2929255,
    },
    {
      value: "São Gonçalo dos Campos",
      label: "São Gonçalo dos Campos",
      ibge: 2929305,
    },
    {
      value: "São José da Vitória",
      label: "São José da Vitória",
      ibge: 2929354,
    },
    {
      value: "São José do Jacuípe",
      label: "São José do Jacuípe",
      ibge: 2929370,
    },
    {
      value: "São Miguel das Matas",
      label: "São Miguel das Matas",
      ibge: 2929404,
    },
    {
      value: "São Sebastião do Passé",
      label: "São Sebastião do Passé",
      ibge: 2929503,
    },
    {
      value: "Sapeaçu",
      label: "Sapeaçu",
      ibge: 2929602,
    },
    {
      value: "Sátiro Dias",
      label: "Sátiro Dias",
      ibge: 2929701,
    },
    {
      value: "Saubara",
      label: "Saubara",
      ibge: 2929750,
    },
    {
      value: "Saúde",
      label: "Saúde",
      ibge: 2929800,
    },
    {
      value: "Seabra",
      label: "Seabra",
      ibge: 2929909,
    },
    {
      value: "Sebastião Laranjeiras",
      label: "Sebastião Laranjeiras",
      ibge: 2930006,
    },
    {
      value: "Senhor do Bonfim",
      label: "Senhor do Bonfim",
      ibge: 2930105,
    },
    {
      value: "Sento Sé",
      label: "Sento Sé",
      ibge: 2930204,
    },
    {
      value: "Serra do Ramalho",
      label: "Serra do Ramalho",
      ibge: 2930154,
    },
    {
      value: "Serra Dourada",
      label: "Serra Dourada",
      ibge: 2930303,
    },
    {
      value: "Serra Preta",
      label: "Serra Preta",
      ibge: 2930402,
    },
    {
      value: "Serrinha",
      label: "Serrinha",
      ibge: 2930501,
    },
    {
      value: "Serrolândia",
      label: "Serrolândia",
      ibge: 2930600,
    },
    {
      value: "Simões Filho",
      label: "Simões Filho",
      ibge: 2930709,
    },
    {
      value: "Sítio do Mato",
      label: "Sítio do Mato",
      ibge: 2930758,
    },
    {
      value: "Sítio do Quinto",
      label: "Sítio do Quinto",
      ibge: 2930766,
    },
    {
      value: "Sobradinho",
      label: "Sobradinho",
      ibge: 2930774,
    },
    {
      value: "Souto Soares",
      label: "Souto Soares",
      ibge: 2930808,
    },
    {
      value: "Tabocas do Brejo Velho",
      label: "Tabocas do Brejo Velho",
      ibge: 2930907,
    },
    {
      value: "Tanhaçu",
      label: "Tanhaçu",
      ibge: 2931004,
    },
    {
      value: "Tanque Novo",
      label: "Tanque Novo",
      ibge: 2931053,
    },
    {
      value: "Tanquinho",
      label: "Tanquinho",
      ibge: 2931103,
    },
    {
      value: "Taperoá",
      label: "Taperoá",
      ibge: 2931202,
    },
    {
      value: "Tapiramutá",
      label: "Tapiramutá",
      ibge: 2931301,
    },
    {
      value: "Teixeira de Freitas",
      label: "Teixeira de Freitas",
      ibge: 2931350,
    },
    {
      value: "Teodoro Sampaio",
      label: "Teodoro Sampaio",
      ibge: 2931400,
    },
    {
      value: "Teofilândia",
      label: "Teofilândia",
      ibge: 2931509,
    },
    {
      value: "Teolândia",
      label: "Teolândia",
      ibge: 2931608,
    },
    {
      value: "Terra Nova",
      label: "Terra Nova",
      ibge: 2931707,
    },
    {
      value: "Tremedal",
      label: "Tremedal",
      ibge: 2931806,
    },
    {
      value: "Tucano",
      label: "Tucano",
      ibge: 2931905,
    },
    {
      value: "Uauá",
      label: "Uauá",
      ibge: 2932002,
    },
    {
      value: "Ubaíra",
      label: "Ubaíra",
      ibge: 2932101,
    },
    {
      value: "Ubaitaba",
      label: "Ubaitaba",
      ibge: 2932200,
    },
    {
      value: "Ubatã",
      label: "Ubatã",
      ibge: 2932309,
    },
    {
      value: "Uibaí",
      label: "Uibaí",
      ibge: 2932408,
    },
    {
      value: "Umburanas",
      label: "Umburanas",
      ibge: 2932457,
    },
    {
      value: "Una",
      label: "Una",
      ibge: 2932507,
    },
    {
      value: "Urandi",
      label: "Urandi",
      ibge: 2932606,
    },
    {
      value: "Uruçuca",
      label: "Uruçuca",
      ibge: 2932705,
    },
    {
      value: "Utinga",
      label: "Utinga",
      ibge: 2932804,
    },
    {
      value: "Valença",
      label: "Valença",
      ibge: 2932903,
    },
    {
      value: "Valente",
      label: "Valente",
      ibge: 2933000,
    },
    {
      value: "Várzea da Roça",
      label: "Várzea da Roça",
      ibge: 2933059,
    },
    {
      value: "Várzea do Poço",
      label: "Várzea do Poço",
      ibge: 2933109,
    },
    {
      value: "Várzea Nova",
      label: "Várzea Nova",
      ibge: 2933158,
    },
    {
      value: "Varzedo",
      label: "Varzedo",
      ibge: 2933174,
    },
    {
      value: "Vera Cruz",
      label: "Vera Cruz",
      ibge: 2933208,
    },
    {
      value: "Vereda",
      label: "Vereda",
      ibge: 2933257,
    },
    {
      value: "Vitória da Conquista",
      label: "Vitória da Conquista",
      ibge: 2933307,
    },
    {
      value: "Wagner",
      label: "Wagner",
      ibge: 2933406,
    },
    {
      value: "Wanderley",
      label: "Wanderley",
      ibge: 2933455,
    },
    {
      value: "Wenceslau Guimarães",
      label: "Wenceslau Guimarães",
      ibge: 2933505,
    },
    {
      value: "Xique-Xique",
      label: "Xique-Xique",
      ibge: 2933604,
    },
    {
      value: "Araçás",
      label: "Araçás",
      ibge: 2902054,
    },
    {
      value: "Iuiu",
      label: "Iuiu",
      ibge: 2917334,
    },
    {
      value: "Muquém do São Francisco",
      label: "Muquém do São Francisco",
      ibge: 2922250,
    },
    {
      value: "Santa Terezinha",
      label: "Santa Terezinha",
      ibge: 2928505,
    },
  ],
  CE: [
    {
      value: "Abaiara",
      label: "Abaiara",
      ibge: 2300101,
    },
    {
      value: "Acarapé",
      label: "Acarapé",
    },
    {
      value: "Acaraú",
      label: "Acaraú",
      ibge: 2300200,
    },
    {
      value: "Acopiara",
      label: "Acopiara",
      ibge: 2300309,
    },
    {
      value: "Aiuaba",
      label: "Aiuaba",
      ibge: 2300408,
    },
    {
      value: "Alcântaras",
      label: "Alcântaras",
      ibge: 2300507,
    },
    {
      value: "Altaneira",
      label: "Altaneira",
      ibge: 2300606,
    },
    {
      value: "Alto Santo",
      label: "Alto Santo",
      ibge: 2300705,
    },
    {
      value: "Amontada",
      label: "Amontada",
      ibge: 2300754,
    },
    {
      value: "Antonina do Norte",
      label: "Antonina do Norte",
      ibge: 2300804,
    },
    {
      value: "Apuiarés",
      label: "Apuiarés",
      ibge: 2300903,
    },
    {
      value: "Aquiraz",
      label: "Aquiraz",
      ibge: 2301000,
    },
    {
      value: "Aracati",
      label: "Aracati",
      ibge: 2301109,
    },
    {
      value: "Aracoiaba",
      label: "Aracoiaba",
      ibge: 2301208,
    },
    {
      value: "Ararendá",
      label: "Ararendá",
      ibge: 2301257,
    },
    {
      value: "Araripe",
      label: "Araripe",
      ibge: 2301307,
    },
    {
      value: "Aratuba",
      label: "Aratuba",
      ibge: 2301406,
    },
    {
      value: "Arneiroz",
      label: "Arneiroz",
      ibge: 2301505,
    },
    {
      value: "Assaré",
      label: "Assaré",
      ibge: 2301604,
    },
    {
      value: "Aurora",
      label: "Aurora",
      ibge: 2301703,
    },
    {
      value: "Baixio",
      label: "Baixio",
      ibge: 2301802,
    },
    {
      value: "Banabuiú",
      label: "Banabuiú",
      ibge: 2301851,
    },
    {
      value: "Barbalha",
      label: "Barbalha",
      ibge: 2301901,
    },
    {
      value: "Barreira",
      label: "Barreira",
      ibge: 2301950,
    },
    {
      value: "Barro",
      label: "Barro",
      ibge: 2302008,
    },
    {
      value: "Barroquinha",
      label: "Barroquinha",
      ibge: 2302057,
    },
    {
      value: "Baturité",
      label: "Baturité",
      ibge: 2302107,
    },
    {
      value: "Beberibe",
      label: "Beberibe",
      ibge: 2302206,
    },
    {
      value: "Bela Cruz",
      label: "Bela Cruz",
      ibge: 2302305,
    },
    {
      value: "Boa Viagem",
      label: "Boa Viagem",
      ibge: 2302404,
    },
    {
      value: "Brejo Santo",
      label: "Brejo Santo",
      ibge: 2302503,
    },
    {
      value: "Camocim",
      label: "Camocim",
      ibge: 2302602,
    },
    {
      value: "Campos Sales",
      label: "Campos Sales",
      ibge: 2302701,
    },
    {
      value: "Canindé",
      label: "Canindé",
      ibge: 2302800,
    },
    {
      value: "Capistrano",
      label: "Capistrano",
      ibge: 2302909,
    },
    {
      value: "Caridade",
      label: "Caridade",
      ibge: 2303006,
    },
    {
      value: "Cariré",
      label: "Cariré",
      ibge: 2303105,
    },
    {
      value: "Caririaçu",
      label: "Caririaçu",
      ibge: 2303204,
    },
    {
      value: "Cariús",
      label: "Cariús",
      ibge: 2303303,
    },
    {
      value: "Carnaubal",
      label: "Carnaubal",
      ibge: 2303402,
    },
    {
      value: "Cascavel",
      label: "Cascavel",
      ibge: 2303501,
    },
    {
      value: "Catarina",
      label: "Catarina",
      ibge: 2303600,
    },
    {
      value: "Catunda",
      label: "Catunda",
      ibge: 2303659,
    },
    {
      value: "Caucaia",
      label: "Caucaia",
      ibge: 2303709,
    },
    {
      value: "Cedro",
      label: "Cedro",
      ibge: 2303808,
    },
    {
      value: "Chaval",
      label: "Chaval",
      ibge: 2303907,
    },
    {
      value: "Choró",
      label: "Choró",
      ibge: 2303931,
    },
    {
      value: "Chorozinho",
      label: "Chorozinho",
      ibge: 2303956,
    },
    {
      value: "Coreaú",
      label: "Coreaú",
      ibge: 2304004,
    },
    {
      value: "Crateús",
      label: "Crateús",
      ibge: 2304103,
    },
    {
      value: "Crato",
      label: "Crato",
      ibge: 2304202,
    },
    {
      value: "Croatá",
      label: "Croatá",
      ibge: 2304236,
    },
    {
      value: "Cruz",
      label: "Cruz",
      ibge: 2304251,
    },
    {
      value: "Deputado Irapuan Pinheiro",
      label: "Deputado Irapuan Pinheiro",
      ibge: 2304269,
    },
    {
      value: "Ererê",
      label: "Ererê",
    },
    {
      value: "Eusébio",
      label: "Eusébio",
      ibge: 2304285,
    },
    {
      value: "Farias Brito",
      label: "Farias Brito",
      ibge: 2304301,
    },
    {
      value: "Forquilha",
      label: "Forquilha",
      ibge: 2304350,
    },
    {
      value: "Fortaleza",
      label: "Fortaleza",
      ibge: 2304400,
    },
    {
      value: "Fortim",
      label: "Fortim",
      ibge: 2304459,
    },
    {
      value: "Frecheirinha",
      label: "Frecheirinha",
      ibge: 2304509,
    },
    {
      value: "General Sampaio",
      label: "General Sampaio",
      ibge: 2304608,
    },
    {
      value: "Graça",
      label: "Graça",
      ibge: 2304657,
    },
    {
      value: "Granja",
      label: "Granja",
      ibge: 2304707,
    },
    {
      value: "Granjeiro",
      label: "Granjeiro",
      ibge: 2304806,
    },
    {
      value: "Groaíras",
      label: "Groaíras",
      ibge: 2304905,
    },
    {
      value: "Guaiúba",
      label: "Guaiúba",
      ibge: 2304954,
    },
    {
      value: "Guaraciaba do Norte",
      label: "Guaraciaba do Norte",
      ibge: 2305001,
    },
    {
      value: "Guaramiranga",
      label: "Guaramiranga",
      ibge: 2305100,
    },
    {
      value: "Hidrolândia",
      label: "Hidrolândia",
      ibge: 2305209,
    },
    {
      value: "Horizonte",
      label: "Horizonte",
      ibge: 2305233,
    },
    {
      value: "Ibaretama",
      label: "Ibaretama",
      ibge: 2305266,
    },
    {
      value: "Ibiapina",
      label: "Ibiapina",
      ibge: 2305308,
    },
    {
      value: "Ibicuitinga",
      label: "Ibicuitinga",
      ibge: 2305332,
    },
    {
      value: "Icapuí",
      label: "Icapuí",
      ibge: 2305357,
    },
    {
      value: "Icó",
      label: "Icó",
      ibge: 2305407,
    },
    {
      value: "Iguatu",
      label: "Iguatu",
      ibge: 2305506,
    },
    {
      value: "Independência",
      label: "Independência",
      ibge: 2305605,
    },
    {
      value: "Ipaporanga",
      label: "Ipaporanga",
      ibge: 2305654,
    },
    {
      value: "Ipaumirim",
      label: "Ipaumirim",
      ibge: 2305704,
    },
    {
      value: "Ipu",
      label: "Ipu",
      ibge: 2305803,
    },
    {
      value: "Ipueiras",
      label: "Ipueiras",
      ibge: 2305902,
    },
    {
      value: "Iracema",
      label: "Iracema",
      ibge: 2306009,
    },
    {
      value: "Irauçuba",
      label: "Irauçuba",
      ibge: 2306108,
    },
    {
      value: "Itaiçaba",
      label: "Itaiçaba",
      ibge: 2306207,
    },
    {
      value: "Itaitinga",
      label: "Itaitinga",
      ibge: 2306256,
    },
    {
      value: "Itapagé",
      label: "Itapagé",
    },
    {
      value: "Itapipoca",
      label: "Itapipoca",
      ibge: 2306405,
    },
    {
      value: "Itapiúna",
      label: "Itapiúna",
      ibge: 2306504,
    },
    {
      value: "Itarema",
      label: "Itarema",
      ibge: 2306553,
    },
    {
      value: "Itatira",
      label: "Itatira",
      ibge: 2306603,
    },
    {
      value: "Jaguaretama",
      label: "Jaguaretama",
      ibge: 2306702,
    },
    {
      value: "Jaguaribara",
      label: "Jaguaribara",
      ibge: 2306801,
    },
    {
      value: "Jaguaribe",
      label: "Jaguaribe",
      ibge: 2306900,
    },
    {
      value: "Jaguaruana",
      label: "Jaguaruana",
      ibge: 2307007,
    },
    {
      value: "Jardim",
      label: "Jardim",
      ibge: 2307106,
    },
    {
      value: "Jati",
      label: "Jati",
      ibge: 2307205,
    },
    {
      value: "Jijoca de Jericoaroara",
      label: "Jijoca de Jericoaroara",
    },
    {
      value: "Juazeiro do Norte",
      label: "Juazeiro do Norte",
      ibge: 2307304,
    },
    {
      value: "Jucás",
      label: "Jucás",
      ibge: 2307403,
    },
    {
      value: "Lavras da Mangabeira",
      label: "Lavras da Mangabeira",
      ibge: 2307502,
    },
    {
      value: "Limoeiro do Norte",
      label: "Limoeiro do Norte",
      ibge: 2307601,
    },
    {
      value: "Madalena",
      label: "Madalena",
      ibge: 2307635,
    },
    {
      value: "Maracanaú",
      label: "Maracanaú",
      ibge: 2307650,
    },
    {
      value: "Maranguape",
      label: "Maranguape",
      ibge: 2307700,
    },
    {
      value: "Marco",
      label: "Marco",
      ibge: 2307809,
    },
    {
      value: "Martinópole",
      label: "Martinópole",
      ibge: 2307908,
    },
    {
      value: "Massapê",
      label: "Massapê",
      ibge: 2308005,
    },
    {
      value: "Mauriti",
      label: "Mauriti",
      ibge: 2308104,
    },
    {
      value: "Meruoca",
      label: "Meruoca",
      ibge: 2308203,
    },
    {
      value: "Milagres",
      label: "Milagres",
      ibge: 2308302,
    },
    {
      value: "Milhã",
      label: "Milhã",
      ibge: 2308351,
    },
    {
      value: "Miraíma",
      label: "Miraíma",
      ibge: 2308377,
    },
    {
      value: "Missão Velha",
      label: "Missão Velha",
      ibge: 2308401,
    },
    {
      value: "Mombaça",
      label: "Mombaça",
      ibge: 2308500,
    },
    {
      value: "Monsenhor Tabosa",
      label: "Monsenhor Tabosa",
      ibge: 2308609,
    },
    {
      value: "Morada Nova",
      label: "Morada Nova",
      ibge: 2308708,
    },
    {
      value: "Moraújo",
      label: "Moraújo",
      ibge: 2308807,
    },
    {
      value: "Morrinhos",
      label: "Morrinhos",
      ibge: 2308906,
    },
    {
      value: "Mucambo",
      label: "Mucambo",
      ibge: 2309003,
    },
    {
      value: "Mulungu",
      label: "Mulungu",
      ibge: 2309102,
    },
    {
      value: "Nova Olinda",
      label: "Nova Olinda",
      ibge: 2309201,
    },
    {
      value: "Nova Russas",
      label: "Nova Russas",
      ibge: 2309300,
    },
    {
      value: "Novo Oriente",
      label: "Novo Oriente",
      ibge: 2309409,
    },
    {
      value: "Ocara",
      label: "Ocara",
      ibge: 2309458,
    },
    {
      value: "Orós",
      label: "Orós",
      ibge: 2309508,
    },
    {
      value: "Pacajus",
      label: "Pacajus",
      ibge: 2309607,
    },
    {
      value: "Pacatuba",
      label: "Pacatuba",
      ibge: 2309706,
    },
    {
      value: "Pacoti",
      label: "Pacoti",
      ibge: 2309805,
    },
    {
      value: "Pacujá",
      label: "Pacujá",
      ibge: 2309904,
    },
    {
      value: "Palhano",
      label: "Palhano",
      ibge: 2310001,
    },
    {
      value: "Palmácia",
      label: "Palmácia",
      ibge: 2310100,
    },
    {
      value: "Paracuru",
      label: "Paracuru",
      ibge: 2310209,
    },
    {
      value: "Paraipaba",
      label: "Paraipaba",
      ibge: 2310258,
    },
    {
      value: "Parambu",
      label: "Parambu",
      ibge: 2310308,
    },
    {
      value: "Paramoti",
      label: "Paramoti",
      ibge: 2310407,
    },
    {
      value: "Pedra Branca",
      label: "Pedra Branca",
      ibge: 2310506,
    },
    {
      value: "Penaforte",
      label: "Penaforte",
      ibge: 2310605,
    },
    {
      value: "Pentecoste",
      label: "Pentecoste",
      ibge: 2310704,
    },
    {
      value: "Pereiro",
      label: "Pereiro",
      ibge: 2310803,
    },
    {
      value: "Pindoretama",
      label: "Pindoretama",
      ibge: 2310852,
    },
    {
      value: "Piquet Carneiro",
      label: "Piquet Carneiro",
      ibge: 2310902,
    },
    {
      value: "Pires Ferreira",
      label: "Pires Ferreira",
      ibge: 2310951,
    },
    {
      value: "Poranga",
      label: "Poranga",
      ibge: 2311009,
    },
    {
      value: "Porteiras",
      label: "Porteiras",
      ibge: 2311108,
    },
    {
      value: "Potengi",
      label: "Potengi",
      ibge: 2311207,
    },
    {
      value: "Potiretama",
      label: "Potiretama",
      ibge: 2311231,
    },
    {
      value: "Quiterianópolis",
      label: "Quiterianópolis",
      ibge: 2311264,
    },
    {
      value: "Quixadá",
      label: "Quixadá",
      ibge: 2311306,
    },
    {
      value: "Quixelô",
      label: "Quixelô",
      ibge: 2311355,
    },
    {
      value: "Quixeramobim",
      label: "Quixeramobim",
      ibge: 2311405,
    },
    {
      value: "Quixeré",
      label: "Quixeré",
      ibge: 2311504,
    },
    {
      value: "Redenção",
      label: "Redenção",
      ibge: 2311603,
    },
    {
      value: "Reriutaba",
      label: "Reriutaba",
      ibge: 2311702,
    },
    {
      value: "Russas",
      label: "Russas",
      ibge: 2311801,
    },
    {
      value: "Saboeiro",
      label: "Saboeiro",
      ibge: 2311900,
    },
    {
      value: "Salitre",
      label: "Salitre",
      ibge: 2311959,
    },
    {
      value: "Santa Quitéria",
      label: "Santa Quitéria",
      ibge: 2312205,
    },
    {
      value: "Santana do Acaraú",
      label: "Santana do Acaraú",
      ibge: 2312007,
    },
    {
      value: "Santana do Cariri",
      label: "Santana do Cariri",
      ibge: 2312106,
    },
    {
      value: "São Benedito",
      label: "São Benedito",
      ibge: 2312304,
    },
    {
      value: "São Gonçalo do Amarante",
      label: "São Gonçalo do Amarante",
      ibge: 2312403,
    },
    {
      value: "São João do Jaguaribe",
      label: "São João do Jaguaribe",
      ibge: 2312502,
    },
    {
      value: "São Luís do Curu",
      label: "São Luís do Curu",
      ibge: 2312601,
    },
    {
      value: "Senador Pompeu",
      label: "Senador Pompeu",
      ibge: 2312700,
    },
    {
      value: "Senador Sá",
      label: "Senador Sá",
      ibge: 2312809,
    },
    {
      value: "Sobral",
      label: "Sobral",
      ibge: 2312908,
    },
    {
      value: "Solonópole",
      label: "Solonópole",
      ibge: 2313005,
    },
    {
      value: "Tabuleiro do Norte",
      label: "Tabuleiro do Norte",
      ibge: 2313104,
    },
    {
      value: "Tamboril",
      label: "Tamboril",
      ibge: 2313203,
    },
    {
      value: "Tarrafas",
      label: "Tarrafas",
      ibge: 2313252,
    },
    {
      value: "Tauá",
      label: "Tauá",
      ibge: 2313302,
    },
    {
      value: "Tejuçuoca",
      label: "Tejuçuoca",
      ibge: 2313351,
    },
    {
      value: "Tianguá",
      label: "Tianguá",
      ibge: 2313401,
    },
    {
      value: "Trairi",
      label: "Trairi",
      ibge: 2313500,
    },
    {
      value: "Tururu",
      label: "Tururu",
      ibge: 2313559,
    },
    {
      value: "Ubajara",
      label: "Ubajara",
      ibge: 2313609,
    },
    {
      value: "Umari",
      label: "Umari",
      ibge: 2313708,
    },
    {
      value: "Umirim",
      label: "Umirim",
      ibge: 2313757,
    },
    {
      value: "Uruburetama",
      label: "Uruburetama",
      ibge: 2313807,
    },
    {
      value: "Uruoca",
      label: "Uruoca",
      ibge: 2313906,
    },
    {
      value: "Varjota",
      label: "Varjota",
      ibge: 2313955,
    },
    {
      value: "Várzea Alegre",
      label: "Várzea Alegre",
      ibge: 2314003,
    },
    {
      value: "Viçosa do Ceará",
      label: "Viçosa do Ceará",
      ibge: 2314102,
    },
    {
      value: "Acarape",
      label: "Acarape",
      ibge: 2300150,
    },
    {
      value: "Ereré",
      label: "Ereré",
      ibge: 2304277,
    },
    {
      value: "Itapajé",
      label: "Itapajé",
      ibge: 2306306,
    },
    {
      value: "Jijoca de Jericoacoara",
      label: "Jijoca de Jericoacoara",
      ibge: 2307254,
    },
  ],
  DF: [
    {
      value: "Brasília",
      label: "Brasília",
      ibge: 5300108,
    },
  ],
  ES: [
    {
      value: "Afonso Cláudio",
      label: "Afonso Cláudio",
      ibge: 3200102,
    },
    {
      value: "Água Doce do Norte",
      label: "Água Doce do Norte",
      ibge: 3200169,
    },
    {
      value: "Águia Branca",
      label: "Águia Branca",
      ibge: 3200136,
    },
    {
      value: "Alegre",
      label: "Alegre",
      ibge: 3200201,
    },
    {
      value: "Alfredo Chaves",
      label: "Alfredo Chaves",
      ibge: 3200300,
    },
    {
      value: "Alto Rio Novo",
      label: "Alto Rio Novo",
      ibge: 3200359,
    },
    {
      value: "Anchieta",
      label: "Anchieta",
      ibge: 3200409,
    },
    {
      value: "Apiacá",
      label: "Apiacá",
      ibge: 3200508,
    },
    {
      value: "Aracruz",
      label: "Aracruz",
      ibge: 3200607,
    },
    {
      value: "Atilio Vivacqua",
      label: "Atilio Vivacqua",
    },
    {
      value: "Baixo Guandu",
      label: "Baixo Guandu",
      ibge: 3200805,
    },
    {
      value: "Barra de São Francisco",
      label: "Barra de São Francisco",
      ibge: 3200904,
    },
    {
      value: "Boa Esperança",
      label: "Boa Esperança",
      ibge: 3201001,
    },
    {
      value: "Bom Jesus do Norte",
      label: "Bom Jesus do Norte",
      ibge: 3201100,
    },
    {
      value: "Brejetuba",
      label: "Brejetuba",
      ibge: 3201159,
    },
    {
      value: "Cachoeiro de Itapemirim",
      label: "Cachoeiro de Itapemirim",
      ibge: 3201209,
    },
    {
      value: "Cariacica",
      label: "Cariacica",
      ibge: 3201308,
    },
    {
      value: "Castelo",
      label: "Castelo",
      ibge: 3201407,
    },
    {
      value: "Colatina",
      label: "Colatina",
      ibge: 3201506,
    },
    {
      value: "Conceição da Barra",
      label: "Conceição da Barra",
      ibge: 3201605,
    },
    {
      value: "Conceição do Castelo",
      label: "Conceição do Castelo",
      ibge: 3201704,
    },
    {
      value: "Divino de São Lourenço",
      label: "Divino de São Lourenço",
      ibge: 3201803,
    },
    {
      value: "Domingos Martins",
      label: "Domingos Martins",
      ibge: 3201902,
    },
    {
      value: "Dores do Rio Preto",
      label: "Dores do Rio Preto",
      ibge: 3202009,
    },
    {
      value: "Ecoporanga",
      label: "Ecoporanga",
      ibge: 3202108,
    },
    {
      value: "Fundão",
      label: "Fundão",
      ibge: 3202207,
    },
    {
      value: "Governador Lindenberg",
      label: "Governador Lindenberg",
      ibge: 3202256,
    },
    {
      value: "Guaçuí",
      label: "Guaçuí",
      ibge: 3202306,
    },
    {
      value: "Guarapari",
      label: "Guarapari",
      ibge: 3202405,
    },
    {
      value: "Ibatiba",
      label: "Ibatiba",
      ibge: 3202454,
    },
    {
      value: "Ibiraçu",
      label: "Ibiraçu",
      ibge: 3202504,
    },
    {
      value: "Ibitirama",
      label: "Ibitirama",
      ibge: 3202553,
    },
    {
      value: "Iconha",
      label: "Iconha",
      ibge: 3202603,
    },
    {
      value: "Irupi",
      label: "Irupi",
      ibge: 3202652,
    },
    {
      value: "Itaguaçu",
      label: "Itaguaçu",
      ibge: 3202702,
    },
    {
      value: "Itapemirim",
      label: "Itapemirim",
      ibge: 3202801,
    },
    {
      value: "Itarana",
      label: "Itarana",
      ibge: 3202900,
    },
    {
      value: "Iúna",
      label: "Iúna",
      ibge: 3203007,
    },
    {
      value: "Jaguaré",
      label: "Jaguaré",
      ibge: 3203056,
    },
    {
      value: "Jerônimo Monteiro",
      label: "Jerônimo Monteiro",
      ibge: 3203106,
    },
    {
      value: "João Neiva",
      label: "João Neiva",
      ibge: 3203130,
    },
    {
      value: "Laranja da Terra",
      label: "Laranja da Terra",
      ibge: 3203163,
    },
    {
      value: "Linhares",
      label: "Linhares",
      ibge: 3203205,
    },
    {
      value: "Mantenópolis",
      label: "Mantenópolis",
      ibge: 3203304,
    },
    {
      value: "Marataizes",
      label: "Marataizes",
    },
    {
      value: "Marechal Floriano",
      label: "Marechal Floriano",
      ibge: 3203346,
    },
    {
      value: "Marilândia",
      label: "Marilândia",
      ibge: 3203353,
    },
    {
      value: "Mimoso do Sul",
      label: "Mimoso do Sul",
      ibge: 3203403,
    },
    {
      value: "Montanha",
      label: "Montanha",
      ibge: 3203502,
    },
    {
      value: "Mucurici",
      label: "Mucurici",
      ibge: 3203601,
    },
    {
      value: "Muniz Freire",
      label: "Muniz Freire",
      ibge: 3203700,
    },
    {
      value: "Muqui",
      label: "Muqui",
      ibge: 3203809,
    },
    {
      value: "Nova Venécia",
      label: "Nova Venécia",
      ibge: 3203908,
    },
    {
      value: "Pancas",
      label: "Pancas",
      ibge: 3204005,
    },
    {
      value: "Pedro Canário",
      label: "Pedro Canário",
      ibge: 3204054,
    },
    {
      value: "Pinheiros",
      label: "Pinheiros",
      ibge: 3204104,
    },
    {
      value: "Piúma",
      label: "Piúma",
      ibge: 3204203,
    },
    {
      value: "Ponto Belo",
      label: "Ponto Belo",
      ibge: 3204252,
    },
    {
      value: "Presidente Kennedy",
      label: "Presidente Kennedy",
      ibge: 3204302,
    },
    {
      value: "Rio Bananal",
      label: "Rio Bananal",
      ibge: 3204351,
    },
    {
      value: "Rio Novo do Sul",
      label: "Rio Novo do Sul",
      ibge: 3204401,
    },
    {
      value: "Santa Leopoldina",
      label: "Santa Leopoldina",
      ibge: 3204500,
    },
    {
      value: "Santa Maria de Jetibá",
      label: "Santa Maria de Jetibá",
      ibge: 3204559,
    },
    {
      value: "Santa Teresa",
      label: "Santa Teresa",
      ibge: 3204609,
    },
    {
      value: "São Domingos do Norte",
      label: "São Domingos do Norte",
      ibge: 3204658,
    },
    {
      value: "São Gabriel da Palha",
      label: "São Gabriel da Palha",
      ibge: 3204708,
    },
    {
      value: "São José do Calçado",
      label: "São José do Calçado",
      ibge: 3204807,
    },
    {
      value: "São Mateus",
      label: "São Mateus",
      ibge: 3204906,
    },
    {
      value: "São Roque do Canaã",
      label: "São Roque do Canaã",
      ibge: 3204955,
    },
    {
      value: "Serra",
      label: "Serra",
      ibge: 3205002,
    },
    {
      value: "Sooretama",
      label: "Sooretama",
      ibge: 3205010,
    },
    {
      value: "Vargem Alta",
      label: "Vargem Alta",
      ibge: 3205036,
    },
    {
      value: "Venda Nova do Imigrante",
      label: "Venda Nova do Imigrante",
      ibge: 3205069,
    },
    {
      value: "Viana",
      label: "Viana",
      ibge: 3205101,
    },
    {
      value: "Vila Pavão",
      label: "Vila Pavão",
      ibge: 3205150,
    },
    {
      value: "Vila Valério",
      label: "Vila Valério",
      ibge: 3205176,
    },
    {
      value: "Vila Velha",
      label: "Vila Velha",
      ibge: 3205200,
    },
    {
      value: "Vitória",
      label: "Vitória",
      ibge: 3205309,
    },
    {
      value: "Atílio Vivácqua",
      label: "Atílio Vivácqua",
      ibge: 3200706,
    },
    {
      value: "Marataízes",
      label: "Marataízes",
      ibge: 3203320,
    },
  ],
  GO: [
    {
      value: "Abadia de Goiás",
      label: "Abadia de Goiás",
      ibge: 5200050,
    },
    {
      value: "Abadiânia",
      label: "Abadiânia",
      ibge: 5200100,
    },
    {
      value: "Acreúna",
      label: "Acreúna",
      ibge: 5200134,
    },
    {
      value: "Adelândia",
      label: "Adelândia",
      ibge: 5200159,
    },
    {
      value: "Água Fria de Goiás",
      label: "Água Fria de Goiás",
      ibge: 5200175,
    },
    {
      value: "Água Limpa",
      label: "Água Limpa",
      ibge: 5200209,
    },
    {
      value: "Águas Lindas de Goiás",
      label: "Águas Lindas de Goiás",
      ibge: 5200258,
    },
    {
      value: "Alexânia",
      label: "Alexânia",
      ibge: 5200308,
    },
    {
      value: "Aloândia",
      label: "Aloândia",
      ibge: 5200506,
    },
    {
      value: "Alto Horizonte",
      label: "Alto Horizonte",
      ibge: 5200555,
    },
    {
      value: "Alto Paraíso de Goiás",
      label: "Alto Paraíso de Goiás",
      ibge: 5200605,
    },
    {
      value: "Alvorada do Norte",
      label: "Alvorada do Norte",
      ibge: 5200803,
    },
    {
      value: "Amaralina",
      label: "Amaralina",
      ibge: 5200829,
    },
    {
      value: "Americano do Brasil",
      label: "Americano do Brasil",
      ibge: 5200852,
    },
    {
      value: "Amorinópolis",
      label: "Amorinópolis",
      ibge: 5200902,
    },
    {
      value: "Anápolis",
      label: "Anápolis",
      ibge: 5201108,
    },
    {
      value: "Anhanguera",
      label: "Anhanguera",
      ibge: 5201207,
    },
    {
      value: "Anicuns",
      label: "Anicuns",
      ibge: 5201306,
    },
    {
      value: "Aparecida de Goiânia",
      label: "Aparecida de Goiânia",
      ibge: 5201405,
    },
    {
      value: "Aparecida do Rio Doce",
      label: "Aparecida do Rio Doce",
      ibge: 5201454,
    },
    {
      value: "Aporé",
      label: "Aporé",
      ibge: 5201504,
    },
    {
      value: "Araçu",
      label: "Araçu",
      ibge: 5201603,
    },
    {
      value: "Aragarças",
      label: "Aragarças",
      ibge: 5201702,
    },
    {
      value: "Aragoiânia",
      label: "Aragoiânia",
      ibge: 5201801,
    },
    {
      value: "Araguapaz",
      label: "Araguapaz",
      ibge: 5202155,
    },
    {
      value: "Arenópolis",
      label: "Arenópolis",
      ibge: 5202353,
    },
    {
      value: "Aruanã",
      label: "Aruanã",
      ibge: 5202502,
    },
    {
      value: "Aurilândia",
      label: "Aurilândia",
      ibge: 5202601,
    },
    {
      value: "Avelinópolis",
      label: "Avelinópolis",
      ibge: 5202809,
    },
    {
      value: "Baliza",
      label: "Baliza",
      ibge: 5203104,
    },
    {
      value: "Barro Alto",
      label: "Barro Alto",
      ibge: 5203203,
    },
    {
      value: "Bela Vista de Goiás",
      label: "Bela Vista de Goiás",
      ibge: 5203302,
    },
    {
      value: "Bom Jardim de Goiás",
      label: "Bom Jardim de Goiás",
      ibge: 5203401,
    },
    {
      value: "Bom Jesus de Goiás",
      label: "Bom Jesus de Goiás",
      ibge: 5203500,
    },
    {
      value: "Bonfinópolis",
      label: "Bonfinópolis",
      ibge: 5203559,
    },
    {
      value: "Bonópolis",
      label: "Bonópolis",
      ibge: 5203575,
    },
    {
      value: "Brazabrantes",
      label: "Brazabrantes",
      ibge: 5203609,
    },
    {
      value: "Britânia",
      label: "Britânia",
      ibge: 5203807,
    },
    {
      value: "Buriti Alegre",
      label: "Buriti Alegre",
      ibge: 5203906,
    },
    {
      value: "Buriti de Goiás",
      label: "Buriti de Goiás",
      ibge: 5203939,
    },
    {
      value: "Buritinópolis",
      label: "Buritinópolis",
      ibge: 5203962,
    },
    {
      value: "Cabeceiras",
      label: "Cabeceiras",
      ibge: 5204003,
    },
    {
      value: "Cachoeira Alta",
      label: "Cachoeira Alta",
      ibge: 5204102,
    },
    {
      value: "Cachoeira de Goiás",
      label: "Cachoeira de Goiás",
      ibge: 5204201,
    },
    {
      value: "Cachoeira Dourada",
      label: "Cachoeira Dourada",
      ibge: 5204250,
    },
    {
      value: "Caçu",
      label: "Caçu",
      ibge: 5204300,
    },
    {
      value: "Caiapônia",
      label: "Caiapônia",
      ibge: 5204409,
    },
    {
      value: "Caldas Novas",
      label: "Caldas Novas",
      ibge: 5204508,
    },
    {
      value: "Caldazinha",
      label: "Caldazinha",
      ibge: 5204557,
    },
    {
      value: "Campestre de Goiás",
      label: "Campestre de Goiás",
      ibge: 5204607,
    },
    {
      value: "Campinaçu",
      label: "Campinaçu",
      ibge: 5204656,
    },
    {
      value: "Campinorte",
      label: "Campinorte",
      ibge: 5204706,
    },
    {
      value: "Campo Alegre de Goiás",
      label: "Campo Alegre de Goiás",
      ibge: 5204805,
    },
    {
      value: "Campos Limpo de Goiás",
      label: "Campos Limpo de Goiás",
    },
    {
      value: "Campos Belos",
      label: "Campos Belos",
      ibge: 5204904,
    },
    {
      value: "Campos Verdes",
      label: "Campos Verdes",
      ibge: 5204953,
    },
    {
      value: "Carmo do Rio Verde",
      label: "Carmo do Rio Verde",
      ibge: 5205000,
    },
    {
      value: "Castelândia",
      label: "Castelândia",
      ibge: 5205059,
    },
    {
      value: "Catalão",
      label: "Catalão",
      ibge: 5205109,
    },
    {
      value: "Caturaí",
      label: "Caturaí",
      ibge: 5205208,
    },
    {
      value: "Cavalcante",
      label: "Cavalcante",
      ibge: 5205307,
    },
    {
      value: "Ceres",
      label: "Ceres",
      ibge: 5205406,
    },
    {
      value: "Cezarina",
      label: "Cezarina",
      ibge: 5205455,
    },
    {
      value: "Chapadão do Céu",
      label: "Chapadão do Céu",
      ibge: 5205471,
    },
    {
      value: "Cidade Ocidental",
      label: "Cidade Ocidental",
      ibge: 5205497,
    },
    {
      value: "Cocalzinho de Goiás",
      label: "Cocalzinho de Goiás",
      ibge: 5205513,
    },
    {
      value: "Colinas do Sul",
      label: "Colinas do Sul",
      ibge: 5205521,
    },
    {
      value: "Córrego do Ouro",
      label: "Córrego do Ouro",
      ibge: 5205703,
    },
    {
      value: "Corumbá de Goiás",
      label: "Corumbá de Goiás",
      ibge: 5205802,
    },
    {
      value: "Corumbaíba",
      label: "Corumbaíba",
      ibge: 5205901,
    },
    {
      value: "Cristalina",
      label: "Cristalina",
      ibge: 5206206,
    },
    {
      value: "Cristianópolis",
      label: "Cristianópolis",
      ibge: 5206305,
    },
    {
      value: "Crixás",
      label: "Crixás",
      ibge: 5206404,
    },
    {
      value: "Cromínia",
      label: "Cromínia",
      ibge: 5206503,
    },
    {
      value: "Cumari",
      label: "Cumari",
      ibge: 5206602,
    },
    {
      value: "Damianópolis",
      label: "Damianópolis",
      ibge: 5206701,
    },
    {
      value: "Damolândia",
      label: "Damolândia",
      ibge: 5206800,
    },
    {
      value: "Davinópolis",
      label: "Davinópolis",
      ibge: 5206909,
    },
    {
      value: "Diorama",
      label: "Diorama",
      ibge: 5207105,
    },
    {
      value: "Divinópolis de Goiás",
      label: "Divinópolis de Goiás",
      ibge: 5208301,
    },
    {
      value: "Doverlândia",
      label: "Doverlândia",
      ibge: 5207253,
    },
    {
      value: "Edealina",
      label: "Edealina",
      ibge: 5207352,
    },
    {
      value: "Edéia",
      label: "Edéia",
      ibge: 5207402,
    },
    {
      value: "Estrela do Norte",
      label: "Estrela do Norte",
      ibge: 5207501,
    },
    {
      value: "Faina",
      label: "Faina",
      ibge: 5207535,
    },
    {
      value: "Fazenda Nova",
      label: "Fazenda Nova",
      ibge: 5207600,
    },
    {
      value: "Firminópolis",
      label: "Firminópolis",
      ibge: 5207808,
    },
    {
      value: "Flores de Goiás",
      label: "Flores de Goiás",
      ibge: 5207907,
    },
    {
      value: "Formosa",
      label: "Formosa",
      ibge: 5208004,
    },
    {
      value: "Formoso",
      label: "Formoso",
      ibge: 5208103,
    },
    {
      value: "Gameleira de Goiás",
      label: "Gameleira de Goiás",
      ibge: 5208152,
    },
    {
      value: "Goianápolis",
      label: "Goianápolis",
      ibge: 5208400,
    },
    {
      value: "Goiandira",
      label: "Goiandira",
      ibge: 5208509,
    },
    {
      value: "Goianésia",
      label: "Goianésia",
      ibge: 5208608,
    },
    {
      value: "Goiânia",
      label: "Goiânia",
      ibge: 5208707,
    },
    {
      value: "Goianira",
      label: "Goianira",
      ibge: 5208806,
    },
    {
      value: "Goiás",
      label: "Goiás",
      ibge: 5208905,
    },
    {
      value: "Goiatuba",
      label: "Goiatuba",
      ibge: 5209101,
    },
    {
      value: "Gouvelândia",
      label: "Gouvelândia",
      ibge: 5209150,
    },
    {
      value: "Guapó",
      label: "Guapó",
      ibge: 5209200,
    },
    {
      value: "Guaraíta",
      label: "Guaraíta",
      ibge: 5209291,
    },
    {
      value: "Guarani de Goiás",
      label: "Guarani de Goiás",
      ibge: 5209408,
    },
    {
      value: "Guarinos",
      label: "Guarinos",
      ibge: 5209457,
    },
    {
      value: "Heitoraí",
      label: "Heitoraí",
      ibge: 5209606,
    },
    {
      value: "Hidrolândia",
      label: "Hidrolândia",
      ibge: 5209705,
    },
    {
      value: "Hidrolina",
      label: "Hidrolina",
      ibge: 5209804,
    },
    {
      value: "Iaciara",
      label: "Iaciara",
      ibge: 5209903,
    },
    {
      value: "Inaciolândia",
      label: "Inaciolândia",
      ibge: 5209937,
    },
    {
      value: "Indiara",
      label: "Indiara",
      ibge: 5209952,
    },
    {
      value: "Inhumas",
      label: "Inhumas",
      ibge: 5210000,
    },
    {
      value: "Ipameri",
      label: "Ipameri",
      ibge: 5210109,
    },
    {
      value: "Ipiranga de Goiás",
      label: "Ipiranga de Goiás",
      ibge: 5210158,
    },
    {
      value: "Iporá",
      label: "Iporá",
      ibge: 5210208,
    },
    {
      value: "Israelândia",
      label: "Israelândia",
      ibge: 5210307,
    },
    {
      value: "Itaberaí",
      label: "Itaberaí",
      ibge: 5210406,
    },
    {
      value: "Itaguari",
      label: "Itaguari",
      ibge: 5210562,
    },
    {
      value: "Itaguaru",
      label: "Itaguaru",
      ibge: 5210604,
    },
    {
      value: "Itajá",
      label: "Itajá",
      ibge: 5210802,
    },
    {
      value: "Itapaci",
      label: "Itapaci",
      ibge: 5210901,
    },
    {
      value: "Itapirapuã",
      label: "Itapirapuã",
      ibge: 5211008,
    },
    {
      value: "Itapuranga",
      label: "Itapuranga",
      ibge: 5211206,
    },
    {
      value: "Itarumã",
      label: "Itarumã",
      ibge: 5211305,
    },
    {
      value: "Itauçu",
      label: "Itauçu",
      ibge: 5211404,
    },
    {
      value: "Itumbiara",
      label: "Itumbiara",
      ibge: 5211503,
    },
    {
      value: "Ivolândia",
      label: "Ivolândia",
      ibge: 5211602,
    },
    {
      value: "Jandaia",
      label: "Jandaia",
      ibge: 5211701,
    },
    {
      value: "Jaraguá",
      label: "Jaraguá",
      ibge: 5211800,
    },
    {
      value: "Jataí",
      label: "Jataí",
      ibge: 5211909,
    },
    {
      value: "Jaupaci",
      label: "Jaupaci",
      ibge: 5212006,
    },
    {
      value: "Jesúpolis",
      label: "Jesúpolis",
      ibge: 5212055,
    },
    {
      value: "Joviânia",
      label: "Joviânia",
      ibge: 5212105,
    },
    {
      value: "Jussara",
      label: "Jussara",
      ibge: 5212204,
    },
    {
      value: "Lagoa Santa",
      label: "Lagoa Santa",
      ibge: 5212253,
    },
    {
      value: "Leopoldo de Bulhões",
      label: "Leopoldo de Bulhões",
      ibge: 5212303,
    },
    {
      value: "Luziânia",
      label: "Luziânia",
      ibge: 5212501,
    },
    {
      value: "Mairipotaba",
      label: "Mairipotaba",
      ibge: 5212600,
    },
    {
      value: "Mambaí",
      label: "Mambaí",
      ibge: 5212709,
    },
    {
      value: "Mara Rosa",
      label: "Mara Rosa",
      ibge: 5212808,
    },
    {
      value: "Marzagão",
      label: "Marzagão",
      ibge: 5212907,
    },
    {
      value: "Matrinchã",
      label: "Matrinchã",
      ibge: 5212956,
    },
    {
      value: "Maurilândia",
      label: "Maurilândia",
      ibge: 5213004,
    },
    {
      value: "Mimoso de Goiás",
      label: "Mimoso de Goiás",
      ibge: 5213053,
    },
    {
      value: "Minaçu",
      label: "Minaçu",
      ibge: 5213087,
    },
    {
      value: "Mineiros",
      label: "Mineiros",
      ibge: 5213103,
    },
    {
      value: "Moiporá",
      label: "Moiporá",
      ibge: 5213400,
    },
    {
      value: "Monte Alegre de Goiás",
      label: "Monte Alegre de Goiás",
      ibge: 5213509,
    },
    {
      value: "Montes Claros de Goiás",
      label: "Montes Claros de Goiás",
      ibge: 5213707,
    },
    {
      value: "Montividiu",
      label: "Montividiu",
      ibge: 5213756,
    },
    {
      value: "Montividiu do Norte",
      label: "Montividiu do Norte",
      ibge: 5213772,
    },
    {
      value: "Morrinhos",
      label: "Morrinhos",
      ibge: 5213806,
    },
    {
      value: "Morro Agudo de Goiás",
      label: "Morro Agudo de Goiás",
      ibge: 5213855,
    },
    {
      value: "Mossâmedes",
      label: "Mossâmedes",
      ibge: 5213905,
    },
    {
      value: "Mozarlândia",
      label: "Mozarlândia",
      ibge: 5214002,
    },
    {
      value: "Mundo Novo",
      label: "Mundo Novo",
      ibge: 5214051,
    },
    {
      value: "Mutunópolis",
      label: "Mutunópolis",
      ibge: 5214101,
    },
    {
      value: "Nazário",
      label: "Nazário",
      ibge: 5214408,
    },
    {
      value: "Nerópolis",
      label: "Nerópolis",
      ibge: 5214507,
    },
    {
      value: "Niquelândia",
      label: "Niquelândia",
      ibge: 5214606,
    },
    {
      value: "Nova América",
      label: "Nova América",
      ibge: 5214705,
    },
    {
      value: "Nova Aurora",
      label: "Nova Aurora",
      ibge: 5214804,
    },
    {
      value: "Nova Crixás",
      label: "Nova Crixás",
      ibge: 5214838,
    },
    {
      value: "Nova Glória",
      label: "Nova Glória",
      ibge: 5214861,
    },
    {
      value: "Nova Iguaçu de Goiás",
      label: "Nova Iguaçu de Goiás",
      ibge: 5214879,
    },
    {
      value: "Nova Roma",
      label: "Nova Roma",
      ibge: 5214903,
    },
    {
      value: "Nova Veneza",
      label: "Nova Veneza",
      ibge: 5215009,
    },
    {
      value: "Novo Brasil",
      label: "Novo Brasil",
      ibge: 5215207,
    },
    {
      value: "Novo Gama",
      label: "Novo Gama",
      ibge: 5215231,
    },
    {
      value: "Novo Planalto",
      label: "Novo Planalto",
      ibge: 5215256,
    },
    {
      value: "Orizona",
      label: "Orizona",
      ibge: 5215306,
    },
    {
      value: "Ouro Verde de Goiás",
      label: "Ouro Verde de Goiás",
      ibge: 5215405,
    },
    {
      value: "Ouvidor",
      label: "Ouvidor",
      ibge: 5215504,
    },
    {
      value: "Padre Bernardo",
      label: "Padre Bernardo",
      ibge: 5215603,
    },
    {
      value: "Palestina de Goiás",
      label: "Palestina de Goiás",
      ibge: 5215652,
    },
    {
      value: "Palmeiras de Goiás",
      label: "Palmeiras de Goiás",
      ibge: 5215702,
    },
    {
      value: "Palmelo",
      label: "Palmelo",
      ibge: 5215801,
    },
    {
      value: "Palminópolis",
      label: "Palminópolis",
      ibge: 5215900,
    },
    {
      value: "Panamá",
      label: "Panamá",
      ibge: 5216007,
    },
    {
      value: "Paranaiguara",
      label: "Paranaiguara",
      ibge: 5216304,
    },
    {
      value: "Paraúna",
      label: "Paraúna",
      ibge: 5216403,
    },
    {
      value: "Perolândia",
      label: "Perolândia",
      ibge: 5216452,
    },
    {
      value: "Petrolina de Goiás",
      label: "Petrolina de Goiás",
      ibge: 5216809,
    },
    {
      value: "Pilar de Goiás",
      label: "Pilar de Goiás",
      ibge: 5216908,
    },
    {
      value: "Piracanjuba",
      label: "Piracanjuba",
      ibge: 5217104,
    },
    {
      value: "Piranhas",
      label: "Piranhas",
      ibge: 5217203,
    },
    {
      value: "Pirenópolis",
      label: "Pirenópolis",
      ibge: 5217302,
    },
    {
      value: "Pires do Rio",
      label: "Pires do Rio",
      ibge: 5217401,
    },
    {
      value: "Planaltina",
      label: "Planaltina",
      ibge: 5217609,
    },
    {
      value: "Pontalina",
      label: "Pontalina",
      ibge: 5217708,
    },
    {
      value: "Porangatu",
      label: "Porangatu",
      ibge: 5218003,
    },
    {
      value: "Porteirão",
      label: "Porteirão",
      ibge: 5218052,
    },
    {
      value: "Portelândia",
      label: "Portelândia",
      ibge: 5218102,
    },
    {
      value: "Posse",
      label: "Posse",
      ibge: 5218300,
    },
    {
      value: "Professor Jamil",
      label: "Professor Jamil",
      ibge: 5218391,
    },
    {
      value: "Quirinópolis",
      label: "Quirinópolis",
      ibge: 5218508,
    },
    {
      value: "Rialma",
      label: "Rialma",
      ibge: 5218607,
    },
    {
      value: "Rianápolis",
      label: "Rianápolis",
      ibge: 5218706,
    },
    {
      value: "Rio Quente",
      label: "Rio Quente",
      ibge: 5218789,
    },
    {
      value: "Rio Verde",
      label: "Rio Verde",
      ibge: 5218805,
    },
    {
      value: "Rubiataba",
      label: "Rubiataba",
      ibge: 5218904,
    },
    {
      value: "Sanclerlândia",
      label: "Sanclerlândia",
      ibge: 5219001,
    },
    {
      value: "Santa Bárbara de Goiás",
      label: "Santa Bárbara de Goiás",
      ibge: 5219100,
    },
    {
      value: "Santa Cruz de Goiás",
      label: "Santa Cruz de Goiás",
      ibge: 5219209,
    },
    {
      value: "Santa Fé de Goiás",
      label: "Santa Fé de Goiás",
      ibge: 5219258,
    },
    {
      value: "Santa Helena de Goiás",
      label: "Santa Helena de Goiás",
      ibge: 5219308,
    },
    {
      value: "Santa Isabel",
      label: "Santa Isabel",
      ibge: 5219357,
    },
    {
      value: "Santa Rita do Araguaia",
      label: "Santa Rita do Araguaia",
      ibge: 5219407,
    },
    {
      value: "Santa Rita do Novo Destino",
      label: "Santa Rita do Novo Destino",
      ibge: 5219456,
    },
    {
      value: "Santa Rosa de Goiás",
      label: "Santa Rosa de Goiás",
      ibge: 5219506,
    },
    {
      value: "Santa Tereza de Goiás",
      label: "Santa Tereza de Goiás",
      ibge: 5219605,
    },
    {
      value: "Santa Terezinha de Goiás",
      label: "Santa Terezinha de Goiás",
      ibge: 5219704,
    },
    {
      value: "Santo Antônio da Barra",
      label: "Santo Antônio da Barra",
      ibge: 5219712,
    },
    {
      value: "Santo Antônio de Goiás",
      label: "Santo Antônio de Goiás",
      ibge: 5219738,
    },
    {
      value: "Santo Antônio do Descoberto",
      label: "Santo Antônio do Descoberto",
      ibge: 5219753,
    },
    {
      value: "São Domingos",
      label: "São Domingos",
      ibge: 5219803,
    },
    {
      value: "São Francisco de Goiás",
      label: "São Francisco de Goiás",
      ibge: 5219902,
    },
    {
      value: "São João d'Aliança",
      label: "São João d'Aliança",
      ibge: 5220009,
    },
    {
      value: "São João da Paraúna",
      label: "São João da Paraúna",
      ibge: 5220058,
    },
    {
      value: "São Luís de Montes Belos",
      label: "São Luís de Montes Belos",
      ibge: 5220108,
    },
    {
      value: "São Luíz do Norte",
      label: "São Luíz do Norte",
    },
    {
      value: "São Miguel do Araguaia",
      label: "São Miguel do Araguaia",
      ibge: 5220207,
    },
    {
      value: "São Miguel do Passa Quatro",
      label: "São Miguel do Passa Quatro",
      ibge: 5220264,
    },
    {
      value: "São Patrício",
      label: "São Patrício",
      ibge: 5220280,
    },
    {
      value: "São Simão",
      label: "São Simão",
      ibge: 5220405,
    },
    {
      value: "Senador Canedo",
      label: "Senador Canedo",
      ibge: 5220454,
    },
    {
      value: "Serranópolis",
      label: "Serranópolis",
      ibge: 5220504,
    },
    {
      value: "Silvânia",
      label: "Silvânia",
      ibge: 5220603,
    },
    {
      value: "Simolândia",
      label: "Simolândia",
      ibge: 5220686,
    },
    {
      value: "Sítio d'Abadia",
      label: "Sítio d'Abadia",
      ibge: 5220702,
    },
    {
      value: "Taquaral de Goiás",
      label: "Taquaral de Goiás",
      ibge: 5221007,
    },
    {
      value: "Teresina de Goiás",
      label: "Teresina de Goiás",
      ibge: 5221080,
    },
    {
      value: "Terezópolis de Goiás",
      label: "Terezópolis de Goiás",
      ibge: 5221197,
    },
    {
      value: "Três Ranchos",
      label: "Três Ranchos",
      ibge: 5221304,
    },
    {
      value: "Trindade",
      label: "Trindade",
      ibge: 5221403,
    },
    {
      value: "Trombas",
      label: "Trombas",
      ibge: 5221452,
    },
    {
      value: "Turvânia",
      label: "Turvânia",
      ibge: 5221502,
    },
    {
      value: "Turvelândia",
      label: "Turvelândia",
      ibge: 5221551,
    },
    {
      value: "Uirapuru",
      label: "Uirapuru",
      ibge: 5221577,
    },
    {
      value: "Uruaçu",
      label: "Uruaçu",
      ibge: 5221601,
    },
    {
      value: "Uruana",
      label: "Uruana",
      ibge: 5221700,
    },
    {
      value: "Urutaí",
      label: "Urutaí",
      ibge: 5221809,
    },
    {
      value: "Valparaíso de Goiás",
      label: "Valparaíso de Goiás",
      ibge: 5221858,
    },
    {
      value: "Varjão",
      label: "Varjão",
      ibge: 5221908,
    },
    {
      value: "Vianópolis",
      label: "Vianópolis",
      ibge: 5222005,
    },
    {
      value: "Vicentinópolis",
      label: "Vicentinópolis",
      ibge: 5222054,
    },
    {
      value: "Vila Boa",
      label: "Vila Boa",
      ibge: 5222203,
    },
    {
      value: "Vila Propício",
      label: "Vila Propício",
      ibge: 5222302,
    },
    {
      value: "Campo Limpo de Goiás",
      label: "Campo Limpo de Goiás",
      ibge: 5204854,
    },
    {
      value: "São Luiz do Norte",
      label: "São Luiz do Norte",
      ibge: 5220157,
    },
  ],
  MA: [
    {
      value: "Açailândia",
      label: "Açailândia",
      ibge: 2100055,
    },
    {
      value: "Afonso Cunha",
      label: "Afonso Cunha",
      ibge: 2100105,
    },
    {
      value: "Água Doce do Maranhão",
      label: "Água Doce do Maranhão",
      ibge: 2100154,
    },
    {
      value: "Alcântara",
      label: "Alcântara",
      ibge: 2100204,
    },
    {
      value: "Aldeias Altas",
      label: "Aldeias Altas",
      ibge: 2100303,
    },
    {
      value: "Altamira do Maranhão",
      label: "Altamira do Maranhão",
      ibge: 2100402,
    },
    {
      value: "Alto Alegre do Maranhão",
      label: "Alto Alegre do Maranhão",
      ibge: 2100436,
    },
    {
      value: "Alto Alegre do Pindaré",
      label: "Alto Alegre do Pindaré",
      ibge: 2100477,
    },
    {
      value: "Alto Parnaíba",
      label: "Alto Parnaíba",
      ibge: 2100501,
    },
    {
      value: "Amapá do Maranhão",
      label: "Amapá do Maranhão",
      ibge: 2100550,
    },
    {
      value: "Amarante do Maranhão",
      label: "Amarante do Maranhão",
      ibge: 2100600,
    },
    {
      value: "Anajatuba",
      label: "Anajatuba",
      ibge: 2100709,
    },
    {
      value: "Anapurus",
      label: "Anapurus",
      ibge: 2100808,
    },
    {
      value: "Apicum-Açu",
      label: "Apicum-Açu",
      ibge: 2100832,
    },
    {
      value: "Araguanã",
      label: "Araguanã",
      ibge: 2100873,
    },
    {
      value: "Araioses",
      label: "Araioses",
      ibge: 2100907,
    },
    {
      value: "Arame",
      label: "Arame",
      ibge: 2100956,
    },
    {
      value: "Arari",
      label: "Arari",
      ibge: 2101004,
    },
    {
      value: "Axixá",
      label: "Axixá",
      ibge: 2101103,
    },
    {
      value: "Bacabal",
      label: "Bacabal",
      ibge: 2101202,
    },
    {
      value: "Bacabeira",
      label: "Bacabeira",
      ibge: 2101251,
    },
    {
      value: "Bacuri",
      label: "Bacuri",
      ibge: 2101301,
    },
    {
      value: "Bacurituba",
      label: "Bacurituba",
      ibge: 2101350,
    },
    {
      value: "Balsas",
      label: "Balsas",
      ibge: 2101400,
    },
    {
      value: "Barão de Grajaú",
      label: "Barão de Grajaú",
      ibge: 2101509,
    },
    {
      value: "Barra do Corda",
      label: "Barra do Corda",
      ibge: 2101608,
    },
    {
      value: "Barreirinhas",
      label: "Barreirinhas",
      ibge: 2101707,
    },
    {
      value: "Bela Vista do Maranhão",
      label: "Bela Vista do Maranhão",
      ibge: 2101772,
    },
    {
      value: "Belágua",
      label: "Belágua",
      ibge: 2101731,
    },
    {
      value: "Benedito Leite",
      label: "Benedito Leite",
      ibge: 2101806,
    },
    {
      value: "Bequimão",
      label: "Bequimão",
      ibge: 2101905,
    },
    {
      value: "Bernardo do Mearim",
      label: "Bernardo do Mearim",
      ibge: 2101939,
    },
    {
      value: "Boa Vista do Gurupi",
      label: "Boa Vista do Gurupi",
      ibge: 2101970,
    },
    {
      value: "Bom Jardim",
      label: "Bom Jardim",
      ibge: 2102002,
    },
    {
      value: "Bom Jesus das Selvas",
      label: "Bom Jesus das Selvas",
      ibge: 2102036,
    },
    {
      value: "Bom Lugar",
      label: "Bom Lugar",
      ibge: 2102077,
    },
    {
      value: "Brejo",
      label: "Brejo",
      ibge: 2102101,
    },
    {
      value: "Brejo de Areia",
      label: "Brejo de Areia",
      ibge: 2102150,
    },
    {
      value: "Buriti",
      label: "Buriti",
      ibge: 2102200,
    },
    {
      value: "Buriti Bravo",
      label: "Buriti Bravo",
      ibge: 2102309,
    },
    {
      value: "Buriticupu",
      label: "Buriticupu",
      ibge: 2102325,
    },
    {
      value: "Buritirana",
      label: "Buritirana",
      ibge: 2102358,
    },
    {
      value: "Cachoeira Grande",
      label: "Cachoeira Grande",
      ibge: 2102374,
    },
    {
      value: "Cajapió",
      label: "Cajapió",
      ibge: 2102408,
    },
    {
      value: "Cajari",
      label: "Cajari",
      ibge: 2102507,
    },
    {
      value: "Campestre do Maranhão",
      label: "Campestre do Maranhão",
      ibge: 2102556,
    },
    {
      value: "Cândido Mendes",
      label: "Cândido Mendes",
      ibge: 2102606,
    },
    {
      value: "Cantanhede",
      label: "Cantanhede",
      ibge: 2102705,
    },
    {
      value: "Capinzal do Norte",
      label: "Capinzal do Norte",
      ibge: 2102754,
    },
    {
      value: "Carolina",
      label: "Carolina",
      ibge: 2102804,
    },
    {
      value: "Carutapera",
      label: "Carutapera",
      ibge: 2102903,
    },
    {
      value: "Caxias",
      label: "Caxias",
      ibge: 2103000,
    },
    {
      value: "Cedral",
      label: "Cedral",
      ibge: 2103109,
    },
    {
      value: "Central do Maranhão",
      label: "Central do Maranhão",
      ibge: 2103125,
    },
    {
      value: "Centro do Guilherme",
      label: "Centro do Guilherme",
      ibge: 2103158,
    },
    {
      value: "Centro Novo do Maranhão",
      label: "Centro Novo do Maranhão",
      ibge: 2103174,
    },
    {
      value: "Chapadinha",
      label: "Chapadinha",
      ibge: 2103208,
    },
    {
      value: "Cidelândia",
      label: "Cidelândia",
      ibge: 2103257,
    },
    {
      value: "Codó",
      label: "Codó",
      ibge: 2103307,
    },
    {
      value: "Coelho Neto",
      label: "Coelho Neto",
      ibge: 2103406,
    },
    {
      value: "Colinas",
      label: "Colinas",
      ibge: 2103505,
    },
    {
      value: "Conceição do Lago-Açu",
      label: "Conceição do Lago-Açu",
      ibge: 2103554,
    },
    {
      value: "Coroatá",
      label: "Coroatá",
      ibge: 2103604,
    },
    {
      value: "Cururupu",
      label: "Cururupu",
      ibge: 2103703,
    },
    {
      value: "Davinópolis",
      label: "Davinópolis",
      ibge: 2103752,
    },
    {
      value: "Dom Pedro",
      label: "Dom Pedro",
      ibge: 2103802,
    },
    {
      value: "Duque Bacelar",
      label: "Duque Bacelar",
      ibge: 2103901,
    },
    {
      value: "Esperantinópolis",
      label: "Esperantinópolis",
      ibge: 2104008,
    },
    {
      value: "Estreito",
      label: "Estreito",
      ibge: 2104057,
    },
    {
      value: "Feira Nova do Maranhão",
      label: "Feira Nova do Maranhão",
      ibge: 2104073,
    },
    {
      value: "Fernando Falcão",
      label: "Fernando Falcão",
      ibge: 2104081,
    },
    {
      value: "Formosa da Serra Negra",
      label: "Formosa da Serra Negra",
      ibge: 2104099,
    },
    {
      value: "Fortaleza dos Nogueiras",
      label: "Fortaleza dos Nogueiras",
      ibge: 2104107,
    },
    {
      value: "Fortuna",
      label: "Fortuna",
      ibge: 2104206,
    },
    {
      value: "Godofredo Viana",
      label: "Godofredo Viana",
      ibge: 2104305,
    },
    {
      value: "Gonçalves Dias",
      label: "Gonçalves Dias",
      ibge: 2104404,
    },
    {
      value: "Governador Archer",
      label: "Governador Archer",
      ibge: 2104503,
    },
    {
      value: "Governador Edison Lobão",
      label: "Governador Edison Lobão",
      ibge: 2104552,
    },
    {
      value: "Governador Eugênio Barros",
      label: "Governador Eugênio Barros",
      ibge: 2104602,
    },
    {
      value: "Governador Luiz Rocha",
      label: "Governador Luiz Rocha",
      ibge: 2104628,
    },
    {
      value: "Governador Newton Bello",
      label: "Governador Newton Bello",
      ibge: 2104651,
    },
    {
      value: "Governador Nunes Freire",
      label: "Governador Nunes Freire",
      ibge: 2104677,
    },
    {
      value: "Graça Aranha",
      label: "Graça Aranha",
      ibge: 2104701,
    },
    {
      value: "Grajaú",
      label: "Grajaú",
      ibge: 2104800,
    },
    {
      value: "Guimarães",
      label: "Guimarães",
      ibge: 2104909,
    },
    {
      value: "Humberto de Campos",
      label: "Humberto de Campos",
      ibge: 2105005,
    },
    {
      value: "Icatu",
      label: "Icatu",
      ibge: 2105104,
    },
    {
      value: "Igarapé do Meio",
      label: "Igarapé do Meio",
      ibge: 2105153,
    },
    {
      value: "Igarapé Grande",
      label: "Igarapé Grande",
      ibge: 2105203,
    },
    {
      value: "Imperatriz",
      label: "Imperatriz",
      ibge: 2105302,
    },
    {
      value: "Itaipava do Grajaú",
      label: "Itaipava do Grajaú",
      ibge: 2105351,
    },
    {
      value: "Itapecuru Mirim",
      label: "Itapecuru Mirim",
      ibge: 2105401,
    },
    {
      value: "Itinga do Maranhão",
      label: "Itinga do Maranhão",
      ibge: 2105427,
    },
    {
      value: "Jatobá",
      label: "Jatobá",
      ibge: 2105450,
    },
    {
      value: "Jenipapo dos Vieiras",
      label: "Jenipapo dos Vieiras",
      ibge: 2105476,
    },
    {
      value: "João Lisboa",
      label: "João Lisboa",
      ibge: 2105500,
    },
    {
      value: "Joselândia",
      label: "Joselândia",
      ibge: 2105609,
    },
    {
      value: "Junco do Maranhão",
      label: "Junco do Maranhão",
      ibge: 2105658,
    },
    {
      value: "Lago da Pedra",
      label: "Lago da Pedra",
      ibge: 2105708,
    },
    {
      value: "Lago do Junco",
      label: "Lago do Junco",
      ibge: 2105807,
    },
    {
      value: "Lago dos Rodrigues",
      label: "Lago dos Rodrigues",
      ibge: 2105948,
    },
    {
      value: "Lago Verde",
      label: "Lago Verde",
      ibge: 2105906,
    },
    {
      value: "Lagoa do Mato",
      label: "Lagoa do Mato",
      ibge: 2105922,
    },
    {
      value: "Lagoa Grande do Maranhão",
      label: "Lagoa Grande do Maranhão",
      ibge: 2105963,
    },
    {
      value: "Lajeado Novo",
      label: "Lajeado Novo",
      ibge: 2105989,
    },
    {
      value: "Lima Campos",
      label: "Lima Campos",
      ibge: 2106003,
    },
    {
      value: "Loreto",
      label: "Loreto",
      ibge: 2106102,
    },
    {
      value: "Luís Domingues",
      label: "Luís Domingues",
      ibge: 2106201,
    },
    {
      value: "Magalhães de Almeida",
      label: "Magalhães de Almeida",
      ibge: 2106300,
    },
    {
      value: "Maracaçumé",
      label: "Maracaçumé",
      ibge: 2106326,
    },
    {
      value: "Marajá do Sena",
      label: "Marajá do Sena",
      ibge: 2106359,
    },
    {
      value: "Maranhãozinho",
      label: "Maranhãozinho",
      ibge: 2106375,
    },
    {
      value: "Mata Roma",
      label: "Mata Roma",
      ibge: 2106409,
    },
    {
      value: "Matinha",
      label: "Matinha",
      ibge: 2106508,
    },
    {
      value: "Matões",
      label: "Matões",
      ibge: 2106607,
    },
    {
      value: "Matões do Norte",
      label: "Matões do Norte",
      ibge: 2106631,
    },
    {
      value: "Milagres do Maranhão",
      label: "Milagres do Maranhão",
      ibge: 2106672,
    },
    {
      value: "Mirador",
      label: "Mirador",
      ibge: 2106706,
    },
    {
      value: "Miranda do Norte",
      label: "Miranda do Norte",
      ibge: 2106755,
    },
    {
      value: "Mirinzal",
      label: "Mirinzal",
      ibge: 2106805,
    },
    {
      value: "Monção",
      label: "Monção",
      ibge: 2106904,
    },
    {
      value: "Montes Altos",
      label: "Montes Altos",
      ibge: 2107001,
    },
    {
      value: "Morros",
      label: "Morros",
      ibge: 2107100,
    },
    {
      value: "Nina Rodrigues",
      label: "Nina Rodrigues",
      ibge: 2107209,
    },
    {
      value: "Nova Colinas",
      label: "Nova Colinas",
      ibge: 2107258,
    },
    {
      value: "Nova Iorque",
      label: "Nova Iorque",
      ibge: 2107308,
    },
    {
      value: "Nova Olinda do Maranhão",
      label: "Nova Olinda do Maranhão",
      ibge: 2107357,
    },
    {
      value: "Olho d'Água das Cunhãs",
      label: "Olho d'Água das Cunhãs",
      ibge: 2107407,
    },
    {
      value: "Olinda Nova do Maranhão",
      label: "Olinda Nova do Maranhão",
      ibge: 2107456,
    },
    {
      value: "Paço do Lumiar",
      label: "Paço do Lumiar",
      ibge: 2107506,
    },
    {
      value: "Palmeirândia",
      label: "Palmeirândia",
      ibge: 2107605,
    },
    {
      value: "Paraibano",
      label: "Paraibano",
      ibge: 2107704,
    },
    {
      value: "Parnarama",
      label: "Parnarama",
      ibge: 2107803,
    },
    {
      value: "Passagem Franca",
      label: "Passagem Franca",
      ibge: 2107902,
    },
    {
      value: "Pastos Bons",
      label: "Pastos Bons",
      ibge: 2108009,
    },
    {
      value: "Paulino Neves",
      label: "Paulino Neves",
      ibge: 2108058,
    },
    {
      value: "Paulo Ramos",
      label: "Paulo Ramos",
      ibge: 2108108,
    },
    {
      value: "Pedreiras",
      label: "Pedreiras",
      ibge: 2108207,
    },
    {
      value: "Pedro do Rosário",
      label: "Pedro do Rosário",
      ibge: 2108256,
    },
    {
      value: "Penalva",
      label: "Penalva",
      ibge: 2108306,
    },
    {
      value: "Peri Mirim",
      label: "Peri Mirim",
      ibge: 2108405,
    },
    {
      value: "Peritoró",
      label: "Peritoró",
      ibge: 2108454,
    },
    {
      value: "Pindaré Mirim",
      label: "Pindaré Mirim",
    },
    {
      value: "Pinheiro",
      label: "Pinheiro",
      ibge: 2108603,
    },
    {
      value: "Pio XII",
      label: "Pio XII",
      ibge: 2108702,
    },
    {
      value: "Pirapemas",
      label: "Pirapemas",
      ibge: 2108801,
    },
    {
      value: "Poção de Pedras",
      label: "Poção de Pedras",
      ibge: 2108900,
    },
    {
      value: "Porto Franco",
      label: "Porto Franco",
      ibge: 2109007,
    },
    {
      value: "Porto Rico do Maranhão",
      label: "Porto Rico do Maranhão",
      ibge: 2109056,
    },
    {
      value: "Presidente Dutra",
      label: "Presidente Dutra",
      ibge: 2109106,
    },
    {
      value: "Presidente Juscelino",
      label: "Presidente Juscelino",
      ibge: 2109205,
    },
    {
      value: "Presidente Médici",
      label: "Presidente Médici",
      ibge: 2109239,
    },
    {
      value: "Presidente Sarney",
      label: "Presidente Sarney",
      ibge: 2109270,
    },
    {
      value: "Presidente Vargas",
      label: "Presidente Vargas",
      ibge: 2109304,
    },
    {
      value: "Primeira Cruz",
      label: "Primeira Cruz",
      ibge: 2109403,
    },
    {
      value: "Raposa",
      label: "Raposa",
      ibge: 2109452,
    },
    {
      value: "Riachão",
      label: "Riachão",
      ibge: 2109502,
    },
    {
      value: "Ribamar Fiquene",
      label: "Ribamar Fiquene",
      ibge: 2109551,
    },
    {
      value: "Rosário",
      label: "Rosário",
      ibge: 2109601,
    },
    {
      value: "Sambaíba",
      label: "Sambaíba",
      ibge: 2109700,
    },
    {
      value: "Santa Filomena do Maranhão",
      label: "Santa Filomena do Maranhão",
      ibge: 2109759,
    },
    {
      value: "Santa Helena",
      label: "Santa Helena",
      ibge: 2109809,
    },
    {
      value: "Santa Inês",
      label: "Santa Inês",
      ibge: 2109908,
    },
    {
      value: "Santa Luzia",
      label: "Santa Luzia",
      ibge: 2110005,
    },
    {
      value: "Santa Luzia do Paruá",
      label: "Santa Luzia do Paruá",
      ibge: 2110039,
    },
    {
      value: "Santa Quitéria do Maranhão",
      label: "Santa Quitéria do Maranhão",
      ibge: 2110104,
    },
    {
      value: "Santa Rita",
      label: "Santa Rita",
      ibge: 2110203,
    },
    {
      value: "Santana do Maranhão",
      label: "Santana do Maranhão",
      ibge: 2110237,
    },
    {
      value: "Santo Amaro do Maranhão",
      label: "Santo Amaro do Maranhão",
      ibge: 2110278,
    },
    {
      value: "Santo Antônio dos Lopes",
      label: "Santo Antônio dos Lopes",
      ibge: 2110302,
    },
    {
      value: "São Benedito do Rio Preto",
      label: "São Benedito do Rio Preto",
      ibge: 2110401,
    },
    {
      value: "São Bento",
      label: "São Bento",
      ibge: 2110500,
    },
    {
      value: "São Bernardo",
      label: "São Bernardo",
      ibge: 2110609,
    },
    {
      value: "São Domingos do Azeitão",
      label: "São Domingos do Azeitão",
      ibge: 2110658,
    },
    {
      value: "São Domingos do Maranhão",
      label: "São Domingos do Maranhão",
      ibge: 2110708,
    },
    {
      value: "São Félix de Balsas",
      label: "São Félix de Balsas",
      ibge: 2110807,
    },
    {
      value: "São Francisco do Brejão",
      label: "São Francisco do Brejão",
      ibge: 2110856,
    },
    {
      value: "São Francisco do Maranhão",
      label: "São Francisco do Maranhão",
      ibge: 2110906,
    },
    {
      value: "São João Batista",
      label: "São João Batista",
      ibge: 2111003,
    },
    {
      value: "São João do Carú",
      label: "São João do Carú",
      ibge: 2111029,
    },
    {
      value: "São João do Paraíso",
      label: "São João do Paraíso",
      ibge: 2111052,
    },
    {
      value: "São João do Soter",
      label: "São João do Soter",
      ibge: 2111078,
    },
    {
      value: "São João dos Patos",
      label: "São João dos Patos",
      ibge: 2111102,
    },
    {
      value: "São José de Ribamar",
      label: "São José de Ribamar",
      ibge: 2111201,
    },
    {
      value: "São José dos Basílios",
      label: "São José dos Basílios",
      ibge: 2111250,
    },
    {
      value: "São Luís",
      label: "São Luís",
      ibge: 2111300,
    },
    {
      value: "São Luís Gonzaga do Maranhão",
      label: "São Luís Gonzaga do Maranhão",
      ibge: 2111409,
    },
    {
      value: "São Mateus do Maranhão",
      label: "São Mateus do Maranhão",
      ibge: 2111508,
    },
    {
      value: "São Pedro da Água Branca",
      label: "São Pedro da Água Branca",
      ibge: 2111532,
    },
    {
      value: "São Pedro dos Crentes",
      label: "São Pedro dos Crentes",
      ibge: 2111573,
    },
    {
      value: "São Raimundo das Mangabeiras",
      label: "São Raimundo das Mangabeiras",
      ibge: 2111607,
    },
    {
      value: "São Raimundo do Doca Bezerra",
      label: "São Raimundo do Doca Bezerra",
      ibge: 2111631,
    },
    {
      value: "São Roberto",
      label: "São Roberto",
      ibge: 2111672,
    },
    {
      value: "São Vicente Ferrer",
      label: "São Vicente Ferrer",
      ibge: 2111706,
    },
    {
      value: "Satubinha",
      label: "Satubinha",
      ibge: 2111722,
    },
    {
      value: "Senador Alexandre Costa",
      label: "Senador Alexandre Costa",
      ibge: 2111748,
    },
    {
      value: "Senador La Rocque",
      label: "Senador La Rocque",
      ibge: 2111763,
    },
    {
      value: "Serrano do Maranhão",
      label: "Serrano do Maranhão",
      ibge: 2111789,
    },
    {
      value: "Sítio Novo",
      label: "Sítio Novo",
      ibge: 2111805,
    },
    {
      value: "Sucupira do Norte",
      label: "Sucupira do Norte",
      ibge: 2111904,
    },
    {
      value: "Sucupira do Riachão",
      label: "Sucupira do Riachão",
      ibge: 2111953,
    },
    {
      value: "Tasso Fragoso",
      label: "Tasso Fragoso",
      ibge: 2112001,
    },
    {
      value: "Timbiras",
      label: "Timbiras",
      ibge: 2112100,
    },
    {
      value: "Timon",
      label: "Timon",
      ibge: 2112209,
    },
    {
      value: "Trizidela do Vale",
      label: "Trizidela do Vale",
      ibge: 2112233,
    },
    {
      value: "Tufilândia",
      label: "Tufilândia",
      ibge: 2112274,
    },
    {
      value: "Tuntum",
      label: "Tuntum",
      ibge: 2112308,
    },
    {
      value: "Turiaçu",
      label: "Turiaçu",
      ibge: 2112407,
    },
    {
      value: "Turilândia",
      label: "Turilândia",
      ibge: 2112456,
    },
    {
      value: "Tutóia",
      label: "Tutóia",
      ibge: 2112506,
    },
    {
      value: "Urbano Santos",
      label: "Urbano Santos",
      ibge: 2112605,
    },
    {
      value: "Vargem Grande",
      label: "Vargem Grande",
      ibge: 2112704,
    },
    {
      value: "Viana",
      label: "Viana",
      ibge: 2112803,
    },
    {
      value: "Vila Nova dos Martírios",
      label: "Vila Nova dos Martírios",
      ibge: 2112852,
    },
    {
      value: "Vitória do Mearim",
      label: "Vitória do Mearim",
      ibge: 2112902,
    },
    {
      value: "Vitorino Freire",
      label: "Vitorino Freire",
      ibge: 2113009,
    },
    {
      value: "Zé Doca",
      label: "Zé Doca",
      ibge: 2114007,
    },
    {
      value: "Pindaré-Mirim",
      label: "Pindaré-Mirim",
      ibge: 2108504,
    },
  ],
  MG: [
    {
      value: "Abadia dos Dourados",
      label: "Abadia dos Dourados",
      ibge: 3100104,
    },
    {
      value: "Abaeté",
      label: "Abaeté",
      ibge: 3100203,
    },
    {
      value: "Abre Campo",
      label: "Abre Campo",
      ibge: 3100302,
    },
    {
      value: "Acaiaca",
      label: "Acaiaca",
      ibge: 3100401,
    },
    {
      value: "Açucena",
      label: "Açucena",
      ibge: 3100500,
    },
    {
      value: "Água Boa",
      label: "Água Boa",
      ibge: 3100609,
    },
    {
      value: "Água Comprida",
      label: "Água Comprida",
      ibge: 3100708,
    },
    {
      value: "Aguanil",
      label: "Aguanil",
      ibge: 3100807,
    },
    {
      value: "Águas Formosas",
      label: "Águas Formosas",
      ibge: 3100906,
    },
    {
      value: "Águas Vermelhas",
      label: "Águas Vermelhas",
      ibge: 3101003,
    },
    {
      value: "Aimorés",
      label: "Aimorés",
      ibge: 3101102,
    },
    {
      value: "Aiuruoca",
      label: "Aiuruoca",
      ibge: 3101201,
    },
    {
      value: "Alagoa",
      label: "Alagoa",
      ibge: 3101300,
    },
    {
      value: "Albertina",
      label: "Albertina",
      ibge: 3101409,
    },
    {
      value: "Além Paraíba",
      label: "Além Paraíba",
      ibge: 3101508,
    },
    {
      value: "Alfenas",
      label: "Alfenas",
      ibge: 3101607,
    },
    {
      value: "Alfredo Vasconcelos",
      label: "Alfredo Vasconcelos",
      ibge: 3101631,
    },
    {
      value: "Almenara",
      label: "Almenara",
      ibge: 3101706,
    },
    {
      value: "Alpercata",
      label: "Alpercata",
      ibge: 3101805,
    },
    {
      value: "Alpinópolis",
      label: "Alpinópolis",
      ibge: 3101904,
    },
    {
      value: "Alterosa",
      label: "Alterosa",
      ibge: 3102001,
    },
    {
      value: "Alto Caparaó",
      label: "Alto Caparaó",
      ibge: 3102050,
    },
    {
      value: "Alto Jequitibá",
      label: "Alto Jequitibá",
      ibge: 3153509,
    },
    {
      value: "Alto Rio Doce",
      label: "Alto Rio Doce",
      ibge: 3102100,
    },
    {
      value: "Alvarenga",
      label: "Alvarenga",
      ibge: 3102209,
    },
    {
      value: "Alvinópolis",
      label: "Alvinópolis",
      ibge: 3102308,
    },
    {
      value: "Alvorada de Minas",
      label: "Alvorada de Minas",
      ibge: 3102407,
    },
    {
      value: "Amparo do Serra",
      label: "Amparo do Serra",
      ibge: 3102506,
    },
    {
      value: "Andradas",
      label: "Andradas",
      ibge: 3102605,
    },
    {
      value: "Andrelândia",
      label: "Andrelândia",
      ibge: 3102803,
    },
    {
      value: "Angelândia",
      label: "Angelândia",
      ibge: 3102852,
    },
    {
      value: "Antônio Carlos",
      label: "Antônio Carlos",
      ibge: 3102902,
    },
    {
      value: "Antônio Dias",
      label: "Antônio Dias",
      ibge: 3103009,
    },
    {
      value: "Antônio Prado de Minas",
      label: "Antônio Prado de Minas",
      ibge: 3103108,
    },
    {
      value: "Araçaí",
      label: "Araçaí",
      ibge: 3103207,
    },
    {
      value: "Aracitaba",
      label: "Aracitaba",
      ibge: 3103306,
    },
    {
      value: "Araçuaí",
      label: "Araçuaí",
      ibge: 3103405,
    },
    {
      value: "Araguari",
      label: "Araguari",
      ibge: 3103504,
    },
    {
      value: "Arantina",
      label: "Arantina",
      ibge: 3103603,
    },
    {
      value: "Araponga",
      label: "Araponga",
      ibge: 3103702,
    },
    {
      value: "Araporã",
      label: "Araporã",
      ibge: 3103751,
    },
    {
      value: "Arapuá",
      label: "Arapuá",
      ibge: 3103801,
    },
    {
      value: "Araújos",
      label: "Araújos",
      ibge: 3103900,
    },
    {
      value: "Araxá",
      label: "Araxá",
      ibge: 3104007,
    },
    {
      value: "Arceburgo",
      label: "Arceburgo",
      ibge: 3104106,
    },
    {
      value: "Arcos",
      label: "Arcos",
      ibge: 3104205,
    },
    {
      value: "Areado",
      label: "Areado",
      ibge: 3104304,
    },
    {
      value: "Argirita",
      label: "Argirita",
      ibge: 3104403,
    },
    {
      value: "Aricanduva",
      label: "Aricanduva",
      ibge: 3104452,
    },
    {
      value: "Arinos",
      label: "Arinos",
      ibge: 3104502,
    },
    {
      value: "Astolfo Dutra",
      label: "Astolfo Dutra",
      ibge: 3104601,
    },
    {
      value: "Ataléia",
      label: "Ataléia",
      ibge: 3104700,
    },
    {
      value: "Augusto de Lima",
      label: "Augusto de Lima",
      ibge: 3104809,
    },
    {
      value: "Baependi",
      label: "Baependi",
      ibge: 3104908,
    },
    {
      value: "Baldim",
      label: "Baldim",
      ibge: 3105004,
    },
    {
      value: "Bambuí",
      label: "Bambuí",
      ibge: 3105103,
    },
    {
      value: "Bandeira",
      label: "Bandeira",
      ibge: 3105202,
    },
    {
      value: "Bandeira do Sul",
      label: "Bandeira do Sul",
      ibge: 3105301,
    },
    {
      value: "Barão de Cocais",
      label: "Barão de Cocais",
      ibge: 3105400,
    },
    {
      value: "Barão de Monte Alto",
      label: "Barão de Monte Alto",
      ibge: 3105509,
    },
    {
      value: "Barbacena",
      label: "Barbacena",
      ibge: 3105608,
    },
    {
      value: "Barra Longa",
      label: "Barra Longa",
      ibge: 3105707,
    },
    {
      value: "Barroso",
      label: "Barroso",
      ibge: 3105905,
    },
    {
      value: "Bela Vista de Minas",
      label: "Bela Vista de Minas",
      ibge: 3106002,
    },
    {
      value: "Belmiro Braga",
      label: "Belmiro Braga",
      ibge: 3106101,
    },
    {
      value: "Belo Horizonte",
      label: "Belo Horizonte",
      ibge: 3106200,
    },
    {
      value: "Belo Oriente",
      label: "Belo Oriente",
      ibge: 3106309,
    },
    {
      value: "Belo Vale",
      label: "Belo Vale",
      ibge: 3106408,
    },
    {
      value: "Berilo",
      label: "Berilo",
      ibge: 3106507,
    },
    {
      value: "Berizal",
      label: "Berizal",
      ibge: 3106655,
    },
    {
      value: "Bertópolis",
      label: "Bertópolis",
      ibge: 3106606,
    },
    {
      value: "Betim",
      label: "Betim",
      ibge: 3106705,
    },
    {
      value: "Bias Fortes",
      label: "Bias Fortes",
      ibge: 3106804,
    },
    {
      value: "Bicas",
      label: "Bicas",
      ibge: 3106903,
    },
    {
      value: "Biquinhas",
      label: "Biquinhas",
      ibge: 3107000,
    },
    {
      value: "Boa Esperança",
      label: "Boa Esperança",
      ibge: 3107109,
    },
    {
      value: "Bocaina de Minas",
      label: "Bocaina de Minas",
      ibge: 3107208,
    },
    {
      value: "Bocaiúva",
      label: "Bocaiúva",
      ibge: 3107307,
    },
    {
      value: "Bom Despacho",
      label: "Bom Despacho",
      ibge: 3107406,
    },
    {
      value: "Bom Jardim de Minas",
      label: "Bom Jardim de Minas",
      ibge: 3107505,
    },
    {
      value: "Bom Jesus da Penha",
      label: "Bom Jesus da Penha",
      ibge: 3107604,
    },
    {
      value: "Bom Jesus do Amparo",
      label: "Bom Jesus do Amparo",
      ibge: 3107703,
    },
    {
      value: "Bom Jesus do Galho",
      label: "Bom Jesus do Galho",
      ibge: 3107802,
    },
    {
      value: "Bom Repouso",
      label: "Bom Repouso",
      ibge: 3107901,
    },
    {
      value: "Bom Sucesso",
      label: "Bom Sucesso",
      ibge: 3108008,
    },
    {
      value: "Bonfim",
      label: "Bonfim",
      ibge: 3108107,
    },
    {
      value: "Bonfinópolis de Minas",
      label: "Bonfinópolis de Minas",
      ibge: 3108206,
    },
    {
      value: "Bonito de Minas",
      label: "Bonito de Minas",
      ibge: 3108255,
    },
    {
      value: "Borda da Mata",
      label: "Borda da Mata",
      ibge: 3108305,
    },
    {
      value: "Botelhos",
      label: "Botelhos",
      ibge: 3108404,
    },
    {
      value: "Botumirim",
      label: "Botumirim",
      ibge: 3108503,
    },
    {
      value: "Brás Pires",
      label: "Brás Pires",
      ibge: 3108701,
    },
    {
      value: "Brasilândia de Minas",
      label: "Brasilândia de Minas",
      ibge: 3108552,
    },
    {
      value: "Brasília de Minas",
      label: "Brasília de Minas",
      ibge: 3108602,
    },
    {
      value: "Brasópolis",
      label: "Brasópolis",
    },
    {
      value: "Braúnas",
      label: "Braúnas",
      ibge: 3108800,
    },
    {
      value: "Brumadinho",
      label: "Brumadinho",
      ibge: 3109006,
    },
    {
      value: "Bueno Brandão",
      label: "Bueno Brandão",
      ibge: 3109105,
    },
    {
      value: "Buenópolis",
      label: "Buenópolis",
      ibge: 3109204,
    },
    {
      value: "Bugre",
      label: "Bugre",
      ibge: 3109253,
    },
    {
      value: "Buritis",
      label: "Buritis",
      ibge: 3109303,
    },
    {
      value: "Buritizeiro",
      label: "Buritizeiro",
      ibge: 3109402,
    },
    {
      value: "Cabeceira Grande",
      label: "Cabeceira Grande",
      ibge: 3109451,
    },
    {
      value: "Cabo Verde",
      label: "Cabo Verde",
      ibge: 3109501,
    },
    {
      value: "Cachoeira da Prata",
      label: "Cachoeira da Prata",
      ibge: 3109600,
    },
    {
      value: "Cachoeira de Minas",
      label: "Cachoeira de Minas",
      ibge: 3109709,
    },
    {
      value: "Cachoeira de Pajeú",
      label: "Cachoeira de Pajeú",
      ibge: 3102704,
    },
    {
      value: "Cachoeira Dourada",
      label: "Cachoeira Dourada",
      ibge: 3109808,
    },
    {
      value: "Caetanópolis",
      label: "Caetanópolis",
      ibge: 3109907,
    },
    {
      value: "Caeté",
      label: "Caeté",
      ibge: 3110004,
    },
    {
      value: "Caiana",
      label: "Caiana",
      ibge: 3110103,
    },
    {
      value: "Cajuri",
      label: "Cajuri",
      ibge: 3110202,
    },
    {
      value: "Caldas",
      label: "Caldas",
      ibge: 3110301,
    },
    {
      value: "Camacho",
      label: "Camacho",
      ibge: 3110400,
    },
    {
      value: "Camanducaia",
      label: "Camanducaia",
      ibge: 3110509,
    },
    {
      value: "Cambuí",
      label: "Cambuí",
      ibge: 3110608,
    },
    {
      value: "Cambuquira",
      label: "Cambuquira",
      ibge: 3110707,
    },
    {
      value: "Campanário",
      label: "Campanário",
      ibge: 3110806,
    },
    {
      value: "Campanha",
      label: "Campanha",
      ibge: 3110905,
    },
    {
      value: "Campestre",
      label: "Campestre",
      ibge: 3111002,
    },
    {
      value: "Campina Verde",
      label: "Campina Verde",
      ibge: 3111101,
    },
    {
      value: "Campo Azul",
      label: "Campo Azul",
      ibge: 3111150,
    },
    {
      value: "Campo Belo",
      label: "Campo Belo",
      ibge: 3111200,
    },
    {
      value: "Campo do Meio",
      label: "Campo do Meio",
      ibge: 3111309,
    },
    {
      value: "Campo Florido",
      label: "Campo Florido",
      ibge: 3111408,
    },
    {
      value: "Campos Altos",
      label: "Campos Altos",
      ibge: 3111507,
    },
    {
      value: "Campos Gerais",
      label: "Campos Gerais",
      ibge: 3111606,
    },
    {
      value: "Cana Verde",
      label: "Cana Verde",
      ibge: 3111903,
    },
    {
      value: "Canaã",
      label: "Canaã",
      ibge: 3111705,
    },
    {
      value: "Canápolis",
      label: "Canápolis",
      ibge: 3111804,
    },
    {
      value: "Candeias",
      label: "Candeias",
      ibge: 3112000,
    },
    {
      value: "Cantagalo",
      label: "Cantagalo",
      ibge: 3112059,
    },
    {
      value: "Caparaó",
      label: "Caparaó",
      ibge: 3112109,
    },
    {
      value: "Capela Nova",
      label: "Capela Nova",
      ibge: 3112208,
    },
    {
      value: "Capelinha",
      label: "Capelinha",
      ibge: 3112307,
    },
    {
      value: "Capetinga",
      label: "Capetinga",
      ibge: 3112406,
    },
    {
      value: "Capim Branco",
      label: "Capim Branco",
      ibge: 3112505,
    },
    {
      value: "Capinópolis",
      label: "Capinópolis",
      ibge: 3112604,
    },
    {
      value: "Capitão Andrade",
      label: "Capitão Andrade",
      ibge: 3112653,
    },
    {
      value: "Capitão Enéas",
      label: "Capitão Enéas",
      ibge: 3112703,
    },
    {
      value: "Capitólio",
      label: "Capitólio",
      ibge: 3112802,
    },
    {
      value: "Caputira",
      label: "Caputira",
      ibge: 3112901,
    },
    {
      value: "Caraí",
      label: "Caraí",
      ibge: 3113008,
    },
    {
      value: "Caranaíba",
      label: "Caranaíba",
      ibge: 3113107,
    },
    {
      value: "Carandaí",
      label: "Carandaí",
      ibge: 3113206,
    },
    {
      value: "Carangola",
      label: "Carangola",
      ibge: 3113305,
    },
    {
      value: "Caratinga",
      label: "Caratinga",
      ibge: 3113404,
    },
    {
      value: "Carbonita",
      label: "Carbonita",
      ibge: 3113503,
    },
    {
      value: "Careaçu",
      label: "Careaçu",
      ibge: 3113602,
    },
    {
      value: "Carlos Chagas",
      label: "Carlos Chagas",
      ibge: 3113701,
    },
    {
      value: "Carmésia",
      label: "Carmésia",
      ibge: 3113800,
    },
    {
      value: "Carmo da Cachoeira",
      label: "Carmo da Cachoeira",
      ibge: 3113909,
    },
    {
      value: "Carmo da Mata",
      label: "Carmo da Mata",
      ibge: 3114006,
    },
    {
      value: "Carmo de Minas",
      label: "Carmo de Minas",
      ibge: 3114105,
    },
    {
      value: "Carmo do Cajuru",
      label: "Carmo do Cajuru",
      ibge: 3114204,
    },
    {
      value: "Carmo do Paranaíba",
      label: "Carmo do Paranaíba",
      ibge: 3114303,
    },
    {
      value: "Carmo do Rio Claro",
      label: "Carmo do Rio Claro",
      ibge: 3114402,
    },
    {
      value: "Carmópolis de Minas",
      label: "Carmópolis de Minas",
      ibge: 3114501,
    },
    {
      value: "Carneirinho",
      label: "Carneirinho",
      ibge: 3114550,
    },
    {
      value: "Carrancas",
      label: "Carrancas",
      ibge: 3114600,
    },
    {
      value: "Carvalhópolis",
      label: "Carvalhópolis",
      ibge: 3114709,
    },
    {
      value: "Carvalhos",
      label: "Carvalhos",
      ibge: 3114808,
    },
    {
      value: "Casa Grande",
      label: "Casa Grande",
      ibge: 3114907,
    },
    {
      value: "Cascalho Rico",
      label: "Cascalho Rico",
      ibge: 3115003,
    },
    {
      value: "Cássia",
      label: "Cássia",
      ibge: 3115102,
    },
    {
      value: "Cataguases",
      label: "Cataguases",
      ibge: 3115300,
    },
    {
      value: "Catas Altas",
      label: "Catas Altas",
      ibge: 3115359,
    },
    {
      value: "Catas Altas da Noruega",
      label: "Catas Altas da Noruega",
      ibge: 3115409,
    },
    {
      value: "Catuji",
      label: "Catuji",
      ibge: 3115458,
    },
    {
      value: "Catuti",
      label: "Catuti",
      ibge: 3115474,
    },
    {
      value: "Caxambu",
      label: "Caxambu",
      ibge: 3115508,
    },
    {
      value: "Cedro do Abaeté",
      label: "Cedro do Abaeté",
      ibge: 3115607,
    },
    {
      value: "Central de Minas",
      label: "Central de Minas",
      ibge: 3115706,
    },
    {
      value: "Centralina",
      label: "Centralina",
      ibge: 3115805,
    },
    {
      value: "Chácara",
      label: "Chácara",
      ibge: 3115904,
    },
    {
      value: "Chalé",
      label: "Chalé",
      ibge: 3116001,
    },
    {
      value: "Chapada do Norte",
      label: "Chapada do Norte",
      ibge: 3116100,
    },
    {
      value: "Chapada Gaúcha",
      label: "Chapada Gaúcha",
      ibge: 3116159,
    },
    {
      value: "Chiador",
      label: "Chiador",
      ibge: 3116209,
    },
    {
      value: "Cipotânea",
      label: "Cipotânea",
      ibge: 3116308,
    },
    {
      value: "Claraval",
      label: "Claraval",
      ibge: 3116407,
    },
    {
      value: "Claro dos Poções",
      label: "Claro dos Poções",
      ibge: 3116506,
    },
    {
      value: "Cláudio",
      label: "Cláudio",
      ibge: 3116605,
    },
    {
      value: "Coimbra",
      label: "Coimbra",
      ibge: 3116704,
    },
    {
      value: "Coluna",
      label: "Coluna",
      ibge: 3116803,
    },
    {
      value: "Comendador Gomes",
      label: "Comendador Gomes",
      ibge: 3116902,
    },
    {
      value: "Comercinho",
      label: "Comercinho",
      ibge: 3117009,
    },
    {
      value: "Conceição da Aparecida",
      label: "Conceição da Aparecida",
      ibge: 3117108,
    },
    {
      value: "Conceição da Barra de Minas",
      label: "Conceição da Barra de Minas",
      ibge: 3115201,
    },
    {
      value: "Conceição das Alagoas",
      label: "Conceição das Alagoas",
      ibge: 3117306,
    },
    {
      value: "Conceição das Pedras",
      label: "Conceição das Pedras",
      ibge: 3117207,
    },
    {
      value: "Conceição de Ipanema",
      label: "Conceição de Ipanema",
      ibge: 3117405,
    },
    {
      value: "Conceição do Mato Dentro",
      label: "Conceição do Mato Dentro",
      ibge: 3117504,
    },
    {
      value: "Conceição do Pará",
      label: "Conceição do Pará",
      ibge: 3117603,
    },
    {
      value: "Conceição do Rio Verde",
      label: "Conceição do Rio Verde",
      ibge: 3117702,
    },
    {
      value: "Conceição dos Ouros",
      label: "Conceição dos Ouros",
      ibge: 3117801,
    },
    {
      value: "Cônego Marinho",
      label: "Cônego Marinho",
      ibge: 3117836,
    },
    {
      value: "Confins",
      label: "Confins",
      ibge: 3117876,
    },
    {
      value: "Congonhal",
      label: "Congonhal",
      ibge: 3117900,
    },
    {
      value: "Congonhas",
      label: "Congonhas",
      ibge: 3118007,
    },
    {
      value: "Congonhas do Norte",
      label: "Congonhas do Norte",
      ibge: 3118106,
    },
    {
      value: "Conquista",
      label: "Conquista",
      ibge: 3118205,
    },
    {
      value: "Conselheiro Lafaiete",
      label: "Conselheiro Lafaiete",
      ibge: 3118304,
    },
    {
      value: "Conselheiro Pena",
      label: "Conselheiro Pena",
      ibge: 3118403,
    },
    {
      value: "Consolação",
      label: "Consolação",
      ibge: 3118502,
    },
    {
      value: "Contagem",
      label: "Contagem",
      ibge: 3118601,
    },
    {
      value: "Coqueiral",
      label: "Coqueiral",
      ibge: 3118700,
    },
    {
      value: "Coração de Jesus",
      label: "Coração de Jesus",
      ibge: 3118809,
    },
    {
      value: "Cordisburgo",
      label: "Cordisburgo",
      ibge: 3118908,
    },
    {
      value: "Cordislândia",
      label: "Cordislândia",
      ibge: 3119005,
    },
    {
      value: "Corinto",
      label: "Corinto",
      ibge: 3119104,
    },
    {
      value: "Coroaci",
      label: "Coroaci",
      ibge: 3119203,
    },
    {
      value: "Coromandel",
      label: "Coromandel",
      ibge: 3119302,
    },
    {
      value: "Coronel Fabriciano",
      label: "Coronel Fabriciano",
      ibge: 3119401,
    },
    {
      value: "Coronel Murta",
      label: "Coronel Murta",
      ibge: 3119500,
    },
    {
      value: "Coronel Pacheco",
      label: "Coronel Pacheco",
      ibge: 3119609,
    },
    {
      value: "Coronel Xavier Chaves",
      label: "Coronel Xavier Chaves",
      ibge: 3119708,
    },
    {
      value: "Córrego Danta",
      label: "Córrego Danta",
      ibge: 3119807,
    },
    {
      value: "Córrego do Bom Jesus",
      label: "Córrego do Bom Jesus",
      ibge: 3119906,
    },
    {
      value: "Córrego Fundo",
      label: "Córrego Fundo",
      ibge: 3119955,
    },
    {
      value: "Córrego Novo",
      label: "Córrego Novo",
      ibge: 3120003,
    },
    {
      value: "Couto de Magalhães de Minas",
      label: "Couto de Magalhães de Minas",
      ibge: 3120102,
    },
    {
      value: "Crisólita",
      label: "Crisólita",
      ibge: 3120151,
    },
    {
      value: "Cristais",
      label: "Cristais",
      ibge: 3120201,
    },
    {
      value: "Cristália",
      label: "Cristália",
      ibge: 3120300,
    },
    {
      value: "Cristiano Otoni",
      label: "Cristiano Otoni",
      ibge: 3120409,
    },
    {
      value: "Cristina",
      label: "Cristina",
      ibge: 3120508,
    },
    {
      value: "Crucilândia",
      label: "Crucilândia",
      ibge: 3120607,
    },
    {
      value: "Cruzeiro da Fortaleza",
      label: "Cruzeiro da Fortaleza",
      ibge: 3120706,
    },
    {
      value: "Cruzília",
      label: "Cruzília",
      ibge: 3120805,
    },
    {
      value: "Cuparaque",
      label: "Cuparaque",
      ibge: 3120839,
    },
    {
      value: "Curral de Dentro",
      label: "Curral de Dentro",
      ibge: 3120870,
    },
    {
      value: "Curvelo",
      label: "Curvelo",
      ibge: 3120904,
    },
    {
      value: "Datas",
      label: "Datas",
      ibge: 3121001,
    },
    {
      value: "Delfim Moreira",
      label: "Delfim Moreira",
      ibge: 3121100,
    },
    {
      value: "Delfinópolis",
      label: "Delfinópolis",
      ibge: 3121209,
    },
    {
      value: "Delta",
      label: "Delta",
      ibge: 3121258,
    },
    {
      value: "Descoberto",
      label: "Descoberto",
      ibge: 3121308,
    },
    {
      value: "Desterro de Entre Rios",
      label: "Desterro de Entre Rios",
      ibge: 3121407,
    },
    {
      value: "Desterro do Melo",
      label: "Desterro do Melo",
      ibge: 3121506,
    },
    {
      value: "Diamantina",
      label: "Diamantina",
      ibge: 3121605,
    },
    {
      value: "Diogo de Vasconcelos",
      label: "Diogo de Vasconcelos",
      ibge: 3121704,
    },
    {
      value: "Dionísio",
      label: "Dionísio",
      ibge: 3121803,
    },
    {
      value: "Divinésia",
      label: "Divinésia",
      ibge: 3121902,
    },
    {
      value: "Divino",
      label: "Divino",
      ibge: 3122009,
    },
    {
      value: "Divino das Laranjeiras",
      label: "Divino das Laranjeiras",
      ibge: 3122108,
    },
    {
      value: "Divinolândia de Minas",
      label: "Divinolândia de Minas",
      ibge: 3122207,
    },
    {
      value: "Divinópolis",
      label: "Divinópolis",
      ibge: 3122306,
    },
    {
      value: "Divisa Alegre",
      label: "Divisa Alegre",
      ibge: 3122355,
    },
    {
      value: "Divisa Nova",
      label: "Divisa Nova",
      ibge: 3122405,
    },
    {
      value: "Divisópolis",
      label: "Divisópolis",
      ibge: 3122454,
    },
    {
      value: "Dom Bosco",
      label: "Dom Bosco",
      ibge: 3122470,
    },
    {
      value: "Dom Cavati",
      label: "Dom Cavati",
      ibge: 3122504,
    },
    {
      value: "Dom Joaquim",
      label: "Dom Joaquim",
      ibge: 3122603,
    },
    {
      value: "Dom Silvério",
      label: "Dom Silvério",
      ibge: 3122702,
    },
    {
      value: "Dom Viçoso",
      label: "Dom Viçoso",
      ibge: 3122801,
    },
    {
      value: "Dona Euzébia",
      label: "Dona Euzébia",
      ibge: 3122900,
    },
    {
      value: "Dores de Campos",
      label: "Dores de Campos",
      ibge: 3123007,
    },
    {
      value: "Dores de Guanhães",
      label: "Dores de Guanhães",
      ibge: 3123106,
    },
    {
      value: "Dores do Indaiá",
      label: "Dores do Indaiá",
      ibge: 3123205,
    },
    {
      value: "Dores do Turvo",
      label: "Dores do Turvo",
      ibge: 3123304,
    },
    {
      value: "Doresópolis",
      label: "Doresópolis",
      ibge: 3123403,
    },
    {
      value: "Douradoquara",
      label: "Douradoquara",
      ibge: 3123502,
    },
    {
      value: "Durandé",
      label: "Durandé",
      ibge: 3123528,
    },
    {
      value: "Elói Mendes",
      label: "Elói Mendes",
      ibge: 3123601,
    },
    {
      value: "Engenheiro Caldas",
      label: "Engenheiro Caldas",
      ibge: 3123700,
    },
    {
      value: "Engenheiro Navarro",
      label: "Engenheiro Navarro",
      ibge: 3123809,
    },
    {
      value: "Entre Folhas",
      label: "Entre Folhas",
      ibge: 3123858,
    },
    {
      value: "Entre Rios de Minas",
      label: "Entre Rios de Minas",
      ibge: 3123908,
    },
    {
      value: "Ervália",
      label: "Ervália",
      ibge: 3124005,
    },
    {
      value: "Esmeraldas",
      label: "Esmeraldas",
      ibge: 3124104,
    },
    {
      value: "Espera Feliz",
      label: "Espera Feliz",
      ibge: 3124203,
    },
    {
      value: "Espinosa",
      label: "Espinosa",
      ibge: 3124302,
    },
    {
      value: "Espírito Santo do Dourado",
      label: "Espírito Santo do Dourado",
      ibge: 3124401,
    },
    {
      value: "Estiva",
      label: "Estiva",
      ibge: 3124500,
    },
    {
      value: "Estrela Dalva",
      label: "Estrela Dalva",
      ibge: 3124609,
    },
    {
      value: "Estrela do Indaiá",
      label: "Estrela do Indaiá",
      ibge: 3124708,
    },
    {
      value: "Estrela do Sul",
      label: "Estrela do Sul",
      ibge: 3124807,
    },
    {
      value: "Eugenópolis",
      label: "Eugenópolis",
      ibge: 3124906,
    },
    {
      value: "Ewbank da Câmara",
      label: "Ewbank da Câmara",
      ibge: 3125002,
    },
    {
      value: "Extrema",
      label: "Extrema",
      ibge: 3125101,
    },
    {
      value: "Fama",
      label: "Fama",
      ibge: 3125200,
    },
    {
      value: "Faria Lemos",
      label: "Faria Lemos",
      ibge: 3125309,
    },
    {
      value: "Felício dos Santos",
      label: "Felício dos Santos",
      ibge: 3125408,
    },
    {
      value: "Felisburgo",
      label: "Felisburgo",
      ibge: 3125606,
    },
    {
      value: "Felixlândia",
      label: "Felixlândia",
      ibge: 3125705,
    },
    {
      value: "Fernandes Tourinho",
      label: "Fernandes Tourinho",
      ibge: 3125804,
    },
    {
      value: "Ferros",
      label: "Ferros",
      ibge: 3125903,
    },
    {
      value: "Fervedouro",
      label: "Fervedouro",
      ibge: 3125952,
    },
    {
      value: "Florestal",
      label: "Florestal",
      ibge: 3126000,
    },
    {
      value: "Formiga",
      label: "Formiga",
      ibge: 3126109,
    },
    {
      value: "Formoso",
      label: "Formoso",
      ibge: 3126208,
    },
    {
      value: "Fortaleza de Minas",
      label: "Fortaleza de Minas",
      ibge: 3126307,
    },
    {
      value: "Fortuna de Minas",
      label: "Fortuna de Minas",
      ibge: 3126406,
    },
    {
      value: "Francisco Badaró",
      label: "Francisco Badaró",
      ibge: 3126505,
    },
    {
      value: "Francisco Dumont",
      label: "Francisco Dumont",
      ibge: 3126604,
    },
    {
      value: "Francisco Sá",
      label: "Francisco Sá",
      ibge: 3126703,
    },
    {
      value: "Franciscópolis",
      label: "Franciscópolis",
      ibge: 3126752,
    },
    {
      value: "Frei Gaspar",
      label: "Frei Gaspar",
      ibge: 3126802,
    },
    {
      value: "Frei Inocêncio",
      label: "Frei Inocêncio",
      ibge: 3126901,
    },
    {
      value: "Frei Lagonegro",
      label: "Frei Lagonegro",
      ibge: 3126950,
    },
    {
      value: "Fronteira",
      label: "Fronteira",
      ibge: 3127008,
    },
    {
      value: "Fronteira dos Vales",
      label: "Fronteira dos Vales",
      ibge: 3127057,
    },
    {
      value: "Fruta de Leite",
      label: "Fruta de Leite",
      ibge: 3127073,
    },
    {
      value: "Frutal",
      label: "Frutal",
      ibge: 3127107,
    },
    {
      value: "Funilândia",
      label: "Funilândia",
      ibge: 3127206,
    },
    {
      value: "Galiléia",
      label: "Galiléia",
      ibge: 3127305,
    },
    {
      value: "Gameleiras",
      label: "Gameleiras",
      ibge: 3127339,
    },
    {
      value: "Glaucilândia",
      label: "Glaucilândia",
      ibge: 3127354,
    },
    {
      value: "Goiabeira",
      label: "Goiabeira",
      ibge: 3127370,
    },
    {
      value: "Goianá",
      label: "Goianá",
      ibge: 3127388,
    },
    {
      value: "Gonçalves",
      label: "Gonçalves",
      ibge: 3127404,
    },
    {
      value: "Gonzaga",
      label: "Gonzaga",
      ibge: 3127503,
    },
    {
      value: "Gouveia",
      label: "Gouveia",
      ibge: 3127602,
    },
    {
      value: "Governador Valadares",
      label: "Governador Valadares",
      ibge: 3127701,
    },
    {
      value: "Grão Mogol",
      label: "Grão Mogol",
      ibge: 3127800,
    },
    {
      value: "Grupiara",
      label: "Grupiara",
      ibge: 3127909,
    },
    {
      value: "Guanhães",
      label: "Guanhães",
      ibge: 3128006,
    },
    {
      value: "Guapé",
      label: "Guapé",
      ibge: 3128105,
    },
    {
      value: "Guaraciaba",
      label: "Guaraciaba",
      ibge: 3128204,
    },
    {
      value: "Guaraciama",
      label: "Guaraciama",
      ibge: 3128253,
    },
    {
      value: "Guaranésia",
      label: "Guaranésia",
      ibge: 3128303,
    },
    {
      value: "Guarani",
      label: "Guarani",
      ibge: 3128402,
    },
    {
      value: "Guarará",
      label: "Guarará",
      ibge: 3128501,
    },
    {
      value: "Guarda-Mor",
      label: "Guarda-Mor",
      ibge: 3128600,
    },
    {
      value: "Guaxupé",
      label: "Guaxupé",
      ibge: 3128709,
    },
    {
      value: "Guidoval",
      label: "Guidoval",
      ibge: 3128808,
    },
    {
      value: "Guimarânia",
      label: "Guimarânia",
      ibge: 3128907,
    },
    {
      value: "Guiricema",
      label: "Guiricema",
      ibge: 3129004,
    },
    {
      value: "Gurinhatã",
      label: "Gurinhatã",
      ibge: 3129103,
    },
    {
      value: "Heliodora",
      label: "Heliodora",
      ibge: 3129202,
    },
    {
      value: "Iapu",
      label: "Iapu",
      ibge: 3129301,
    },
    {
      value: "Ibertioga",
      label: "Ibertioga",
      ibge: 3129400,
    },
    {
      value: "Ibiá",
      label: "Ibiá",
      ibge: 3129509,
    },
    {
      value: "Ibiaí",
      label: "Ibiaí",
      ibge: 3129608,
    },
    {
      value: "Ibiracatu",
      label: "Ibiracatu",
      ibge: 3129657,
    },
    {
      value: "Ibiraci",
      label: "Ibiraci",
      ibge: 3129707,
    },
    {
      value: "Ibirité",
      label: "Ibirité",
      ibge: 3129806,
    },
    {
      value: "Ibitiúra de Minas",
      label: "Ibitiúra de Minas",
      ibge: 3129905,
    },
    {
      value: "Ibituruna",
      label: "Ibituruna",
      ibge: 3130002,
    },
    {
      value: "Icaraí de Minas",
      label: "Icaraí de Minas",
      ibge: 3130051,
    },
    {
      value: "Igarapé",
      label: "Igarapé",
      ibge: 3130101,
    },
    {
      value: "Igaratinga",
      label: "Igaratinga",
      ibge: 3130200,
    },
    {
      value: "Iguatama",
      label: "Iguatama",
      ibge: 3130309,
    },
    {
      value: "Ijaci",
      label: "Ijaci",
      ibge: 3130408,
    },
    {
      value: "Ilicínea",
      label: "Ilicínea",
      ibge: 3130507,
    },
    {
      value: "Imbé de Minas",
      label: "Imbé de Minas",
      ibge: 3130556,
    },
    {
      value: "Inconfidentes",
      label: "Inconfidentes",
      ibge: 3130606,
    },
    {
      value: "Indaiabira",
      label: "Indaiabira",
      ibge: 3130655,
    },
    {
      value: "Indianópolis",
      label: "Indianópolis",
      ibge: 3130705,
    },
    {
      value: "Ingaí",
      label: "Ingaí",
      ibge: 3130804,
    },
    {
      value: "Inhapim",
      label: "Inhapim",
      ibge: 3130903,
    },
    {
      value: "Inhaúma",
      label: "Inhaúma",
      ibge: 3131000,
    },
    {
      value: "Inimutaba",
      label: "Inimutaba",
      ibge: 3131109,
    },
    {
      value: "Ipaba",
      label: "Ipaba",
      ibge: 3131158,
    },
    {
      value: "Ipanema",
      label: "Ipanema",
      ibge: 3131208,
    },
    {
      value: "Ipatinga",
      label: "Ipatinga",
      ibge: 3131307,
    },
    {
      value: "Ipiaçu",
      label: "Ipiaçu",
      ibge: 3131406,
    },
    {
      value: "Ipuiúna",
      label: "Ipuiúna",
      ibge: 3131505,
    },
    {
      value: "Iraí de Minas",
      label: "Iraí de Minas",
      ibge: 3131604,
    },
    {
      value: "Itabira",
      label: "Itabira",
      ibge: 3131703,
    },
    {
      value: "Itabirinha de Mantena",
      label: "Itabirinha de Mantena",
    },
    {
      value: "Itabirito",
      label: "Itabirito",
      ibge: 3131901,
    },
    {
      value: "Itacambira",
      label: "Itacambira",
      ibge: 3132008,
    },
    {
      value: "Itacarambi",
      label: "Itacarambi",
      ibge: 3132107,
    },
    {
      value: "Itaguara",
      label: "Itaguara",
      ibge: 3132206,
    },
    {
      value: "Itaipé",
      label: "Itaipé",
      ibge: 3132305,
    },
    {
      value: "Itajubá",
      label: "Itajubá",
      ibge: 3132404,
    },
    {
      value: "Itamarandiba",
      label: "Itamarandiba",
      ibge: 3132503,
    },
    {
      value: "Itamarati de Minas",
      label: "Itamarati de Minas",
      ibge: 3132602,
    },
    {
      value: "Itambacuri",
      label: "Itambacuri",
      ibge: 3132701,
    },
    {
      value: "Itambé do Mato Dentro",
      label: "Itambé do Mato Dentro",
      ibge: 3132800,
    },
    {
      value: "Itamogi",
      label: "Itamogi",
      ibge: 3132909,
    },
    {
      value: "Itamonte",
      label: "Itamonte",
      ibge: 3133006,
    },
    {
      value: "Itanhandu",
      label: "Itanhandu",
      ibge: 3133105,
    },
    {
      value: "Itanhomi",
      label: "Itanhomi",
      ibge: 3133204,
    },
    {
      value: "Itaobim",
      label: "Itaobim",
      ibge: 3133303,
    },
    {
      value: "Itapagipe",
      label: "Itapagipe",
      ibge: 3133402,
    },
    {
      value: "Itapecerica",
      label: "Itapecerica",
      ibge: 3133501,
    },
    {
      value: "Itapeva",
      label: "Itapeva",
      ibge: 3133600,
    },
    {
      value: "Itatiaiuçu",
      label: "Itatiaiuçu",
      ibge: 3133709,
    },
    {
      value: "Itaú de Minas",
      label: "Itaú de Minas",
      ibge: 3133758,
    },
    {
      value: "Itaúna",
      label: "Itaúna",
      ibge: 3133808,
    },
    {
      value: "Itaverava",
      label: "Itaverava",
      ibge: 3133907,
    },
    {
      value: "Itinga",
      label: "Itinga",
      ibge: 3134004,
    },
    {
      value: "Itueta",
      label: "Itueta",
      ibge: 3134103,
    },
    {
      value: "Ituiutaba",
      label: "Ituiutaba",
      ibge: 3134202,
    },
    {
      value: "Itumirim",
      label: "Itumirim",
      ibge: 3134301,
    },
    {
      value: "Iturama",
      label: "Iturama",
      ibge: 3134400,
    },
    {
      value: "Itutinga",
      label: "Itutinga",
      ibge: 3134509,
    },
    {
      value: "Jaboticatubas",
      label: "Jaboticatubas",
      ibge: 3134608,
    },
    {
      value: "Jacinto",
      label: "Jacinto",
      ibge: 3134707,
    },
    {
      value: "Jacuí",
      label: "Jacuí",
      ibge: 3134806,
    },
    {
      value: "Jacutinga",
      label: "Jacutinga",
      ibge: 3134905,
    },
    {
      value: "Jaguaraçu",
      label: "Jaguaraçu",
      ibge: 3135001,
    },
    {
      value: "Jaíba",
      label: "Jaíba",
      ibge: 3135050,
    },
    {
      value: "Jampruca",
      label: "Jampruca",
      ibge: 3135076,
    },
    {
      value: "Janaúba",
      label: "Janaúba",
      ibge: 3135100,
    },
    {
      value: "Januária",
      label: "Januária",
      ibge: 3135209,
    },
    {
      value: "Japaraíba",
      label: "Japaraíba",
      ibge: 3135308,
    },
    {
      value: "Japonvar",
      label: "Japonvar",
      ibge: 3135357,
    },
    {
      value: "Jeceaba",
      label: "Jeceaba",
      ibge: 3135407,
    },
    {
      value: "Jenipapo de Minas",
      label: "Jenipapo de Minas",
      ibge: 3135456,
    },
    {
      value: "Jequeri",
      label: "Jequeri",
      ibge: 3135506,
    },
    {
      value: "Jequitaí",
      label: "Jequitaí",
      ibge: 3135605,
    },
    {
      value: "Jequitibá",
      label: "Jequitibá",
      ibge: 3135704,
    },
    {
      value: "Jequitinhonha",
      label: "Jequitinhonha",
      ibge: 3135803,
    },
    {
      value: "Jesuânia",
      label: "Jesuânia",
      ibge: 3135902,
    },
    {
      value: "Joaíma",
      label: "Joaíma",
      ibge: 3136009,
    },
    {
      value: "Joanésia",
      label: "Joanésia",
      ibge: 3136108,
    },
    {
      value: "João Monlevade",
      label: "João Monlevade",
      ibge: 3136207,
    },
    {
      value: "João Pinheiro",
      label: "João Pinheiro",
      ibge: 3136306,
    },
    {
      value: "Joaquim Felício",
      label: "Joaquim Felício",
      ibge: 3136405,
    },
    {
      value: "Jordânia",
      label: "Jordânia",
      ibge: 3136504,
    },
    {
      value: "José Gonçalves de Minas",
      label: "José Gonçalves de Minas",
      ibge: 3136520,
    },
    {
      value: "José Raydan",
      label: "José Raydan",
      ibge: 3136553,
    },
    {
      value: "Josenópolis",
      label: "Josenópolis",
      ibge: 3136579,
    },
    {
      value: "Juatuba",
      label: "Juatuba",
      ibge: 3136652,
    },
    {
      value: "Juiz de Fora",
      label: "Juiz de Fora",
      ibge: 3136702,
    },
    {
      value: "Juramento",
      label: "Juramento",
      ibge: 3136801,
    },
    {
      value: "Juruaia",
      label: "Juruaia",
      ibge: 3136900,
    },
    {
      value: "Juvenília",
      label: "Juvenília",
      ibge: 3136959,
    },
    {
      value: "Ladainha",
      label: "Ladainha",
      ibge: 3137007,
    },
    {
      value: "Lagamar",
      label: "Lagamar",
      ibge: 3137106,
    },
    {
      value: "Lagoa da Prata",
      label: "Lagoa da Prata",
      ibge: 3137205,
    },
    {
      value: "Lagoa dos Patos",
      label: "Lagoa dos Patos",
      ibge: 3137304,
    },
    {
      value: "Lagoa Dourada",
      label: "Lagoa Dourada",
      ibge: 3137403,
    },
    {
      value: "Lagoa Formosa",
      label: "Lagoa Formosa",
      ibge: 3137502,
    },
    {
      value: "Lagoa Grande",
      label: "Lagoa Grande",
      ibge: 3137536,
    },
    {
      value: "Lagoa Santa",
      label: "Lagoa Santa",
      ibge: 3137601,
    },
    {
      value: "Lajinha",
      label: "Lajinha",
      ibge: 3137700,
    },
    {
      value: "Lambari",
      label: "Lambari",
      ibge: 3137809,
    },
    {
      value: "Lamim",
      label: "Lamim",
      ibge: 3137908,
    },
    {
      value: "Laranjal",
      label: "Laranjal",
      ibge: 3138005,
    },
    {
      value: "Lassance",
      label: "Lassance",
      ibge: 3138104,
    },
    {
      value: "Lavras",
      label: "Lavras",
      ibge: 3138203,
    },
    {
      value: "Leandro Ferreira",
      label: "Leandro Ferreira",
      ibge: 3138302,
    },
    {
      value: "Leme do Prado",
      label: "Leme do Prado",
      ibge: 3138351,
    },
    {
      value: "Leopoldina",
      label: "Leopoldina",
      ibge: 3138401,
    },
    {
      value: "Liberdade",
      label: "Liberdade",
      ibge: 3138500,
    },
    {
      value: "Lima Duarte",
      label: "Lima Duarte",
      ibge: 3138609,
    },
    {
      value: "Limeira do Oeste",
      label: "Limeira do Oeste",
      ibge: 3138625,
    },
    {
      value: "Lontra",
      label: "Lontra",
      ibge: 3138658,
    },
    {
      value: "Luisburgo",
      label: "Luisburgo",
      ibge: 3138674,
    },
    {
      value: "Luislândia",
      label: "Luislândia",
      ibge: 3138682,
    },
    {
      value: "Luminárias",
      label: "Luminárias",
      ibge: 3138708,
    },
    {
      value: "Luz",
      label: "Luz",
      ibge: 3138807,
    },
    {
      value: "Machacalis",
      label: "Machacalis",
      ibge: 3138906,
    },
    {
      value: "Machado",
      label: "Machado",
      ibge: 3139003,
    },
    {
      value: "Madre de Deus de Minas",
      label: "Madre de Deus de Minas",
      ibge: 3139102,
    },
    {
      value: "Malacacheta",
      label: "Malacacheta",
      ibge: 3139201,
    },
    {
      value: "Mamonas",
      label: "Mamonas",
      ibge: 3139250,
    },
    {
      value: "Manga",
      label: "Manga",
      ibge: 3139300,
    },
    {
      value: "Manhuaçu",
      label: "Manhuaçu",
      ibge: 3139409,
    },
    {
      value: "Manhumirim",
      label: "Manhumirim",
      ibge: 3139508,
    },
    {
      value: "Mantena",
      label: "Mantena",
      ibge: 3139607,
    },
    {
      value: "Mar de Espanha",
      label: "Mar de Espanha",
      ibge: 3139805,
    },
    {
      value: "Maravilhas",
      label: "Maravilhas",
      ibge: 3139706,
    },
    {
      value: "Maria da Fé",
      label: "Maria da Fé",
      ibge: 3139904,
    },
    {
      value: "Mariana",
      label: "Mariana",
      ibge: 3140001,
    },
    {
      value: "Marilac",
      label: "Marilac",
      ibge: 3140100,
    },
    {
      value: "Mário Campos",
      label: "Mário Campos",
      ibge: 3140159,
    },
    {
      value: "Maripá de Minas",
      label: "Maripá de Minas",
      ibge: 3140209,
    },
    {
      value: "Marliéria",
      label: "Marliéria",
      ibge: 3140308,
    },
    {
      value: "Marmelópolis",
      label: "Marmelópolis",
      ibge: 3140407,
    },
    {
      value: "Martinho Campos",
      label: "Martinho Campos",
      ibge: 3140506,
    },
    {
      value: "Martins Soares",
      label: "Martins Soares",
      ibge: 3140530,
    },
    {
      value: "Mata Verde",
      label: "Mata Verde",
      ibge: 3140555,
    },
    {
      value: "Materlândia",
      label: "Materlândia",
      ibge: 3140605,
    },
    {
      value: "Mateus Leme",
      label: "Mateus Leme",
      ibge: 3140704,
    },
    {
      value: "Mathias Lobato",
      label: "Mathias Lobato",
      ibge: 3171501,
    },
    {
      value: "Matias Barbosa",
      label: "Matias Barbosa",
      ibge: 3140803,
    },
    {
      value: "Matias Cardoso",
      label: "Matias Cardoso",
      ibge: 3140852,
    },
    {
      value: "Matipó",
      label: "Matipó",
      ibge: 3140902,
    },
    {
      value: "Mato Verde",
      label: "Mato Verde",
      ibge: 3141009,
    },
    {
      value: "Matozinhos",
      label: "Matozinhos",
      ibge: 3141108,
    },
    {
      value: "Matutina",
      label: "Matutina",
      ibge: 3141207,
    },
    {
      value: "Medeiros",
      label: "Medeiros",
      ibge: 3141306,
    },
    {
      value: "Medina",
      label: "Medina",
      ibge: 3141405,
    },
    {
      value: "Mendes Pimentel",
      label: "Mendes Pimentel",
      ibge: 3141504,
    },
    {
      value: "Mercês",
      label: "Mercês",
      ibge: 3141603,
    },
    {
      value: "Mesquita",
      label: "Mesquita",
      ibge: 3141702,
    },
    {
      value: "Minas Novas",
      label: "Minas Novas",
      ibge: 3141801,
    },
    {
      value: "Minduri",
      label: "Minduri",
      ibge: 3141900,
    },
    {
      value: "Mirabela",
      label: "Mirabela",
      ibge: 3142007,
    },
    {
      value: "Miradouro",
      label: "Miradouro",
      ibge: 3142106,
    },
    {
      value: "Miraí",
      label: "Miraí",
      ibge: 3142205,
    },
    {
      value: "Miravânia",
      label: "Miravânia",
      ibge: 3142254,
    },
    {
      value: "Moeda",
      label: "Moeda",
      ibge: 3142304,
    },
    {
      value: "Moema",
      label: "Moema",
      ibge: 3142403,
    },
    {
      value: "Monjolos",
      label: "Monjolos",
      ibge: 3142502,
    },
    {
      value: "Monsenhor Paulo",
      label: "Monsenhor Paulo",
      ibge: 3142601,
    },
    {
      value: "Montalvânia",
      label: "Montalvânia",
      ibge: 3142700,
    },
    {
      value: "Monte Alegre de Minas",
      label: "Monte Alegre de Minas",
      ibge: 3142809,
    },
    {
      value: "Monte Azul",
      label: "Monte Azul",
      ibge: 3142908,
    },
    {
      value: "Monte Belo",
      label: "Monte Belo",
      ibge: 3143005,
    },
    {
      value: "Monte Carmelo",
      label: "Monte Carmelo",
      ibge: 3143104,
    },
    {
      value: "Monte Formoso",
      label: "Monte Formoso",
      ibge: 3143153,
    },
    {
      value: "Monte Santo de Minas",
      label: "Monte Santo de Minas",
      ibge: 3143203,
    },
    {
      value: "Monte Sião",
      label: "Monte Sião",
      ibge: 3143401,
    },
    {
      value: "Montes Claros",
      label: "Montes Claros",
      ibge: 3143302,
    },
    {
      value: "Montezuma",
      label: "Montezuma",
      ibge: 3143450,
    },
    {
      value: "Morada Nova de Minas",
      label: "Morada Nova de Minas",
      ibge: 3143500,
    },
    {
      value: "Morro da Garça",
      label: "Morro da Garça",
      ibge: 3143609,
    },
    {
      value: "Morro do Pilar",
      label: "Morro do Pilar",
      ibge: 3143708,
    },
    {
      value: "Munhoz",
      label: "Munhoz",
      ibge: 3143807,
    },
    {
      value: "Muriaé",
      label: "Muriaé",
      ibge: 3143906,
    },
    {
      value: "Mutum",
      label: "Mutum",
      ibge: 3144003,
    },
    {
      value: "Muzambinho",
      label: "Muzambinho",
      ibge: 3144102,
    },
    {
      value: "Nacip Raydan",
      label: "Nacip Raydan",
      ibge: 3144201,
    },
    {
      value: "Nanuque",
      label: "Nanuque",
      ibge: 3144300,
    },
    {
      value: "Naque",
      label: "Naque",
      ibge: 3144359,
    },
    {
      value: "Natalândia",
      label: "Natalândia",
      ibge: 3144375,
    },
    {
      value: "Natércia",
      label: "Natércia",
      ibge: 3144409,
    },
    {
      value: "Nazareno",
      label: "Nazareno",
      ibge: 3144508,
    },
    {
      value: "Nepomuceno",
      label: "Nepomuceno",
      ibge: 3144607,
    },
    {
      value: "Ninheira",
      label: "Ninheira",
      ibge: 3144656,
    },
    {
      value: "Nova Belém",
      label: "Nova Belém",
      ibge: 3144672,
    },
    {
      value: "Nova Era",
      label: "Nova Era",
      ibge: 3144706,
    },
    {
      value: "Nova Lima",
      label: "Nova Lima",
      ibge: 3144805,
    },
    {
      value: "Nova Módica",
      label: "Nova Módica",
      ibge: 3144904,
    },
    {
      value: "Nova Ponte",
      label: "Nova Ponte",
      ibge: 3145000,
    },
    {
      value: "Nova Porteirinha",
      label: "Nova Porteirinha",
      ibge: 3145059,
    },
    {
      value: "Nova Resende",
      label: "Nova Resende",
      ibge: 3145109,
    },
    {
      value: "Nova Serrana",
      label: "Nova Serrana",
      ibge: 3145208,
    },
    {
      value: "Nova União",
      label: "Nova União",
      ibge: 3136603,
    },
    {
      value: "Novo Cruzeiro",
      label: "Novo Cruzeiro",
      ibge: 3145307,
    },
    {
      value: "Novo Oriente de Minas",
      label: "Novo Oriente de Minas",
      ibge: 3145356,
    },
    {
      value: "Novorizonte",
      label: "Novorizonte",
      ibge: 3145372,
    },
    {
      value: "Olaria",
      label: "Olaria",
      ibge: 3145406,
    },
    {
      value: "Olhos-d'Água",
      label: "Olhos-d'Água",
      ibge: 3145455,
    },
    {
      value: "Olímpio Noronha",
      label: "Olímpio Noronha",
      ibge: 3145505,
    },
    {
      value: "Oliveira",
      label: "Oliveira",
      ibge: 3145604,
    },
    {
      value: "Oliveira Fortes",
      label: "Oliveira Fortes",
      ibge: 3145703,
    },
    {
      value: "Onça de Pitangui",
      label: "Onça de Pitangui",
      ibge: 3145802,
    },
    {
      value: "Oratórios",
      label: "Oratórios",
      ibge: 3145851,
    },
    {
      value: "Orizânia",
      label: "Orizânia",
      ibge: 3145877,
    },
    {
      value: "Ouro Branco",
      label: "Ouro Branco",
      ibge: 3145901,
    },
    {
      value: "Ouro Fino",
      label: "Ouro Fino",
      ibge: 3146008,
    },
    {
      value: "Ouro Preto",
      label: "Ouro Preto",
      ibge: 3146107,
    },
    {
      value: "Ouro Verde de Minas",
      label: "Ouro Verde de Minas",
      ibge: 3146206,
    },
    {
      value: "Padre Carvalho",
      label: "Padre Carvalho",
      ibge: 3146255,
    },
    {
      value: "Padre Paraíso",
      label: "Padre Paraíso",
      ibge: 3146305,
    },
    {
      value: "Pai Pedro",
      label: "Pai Pedro",
      ibge: 3146552,
    },
    {
      value: "Paineiras",
      label: "Paineiras",
      ibge: 3146404,
    },
    {
      value: "Pains",
      label: "Pains",
      ibge: 3146503,
    },
    {
      value: "Paiva",
      label: "Paiva",
      ibge: 3146602,
    },
    {
      value: "Palma",
      label: "Palma",
      ibge: 3146701,
    },
    {
      value: "Palmópolis",
      label: "Palmópolis",
      ibge: 3146750,
    },
    {
      value: "Papagaios",
      label: "Papagaios",
      ibge: 3146909,
    },
    {
      value: "Pará de Minas",
      label: "Pará de Minas",
      ibge: 3147105,
    },
    {
      value: "Paracatu",
      label: "Paracatu",
      ibge: 3147006,
    },
    {
      value: "Paraguaçu",
      label: "Paraguaçu",
      ibge: 3147204,
    },
    {
      value: "Paraisópolis",
      label: "Paraisópolis",
      ibge: 3147303,
    },
    {
      value: "Paraopeba",
      label: "Paraopeba",
      ibge: 3147402,
    },
    {
      value: "Passa Quatro",
      label: "Passa Quatro",
      ibge: 3147600,
    },
    {
      value: "Passa Tempo",
      label: "Passa Tempo",
      ibge: 3147709,
    },
    {
      value: "Passa-Vinte",
      label: "Passa-Vinte",
    },
    {
      value: "Passabém",
      label: "Passabém",
      ibge: 3147501,
    },
    {
      value: "Passos",
      label: "Passos",
      ibge: 3147907,
    },
    {
      value: "Patis",
      label: "Patis",
      ibge: 3147956,
    },
    {
      value: "Patos de Minas",
      label: "Patos de Minas",
      ibge: 3148004,
    },
    {
      value: "Patrocínio",
      label: "Patrocínio",
      ibge: 3148103,
    },
    {
      value: "Patrocínio do Muriaé",
      label: "Patrocínio do Muriaé",
      ibge: 3148202,
    },
    {
      value: "Paula Cândido",
      label: "Paula Cândido",
      ibge: 3148301,
    },
    {
      value: "Paulistas",
      label: "Paulistas",
      ibge: 3148400,
    },
    {
      value: "Pavão",
      label: "Pavão",
      ibge: 3148509,
    },
    {
      value: "Peçanha",
      label: "Peçanha",
      ibge: 3148608,
    },
    {
      value: "Pedra Azul",
      label: "Pedra Azul",
      ibge: 3148707,
    },
    {
      value: "Pedra Bonita",
      label: "Pedra Bonita",
      ibge: 3148756,
    },
    {
      value: "Pedra do Anta",
      label: "Pedra do Anta",
      ibge: 3148806,
    },
    {
      value: "Pedra do Indaiá",
      label: "Pedra do Indaiá",
      ibge: 3148905,
    },
    {
      value: "Pedra Dourada",
      label: "Pedra Dourada",
      ibge: 3149002,
    },
    {
      value: "Pedralva",
      label: "Pedralva",
      ibge: 3149101,
    },
    {
      value: "Pedras de Maria da Cruz",
      label: "Pedras de Maria da Cruz",
      ibge: 3149150,
    },
    {
      value: "Pedrinópolis",
      label: "Pedrinópolis",
      ibge: 3149200,
    },
    {
      value: "Pedro Leopoldo",
      label: "Pedro Leopoldo",
      ibge: 3149309,
    },
    {
      value: "Pedro Teixeira",
      label: "Pedro Teixeira",
      ibge: 3149408,
    },
    {
      value: "Pequeri",
      label: "Pequeri",
      ibge: 3149507,
    },
    {
      value: "Pequi",
      label: "Pequi",
      ibge: 3149606,
    },
    {
      value: "Perdigão",
      label: "Perdigão",
      ibge: 3149705,
    },
    {
      value: "Perdizes",
      label: "Perdizes",
      ibge: 3149804,
    },
    {
      value: "Perdões",
      label: "Perdões",
      ibge: 3149903,
    },
    {
      value: "Periquito",
      label: "Periquito",
      ibge: 3149952,
    },
    {
      value: "Pescador",
      label: "Pescador",
      ibge: 3150000,
    },
    {
      value: "Piau",
      label: "Piau",
      ibge: 3150109,
    },
    {
      value: "Piedade de Caratinga",
      label: "Piedade de Caratinga",
      ibge: 3150158,
    },
    {
      value: "Piedade de Ponte Nova",
      label: "Piedade de Ponte Nova",
      ibge: 3150208,
    },
    {
      value: "Piedade do Rio Grande",
      label: "Piedade do Rio Grande",
      ibge: 3150307,
    },
    {
      value: "Piedade dos Gerais",
      label: "Piedade dos Gerais",
      ibge: 3150406,
    },
    {
      value: "Pimenta",
      label: "Pimenta",
      ibge: 3150505,
    },
    {
      value: "Pingo-d'Água",
      label: "Pingo-d'Água",
      ibge: 3150539,
    },
    {
      value: "Pintópolis",
      label: "Pintópolis",
      ibge: 3150570,
    },
    {
      value: "Piracema",
      label: "Piracema",
      ibge: 3150604,
    },
    {
      value: "Pirajuba",
      label: "Pirajuba",
      ibge: 3150703,
    },
    {
      value: "Piranga",
      label: "Piranga",
      ibge: 3150802,
    },
    {
      value: "Piranguçu",
      label: "Piranguçu",
      ibge: 3150901,
    },
    {
      value: "Piranguinho",
      label: "Piranguinho",
      ibge: 3151008,
    },
    {
      value: "Pirapetinga",
      label: "Pirapetinga",
      ibge: 3151107,
    },
    {
      value: "Pirapora",
      label: "Pirapora",
      ibge: 3151206,
    },
    {
      value: "Piraúba",
      label: "Piraúba",
      ibge: 3151305,
    },
    {
      value: "Pitangui",
      label: "Pitangui",
      ibge: 3151404,
    },
    {
      value: "Piumhi",
      label: "Piumhi",
      ibge: 3151503,
    },
    {
      value: "Planura",
      label: "Planura",
      ibge: 3151602,
    },
    {
      value: "Poço Fundo",
      label: "Poço Fundo",
      ibge: 3151701,
    },
    {
      value: "Poços de Caldas",
      label: "Poços de Caldas",
      ibge: 3151800,
    },
    {
      value: "Pocrane",
      label: "Pocrane",
      ibge: 3151909,
    },
    {
      value: "Pompéu",
      label: "Pompéu",
      ibge: 3152006,
    },
    {
      value: "Ponte Nova",
      label: "Ponte Nova",
      ibge: 3152105,
    },
    {
      value: "Ponto Chique",
      label: "Ponto Chique",
      ibge: 3152131,
    },
    {
      value: "Ponto dos Volantes",
      label: "Ponto dos Volantes",
      ibge: 3152170,
    },
    {
      value: "Porteirinha",
      label: "Porteirinha",
      ibge: 3152204,
    },
    {
      value: "Porto Firme",
      label: "Porto Firme",
      ibge: 3152303,
    },
    {
      value: "Poté",
      label: "Poté",
      ibge: 3152402,
    },
    {
      value: "Pouso Alegre",
      label: "Pouso Alegre",
      ibge: 3152501,
    },
    {
      value: "Pouso Alto",
      label: "Pouso Alto",
      ibge: 3152600,
    },
    {
      value: "Prados",
      label: "Prados",
      ibge: 3152709,
    },
    {
      value: "Prata",
      label: "Prata",
      ibge: 3152808,
    },
    {
      value: "Pratápolis",
      label: "Pratápolis",
      ibge: 3152907,
    },
    {
      value: "Pratinha",
      label: "Pratinha",
      ibge: 3153004,
    },
    {
      value: "Presidente Bernardes",
      label: "Presidente Bernardes",
      ibge: 3153103,
    },
    {
      value: "Presidente Juscelino",
      label: "Presidente Juscelino",
      ibge: 3153202,
    },
    {
      value: "Presidente Kubitschek",
      label: "Presidente Kubitschek",
      ibge: 3153301,
    },
    {
      value: "Presidente Olegário",
      label: "Presidente Olegário",
      ibge: 3153400,
    },
    {
      value: "Prudente de Morais",
      label: "Prudente de Morais",
      ibge: 3153608,
    },
    {
      value: "Quartel Geral",
      label: "Quartel Geral",
      ibge: 3153707,
    },
    {
      value: "Queluzito",
      label: "Queluzito",
      ibge: 3153806,
    },
    {
      value: "Raposos",
      label: "Raposos",
      ibge: 3153905,
    },
    {
      value: "Raul Soares",
      label: "Raul Soares",
      ibge: 3154002,
    },
    {
      value: "Recreio",
      label: "Recreio",
      ibge: 3154101,
    },
    {
      value: "Reduto",
      label: "Reduto",
      ibge: 3154150,
    },
    {
      value: "Resende Costa",
      label: "Resende Costa",
      ibge: 3154200,
    },
    {
      value: "Resplendor",
      label: "Resplendor",
      ibge: 3154309,
    },
    {
      value: "Ressaquinha",
      label: "Ressaquinha",
      ibge: 3154408,
    },
    {
      value: "Riachinho",
      label: "Riachinho",
      ibge: 3154457,
    },
    {
      value: "Riacho dos Machados",
      label: "Riacho dos Machados",
      ibge: 3154507,
    },
    {
      value: "Ribeirão das Neves",
      label: "Ribeirão das Neves",
      ibge: 3154606,
    },
    {
      value: "Ribeirão Vermelho",
      label: "Ribeirão Vermelho",
      ibge: 3154705,
    },
    {
      value: "Rio Acima",
      label: "Rio Acima",
      ibge: 3154804,
    },
    {
      value: "Rio Casca",
      label: "Rio Casca",
      ibge: 3154903,
    },
    {
      value: "Rio do Prado",
      label: "Rio do Prado",
      ibge: 3155108,
    },
    {
      value: "Rio Doce",
      label: "Rio Doce",
      ibge: 3155009,
    },
    {
      value: "Rio Espera",
      label: "Rio Espera",
      ibge: 3155207,
    },
    {
      value: "Rio Manso",
      label: "Rio Manso",
      ibge: 3155306,
    },
    {
      value: "Rio Novo",
      label: "Rio Novo",
      ibge: 3155405,
    },
    {
      value: "Rio Paranaíba",
      label: "Rio Paranaíba",
      ibge: 3155504,
    },
    {
      value: "Rio Pardo de Minas",
      label: "Rio Pardo de Minas",
      ibge: 3155603,
    },
    {
      value: "Rio Piracicaba",
      label: "Rio Piracicaba",
      ibge: 3155702,
    },
    {
      value: "Rio Pomba",
      label: "Rio Pomba",
      ibge: 3155801,
    },
    {
      value: "Rio Preto",
      label: "Rio Preto",
      ibge: 3155900,
    },
    {
      value: "Rio Vermelho",
      label: "Rio Vermelho",
      ibge: 3156007,
    },
    {
      value: "Ritápolis",
      label: "Ritápolis",
      ibge: 3156106,
    },
    {
      value: "Rochedo de Minas",
      label: "Rochedo de Minas",
      ibge: 3156205,
    },
    {
      value: "Rodeiro",
      label: "Rodeiro",
      ibge: 3156304,
    },
    {
      value: "Romaria",
      label: "Romaria",
      ibge: 3156403,
    },
    {
      value: "Rosário da Limeira",
      label: "Rosário da Limeira",
      ibge: 3156452,
    },
    {
      value: "Rubelita",
      label: "Rubelita",
      ibge: 3156502,
    },
    {
      value: "Rubim",
      label: "Rubim",
      ibge: 3156601,
    },
    {
      value: "Sabará",
      label: "Sabará",
      ibge: 3156700,
    },
    {
      value: "Sabinópolis",
      label: "Sabinópolis",
      ibge: 3156809,
    },
    {
      value: "Sacramento",
      label: "Sacramento",
      ibge: 3156908,
    },
    {
      value: "Salinas",
      label: "Salinas",
      ibge: 3157005,
    },
    {
      value: "Salto da Divisa",
      label: "Salto da Divisa",
      ibge: 3157104,
    },
    {
      value: "Santa Bárbara",
      label: "Santa Bárbara",
      ibge: 3157203,
    },
    {
      value: "Santa Bárbara do Leste",
      label: "Santa Bárbara do Leste",
      ibge: 3157252,
    },
    {
      value: "Santa Bárbara do Monte Verde",
      label: "Santa Bárbara do Monte Verde",
      ibge: 3157278,
    },
    {
      value: "Santa Bárbara do Tugúrio",
      label: "Santa Bárbara do Tugúrio",
      ibge: 3157302,
    },
    {
      value: "Santa Cruz de Minas",
      label: "Santa Cruz de Minas",
      ibge: 3157336,
    },
    {
      value: "Santa Cruz de Salinas",
      label: "Santa Cruz de Salinas",
      ibge: 3157377,
    },
    {
      value: "Santa Cruz do Escalvado",
      label: "Santa Cruz do Escalvado",
      ibge: 3157401,
    },
    {
      value: "Santa Efigênia de Minas",
      label: "Santa Efigênia de Minas",
      ibge: 3157500,
    },
    {
      value: "Santa Fé de Minas",
      label: "Santa Fé de Minas",
      ibge: 3157609,
    },
    {
      value: "Santa Helena de Minas",
      label: "Santa Helena de Minas",
      ibge: 3157658,
    },
    {
      value: "Santa Juliana",
      label: "Santa Juliana",
      ibge: 3157708,
    },
    {
      value: "Santa Luzia",
      label: "Santa Luzia",
      ibge: 3157807,
    },
    {
      value: "Santa Margarida",
      label: "Santa Margarida",
      ibge: 3157906,
    },
    {
      value: "Santa Maria de Itabira",
      label: "Santa Maria de Itabira",
      ibge: 3158003,
    },
    {
      value: "Santa Maria do Salto",
      label: "Santa Maria do Salto",
      ibge: 3158102,
    },
    {
      value: "Santa Maria do Suaçuí",
      label: "Santa Maria do Suaçuí",
      ibge: 3158201,
    },
    {
      value: "Santa Rita de Caldas",
      label: "Santa Rita de Caldas",
      ibge: 3159209,
    },
    {
      value: "Santa Rita de Ibitipoca",
      label: "Santa Rita de Ibitipoca",
      ibge: 3159407,
    },
    {
      value: "Santa Rita de Jacutinga",
      label: "Santa Rita de Jacutinga",
      ibge: 3159308,
    },
    {
      value: "Santa Rita de Minas",
      label: "Santa Rita de Minas",
      ibge: 3159357,
    },
    {
      value: "Santa Rita do Itueto",
      label: "Santa Rita do Itueto",
      ibge: 3159506,
    },
    {
      value: "Santa Rita do Sapucaí",
      label: "Santa Rita do Sapucaí",
      ibge: 3159605,
    },
    {
      value: "Santa Rosa da Serra",
      label: "Santa Rosa da Serra",
      ibge: 3159704,
    },
    {
      value: "Santa Vitória",
      label: "Santa Vitória",
      ibge: 3159803,
    },
    {
      value: "Santana da Vargem",
      label: "Santana da Vargem",
      ibge: 3158300,
    },
    {
      value: "Santana de Cataguases",
      label: "Santana de Cataguases",
      ibge: 3158409,
    },
    {
      value: "Santana de Pirapama",
      label: "Santana de Pirapama",
      ibge: 3158508,
    },
    {
      value: "Santana do Deserto",
      label: "Santana do Deserto",
      ibge: 3158607,
    },
    {
      value: "Santana do Garambéu",
      label: "Santana do Garambéu",
      ibge: 3158706,
    },
    {
      value: "Santana do Jacaré",
      label: "Santana do Jacaré",
      ibge: 3158805,
    },
    {
      value: "Santana do Manhuaçu",
      label: "Santana do Manhuaçu",
      ibge: 3158904,
    },
    {
      value: "Santana do Paraíso",
      label: "Santana do Paraíso",
      ibge: 3158953,
    },
    {
      value: "Santana do Riacho",
      label: "Santana do Riacho",
      ibge: 3159001,
    },
    {
      value: "Santana dos Montes",
      label: "Santana dos Montes",
      ibge: 3159100,
    },
    {
      value: "Santo Antônio do Amparo",
      label: "Santo Antônio do Amparo",
      ibge: 3159902,
    },
    {
      value: "Santo Antônio do Aventureiro",
      label: "Santo Antônio do Aventureiro",
      ibge: 3160009,
    },
    {
      value: "Santo Antônio do Grama",
      label: "Santo Antônio do Grama",
      ibge: 3160108,
    },
    {
      value: "Santo Antônio do Itambé",
      label: "Santo Antônio do Itambé",
      ibge: 3160207,
    },
    {
      value: "Santo Antônio do Jacinto",
      label: "Santo Antônio do Jacinto",
      ibge: 3160306,
    },
    {
      value: "Santo Antônio do Monte",
      label: "Santo Antônio do Monte",
      ibge: 3160405,
    },
    {
      value: "Santo Antônio do Retiro",
      label: "Santo Antônio do Retiro",
      ibge: 3160454,
    },
    {
      value: "Santo Antônio do Rio Abaixo",
      label: "Santo Antônio do Rio Abaixo",
      ibge: 3160504,
    },
    {
      value: "Santo Hipólito",
      label: "Santo Hipólito",
      ibge: 3160603,
    },
    {
      value: "Santos Dumont",
      label: "Santos Dumont",
      ibge: 3160702,
    },
    {
      value: "São Bento Abade",
      label: "São Bento Abade",
      ibge: 3160801,
    },
    {
      value: "São Brás do Suaçuí",
      label: "São Brás do Suaçuí",
      ibge: 3160900,
    },
    {
      value: "São Domingos das Dores",
      label: "São Domingos das Dores",
      ibge: 3160959,
    },
    {
      value: "São Domingos do Prata",
      label: "São Domingos do Prata",
      ibge: 3161007,
    },
    {
      value: "São Félix de Minas",
      label: "São Félix de Minas",
      ibge: 3161056,
    },
    {
      value: "São Francisco",
      label: "São Francisco",
      ibge: 3161106,
    },
    {
      value: "São Francisco de Paula",
      label: "São Francisco de Paula",
      ibge: 3161205,
    },
    {
      value: "São Francisco de Sales",
      label: "São Francisco de Sales",
      ibge: 3161304,
    },
    {
      value: "São Francisco do Glória",
      label: "São Francisco do Glória",
      ibge: 3161403,
    },
    {
      value: "São Geraldo",
      label: "São Geraldo",
      ibge: 3161502,
    },
    {
      value: "São Geraldo da Piedade",
      label: "São Geraldo da Piedade",
      ibge: 3161601,
    },
    {
      value: "São Geraldo do Baixio",
      label: "São Geraldo do Baixio",
      ibge: 3161650,
    },
    {
      value: "São Gonçalo do Abaeté",
      label: "São Gonçalo do Abaeté",
      ibge: 3161700,
    },
    {
      value: "São Gonçalo do Pará",
      label: "São Gonçalo do Pará",
      ibge: 3161809,
    },
    {
      value: "São Gonçalo do Rio Abaixo",
      label: "São Gonçalo do Rio Abaixo",
      ibge: 3161908,
    },
    {
      value: "São Gonçalo do Rio Preto",
      label: "São Gonçalo do Rio Preto",
      ibge: 3125507,
    },
    {
      value: "São Gonçalo do Sapucaí",
      label: "São Gonçalo do Sapucaí",
      ibge: 3162005,
    },
    {
      value: "São Gotardo",
      label: "São Gotardo",
      ibge: 3162104,
    },
    {
      value: "São João Batista do Glória",
      label: "São João Batista do Glória",
      ibge: 3162203,
    },
    {
      value: "São João da Lagoa",
      label: "São João da Lagoa",
      ibge: 3162252,
    },
    {
      value: "São João da Mata",
      label: "São João da Mata",
      ibge: 3162302,
    },
    {
      value: "São João da Ponte",
      label: "São João da Ponte",
      ibge: 3162401,
    },
    {
      value: "São João das Missões",
      label: "São João das Missões",
      ibge: 3162450,
    },
    {
      value: "São João del Rei",
      label: "São João del Rei",
      ibge: 3162500,
    },
    {
      value: "São João do Manhuaçu",
      label: "São João do Manhuaçu",
      ibge: 3162559,
    },
    {
      value: "São João do Manteninha",
      label: "São João do Manteninha",
      ibge: 3162575,
    },
    {
      value: "São João do Oriente",
      label: "São João do Oriente",
      ibge: 3162609,
    },
    {
      value: "São João do Pacuí",
      label: "São João do Pacuí",
      ibge: 3162658,
    },
    {
      value: "São João do Paraíso",
      label: "São João do Paraíso",
      ibge: 3162708,
    },
    {
      value: "São João Evangelista",
      label: "São João Evangelista",
      ibge: 3162807,
    },
    {
      value: "São João Nepomuceno",
      label: "São João Nepomuceno",
      ibge: 3162906,
    },
    {
      value: "São Joaquim de Bicas",
      label: "São Joaquim de Bicas",
      ibge: 3162922,
    },
    {
      value: "São José da Barra",
      label: "São José da Barra",
      ibge: 3162948,
    },
    {
      value: "São José da Lapa",
      label: "São José da Lapa",
      ibge: 3162955,
    },
    {
      value: "São José da Safira",
      label: "São José da Safira",
      ibge: 3163003,
    },
    {
      value: "São José da Varginha",
      label: "São José da Varginha",
      ibge: 3163102,
    },
    {
      value: "São José do Alegre",
      label: "São José do Alegre",
      ibge: 3163201,
    },
    {
      value: "São José do Divino",
      label: "São José do Divino",
      ibge: 3163300,
    },
    {
      value: "São José do Goiabal",
      label: "São José do Goiabal",
      ibge: 3163409,
    },
    {
      value: "São José do Jacuri",
      label: "São José do Jacuri",
      ibge: 3163508,
    },
    {
      value: "São José do Mantimento",
      label: "São José do Mantimento",
      ibge: 3163607,
    },
    {
      value: "São Lourenço",
      label: "São Lourenço",
      ibge: 3163706,
    },
    {
      value: "São Miguel do Anta",
      label: "São Miguel do Anta",
      ibge: 3163805,
    },
    {
      value: "São Pedro da União",
      label: "São Pedro da União",
      ibge: 3163904,
    },
    {
      value: "São Pedro do Suaçuí",
      label: "São Pedro do Suaçuí",
      ibge: 3164100,
    },
    {
      value: "São Pedro dos Ferros",
      label: "São Pedro dos Ferros",
      ibge: 3164001,
    },
    {
      value: "São Romão",
      label: "São Romão",
      ibge: 3164209,
    },
    {
      value: "São Roque de Minas",
      label: "São Roque de Minas",
      ibge: 3164308,
    },
    {
      value: "São Sebastião da Bela Vista",
      label: "São Sebastião da Bela Vista",
      ibge: 3164407,
    },
    {
      value: "São Sebastião da Vargem Alegre",
      label: "São Sebastião da Vargem Alegre",
      ibge: 3164431,
    },
    {
      value: "São Sebastião do Anta",
      label: "São Sebastião do Anta",
      ibge: 3164472,
    },
    {
      value: "São Sebastião do Maranhão",
      label: "São Sebastião do Maranhão",
      ibge: 3164506,
    },
    {
      value: "São Sebastião do Oeste",
      label: "São Sebastião do Oeste",
      ibge: 3164605,
    },
    {
      value: "São Sebastião do Paraíso",
      label: "São Sebastião do Paraíso",
      ibge: 3164704,
    },
    {
      value: "São Sebastião do Rio Preto",
      label: "São Sebastião do Rio Preto",
      ibge: 3164803,
    },
    {
      value: "São Sebastião do Rio Verde",
      label: "São Sebastião do Rio Verde",
      ibge: 3164902,
    },
    {
      value: "São Thomé das Letras",
      label: "São Thomé das Letras",
    },
    {
      value: "São Tiago",
      label: "São Tiago",
      ibge: 3165008,
    },
    {
      value: "São Tomás de Aquino",
      label: "São Tomás de Aquino",
      ibge: 3165107,
    },
    {
      value: "São Vicente de Minas",
      label: "São Vicente de Minas",
      ibge: 3165305,
    },
    {
      value: "Sapucaí-Mirim",
      label: "Sapucaí-Mirim",
      ibge: 3165404,
    },
    {
      value: "Sardoá",
      label: "Sardoá",
      ibge: 3165503,
    },
    {
      value: "Sarzedo",
      label: "Sarzedo",
      ibge: 3165537,
    },
    {
      value: "Sem-Peixe",
      label: "Sem-Peixe",
      ibge: 3165560,
    },
    {
      value: "Senador Amaral",
      label: "Senador Amaral",
      ibge: 3165578,
    },
    {
      value: "Senador Cortes",
      label: "Senador Cortes",
      ibge: 3165602,
    },
    {
      value: "Senador Firmino",
      label: "Senador Firmino",
      ibge: 3165701,
    },
    {
      value: "Senador José Bento",
      label: "Senador José Bento",
      ibge: 3165800,
    },
    {
      value: "Senador Modestino Gonçalves",
      label: "Senador Modestino Gonçalves",
      ibge: 3165909,
    },
    {
      value: "Senhora de Oliveira",
      label: "Senhora de Oliveira",
      ibge: 3166006,
    },
    {
      value: "Senhora do Porto",
      label: "Senhora do Porto",
      ibge: 3166105,
    },
    {
      value: "Senhora dos Remédios",
      label: "Senhora dos Remédios",
      ibge: 3166204,
    },
    {
      value: "Sericita",
      label: "Sericita",
      ibge: 3166303,
    },
    {
      value: "Seritinga",
      label: "Seritinga",
      ibge: 3166402,
    },
    {
      value: "Serra Azul de Minas",
      label: "Serra Azul de Minas",
      ibge: 3166501,
    },
    {
      value: "Serra da Saudade",
      label: "Serra da Saudade",
      ibge: 3166600,
    },
    {
      value: "Serra do Salitre",
      label: "Serra do Salitre",
      ibge: 3166808,
    },
    {
      value: "Serra dos Aimorés",
      label: "Serra dos Aimorés",
      ibge: 3166709,
    },
    {
      value: "Serrania",
      label: "Serrania",
      ibge: 3166907,
    },
    {
      value: "Serranópolis de Minas",
      label: "Serranópolis de Minas",
      ibge: 3166956,
    },
    {
      value: "Serranos",
      label: "Serranos",
      ibge: 3167004,
    },
    {
      value: "Serro",
      label: "Serro",
      ibge: 3167103,
    },
    {
      value: "Sete Lagoas",
      label: "Sete Lagoas",
      ibge: 3167202,
    },
    {
      value: "Setubinha",
      label: "Setubinha",
      ibge: 3165552,
    },
    {
      value: "Silveirânia",
      label: "Silveirânia",
      ibge: 3167301,
    },
    {
      value: "Silvianópolis",
      label: "Silvianópolis",
      ibge: 3167400,
    },
    {
      value: "Simão Pereira",
      label: "Simão Pereira",
      ibge: 3167509,
    },
    {
      value: "Simonésia",
      label: "Simonésia",
      ibge: 3167608,
    },
    {
      value: "Sobrália",
      label: "Sobrália",
      ibge: 3167707,
    },
    {
      value: "Soledade de Minas",
      label: "Soledade de Minas",
      ibge: 3167806,
    },
    {
      value: "Tabuleiro",
      label: "Tabuleiro",
      ibge: 3167905,
    },
    {
      value: "Taiobeiras",
      label: "Taiobeiras",
      ibge: 3168002,
    },
    {
      value: "Taparuba",
      label: "Taparuba",
      ibge: 3168051,
    },
    {
      value: "Tapira",
      label: "Tapira",
      ibge: 3168101,
    },
    {
      value: "Tapiraí",
      label: "Tapiraí",
      ibge: 3168200,
    },
    {
      value: "Taquaraçu de Minas",
      label: "Taquaraçu de Minas",
      ibge: 3168309,
    },
    {
      value: "Tarumirim",
      label: "Tarumirim",
      ibge: 3168408,
    },
    {
      value: "Teixeiras",
      label: "Teixeiras",
      ibge: 3168507,
    },
    {
      value: "Teófilo Otoni",
      label: "Teófilo Otoni",
      ibge: 3168606,
    },
    {
      value: "Timóteo",
      label: "Timóteo",
      ibge: 3168705,
    },
    {
      value: "Tiradentes",
      label: "Tiradentes",
      ibge: 3168804,
    },
    {
      value: "Tiros",
      label: "Tiros",
      ibge: 3168903,
    },
    {
      value: "Tocantins",
      label: "Tocantins",
      ibge: 3169000,
    },
    {
      value: "Tocos do Moji",
      label: "Tocos do Moji",
      ibge: 3169059,
    },
    {
      value: "Toledo",
      label: "Toledo",
      ibge: 3169109,
    },
    {
      value: "Tombos",
      label: "Tombos",
      ibge: 3169208,
    },
    {
      value: "Três Corações",
      label: "Três Corações",
      ibge: 3169307,
    },
    {
      value: "Três Marias",
      label: "Três Marias",
      ibge: 3169356,
    },
    {
      value: "Três Pontas",
      label: "Três Pontas",
      ibge: 3169406,
    },
    {
      value: "Tumiritinga",
      label: "Tumiritinga",
      ibge: 3169505,
    },
    {
      value: "Tupaciguara",
      label: "Tupaciguara",
      ibge: 3169604,
    },
    {
      value: "Turmalina",
      label: "Turmalina",
      ibge: 3169703,
    },
    {
      value: "Turvolândia",
      label: "Turvolândia",
      ibge: 3169802,
    },
    {
      value: "Ubá",
      label: "Ubá",
      ibge: 3169901,
    },
    {
      value: "Ubaí",
      label: "Ubaí",
      ibge: 3170008,
    },
    {
      value: "Ubaporanga",
      label: "Ubaporanga",
      ibge: 3170057,
    },
    {
      value: "Uberaba",
      label: "Uberaba",
      ibge: 3170107,
    },
    {
      value: "Uberlândia",
      label: "Uberlândia",
      ibge: 3170206,
    },
    {
      value: "Umburatiba",
      label: "Umburatiba",
      ibge: 3170305,
    },
    {
      value: "Unaí",
      label: "Unaí",
      ibge: 3170404,
    },
    {
      value: "União de Minas",
      label: "União de Minas",
      ibge: 3170438,
    },
    {
      value: "Uruana de Minas",
      label: "Uruana de Minas",
      ibge: 3170479,
    },
    {
      value: "Urucânia",
      label: "Urucânia",
      ibge: 3170503,
    },
    {
      value: "Urucuia",
      label: "Urucuia",
      ibge: 3170529,
    },
    {
      value: "Vargem Alegre",
      label: "Vargem Alegre",
      ibge: 3170578,
    },
    {
      value: "Vargem Bonita",
      label: "Vargem Bonita",
      ibge: 3170602,
    },
    {
      value: "Vargem Grande do Rio Pardo",
      label: "Vargem Grande do Rio Pardo",
      ibge: 3170651,
    },
    {
      value: "Varginha",
      label: "Varginha",
      ibge: 3170701,
    },
    {
      value: "Varjão de Minas",
      label: "Varjão de Minas",
      ibge: 3170750,
    },
    {
      value: "Várzea da Palma",
      label: "Várzea da Palma",
      ibge: 3170800,
    },
    {
      value: "Varzelândia",
      label: "Varzelândia",
      ibge: 3170909,
    },
    {
      value: "Vazante",
      label: "Vazante",
      ibge: 3171006,
    },
    {
      value: "Verdelândia",
      label: "Verdelândia",
      ibge: 3171030,
    },
    {
      value: "Veredinha",
      label: "Veredinha",
      ibge: 3171071,
    },
    {
      value: "Veríssimo",
      label: "Veríssimo",
      ibge: 3171105,
    },
    {
      value: "Vermelho Novo",
      label: "Vermelho Novo",
      ibge: 3171154,
    },
    {
      value: "Vespasiano",
      label: "Vespasiano",
      ibge: 3171204,
    },
    {
      value: "Viçosa",
      label: "Viçosa",
      ibge: 3171303,
    },
    {
      value: "Vieiras",
      label: "Vieiras",
      ibge: 3171402,
    },
    {
      value: "Virgem da Lapa",
      label: "Virgem da Lapa",
      ibge: 3171600,
    },
    {
      value: "Virgínia",
      label: "Virgínia",
      ibge: 3171709,
    },
    {
      value: "Virginópolis",
      label: "Virginópolis",
      ibge: 3171808,
    },
    {
      value: "Virgolândia",
      label: "Virgolândia",
      ibge: 3171907,
    },
    {
      value: "Visconde do Rio Branco",
      label: "Visconde do Rio Branco",
      ibge: 3172004,
    },
    {
      value: "Volta Grande",
      label: "Volta Grande",
      ibge: 3172103,
    },
    {
      value: "Wenceslau Braz",
      label: "Wenceslau Braz",
      ibge: 3172202,
    },
    {
      value: "Brazópolis",
      label: "Brazópolis",
      ibge: 3108909,
    },
    {
      value: "Itabirinha",
      label: "Itabirinha",
      ibge: 3131802,
    },
    {
      value: "Passa Vinte",
      label: "Passa Vinte",
      ibge: 3147808,
    },
    {
      value: "São Tomé das Letras",
      label: "São Tomé das Letras",
      ibge: 3165206,
    },
  ],
  MS: [
    {
      value: "Água Clara",
      label: "Água Clara",
      ibge: 5000203,
    },
    {
      value: "Alcinópolis",
      label: "Alcinópolis",
      ibge: 5000252,
    },
    {
      value: "Amambaí",
      label: "Amambaí",
    },
    {
      value: "Anastácio",
      label: "Anastácio",
      ibge: 5000708,
    },
    {
      value: "Anaurilândia",
      label: "Anaurilândia",
      ibge: 5000807,
    },
    {
      value: "Angélica",
      label: "Angélica",
      ibge: 5000856,
    },
    {
      value: "Antônio João",
      label: "Antônio João",
      ibge: 5000906,
    },
    {
      value: "Aparecida do Taboado",
      label: "Aparecida do Taboado",
      ibge: 5001003,
    },
    {
      value: "Aquidauana",
      label: "Aquidauana",
      ibge: 5001102,
    },
    {
      value: "Aral Moreira",
      label: "Aral Moreira",
      ibge: 5001243,
    },
    {
      value: "Bandeirantes",
      label: "Bandeirantes",
      ibge: 5001508,
    },
    {
      value: "Bataguassu",
      label: "Bataguassu",
      ibge: 5001904,
    },
    {
      value: "Bataiporã",
      label: "Bataiporã",
    },
    {
      value: "Bela Vista",
      label: "Bela Vista",
      ibge: 5002100,
    },
    {
      value: "Bodoquena",
      label: "Bodoquena",
      ibge: 5002159,
    },
    {
      value: "Bonito",
      label: "Bonito",
      ibge: 5002209,
    },
    {
      value: "Brasilândia",
      label: "Brasilândia",
      ibge: 5002308,
    },
    {
      value: "Caarapó",
      label: "Caarapó",
      ibge: 5002407,
    },
    {
      value: "Camapuã",
      label: "Camapuã",
      ibge: 5002605,
    },
    {
      value: "Campo Grande",
      label: "Campo Grande",
      ibge: 5002704,
    },
    {
      value: "Caracol",
      label: "Caracol",
      ibge: 5002803,
    },
    {
      value: "Cassilândia",
      label: "Cassilândia",
      ibge: 5002902,
    },
    {
      value: "Chapadão do Sul",
      label: "Chapadão do Sul",
      ibge: 5002951,
    },
    {
      value: "Corguinho",
      label: "Corguinho",
      ibge: 5003108,
    },
    {
      value: "Coronel Sapucaia",
      label: "Coronel Sapucaia",
      ibge: 5003157,
    },
    {
      value: "Corumbá",
      label: "Corumbá",
      ibge: 5003207,
    },
    {
      value: "Costa Rica",
      label: "Costa Rica",
      ibge: 5003256,
    },
    {
      value: "Coxim",
      label: "Coxim",
      ibge: 5003306,
    },
    {
      value: "Deodápolis",
      label: "Deodápolis",
      ibge: 5003454,
    },
    {
      value: "Dois Irmãos do Buriti",
      label: "Dois Irmãos do Buriti",
      ibge: 5003488,
    },
    {
      value: "Douradina",
      label: "Douradina",
      ibge: 5003504,
    },
    {
      value: "Dourados",
      label: "Dourados",
      ibge: 5003702,
    },
    {
      value: "Eldorado",
      label: "Eldorado",
      ibge: 5003751,
    },
    {
      value: "Fátima do Sul",
      label: "Fátima do Sul",
      ibge: 5003801,
    },
    {
      value: "Glória de Dourados",
      label: "Glória de Dourados",
      ibge: 5004007,
    },
    {
      value: "Guia Lopes da Laguna",
      label: "Guia Lopes da Laguna",
      ibge: 5004106,
    },
    {
      value: "Iguatemi",
      label: "Iguatemi",
      ibge: 5004304,
    },
    {
      value: "Inocência",
      label: "Inocência",
      ibge: 5004403,
    },
    {
      value: "Itaporã",
      label: "Itaporã",
      ibge: 5004502,
    },
    {
      value: "Itaquiraí",
      label: "Itaquiraí",
      ibge: 5004601,
    },
    {
      value: "Ivinhema",
      label: "Ivinhema",
      ibge: 5004700,
    },
    {
      value: "Japorã",
      label: "Japorã",
      ibge: 5004809,
    },
    {
      value: "Jaraguari",
      label: "Jaraguari",
      ibge: 5004908,
    },
    {
      value: "Jardim",
      label: "Jardim",
      ibge: 5005004,
    },
    {
      value: "Jateí",
      label: "Jateí",
      ibge: 5005103,
    },
    {
      value: "Juti",
      label: "Juti",
      ibge: 5005152,
    },
    {
      value: "Ladário",
      label: "Ladário",
      ibge: 5005202,
    },
    {
      value: "Laguna Carapã",
      label: "Laguna Carapã",
      ibge: 5005251,
    },
    {
      value: "Maracaju",
      label: "Maracaju",
      ibge: 5005400,
    },
    {
      value: "Miranda",
      label: "Miranda",
      ibge: 5005608,
    },
    {
      value: "Mundo Novo",
      label: "Mundo Novo",
      ibge: 5005681,
    },
    {
      value: "Naviraí",
      label: "Naviraí",
      ibge: 5005707,
    },
    {
      value: "Nioaque",
      label: "Nioaque",
      ibge: 5005806,
    },
    {
      value: "Nova Alvorada do Sul",
      label: "Nova Alvorada do Sul",
      ibge: 5006002,
    },
    {
      value: "Nova Andradina",
      label: "Nova Andradina",
      ibge: 5006200,
    },
    {
      value: "Novo Horizonte do Sul",
      label: "Novo Horizonte do Sul",
      ibge: 5006259,
    },
    {
      value: "Paranaíba",
      label: "Paranaíba",
      ibge: 5006309,
    },
    {
      value: "Paranhos",
      label: "Paranhos",
      ibge: 5006358,
    },
    {
      value: "Pedro Gomes",
      label: "Pedro Gomes",
      ibge: 5006408,
    },
    {
      value: "Ponta Porã",
      label: "Ponta Porã",
      ibge: 5006606,
    },
    {
      value: "Porto Murtinho",
      label: "Porto Murtinho",
      ibge: 5006903,
    },
    {
      value: "Ribas do Rio Pardo",
      label: "Ribas do Rio Pardo",
      ibge: 5007109,
    },
    {
      value: "Rio Brilhante",
      label: "Rio Brilhante",
      ibge: 5007208,
    },
    {
      value: "Rio Negro",
      label: "Rio Negro",
      ibge: 5007307,
    },
    {
      value: "Rio Verde de Mato Grosso",
      label: "Rio Verde de Mato Grosso",
      ibge: 5007406,
    },
    {
      value: "Rochedo",
      label: "Rochedo",
      ibge: 5007505,
    },
    {
      value: "Santa Rita do Pardo",
      label: "Santa Rita do Pardo",
      ibge: 5007554,
    },
    {
      value: "São Gabriel do Oeste",
      label: "São Gabriel do Oeste",
      ibge: 5007695,
    },
    {
      value: "Selvíria",
      label: "Selvíria",
      ibge: 5007802,
    },
    {
      value: "Sete Quedas",
      label: "Sete Quedas",
      ibge: 5007703,
    },
    {
      value: "Sidrolândia",
      label: "Sidrolândia",
      ibge: 5007901,
    },
    {
      value: "Sonora",
      label: "Sonora",
      ibge: 5007935,
    },
    {
      value: "Tacuru",
      label: "Tacuru",
      ibge: 5007950,
    },
    {
      value: "Taquarussu",
      label: "Taquarussu",
      ibge: 5007976,
    },
    {
      value: "Terenos",
      label: "Terenos",
      ibge: 5008008,
    },
    {
      value: "Três Lagoas",
      label: "Três Lagoas",
      ibge: 5008305,
    },
    {
      value: "Vicentina",
      label: "Vicentina",
      ibge: 5008404,
    },
    {
      value: "Amambai",
      label: "Amambai",
      ibge: 5000609,
    },
    {
      value: "Batayporã",
      label: "Batayporã",
      ibge: 5002001,
    },
    {
      value: "Figueirão",
      label: "Figueirão",
      ibge: 5003900,
    },
    {
      value: "Paraíso das Águas",
      label: "Paraíso das Águas",
      ibge: 5006275,
    },
  ],
  MT: [
    {
      value: "Acorizal",
      label: "Acorizal",
      ibge: 5100102,
    },
    {
      value: "Água Boa",
      label: "Água Boa",
      ibge: 5100201,
    },
    {
      value: "Alta Floresta",
      label: "Alta Floresta",
      ibge: 5100250,
    },
    {
      value: "Alto Araguaia",
      label: "Alto Araguaia",
      ibge: 5100300,
    },
    {
      value: "Alto Boa Vista",
      label: "Alto Boa Vista",
      ibge: 5100359,
    },
    {
      value: "Alto Garças",
      label: "Alto Garças",
      ibge: 5100409,
    },
    {
      value: "Alto Paraguai",
      label: "Alto Paraguai",
      ibge: 5100508,
    },
    {
      value: "Alto Taquari",
      label: "Alto Taquari",
      ibge: 5100607,
    },
    {
      value: "Apiacás",
      label: "Apiacás",
      ibge: 5100805,
    },
    {
      value: "Araguaiana",
      label: "Araguaiana",
      ibge: 5101001,
    },
    {
      value: "Araguainha",
      label: "Araguainha",
      ibge: 5101209,
    },
    {
      value: "Araputanga",
      label: "Araputanga",
      ibge: 5101258,
    },
    {
      value: "Arenápolis",
      label: "Arenápolis",
      ibge: 5101308,
    },
    {
      value: "Aripuanã",
      label: "Aripuanã",
      ibge: 5101407,
    },
    {
      value: "Barão de Melgaço",
      label: "Barão de Melgaço",
      ibge: 5101605,
    },
    {
      value: "Barra do Bugres",
      label: "Barra do Bugres",
      ibge: 5101704,
    },
    {
      value: "Barra do Garças",
      label: "Barra do Garças",
      ibge: 5101803,
    },
    {
      value: "Bom Jesus do Araguaia",
      label: "Bom Jesus do Araguaia",
      ibge: 5101852,
    },
    {
      value: "Brasnorte",
      label: "Brasnorte",
      ibge: 5101902,
    },
    {
      value: "Cáceres",
      label: "Cáceres",
      ibge: 5102504,
    },
    {
      value: "Campinápolis",
      label: "Campinápolis",
      ibge: 5102603,
    },
    {
      value: "Campo Novo do Parecis",
      label: "Campo Novo do Parecis",
      ibge: 5102637,
    },
    {
      value: "Campo Verde",
      label: "Campo Verde",
      ibge: 5102678,
    },
    {
      value: "Campos de Júlio",
      label: "Campos de Júlio",
      ibge: 5102686,
    },
    {
      value: "Canabrava do Norte",
      label: "Canabrava do Norte",
      ibge: 5102694,
    },
    {
      value: "Canarana",
      label: "Canarana",
      ibge: 5102702,
    },
    {
      value: "Carlinda",
      label: "Carlinda",
      ibge: 5102793,
    },
    {
      value: "Castanheira",
      label: "Castanheira",
      ibge: 5102850,
    },
    {
      value: "Chapada dos Guimarães",
      label: "Chapada dos Guimarães",
      ibge: 5103007,
    },
    {
      value: "Cláudia",
      label: "Cláudia",
      ibge: 5103056,
    },
    {
      value: "Cocalinho",
      label: "Cocalinho",
      ibge: 5103106,
    },
    {
      value: "Colíder",
      label: "Colíder",
      ibge: 5103205,
    },
    {
      value: "Colniza",
      label: "Colniza",
      ibge: 5103254,
    },
    {
      value: "Comodoro",
      label: "Comodoro",
      ibge: 5103304,
    },
    {
      value: "Confresa",
      label: "Confresa",
      ibge: 5103353,
    },
    {
      value: "Conquista d'Oeste",
      label: "Conquista d'Oeste",
      ibge: 5103361,
    },
    {
      value: "Cotriguaçu",
      label: "Cotriguaçu",
      ibge: 5103379,
    },
    {
      value: "Curvelândia",
      label: "Curvelândia",
      ibge: 5103437,
    },
    {
      value: "Cuiabá",
      label: "Cuiabá",
      ibge: 5103403,
    },
    {
      value: "Denise",
      label: "Denise",
      ibge: 5103452,
    },
    {
      value: "Diamantino",
      label: "Diamantino",
      ibge: 5103502,
    },
    {
      value: "Dom Aquino",
      label: "Dom Aquino",
      ibge: 5103601,
    },
    {
      value: "Feliz Natal",
      label: "Feliz Natal",
      ibge: 5103700,
    },
    {
      value: "Figueirópolis d'Oeste",
      label: "Figueirópolis d'Oeste",
      ibge: 5103809,
    },
    {
      value: "Gaúcha do Norte",
      label: "Gaúcha do Norte",
      ibge: 5103858,
    },
    {
      value: "General Carneiro",
      label: "General Carneiro",
      ibge: 5103908,
    },
    {
      value: "Glória d'Oeste",
      label: "Glória d'Oeste",
      ibge: 5103957,
    },
    {
      value: "Guarantã do Norte",
      label: "Guarantã do Norte",
      ibge: 5104104,
    },
    {
      value: "Guiratinga",
      label: "Guiratinga",
      ibge: 5104203,
    },
    {
      value: "Indiavaí",
      label: "Indiavaí",
      ibge: 5104500,
    },
    {
      value: "Itaúba",
      label: "Itaúba",
      ibge: 5104559,
    },
    {
      value: "Itiquira",
      label: "Itiquira",
      ibge: 5104609,
    },
    {
      value: "Jaciara",
      label: "Jaciara",
      ibge: 5104807,
    },
    {
      value: "Jangada",
      label: "Jangada",
      ibge: 5104906,
    },
    {
      value: "Jauru",
      label: "Jauru",
      ibge: 5105002,
    },
    {
      value: "Juara",
      label: "Juara",
      ibge: 5105101,
    },
    {
      value: "Juína",
      label: "Juína",
      ibge: 5105150,
    },
    {
      value: "Juruena",
      label: "Juruena",
      ibge: 5105176,
    },
    {
      value: "Juscimeira",
      label: "Juscimeira",
      ibge: 5105200,
    },
    {
      value: "Lambari d'Oeste",
      label: "Lambari d'Oeste",
      ibge: 5105234,
    },
    {
      value: "Lucas do Rio Verde",
      label: "Lucas do Rio Verde",
      ibge: 5105259,
    },
    {
      value: "Luciára",
      label: "Luciára",
    },
    {
      value: "Marcelândia",
      label: "Marcelândia",
      ibge: 5105580,
    },
    {
      value: "Matupá",
      label: "Matupá",
      ibge: 5105606,
    },
    {
      value: "Mirassol d'Oeste",
      label: "Mirassol d'Oeste",
      ibge: 5105622,
    },
    {
      value: "Nobres",
      label: "Nobres",
      ibge: 5105903,
    },
    {
      value: "Nortelândia",
      label: "Nortelândia",
      ibge: 5106000,
    },
    {
      value: "Nossa Senhora do Livramento",
      label: "Nossa Senhora do Livramento",
      ibge: 5106109,
    },
    {
      value: "Nova Bandeirantes",
      label: "Nova Bandeirantes",
      ibge: 5106158,
    },
    {
      value: "Nova Brasilândia",
      label: "Nova Brasilândia",
      ibge: 5106208,
    },
    {
      value: "Nova Canãa do Norte",
      label: "Nova Canãa do Norte",
    },
    {
      value: "Nova Guarita",
      label: "Nova Guarita",
      ibge: 5108808,
    },
    {
      value: "Nova Lacerda",
      label: "Nova Lacerda",
      ibge: 5106182,
    },
    {
      value: "Nova Marilândia",
      label: "Nova Marilândia",
      ibge: 5108857,
    },
    {
      value: "Nova Maringá",
      label: "Nova Maringá",
      ibge: 5108907,
    },
    {
      value: "Nova Monte Verde",
      label: "Nova Monte Verde",
      ibge: 5108956,
    },
    {
      value: "Nova Mutum",
      label: "Nova Mutum",
      ibge: 5106224,
    },
    {
      value: "Nova Nazaré",
      label: "Nova Nazaré",
      ibge: 5106174,
    },
    {
      value: "Nova Olímpia",
      label: "Nova Olímpia",
      ibge: 5106232,
    },
    {
      value: "Nova Santa Helena",
      label: "Nova Santa Helena",
      ibge: 5106190,
    },
    {
      value: "Nova Ubiratã",
      label: "Nova Ubiratã",
      ibge: 5106240,
    },
    {
      value: "Nova Xavantina",
      label: "Nova Xavantina",
      ibge: 5106257,
    },
    {
      value: "Novo Horizonte do Norte",
      label: "Novo Horizonte do Norte",
      ibge: 5106273,
    },
    {
      value: "Novo Mundo",
      label: "Novo Mundo",
      ibge: 5106265,
    },
    {
      value: "Novo Santo Antônio",
      label: "Novo Santo Antônio",
      ibge: 5106315,
    },
    {
      value: "Novo São Joaquim",
      label: "Novo São Joaquim",
      ibge: 5106281,
    },
    {
      value: "Paranaíta",
      label: "Paranaíta",
      ibge: 5106299,
    },
    {
      value: "Paranatinga",
      label: "Paranatinga",
      ibge: 5106307,
    },
    {
      value: "Pedra Preta",
      label: "Pedra Preta",
      ibge: 5106372,
    },
    {
      value: "Peixoto de Azevedo",
      label: "Peixoto de Azevedo",
      ibge: 5106422,
    },
    {
      value: "Planalto da Serra",
      label: "Planalto da Serra",
      ibge: 5106455,
    },
    {
      value: "Poconé",
      label: "Poconé",
      ibge: 5106505,
    },
    {
      value: "Pontal do Araguaia",
      label: "Pontal do Araguaia",
      ibge: 5106653,
    },
    {
      value: "Ponte Branca",
      label: "Ponte Branca",
      ibge: 5106703,
    },
    {
      value: "Pontes e Lacerda",
      label: "Pontes e Lacerda",
      ibge: 5106752,
    },
    {
      value: "Porto Alegre do Norte",
      label: "Porto Alegre do Norte",
      ibge: 5106778,
    },
    {
      value: "Porto dos Gaúchos",
      label: "Porto dos Gaúchos",
      ibge: 5106802,
    },
    {
      value: "Porto Esperidião",
      label: "Porto Esperidião",
      ibge: 5106828,
    },
    {
      value: "Porto Estrela",
      label: "Porto Estrela",
      ibge: 5106851,
    },
    {
      value: "Poxoréo",
      label: "Poxoréo",
    },
    {
      value: "Primavera do Leste",
      label: "Primavera do Leste",
      ibge: 5107040,
    },
    {
      value: "Querência",
      label: "Querência",
      ibge: 5107065,
    },
    {
      value: "Reserva do Cabaçal",
      label: "Reserva do Cabaçal",
      ibge: 5107156,
    },
    {
      value: "Ribeirão Cascalheira",
      label: "Ribeirão Cascalheira",
      ibge: 5107180,
    },
    {
      value: "Ribeirãozinho",
      label: "Ribeirãozinho",
      ibge: 5107198,
    },
    {
      value: "Rio Branco",
      label: "Rio Branco",
      ibge: 5107206,
    },
    {
      value: "Rondolândia",
      label: "Rondolândia",
      ibge: 5107578,
    },
    {
      value: "Rondonópolis",
      label: "Rondonópolis",
      ibge: 5107602,
    },
    {
      value: "Rosário Oeste",
      label: "Rosário Oeste",
      ibge: 5107701,
    },
    {
      value: "Salto do Céu",
      label: "Salto do Céu",
      ibge: 5107750,
    },
    {
      value: "Santa Carmem",
      label: "Santa Carmem",
      ibge: 5107248,
    },
    {
      value: "Santa Cruz do Xingu",
      label: "Santa Cruz do Xingu",
      ibge: 5107743,
    },
    {
      value: "Santa Rita do Trivelato",
      label: "Santa Rita do Trivelato",
      ibge: 5107768,
    },
    {
      value: "Santa Terezinha",
      label: "Santa Terezinha",
      ibge: 5107776,
    },
    {
      value: "Santo Afonso",
      label: "Santo Afonso",
      ibge: 5107263,
    },
    {
      value: "Santo Antônio do Leste",
      label: "Santo Antônio do Leste",
      ibge: 5107792,
    },
    {
      value: "Santo Antônio do Leverger",
      label: "Santo Antônio do Leverger",
      ibge: 5107800,
    },
    {
      value: "São Félix do Araguaia",
      label: "São Félix do Araguaia",
      ibge: 5107859,
    },
    {
      value: "São José do Povo",
      label: "São José do Povo",
      ibge: 5107297,
    },
    {
      value: "São José do Rio Claro",
      label: "São José do Rio Claro",
      ibge: 5107305,
    },
    {
      value: "São José do Xingu",
      label: "São José do Xingu",
      ibge: 5107354,
    },
    {
      value: "São José dos Quatro Marcos",
      label: "São José dos Quatro Marcos",
      ibge: 5107107,
    },
    {
      value: "São Pedro da Cipa",
      label: "São Pedro da Cipa",
      ibge: 5107404,
    },
    {
      value: "Sapezal",
      label: "Sapezal",
      ibge: 5107875,
    },
    {
      value: "Serra Nova Dourada",
      label: "Serra Nova Dourada",
      ibge: 5107883,
    },
    {
      value: "Sinop",
      label: "Sinop",
      ibge: 5107909,
    },
    {
      value: "Sorriso",
      label: "Sorriso",
      ibge: 5107925,
    },
    {
      value: "Tabaporã",
      label: "Tabaporã",
      ibge: 5107941,
    },
    {
      value: "Tangará da Serra",
      label: "Tangará da Serra",
      ibge: 5107958,
    },
    {
      value: "Tapurah",
      label: "Tapurah",
      ibge: 5108006,
    },
    {
      value: "Terra Nova do Norte",
      label: "Terra Nova do Norte",
      ibge: 5108055,
    },
    {
      value: "Tesouro",
      label: "Tesouro",
      ibge: 5108105,
    },
    {
      value: "Torixoréu",
      label: "Torixoréu",
      ibge: 5108204,
    },
    {
      value: "União do Sul",
      label: "União do Sul",
      ibge: 5108303,
    },
    {
      value: "Vale de São Domingos",
      label: "Vale de São Domingos",
      ibge: 5108352,
    },
    {
      value: "Várzea Grande",
      label: "Várzea Grande",
      ibge: 5108402,
    },
    {
      value: "Vera",
      label: "Vera",
      ibge: 5108501,
    },
    {
      value: "Vila Bela da Santíssima Trindade",
      label: "Vila Bela da Santíssima Trindade",
      ibge: 5105507,
    },
    {
      value: "Vila Rica",
      label: "Vila Rica",
      ibge: 5108600,
    },
    {
      value: "Ipiranga do Norte",
      label: "Ipiranga do Norte",
      ibge: 5104526,
    },
    {
      value: "Itanhangá",
      label: "Itanhangá",
      ibge: 5104542,
    },
    {
      value: "Luciara",
      label: "Luciara",
      ibge: 5105309,
    },
    {
      value: "Nova Canaã do Norte",
      label: "Nova Canaã do Norte",
      ibge: 5106216,
    },
    {
      value: "Poxoréu",
      label: "Poxoréu",
      ibge: 5107008,
    },
  ],
  PA: [
    {
      value: "Abaetetuba",
      label: "Abaetetuba",
      ibge: 1500107,
    },
    {
      value: "Abel Figueiredo",
      label: "Abel Figueiredo",
      ibge: 1500131,
    },
    {
      value: "Acará",
      label: "Acará",
      ibge: 1500206,
    },
    {
      value: "Afuá",
      label: "Afuá",
      ibge: 1500305,
    },
    {
      value: "Água Azul do Norte",
      label: "Água Azul do Norte",
      ibge: 1500347,
    },
    {
      value: "Alenquer",
      label: "Alenquer",
      ibge: 1500404,
    },
    {
      value: "Almeirim",
      label: "Almeirim",
      ibge: 1500503,
    },
    {
      value: "Altamira",
      label: "Altamira",
      ibge: 1500602,
    },
    {
      value: "Anajás",
      label: "Anajás",
      ibge: 1500701,
    },
    {
      value: "Ananindeua",
      label: "Ananindeua",
      ibge: 1500800,
    },
    {
      value: "Anapu",
      label: "Anapu",
      ibge: 1500859,
    },
    {
      value: "Augusto Corrêa",
      label: "Augusto Corrêa",
      ibge: 1500909,
    },
    {
      value: "Aurora do Pará",
      label: "Aurora do Pará",
      ibge: 1500958,
    },
    {
      value: "Aveiro",
      label: "Aveiro",
      ibge: 1501006,
    },
    {
      value: "Bagre",
      label: "Bagre",
      ibge: 1501105,
    },
    {
      value: "Baião",
      label: "Baião",
      ibge: 1501204,
    },
    {
      value: "Bannach",
      label: "Bannach",
      ibge: 1501253,
    },
    {
      value: "Barcarena",
      label: "Barcarena",
      ibge: 1501303,
    },
    {
      value: "Belém",
      label: "Belém",
      ibge: 1501402,
    },
    {
      value: "Belterra",
      label: "Belterra",
      ibge: 1501451,
    },
    {
      value: "Benevides",
      label: "Benevides",
      ibge: 1501501,
    },
    {
      value: "Bom Jesus do Tocantins",
      label: "Bom Jesus do Tocantins",
      ibge: 1501576,
    },
    {
      value: "Bonito",
      label: "Bonito",
      ibge: 1501600,
    },
    {
      value: "Bragança",
      label: "Bragança",
      ibge: 1501709,
    },
    {
      value: "Brasil Novo",
      label: "Brasil Novo",
      ibge: 1501725,
    },
    {
      value: "Brejo Grande do Araguaia",
      label: "Brejo Grande do Araguaia",
      ibge: 1501758,
    },
    {
      value: "Breu Branco",
      label: "Breu Branco",
      ibge: 1501782,
    },
    {
      value: "Breves",
      label: "Breves",
      ibge: 1501808,
    },
    {
      value: "Bujaru",
      label: "Bujaru",
      ibge: 1501907,
    },
    {
      value: "Cachoeira do Arari",
      label: "Cachoeira do Arari",
      ibge: 1502004,
    },
    {
      value: "Cachoeira do Piriá",
      label: "Cachoeira do Piriá",
      ibge: 1501956,
    },
    {
      value: "Cametá",
      label: "Cametá",
      ibge: 1502103,
    },
    {
      value: "Canaã dos Carajás",
      label: "Canaã dos Carajás",
      ibge: 1502152,
    },
    {
      value: "Capanema",
      label: "Capanema",
      ibge: 1502202,
    },
    {
      value: "Capitão Poço",
      label: "Capitão Poço",
      ibge: 1502301,
    },
    {
      value: "Castanhal",
      label: "Castanhal",
      ibge: 1502400,
    },
    {
      value: "Chaves",
      label: "Chaves",
      ibge: 1502509,
    },
    {
      value: "Colares",
      label: "Colares",
      ibge: 1502608,
    },
    {
      value: "Conceição do Araguaia",
      label: "Conceição do Araguaia",
      ibge: 1502707,
    },
    {
      value: "Concórdia do Pará",
      label: "Concórdia do Pará",
      ibge: 1502756,
    },
    {
      value: "Cumaru do Norte",
      label: "Cumaru do Norte",
      ibge: 1502764,
    },
    {
      value: "Curionópolis",
      label: "Curionópolis",
      ibge: 1502772,
    },
    {
      value: "Curralinho",
      label: "Curralinho",
      ibge: 1502806,
    },
    {
      value: "Curuá",
      label: "Curuá",
      ibge: 1502855,
    },
    {
      value: "Curuçá",
      label: "Curuçá",
      ibge: 1502905,
    },
    {
      value: "Dom Eliseu",
      label: "Dom Eliseu",
      ibge: 1502939,
    },
    {
      value: "Eldorado dos Carajás",
      label: "Eldorado dos Carajás",
    },
    {
      value: "Faro",
      label: "Faro",
      ibge: 1503002,
    },
    {
      value: "Floresta do Araguaia",
      label: "Floresta do Araguaia",
      ibge: 1503044,
    },
    {
      value: "Garrafão do Norte",
      label: "Garrafão do Norte",
      ibge: 1503077,
    },
    {
      value: "Goianésia do Pará",
      label: "Goianésia do Pará",
      ibge: 1503093,
    },
    {
      value: "Gurupá",
      label: "Gurupá",
      ibge: 1503101,
    },
    {
      value: "Igarapé-Açu",
      label: "Igarapé-Açu",
      ibge: 1503200,
    },
    {
      value: "Igarapé-Miri",
      label: "Igarapé-Miri",
      ibge: 1503309,
    },
    {
      value: "Inhangapi",
      label: "Inhangapi",
      ibge: 1503408,
    },
    {
      value: "Ipixuna do Pará",
      label: "Ipixuna do Pará",
      ibge: 1503457,
    },
    {
      value: "Irituia",
      label: "Irituia",
      ibge: 1503507,
    },
    {
      value: "Itaituba",
      label: "Itaituba",
      ibge: 1503606,
    },
    {
      value: "Itupiranga",
      label: "Itupiranga",
      ibge: 1503705,
    },
    {
      value: "Jacareacanga",
      label: "Jacareacanga",
      ibge: 1503754,
    },
    {
      value: "Jacundá",
      label: "Jacundá",
      ibge: 1503804,
    },
    {
      value: "Juruti",
      label: "Juruti",
      ibge: 1503903,
    },
    {
      value: "Limoeiro do Ajuru",
      label: "Limoeiro do Ajuru",
      ibge: 1504000,
    },
    {
      value: "Mãe do Rio",
      label: "Mãe do Rio",
      ibge: 1504059,
    },
    {
      value: "Magalhães Barata",
      label: "Magalhães Barata",
      ibge: 1504109,
    },
    {
      value: "Marabá",
      label: "Marabá",
      ibge: 1504208,
    },
    {
      value: "Maracanã",
      label: "Maracanã",
      ibge: 1504307,
    },
    {
      value: "Marapanim",
      label: "Marapanim",
      ibge: 1504406,
    },
    {
      value: "Marituba",
      label: "Marituba",
      ibge: 1504422,
    },
    {
      value: "Medicilândia",
      label: "Medicilândia",
      ibge: 1504455,
    },
    {
      value: "Melgaço",
      label: "Melgaço",
      ibge: 1504505,
    },
    {
      value: "Mocajuba",
      label: "Mocajuba",
      ibge: 1504604,
    },
    {
      value: "Moju",
      label: "Moju",
      ibge: 1504703,
    },
    {
      value: "Monte Alegre",
      label: "Monte Alegre",
      ibge: 1504802,
    },
    {
      value: "Muaná",
      label: "Muaná",
      ibge: 1504901,
    },
    {
      value: "Nova Esperança do Piriá",
      label: "Nova Esperança do Piriá",
      ibge: 1504950,
    },
    {
      value: "Nova Ipixuna",
      label: "Nova Ipixuna",
      ibge: 1504976,
    },
    {
      value: "Nova Timboteua",
      label: "Nova Timboteua",
      ibge: 1505007,
    },
    {
      value: "Novo Progresso",
      label: "Novo Progresso",
      ibge: 1505031,
    },
    {
      value: "Novo Repartimento",
      label: "Novo Repartimento",
      ibge: 1505064,
    },
    {
      value: "Óbidos",
      label: "Óbidos",
      ibge: 1505106,
    },
    {
      value: "Oeiras do Pará",
      label: "Oeiras do Pará",
      ibge: 1505205,
    },
    {
      value: "Oriximiná",
      label: "Oriximiná",
      ibge: 1505304,
    },
    {
      value: "Ourém",
      label: "Ourém",
      ibge: 1505403,
    },
    {
      value: "Ourilândia do Norte",
      label: "Ourilândia do Norte",
      ibge: 1505437,
    },
    {
      value: "Pacajá",
      label: "Pacajá",
      ibge: 1505486,
    },
    {
      value: "Palestina do Pará",
      label: "Palestina do Pará",
      ibge: 1505494,
    },
    {
      value: "Paragominas",
      label: "Paragominas",
      ibge: 1505502,
    },
    {
      value: "Parauapebas",
      label: "Parauapebas",
      ibge: 1505536,
    },
    {
      value: "Pau d'Arco",
      label: "Pau d'Arco",
      ibge: 1505551,
    },
    {
      value: "Peixe-Boi",
      label: "Peixe-Boi",
      ibge: 1505601,
    },
    {
      value: "Piçarra",
      label: "Piçarra",
      ibge: 1505635,
    },
    {
      value: "Placas",
      label: "Placas",
      ibge: 1505650,
    },
    {
      value: "Ponta de Pedras",
      label: "Ponta de Pedras",
      ibge: 1505700,
    },
    {
      value: "Portel",
      label: "Portel",
      ibge: 1505809,
    },
    {
      value: "Porto de Moz",
      label: "Porto de Moz",
      ibge: 1505908,
    },
    {
      value: "Prainha",
      label: "Prainha",
      ibge: 1506005,
    },
    {
      value: "Primavera",
      label: "Primavera",
      ibge: 1506104,
    },
    {
      value: "Quatipuru",
      label: "Quatipuru",
      ibge: 1506112,
    },
    {
      value: "Redenção",
      label: "Redenção",
      ibge: 1506138,
    },
    {
      value: "Rio Maria",
      label: "Rio Maria",
      ibge: 1506161,
    },
    {
      value: "Rondon do Pará",
      label: "Rondon do Pará",
      ibge: 1506187,
    },
    {
      value: "Rurópolis",
      label: "Rurópolis",
      ibge: 1506195,
    },
    {
      value: "Salinópolis",
      label: "Salinópolis",
      ibge: 1506203,
    },
    {
      value: "Salvaterra",
      label: "Salvaterra",
      ibge: 1506302,
    },
    {
      value: "Santa Bárbara do Pará",
      label: "Santa Bárbara do Pará",
      ibge: 1506351,
    },
    {
      value: "Santa Cruz do Arari",
      label: "Santa Cruz do Arari",
      ibge: 1506401,
    },
    {
      value: "Santa Isabel do Pará",
      label: "Santa Isabel do Pará",
    },
    {
      value: "Santa Luzia do Pará",
      label: "Santa Luzia do Pará",
      ibge: 1506559,
    },
    {
      value: "Santa Maria das Barreiras",
      label: "Santa Maria das Barreiras",
      ibge: 1506583,
    },
    {
      value: "Santa Maria do Pará",
      label: "Santa Maria do Pará",
      ibge: 1506609,
    },
    {
      value: "Santana do Araguaia",
      label: "Santana do Araguaia",
      ibge: 1506708,
    },
    {
      value: "Santarém",
      label: "Santarém",
      ibge: 1506807,
    },
    {
      value: "Santarém Novo",
      label: "Santarém Novo",
      ibge: 1506906,
    },
    {
      value: "Santo Antônio do Tauá",
      label: "Santo Antônio do Tauá",
      ibge: 1507003,
    },
    {
      value: "São Caetano de Odivela",
      label: "São Caetano de Odivela",
    },
    {
      value: "São Domingos do Araguaia",
      label: "São Domingos do Araguaia",
      ibge: 1507151,
    },
    {
      value: "São Domingos do Capim",
      label: "São Domingos do Capim",
      ibge: 1507201,
    },
    {
      value: "São Félix do Xingu",
      label: "São Félix do Xingu",
      ibge: 1507300,
    },
    {
      value: "São Francisco do Pará",
      label: "São Francisco do Pará",
      ibge: 1507409,
    },
    {
      value: "São Geraldo do Araguaia",
      label: "São Geraldo do Araguaia",
      ibge: 1507458,
    },
    {
      value: "São João da Ponta",
      label: "São João da Ponta",
      ibge: 1507466,
    },
    {
      value: "São João de Pirabas",
      label: "São João de Pirabas",
      ibge: 1507474,
    },
    {
      value: "São João do Araguaia",
      label: "São João do Araguaia",
      ibge: 1507508,
    },
    {
      value: "São Miguel do Guamá",
      label: "São Miguel do Guamá",
      ibge: 1507607,
    },
    {
      value: "São Sebastião da Boa Vista",
      label: "São Sebastião da Boa Vista",
      ibge: 1507706,
    },
    {
      value: "Sapucaia",
      label: "Sapucaia",
      ibge: 1507755,
    },
    {
      value: "Senador José Porfírio",
      label: "Senador José Porfírio",
      ibge: 1507805,
    },
    {
      value: "Soure",
      label: "Soure",
      ibge: 1507904,
    },
    {
      value: "Tailândia",
      label: "Tailândia",
      ibge: 1507953,
    },
    {
      value: "Terra Alta",
      label: "Terra Alta",
      ibge: 1507961,
    },
    {
      value: "Terra Santa",
      label: "Terra Santa",
      ibge: 1507979,
    },
    {
      value: "Tomé-Açu",
      label: "Tomé-Açu",
      ibge: 1508001,
    },
    {
      value: "Tracuateua",
      label: "Tracuateua",
      ibge: 1508035,
    },
    {
      value: "Trairão",
      label: "Trairão",
      ibge: 1508050,
    },
    {
      value: "Tucumã",
      label: "Tucumã",
      ibge: 1508084,
    },
    {
      value: "Tucuruí",
      label: "Tucuruí",
      ibge: 1508100,
    },
    {
      value: "Ulianópolis",
      label: "Ulianópolis",
      ibge: 1508126,
    },
    {
      value: "Uruará",
      label: "Uruará",
      ibge: 1508159,
    },
    {
      value: "Vigia",
      label: "Vigia",
      ibge: 1508209,
    },
    {
      value: "Viseu",
      label: "Viseu",
      ibge: 1508308,
    },
    {
      value: "Vitória do Xingu",
      label: "Vitória do Xingu",
      ibge: 1508357,
    },
    {
      value: "Xinguara",
      label: "Xinguara",
      ibge: 1508407,
    },
    {
      value: "Eldorado do Carajás",
      label: "Eldorado do Carajás",
      ibge: 1502954,
    },
    {
      value: "Mojuí dos Campos",
      label: "Mojuí dos Campos",
      ibge: 1504752,
    },
    {
      value: "Santa Izabel do Pará",
      label: "Santa Izabel do Pará",
      ibge: 1506500,
    },
    {
      value: "São Caetano de Odivelas",
      label: "São Caetano de Odivelas",
      ibge: 1507102,
    },
  ],
  PB: [
    {
      value: "Água Branca",
      label: "Água Branca",
      ibge: 2500106,
    },
    {
      value: "Aguiar",
      label: "Aguiar",
      ibge: 2500205,
    },
    {
      value: "Alagoa Grande",
      label: "Alagoa Grande",
      ibge: 2500304,
    },
    {
      value: "Alagoa Nova",
      label: "Alagoa Nova",
      ibge: 2500403,
    },
    {
      value: "Alagoinha",
      label: "Alagoinha",
      ibge: 2500502,
    },
    {
      value: "Alcantil",
      label: "Alcantil",
      ibge: 2500536,
    },
    {
      value: "Algodão de Jandaíra",
      label: "Algodão de Jandaíra",
      ibge: 2500577,
    },
    {
      value: "Alhandra",
      label: "Alhandra",
      ibge: 2500601,
    },
    {
      value: "Amparo",
      label: "Amparo",
      ibge: 2500734,
    },
    {
      value: "Aparecida",
      label: "Aparecida",
      ibge: 2500775,
    },
    {
      value: "Araçagi",
      label: "Araçagi",
      ibge: 2500809,
    },
    {
      value: "Arara",
      label: "Arara",
      ibge: 2500908,
    },
    {
      value: "Araruna",
      label: "Araruna",
      ibge: 2501005,
    },
    {
      value: "Areia",
      label: "Areia",
      ibge: 2501104,
    },
    {
      value: "Areia de Baraúnas",
      label: "Areia de Baraúnas",
      ibge: 2501153,
    },
    {
      value: "Areial",
      label: "Areial",
      ibge: 2501203,
    },
    {
      value: "Aroeiras",
      label: "Aroeiras",
      ibge: 2501302,
    },
    {
      value: "Assunção",
      label: "Assunção",
      ibge: 2501351,
    },
    {
      value: "Baía da Traição",
      label: "Baía da Traição",
      ibge: 2501401,
    },
    {
      value: "Bananeiras",
      label: "Bananeiras",
      ibge: 2501500,
    },
    {
      value: "Baraúna",
      label: "Baraúna",
      ibge: 2501534,
    },
    {
      value: "Barra de Santa Rosa",
      label: "Barra de Santa Rosa",
      ibge: 2501609,
    },
    {
      value: "Barra de Santana",
      label: "Barra de Santana",
      ibge: 2501575,
    },
    {
      value: "Barra de São Miguel",
      label: "Barra de São Miguel",
      ibge: 2501708,
    },
    {
      value: "Bayeux",
      label: "Bayeux",
      ibge: 2501807,
    },
    {
      value: "Belém",
      label: "Belém",
      ibge: 2501906,
    },
    {
      value: "Belém do Brejo do Cruz",
      label: "Belém do Brejo do Cruz",
      ibge: 2502003,
    },
    {
      value: "Bernardino Batista",
      label: "Bernardino Batista",
      ibge: 2502052,
    },
    {
      value: "Boa Ventura",
      label: "Boa Ventura",
      ibge: 2502102,
    },
    {
      value: "Boa Vista",
      label: "Boa Vista",
      ibge: 2502151,
    },
    {
      value: "Bom Jesus",
      label: "Bom Jesus",
      ibge: 2502201,
    },
    {
      value: "Bom Sucesso",
      label: "Bom Sucesso",
      ibge: 2502300,
    },
    {
      value: "Bonito de Santa Fé",
      label: "Bonito de Santa Fé",
      ibge: 2502409,
    },
    {
      value: "Boqueirão",
      label: "Boqueirão",
      ibge: 2502508,
    },
    {
      value: "Borborema",
      label: "Borborema",
      ibge: 2502706,
    },
    {
      value: "Brejo do Cruz",
      label: "Brejo do Cruz",
      ibge: 2502805,
    },
    {
      value: "Brejo dos Santos",
      label: "Brejo dos Santos",
      ibge: 2502904,
    },
    {
      value: "Caaporã",
      label: "Caaporã",
      ibge: 2503001,
    },
    {
      value: "Cabaceiras",
      label: "Cabaceiras",
      ibge: 2503100,
    },
    {
      value: "Cabedelo",
      label: "Cabedelo",
      ibge: 2503209,
    },
    {
      value: "Cachoeira dos Índios",
      label: "Cachoeira dos Índios",
      ibge: 2503308,
    },
    {
      value: "Cacimba de Areia",
      label: "Cacimba de Areia",
      ibge: 2503407,
    },
    {
      value: "Cacimba de Dentro",
      label: "Cacimba de Dentro",
      ibge: 2503506,
    },
    {
      value: "Cacimbas",
      label: "Cacimbas",
      ibge: 2503555,
    },
    {
      value: "Caiçara",
      label: "Caiçara",
      ibge: 2503605,
    },
    {
      value: "Cajazeiras",
      label: "Cajazeiras",
      ibge: 2503704,
    },
    {
      value: "Cajazeirinhas",
      label: "Cajazeirinhas",
      ibge: 2503753,
    },
    {
      value: "Caldas Brandão",
      label: "Caldas Brandão",
      ibge: 2503803,
    },
    {
      value: "Camalaú",
      label: "Camalaú",
      ibge: 2503902,
    },
    {
      value: "Campina Grande",
      label: "Campina Grande",
      ibge: 2504009,
    },
    {
      value: "Campo de Santana",
      label: "Campo de Santana",
    },
    {
      value: "Capim",
      label: "Capim",
      ibge: 2504033,
    },
    {
      value: "Caraúbas",
      label: "Caraúbas",
      ibge: 2504074,
    },
    {
      value: "Carrapateira",
      label: "Carrapateira",
      ibge: 2504108,
    },
    {
      value: "Casserengue",
      label: "Casserengue",
      ibge: 2504157,
    },
    {
      value: "Catingueira",
      label: "Catingueira",
      ibge: 2504207,
    },
    {
      value: "Catolé do Rocha",
      label: "Catolé do Rocha",
      ibge: 2504306,
    },
    {
      value: "Caturité",
      label: "Caturité",
      ibge: 2504355,
    },
    {
      value: "Conceição",
      label: "Conceição",
      ibge: 2504405,
    },
    {
      value: "Condado",
      label: "Condado",
      ibge: 2504504,
    },
    {
      value: "Conde",
      label: "Conde",
      ibge: 2504603,
    },
    {
      value: "Congo",
      label: "Congo",
      ibge: 2504702,
    },
    {
      value: "Coremas",
      label: "Coremas",
      ibge: 2504801,
    },
    {
      value: "Coxixola",
      label: "Coxixola",
      ibge: 2504850,
    },
    {
      value: "Cruz do Espírito Santo",
      label: "Cruz do Espírito Santo",
      ibge: 2504900,
    },
    {
      value: "Cubati",
      label: "Cubati",
      ibge: 2505006,
    },
    {
      value: "Cuité",
      label: "Cuité",
      ibge: 2505105,
    },
    {
      value: "Cuité de Mamanguape",
      label: "Cuité de Mamanguape",
      ibge: 2505238,
    },
    {
      value: "Cuitegi",
      label: "Cuitegi",
      ibge: 2505204,
    },
    {
      value: "Curral de Cima",
      label: "Curral de Cima",
      ibge: 2505279,
    },
    {
      value: "Curral Velho",
      label: "Curral Velho",
      ibge: 2505303,
    },
    {
      value: "Damião",
      label: "Damião",
      ibge: 2505352,
    },
    {
      value: "Desterro",
      label: "Desterro",
      ibge: 2505402,
    },
    {
      value: "Diamante",
      label: "Diamante",
      ibge: 2505600,
    },
    {
      value: "Dona Inês",
      label: "Dona Inês",
      ibge: 2505709,
    },
    {
      value: "Duas Estradas",
      label: "Duas Estradas",
      ibge: 2505808,
    },
    {
      value: "Emas",
      label: "Emas",
      ibge: 2505907,
    },
    {
      value: "Esperança",
      label: "Esperança",
      ibge: 2506004,
    },
    {
      value: "Fagundes",
      label: "Fagundes",
      ibge: 2506103,
    },
    {
      value: "Frei Martinho",
      label: "Frei Martinho",
      ibge: 2506202,
    },
    {
      value: "Gado Bravo",
      label: "Gado Bravo",
      ibge: 2506251,
    },
    {
      value: "Guarabira",
      label: "Guarabira",
      ibge: 2506301,
    },
    {
      value: "Gurinhém",
      label: "Gurinhém",
      ibge: 2506400,
    },
    {
      value: "Gurjão",
      label: "Gurjão",
      ibge: 2506509,
    },
    {
      value: "Ibiara",
      label: "Ibiara",
      ibge: 2506608,
    },
    {
      value: "Igaracy",
      label: "Igaracy",
      ibge: 2502607,
    },
    {
      value: "Imaculada",
      label: "Imaculada",
      ibge: 2506707,
    },
    {
      value: "Ingá",
      label: "Ingá",
      ibge: 2506806,
    },
    {
      value: "Itabaiana",
      label: "Itabaiana",
      ibge: 2506905,
    },
    {
      value: "Itaporanga",
      label: "Itaporanga",
      ibge: 2507002,
    },
    {
      value: "Itapororoca",
      label: "Itapororoca",
      ibge: 2507101,
    },
    {
      value: "Itatuba",
      label: "Itatuba",
      ibge: 2507200,
    },
    {
      value: "Jacaraú",
      label: "Jacaraú",
      ibge: 2507309,
    },
    {
      value: "Jericó",
      label: "Jericó",
      ibge: 2507408,
    },
    {
      value: "João Pessoa",
      label: "João Pessoa",
      ibge: 2507507,
    },
    {
      value: "Juarez Távora",
      label: "Juarez Távora",
      ibge: 2507606,
    },
    {
      value: "Juazeirinho",
      label: "Juazeirinho",
      ibge: 2507705,
    },
    {
      value: "Junco do Seridó",
      label: "Junco do Seridó",
      ibge: 2507804,
    },
    {
      value: "Juripiranga",
      label: "Juripiranga",
      ibge: 2507903,
    },
    {
      value: "Juru",
      label: "Juru",
      ibge: 2508000,
    },
    {
      value: "Lagoa",
      label: "Lagoa",
      ibge: 2508109,
    },
    {
      value: "Lagoa de Dentro",
      label: "Lagoa de Dentro",
      ibge: 2508208,
    },
    {
      value: "Lagoa Seca",
      label: "Lagoa Seca",
      ibge: 2508307,
    },
    {
      value: "Lastro",
      label: "Lastro",
      ibge: 2508406,
    },
    {
      value: "Livramento",
      label: "Livramento",
      ibge: 2508505,
    },
    {
      value: "Logradouro",
      label: "Logradouro",
      ibge: 2508554,
    },
    {
      value: "Lucena",
      label: "Lucena",
      ibge: 2508604,
    },
    {
      value: "Mãe d'Água",
      label: "Mãe d'Água",
      ibge: 2508703,
    },
    {
      value: "Malta",
      label: "Malta",
      ibge: 2508802,
    },
    {
      value: "Mamanguape",
      label: "Mamanguape",
      ibge: 2508901,
    },
    {
      value: "Manaíra",
      label: "Manaíra",
      ibge: 2509008,
    },
    {
      value: "Marcação",
      label: "Marcação",
      ibge: 2509057,
    },
    {
      value: "Mari",
      label: "Mari",
      ibge: 2509107,
    },
    {
      value: "Marizópolis",
      label: "Marizópolis",
      ibge: 2509156,
    },
    {
      value: "Massaranduba",
      label: "Massaranduba",
      ibge: 2509206,
    },
    {
      value: "Mataraca",
      label: "Mataraca",
      ibge: 2509305,
    },
    {
      value: "Matinhas",
      label: "Matinhas",
      ibge: 2509339,
    },
    {
      value: "Mato Grosso",
      label: "Mato Grosso",
      ibge: 2509370,
    },
    {
      value: "Maturéia",
      label: "Maturéia",
      ibge: 2509396,
    },
    {
      value: "Mogeiro",
      label: "Mogeiro",
      ibge: 2509404,
    },
    {
      value: "Montadas",
      label: "Montadas",
      ibge: 2509503,
    },
    {
      value: "Monte Horebe",
      label: "Monte Horebe",
      ibge: 2509602,
    },
    {
      value: "Monteiro",
      label: "Monteiro",
      ibge: 2509701,
    },
    {
      value: "Mulungu",
      label: "Mulungu",
      ibge: 2509800,
    },
    {
      value: "Natuba",
      label: "Natuba",
      ibge: 2509909,
    },
    {
      value: "Nazarezinho",
      label: "Nazarezinho",
      ibge: 2510006,
    },
    {
      value: "Nova Floresta",
      label: "Nova Floresta",
      ibge: 2510105,
    },
    {
      value: "Nova Olinda",
      label: "Nova Olinda",
      ibge: 2510204,
    },
    {
      value: "Nova Palmeira",
      label: "Nova Palmeira",
      ibge: 2510303,
    },
    {
      value: "Olho d'Água",
      label: "Olho d'Água",
      ibge: 2510402,
    },
    {
      value: "Olivedos",
      label: "Olivedos",
      ibge: 2510501,
    },
    {
      value: "Ouro Velho",
      label: "Ouro Velho",
      ibge: 2510600,
    },
    {
      value: "Parari",
      label: "Parari",
      ibge: 2510659,
    },
    {
      value: "Passagem",
      label: "Passagem",
      ibge: 2510709,
    },
    {
      value: "Patos",
      label: "Patos",
      ibge: 2510808,
    },
    {
      value: "Paulista",
      label: "Paulista",
      ibge: 2510907,
    },
    {
      value: "Pedra Branca",
      label: "Pedra Branca",
      ibge: 2511004,
    },
    {
      value: "Pedra Lavrada",
      label: "Pedra Lavrada",
      ibge: 2511103,
    },
    {
      value: "Pedras de Fogo",
      label: "Pedras de Fogo",
      ibge: 2511202,
    },
    {
      value: "Pedro Régis",
      label: "Pedro Régis",
      ibge: 2512721,
    },
    {
      value: "Piancó",
      label: "Piancó",
      ibge: 2511301,
    },
    {
      value: "Picuí",
      label: "Picuí",
      ibge: 2511400,
    },
    {
      value: "Pilar",
      label: "Pilar",
      ibge: 2511509,
    },
    {
      value: "Pilões",
      label: "Pilões",
      ibge: 2511608,
    },
    {
      value: "Pilõezinhos",
      label: "Pilõezinhos",
      ibge: 2511707,
    },
    {
      value: "Pirpirituba",
      label: "Pirpirituba",
      ibge: 2511806,
    },
    {
      value: "Pitimbu",
      label: "Pitimbu",
      ibge: 2511905,
    },
    {
      value: "Pocinhos",
      label: "Pocinhos",
      ibge: 2512002,
    },
    {
      value: "Poço Dantas",
      label: "Poço Dantas",
      ibge: 2512036,
    },
    {
      value: "Poço de José de Moura",
      label: "Poço de José de Moura",
      ibge: 2512077,
    },
    {
      value: "Pombal",
      label: "Pombal",
      ibge: 2512101,
    },
    {
      value: "Prata",
      label: "Prata",
      ibge: 2512200,
    },
    {
      value: "Princesa Isabel",
      label: "Princesa Isabel",
      ibge: 2512309,
    },
    {
      value: "Puxinanã",
      label: "Puxinanã",
      ibge: 2512408,
    },
    {
      value: "Queimadas",
      label: "Queimadas",
      ibge: 2512507,
    },
    {
      value: "Quixabá",
      label: "Quixabá",
    },
    {
      value: "Remígio",
      label: "Remígio",
      ibge: 2512705,
    },
    {
      value: "Riachão",
      label: "Riachão",
      ibge: 2512747,
    },
    {
      value: "Riachão do Bacamarte",
      label: "Riachão do Bacamarte",
      ibge: 2512754,
    },
    {
      value: "Riachão do Poço",
      label: "Riachão do Poço",
      ibge: 2512762,
    },
    {
      value: "Riacho de Santo Antônio",
      label: "Riacho de Santo Antônio",
      ibge: 2512788,
    },
    {
      value: "Riacho dos Cavalos",
      label: "Riacho dos Cavalos",
      ibge: 2512804,
    },
    {
      value: "Rio Tinto",
      label: "Rio Tinto",
      ibge: 2512903,
    },
    {
      value: "Salgadinho",
      label: "Salgadinho",
      ibge: 2513000,
    },
    {
      value: "Salgado de São Félix",
      label: "Salgado de São Félix",
      ibge: 2513109,
    },
    {
      value: "Santa Cecília",
      label: "Santa Cecília",
      ibge: 2513158,
    },
    {
      value: "Santa Cruz",
      label: "Santa Cruz",
      ibge: 2513208,
    },
    {
      value: "Santa Helena",
      label: "Santa Helena",
      ibge: 2513307,
    },
    {
      value: "Santa Inês",
      label: "Santa Inês",
      ibge: 2513356,
    },
    {
      value: "Santa Luzia",
      label: "Santa Luzia",
      ibge: 2513406,
    },
    {
      value: "Santa Rita",
      label: "Santa Rita",
      ibge: 2513703,
    },
    {
      value: "Santa Teresinha",
      label: "Santa Teresinha",
      ibge: 2513802,
    },
    {
      value: "Santana de Mangueira",
      label: "Santana de Mangueira",
      ibge: 2513505,
    },
    {
      value: "Santana dos Garrotes",
      label: "Santana dos Garrotes",
      ibge: 2513604,
    },
    {
      value: "Santarém",
      label: "Santarém",
    },
    {
      value: "Santo André",
      label: "Santo André",
      ibge: 2513851,
    },
    {
      value: "São Bentinho",
      label: "São Bentinho",
      ibge: 2513927,
    },
    {
      value: "São Bento",
      label: "São Bento",
      ibge: 2513901,
    },
    {
      value: "São Domingos de Pombal",
      label: "São Domingos de Pombal",
    },
    {
      value: "São Domingos do Cariri",
      label: "São Domingos do Cariri",
      ibge: 2513943,
    },
    {
      value: "São Francisco",
      label: "São Francisco",
      ibge: 2513984,
    },
    {
      value: "São João do Cariri",
      label: "São João do Cariri",
      ibge: 2514008,
    },
    {
      value: "São João do Rio do Peixe",
      label: "São João do Rio do Peixe",
      ibge: 2500700,
    },
    {
      value: "São João do Tigre",
      label: "São João do Tigre",
      ibge: 2514107,
    },
    {
      value: "São José da Lagoa Tapada",
      label: "São José da Lagoa Tapada",
      ibge: 2514206,
    },
    {
      value: "São José de Caiana",
      label: "São José de Caiana",
      ibge: 2514305,
    },
    {
      value: "São José de Espinharas",
      label: "São José de Espinharas",
      ibge: 2514404,
    },
    {
      value: "São José de Piranhas",
      label: "São José de Piranhas",
      ibge: 2514503,
    },
    {
      value: "São José de Princesa",
      label: "São José de Princesa",
      ibge: 2514552,
    },
    {
      value: "São José do Bonfim",
      label: "São José do Bonfim",
      ibge: 2514602,
    },
    {
      value: "São José do Brejo do Cruz",
      label: "São José do Brejo do Cruz",
      ibge: 2514651,
    },
    {
      value: "São José do Sabugi",
      label: "São José do Sabugi",
      ibge: 2514701,
    },
    {
      value: "São José dos Cordeiros",
      label: "São José dos Cordeiros",
      ibge: 2514800,
    },
    {
      value: "São José dos Ramos",
      label: "São José dos Ramos",
      ibge: 2514453,
    },
    {
      value: "São Mamede",
      label: "São Mamede",
      ibge: 2514909,
    },
    {
      value: "São Miguel de Taipu",
      label: "São Miguel de Taipu",
      ibge: 2515005,
    },
    {
      value: "São Sebastião de Lagoa de Roça",
      label: "São Sebastião de Lagoa de Roça",
      ibge: 2515104,
    },
    {
      value: "São Sebastião do Umbuzeiro",
      label: "São Sebastião do Umbuzeiro",
      ibge: 2515203,
    },
    {
      value: "Sapé",
      label: "Sapé",
      ibge: 2515302,
    },
    {
      value: "Seridó",
      label: "Seridó",
    },
    {
      value: "Serra Branca",
      label: "Serra Branca",
      ibge: 2515500,
    },
    {
      value: "Serra da Raiz",
      label: "Serra da Raiz",
      ibge: 2515609,
    },
    {
      value: "Serra Grande",
      label: "Serra Grande",
      ibge: 2515708,
    },
    {
      value: "Serra Redonda",
      label: "Serra Redonda",
      ibge: 2515807,
    },
    {
      value: "Serraria",
      label: "Serraria",
      ibge: 2515906,
    },
    {
      value: "Sertãozinho",
      label: "Sertãozinho",
      ibge: 2515930,
    },
    {
      value: "Sobrado",
      label: "Sobrado",
      ibge: 2515971,
    },
    {
      value: "Solânea",
      label: "Solânea",
      ibge: 2516003,
    },
    {
      value: "Soledade",
      label: "Soledade",
      ibge: 2516102,
    },
    {
      value: "Sossêgo",
      label: "Sossêgo",
      ibge: 2516151,
    },
    {
      value: "Sousa",
      label: "Sousa",
      ibge: 2516201,
    },
    {
      value: "Sumé",
      label: "Sumé",
      ibge: 2516300,
    },
    {
      value: "Taperoá",
      label: "Taperoá",
      ibge: 2516508,
    },
    {
      value: "Tavares",
      label: "Tavares",
      ibge: 2516607,
    },
    {
      value: "Teixeira",
      label: "Teixeira",
      ibge: 2516706,
    },
    {
      value: "Tenório",
      label: "Tenório",
      ibge: 2516755,
    },
    {
      value: "Triunfo",
      label: "Triunfo",
      ibge: 2516805,
    },
    {
      value: "Uiraúna",
      label: "Uiraúna",
      ibge: 2516904,
    },
    {
      value: "Umbuzeiro",
      label: "Umbuzeiro",
      ibge: 2517001,
    },
    {
      value: "Várzea",
      label: "Várzea",
      ibge: 2517100,
    },
    {
      value: "Vieirópolis",
      label: "Vieirópolis",
      ibge: 2517209,
    },
    {
      value: "Vista Serrana",
      label: "Vista Serrana",
      ibge: 2505501,
    },
    {
      value: "Zabelê",
      label: "Zabelê",
      ibge: 2517407,
    },
    {
      value: "Joca Claudino",
      label: "Joca Claudino",
      ibge: 2513653,
    },
    {
      value: "Quixaba",
      label: "Quixaba",
      ibge: 2512606,
    },
    {
      value: "São Domingos",
      label: "São Domingos",
      ibge: 2513968,
    },
    {
      value: "São Vicente do Seridó",
      label: "São Vicente do Seridó",
      ibge: 2515401,
    },
    {
      value: "Tacima",
      label: "Tacima",
      ibge: 2516409,
    },
  ],
  PE: [
    {
      value: "Abreu e Lima",
      label: "Abreu e Lima",
      ibge: 2600054,
    },
    {
      value: "Afogados da Ingazeira",
      label: "Afogados da Ingazeira",
      ibge: 2600104,
    },
    {
      value: "Afrânio",
      label: "Afrânio",
      ibge: 2600203,
    },
    {
      value: "Agrestina",
      label: "Agrestina",
      ibge: 2600302,
    },
    {
      value: "Água Preta",
      label: "Água Preta",
      ibge: 2600401,
    },
    {
      value: "Águas Belas",
      label: "Águas Belas",
      ibge: 2600500,
    },
    {
      value: "Alagoinha",
      label: "Alagoinha",
      ibge: 2600609,
    },
    {
      value: "Aliança",
      label: "Aliança",
      ibge: 2600708,
    },
    {
      value: "Altinho",
      label: "Altinho",
      ibge: 2600807,
    },
    {
      value: "Amaraji",
      label: "Amaraji",
      ibge: 2600906,
    },
    {
      value: "Angelim",
      label: "Angelim",
      ibge: 2601003,
    },
    {
      value: "Araçoiaba",
      label: "Araçoiaba",
      ibge: 2601052,
    },
    {
      value: "Araripina",
      label: "Araripina",
      ibge: 2601102,
    },
    {
      value: "Arcoverde",
      label: "Arcoverde",
      ibge: 2601201,
    },
    {
      value: "Barra de Guabiraba",
      label: "Barra de Guabiraba",
      ibge: 2601300,
    },
    {
      value: "Barreiros",
      label: "Barreiros",
      ibge: 2601409,
    },
    {
      value: "Belém de Maria",
      label: "Belém de Maria",
      ibge: 2601508,
    },
    {
      value: "Belém de São Francisco",
      label: "Belém de São Francisco",
    },
    {
      value: "Belo Jardim",
      label: "Belo Jardim",
      ibge: 2601706,
    },
    {
      value: "Betânia",
      label: "Betânia",
      ibge: 2601805,
    },
    {
      value: "Bezerros",
      label: "Bezerros",
      ibge: 2601904,
    },
    {
      value: "Bodocó",
      label: "Bodocó",
      ibge: 2602001,
    },
    {
      value: "Bom Conselho",
      label: "Bom Conselho",
      ibge: 2602100,
    },
    {
      value: "Bom Jardim",
      label: "Bom Jardim",
      ibge: 2602209,
    },
    {
      value: "Bonito",
      label: "Bonito",
      ibge: 2602308,
    },
    {
      value: "Brejão",
      label: "Brejão",
      ibge: 2602407,
    },
    {
      value: "Brejinho",
      label: "Brejinho",
      ibge: 2602506,
    },
    {
      value: "Brejo da Madre de Deus",
      label: "Brejo da Madre de Deus",
      ibge: 2602605,
    },
    {
      value: "Buenos Aires",
      label: "Buenos Aires",
      ibge: 2602704,
    },
    {
      value: "Buíque",
      label: "Buíque",
      ibge: 2602803,
    },
    {
      value: "Cabo de Santo Agostinho",
      label: "Cabo de Santo Agostinho",
      ibge: 2602902,
    },
    {
      value: "Cabrobó",
      label: "Cabrobó",
      ibge: 2603009,
    },
    {
      value: "Cachoeirinha",
      label: "Cachoeirinha",
      ibge: 2603108,
    },
    {
      value: "Caetés",
      label: "Caetés",
      ibge: 2603207,
    },
    {
      value: "Calçado",
      label: "Calçado",
      ibge: 2603306,
    },
    {
      value: "Calumbi",
      label: "Calumbi",
      ibge: 2603405,
    },
    {
      value: "Camaragibe",
      label: "Camaragibe",
      ibge: 2603454,
    },
    {
      value: "Camocim de São Félix",
      label: "Camocim de São Félix",
      ibge: 2603504,
    },
    {
      value: "Camutanga",
      label: "Camutanga",
      ibge: 2603603,
    },
    {
      value: "Canhotinho",
      label: "Canhotinho",
      ibge: 2603702,
    },
    {
      value: "Capoeiras",
      label: "Capoeiras",
      ibge: 2603801,
    },
    {
      value: "Carnaíba",
      label: "Carnaíba",
      ibge: 2603900,
    },
    {
      value: "Carnaubeira da Penha",
      label: "Carnaubeira da Penha",
      ibge: 2603926,
    },
    {
      value: "Carpina",
      label: "Carpina",
      ibge: 2604007,
    },
    {
      value: "Caruaru",
      label: "Caruaru",
      ibge: 2604106,
    },
    {
      value: "Casinhas",
      label: "Casinhas",
      ibge: 2604155,
    },
    {
      value: "Catende",
      label: "Catende",
      ibge: 2604205,
    },
    {
      value: "Cedro",
      label: "Cedro",
      ibge: 2604304,
    },
    {
      value: "Chã de Alegria",
      label: "Chã de Alegria",
      ibge: 2604403,
    },
    {
      value: "Chã Grande",
      label: "Chã Grande",
      ibge: 2604502,
    },
    {
      value: "Condado",
      label: "Condado",
      ibge: 2604601,
    },
    {
      value: "Correntes",
      label: "Correntes",
      ibge: 2604700,
    },
    {
      value: "Cortês",
      label: "Cortês",
      ibge: 2604809,
    },
    {
      value: "Cumaru",
      label: "Cumaru",
      ibge: 2604908,
    },
    {
      value: "Cupira",
      label: "Cupira",
      ibge: 2605004,
    },
    {
      value: "Custódia",
      label: "Custódia",
      ibge: 2605103,
    },
    {
      value: "Dormentes",
      label: "Dormentes",
      ibge: 2605152,
    },
    {
      value: "Escada",
      label: "Escada",
      ibge: 2605202,
    },
    {
      value: "Exu",
      label: "Exu",
      ibge: 2605301,
    },
    {
      value: "Feira Nova",
      label: "Feira Nova",
      ibge: 2605400,
    },
    {
      value: "Fernando de Noronha",
      label: "Fernando de Noronha",
      ibge: 2605459,
    },
    {
      value: "Ferreiros",
      label: "Ferreiros",
      ibge: 2605509,
    },
    {
      value: "Flores",
      label: "Flores",
      ibge: 2605608,
    },
    {
      value: "Floresta",
      label: "Floresta",
      ibge: 2605707,
    },
    {
      value: "Frei Miguelinho",
      label: "Frei Miguelinho",
      ibge: 2605806,
    },
    {
      value: "Gameleira",
      label: "Gameleira",
      ibge: 2605905,
    },
    {
      value: "Garanhuns",
      label: "Garanhuns",
      ibge: 2606002,
    },
    {
      value: "Glória do Goitá",
      label: "Glória do Goitá",
      ibge: 2606101,
    },
    {
      value: "Goiana",
      label: "Goiana",
      ibge: 2606200,
    },
    {
      value: "Granito",
      label: "Granito",
      ibge: 2606309,
    },
    {
      value: "Gravatá",
      label: "Gravatá",
      ibge: 2606408,
    },
    {
      value: "Iati",
      label: "Iati",
      ibge: 2606507,
    },
    {
      value: "Ibimirim",
      label: "Ibimirim",
      ibge: 2606606,
    },
    {
      value: "Ibirajuba",
      label: "Ibirajuba",
      ibge: 2606705,
    },
    {
      value: "Igarassu",
      label: "Igarassu",
      ibge: 2606804,
    },
    {
      value: "Iguaraci",
      label: "Iguaraci",
    },
    {
      value: "Inajá",
      label: "Inajá",
      ibge: 2607000,
    },
    {
      value: "Ingazeira",
      label: "Ingazeira",
      ibge: 2607109,
    },
    {
      value: "Ipojuca",
      label: "Ipojuca",
      ibge: 2607208,
    },
    {
      value: "Ipubi",
      label: "Ipubi",
      ibge: 2607307,
    },
    {
      value: "Itacuruba",
      label: "Itacuruba",
      ibge: 2607406,
    },
    {
      value: "Itaíba",
      label: "Itaíba",
      ibge: 2607505,
    },
    {
      value: "Itamaracá",
      label: "Itamaracá",
    },
    {
      value: "Itambé",
      label: "Itambé",
      ibge: 2607653,
    },
    {
      value: "Itapetim",
      label: "Itapetim",
      ibge: 2607703,
    },
    {
      value: "Itapissuma",
      label: "Itapissuma",
      ibge: 2607752,
    },
    {
      value: "Itaquitinga",
      label: "Itaquitinga",
      ibge: 2607802,
    },
    {
      value: "Jaboatão dos Guararapes",
      label: "Jaboatão dos Guararapes",
      ibge: 2607901,
    },
    {
      value: "Jaqueira",
      label: "Jaqueira",
      ibge: 2607950,
    },
    {
      value: "Jataúba",
      label: "Jataúba",
      ibge: 2608008,
    },
    {
      value: "Jatobá",
      label: "Jatobá",
      ibge: 2608057,
    },
    {
      value: "João Alfredo",
      label: "João Alfredo",
      ibge: 2608107,
    },
    {
      value: "Joaquim Nabuco",
      label: "Joaquim Nabuco",
      ibge: 2608206,
    },
    {
      value: "Jucati",
      label: "Jucati",
      ibge: 2608255,
    },
    {
      value: "Jupi",
      label: "Jupi",
      ibge: 2608305,
    },
    {
      value: "Jurema",
      label: "Jurema",
      ibge: 2608404,
    },
    {
      value: "Lagoa do Carro",
      label: "Lagoa do Carro",
      ibge: 2608453,
    },
    {
      value: "Lagoa do Itaenga",
      label: "Lagoa do Itaenga",
    },
    {
      value: "Lagoa do Ouro",
      label: "Lagoa do Ouro",
      ibge: 2608602,
    },
    {
      value: "Lagoa dos Gatos",
      label: "Lagoa dos Gatos",
      ibge: 2608701,
    },
    {
      value: "Lagoa Grande",
      label: "Lagoa Grande",
      ibge: 2608750,
    },
    {
      value: "Lajedo",
      label: "Lajedo",
      ibge: 2608800,
    },
    {
      value: "Limoeiro",
      label: "Limoeiro",
      ibge: 2608909,
    },
    {
      value: "Macaparana",
      label: "Macaparana",
      ibge: 2609006,
    },
    {
      value: "Machados",
      label: "Machados",
      ibge: 2609105,
    },
    {
      value: "Manari",
      label: "Manari",
      ibge: 2609154,
    },
    {
      value: "Maraial",
      label: "Maraial",
      ibge: 2609204,
    },
    {
      value: "Mirandiba",
      label: "Mirandiba",
      ibge: 2609303,
    },
    {
      value: "Moreilândia",
      label: "Moreilândia",
      ibge: 2614303,
    },
    {
      value: "Moreno",
      label: "Moreno",
      ibge: 2609402,
    },
    {
      value: "Nazaré da Mata",
      label: "Nazaré da Mata",
      ibge: 2609501,
    },
    {
      value: "Olinda",
      label: "Olinda",
      ibge: 2609600,
    },
    {
      value: "Orobó",
      label: "Orobó",
      ibge: 2609709,
    },
    {
      value: "Orocó",
      label: "Orocó",
      ibge: 2609808,
    },
    {
      value: "Ouricuri",
      label: "Ouricuri",
      ibge: 2609907,
    },
    {
      value: "Palmares",
      label: "Palmares",
      ibge: 2610004,
    },
    {
      value: "Palmeirina",
      label: "Palmeirina",
      ibge: 2610103,
    },
    {
      value: "Panelas",
      label: "Panelas",
      ibge: 2610202,
    },
    {
      value: "Paranatama",
      label: "Paranatama",
      ibge: 2610301,
    },
    {
      value: "Parnamirim",
      label: "Parnamirim",
      ibge: 2610400,
    },
    {
      value: "Passira",
      label: "Passira",
      ibge: 2610509,
    },
    {
      value: "Paudalho",
      label: "Paudalho",
      ibge: 2610608,
    },
    {
      value: "Paulista",
      label: "Paulista",
      ibge: 2610707,
    },
    {
      value: "Pedra",
      label: "Pedra",
      ibge: 2610806,
    },
    {
      value: "Pesqueira",
      label: "Pesqueira",
      ibge: 2610905,
    },
    {
      value: "Petrolândia",
      label: "Petrolândia",
      ibge: 2611002,
    },
    {
      value: "Petrolina",
      label: "Petrolina",
      ibge: 2611101,
    },
    {
      value: "Poção",
      label: "Poção",
      ibge: 2611200,
    },
    {
      value: "Pombos",
      label: "Pombos",
      ibge: 2611309,
    },
    {
      value: "Primavera",
      label: "Primavera",
      ibge: 2611408,
    },
    {
      value: "Quipapá",
      label: "Quipapá",
      ibge: 2611507,
    },
    {
      value: "Quixaba",
      label: "Quixaba",
      ibge: 2611533,
    },
    {
      value: "Recife",
      label: "Recife",
      ibge: 2611606,
    },
    {
      value: "Riacho das Almas",
      label: "Riacho das Almas",
      ibge: 2611705,
    },
    {
      value: "Ribeirão",
      label: "Ribeirão",
      ibge: 2611804,
    },
    {
      value: "Rio Formoso",
      label: "Rio Formoso",
      ibge: 2611903,
    },
    {
      value: "Sairé",
      label: "Sairé",
      ibge: 2612000,
    },
    {
      value: "Salgadinho",
      label: "Salgadinho",
      ibge: 2612109,
    },
    {
      value: "Salgueiro",
      label: "Salgueiro",
      ibge: 2612208,
    },
    {
      value: "Saloá",
      label: "Saloá",
      ibge: 2612307,
    },
    {
      value: "Sanharó",
      label: "Sanharó",
      ibge: 2612406,
    },
    {
      value: "Santa Cruz",
      label: "Santa Cruz",
      ibge: 2612455,
    },
    {
      value: "Santa Cruz da Baixa Verde",
      label: "Santa Cruz da Baixa Verde",
      ibge: 2612471,
    },
    {
      value: "Santa Cruz do Capibaribe",
      label: "Santa Cruz do Capibaribe",
      ibge: 2612505,
    },
    {
      value: "Santa Filomena",
      label: "Santa Filomena",
      ibge: 2612554,
    },
    {
      value: "Santa Maria da Boa Vista",
      label: "Santa Maria da Boa Vista",
      ibge: 2612604,
    },
    {
      value: "Santa Maria do Cambucá",
      label: "Santa Maria do Cambucá",
      ibge: 2612703,
    },
    {
      value: "Santa Terezinha",
      label: "Santa Terezinha",
      ibge: 2612802,
    },
    {
      value: "São Benedito do Sul",
      label: "São Benedito do Sul",
      ibge: 2612901,
    },
    {
      value: "São Bento do Una",
      label: "São Bento do Una",
      ibge: 2613008,
    },
    {
      value: "São Caitano",
      label: "São Caitano",
      ibge: 2613107,
    },
    {
      value: "São João",
      label: "São João",
      ibge: 2613206,
    },
    {
      value: "São Joaquim do Monte",
      label: "São Joaquim do Monte",
      ibge: 2613305,
    },
    {
      value: "São José da Coroa Grande",
      label: "São José da Coroa Grande",
      ibge: 2613404,
    },
    {
      value: "São José do Belmonte",
      label: "São José do Belmonte",
      ibge: 2613503,
    },
    {
      value: "São José do Egito",
      label: "São José do Egito",
      ibge: 2613602,
    },
    {
      value: "São Lourenço da Mata",
      label: "São Lourenço da Mata",
      ibge: 2613701,
    },
    {
      value: "São Vicente Ferrer",
      label: "São Vicente Ferrer",
    },
    {
      value: "Serra Talhada",
      label: "Serra Talhada",
      ibge: 2613909,
    },
    {
      value: "Serrita",
      label: "Serrita",
      ibge: 2614006,
    },
    {
      value: "Sertânia",
      label: "Sertânia",
      ibge: 2614105,
    },
    {
      value: "Sirinhaém",
      label: "Sirinhaém",
      ibge: 2614204,
    },
    {
      value: "Solidão",
      label: "Solidão",
      ibge: 2614402,
    },
    {
      value: "Surubim",
      label: "Surubim",
      ibge: 2614501,
    },
    {
      value: "Tabira",
      label: "Tabira",
      ibge: 2614600,
    },
    {
      value: "Tacaimbó",
      label: "Tacaimbó",
      ibge: 2614709,
    },
    {
      value: "Tacaratu",
      label: "Tacaratu",
      ibge: 2614808,
    },
    {
      value: "Tamandaré",
      label: "Tamandaré",
      ibge: 2614857,
    },
    {
      value: "Taquaritinga do Norte",
      label: "Taquaritinga do Norte",
      ibge: 2615003,
    },
    {
      value: "Terezinha",
      label: "Terezinha",
      ibge: 2615102,
    },
    {
      value: "Terra Nova",
      label: "Terra Nova",
      ibge: 2615201,
    },
    {
      value: "Timbaúba",
      label: "Timbaúba",
      ibge: 2615300,
    },
    {
      value: "Toritama",
      label: "Toritama",
      ibge: 2615409,
    },
    {
      value: "Tracunhaém",
      label: "Tracunhaém",
      ibge: 2615508,
    },
    {
      value: "Trindade",
      label: "Trindade",
      ibge: 2615607,
    },
    {
      value: "Triunfo",
      label: "Triunfo",
      ibge: 2615706,
    },
    {
      value: "Tupanatinga",
      label: "Tupanatinga",
      ibge: 2615805,
    },
    {
      value: "Tuparetama",
      label: "Tuparetama",
      ibge: 2615904,
    },
    {
      value: "Venturosa",
      label: "Venturosa",
      ibge: 2616001,
    },
    {
      value: "Verdejante",
      label: "Verdejante",
      ibge: 2616100,
    },
    {
      value: "Vertente do Lério",
      label: "Vertente do Lério",
      ibge: 2616183,
    },
    {
      value: "Vertentes",
      label: "Vertentes",
      ibge: 2616209,
    },
    {
      value: "Vicência",
      label: "Vicência",
      ibge: 2616308,
    },
    {
      value: "Vitória de Santo Antão",
      label: "Vitória de Santo Antão",
      ibge: 2616407,
    },
    {
      value: "Xexéu",
      label: "Xexéu",
      ibge: 2616506,
    },
    {
      value: "Belém do São Francisco",
      label: "Belém do São Francisco",
      ibge: 2601607,
    },
    {
      value: "Iguaracy",
      label: "Iguaracy",
      ibge: 2606903,
    },
    {
      value: "Ilha de Itamaracá",
      label: "Ilha de Itamaracá",
      ibge: 2607604,
    },
    {
      value: "Lagoa de Itaenga",
      label: "Lagoa de Itaenga",
      ibge: 2608503,
    },
    {
      value: "São Vicente Férrer",
      label: "São Vicente Férrer",
      ibge: 2613800,
    },
  ],
  PI: [
    {
      value: "Acauã",
      label: "Acauã",
      ibge: 2200053,
    },
    {
      value: "Agricolândia",
      label: "Agricolândia",
      ibge: 2200103,
    },
    {
      value: "Água Branca",
      label: "Água Branca",
      ibge: 2200202,
    },
    {
      value: "Alagoinha do Piauí",
      label: "Alagoinha do Piauí",
      ibge: 2200251,
    },
    {
      value: "Alegrete do Piauí",
      label: "Alegrete do Piauí",
      ibge: 2200277,
    },
    {
      value: "Alto Longá",
      label: "Alto Longá",
      ibge: 2200301,
    },
    {
      value: "Altos",
      label: "Altos",
      ibge: 2200400,
    },
    {
      value: "Alvorada do Gurguéia",
      label: "Alvorada do Gurguéia",
      ibge: 2200459,
    },
    {
      value: "Amarante",
      label: "Amarante",
      ibge: 2200509,
    },
    {
      value: "Angical do Piauí",
      label: "Angical do Piauí",
      ibge: 2200608,
    },
    {
      value: "Anísio de Abreu",
      label: "Anísio de Abreu",
      ibge: 2200707,
    },
    {
      value: "Antônio Almeida",
      label: "Antônio Almeida",
      ibge: 2200806,
    },
    {
      value: "Aroazes",
      label: "Aroazes",
      ibge: 2200905,
    },
    {
      value: "Arraial",
      label: "Arraial",
      ibge: 2201002,
    },
    {
      value: "Assunção do Piauí",
      label: "Assunção do Piauí",
      ibge: 2201051,
    },
    {
      value: "Avelino Lopes",
      label: "Avelino Lopes",
      ibge: 2201101,
    },
    {
      value: "Baixa Grande do Ribeiro",
      label: "Baixa Grande do Ribeiro",
      ibge: 2201150,
    },
    {
      value: "Barra d'Alcântara",
      label: "Barra d'Alcântara",
      ibge: 2201176,
    },
    {
      value: "Barras",
      label: "Barras",
      ibge: 2201200,
    },
    {
      value: "Barreiras do Piauí",
      label: "Barreiras do Piauí",
      ibge: 2201309,
    },
    {
      value: "Barro Duro",
      label: "Barro Duro",
      ibge: 2201408,
    },
    {
      value: "Batalha",
      label: "Batalha",
      ibge: 2201507,
    },
    {
      value: "Bela Vista do Piauí",
      label: "Bela Vista do Piauí",
      ibge: 2201556,
    },
    {
      value: "Belém do Piauí",
      label: "Belém do Piauí",
      ibge: 2201572,
    },
    {
      value: "Beneditinos",
      label: "Beneditinos",
      ibge: 2201606,
    },
    {
      value: "Bertolínia",
      label: "Bertolínia",
      ibge: 2201705,
    },
    {
      value: "Betânia do Piauí",
      label: "Betânia do Piauí",
      ibge: 2201739,
    },
    {
      value: "Boa Hora",
      label: "Boa Hora",
      ibge: 2201770,
    },
    {
      value: "Bocaina",
      label: "Bocaina",
      ibge: 2201804,
    },
    {
      value: "Bom Jesus",
      label: "Bom Jesus",
      ibge: 2201903,
    },
    {
      value: "Bom Princípio do Piauí",
      label: "Bom Princípio do Piauí",
      ibge: 2201919,
    },
    {
      value: "Bonfim do Piauí",
      label: "Bonfim do Piauí",
      ibge: 2201929,
    },
    {
      value: "Boqueirão do Piauí",
      label: "Boqueirão do Piauí",
      ibge: 2201945,
    },
    {
      value: "Brasileira",
      label: "Brasileira",
      ibge: 2201960,
    },
    {
      value: "Brejo do Piauí",
      label: "Brejo do Piauí",
      ibge: 2201988,
    },
    {
      value: "Buriti dos Lopes",
      label: "Buriti dos Lopes",
      ibge: 2202000,
    },
    {
      value: "Buriti dos Montes",
      label: "Buriti dos Montes",
      ibge: 2202026,
    },
    {
      value: "Cabeceiras do Piauí",
      label: "Cabeceiras do Piauí",
      ibge: 2202059,
    },
    {
      value: "Cajazeiras do Piauí",
      label: "Cajazeiras do Piauí",
      ibge: 2202075,
    },
    {
      value: "Cajueiro da Praia",
      label: "Cajueiro da Praia",
      ibge: 2202083,
    },
    {
      value: "Caldeirão Grande do Piauí",
      label: "Caldeirão Grande do Piauí",
      ibge: 2202091,
    },
    {
      value: "Campinas do Piauí",
      label: "Campinas do Piauí",
      ibge: 2202109,
    },
    {
      value: "Campo Alegre do Fidalgo",
      label: "Campo Alegre do Fidalgo",
      ibge: 2202117,
    },
    {
      value: "Campo Grande do Piauí",
      label: "Campo Grande do Piauí",
      ibge: 2202133,
    },
    {
      value: "Campo Largo do Piauí",
      label: "Campo Largo do Piauí",
      ibge: 2202174,
    },
    {
      value: "Campo Maior",
      label: "Campo Maior",
      ibge: 2202208,
    },
    {
      value: "Canavieira",
      label: "Canavieira",
      ibge: 2202251,
    },
    {
      value: "Canto do Buriti",
      label: "Canto do Buriti",
      ibge: 2202307,
    },
    {
      value: "Capitão de Campos",
      label: "Capitão de Campos",
      ibge: 2202406,
    },
    {
      value: "Capitão Gervásio Oliveira",
      label: "Capitão Gervásio Oliveira",
      ibge: 2202455,
    },
    {
      value: "Caracol",
      label: "Caracol",
      ibge: 2202505,
    },
    {
      value: "Caraúbas do Piauí",
      label: "Caraúbas do Piauí",
      ibge: 2202539,
    },
    {
      value: "Caridade do Piauí",
      label: "Caridade do Piauí",
      ibge: 2202554,
    },
    {
      value: "Castelo do Piauí",
      label: "Castelo do Piauí",
      ibge: 2202604,
    },
    {
      value: "Caxingó",
      label: "Caxingó",
      ibge: 2202653,
    },
    {
      value: "Cocal",
      label: "Cocal",
      ibge: 2202703,
    },
    {
      value: "Cocal de Telha",
      label: "Cocal de Telha",
      ibge: 2202711,
    },
    {
      value: "Cocal dos Alves",
      label: "Cocal dos Alves",
      ibge: 2202729,
    },
    {
      value: "Coivaras",
      label: "Coivaras",
      ibge: 2202737,
    },
    {
      value: "Colônia do Gurguéia",
      label: "Colônia do Gurguéia",
      ibge: 2202752,
    },
    {
      value: "Colônia do Piauí",
      label: "Colônia do Piauí",
      ibge: 2202778,
    },
    {
      value: "Conceição do Canindé",
      label: "Conceição do Canindé",
      ibge: 2202802,
    },
    {
      value: "Coronel José Dias",
      label: "Coronel José Dias",
      ibge: 2202851,
    },
    {
      value: "Corrente",
      label: "Corrente",
      ibge: 2202901,
    },
    {
      value: "Cristalândia do Piauí",
      label: "Cristalândia do Piauí",
      ibge: 2203008,
    },
    {
      value: "Cristino Castro",
      label: "Cristino Castro",
      ibge: 2203107,
    },
    {
      value: "Curimatá",
      label: "Curimatá",
      ibge: 2203206,
    },
    {
      value: "Currais",
      label: "Currais",
      ibge: 2203230,
    },
    {
      value: "Curral Novo do Piauí",
      label: "Curral Novo do Piauí",
      ibge: 2203271,
    },
    {
      value: "Curralinhos",
      label: "Curralinhos",
      ibge: 2203255,
    },
    {
      value: "Demerval Lobão",
      label: "Demerval Lobão",
      ibge: 2203305,
    },
    {
      value: "Dirceu Arcoverde",
      label: "Dirceu Arcoverde",
      ibge: 2203354,
    },
    {
      value: "Dom Expedito Lopes",
      label: "Dom Expedito Lopes",
      ibge: 2203404,
    },
    {
      value: "Dom Inocêncio",
      label: "Dom Inocêncio",
      ibge: 2203453,
    },
    {
      value: "Domingos Mourão",
      label: "Domingos Mourão",
      ibge: 2203420,
    },
    {
      value: "Elesbão Veloso",
      label: "Elesbão Veloso",
      ibge: 2203503,
    },
    {
      value: "Eliseu Martins",
      label: "Eliseu Martins",
      ibge: 2203602,
    },
    {
      value: "Esperantina",
      label: "Esperantina",
      ibge: 2203701,
    },
    {
      value: "Fartura do Piauí",
      label: "Fartura do Piauí",
      ibge: 2203750,
    },
    {
      value: "Flores do Piauí",
      label: "Flores do Piauí",
      ibge: 2203800,
    },
    {
      value: "Floresta do Piauí",
      label: "Floresta do Piauí",
      ibge: 2203859,
    },
    {
      value: "Floriano",
      label: "Floriano",
      ibge: 2203909,
    },
    {
      value: "Francinópolis",
      label: "Francinópolis",
      ibge: 2204006,
    },
    {
      value: "Francisco Ayres",
      label: "Francisco Ayres",
      ibge: 2204105,
    },
    {
      value: "Francisco Macedo",
      label: "Francisco Macedo",
      ibge: 2204154,
    },
    {
      value: "Francisco Santos",
      label: "Francisco Santos",
      ibge: 2204204,
    },
    {
      value: "Fronteiras",
      label: "Fronteiras",
      ibge: 2204303,
    },
    {
      value: "Geminiano",
      label: "Geminiano",
      ibge: 2204352,
    },
    {
      value: "Gilbués",
      label: "Gilbués",
      ibge: 2204402,
    },
    {
      value: "Guadalupe",
      label: "Guadalupe",
      ibge: 2204501,
    },
    {
      value: "Guaribas",
      label: "Guaribas",
      ibge: 2204550,
    },
    {
      value: "Hugo Napoleão",
      label: "Hugo Napoleão",
      ibge: 2204600,
    },
    {
      value: "Ilha Grande",
      label: "Ilha Grande",
      ibge: 2204659,
    },
    {
      value: "Inhuma",
      label: "Inhuma",
      ibge: 2204709,
    },
    {
      value: "Ipiranga do Piauí",
      label: "Ipiranga do Piauí",
      ibge: 2204808,
    },
    {
      value: "Isaías Coelho",
      label: "Isaías Coelho",
      ibge: 2204907,
    },
    {
      value: "Itainópolis",
      label: "Itainópolis",
      ibge: 2205003,
    },
    {
      value: "Itaueira",
      label: "Itaueira",
      ibge: 2205102,
    },
    {
      value: "Jacobina do Piauí",
      label: "Jacobina do Piauí",
      ibge: 2205151,
    },
    {
      value: "Jaicós",
      label: "Jaicós",
      ibge: 2205201,
    },
    {
      value: "Jardim do Mulato",
      label: "Jardim do Mulato",
      ibge: 2205250,
    },
    {
      value: "Jatobá do Piauí",
      label: "Jatobá do Piauí",
      ibge: 2205276,
    },
    {
      value: "Jerumenha",
      label: "Jerumenha",
      ibge: 2205300,
    },
    {
      value: "João Costa",
      label: "João Costa",
      ibge: 2205359,
    },
    {
      value: "Joaquim Pires",
      label: "Joaquim Pires",
      ibge: 2205409,
    },
    {
      value: "Joca Marques",
      label: "Joca Marques",
      ibge: 2205458,
    },
    {
      value: "José de Freitas",
      label: "José de Freitas",
      ibge: 2205508,
    },
    {
      value: "Juazeiro do Piauí",
      label: "Juazeiro do Piauí",
      ibge: 2205516,
    },
    {
      value: "Júlio Borges",
      label: "Júlio Borges",
      ibge: 2205524,
    },
    {
      value: "Jurema",
      label: "Jurema",
      ibge: 2205532,
    },
    {
      value: "Lagoa Alegre",
      label: "Lagoa Alegre",
      ibge: 2205557,
    },
    {
      value: "Lagoa de São Francisco",
      label: "Lagoa de São Francisco",
      ibge: 2205573,
    },
    {
      value: "Lagoa do Barro do Piauí",
      label: "Lagoa do Barro do Piauí",
      ibge: 2205565,
    },
    {
      value: "Lagoa do Piauí",
      label: "Lagoa do Piauí",
      ibge: 2205581,
    },
    {
      value: "Lagoa do Sítio",
      label: "Lagoa do Sítio",
      ibge: 2205599,
    },
    {
      value: "Lagoinha do Piauí",
      label: "Lagoinha do Piauí",
      ibge: 2205540,
    },
    {
      value: "Landri Sales",
      label: "Landri Sales",
      ibge: 2205607,
    },
    {
      value: "Luís Correia",
      label: "Luís Correia",
      ibge: 2205706,
    },
    {
      value: "Luzilândia",
      label: "Luzilândia",
      ibge: 2205805,
    },
    {
      value: "Madeiro",
      label: "Madeiro",
      ibge: 2205854,
    },
    {
      value: "Manoel Emídio",
      label: "Manoel Emídio",
      ibge: 2205904,
    },
    {
      value: "Marcolândia",
      label: "Marcolândia",
      ibge: 2205953,
    },
    {
      value: "Marcos Parente",
      label: "Marcos Parente",
      ibge: 2206001,
    },
    {
      value: "Massapê do Piauí",
      label: "Massapê do Piauí",
      ibge: 2206050,
    },
    {
      value: "Matias Olímpio",
      label: "Matias Olímpio",
      ibge: 2206100,
    },
    {
      value: "Miguel Alves",
      label: "Miguel Alves",
      ibge: 2206209,
    },
    {
      value: "Miguel Leão",
      label: "Miguel Leão",
      ibge: 2206308,
    },
    {
      value: "Milton Brandão",
      label: "Milton Brandão",
      ibge: 2206357,
    },
    {
      value: "Monsenhor Gil",
      label: "Monsenhor Gil",
      ibge: 2206407,
    },
    {
      value: "Monsenhor Hipólito",
      label: "Monsenhor Hipólito",
      ibge: 2206506,
    },
    {
      value: "Monte Alegre do Piauí",
      label: "Monte Alegre do Piauí",
      ibge: 2206605,
    },
    {
      value: "Morro Cabeça no Tempo",
      label: "Morro Cabeça no Tempo",
      ibge: 2206654,
    },
    {
      value: "Morro do Chapéu do Piauí",
      label: "Morro do Chapéu do Piauí",
      ibge: 2206670,
    },
    {
      value: "Murici dos Portelas",
      label: "Murici dos Portelas",
      ibge: 2206696,
    },
    {
      value: "Nazaré do Piauí",
      label: "Nazaré do Piauí",
      ibge: 2206704,
    },
    {
      value: "Nossa Senhora de Nazaré",
      label: "Nossa Senhora de Nazaré",
      ibge: 2206753,
    },
    {
      value: "Nossa Senhora dos Remédios",
      label: "Nossa Senhora dos Remédios",
      ibge: 2206803,
    },
    {
      value: "Nova Santa Rita",
      label: "Nova Santa Rita",
      ibge: 2207959,
    },
    {
      value: "Novo Oriente do Piauí",
      label: "Novo Oriente do Piauí",
      ibge: 2206902,
    },
    {
      value: "Novo Santo Antônio",
      label: "Novo Santo Antônio",
      ibge: 2206951,
    },
    {
      value: "Oeiras",
      label: "Oeiras",
      ibge: 2207009,
    },
    {
      value: "Olho d'Água do Piauí",
      label: "Olho d'Água do Piauí",
      ibge: 2207108,
    },
    {
      value: "Padre Marcos",
      label: "Padre Marcos",
      ibge: 2207207,
    },
    {
      value: "Paes Landim",
      label: "Paes Landim",
      ibge: 2207306,
    },
    {
      value: "Pajeú do Piauí",
      label: "Pajeú do Piauí",
      ibge: 2207355,
    },
    {
      value: "Palmeira do Piauí",
      label: "Palmeira do Piauí",
      ibge: 2207405,
    },
    {
      value: "Palmeirais",
      label: "Palmeirais",
      ibge: 2207504,
    },
    {
      value: "Paquetá",
      label: "Paquetá",
      ibge: 2207553,
    },
    {
      value: "Parnaguá",
      label: "Parnaguá",
      ibge: 2207603,
    },
    {
      value: "Parnaíba",
      label: "Parnaíba",
      ibge: 2207702,
    },
    {
      value: "Passagem Franca do Piauí",
      label: "Passagem Franca do Piauí",
      ibge: 2207751,
    },
    {
      value: "Patos do Piauí",
      label: "Patos do Piauí",
      ibge: 2207777,
    },
    {
      value: "Pau d'Arco do Piauí",
      label: "Pau d'Arco do Piauí",
      ibge: 2207793,
    },
    {
      value: "Paulistana",
      label: "Paulistana",
      ibge: 2207801,
    },
    {
      value: "Pavussu",
      label: "Pavussu",
      ibge: 2207850,
    },
    {
      value: "Pedro II",
      label: "Pedro II",
      ibge: 2207900,
    },
    {
      value: "Pedro Laurentino",
      label: "Pedro Laurentino",
      ibge: 2207934,
    },
    {
      value: "Picos",
      label: "Picos",
      ibge: 2208007,
    },
    {
      value: "Pimenteiras",
      label: "Pimenteiras",
      ibge: 2208106,
    },
    {
      value: "Pio IX",
      label: "Pio IX",
      ibge: 2208205,
    },
    {
      value: "Piracuruca",
      label: "Piracuruca",
      ibge: 2208304,
    },
    {
      value: "Piripiri",
      label: "Piripiri",
      ibge: 2208403,
    },
    {
      value: "Porto",
      label: "Porto",
      ibge: 2208502,
    },
    {
      value: "Porto Alegre do Piauí",
      label: "Porto Alegre do Piauí",
      ibge: 2208551,
    },
    {
      value: "Prata do Piauí",
      label: "Prata do Piauí",
      ibge: 2208601,
    },
    {
      value: "Queimada Nova",
      label: "Queimada Nova",
      ibge: 2208650,
    },
    {
      value: "Redenção do Gurguéia",
      label: "Redenção do Gurguéia",
      ibge: 2208700,
    },
    {
      value: "Regeneração",
      label: "Regeneração",
      ibge: 2208809,
    },
    {
      value: "Riacho Frio",
      label: "Riacho Frio",
      ibge: 2208858,
    },
    {
      value: "Ribeira do Piauí",
      label: "Ribeira do Piauí",
      ibge: 2208874,
    },
    {
      value: "Ribeiro Gonçalves",
      label: "Ribeiro Gonçalves",
      ibge: 2208908,
    },
    {
      value: "Rio Grande do Piauí",
      label: "Rio Grande do Piauí",
      ibge: 2209005,
    },
    {
      value: "Santa Cruz do Piauí",
      label: "Santa Cruz do Piauí",
      ibge: 2209104,
    },
    {
      value: "Santa Cruz dos Milagres",
      label: "Santa Cruz dos Milagres",
      ibge: 2209153,
    },
    {
      value: "Santa Filomena",
      label: "Santa Filomena",
      ibge: 2209203,
    },
    {
      value: "Santa Luz",
      label: "Santa Luz",
      ibge: 2209302,
    },
    {
      value: "Santa Rosa do Piauí",
      label: "Santa Rosa do Piauí",
      ibge: 2209377,
    },
    {
      value: "Santana do Piauí",
      label: "Santana do Piauí",
      ibge: 2209351,
    },
    {
      value: "Santo Antônio de Lisboa",
      label: "Santo Antônio de Lisboa",
      ibge: 2209401,
    },
    {
      value: "Santo Antônio dos Milagres",
      label: "Santo Antônio dos Milagres",
      ibge: 2209450,
    },
    {
      value: "Santo Inácio do Piauí",
      label: "Santo Inácio do Piauí",
      ibge: 2209500,
    },
    {
      value: "São Braz do Piauí",
      label: "São Braz do Piauí",
      ibge: 2209559,
    },
    {
      value: "São Félix do Piauí",
      label: "São Félix do Piauí",
      ibge: 2209609,
    },
    {
      value: "São Francisco de Assis do Piauí",
      label: "São Francisco de Assis do Piauí",
      ibge: 2209658,
    },
    {
      value: "São Francisco do Piauí",
      label: "São Francisco do Piauí",
      ibge: 2209708,
    },
    {
      value: "São Gonçalo do Gurguéia",
      label: "São Gonçalo do Gurguéia",
      ibge: 2209757,
    },
    {
      value: "São Gonçalo do Piauí",
      label: "São Gonçalo do Piauí",
      ibge: 2209807,
    },
    {
      value: "São João da Canabrava",
      label: "São João da Canabrava",
      ibge: 2209856,
    },
    {
      value: "São João da Fronteira",
      label: "São João da Fronteira",
      ibge: 2209872,
    },
    {
      value: "São João da Serra",
      label: "São João da Serra",
      ibge: 2209906,
    },
    {
      value: "São João da Varjota",
      label: "São João da Varjota",
      ibge: 2209955,
    },
    {
      value: "São João do Arraial",
      label: "São João do Arraial",
      ibge: 2209971,
    },
    {
      value: "São João do Piauí",
      label: "São João do Piauí",
      ibge: 2210003,
    },
    {
      value: "São José do Divino",
      label: "São José do Divino",
      ibge: 2210052,
    },
    {
      value: "São José do Peixe",
      label: "São José do Peixe",
      ibge: 2210102,
    },
    {
      value: "São José do Piauí",
      label: "São José do Piauí",
      ibge: 2210201,
    },
    {
      value: "São Julião",
      label: "São Julião",
      ibge: 2210300,
    },
    {
      value: "São Lourenço do Piauí",
      label: "São Lourenço do Piauí",
      ibge: 2210359,
    },
    {
      value: "São Luis do Piauí",
      label: "São Luis do Piauí",
      ibge: 2210375,
    },
    {
      value: "São Miguel da Baixa Grande",
      label: "São Miguel da Baixa Grande",
      ibge: 2210383,
    },
    {
      value: "São Miguel do Fidalgo",
      label: "São Miguel do Fidalgo",
      ibge: 2210391,
    },
    {
      value: "São Miguel do Tapuio",
      label: "São Miguel do Tapuio",
      ibge: 2210409,
    },
    {
      value: "São Pedro do Piauí",
      label: "São Pedro do Piauí",
      ibge: 2210508,
    },
    {
      value: "São Raimundo Nonato",
      label: "São Raimundo Nonato",
      ibge: 2210607,
    },
    {
      value: "Sebastião Barros",
      label: "Sebastião Barros",
      ibge: 2210623,
    },
    {
      value: "Sebastião Leal",
      label: "Sebastião Leal",
      ibge: 2210631,
    },
    {
      value: "Sigefredo Pacheco",
      label: "Sigefredo Pacheco",
      ibge: 2210656,
    },
    {
      value: "Simões",
      label: "Simões",
      ibge: 2210706,
    },
    {
      value: "Simplício Mendes",
      label: "Simplício Mendes",
      ibge: 2210805,
    },
    {
      value: "Socorro do Piauí",
      label: "Socorro do Piauí",
      ibge: 2210904,
    },
    {
      value: "Sussuapara",
      label: "Sussuapara",
      ibge: 2210938,
    },
    {
      value: "Tamboril do Piauí",
      label: "Tamboril do Piauí",
      ibge: 2210953,
    },
    {
      value: "Tanque do Piauí",
      label: "Tanque do Piauí",
      ibge: 2210979,
    },
    {
      value: "Teresina",
      label: "Teresina",
      ibge: 2211001,
    },
    {
      value: "União",
      label: "União",
      ibge: 2211100,
    },
    {
      value: "Uruçuí",
      label: "Uruçuí",
      ibge: 2211209,
    },
    {
      value: "Valença do Piauí",
      label: "Valença do Piauí",
      ibge: 2211308,
    },
    {
      value: "Várzea Branca",
      label: "Várzea Branca",
      ibge: 2211357,
    },
    {
      value: "Várzea Grande",
      label: "Várzea Grande",
      ibge: 2211407,
    },
    {
      value: "Vera Mendes",
      label: "Vera Mendes",
      ibge: 2211506,
    },
    {
      value: "Vila Nova do Piauí",
      label: "Vila Nova do Piauí",
      ibge: 2211605,
    },
    {
      value: "Wall Ferraz",
      label: "Wall Ferraz",
      ibge: 2211704,
    },
    {
      value: "Aroeiras do Itaim",
      label: "Aroeiras do Itaim",
      ibge: 2200954,
    },
    {
      value: "Nazária",
      label: "Nazária",
      ibge: 2206720,
    },
  ],
  PR: [
    {
      value: "Abatiá",
      label: "Abatiá",
      ibge: 4100103,
    },
    {
      value: "Adrianópolis",
      label: "Adrianópolis",
      ibge: 4100202,
    },
    {
      value: "Agudos do Sul",
      label: "Agudos do Sul",
      ibge: 4100301,
    },
    {
      value: "Almirante Tamandaré",
      label: "Almirante Tamandaré",
      ibge: 4100400,
    },
    {
      value: "Altamira do Paraná",
      label: "Altamira do Paraná",
      ibge: 4100459,
    },
    {
      value: "Alto Paraná",
      label: "Alto Paraná",
      ibge: 4100608,
    },
    {
      value: "Alto Piquiri",
      label: "Alto Piquiri",
      ibge: 4100707,
    },
    {
      value: "Altônia",
      label: "Altônia",
      ibge: 4100509,
    },
    {
      value: "Alvorada do Sul",
      label: "Alvorada do Sul",
      ibge: 4100806,
    },
    {
      value: "Amaporã",
      label: "Amaporã",
      ibge: 4100905,
    },
    {
      value: "Ampére",
      label: "Ampére",
      ibge: 4101002,
    },
    {
      value: "Anahy",
      label: "Anahy",
      ibge: 4101051,
    },
    {
      value: "Andirá",
      label: "Andirá",
      ibge: 4101101,
    },
    {
      value: "Ângulo",
      label: "Ângulo",
      ibge: 4101150,
    },
    {
      value: "Antonina",
      label: "Antonina",
      ibge: 4101200,
    },
    {
      value: "Antônio Olinto",
      label: "Antônio Olinto",
      ibge: 4101309,
    },
    {
      value: "Apucarana",
      label: "Apucarana",
      ibge: 4101408,
    },
    {
      value: "Arapongas",
      label: "Arapongas",
      ibge: 4101507,
    },
    {
      value: "Arapoti",
      label: "Arapoti",
      ibge: 4101606,
    },
    {
      value: "Arapuã",
      label: "Arapuã",
      ibge: 4101655,
    },
    {
      value: "Araruna",
      label: "Araruna",
      ibge: 4101705,
    },
    {
      value: "Araucária",
      label: "Araucária",
      ibge: 4101804,
    },
    {
      value: "Ariranha do Ivaí",
      label: "Ariranha do Ivaí",
      ibge: 4101853,
    },
    {
      value: "Assaí",
      label: "Assaí",
      ibge: 4101903,
    },
    {
      value: "Assis Chateaubriand",
      label: "Assis Chateaubriand",
      ibge: 4102000,
    },
    {
      value: "Astorga",
      label: "Astorga",
      ibge: 4102109,
    },
    {
      value: "Atalaia",
      label: "Atalaia",
      ibge: 4102208,
    },
    {
      value: "Balsa Nova",
      label: "Balsa Nova",
      ibge: 4102307,
    },
    {
      value: "Bandeirantes",
      label: "Bandeirantes",
      ibge: 4102406,
    },
    {
      value: "Barbosa Ferraz",
      label: "Barbosa Ferraz",
      ibge: 4102505,
    },
    {
      value: "Barra do Jacaré",
      label: "Barra do Jacaré",
      ibge: 4102703,
    },
    {
      value: "Barracão",
      label: "Barracão",
      ibge: 4102604,
    },
    {
      value: "Bela Vista da Caroba",
      label: "Bela Vista da Caroba",
      ibge: 4102752,
    },
    {
      value: "Bela Vista do Paraíso",
      label: "Bela Vista do Paraíso",
      ibge: 4102802,
    },
    {
      value: "Bituruna",
      label: "Bituruna",
      ibge: 4102901,
    },
    {
      value: "Boa Esperança",
      label: "Boa Esperança",
      ibge: 4103008,
    },
    {
      value: "Boa Esperança do Iguaçu",
      label: "Boa Esperança do Iguaçu",
      ibge: 4103024,
    },
    {
      value: "Boa Ventura de São Roque",
      label: "Boa Ventura de São Roque",
      ibge: 4103040,
    },
    {
      value: "Boa Vista da Aparecida",
      label: "Boa Vista da Aparecida",
      ibge: 4103057,
    },
    {
      value: "Bocaiúva do Sul",
      label: "Bocaiúva do Sul",
      ibge: 4103107,
    },
    {
      value: "Bom Jesus do Sul",
      label: "Bom Jesus do Sul",
      ibge: 4103156,
    },
    {
      value: "Bom Sucesso",
      label: "Bom Sucesso",
      ibge: 4103206,
    },
    {
      value: "Bom Sucesso do Sul",
      label: "Bom Sucesso do Sul",
      ibge: 4103222,
    },
    {
      value: "Borrazópolis",
      label: "Borrazópolis",
      ibge: 4103305,
    },
    {
      value: "Braganey",
      label: "Braganey",
      ibge: 4103354,
    },
    {
      value: "Brasilândia do Sul",
      label: "Brasilândia do Sul",
      ibge: 4103370,
    },
    {
      value: "Cafeara",
      label: "Cafeara",
      ibge: 4103404,
    },
    {
      value: "Cafelândia",
      label: "Cafelândia",
      ibge: 4103453,
    },
    {
      value: "Cafezal do Sul",
      label: "Cafezal do Sul",
      ibge: 4103479,
    },
    {
      value: "Califórnia",
      label: "Califórnia",
      ibge: 4103503,
    },
    {
      value: "Cambará",
      label: "Cambará",
      ibge: 4103602,
    },
    {
      value: "Cambé",
      label: "Cambé",
      ibge: 4103701,
    },
    {
      value: "Cambira",
      label: "Cambira",
      ibge: 4103800,
    },
    {
      value: "Campina da Lagoa",
      label: "Campina da Lagoa",
      ibge: 4103909,
    },
    {
      value: "Campina do Simão",
      label: "Campina do Simão",
      ibge: 4103958,
    },
    {
      value: "Campina Grande do Sul",
      label: "Campina Grande do Sul",
      ibge: 4104006,
    },
    {
      value: "Campo Bonito",
      label: "Campo Bonito",
      ibge: 4104055,
    },
    {
      value: "Campo do Tenente",
      label: "Campo do Tenente",
      ibge: 4104105,
    },
    {
      value: "Campo Largo",
      label: "Campo Largo",
      ibge: 4104204,
    },
    {
      value: "Campo Magro",
      label: "Campo Magro",
      ibge: 4104253,
    },
    {
      value: "Campo Mourão",
      label: "Campo Mourão",
      ibge: 4104303,
    },
    {
      value: "Cândido de Abreu",
      label: "Cândido de Abreu",
      ibge: 4104402,
    },
    {
      value: "Candói",
      label: "Candói",
      ibge: 4104428,
    },
    {
      value: "Cantagalo",
      label: "Cantagalo",
      ibge: 4104451,
    },
    {
      value: "Capanema",
      label: "Capanema",
      ibge: 4104501,
    },
    {
      value: "Capitão Leônidas Marques",
      label: "Capitão Leônidas Marques",
      ibge: 4104600,
    },
    {
      value: "Carambeí",
      label: "Carambeí",
      ibge: 4104659,
    },
    {
      value: "Carlópolis",
      label: "Carlópolis",
      ibge: 4104709,
    },
    {
      value: "Cascavel",
      label: "Cascavel",
      ibge: 4104808,
    },
    {
      value: "Castro",
      label: "Castro",
      ibge: 4104907,
    },
    {
      value: "Catanduvas",
      label: "Catanduvas",
      ibge: 4105003,
    },
    {
      value: "Centenário do Sul",
      label: "Centenário do Sul",
      ibge: 4105102,
    },
    {
      value: "Cerro Azul",
      label: "Cerro Azul",
      ibge: 4105201,
    },
    {
      value: "Céu Azul",
      label: "Céu Azul",
      ibge: 4105300,
    },
    {
      value: "Chopinzinho",
      label: "Chopinzinho",
      ibge: 4105409,
    },
    {
      value: "Cianorte",
      label: "Cianorte",
      ibge: 4105508,
    },
    {
      value: "Cidade Gaúcha",
      label: "Cidade Gaúcha",
      ibge: 4105607,
    },
    {
      value: "Clevelândia",
      label: "Clevelândia",
      ibge: 4105706,
    },
    {
      value: "Colombo",
      label: "Colombo",
      ibge: 4105805,
    },
    {
      value: "Colorado",
      label: "Colorado",
      ibge: 4105904,
    },
    {
      value: "Congonhinhas",
      label: "Congonhinhas",
      ibge: 4106001,
    },
    {
      value: "Conselheiro Mairinck",
      label: "Conselheiro Mairinck",
      ibge: 4106100,
    },
    {
      value: "Contenda",
      label: "Contenda",
      ibge: 4106209,
    },
    {
      value: "Corbélia",
      label: "Corbélia",
      ibge: 4106308,
    },
    {
      value: "Cornélio Procópio",
      label: "Cornélio Procópio",
      ibge: 4106407,
    },
    {
      value: "Coronel Domingos Soares",
      label: "Coronel Domingos Soares",
      ibge: 4106456,
    },
    {
      value: "Coronel Vivida",
      label: "Coronel Vivida",
      ibge: 4106506,
    },
    {
      value: "Corumbataí do Sul",
      label: "Corumbataí do Sul",
      ibge: 4106555,
    },
    {
      value: "Cruz Machado",
      label: "Cruz Machado",
      ibge: 4106803,
    },
    {
      value: "Cruzeiro do Iguaçu",
      label: "Cruzeiro do Iguaçu",
      ibge: 4106571,
    },
    {
      value: "Cruzeiro do Oeste",
      label: "Cruzeiro do Oeste",
      ibge: 4106605,
    },
    {
      value: "Cruzeiro do Sul",
      label: "Cruzeiro do Sul",
      ibge: 4106704,
    },
    {
      value: "Cruzmaltina",
      label: "Cruzmaltina",
      ibge: 4106852,
    },
    {
      value: "Curitiba",
      label: "Curitiba",
      ibge: 4106902,
    },
    {
      value: "Curiúva",
      label: "Curiúva",
      ibge: 4107009,
    },
    {
      value: "Diamante d'Oeste",
      label: "Diamante d'Oeste",
      ibge: 4107157,
    },
    {
      value: "Diamante do Norte",
      label: "Diamante do Norte",
      ibge: 4107108,
    },
    {
      value: "Diamante do Sul",
      label: "Diamante do Sul",
      ibge: 4107124,
    },
    {
      value: "Dois Vizinhos",
      label: "Dois Vizinhos",
      ibge: 4107207,
    },
    {
      value: "Douradina",
      label: "Douradina",
      ibge: 4107256,
    },
    {
      value: "Doutor Camargo",
      label: "Doutor Camargo",
      ibge: 4107306,
    },
    {
      value: "Doutor Ulysses",
      label: "Doutor Ulysses",
      ibge: 4128633,
    },
    {
      value: "Enéas Marques",
      label: "Enéas Marques",
      ibge: 4107405,
    },
    {
      value: "Engenheiro Beltrão",
      label: "Engenheiro Beltrão",
      ibge: 4107504,
    },
    {
      value: "Entre Rios do Oeste",
      label: "Entre Rios do Oeste",
      ibge: 4107538,
    },
    {
      value: "Esperança Nova",
      label: "Esperança Nova",
      ibge: 4107520,
    },
    {
      value: "Espigão Alto do Iguaçu",
      label: "Espigão Alto do Iguaçu",
      ibge: 4107546,
    },
    {
      value: "Farol",
      label: "Farol",
      ibge: 4107553,
    },
    {
      value: "Faxinal",
      label: "Faxinal",
      ibge: 4107603,
    },
    {
      value: "Fazenda Rio Grande",
      label: "Fazenda Rio Grande",
      ibge: 4107652,
    },
    {
      value: "Fênix",
      label: "Fênix",
      ibge: 4107702,
    },
    {
      value: "Fernandes Pinheiro",
      label: "Fernandes Pinheiro",
      ibge: 4107736,
    },
    {
      value: "Figueira",
      label: "Figueira",
      ibge: 4107751,
    },
    {
      value: "Flor da Serra do Sul",
      label: "Flor da Serra do Sul",
      ibge: 4107850,
    },
    {
      value: "Floraí",
      label: "Floraí",
      ibge: 4107801,
    },
    {
      value: "Floresta",
      label: "Floresta",
      ibge: 4107900,
    },
    {
      value: "Florestópolis",
      label: "Florestópolis",
      ibge: 4108007,
    },
    {
      value: "Flórida",
      label: "Flórida",
      ibge: 4108106,
    },
    {
      value: "Formosa do Oeste",
      label: "Formosa do Oeste",
      ibge: 4108205,
    },
    {
      value: "Foz do Iguaçu",
      label: "Foz do Iguaçu",
      ibge: 4108304,
    },
    {
      value: "Foz do Jordão",
      label: "Foz do Jordão",
      ibge: 4108452,
    },
    {
      value: "Francisco Alves",
      label: "Francisco Alves",
      ibge: 4108320,
    },
    {
      value: "Francisco Beltrão",
      label: "Francisco Beltrão",
      ibge: 4108403,
    },
    {
      value: "General Carneiro",
      label: "General Carneiro",
      ibge: 4108502,
    },
    {
      value: "Godoy Moreira",
      label: "Godoy Moreira",
      ibge: 4108551,
    },
    {
      value: "Goioerê",
      label: "Goioerê",
      ibge: 4108601,
    },
    {
      value: "Goioxim",
      label: "Goioxim",
      ibge: 4108650,
    },
    {
      value: "Grandes Rios",
      label: "Grandes Rios",
      ibge: 4108700,
    },
    {
      value: "Guaíra",
      label: "Guaíra",
      ibge: 4108809,
    },
    {
      value: "Guairaçá",
      label: "Guairaçá",
      ibge: 4108908,
    },
    {
      value: "Guamiranga",
      label: "Guamiranga",
      ibge: 4108957,
    },
    {
      value: "Guapirama",
      label: "Guapirama",
      ibge: 4109005,
    },
    {
      value: "Guaporema",
      label: "Guaporema",
      ibge: 4109104,
    },
    {
      value: "Guaraci",
      label: "Guaraci",
      ibge: 4109203,
    },
    {
      value: "Guaraniaçu",
      label: "Guaraniaçu",
      ibge: 4109302,
    },
    {
      value: "Guarapuava",
      label: "Guarapuava",
      ibge: 4109401,
    },
    {
      value: "Guaraqueçaba",
      label: "Guaraqueçaba",
      ibge: 4109500,
    },
    {
      value: "Guaratuba",
      label: "Guaratuba",
      ibge: 4109609,
    },
    {
      value: "Honório Serpa",
      label: "Honório Serpa",
      ibge: 4109658,
    },
    {
      value: "Ibaiti",
      label: "Ibaiti",
      ibge: 4109708,
    },
    {
      value: "Ibema",
      label: "Ibema",
      ibge: 4109757,
    },
    {
      value: "Ibiporã",
      label: "Ibiporã",
      ibge: 4109807,
    },
    {
      value: "Icaraíma",
      label: "Icaraíma",
      ibge: 4109906,
    },
    {
      value: "Iguaraçu",
      label: "Iguaraçu",
      ibge: 4110003,
    },
    {
      value: "Iguatu",
      label: "Iguatu",
      ibge: 4110052,
    },
    {
      value: "Imbaú",
      label: "Imbaú",
      ibge: 4110078,
    },
    {
      value: "Imbituva",
      label: "Imbituva",
      ibge: 4110102,
    },
    {
      value: "Inácio Martins",
      label: "Inácio Martins",
      ibge: 4110201,
    },
    {
      value: "Inajá",
      label: "Inajá",
      ibge: 4110300,
    },
    {
      value: "Indianópolis",
      label: "Indianópolis",
      ibge: 4110409,
    },
    {
      value: "Ipiranga",
      label: "Ipiranga",
      ibge: 4110508,
    },
    {
      value: "Iporã",
      label: "Iporã",
      ibge: 4110607,
    },
    {
      value: "Iracema do Oeste",
      label: "Iracema do Oeste",
      ibge: 4110656,
    },
    {
      value: "Irati",
      label: "Irati",
      ibge: 4110706,
    },
    {
      value: "Iretama",
      label: "Iretama",
      ibge: 4110805,
    },
    {
      value: "Itaguajé",
      label: "Itaguajé",
      ibge: 4110904,
    },
    {
      value: "Itaipulândia",
      label: "Itaipulândia",
      ibge: 4110953,
    },
    {
      value: "Itambaracá",
      label: "Itambaracá",
      ibge: 4111001,
    },
    {
      value: "Itambé",
      label: "Itambé",
      ibge: 4111100,
    },
    {
      value: "Itapejara d'Oeste",
      label: "Itapejara d'Oeste",
      ibge: 4111209,
    },
    {
      value: "Itaperuçu",
      label: "Itaperuçu",
      ibge: 4111258,
    },
    {
      value: "Itaúna do Sul",
      label: "Itaúna do Sul",
      ibge: 4111308,
    },
    {
      value: "Ivaí",
      label: "Ivaí",
      ibge: 4111407,
    },
    {
      value: "Ivaiporã",
      label: "Ivaiporã",
      ibge: 4111506,
    },
    {
      value: "Ivaté",
      label: "Ivaté",
      ibge: 4111555,
    },
    {
      value: "Ivatuba",
      label: "Ivatuba",
      ibge: 4111605,
    },
    {
      value: "Jaboti",
      label: "Jaboti",
      ibge: 4111704,
    },
    {
      value: "Jacarezinho",
      label: "Jacarezinho",
      ibge: 4111803,
    },
    {
      value: "Jaguapitã",
      label: "Jaguapitã",
      ibge: 4111902,
    },
    {
      value: "Jaguariaíva",
      label: "Jaguariaíva",
      ibge: 4112009,
    },
    {
      value: "Jandaia do Sul",
      label: "Jandaia do Sul",
      ibge: 4112108,
    },
    {
      value: "Janiópolis",
      label: "Janiópolis",
      ibge: 4112207,
    },
    {
      value: "Japira",
      label: "Japira",
      ibge: 4112306,
    },
    {
      value: "Japurá",
      label: "Japurá",
      ibge: 4112405,
    },
    {
      value: "Jardim Alegre",
      label: "Jardim Alegre",
      ibge: 4112504,
    },
    {
      value: "Jardim Olinda",
      label: "Jardim Olinda",
      ibge: 4112603,
    },
    {
      value: "Jataizinho",
      label: "Jataizinho",
      ibge: 4112702,
    },
    {
      value: "Jesuítas",
      label: "Jesuítas",
      ibge: 4112751,
    },
    {
      value: "Joaquim Távora",
      label: "Joaquim Távora",
      ibge: 4112801,
    },
    {
      value: "Jundiaí do Sul",
      label: "Jundiaí do Sul",
      ibge: 4112900,
    },
    {
      value: "Juranda",
      label: "Juranda",
      ibge: 4112959,
    },
    {
      value: "Jussara",
      label: "Jussara",
      ibge: 4113007,
    },
    {
      value: "Kaloré",
      label: "Kaloré",
      ibge: 4113106,
    },
    {
      value: "Lapa",
      label: "Lapa",
      ibge: 4113205,
    },
    {
      value: "Laranjal",
      label: "Laranjal",
      ibge: 4113254,
    },
    {
      value: "Laranjeiras do Sul",
      label: "Laranjeiras do Sul",
      ibge: 4113304,
    },
    {
      value: "Leópolis",
      label: "Leópolis",
      ibge: 4113403,
    },
    {
      value: "Lidianópolis",
      label: "Lidianópolis",
      ibge: 4113429,
    },
    {
      value: "Lindoeste",
      label: "Lindoeste",
      ibge: 4113452,
    },
    {
      value: "Loanda",
      label: "Loanda",
      ibge: 4113502,
    },
    {
      value: "Lobato",
      label: "Lobato",
      ibge: 4113601,
    },
    {
      value: "Londrina",
      label: "Londrina",
      ibge: 4113700,
    },
    {
      value: "Luiziana",
      label: "Luiziana",
      ibge: 4113734,
    },
    {
      value: "Lunardelli",
      label: "Lunardelli",
      ibge: 4113759,
    },
    {
      value: "Lupionópolis",
      label: "Lupionópolis",
      ibge: 4113809,
    },
    {
      value: "Mallet",
      label: "Mallet",
      ibge: 4113908,
    },
    {
      value: "Mamborê",
      label: "Mamborê",
      ibge: 4114005,
    },
    {
      value: "Mandaguaçu",
      label: "Mandaguaçu",
      ibge: 4114104,
    },
    {
      value: "Mandaguari",
      label: "Mandaguari",
      ibge: 4114203,
    },
    {
      value: "Mandirituba",
      label: "Mandirituba",
      ibge: 4114302,
    },
    {
      value: "Manfrinópolis",
      label: "Manfrinópolis",
      ibge: 4114351,
    },
    {
      value: "Mangueirinha",
      label: "Mangueirinha",
      ibge: 4114401,
    },
    {
      value: "Manoel Ribas",
      label: "Manoel Ribas",
      ibge: 4114500,
    },
    {
      value: "Marechal Cândido Rondon",
      label: "Marechal Cândido Rondon",
      ibge: 4114609,
    },
    {
      value: "Maria Helena",
      label: "Maria Helena",
      ibge: 4114708,
    },
    {
      value: "Marialva",
      label: "Marialva",
      ibge: 4114807,
    },
    {
      value: "Marilândia do Sul",
      label: "Marilândia do Sul",
      ibge: 4114906,
    },
    {
      value: "Marilena",
      label: "Marilena",
      ibge: 4115002,
    },
    {
      value: "Mariluz",
      label: "Mariluz",
      ibge: 4115101,
    },
    {
      value: "Maringá",
      label: "Maringá",
      ibge: 4115200,
    },
    {
      value: "Mariópolis",
      label: "Mariópolis",
      ibge: 4115309,
    },
    {
      value: "Maripá",
      label: "Maripá",
      ibge: 4115358,
    },
    {
      value: "Marmeleiro",
      label: "Marmeleiro",
      ibge: 4115408,
    },
    {
      value: "Marquinho",
      label: "Marquinho",
      ibge: 4115457,
    },
    {
      value: "Marumbi",
      label: "Marumbi",
      ibge: 4115507,
    },
    {
      value: "Matelândia",
      label: "Matelândia",
      ibge: 4115606,
    },
    {
      value: "Matinhos",
      label: "Matinhos",
      ibge: 4115705,
    },
    {
      value: "Mato Rico",
      label: "Mato Rico",
      ibge: 4115739,
    },
    {
      value: "Mauá da Serra",
      label: "Mauá da Serra",
      ibge: 4115754,
    },
    {
      value: "Medianeira",
      label: "Medianeira",
      ibge: 4115804,
    },
    {
      value: "Mercedes",
      label: "Mercedes",
      ibge: 4115853,
    },
    {
      value: "Mirador",
      label: "Mirador",
      ibge: 4115903,
    },
    {
      value: "Miraselva",
      label: "Miraselva",
      ibge: 4116000,
    },
    {
      value: "Missal",
      label: "Missal",
      ibge: 4116059,
    },
    {
      value: "Moreira Sales",
      label: "Moreira Sales",
      ibge: 4116109,
    },
    {
      value: "Morretes",
      label: "Morretes",
      ibge: 4116208,
    },
    {
      value: "Munhoz de Melo",
      label: "Munhoz de Melo",
      ibge: 4116307,
    },
    {
      value: "Nossa Senhora das Graças",
      label: "Nossa Senhora das Graças",
      ibge: 4116406,
    },
    {
      value: "Nova Aliança do Ivaí",
      label: "Nova Aliança do Ivaí",
      ibge: 4116505,
    },
    {
      value: "Nova América da Colina",
      label: "Nova América da Colina",
      ibge: 4116604,
    },
    {
      value: "Nova Aurora",
      label: "Nova Aurora",
      ibge: 4116703,
    },
    {
      value: "Nova Cantu",
      label: "Nova Cantu",
      ibge: 4116802,
    },
    {
      value: "Nova Esperança",
      label: "Nova Esperança",
      ibge: 4116901,
    },
    {
      value: "Nova Esperança do Sudoeste",
      label: "Nova Esperança do Sudoeste",
      ibge: 4116950,
    },
    {
      value: "Nova Fátima",
      label: "Nova Fátima",
      ibge: 4117008,
    },
    {
      value: "Nova Laranjeiras",
      label: "Nova Laranjeiras",
      ibge: 4117057,
    },
    {
      value: "Nova Londrina",
      label: "Nova Londrina",
      ibge: 4117107,
    },
    {
      value: "Nova Olímpia",
      label: "Nova Olímpia",
      ibge: 4117206,
    },
    {
      value: "Nova Prata do Iguaçu",
      label: "Nova Prata do Iguaçu",
      ibge: 4117255,
    },
    {
      value: "Nova Santa Bárbara",
      label: "Nova Santa Bárbara",
      ibge: 4117214,
    },
    {
      value: "Nova Santa Rosa",
      label: "Nova Santa Rosa",
      ibge: 4117222,
    },
    {
      value: "Nova Tebas",
      label: "Nova Tebas",
      ibge: 4117271,
    },
    {
      value: "Novo Itacolomi",
      label: "Novo Itacolomi",
      ibge: 4117297,
    },
    {
      value: "Ortigueira",
      label: "Ortigueira",
      ibge: 4117305,
    },
    {
      value: "Ourizona",
      label: "Ourizona",
      ibge: 4117404,
    },
    {
      value: "Ouro Verde do Oeste",
      label: "Ouro Verde do Oeste",
      ibge: 4117453,
    },
    {
      value: "Paiçandu",
      label: "Paiçandu",
      ibge: 4117503,
    },
    {
      value: "Palmas",
      label: "Palmas",
      ibge: 4117602,
    },
    {
      value: "Palmeira",
      label: "Palmeira",
      ibge: 4117701,
    },
    {
      value: "Palmital",
      label: "Palmital",
      ibge: 4117800,
    },
    {
      value: "Palotina",
      label: "Palotina",
      ibge: 4117909,
    },
    {
      value: "Paraíso do Norte",
      label: "Paraíso do Norte",
      ibge: 4118006,
    },
    {
      value: "Paranacity",
      label: "Paranacity",
      ibge: 4118105,
    },
    {
      value: "Paranaguá",
      label: "Paranaguá",
      ibge: 4118204,
    },
    {
      value: "Paranapoema",
      label: "Paranapoema",
      ibge: 4118303,
    },
    {
      value: "Paranavaí",
      label: "Paranavaí",
      ibge: 4118402,
    },
    {
      value: "Pato Bragado",
      label: "Pato Bragado",
      ibge: 4118451,
    },
    {
      value: "Pato Branco",
      label: "Pato Branco",
      ibge: 4118501,
    },
    {
      value: "Paula Freitas",
      label: "Paula Freitas",
      ibge: 4118600,
    },
    {
      value: "Paulo Frontin",
      label: "Paulo Frontin",
      ibge: 4118709,
    },
    {
      value: "Peabiru",
      label: "Peabiru",
      ibge: 4118808,
    },
    {
      value: "Perobal",
      label: "Perobal",
      ibge: 4118857,
    },
    {
      value: "Pérola",
      label: "Pérola",
      ibge: 4118907,
    },
    {
      value: "Pérola d'Oeste",
      label: "Pérola d'Oeste",
      ibge: 4119004,
    },
    {
      value: "Piên",
      label: "Piên",
      ibge: 4119103,
    },
    {
      value: "Pinhais",
      label: "Pinhais",
      ibge: 4119152,
    },
    {
      value: "Pinhal de São Bento",
      label: "Pinhal de São Bento",
      ibge: 4119251,
    },
    {
      value: "Pinhalão",
      label: "Pinhalão",
      ibge: 4119202,
    },
    {
      value: "Pinhão",
      label: "Pinhão",
      ibge: 4119301,
    },
    {
      value: "Piraí do Sul",
      label: "Piraí do Sul",
      ibge: 4119400,
    },
    {
      value: "Piraquara",
      label: "Piraquara",
      ibge: 4119509,
    },
    {
      value: "Pitanga",
      label: "Pitanga",
      ibge: 4119608,
    },
    {
      value: "Pitangueiras",
      label: "Pitangueiras",
      ibge: 4119657,
    },
    {
      value: "Planaltina do Paraná",
      label: "Planaltina do Paraná",
      ibge: 4119707,
    },
    {
      value: "Planalto",
      label: "Planalto",
      ibge: 4119806,
    },
    {
      value: "Ponta Grossa",
      label: "Ponta Grossa",
      ibge: 4119905,
    },
    {
      value: "Pontal do Paraná",
      label: "Pontal do Paraná",
      ibge: 4119954,
    },
    {
      value: "Porecatu",
      label: "Porecatu",
      ibge: 4120002,
    },
    {
      value: "Porto Amazonas",
      label: "Porto Amazonas",
      ibge: 4120101,
    },
    {
      value: "Porto Barreiro",
      label: "Porto Barreiro",
      ibge: 4120150,
    },
    {
      value: "Porto Rico",
      label: "Porto Rico",
      ibge: 4120200,
    },
    {
      value: "Porto Vitória",
      label: "Porto Vitória",
      ibge: 4120309,
    },
    {
      value: "Prado Ferreira",
      label: "Prado Ferreira",
      ibge: 4120333,
    },
    {
      value: "Pranchita",
      label: "Pranchita",
      ibge: 4120358,
    },
    {
      value: "Presidente Castelo Branco",
      label: "Presidente Castelo Branco",
      ibge: 4120408,
    },
    {
      value: "Primeiro de Maio",
      label: "Primeiro de Maio",
      ibge: 4120507,
    },
    {
      value: "Prudentópolis",
      label: "Prudentópolis",
      ibge: 4120606,
    },
    {
      value: "Quarto Centenário",
      label: "Quarto Centenário",
      ibge: 4120655,
    },
    {
      value: "Quatiguá",
      label: "Quatiguá",
      ibge: 4120705,
    },
    {
      value: "Quatro Barras",
      label: "Quatro Barras",
      ibge: 4120804,
    },
    {
      value: "Quatro Pontes",
      label: "Quatro Pontes",
      ibge: 4120853,
    },
    {
      value: "Quedas do Iguaçu",
      label: "Quedas do Iguaçu",
      ibge: 4120903,
    },
    {
      value: "Querência do Norte",
      label: "Querência do Norte",
      ibge: 4121000,
    },
    {
      value: "Quinta do Sol",
      label: "Quinta do Sol",
      ibge: 4121109,
    },
    {
      value: "Quitandinha",
      label: "Quitandinha",
      ibge: 4121208,
    },
    {
      value: "Ramilândia",
      label: "Ramilândia",
      ibge: 4121257,
    },
    {
      value: "Rancho Alegre",
      label: "Rancho Alegre",
      ibge: 4121307,
    },
    {
      value: "Rancho Alegre d'Oeste",
      label: "Rancho Alegre d'Oeste",
      ibge: 4121356,
    },
    {
      value: "Realeza",
      label: "Realeza",
      ibge: 4121406,
    },
    {
      value: "Rebouças",
      label: "Rebouças",
      ibge: 4121505,
    },
    {
      value: "Renascença",
      label: "Renascença",
      ibge: 4121604,
    },
    {
      value: "Reserva",
      label: "Reserva",
      ibge: 4121703,
    },
    {
      value: "Reserva do Iguaçu",
      label: "Reserva do Iguaçu",
      ibge: 4121752,
    },
    {
      value: "Ribeirão Claro",
      label: "Ribeirão Claro",
      ibge: 4121802,
    },
    {
      value: "Ribeirão do Pinhal",
      label: "Ribeirão do Pinhal",
      ibge: 4121901,
    },
    {
      value: "Rio Azul",
      label: "Rio Azul",
      ibge: 4122008,
    },
    {
      value: "Rio Bom",
      label: "Rio Bom",
      ibge: 4122107,
    },
    {
      value: "Rio Bonito do Iguaçu",
      label: "Rio Bonito do Iguaçu",
      ibge: 4122156,
    },
    {
      value: "Rio Branco do Ivaí",
      label: "Rio Branco do Ivaí",
      ibge: 4122172,
    },
    {
      value: "Rio Branco do Sul",
      label: "Rio Branco do Sul",
      ibge: 4122206,
    },
    {
      value: "Rio Negro",
      label: "Rio Negro",
      ibge: 4122305,
    },
    {
      value: "Rolândia",
      label: "Rolândia",
      ibge: 4122404,
    },
    {
      value: "Roncador",
      label: "Roncador",
      ibge: 4122503,
    },
    {
      value: "Rondon",
      label: "Rondon",
      ibge: 4122602,
    },
    {
      value: "Rosário do Ivaí",
      label: "Rosário do Ivaí",
      ibge: 4122651,
    },
    {
      value: "Sabáudia",
      label: "Sabáudia",
      ibge: 4122701,
    },
    {
      value: "Salgado Filho",
      label: "Salgado Filho",
      ibge: 4122800,
    },
    {
      value: "Salto do Itararé",
      label: "Salto do Itararé",
      ibge: 4122909,
    },
    {
      value: "Salto do Lontra",
      label: "Salto do Lontra",
      ibge: 4123006,
    },
    {
      value: "Santa Amélia",
      label: "Santa Amélia",
      ibge: 4123105,
    },
    {
      value: "Santa Cecília do Pavão",
      label: "Santa Cecília do Pavão",
      ibge: 4123204,
    },
    {
      value: "Santa Cruz Monte Castelo",
      label: "Santa Cruz Monte Castelo",
    },
    {
      value: "Santa Fé",
      label: "Santa Fé",
      ibge: 4123402,
    },
    {
      value: "Santa Helena",
      label: "Santa Helena",
      ibge: 4123501,
    },
    {
      value: "Santa Inês",
      label: "Santa Inês",
      ibge: 4123600,
    },
    {
      value: "Santa Isabel do Ivaí",
      label: "Santa Isabel do Ivaí",
      ibge: 4123709,
    },
    {
      value: "Santa Izabel do Oeste",
      label: "Santa Izabel do Oeste",
      ibge: 4123808,
    },
    {
      value: "Santa Lúcia",
      label: "Santa Lúcia",
      ibge: 4123824,
    },
    {
      value: "Santa Maria do Oeste",
      label: "Santa Maria do Oeste",
      ibge: 4123857,
    },
    {
      value: "Santa Mariana",
      label: "Santa Mariana",
      ibge: 4123907,
    },
    {
      value: "Santa Mônica",
      label: "Santa Mônica",
      ibge: 4123956,
    },
    {
      value: "Santa Tereza do Oeste",
      label: "Santa Tereza do Oeste",
      ibge: 4124020,
    },
    {
      value: "Santa Terezinha de Itaipu",
      label: "Santa Terezinha de Itaipu",
      ibge: 4124053,
    },
    {
      value: "Santana do Itararé",
      label: "Santana do Itararé",
      ibge: 4124004,
    },
    {
      value: "Santo Antônio da Platina",
      label: "Santo Antônio da Platina",
      ibge: 4124103,
    },
    {
      value: "Santo Antônio do Caiuá",
      label: "Santo Antônio do Caiuá",
      ibge: 4124202,
    },
    {
      value: "Santo Antônio do Paraíso",
      label: "Santo Antônio do Paraíso",
      ibge: 4124301,
    },
    {
      value: "Santo Antônio do Sudoeste",
      label: "Santo Antônio do Sudoeste",
      ibge: 4124400,
    },
    {
      value: "Santo Inácio",
      label: "Santo Inácio",
      ibge: 4124509,
    },
    {
      value: "São Carlos do Ivaí",
      label: "São Carlos do Ivaí",
      ibge: 4124608,
    },
    {
      value: "São Jerônimo da Serra",
      label: "São Jerônimo da Serra",
      ibge: 4124707,
    },
    {
      value: "São João",
      label: "São João",
      ibge: 4124806,
    },
    {
      value: "São João do Caiuá",
      label: "São João do Caiuá",
      ibge: 4124905,
    },
    {
      value: "São João do Ivaí",
      label: "São João do Ivaí",
      ibge: 4125001,
    },
    {
      value: "São João do Triunfo",
      label: "São João do Triunfo",
      ibge: 4125100,
    },
    {
      value: "São Jorge d'Oeste",
      label: "São Jorge d'Oeste",
      ibge: 4125209,
    },
    {
      value: "São Jorge do Ivaí",
      label: "São Jorge do Ivaí",
      ibge: 4125308,
    },
    {
      value: "São Jorge do Patrocínio",
      label: "São Jorge do Patrocínio",
      ibge: 4125357,
    },
    {
      value: "São José da Boa Vista",
      label: "São José da Boa Vista",
      ibge: 4125407,
    },
    {
      value: "São José das Palmeiras",
      label: "São José das Palmeiras",
      ibge: 4125456,
    },
    {
      value: "São José dos Pinhais",
      label: "São José dos Pinhais",
      ibge: 4125506,
    },
    {
      value: "São Manoel do Paraná",
      label: "São Manoel do Paraná",
      ibge: 4125555,
    },
    {
      value: "São Mateus do Sul",
      label: "São Mateus do Sul",
      ibge: 4125605,
    },
    {
      value: "São Miguel do Iguaçu",
      label: "São Miguel do Iguaçu",
      ibge: 4125704,
    },
    {
      value: "São Pedro do Iguaçu",
      label: "São Pedro do Iguaçu",
      ibge: 4125753,
    },
    {
      value: "São Pedro do Ivaí",
      label: "São Pedro do Ivaí",
      ibge: 4125803,
    },
    {
      value: "São Pedro do Paraná",
      label: "São Pedro do Paraná",
      ibge: 4125902,
    },
    {
      value: "São Sebastião da Amoreira",
      label: "São Sebastião da Amoreira",
      ibge: 4126009,
    },
    {
      value: "São Tomé",
      label: "São Tomé",
      ibge: 4126108,
    },
    {
      value: "Sapopema",
      label: "Sapopema",
      ibge: 4126207,
    },
    {
      value: "Sarandi",
      label: "Sarandi",
      ibge: 4126256,
    },
    {
      value: "Saudade do Iguaçu",
      label: "Saudade do Iguaçu",
      ibge: 4126272,
    },
    {
      value: "Sengés",
      label: "Sengés",
      ibge: 4126306,
    },
    {
      value: "Serranópolis do Iguaçu",
      label: "Serranópolis do Iguaçu",
      ibge: 4126355,
    },
    {
      value: "Sertaneja",
      label: "Sertaneja",
      ibge: 4126405,
    },
    {
      value: "Sertanópolis",
      label: "Sertanópolis",
      ibge: 4126504,
    },
    {
      value: "Siqueira Campos",
      label: "Siqueira Campos",
      ibge: 4126603,
    },
    {
      value: "Sulina",
      label: "Sulina",
      ibge: 4126652,
    },
    {
      value: "Tamarana",
      label: "Tamarana",
      ibge: 4126678,
    },
    {
      value: "Tamboara",
      label: "Tamboara",
      ibge: 4126702,
    },
    {
      value: "Tapejara",
      label: "Tapejara",
      ibge: 4126801,
    },
    {
      value: "Tapira",
      label: "Tapira",
      ibge: 4126900,
    },
    {
      value: "Teixeira Soares",
      label: "Teixeira Soares",
      ibge: 4127007,
    },
    {
      value: "Telêmaco Borba",
      label: "Telêmaco Borba",
      ibge: 4127106,
    },
    {
      value: "Terra Boa",
      label: "Terra Boa",
      ibge: 4127205,
    },
    {
      value: "Terra Rica",
      label: "Terra Rica",
      ibge: 4127304,
    },
    {
      value: "Terra Roxa",
      label: "Terra Roxa",
      ibge: 4127403,
    },
    {
      value: "Tibagi",
      label: "Tibagi",
      ibge: 4127502,
    },
    {
      value: "Tijucas do Sul",
      label: "Tijucas do Sul",
      ibge: 4127601,
    },
    {
      value: "Toledo",
      label: "Toledo",
      ibge: 4127700,
    },
    {
      value: "Tomazina",
      label: "Tomazina",
      ibge: 4127809,
    },
    {
      value: "Três Barras do Paraná",
      label: "Três Barras do Paraná",
      ibge: 4127858,
    },
    {
      value: "Tunas do Paraná",
      label: "Tunas do Paraná",
      ibge: 4127882,
    },
    {
      value: "Tuneiras do Oeste",
      label: "Tuneiras do Oeste",
      ibge: 4127908,
    },
    {
      value: "Tupãssi",
      label: "Tupãssi",
      ibge: 4127957,
    },
    {
      value: "Turvo",
      label: "Turvo",
      ibge: 4127965,
    },
    {
      value: "Ubiratã",
      label: "Ubiratã",
      ibge: 4128005,
    },
    {
      value: "Umuarama",
      label: "Umuarama",
      ibge: 4128104,
    },
    {
      value: "União da Vitória",
      label: "União da Vitória",
      ibge: 4128203,
    },
    {
      value: "Uniflor",
      label: "Uniflor",
      ibge: 4128302,
    },
    {
      value: "Uraí",
      label: "Uraí",
      ibge: 4128401,
    },
    {
      value: "Ventania",
      label: "Ventania",
      ibge: 4128534,
    },
    {
      value: "Vera Cruz do Oeste",
      label: "Vera Cruz do Oeste",
      ibge: 4128559,
    },
    {
      value: "Verê",
      label: "Verê",
      ibge: 4128609,
    },
    {
      value: "Vila Alta",
      label: "Vila Alta",
    },
    {
      value: "Virmond",
      label: "Virmond",
      ibge: 4128658,
    },
    {
      value: "Vitorino",
      label: "Vitorino",
      ibge: 4128708,
    },
    {
      value: "Wenceslau Braz",
      label: "Wenceslau Braz",
      ibge: 4128500,
    },
    {
      value: "Xambrê",
      label: "Xambrê",
      ibge: 4128807,
    },
    {
      value: "Alto Paraíso",
      label: "Alto Paraíso",
      ibge: 4128625,
    },
    {
      value: "Santa Cruz de Monte Castelo",
      label: "Santa Cruz de Monte Castelo",
      ibge: 4123303,
    },
  ],
  RJ: [
    {
      value: "Angra dos Reis",
      label: "Angra dos Reis",
      ibge: 3300100,
    },
    {
      value: "Aperibé",
      label: "Aperibé",
      ibge: 3300159,
    },
    {
      value: "Araruama",
      label: "Araruama",
      ibge: 3300209,
    },
    {
      value: "Areal",
      label: "Areal",
      ibge: 3300225,
    },
    {
      value: "Armação de Búzios",
      label: "Armação de Búzios",
    },
    {
      value: "Arraial do Cabo",
      label: "Arraial do Cabo",
      ibge: 3300258,
    },
    {
      value: "Barra do Piraí",
      label: "Barra do Piraí",
      ibge: 3300308,
    },
    {
      value: "Barra Mansa",
      label: "Barra Mansa",
      ibge: 3300407,
    },
    {
      value: "Belford Roxo",
      label: "Belford Roxo",
      ibge: 3300456,
    },
    {
      value: "Bom Jardim",
      label: "Bom Jardim",
      ibge: 3300506,
    },
    {
      value: "Bom Jesus do Itabapoana",
      label: "Bom Jesus do Itabapoana",
      ibge: 3300605,
    },
    {
      value: "Cabo Frio",
      label: "Cabo Frio",
      ibge: 3300704,
    },
    {
      value: "Cachoeiras de Macacu",
      label: "Cachoeiras de Macacu",
      ibge: 3300803,
    },
    {
      value: "Cambuci",
      label: "Cambuci",
      ibge: 3300902,
    },
    {
      value: "Campos dos Goytacazes",
      label: "Campos dos Goytacazes",
      ibge: 3301009,
    },
    {
      value: "Cantagalo",
      label: "Cantagalo",
      ibge: 3301108,
    },
    {
      value: "Carapebus",
      label: "Carapebus",
      ibge: 3300936,
    },
    {
      value: "Cardoso Moreira",
      label: "Cardoso Moreira",
      ibge: 3301157,
    },
    {
      value: "Carmo",
      label: "Carmo",
      ibge: 3301207,
    },
    {
      value: "Casimiro de Abreu",
      label: "Casimiro de Abreu",
      ibge: 3301306,
    },
    {
      value: "Comendador Levy Gasparian",
      label: "Comendador Levy Gasparian",
      ibge: 3300951,
    },
    {
      value: "Conceição de Macabu",
      label: "Conceição de Macabu",
      ibge: 3301405,
    },
    {
      value: "Cordeiro",
      label: "Cordeiro",
      ibge: 3301504,
    },
    {
      value: "Duas Barras",
      label: "Duas Barras",
      ibge: 3301603,
    },
    {
      value: "Duque de Caxias",
      label: "Duque de Caxias",
      ibge: 3301702,
    },
    {
      value: "Engenheiro Paulo de Frontin",
      label: "Engenheiro Paulo de Frontin",
      ibge: 3301801,
    },
    {
      value: "Guapimirim",
      label: "Guapimirim",
      ibge: 3301850,
    },
    {
      value: "Iguaba Grande",
      label: "Iguaba Grande",
      ibge: 3301876,
    },
    {
      value: "Itaboraí",
      label: "Itaboraí",
      ibge: 3301900,
    },
    {
      value: "Itaguaí",
      label: "Itaguaí",
      ibge: 3302007,
    },
    {
      value: "Italva",
      label: "Italva",
      ibge: 3302056,
    },
    {
      value: "Itaocara",
      label: "Itaocara",
      ibge: 3302106,
    },
    {
      value: "Itaperuna",
      label: "Itaperuna",
      ibge: 3302205,
    },
    {
      value: "Itatiaia",
      label: "Itatiaia",
      ibge: 3302254,
    },
    {
      value: "Japeri",
      label: "Japeri",
      ibge: 3302270,
    },
    {
      value: "Laje do Muriaé",
      label: "Laje do Muriaé",
      ibge: 3302304,
    },
    {
      value: "Macaé",
      label: "Macaé",
      ibge: 3302403,
    },
    {
      value: "Macuco",
      label: "Macuco",
      ibge: 3302452,
    },
    {
      value: "Magé",
      label: "Magé",
      ibge: 3302502,
    },
    {
      value: "Mangaratiba",
      label: "Mangaratiba",
      ibge: 3302601,
    },
    {
      value: "Maricá",
      label: "Maricá",
      ibge: 3302700,
    },
    {
      value: "Mendes",
      label: "Mendes",
      ibge: 3302809,
    },
    {
      value: "Mesquita",
      label: "Mesquita",
      ibge: 3302858,
    },
    {
      value: "Miguel Pereira",
      label: "Miguel Pereira",
      ibge: 3302908,
    },
    {
      value: "Miracema",
      label: "Miracema",
      ibge: 3303005,
    },
    {
      value: "Natividade",
      label: "Natividade",
      ibge: 3303104,
    },
    {
      value: "Nilópolis",
      label: "Nilópolis",
      ibge: 3303203,
    },
    {
      value: "Niterói",
      label: "Niterói",
      ibge: 3303302,
    },
    {
      value: "Nova Friburgo",
      label: "Nova Friburgo",
      ibge: 3303401,
    },
    {
      value: "Nova Iguaçu",
      label: "Nova Iguaçu",
      ibge: 3303500,
    },
    {
      value: "Paracambi",
      label: "Paracambi",
      ibge: 3303609,
    },
    {
      value: "Paraíba do Sul",
      label: "Paraíba do Sul",
      ibge: 3303708,
    },
    {
      value: "Parati",
      label: "Parati",
    },
    {
      value: "Paty do Alferes",
      label: "Paty do Alferes",
      ibge: 3303856,
    },
    {
      value: "Petrópolis",
      label: "Petrópolis",
      ibge: 3303906,
    },
    {
      value: "Pinheiral",
      label: "Pinheiral",
      ibge: 3303955,
    },
    {
      value: "Piraí",
      label: "Piraí",
      ibge: 3304003,
    },
    {
      value: "Porciúncula",
      label: "Porciúncula",
      ibge: 3304102,
    },
    {
      value: "Porto Real",
      label: "Porto Real",
      ibge: 3304110,
    },
    {
      value: "Quatis",
      label: "Quatis",
      ibge: 3304128,
    },
    {
      value: "Queimados",
      label: "Queimados",
      ibge: 3304144,
    },
    {
      value: "Quissamã",
      label: "Quissamã",
      ibge: 3304151,
    },
    {
      value: "Resende",
      label: "Resende",
      ibge: 3304201,
    },
    {
      value: "Rio Bonito",
      label: "Rio Bonito",
      ibge: 3304300,
    },
    {
      value: "Rio Claro",
      label: "Rio Claro",
      ibge: 3304409,
    },
    {
      value: "Rio das Flores",
      label: "Rio das Flores",
      ibge: 3304508,
    },
    {
      value: "Rio das Ostras",
      label: "Rio das Ostras",
      ibge: 3304524,
    },
    {
      value: "Rio de Janeiro",
      label: "Rio de Janeiro",
      ibge: 3304557,
    },
    {
      value: "Santa Maria Madalena",
      label: "Santa Maria Madalena",
      ibge: 3304607,
    },
    {
      value: "Santo Antônio de Pádua",
      label: "Santo Antônio de Pádua",
      ibge: 3304706,
    },
    {
      value: "São Fidélis",
      label: "São Fidélis",
      ibge: 3304805,
    },
    {
      value: "São Francisco de Itabapoana",
      label: "São Francisco de Itabapoana",
      ibge: 3304755,
    },
    {
      value: "São Gonçalo",
      label: "São Gonçalo",
      ibge: 3304904,
    },
    {
      value: "São João da Barra",
      label: "São João da Barra",
      ibge: 3305000,
    },
    {
      value: "São João de Meriti",
      label: "São João de Meriti",
      ibge: 3305109,
    },
    {
      value: "São José de Ubá",
      label: "São José de Ubá",
      ibge: 3305133,
    },
    {
      value: "São José do Vale do Rio Preto",
      label: "São José do Vale do Rio Preto",
      ibge: 3305158,
    },
    {
      value: "São Pedro da Aldeia",
      label: "São Pedro da Aldeia",
      ibge: 3305208,
    },
    {
      value: "São Sebastião do Alto",
      label: "São Sebastião do Alto",
      ibge: 3305307,
    },
    {
      value: "Sapucaia",
      label: "Sapucaia",
      ibge: 3305406,
    },
    {
      value: "Saquarema",
      label: "Saquarema",
      ibge: 3305505,
    },
    {
      value: "Seropédica",
      label: "Seropédica",
      ibge: 3305554,
    },
    {
      value: "Silva Jardim",
      label: "Silva Jardim",
      ibge: 3305604,
    },
    {
      value: "Sumidouro",
      label: "Sumidouro",
      ibge: 3305703,
    },
    {
      value: "Tanguá",
      label: "Tanguá",
      ibge: 3305752,
    },
    {
      value: "Teresópolis",
      label: "Teresópolis",
      ibge: 3305802,
    },
    {
      value: "Trajano de Morais",
      label: "Trajano de Morais",
    },
    {
      value: "Três Rios",
      label: "Três Rios",
      ibge: 3306008,
    },
    {
      value: "Valença",
      label: "Valença",
      ibge: 3306107,
    },
    {
      value: "Varre-Sai",
      label: "Varre-Sai",
      ibge: 3306156,
    },
    {
      value: "Vassouras",
      label: "Vassouras",
      ibge: 3306206,
    },
    {
      value: "Volta Redonda",
      label: "Volta Redonda",
      ibge: 3306305,
    },
    {
      value: "Armação dos Búzios",
      label: "Armação dos Búzios",
      ibge: 3300233,
    },
    {
      value: "Paraty",
      label: "Paraty",
      ibge: 3303807,
    },
    {
      value: "Trajano de Moraes",
      label: "Trajano de Moraes",
      ibge: 3305901,
    },
  ],
  RN: [
    {
      value: "Acari",
      label: "Acari",
      ibge: 2400109,
    },
    {
      value: "Açu",
      label: "Açu",
      ibge: 2400208,
    },
    {
      value: "Afonso Bezerra",
      label: "Afonso Bezerra",
      ibge: 2400307,
    },
    {
      value: "Água Nova",
      label: "Água Nova",
      ibge: 2400406,
    },
    {
      value: "Alexandria",
      label: "Alexandria",
      ibge: 2400505,
    },
    {
      value: "Almino Afonso",
      label: "Almino Afonso",
      ibge: 2400604,
    },
    {
      value: "Alto do Rodrigues",
      label: "Alto do Rodrigues",
      ibge: 2400703,
    },
    {
      value: "Angicos",
      label: "Angicos",
      ibge: 2400802,
    },
    {
      value: "Antônio Martins",
      label: "Antônio Martins",
      ibge: 2400901,
    },
    {
      value: "Apodi",
      label: "Apodi",
      ibge: 2401008,
    },
    {
      value: "Areia Branca",
      label: "Areia Branca",
      ibge: 2401107,
    },
    {
      value: "Arês",
      label: "Arês",
      ibge: 2401206,
    },
    {
      value: "Augusto Severo",
      label: "Augusto Severo",
    },
    {
      value: "Baía Formosa",
      label: "Baía Formosa",
      ibge: 2401404,
    },
    {
      value: "Baraúna",
      label: "Baraúna",
      ibge: 2401453,
    },
    {
      value: "Barcelona",
      label: "Barcelona",
      ibge: 2401503,
    },
    {
      value: "Bento Fernandes",
      label: "Bento Fernandes",
      ibge: 2401602,
    },
    {
      value: "Bodó",
      label: "Bodó",
      ibge: 2401651,
    },
    {
      value: "Bom Jesus",
      label: "Bom Jesus",
      ibge: 2401701,
    },
    {
      value: "Brejinho",
      label: "Brejinho",
      ibge: 2401800,
    },
    {
      value: "Caiçara do Norte",
      label: "Caiçara do Norte",
      ibge: 2401859,
    },
    {
      value: "Caiçara do Rio do Vento",
      label: "Caiçara do Rio do Vento",
      ibge: 2401909,
    },
    {
      value: "Caicó",
      label: "Caicó",
      ibge: 2402006,
    },
    {
      value: "Campo Redondo",
      label: "Campo Redondo",
      ibge: 2402105,
    },
    {
      value: "Canguaretama",
      label: "Canguaretama",
      ibge: 2402204,
    },
    {
      value: "Caraúbas",
      label: "Caraúbas",
      ibge: 2402303,
    },
    {
      value: "Carnaúba dos Dantas",
      label: "Carnaúba dos Dantas",
      ibge: 2402402,
    },
    {
      value: "Carnaubais",
      label: "Carnaubais",
      ibge: 2402501,
    },
    {
      value: "Ceará-Mirim",
      label: "Ceará-Mirim",
      ibge: 2402600,
    },
    {
      value: "Cerro Corá",
      label: "Cerro Corá",
      ibge: 2402709,
    },
    {
      value: "Coronel Ezequiel",
      label: "Coronel Ezequiel",
      ibge: 2402808,
    },
    {
      value: "Coronel João Pessoa",
      label: "Coronel João Pessoa",
      ibge: 2402907,
    },
    {
      value: "Cruzeta",
      label: "Cruzeta",
      ibge: 2403004,
    },
    {
      value: "Currais Novos",
      label: "Currais Novos",
      ibge: 2403103,
    },
    {
      value: "Doutor Severiano",
      label: "Doutor Severiano",
      ibge: 2403202,
    },
    {
      value: "Encanto",
      label: "Encanto",
      ibge: 2403301,
    },
    {
      value: "Equador",
      label: "Equador",
      ibge: 2403400,
    },
    {
      value: "Espírito Santo",
      label: "Espírito Santo",
      ibge: 2403509,
    },
    {
      value: "Extremoz",
      label: "Extremoz",
      ibge: 2403608,
    },
    {
      value: "Felipe Guerra",
      label: "Felipe Guerra",
      ibge: 2403707,
    },
    {
      value: "Fernando Pedroza",
      label: "Fernando Pedroza",
      ibge: 2403756,
    },
    {
      value: "Florânia",
      label: "Florânia",
      ibge: 2403806,
    },
    {
      value: "Francisco Dantas",
      label: "Francisco Dantas",
      ibge: 2403905,
    },
    {
      value: "Frutuoso Gomes",
      label: "Frutuoso Gomes",
      ibge: 2404002,
    },
    {
      value: "Galinhos",
      label: "Galinhos",
      ibge: 2404101,
    },
    {
      value: "Goianinha",
      label: "Goianinha",
      ibge: 2404200,
    },
    {
      value: "Governador Dix-Sept Rosado",
      label: "Governador Dix-Sept Rosado",
      ibge: 2404309,
    },
    {
      value: "Grossos",
      label: "Grossos",
      ibge: 2404408,
    },
    {
      value: "Guamaré",
      label: "Guamaré",
      ibge: 2404507,
    },
    {
      value: "Ielmo Marinho",
      label: "Ielmo Marinho",
      ibge: 2404606,
    },
    {
      value: "Ipanguaçu",
      label: "Ipanguaçu",
      ibge: 2404705,
    },
    {
      value: "Ipueira",
      label: "Ipueira",
      ibge: 2404804,
    },
    {
      value: "Itajá",
      label: "Itajá",
      ibge: 2404853,
    },
    {
      value: "Itaú",
      label: "Itaú",
      ibge: 2404903,
    },
    {
      value: "Jaçanã",
      label: "Jaçanã",
      ibge: 2405009,
    },
    {
      value: "Jandaíra",
      label: "Jandaíra",
      ibge: 2405108,
    },
    {
      value: "Janduís",
      label: "Janduís",
      ibge: 2405207,
    },
    {
      value: "Januário Cicco",
      label: "Januário Cicco",
      ibge: 2405306,
    },
    {
      value: "Japi",
      label: "Japi",
      ibge: 2405405,
    },
    {
      value: "Jardim de Angicos",
      label: "Jardim de Angicos",
      ibge: 2405504,
    },
    {
      value: "Jardim de Piranhas",
      label: "Jardim de Piranhas",
      ibge: 2405603,
    },
    {
      value: "Jardim do Seridó",
      label: "Jardim do Seridó",
      ibge: 2405702,
    },
    {
      value: "João Câmara",
      label: "João Câmara",
      ibge: 2405801,
    },
    {
      value: "João Dias",
      label: "João Dias",
      ibge: 2405900,
    },
    {
      value: "José da Penha",
      label: "José da Penha",
      ibge: 2406007,
    },
    {
      value: "Jucurutu",
      label: "Jucurutu",
      ibge: 2406106,
    },
    {
      value: "Jundiá",
      label: "Jundiá",
      ibge: 2406155,
    },
    {
      value: "Lagoa d'Anta",
      label: "Lagoa d'Anta",
      ibge: 2406205,
    },
    {
      value: "Lagoa de Pedras",
      label: "Lagoa de Pedras",
      ibge: 2406304,
    },
    {
      value: "Lagoa de Velhos",
      label: "Lagoa de Velhos",
      ibge: 2406403,
    },
    {
      value: "Lagoa Nova",
      label: "Lagoa Nova",
      ibge: 2406502,
    },
    {
      value: "Lagoa Salgada",
      label: "Lagoa Salgada",
      ibge: 2406601,
    },
    {
      value: "Lajes",
      label: "Lajes",
      ibge: 2406700,
    },
    {
      value: "Lajes Pintadas",
      label: "Lajes Pintadas",
      ibge: 2406809,
    },
    {
      value: "Lucrécia",
      label: "Lucrécia",
      ibge: 2406908,
    },
    {
      value: "Luís Gomes",
      label: "Luís Gomes",
      ibge: 2407005,
    },
    {
      value: "Macaíba",
      label: "Macaíba",
      ibge: 2407104,
    },
    {
      value: "Macau",
      label: "Macau",
      ibge: 2407203,
    },
    {
      value: "Major Sales",
      label: "Major Sales",
      ibge: 2407252,
    },
    {
      value: "Marcelino Vieira",
      label: "Marcelino Vieira",
      ibge: 2407302,
    },
    {
      value: "Martins",
      label: "Martins",
      ibge: 2407401,
    },
    {
      value: "Maxaranguape",
      label: "Maxaranguape",
      ibge: 2407500,
    },
    {
      value: "Messias Targino",
      label: "Messias Targino",
      ibge: 2407609,
    },
    {
      value: "Montanhas",
      label: "Montanhas",
      ibge: 2407708,
    },
    {
      value: "Monte Alegre",
      label: "Monte Alegre",
      ibge: 2407807,
    },
    {
      value: "Monte das Gameleiras",
      label: "Monte das Gameleiras",
      ibge: 2407906,
    },
    {
      value: "Mossoró",
      label: "Mossoró",
      ibge: 2408003,
    },
    {
      value: "Natal",
      label: "Natal",
      ibge: 2408102,
    },
    {
      value: "Nísia Floresta",
      label: "Nísia Floresta",
      ibge: 2408201,
    },
    {
      value: "Nova Cruz",
      label: "Nova Cruz",
      ibge: 2408300,
    },
    {
      value: "Olho-d'Água do Borges",
      label: "Olho-d'Água do Borges",
    },
    {
      value: "Ouro Branco",
      label: "Ouro Branco",
      ibge: 2408508,
    },
    {
      value: "Paraná",
      label: "Paraná",
      ibge: 2408607,
    },
    {
      value: "Paraú",
      label: "Paraú",
      ibge: 2408706,
    },
    {
      value: "Parazinho",
      label: "Parazinho",
      ibge: 2408805,
    },
    {
      value: "Parelhas",
      label: "Parelhas",
      ibge: 2408904,
    },
    {
      value: "Parnamirim",
      label: "Parnamirim",
      ibge: 2403251,
    },
    {
      value: "Passa e Fica",
      label: "Passa e Fica",
      ibge: 2409100,
    },
    {
      value: "Passagem",
      label: "Passagem",
      ibge: 2409209,
    },
    {
      value: "Patu",
      label: "Patu",
      ibge: 2409308,
    },
    {
      value: "Pau dos Ferros",
      label: "Pau dos Ferros",
      ibge: 2409407,
    },
    {
      value: "Pedra Grande",
      label: "Pedra Grande",
      ibge: 2409506,
    },
    {
      value: "Pedra Preta",
      label: "Pedra Preta",
      ibge: 2409605,
    },
    {
      value: "Pedro Avelino",
      label: "Pedro Avelino",
      ibge: 2409704,
    },
    {
      value: "Pedro Velho",
      label: "Pedro Velho",
      ibge: 2409803,
    },
    {
      value: "Pendências",
      label: "Pendências",
      ibge: 2409902,
    },
    {
      value: "Pilões",
      label: "Pilões",
      ibge: 2410009,
    },
    {
      value: "Poço Branco",
      label: "Poço Branco",
      ibge: 2410108,
    },
    {
      value: "Portalegre",
      label: "Portalegre",
      ibge: 2410207,
    },
    {
      value: "Porto do Mangue",
      label: "Porto do Mangue",
      ibge: 2410256,
    },
    {
      value: "Presidente Juscelino",
      label: "Presidente Juscelino",
    },
    {
      value: "Pureza",
      label: "Pureza",
      ibge: 2410405,
    },
    {
      value: "Rafael Fernandes",
      label: "Rafael Fernandes",
      ibge: 2410504,
    },
    {
      value: "Rafael Godeiro",
      label: "Rafael Godeiro",
      ibge: 2410603,
    },
    {
      value: "Riacho da Cruz",
      label: "Riacho da Cruz",
      ibge: 2410702,
    },
    {
      value: "Riacho de Santana",
      label: "Riacho de Santana",
      ibge: 2410801,
    },
    {
      value: "Riachuelo",
      label: "Riachuelo",
      ibge: 2410900,
    },
    {
      value: "Rio do Fogo",
      label: "Rio do Fogo",
      ibge: 2408953,
    },
    {
      value: "Rodolfo Fernandes",
      label: "Rodolfo Fernandes",
      ibge: 2411007,
    },
    {
      value: "Ruy Barbosa",
      label: "Ruy Barbosa",
      ibge: 2411106,
    },
    {
      value: "Santa Cruz",
      label: "Santa Cruz",
      ibge: 2411205,
    },
    {
      value: "Santa Maria",
      label: "Santa Maria",
      ibge: 2409332,
    },
    {
      value: "Santana do Matos",
      label: "Santana do Matos",
      ibge: 2411403,
    },
    {
      value: "Santana do Seridó",
      label: "Santana do Seridó",
      ibge: 2411429,
    },
    {
      value: "Santo Antônio",
      label: "Santo Antônio",
      ibge: 2411502,
    },
    {
      value: "São Bento do Norte",
      label: "São Bento do Norte",
      ibge: 2411601,
    },
    {
      value: "São Bento do Trairí",
      label: "São Bento do Trairí",
      ibge: 2411700,
    },
    {
      value: "São Fernando",
      label: "São Fernando",
      ibge: 2411809,
    },
    {
      value: "São Francisco do Oeste",
      label: "São Francisco do Oeste",
      ibge: 2411908,
    },
    {
      value: "São Gonçalo do Amarante",
      label: "São Gonçalo do Amarante",
      ibge: 2412005,
    },
    {
      value: "São João do Sabugi",
      label: "São João do Sabugi",
      ibge: 2412104,
    },
    {
      value: "São José de Mipibu",
      label: "São José de Mipibu",
      ibge: 2412203,
    },
    {
      value: "São José do Campestre",
      label: "São José do Campestre",
      ibge: 2412302,
    },
    {
      value: "São José do Seridó",
      label: "São José do Seridó",
      ibge: 2412401,
    },
    {
      value: "São Miguel",
      label: "São Miguel",
      ibge: 2412500,
    },
    {
      value: "São Miguel de Touros",
      label: "São Miguel de Touros",
    },
    {
      value: "São Paulo do Potengi",
      label: "São Paulo do Potengi",
      ibge: 2412609,
    },
    {
      value: "São Pedro",
      label: "São Pedro",
      ibge: 2412708,
    },
    {
      value: "São Rafael",
      label: "São Rafael",
      ibge: 2412807,
    },
    {
      value: "São Tomé",
      label: "São Tomé",
      ibge: 2412906,
    },
    {
      value: "São Vicente",
      label: "São Vicente",
      ibge: 2413003,
    },
    {
      value: "Senador Elói de Souza",
      label: "Senador Elói de Souza",
      ibge: 2413102,
    },
    {
      value: "Senador Georgino Avelino",
      label: "Senador Georgino Avelino",
      ibge: 2413201,
    },
    {
      value: "Serra de São Bento",
      label: "Serra de São Bento",
      ibge: 2413300,
    },
    {
      value: "Serra do Mel",
      label: "Serra do Mel",
      ibge: 2413359,
    },
    {
      value: "Serra Negra do Norte",
      label: "Serra Negra do Norte",
      ibge: 2413409,
    },
    {
      value: "Serrinha",
      label: "Serrinha",
      ibge: 2413508,
    },
    {
      value: "Serrinha dos Pintos",
      label: "Serrinha dos Pintos",
      ibge: 2413557,
    },
    {
      value: "Severiano Melo",
      label: "Severiano Melo",
      ibge: 2413607,
    },
    {
      value: "Sítio Novo",
      label: "Sítio Novo",
      ibge: 2413706,
    },
    {
      value: "Taboleiro Grande",
      label: "Taboleiro Grande",
      ibge: 2413805,
    },
    {
      value: "Taipu",
      label: "Taipu",
      ibge: 2413904,
    },
    {
      value: "Tangará",
      label: "Tangará",
      ibge: 2414001,
    },
    {
      value: "Tenente Ananias",
      label: "Tenente Ananias",
      ibge: 2414100,
    },
    {
      value: "Tenente Laurentino Cruz",
      label: "Tenente Laurentino Cruz",
      ibge: 2414159,
    },
    {
      value: "Tibau",
      label: "Tibau",
      ibge: 2411056,
    },
    {
      value: "Tibau do Sul",
      label: "Tibau do Sul",
      ibge: 2414209,
    },
    {
      value: "Timbaúba dos Batistas",
      label: "Timbaúba dos Batistas",
      ibge: 2414308,
    },
    {
      value: "Touros",
      label: "Touros",
      ibge: 2414407,
    },
    {
      value: "Triunfo Potiguar",
      label: "Triunfo Potiguar",
      ibge: 2414456,
    },
    {
      value: "Umarizal",
      label: "Umarizal",
      ibge: 2414506,
    },
    {
      value: "Upanema",
      label: "Upanema",
      ibge: 2414605,
    },
    {
      value: "Várzea",
      label: "Várzea",
      ibge: 2414704,
    },
    {
      value: "Venha-Ver",
      label: "Venha-Ver",
      ibge: 2414753,
    },
    {
      value: "Vera Cruz",
      label: "Vera Cruz",
      ibge: 2414803,
    },
    {
      value: "Viçosa",
      label: "Viçosa",
      ibge: 2414902,
    },
    {
      value: "Vila Flor",
      label: "Vila Flor",
      ibge: 2415008,
    },
    {
      value: "Campo Grande",
      label: "Campo Grande",
      ibge: 2401305,
    },
    {
      value: "Olho d'Água do Borges",
      label: "Olho d'Água do Borges",
      ibge: 2408409,
    },
    {
      value: "São Miguel do Gostoso",
      label: "São Miguel do Gostoso",
      ibge: 2412559,
    },
    {
      value: "Serra Caiada",
      label: "Serra Caiada",
      ibge: 2410306,
    },
  ],
  RO: [
    {
      value: "Alta Floresta d'Oeste",
      label: "Alta Floresta d'Oeste",
      ibge: 1100015,
    },
    {
      value: "Alto Alegre do Parecis",
      label: "Alto Alegre do Parecis",
    },
    {
      value: "Alto Paraíso",
      label: "Alto Paraíso",
      ibge: 1100403,
    },
    {
      value: "Alvorada d'Oeste",
      label: "Alvorada d'Oeste",
      ibge: 1100346,
    },
    {
      value: "Ariquemes",
      label: "Ariquemes",
      ibge: 1100023,
    },
    {
      value: "Buritis",
      label: "Buritis",
      ibge: 1100452,
    },
    {
      value: "Cabixi",
      label: "Cabixi",
      ibge: 1100031,
    },
    {
      value: "Cacaulândia",
      label: "Cacaulândia",
      ibge: 1100601,
    },
    {
      value: "Cacoal",
      label: "Cacoal",
      ibge: 1100049,
    },
    {
      value: "Campo Novo de Rondônia",
      label: "Campo Novo de Rondônia",
      ibge: 1100700,
    },
    {
      value: "Candeias do Jamari",
      label: "Candeias do Jamari",
      ibge: 1100809,
    },
    {
      value: "Castanheiras",
      label: "Castanheiras",
      ibge: 1100908,
    },
    {
      value: "Cerejeiras",
      label: "Cerejeiras",
      ibge: 1100056,
    },
    {
      value: "Chupinguaia",
      label: "Chupinguaia",
      ibge: 1100924,
    },
    {
      value: "Colorado do Oeste",
      label: "Colorado do Oeste",
      ibge: 1100064,
    },
    {
      value: "Corumbiara",
      label: "Corumbiara",
      ibge: 1100072,
    },
    {
      value: "Costa Marques",
      label: "Costa Marques",
      ibge: 1100080,
    },
    {
      value: "Cujubim",
      label: "Cujubim",
      ibge: 1100940,
    },
    {
      value: "Espigão d'Oeste",
      label: "Espigão d'Oeste",
      ibge: 1100098,
    },
    {
      value: "Governador Jorge Teixeira",
      label: "Governador Jorge Teixeira",
      ibge: 1101005,
    },
    {
      value: "Guajará-Mirim",
      label: "Guajará-Mirim",
      ibge: 1100106,
    },
    {
      value: "Itapuã do Oeste",
      label: "Itapuã do Oeste",
      ibge: 1101104,
    },
    {
      value: "Jaru",
      label: "Jaru",
      ibge: 1100114,
    },
    {
      value: "Ji-Paraná",
      label: "Ji-Paraná",
      ibge: 1100122,
    },
    {
      value: "Machadinho d'Oeste",
      label: "Machadinho d'Oeste",
      ibge: 1100130,
    },
    {
      value: "Ministro Andreazza",
      label: "Ministro Andreazza",
      ibge: 1101203,
    },
    {
      value: "Mirante da Serra",
      label: "Mirante da Serra",
      ibge: 1101302,
    },
    {
      value: "Monte Negro",
      label: "Monte Negro",
      ibge: 1101401,
    },
    {
      value: "Nova Brasilândia d'Oeste",
      label: "Nova Brasilândia d'Oeste",
      ibge: 1100148,
    },
    {
      value: "Nova Mamoré",
      label: "Nova Mamoré",
      ibge: 1100338,
    },
    {
      value: "Nova União",
      label: "Nova União",
      ibge: 1101435,
    },
    {
      value: "Novo Horizonte do Oeste",
      label: "Novo Horizonte do Oeste",
      ibge: 1100502,
    },
    {
      value: "Ouro Preto do Oeste",
      label: "Ouro Preto do Oeste",
      ibge: 1100155,
    },
    {
      value: "Parecis",
      label: "Parecis",
      ibge: 1101450,
    },
    {
      value: "Pimenta Bueno",
      label: "Pimenta Bueno",
      ibge: 1100189,
    },
    {
      value: "Pimenteiras do Oeste",
      label: "Pimenteiras do Oeste",
      ibge: 1101468,
    },
    {
      value: "Porto Velho",
      label: "Porto Velho",
      ibge: 1100205,
    },
    {
      value: "Presidente Médici",
      label: "Presidente Médici",
      ibge: 1100254,
    },
    {
      value: "Primavera de Rondônia",
      label: "Primavera de Rondônia",
      ibge: 1101476,
    },
    {
      value: "Rio Crespo",
      label: "Rio Crespo",
      ibge: 1100262,
    },
    {
      value: "Rolim de Moura",
      label: "Rolim de Moura",
      ibge: 1100288,
    },
    {
      value: "Santa Luzia d'Oeste",
      label: "Santa Luzia d'Oeste",
      ibge: 1100296,
    },
    {
      value: "São Felipe d'Oeste",
      label: "São Felipe d'Oeste",
      ibge: 1101484,
    },
    {
      value: "São Francisco do Guaporé",
      label: "São Francisco do Guaporé",
      ibge: 1101492,
    },
    {
      value: "São Miguel do Guaporé",
      label: "São Miguel do Guaporé",
      ibge: 1100320,
    },
    {
      value: "Seringueiras",
      label: "Seringueiras",
      ibge: 1101500,
    },
    {
      value: "Teixeirópolis",
      label: "Teixeirópolis",
      ibge: 1101559,
    },
    {
      value: "Theobroma",
      label: "Theobroma",
      ibge: 1101609,
    },
    {
      value: "Urupá",
      label: "Urupá",
      ibge: 1101708,
    },
    {
      value: "Vale do Anari",
      label: "Vale do Anari",
      ibge: 1101757,
    },
    {
      value: "Vale do Paraíso",
      label: "Vale do Paraíso",
      ibge: 1101807,
    },
    {
      value: "Vilhena",
      label: "Vilhena",
      ibge: 1100304,
    },
    {
      value: "Alto Alegre dos Parecis",
      label: "Alto Alegre dos Parecis",
      ibge: 1100379,
    },
  ],
  RR: [
    {
      value: "Alto Alegre",
      label: "Alto Alegre",
      ibge: 1400050,
    },
    {
      value: "Amajari",
      label: "Amajari",
      ibge: 1400027,
    },
    {
      value: "Boa Vista",
      label: "Boa Vista",
      ibge: 1400100,
    },
    {
      value: "Bonfim",
      label: "Bonfim",
      ibge: 1400159,
    },
    {
      value: "Cantá",
      label: "Cantá",
      ibge: 1400175,
    },
    {
      value: "Caracaraí",
      label: "Caracaraí",
      ibge: 1400209,
    },
    {
      value: "Caroebe",
      label: "Caroebe",
      ibge: 1400233,
    },
    {
      value: "Iracema",
      label: "Iracema",
      ibge: 1400282,
    },
    {
      value: "Mucajaí",
      label: "Mucajaí",
      ibge: 1400308,
    },
    {
      value: "Normandia",
      label: "Normandia",
      ibge: 1400407,
    },
    {
      value: "Pacaraima",
      label: "Pacaraima",
      ibge: 1400456,
    },
    {
      value: "Rorainópolis",
      label: "Rorainópolis",
      ibge: 1400472,
    },
    {
      value: "São João da Baliza",
      label: "São João da Baliza",
      ibge: 1400506,
    },
    {
      value: "São Luiz",
      label: "São Luiz",
      ibge: 1400605,
    },
    {
      value: "Uiramutã",
      label: "Uiramutã",
      ibge: 1400704,
    },
  ],
  RS: [
    {
      value: "Aceguá",
      label: "Aceguá",
      ibge: 4300034,
    },
    {
      value: "Água Santa",
      label: "Água Santa",
      ibge: 4300059,
    },
    {
      value: "Agudo",
      label: "Agudo",
      ibge: 4300109,
    },
    {
      value: "Ajuricaba",
      label: "Ajuricaba",
      ibge: 4300208,
    },
    {
      value: "Alecrim",
      label: "Alecrim",
      ibge: 4300307,
    },
    {
      value: "Alegrete",
      label: "Alegrete",
      ibge: 4300406,
    },
    {
      value: "Alegria",
      label: "Alegria",
      ibge: 4300455,
    },
    {
      value: "Almirante Tamandaré do Sul",
      label: "Almirante Tamandaré do Sul",
      ibge: 4300471,
    },
    {
      value: "Alpestre",
      label: "Alpestre",
      ibge: 4300505,
    },
    {
      value: "Alto Alegre",
      label: "Alto Alegre",
      ibge: 4300554,
    },
    {
      value: "Alto Feliz",
      label: "Alto Feliz",
      ibge: 4300570,
    },
    {
      value: "Alvorada",
      label: "Alvorada",
      ibge: 4300604,
    },
    {
      value: "Amaral Ferrador",
      label: "Amaral Ferrador",
      ibge: 4300638,
    },
    {
      value: "Ametista do Sul",
      label: "Ametista do Sul",
      ibge: 4300646,
    },
    {
      value: "André da Rocha",
      label: "André da Rocha",
      ibge: 4300661,
    },
    {
      value: "Anta Gorda",
      label: "Anta Gorda",
      ibge: 4300703,
    },
    {
      value: "Antônio Prado",
      label: "Antônio Prado",
      ibge: 4300802,
    },
    {
      value: "Arambaré",
      label: "Arambaré",
      ibge: 4300851,
    },
    {
      value: "Araricá",
      label: "Araricá",
      ibge: 4300877,
    },
    {
      value: "Aratiba",
      label: "Aratiba",
      ibge: 4300901,
    },
    {
      value: "Arroio do Meio",
      label: "Arroio do Meio",
      ibge: 4301008,
    },
    {
      value: "Arroio do Padre",
      label: "Arroio do Padre",
      ibge: 4301073,
    },
    {
      value: "Arroio do Sal",
      label: "Arroio do Sal",
      ibge: 4301057,
    },
    {
      value: "Arroio do Tigre",
      label: "Arroio do Tigre",
      ibge: 4301206,
    },
    {
      value: "Arroio dos Ratos",
      label: "Arroio dos Ratos",
      ibge: 4301107,
    },
    {
      value: "Arroio Grande",
      label: "Arroio Grande",
      ibge: 4301305,
    },
    {
      value: "Arvorezinha",
      label: "Arvorezinha",
      ibge: 4301404,
    },
    {
      value: "Augusto Pestana",
      label: "Augusto Pestana",
      ibge: 4301503,
    },
    {
      value: "Áurea",
      label: "Áurea",
      ibge: 4301552,
    },
    {
      value: "Bagé",
      label: "Bagé",
      ibge: 4301602,
    },
    {
      value: "Balneário Pinhal",
      label: "Balneário Pinhal",
      ibge: 4301636,
    },
    {
      value: "Barão",
      label: "Barão",
      ibge: 4301651,
    },
    {
      value: "Barão de Cotegipe",
      label: "Barão de Cotegipe",
      ibge: 4301701,
    },
    {
      value: "Barão do Triunfo",
      label: "Barão do Triunfo",
      ibge: 4301750,
    },
    {
      value: "Barra do Guarita",
      label: "Barra do Guarita",
      ibge: 4301859,
    },
    {
      value: "Barra do Quaraí",
      label: "Barra do Quaraí",
      ibge: 4301875,
    },
    {
      value: "Barra do Ribeiro",
      label: "Barra do Ribeiro",
      ibge: 4301909,
    },
    {
      value: "Barra do Rio Azul",
      label: "Barra do Rio Azul",
      ibge: 4301925,
    },
    {
      value: "Barra Funda",
      label: "Barra Funda",
      ibge: 4301958,
    },
    {
      value: "Barracão",
      label: "Barracão",
      ibge: 4301800,
    },
    {
      value: "Barros Cassal",
      label: "Barros Cassal",
      ibge: 4302006,
    },
    {
      value: "Benjamin Constan do Sul",
      label: "Benjamin Constan do Sul",
    },
    {
      value: "Bento Gonçalves",
      label: "Bento Gonçalves",
      ibge: 4302105,
    },
    {
      value: "Boa Vista das Missões",
      label: "Boa Vista das Missões",
      ibge: 4302154,
    },
    {
      value: "Boa Vista do Buricá",
      label: "Boa Vista do Buricá",
      ibge: 4302204,
    },
    {
      value: "Boa Vista do Cadeado",
      label: "Boa Vista do Cadeado",
      ibge: 4302220,
    },
    {
      value: "Boa Vista do Incra",
      label: "Boa Vista do Incra",
      ibge: 4302238,
    },
    {
      value: "Boa Vista do Sul",
      label: "Boa Vista do Sul",
      ibge: 4302253,
    },
    {
      value: "Bom Jesus",
      label: "Bom Jesus",
      ibge: 4302303,
    },
    {
      value: "Bom Princípio",
      label: "Bom Princípio",
      ibge: 4302352,
    },
    {
      value: "Bom Progresso",
      label: "Bom Progresso",
      ibge: 4302378,
    },
    {
      value: "Bom Retiro do Sul",
      label: "Bom Retiro do Sul",
      ibge: 4302402,
    },
    {
      value: "Boqueirão do Leão",
      label: "Boqueirão do Leão",
      ibge: 4302451,
    },
    {
      value: "Bossoroca",
      label: "Bossoroca",
      ibge: 4302501,
    },
    {
      value: "Bozano",
      label: "Bozano",
      ibge: 4302584,
    },
    {
      value: "Braga",
      label: "Braga",
      ibge: 4302600,
    },
    {
      value: "Brochier",
      label: "Brochier",
      ibge: 4302659,
    },
    {
      value: "Butiá",
      label: "Butiá",
      ibge: 4302709,
    },
    {
      value: "Caçapava do Sul",
      label: "Caçapava do Sul",
      ibge: 4302808,
    },
    {
      value: "Cacequi",
      label: "Cacequi",
      ibge: 4302907,
    },
    {
      value: "Cachoeira do Sul",
      label: "Cachoeira do Sul",
      ibge: 4303004,
    },
    {
      value: "Cachoeirinha",
      label: "Cachoeirinha",
      ibge: 4303103,
    },
    {
      value: "Cacique Doble",
      label: "Cacique Doble",
      ibge: 4303202,
    },
    {
      value: "Caibaté",
      label: "Caibaté",
      ibge: 4303301,
    },
    {
      value: "Caiçara",
      label: "Caiçara",
      ibge: 4303400,
    },
    {
      value: "Camaquã",
      label: "Camaquã",
      ibge: 4303509,
    },
    {
      value: "Camargo",
      label: "Camargo",
      ibge: 4303558,
    },
    {
      value: "Cambará do Sul",
      label: "Cambará do Sul",
      ibge: 4303608,
    },
    {
      value: "Campestre da Serra",
      label: "Campestre da Serra",
      ibge: 4303673,
    },
    {
      value: "Campina das Missões",
      label: "Campina das Missões",
      ibge: 4303707,
    },
    {
      value: "Campinas do Sul",
      label: "Campinas do Sul",
      ibge: 4303806,
    },
    {
      value: "Campo Bom",
      label: "Campo Bom",
      ibge: 4303905,
    },
    {
      value: "Campo Novo",
      label: "Campo Novo",
      ibge: 4304002,
    },
    {
      value: "Campos Borges",
      label: "Campos Borges",
      ibge: 4304101,
    },
    {
      value: "Candelária",
      label: "Candelária",
      ibge: 4304200,
    },
    {
      value: "Cândido Godói",
      label: "Cândido Godói",
      ibge: 4304309,
    },
    {
      value: "Candiota",
      label: "Candiota",
      ibge: 4304358,
    },
    {
      value: "Canela",
      label: "Canela",
      ibge: 4304408,
    },
    {
      value: "Canguçu",
      label: "Canguçu",
      ibge: 4304507,
    },
    {
      value: "Canoas",
      label: "Canoas",
      ibge: 4304606,
    },
    {
      value: "Canudos do Vale",
      label: "Canudos do Vale",
      ibge: 4304614,
    },
    {
      value: "Capão Bonito do Sul",
      label: "Capão Bonito do Sul",
      ibge: 4304622,
    },
    {
      value: "Capão da Canoa",
      label: "Capão da Canoa",
      ibge: 4304630,
    },
    {
      value: "Capão do Cipó",
      label: "Capão do Cipó",
      ibge: 4304655,
    },
    {
      value: "Capão do Leão",
      label: "Capão do Leão",
      ibge: 4304663,
    },
    {
      value: "Capela de Santana",
      label: "Capela de Santana",
      ibge: 4304689,
    },
    {
      value: "Capitão",
      label: "Capitão",
      ibge: 4304697,
    },
    {
      value: "Capivari do Sul",
      label: "Capivari do Sul",
      ibge: 4304671,
    },
    {
      value: "Caraá",
      label: "Caraá",
      ibge: 4304713,
    },
    {
      value: "Carazinho",
      label: "Carazinho",
      ibge: 4304705,
    },
    {
      value: "Carlos Barbosa",
      label: "Carlos Barbosa",
      ibge: 4304804,
    },
    {
      value: "Carlos Gomes",
      label: "Carlos Gomes",
      ibge: 4304853,
    },
    {
      value: "Casca",
      label: "Casca",
      ibge: 4304903,
    },
    {
      value: "Caseiros",
      label: "Caseiros",
      ibge: 4304952,
    },
    {
      value: "Catuípe",
      label: "Catuípe",
      ibge: 4305009,
    },
    {
      value: "Caxias do Sul",
      label: "Caxias do Sul",
      ibge: 4305108,
    },
    {
      value: "Centenário",
      label: "Centenário",
      ibge: 4305116,
    },
    {
      value: "Cerrito",
      label: "Cerrito",
      ibge: 4305124,
    },
    {
      value: "Cerro Branco",
      label: "Cerro Branco",
      ibge: 4305132,
    },
    {
      value: "Cerro Grande",
      label: "Cerro Grande",
      ibge: 4305157,
    },
    {
      value: "Cerro Grande do Sul",
      label: "Cerro Grande do Sul",
      ibge: 4305173,
    },
    {
      value: "Cerro Largo",
      label: "Cerro Largo",
      ibge: 4305207,
    },
    {
      value: "Chapada",
      label: "Chapada",
      ibge: 4305306,
    },
    {
      value: "Charqueadas",
      label: "Charqueadas",
      ibge: 4305355,
    },
    {
      value: "Charrua",
      label: "Charrua",
      ibge: 4305371,
    },
    {
      value: "Chiapeta",
      label: "Chiapeta",
    },
    {
      value: "Chuí",
      label: "Chuí",
      ibge: 4305439,
    },
    {
      value: "Chuvisca",
      label: "Chuvisca",
      ibge: 4305447,
    },
    {
      value: "Cidreira",
      label: "Cidreira",
      ibge: 4305454,
    },
    {
      value: "Ciríaco",
      label: "Ciríaco",
      ibge: 4305504,
    },
    {
      value: "Colinas",
      label: "Colinas",
      ibge: 4305587,
    },
    {
      value: "Colorado",
      label: "Colorado",
      ibge: 4305603,
    },
    {
      value: "Condor",
      label: "Condor",
      ibge: 4305702,
    },
    {
      value: "Constantina",
      label: "Constantina",
      ibge: 4305801,
    },
    {
      value: "Coqueiro Baixo",
      label: "Coqueiro Baixo",
      ibge: 4305835,
    },
    {
      value: "Coqueiros do Sul",
      label: "Coqueiros do Sul",
      ibge: 4305850,
    },
    {
      value: "Coronel Barros",
      label: "Coronel Barros",
      ibge: 4305871,
    },
    {
      value: "Coronel Bicaco",
      label: "Coronel Bicaco",
      ibge: 4305900,
    },
    {
      value: "Coronel Pilar",
      label: "Coronel Pilar",
      ibge: 4305934,
    },
    {
      value: "Cotiporã",
      label: "Cotiporã",
      ibge: 4305959,
    },
    {
      value: "Coxilha",
      label: "Coxilha",
      ibge: 4305975,
    },
    {
      value: "Crissiumal",
      label: "Crissiumal",
      ibge: 4306007,
    },
    {
      value: "Cristal",
      label: "Cristal",
      ibge: 4306056,
    },
    {
      value: "Cristal do Sul",
      label: "Cristal do Sul",
      ibge: 4306072,
    },
    {
      value: "Cruz Alta",
      label: "Cruz Alta",
      ibge: 4306106,
    },
    {
      value: "Cruzaltense",
      label: "Cruzaltense",
      ibge: 4306130,
    },
    {
      value: "Cruzeiro do Sul",
      label: "Cruzeiro do Sul",
      ibge: 4306205,
    },
    {
      value: "David Canabarro",
      label: "David Canabarro",
      ibge: 4306304,
    },
    {
      value: "Derrubadas",
      label: "Derrubadas",
      ibge: 4306320,
    },
    {
      value: "Dezesseis de Novembro",
      label: "Dezesseis de Novembro",
      ibge: 4306353,
    },
    {
      value: "Dilermando de Aguiar",
      label: "Dilermando de Aguiar",
      ibge: 4306379,
    },
    {
      value: "Dois Irmãos",
      label: "Dois Irmãos",
      ibge: 4306403,
    },
    {
      value: "Dois Irmãos das Missões",
      label: "Dois Irmãos das Missões",
      ibge: 4306429,
    },
    {
      value: "Dois Lajeados",
      label: "Dois Lajeados",
      ibge: 4306452,
    },
    {
      value: "Dom Feliciano",
      label: "Dom Feliciano",
      ibge: 4306502,
    },
    {
      value: "Dom Pedrito",
      label: "Dom Pedrito",
      ibge: 4306601,
    },
    {
      value: "Dom Pedro de Alcântara",
      label: "Dom Pedro de Alcântara",
      ibge: 4306551,
    },
    {
      value: "Dona Francisca",
      label: "Dona Francisca",
      ibge: 4306700,
    },
    {
      value: "Doutor Maurício Cardoso",
      label: "Doutor Maurício Cardoso",
      ibge: 4306734,
    },
    {
      value: "Doutor Ricardo",
      label: "Doutor Ricardo",
      ibge: 4306759,
    },
    {
      value: "Eldorado do Sul",
      label: "Eldorado do Sul",
      ibge: 4306767,
    },
    {
      value: "Encantado",
      label: "Encantado",
      ibge: 4306809,
    },
    {
      value: "Encruzilhada do Sul",
      label: "Encruzilhada do Sul",
      ibge: 4306908,
    },
    {
      value: "Engenho Velho",
      label: "Engenho Velho",
      ibge: 4306924,
    },
    {
      value: "Entre Rios do Sul",
      label: "Entre Rios do Sul",
      ibge: 4306957,
    },
    {
      value: "Entre-Ijuís",
      label: "Entre-Ijuís",
      ibge: 4306932,
    },
    {
      value: "Erebango",
      label: "Erebango",
      ibge: 4306973,
    },
    {
      value: "Erechim",
      label: "Erechim",
      ibge: 4307005,
    },
    {
      value: "Ernestina",
      label: "Ernestina",
      ibge: 4307054,
    },
    {
      value: "Erval Grande",
      label: "Erval Grande",
      ibge: 4307203,
    },
    {
      value: "Erval Seco",
      label: "Erval Seco",
      ibge: 4307302,
    },
    {
      value: "Esmeralda",
      label: "Esmeralda",
      ibge: 4307401,
    },
    {
      value: "Esperança do Sul",
      label: "Esperança do Sul",
      ibge: 4307450,
    },
    {
      value: "Espumoso",
      label: "Espumoso",
      ibge: 4307500,
    },
    {
      value: "Estação",
      label: "Estação",
      ibge: 4307559,
    },
    {
      value: "Estância Velha",
      label: "Estância Velha",
      ibge: 4307609,
    },
    {
      value: "Esteio",
      label: "Esteio",
      ibge: 4307708,
    },
    {
      value: "Estrela",
      label: "Estrela",
      ibge: 4307807,
    },
    {
      value: "Estrela Velha",
      label: "Estrela Velha",
      ibge: 4307815,
    },
    {
      value: "Eugênio de Castro",
      label: "Eugênio de Castro",
      ibge: 4307831,
    },
    {
      value: "Fagundes Varela",
      label: "Fagundes Varela",
      ibge: 4307864,
    },
    {
      value: "Farroupilha",
      label: "Farroupilha",
      ibge: 4307906,
    },
    {
      value: "Faxinal do Soturno",
      label: "Faxinal do Soturno",
      ibge: 4308003,
    },
    {
      value: "Faxinalzinho",
      label: "Faxinalzinho",
      ibge: 4308052,
    },
    {
      value: "Fazenda Vilanova",
      label: "Fazenda Vilanova",
      ibge: 4308078,
    },
    {
      value: "Feliz",
      label: "Feliz",
      ibge: 4308102,
    },
    {
      value: "Flores da Cunha",
      label: "Flores da Cunha",
      ibge: 4308201,
    },
    {
      value: "Floriano Peixoto",
      label: "Floriano Peixoto",
      ibge: 4308250,
    },
    {
      value: "Fontoura Xavier",
      label: "Fontoura Xavier",
      ibge: 4308300,
    },
    {
      value: "Formigueiro",
      label: "Formigueiro",
      ibge: 4308409,
    },
    {
      value: "Forquetinha",
      label: "Forquetinha",
      ibge: 4308433,
    },
    {
      value: "Fortaleza dos Valos",
      label: "Fortaleza dos Valos",
      ibge: 4308458,
    },
    {
      value: "Frederico Westphalen",
      label: "Frederico Westphalen",
      ibge: 4308508,
    },
    {
      value: "Garibaldi",
      label: "Garibaldi",
      ibge: 4308607,
    },
    {
      value: "Garruchos",
      label: "Garruchos",
      ibge: 4308656,
    },
    {
      value: "Gaurama",
      label: "Gaurama",
      ibge: 4308706,
    },
    {
      value: "General Câmara",
      label: "General Câmara",
      ibge: 4308805,
    },
    {
      value: "Gentil",
      label: "Gentil",
      ibge: 4308854,
    },
    {
      value: "Getúlio Vargas",
      label: "Getúlio Vargas",
      ibge: 4308904,
    },
    {
      value: "Giruá",
      label: "Giruá",
      ibge: 4309001,
    },
    {
      value: "Glorinha",
      label: "Glorinha",
      ibge: 4309050,
    },
    {
      value: "Gramado",
      label: "Gramado",
      ibge: 4309100,
    },
    {
      value: "Gramado dos Loureiros",
      label: "Gramado dos Loureiros",
      ibge: 4309126,
    },
    {
      value: "Gramado Xavier",
      label: "Gramado Xavier",
      ibge: 4309159,
    },
    {
      value: "Gravataí",
      label: "Gravataí",
      ibge: 4309209,
    },
    {
      value: "Guabiju",
      label: "Guabiju",
      ibge: 4309258,
    },
    {
      value: "Guaíba",
      label: "Guaíba",
      ibge: 4309308,
    },
    {
      value: "Guaporé",
      label: "Guaporé",
      ibge: 4309407,
    },
    {
      value: "Guarani das Missões",
      label: "Guarani das Missões",
      ibge: 4309506,
    },
    {
      value: "Harmonia",
      label: "Harmonia",
      ibge: 4309555,
    },
    {
      value: "Herval",
      label: "Herval",
      ibge: 4307104,
    },
    {
      value: "Herveiras",
      label: "Herveiras",
      ibge: 4309571,
    },
    {
      value: "Horizontina",
      label: "Horizontina",
      ibge: 4309605,
    },
    {
      value: "Hulha Negra",
      label: "Hulha Negra",
      ibge: 4309654,
    },
    {
      value: "Humaitá",
      label: "Humaitá",
      ibge: 4309704,
    },
    {
      value: "Ibarama",
      label: "Ibarama",
      ibge: 4309753,
    },
    {
      value: "Ibiaçá",
      label: "Ibiaçá",
      ibge: 4309803,
    },
    {
      value: "Ibiraiaras",
      label: "Ibiraiaras",
      ibge: 4309902,
    },
    {
      value: "Ibirapuitã",
      label: "Ibirapuitã",
      ibge: 4309951,
    },
    {
      value: "Ibirubá",
      label: "Ibirubá",
      ibge: 4310009,
    },
    {
      value: "Igrejinha",
      label: "Igrejinha",
      ibge: 4310108,
    },
    {
      value: "Ijuí",
      label: "Ijuí",
      ibge: 4310207,
    },
    {
      value: "Ilópolis",
      label: "Ilópolis",
      ibge: 4310306,
    },
    {
      value: "Imbé",
      label: "Imbé",
      ibge: 4310330,
    },
    {
      value: "Imigrante",
      label: "Imigrante",
      ibge: 4310363,
    },
    {
      value: "Independência",
      label: "Independência",
      ibge: 4310405,
    },
    {
      value: "Inhacorá",
      label: "Inhacorá",
      ibge: 4310413,
    },
    {
      value: "Ipê",
      label: "Ipê",
      ibge: 4310439,
    },
    {
      value: "Ipiranga do Sul",
      label: "Ipiranga do Sul",
      ibge: 4310462,
    },
    {
      value: "Iraí",
      label: "Iraí",
      ibge: 4310504,
    },
    {
      value: "Itaara",
      label: "Itaara",
      ibge: 4310538,
    },
    {
      value: "Itacurubi",
      label: "Itacurubi",
      ibge: 4310553,
    },
    {
      value: "Itapuca",
      label: "Itapuca",
      ibge: 4310579,
    },
    {
      value: "Itaqui",
      label: "Itaqui",
      ibge: 4310603,
    },
    {
      value: "Itati",
      label: "Itati",
      ibge: 4310652,
    },
    {
      value: "Itatiba do Sul",
      label: "Itatiba do Sul",
      ibge: 4310702,
    },
    {
      value: "Ivorá",
      label: "Ivorá",
      ibge: 4310751,
    },
    {
      value: "Ivoti",
      label: "Ivoti",
      ibge: 4310801,
    },
    {
      value: "Jaboticaba",
      label: "Jaboticaba",
      ibge: 4310850,
    },
    {
      value: "Jacuizinho",
      label: "Jacuizinho",
      ibge: 4310876,
    },
    {
      value: "Jacutinga",
      label: "Jacutinga",
      ibge: 4310900,
    },
    {
      value: "Jaguarão",
      label: "Jaguarão",
      ibge: 4311007,
    },
    {
      value: "Jaguari",
      label: "Jaguari",
      ibge: 4311106,
    },
    {
      value: "Jaquirana",
      label: "Jaquirana",
      ibge: 4311122,
    },
    {
      value: "Jari",
      label: "Jari",
      ibge: 4311130,
    },
    {
      value: "Jóia",
      label: "Jóia",
      ibge: 4311155,
    },
    {
      value: "Júlio de Castilhos",
      label: "Júlio de Castilhos",
      ibge: 4311205,
    },
    {
      value: "Lagoa Bonita do Sul",
      label: "Lagoa Bonita do Sul",
      ibge: 4311239,
    },
    {
      value: "Lagoa dos Três Cantos",
      label: "Lagoa dos Três Cantos",
      ibge: 4311270,
    },
    {
      value: "Lagoa Vermelha",
      label: "Lagoa Vermelha",
      ibge: 4311304,
    },
    {
      value: "Lagoão",
      label: "Lagoão",
      ibge: 4311254,
    },
    {
      value: "Lajeado",
      label: "Lajeado",
      ibge: 4311403,
    },
    {
      value: "Lajeado do Bugre",
      label: "Lajeado do Bugre",
      ibge: 4311429,
    },
    {
      value: "Lavras do Sul",
      label: "Lavras do Sul",
      ibge: 4311502,
    },
    {
      value: "Liberato Salzano",
      label: "Liberato Salzano",
      ibge: 4311601,
    },
    {
      value: "Lindolfo Collor",
      label: "Lindolfo Collor",
      ibge: 4311627,
    },
    {
      value: "Linha Nova",
      label: "Linha Nova",
      ibge: 4311643,
    },
    {
      value: "Maçambara",
      label: "Maçambara",
    },
    {
      value: "Machadinho",
      label: "Machadinho",
      ibge: 4311700,
    },
    {
      value: "Mampituba",
      label: "Mampituba",
      ibge: 4311734,
    },
    {
      value: "Manoel Viana",
      label: "Manoel Viana",
      ibge: 4311759,
    },
    {
      value: "Maquiné",
      label: "Maquiné",
      ibge: 4311775,
    },
    {
      value: "Maratá",
      label: "Maratá",
      ibge: 4311791,
    },
    {
      value: "Marau",
      label: "Marau",
      ibge: 4311809,
    },
    {
      value: "Marcelino Ramos",
      label: "Marcelino Ramos",
      ibge: 4311908,
    },
    {
      value: "Mariana Pimentel",
      label: "Mariana Pimentel",
      ibge: 4311981,
    },
    {
      value: "Mariano Moro",
      label: "Mariano Moro",
      ibge: 4312005,
    },
    {
      value: "Marques de Souza",
      label: "Marques de Souza",
      ibge: 4312054,
    },
    {
      value: "Mata",
      label: "Mata",
      ibge: 4312104,
    },
    {
      value: "Mato Castelhano",
      label: "Mato Castelhano",
      ibge: 4312138,
    },
    {
      value: "Mato Leitão",
      label: "Mato Leitão",
      ibge: 4312153,
    },
    {
      value: "Mato Queimado",
      label: "Mato Queimado",
      ibge: 4312179,
    },
    {
      value: "Maximiliano de Almeida",
      label: "Maximiliano de Almeida",
      ibge: 4312203,
    },
    {
      value: "Minas do Leão",
      label: "Minas do Leão",
      ibge: 4312252,
    },
    {
      value: "Miraguaí",
      label: "Miraguaí",
      ibge: 4312302,
    },
    {
      value: "Montauri",
      label: "Montauri",
      ibge: 4312351,
    },
    {
      value: "Monte Alegre dos Campos",
      label: "Monte Alegre dos Campos",
      ibge: 4312377,
    },
    {
      value: "Monte Belo do Sul",
      label: "Monte Belo do Sul",
      ibge: 4312385,
    },
    {
      value: "Montenegro",
      label: "Montenegro",
      ibge: 4312401,
    },
    {
      value: "Mormaço",
      label: "Mormaço",
      ibge: 4312427,
    },
    {
      value: "Morrinhos do Sul",
      label: "Morrinhos do Sul",
      ibge: 4312443,
    },
    {
      value: "Morro Redondo",
      label: "Morro Redondo",
      ibge: 4312450,
    },
    {
      value: "Morro Reuter",
      label: "Morro Reuter",
      ibge: 4312476,
    },
    {
      value: "Mostardas",
      label: "Mostardas",
      ibge: 4312500,
    },
    {
      value: "Muçum",
      label: "Muçum",
      ibge: 4312609,
    },
    {
      value: "Muitos Capões",
      label: "Muitos Capões",
      ibge: 4312617,
    },
    {
      value: "Muliterno",
      label: "Muliterno",
      ibge: 4312625,
    },
    {
      value: "Não-Me-Toque",
      label: "Não-Me-Toque",
      ibge: 4312658,
    },
    {
      value: "Nicolau Vergueiro",
      label: "Nicolau Vergueiro",
      ibge: 4312674,
    },
    {
      value: "Nonoai",
      label: "Nonoai",
      ibge: 4312708,
    },
    {
      value: "Nova Alvorada",
      label: "Nova Alvorada",
      ibge: 4312757,
    },
    {
      value: "Nova Araçá",
      label: "Nova Araçá",
      ibge: 4312807,
    },
    {
      value: "Nova Bassano",
      label: "Nova Bassano",
      ibge: 4312906,
    },
    {
      value: "Nova Boa Vista",
      label: "Nova Boa Vista",
      ibge: 4312955,
    },
    {
      value: "Nova Bréscia",
      label: "Nova Bréscia",
      ibge: 4313003,
    },
    {
      value: "Nova Candelária",
      label: "Nova Candelária",
      ibge: 4313011,
    },
    {
      value: "Nova Esperança do Sul",
      label: "Nova Esperança do Sul",
      ibge: 4313037,
    },
    {
      value: "Nova Hartz",
      label: "Nova Hartz",
      ibge: 4313060,
    },
    {
      value: "Nova Pádua",
      label: "Nova Pádua",
      ibge: 4313086,
    },
    {
      value: "Nova Palma",
      label: "Nova Palma",
      ibge: 4313102,
    },
    {
      value: "Nova Petrópolis",
      label: "Nova Petrópolis",
      ibge: 4313201,
    },
    {
      value: "Nova Prata",
      label: "Nova Prata",
      ibge: 4313300,
    },
    {
      value: "Nova Ramada",
      label: "Nova Ramada",
      ibge: 4313334,
    },
    {
      value: "Nova Roma do Sul",
      label: "Nova Roma do Sul",
      ibge: 4313359,
    },
    {
      value: "Nova Santa Rita",
      label: "Nova Santa Rita",
      ibge: 4313375,
    },
    {
      value: "Novo Barreiro",
      label: "Novo Barreiro",
      ibge: 4313490,
    },
    {
      value: "Novo Cabrais",
      label: "Novo Cabrais",
      ibge: 4313391,
    },
    {
      value: "Novo Hamburgo",
      label: "Novo Hamburgo",
      ibge: 4313409,
    },
    {
      value: "Novo Machado",
      label: "Novo Machado",
      ibge: 4313425,
    },
    {
      value: "Novo Tiradentes",
      label: "Novo Tiradentes",
      ibge: 4313441,
    },
    {
      value: "Novo Xingu",
      label: "Novo Xingu",
      ibge: 4313466,
    },
    {
      value: "Osório",
      label: "Osório",
      ibge: 4313508,
    },
    {
      value: "Paim Filho",
      label: "Paim Filho",
      ibge: 4313607,
    },
    {
      value: "Palmares do Sul",
      label: "Palmares do Sul",
      ibge: 4313656,
    },
    {
      value: "Palmeira das Missões",
      label: "Palmeira das Missões",
      ibge: 4313706,
    },
    {
      value: "Palmitinho",
      label: "Palmitinho",
      ibge: 4313805,
    },
    {
      value: "Panambi",
      label: "Panambi",
      ibge: 4313904,
    },
    {
      value: "Pântano Grande",
      label: "Pântano Grande",
    },
    {
      value: "Paraí",
      label: "Paraí",
      ibge: 4314001,
    },
    {
      value: "Paraíso do Sul",
      label: "Paraíso do Sul",
      ibge: 4314027,
    },
    {
      value: "Pareci Novo",
      label: "Pareci Novo",
      ibge: 4314035,
    },
    {
      value: "Parobé",
      label: "Parobé",
      ibge: 4314050,
    },
    {
      value: "Passa Sete",
      label: "Passa Sete",
      ibge: 4314068,
    },
    {
      value: "Passo do Sobrado",
      label: "Passo do Sobrado",
      ibge: 4314076,
    },
    {
      value: "Passo Fundo",
      label: "Passo Fundo",
      ibge: 4314100,
    },
    {
      value: "Paulo Bento",
      label: "Paulo Bento",
      ibge: 4314134,
    },
    {
      value: "Paverama",
      label: "Paverama",
      ibge: 4314159,
    },
    {
      value: "Pedras Altas",
      label: "Pedras Altas",
      ibge: 4314175,
    },
    {
      value: "Pedro Osório",
      label: "Pedro Osório",
      ibge: 4314209,
    },
    {
      value: "Pejuçara",
      label: "Pejuçara",
      ibge: 4314308,
    },
    {
      value: "Pelotas",
      label: "Pelotas",
      ibge: 4314407,
    },
    {
      value: "Picada Café",
      label: "Picada Café",
      ibge: 4314423,
    },
    {
      value: "Pinhal",
      label: "Pinhal",
      ibge: 4314456,
    },
    {
      value: "Pinhal da Serra",
      label: "Pinhal da Serra",
      ibge: 4314464,
    },
    {
      value: "Pinhal Grande",
      label: "Pinhal Grande",
      ibge: 4314472,
    },
    {
      value: "Pinheirinho do Vale",
      label: "Pinheirinho do Vale",
      ibge: 4314498,
    },
    {
      value: "Pinheiro Machado",
      label: "Pinheiro Machado",
      ibge: 4314506,
    },
    {
      value: "Pirapó",
      label: "Pirapó",
      ibge: 4314555,
    },
    {
      value: "Piratini",
      label: "Piratini",
      ibge: 4314605,
    },
    {
      value: "Planalto",
      label: "Planalto",
      ibge: 4314704,
    },
    {
      value: "Poço das Antas",
      label: "Poço das Antas",
      ibge: 4314753,
    },
    {
      value: "Pontão",
      label: "Pontão",
      ibge: 4314779,
    },
    {
      value: "Ponte Preta",
      label: "Ponte Preta",
      ibge: 4314787,
    },
    {
      value: "Portão",
      label: "Portão",
      ibge: 4314803,
    },
    {
      value: "Porto Alegre",
      label: "Porto Alegre",
      ibge: 4314902,
    },
    {
      value: "Porto Lucena",
      label: "Porto Lucena",
      ibge: 4315008,
    },
    {
      value: "Porto Mauá",
      label: "Porto Mauá",
      ibge: 4315057,
    },
    {
      value: "Porto Vera Cruz",
      label: "Porto Vera Cruz",
      ibge: 4315073,
    },
    {
      value: "Porto Xavier",
      label: "Porto Xavier",
      ibge: 4315107,
    },
    {
      value: "Pouso Novo",
      label: "Pouso Novo",
      ibge: 4315131,
    },
    {
      value: "Presidente Lucena",
      label: "Presidente Lucena",
      ibge: 4315149,
    },
    {
      value: "Progresso",
      label: "Progresso",
      ibge: 4315156,
    },
    {
      value: "Protásio Alves",
      label: "Protásio Alves",
      ibge: 4315172,
    },
    {
      value: "Putinga",
      label: "Putinga",
      ibge: 4315206,
    },
    {
      value: "Quaraí",
      label: "Quaraí",
      ibge: 4315305,
    },
    {
      value: "Quatro Irmãos",
      label: "Quatro Irmãos",
      ibge: 4315313,
    },
    {
      value: "Quevedos",
      label: "Quevedos",
      ibge: 4315321,
    },
    {
      value: "Quinze de Novembro",
      label: "Quinze de Novembro",
      ibge: 4315354,
    },
    {
      value: "Redentora",
      label: "Redentora",
      ibge: 4315404,
    },
    {
      value: "Relvado",
      label: "Relvado",
      ibge: 4315453,
    },
    {
      value: "Restinga Seca",
      label: "Restinga Seca",
    },
    {
      value: "Rio dos Índios",
      label: "Rio dos Índios",
      ibge: 4315552,
    },
    {
      value: "Rio Grande",
      label: "Rio Grande",
      ibge: 4315602,
    },
    {
      value: "Rio Pardo",
      label: "Rio Pardo",
      ibge: 4315701,
    },
    {
      value: "Riozinho",
      label: "Riozinho",
      ibge: 4315750,
    },
    {
      value: "Roca Sales",
      label: "Roca Sales",
      ibge: 4315800,
    },
    {
      value: "Rodeio Bonito",
      label: "Rodeio Bonito",
      ibge: 4315909,
    },
    {
      value: "Rolador",
      label: "Rolador",
      ibge: 4315958,
    },
    {
      value: "Rolante",
      label: "Rolante",
      ibge: 4316006,
    },
    {
      value: "Ronda Alta",
      label: "Ronda Alta",
      ibge: 4316105,
    },
    {
      value: "Rondinha",
      label: "Rondinha",
      ibge: 4316204,
    },
    {
      value: "Roque Gonzales",
      label: "Roque Gonzales",
      ibge: 4316303,
    },
    {
      value: "Rosário do Sul",
      label: "Rosário do Sul",
      ibge: 4316402,
    },
    {
      value: "Sagrada Família",
      label: "Sagrada Família",
      ibge: 4316428,
    },
    {
      value: "Saldanha Marinho",
      label: "Saldanha Marinho",
      ibge: 4316436,
    },
    {
      value: "Salto do Jacuí",
      label: "Salto do Jacuí",
      ibge: 4316451,
    },
    {
      value: "Salvador das Missões",
      label: "Salvador das Missões",
      ibge: 4316477,
    },
    {
      value: "Salvador do Sul",
      label: "Salvador do Sul",
      ibge: 4316501,
    },
    {
      value: "Sananduva",
      label: "Sananduva",
      ibge: 4316600,
    },
    {
      value: "Santa Bárbara do Sul",
      label: "Santa Bárbara do Sul",
      ibge: 4316709,
    },
    {
      value: "Santa Cecília do Sul",
      label: "Santa Cecília do Sul",
      ibge: 4316733,
    },
    {
      value: "Santa Clara do Sul",
      label: "Santa Clara do Sul",
      ibge: 4316758,
    },
    {
      value: "Santa Cruz do Sul",
      label: "Santa Cruz do Sul",
      ibge: 4316808,
    },
    {
      value: "Santa Margarida do Sul",
      label: "Santa Margarida do Sul",
      ibge: 4316972,
    },
    {
      value: "Santa Maria",
      label: "Santa Maria",
      ibge: 4316907,
    },
    {
      value: "Santa Maria do Herval",
      label: "Santa Maria do Herval",
      ibge: 4316956,
    },
    {
      value: "Santa Rosa",
      label: "Santa Rosa",
      ibge: 4317202,
    },
    {
      value: "Santa Tereza",
      label: "Santa Tereza",
      ibge: 4317251,
    },
    {
      value: "Santa Vitória do Palmar",
      label: "Santa Vitória do Palmar",
      ibge: 4317301,
    },
    {
      value: "Santana da Boa Vista",
      label: "Santana da Boa Vista",
      ibge: 4317004,
    },
    {
      value: "Santana do Livramento",
      label: "Santana do Livramento",
    },
    {
      value: "Santiago",
      label: "Santiago",
      ibge: 4317400,
    },
    {
      value: "Santo Ângelo",
      label: "Santo Ângelo",
      ibge: 4317509,
    },
    {
      value: "Santo Antônio da Patrulha",
      label: "Santo Antônio da Patrulha",
      ibge: 4317608,
    },
    {
      value: "Santo Antônio das Missões",
      label: "Santo Antônio das Missões",
      ibge: 4317707,
    },
    {
      value: "Santo Antônio do Palma",
      label: "Santo Antônio do Palma",
      ibge: 4317558,
    },
    {
      value: "Santo Antônio do Planalto",
      label: "Santo Antônio do Planalto",
      ibge: 4317756,
    },
    {
      value: "Santo Augusto",
      label: "Santo Augusto",
      ibge: 4317806,
    },
    {
      value: "Santo Cristo",
      label: "Santo Cristo",
      ibge: 4317905,
    },
    {
      value: "Santo Expedito do Sul",
      label: "Santo Expedito do Sul",
      ibge: 4317954,
    },
    {
      value: "São Borja",
      label: "São Borja",
      ibge: 4318002,
    },
    {
      value: "São Domingos do Sul",
      label: "São Domingos do Sul",
      ibge: 4318051,
    },
    {
      value: "São Francisco de Assis",
      label: "São Francisco de Assis",
      ibge: 4318101,
    },
    {
      value: "São Francisco de Paula",
      label: "São Francisco de Paula",
      ibge: 4318200,
    },
    {
      value: "São Gabriel",
      label: "São Gabriel",
      ibge: 4318309,
    },
    {
      value: "São Jerônimo",
      label: "São Jerônimo",
      ibge: 4318408,
    },
    {
      value: "São João da Urtiga",
      label: "São João da Urtiga",
      ibge: 4318424,
    },
    {
      value: "São João do Polêsine",
      label: "São João do Polêsine",
      ibge: 4318432,
    },
    {
      value: "São Jorge",
      label: "São Jorge",
      ibge: 4318440,
    },
    {
      value: "São José das Missões",
      label: "São José das Missões",
      ibge: 4318457,
    },
    {
      value: "São José do Herval",
      label: "São José do Herval",
      ibge: 4318465,
    },
    {
      value: "São José do Hortêncio",
      label: "São José do Hortêncio",
      ibge: 4318481,
    },
    {
      value: "São José do Inhacorá",
      label: "São José do Inhacorá",
      ibge: 4318499,
    },
    {
      value: "São José do Norte",
      label: "São José do Norte",
      ibge: 4318507,
    },
    {
      value: "São José do Ouro",
      label: "São José do Ouro",
      ibge: 4318606,
    },
    {
      value: "São José do Sul",
      label: "São José do Sul",
      ibge: 4318614,
    },
    {
      value: "São José dos Ausentes",
      label: "São José dos Ausentes",
      ibge: 4318622,
    },
    {
      value: "São Leopoldo",
      label: "São Leopoldo",
      ibge: 4318705,
    },
    {
      value: "São Lourenço do Sul",
      label: "São Lourenço do Sul",
      ibge: 4318804,
    },
    {
      value: "São Luiz Gonzaga",
      label: "São Luiz Gonzaga",
      ibge: 4318903,
    },
    {
      value: "São Marcos",
      label: "São Marcos",
      ibge: 4319000,
    },
    {
      value: "São Martinho",
      label: "São Martinho",
      ibge: 4319109,
    },
    {
      value: "São Martinho da Serra",
      label: "São Martinho da Serra",
      ibge: 4319125,
    },
    {
      value: "São Miguel das Missões",
      label: "São Miguel das Missões",
      ibge: 4319158,
    },
    {
      value: "São Nicolau",
      label: "São Nicolau",
      ibge: 4319208,
    },
    {
      value: "São Paulo das Missões",
      label: "São Paulo das Missões",
      ibge: 4319307,
    },
    {
      value: "São Pedro da Serra",
      label: "São Pedro da Serra",
      ibge: 4319356,
    },
    {
      value: "São Pedro das Missões",
      label: "São Pedro das Missões",
      ibge: 4319364,
    },
    {
      value: "São Pedro do Butiá",
      label: "São Pedro do Butiá",
      ibge: 4319372,
    },
    {
      value: "São Pedro do Sul",
      label: "São Pedro do Sul",
      ibge: 4319406,
    },
    {
      value: "São Sebastião do Caí",
      label: "São Sebastião do Caí",
      ibge: 4319505,
    },
    {
      value: "São Sepé",
      label: "São Sepé",
      ibge: 4319604,
    },
    {
      value: "São Valentim",
      label: "São Valentim",
      ibge: 4319703,
    },
    {
      value: "São Valentim do Sul",
      label: "São Valentim do Sul",
      ibge: 4319711,
    },
    {
      value: "São Valério do Sul",
      label: "São Valério do Sul",
      ibge: 4319737,
    },
    {
      value: "São Vendelino",
      label: "São Vendelino",
      ibge: 4319752,
    },
    {
      value: "São Vicente do Sul",
      label: "São Vicente do Sul",
      ibge: 4319802,
    },
    {
      value: "Sapiranga",
      label: "Sapiranga",
      ibge: 4319901,
    },
    {
      value: "Sapucaia do Sul",
      label: "Sapucaia do Sul",
      ibge: 4320008,
    },
    {
      value: "Sarandi",
      label: "Sarandi",
      ibge: 4320107,
    },
    {
      value: "Seberi",
      label: "Seberi",
      ibge: 4320206,
    },
    {
      value: "Sede Nova",
      label: "Sede Nova",
      ibge: 4320230,
    },
    {
      value: "Segredo",
      label: "Segredo",
      ibge: 4320263,
    },
    {
      value: "Selbach",
      label: "Selbach",
      ibge: 4320305,
    },
    {
      value: "Senador Salgado Filho",
      label: "Senador Salgado Filho",
      ibge: 4320321,
    },
    {
      value: "Sentinela do Sul",
      label: "Sentinela do Sul",
      ibge: 4320354,
    },
    {
      value: "Serafina Corrêa",
      label: "Serafina Corrêa",
      ibge: 4320404,
    },
    {
      value: "Sério",
      label: "Sério",
      ibge: 4320453,
    },
    {
      value: "Sertão",
      label: "Sertão",
      ibge: 4320503,
    },
    {
      value: "Sertão Santana",
      label: "Sertão Santana",
      ibge: 4320552,
    },
    {
      value: "Sete de Setembro",
      label: "Sete de Setembro",
      ibge: 4320578,
    },
    {
      value: "Severiano de Almeida",
      label: "Severiano de Almeida",
      ibge: 4320602,
    },
    {
      value: "Silveira Martins",
      label: "Silveira Martins",
      ibge: 4320651,
    },
    {
      value: "Sinimbu",
      label: "Sinimbu",
      ibge: 4320677,
    },
    {
      value: "Sobradinho",
      label: "Sobradinho",
      ibge: 4320701,
    },
    {
      value: "Soledade",
      label: "Soledade",
      ibge: 4320800,
    },
    {
      value: "Tabaí",
      label: "Tabaí",
      ibge: 4320859,
    },
    {
      value: "Tapejara",
      label: "Tapejara",
      ibge: 4320909,
    },
    {
      value: "Tapera",
      label: "Tapera",
      ibge: 4321006,
    },
    {
      value: "Tapes",
      label: "Tapes",
      ibge: 4321105,
    },
    {
      value: "Taquara",
      label: "Taquara",
      ibge: 4321204,
    },
    {
      value: "Taquari",
      label: "Taquari",
      ibge: 4321303,
    },
    {
      value: "Taquaruçu do Sul",
      label: "Taquaruçu do Sul",
      ibge: 4321329,
    },
    {
      value: "Tavares",
      label: "Tavares",
      ibge: 4321352,
    },
    {
      value: "Tenente Portela",
      label: "Tenente Portela",
      ibge: 4321402,
    },
    {
      value: "Terra de Areia",
      label: "Terra de Areia",
      ibge: 4321436,
    },
    {
      value: "Teutônia",
      label: "Teutônia",
      ibge: 4321451,
    },
    {
      value: "Tio Hugo",
      label: "Tio Hugo",
      ibge: 4321469,
    },
    {
      value: "Tiradentes do Sul",
      label: "Tiradentes do Sul",
      ibge: 4321477,
    },
    {
      value: "Toropi",
      label: "Toropi",
      ibge: 4321493,
    },
    {
      value: "Torres",
      label: "Torres",
      ibge: 4321501,
    },
    {
      value: "Tramandaí",
      label: "Tramandaí",
      ibge: 4321600,
    },
    {
      value: "Travesseiro",
      label: "Travesseiro",
      ibge: 4321626,
    },
    {
      value: "Três Arroios",
      label: "Três Arroios",
      ibge: 4321634,
    },
    {
      value: "Três Cachoeiras",
      label: "Três Cachoeiras",
      ibge: 4321667,
    },
    {
      value: "Três Coroas",
      label: "Três Coroas",
      ibge: 4321709,
    },
    {
      value: "Três de Maio",
      label: "Três de Maio",
      ibge: 4321808,
    },
    {
      value: "Três Forquilhas",
      label: "Três Forquilhas",
      ibge: 4321832,
    },
    {
      value: "Três Palmeiras",
      label: "Três Palmeiras",
      ibge: 4321857,
    },
    {
      value: "Três Passos",
      label: "Três Passos",
      ibge: 4321907,
    },
    {
      value: "Trindade do Sul",
      label: "Trindade do Sul",
      ibge: 4321956,
    },
    {
      value: "Triunfo",
      label: "Triunfo",
      ibge: 4322004,
    },
    {
      value: "Tucunduva",
      label: "Tucunduva",
      ibge: 4322103,
    },
    {
      value: "Tunas",
      label: "Tunas",
      ibge: 4322152,
    },
    {
      value: "Tupanci do Sul",
      label: "Tupanci do Sul",
      ibge: 4322186,
    },
    {
      value: "Tupanciretã",
      label: "Tupanciretã",
      ibge: 4322202,
    },
    {
      value: "Tupandi",
      label: "Tupandi",
      ibge: 4322251,
    },
    {
      value: "Tuparendi",
      label: "Tuparendi",
      ibge: 4322301,
    },
    {
      value: "Turuçu",
      label: "Turuçu",
      ibge: 4322327,
    },
    {
      value: "Ubiretama",
      label: "Ubiretama",
      ibge: 4322343,
    },
    {
      value: "União da Serra",
      label: "União da Serra",
      ibge: 4322350,
    },
    {
      value: "Unistalda",
      label: "Unistalda",
      ibge: 4322376,
    },
    {
      value: "Uruguaiana",
      label: "Uruguaiana",
      ibge: 4322400,
    },
    {
      value: "Vacaria",
      label: "Vacaria",
      ibge: 4322509,
    },
    {
      value: "Vale do Sol",
      label: "Vale do Sol",
      ibge: 4322533,
    },
    {
      value: "Vale Real",
      label: "Vale Real",
      ibge: 4322541,
    },
    {
      value: "Vale Verde",
      label: "Vale Verde",
      ibge: 4322525,
    },
    {
      value: "Vanini",
      label: "Vanini",
      ibge: 4322558,
    },
    {
      value: "Venâncio Aires",
      label: "Venâncio Aires",
      ibge: 4322608,
    },
    {
      value: "Vera Cruz",
      label: "Vera Cruz",
      ibge: 4322707,
    },
    {
      value: "Veranópolis",
      label: "Veranópolis",
      ibge: 4322806,
    },
    {
      value: "Vespasiano Correa",
      label: "Vespasiano Correa",
    },
    {
      value: "Viadutos",
      label: "Viadutos",
      ibge: 4322905,
    },
    {
      value: "Viamão",
      label: "Viamão",
      ibge: 4323002,
    },
    {
      value: "Vicente Dutra",
      label: "Vicente Dutra",
      ibge: 4323101,
    },
    {
      value: "Victor Graeff",
      label: "Victor Graeff",
      ibge: 4323200,
    },
    {
      value: "Vila Flores",
      label: "Vila Flores",
      ibge: 4323309,
    },
    {
      value: "Vila Lângaro",
      label: "Vila Lângaro",
      ibge: 4323358,
    },
    {
      value: "Vila Maria",
      label: "Vila Maria",
      ibge: 4323408,
    },
    {
      value: "Vila Nova do Sul",
      label: "Vila Nova do Sul",
      ibge: 4323457,
    },
    {
      value: "Vista Alegre",
      label: "Vista Alegre",
      ibge: 4323507,
    },
    {
      value: "Vista Alegre do Prata",
      label: "Vista Alegre do Prata",
      ibge: 4323606,
    },
    {
      value: "Vista Gaúcha",
      label: "Vista Gaúcha",
      ibge: 4323705,
    },
    {
      value: "Vitória das Missões",
      label: "Vitória das Missões",
      ibge: 4323754,
    },
    {
      value: "Westfália",
      label: "Westfália",
      ibge: 4323770,
    },
    {
      value: "Xangri-lá",
      label: "Xangri-lá",
      ibge: 4323804,
    },
    {
      value: "Benjamin Constant do Sul",
      label: "Benjamin Constant do Sul",
      ibge: 4302055,
    },
    {
      value: "Chiapetta",
      label: "Chiapetta",
      ibge: 4305405,
    },
    {
      value: "Maçambará",
      label: "Maçambará",
      ibge: 4311718,
    },
    {
      value: "Pantano Grande",
      label: "Pantano Grande",
      ibge: 4313953,
    },
    {
      value: "Pinto Bandeira",
      label: "Pinto Bandeira",
      ibge: 4314548,
    },
    {
      value: "Restinga Sêca",
      label: "Restinga Sêca",
      ibge: 4315503,
    },
    {
      value: "Sant'Ana do Livramento",
      label: "Sant'Ana do Livramento",
      ibge: 4317103,
    },
    {
      value: "Vespasiano Corrêa",
      label: "Vespasiano Corrêa",
      ibge: 4322855,
    },
  ],
  SC: [
    {
      value: "Abdon Batista",
      label: "Abdon Batista",
      ibge: 4200051,
    },
    {
      value: "Abelardo Luz",
      label: "Abelardo Luz",
      ibge: 4200101,
    },
    {
      value: "Agrolândia",
      label: "Agrolândia",
      ibge: 4200200,
    },
    {
      value: "Agronômica",
      label: "Agronômica",
      ibge: 4200309,
    },
    {
      value: "Água Doce",
      label: "Água Doce",
      ibge: 4200408,
    },
    {
      value: "Águas de Chapecó",
      label: "Águas de Chapecó",
      ibge: 4200507,
    },
    {
      value: "Águas Frias",
      label: "Águas Frias",
      ibge: 4200556,
    },
    {
      value: "Águas Mornas",
      label: "Águas Mornas",
      ibge: 4200606,
    },
    {
      value: "Alfredo Wagner",
      label: "Alfredo Wagner",
      ibge: 4200705,
    },
    {
      value: "Alto Bela Vista",
      label: "Alto Bela Vista",
      ibge: 4200754,
    },
    {
      value: "Anchieta",
      label: "Anchieta",
      ibge: 4200804,
    },
    {
      value: "Angelina",
      label: "Angelina",
      ibge: 4200903,
    },
    {
      value: "Anita Garibaldi",
      label: "Anita Garibaldi",
      ibge: 4201000,
    },
    {
      value: "Anitápolis",
      label: "Anitápolis",
      ibge: 4201109,
    },
    {
      value: "Antônio Carlos",
      label: "Antônio Carlos",
      ibge: 4201208,
    },
    {
      value: "Apiúna",
      label: "Apiúna",
      ibge: 4201257,
    },
    {
      value: "Arabutã",
      label: "Arabutã",
      ibge: 4201273,
    },
    {
      value: "Araquari",
      label: "Araquari",
      ibge: 4201307,
    },
    {
      value: "Araranguá",
      label: "Araranguá",
      ibge: 4201406,
    },
    {
      value: "Armazém",
      label: "Armazém",
      ibge: 4201505,
    },
    {
      value: "Arroio Trinta",
      label: "Arroio Trinta",
      ibge: 4201604,
    },
    {
      value: "Arvoredo",
      label: "Arvoredo",
      ibge: 4201653,
    },
    {
      value: "Ascurra",
      label: "Ascurra",
      ibge: 4201703,
    },
    {
      value: "Atalanta",
      label: "Atalanta",
      ibge: 4201802,
    },
    {
      value: "Aurora",
      label: "Aurora",
      ibge: 4201901,
    },
    {
      value: "Balneário Arroio do Silva",
      label: "Balneário Arroio do Silva",
      ibge: 4201950,
    },
    {
      value: "Balneário Barra do Sul",
      label: "Balneário Barra do Sul",
      ibge: 4202057,
    },
    {
      value: "Balneário Camboriú",
      label: "Balneário Camboriú",
      ibge: 4202008,
    },
    {
      value: "Balneário Gaivota",
      label: "Balneário Gaivota",
      ibge: 4202073,
    },
    {
      value: "Bandeirante",
      label: "Bandeirante",
      ibge: 4202081,
    },
    {
      value: "Barra Bonita",
      label: "Barra Bonita",
      ibge: 4202099,
    },
    {
      value: "Barra Velha",
      label: "Barra Velha",
      ibge: 4202107,
    },
    {
      value: "Bela Vista do Toldo",
      label: "Bela Vista do Toldo",
      ibge: 4202131,
    },
    {
      value: "Belmonte",
      label: "Belmonte",
      ibge: 4202156,
    },
    {
      value: "Benedito Novo",
      label: "Benedito Novo",
      ibge: 4202206,
    },
    {
      value: "Biguaçu",
      label: "Biguaçu",
      ibge: 4202305,
    },
    {
      value: "Blumenau",
      label: "Blumenau",
      ibge: 4202404,
    },
    {
      value: "Bocaina do Sul",
      label: "Bocaina do Sul",
      ibge: 4202438,
    },
    {
      value: "Bom Jardim da Serra",
      label: "Bom Jardim da Serra",
      ibge: 4202503,
    },
    {
      value: "Bom Jesus",
      label: "Bom Jesus",
      ibge: 4202537,
    },
    {
      value: "Bom Jesus do Oeste",
      label: "Bom Jesus do Oeste",
      ibge: 4202578,
    },
    {
      value: "Bom Retiro",
      label: "Bom Retiro",
      ibge: 4202602,
    },
    {
      value: "Bombinhas",
      label: "Bombinhas",
      ibge: 4202453,
    },
    {
      value: "Botuverá",
      label: "Botuverá",
      ibge: 4202701,
    },
    {
      value: "Braço do Norte",
      label: "Braço do Norte",
      ibge: 4202800,
    },
    {
      value: "Braço do Trombudo",
      label: "Braço do Trombudo",
      ibge: 4202859,
    },
    {
      value: "Brunópolis",
      label: "Brunópolis",
      ibge: 4202875,
    },
    {
      value: "Brusque",
      label: "Brusque",
      ibge: 4202909,
    },
    {
      value: "Caçador",
      label: "Caçador",
      ibge: 4203006,
    },
    {
      value: "Caibi",
      label: "Caibi",
      ibge: 4203105,
    },
    {
      value: "Calmon",
      label: "Calmon",
      ibge: 4203154,
    },
    {
      value: "Camboriú",
      label: "Camboriú",
      ibge: 4203204,
    },
    {
      value: "Campo Alegre",
      label: "Campo Alegre",
      ibge: 4203303,
    },
    {
      value: "Campo Belo do Sul",
      label: "Campo Belo do Sul",
      ibge: 4203402,
    },
    {
      value: "Campo Erê",
      label: "Campo Erê",
      ibge: 4203501,
    },
    {
      value: "Campos Novos",
      label: "Campos Novos",
      ibge: 4203600,
    },
    {
      value: "Canelinha",
      label: "Canelinha",
      ibge: 4203709,
    },
    {
      value: "Canoinhas",
      label: "Canoinhas",
      ibge: 4203808,
    },
    {
      value: "Capão Alto",
      label: "Capão Alto",
      ibge: 4203253,
    },
    {
      value: "Capinzal",
      label: "Capinzal",
      ibge: 4203907,
    },
    {
      value: "Capivari de Baixo",
      label: "Capivari de Baixo",
      ibge: 4203956,
    },
    {
      value: "Catanduvas",
      label: "Catanduvas",
      ibge: 4204004,
    },
    {
      value: "Caxambu do Sul",
      label: "Caxambu do Sul",
      ibge: 4204103,
    },
    {
      value: "Celso Ramos",
      label: "Celso Ramos",
      ibge: 4204152,
    },
    {
      value: "Cerro Negro",
      label: "Cerro Negro",
      ibge: 4204178,
    },
    {
      value: "Chapadão do Lageado",
      label: "Chapadão do Lageado",
      ibge: 4204194,
    },
    {
      value: "Chapecó",
      label: "Chapecó",
      ibge: 4204202,
    },
    {
      value: "Cocal do Sul",
      label: "Cocal do Sul",
      ibge: 4204251,
    },
    {
      value: "Concórdia",
      label: "Concórdia",
      ibge: 4204301,
    },
    {
      value: "Cordilheira Alta",
      label: "Cordilheira Alta",
      ibge: 4204350,
    },
    {
      value: "Coronel Freitas",
      label: "Coronel Freitas",
      ibge: 4204400,
    },
    {
      value: "Coronel Martins",
      label: "Coronel Martins",
      ibge: 4204459,
    },
    {
      value: "Correia Pinto",
      label: "Correia Pinto",
      ibge: 4204558,
    },
    {
      value: "Corupá",
      label: "Corupá",
      ibge: 4204509,
    },
    {
      value: "Criciúma",
      label: "Criciúma",
      ibge: 4204608,
    },
    {
      value: "Cunha Porã",
      label: "Cunha Porã",
      ibge: 4204707,
    },
    {
      value: "Cunhataí",
      label: "Cunhataí",
      ibge: 4204756,
    },
    {
      value: "Curitibanos",
      label: "Curitibanos",
      ibge: 4204806,
    },
    {
      value: "Descanso",
      label: "Descanso",
      ibge: 4204905,
    },
    {
      value: "Dionísio Cerqueira",
      label: "Dionísio Cerqueira",
      ibge: 4205001,
    },
    {
      value: "Dona Emma",
      label: "Dona Emma",
      ibge: 4205100,
    },
    {
      value: "Doutor Pedrinho",
      label: "Doutor Pedrinho",
      ibge: 4205159,
    },
    {
      value: "Entre Rios",
      label: "Entre Rios",
      ibge: 4205175,
    },
    {
      value: "Ermo",
      label: "Ermo",
      ibge: 4205191,
    },
    {
      value: "Erval Velho",
      label: "Erval Velho",
      ibge: 4205209,
    },
    {
      value: "Faxinal dos Guedes",
      label: "Faxinal dos Guedes",
      ibge: 4205308,
    },
    {
      value: "Flor do Sertão",
      label: "Flor do Sertão",
      ibge: 4205357,
    },
    {
      value: "Florianópolis",
      label: "Florianópolis",
      ibge: 4205407,
    },
    {
      value: "Formosa do Sul",
      label: "Formosa do Sul",
      ibge: 4205431,
    },
    {
      value: "Forquilhinha",
      label: "Forquilhinha",
      ibge: 4205456,
    },
    {
      value: "Fraiburgo",
      label: "Fraiburgo",
      ibge: 4205506,
    },
    {
      value: "Frei Rogério",
      label: "Frei Rogério",
      ibge: 4205555,
    },
    {
      value: "Galvão",
      label: "Galvão",
      ibge: 4205605,
    },
    {
      value: "Garopaba",
      label: "Garopaba",
      ibge: 4205704,
    },
    {
      value: "Garuva",
      label: "Garuva",
      ibge: 4205803,
    },
    {
      value: "Gaspar",
      label: "Gaspar",
      ibge: 4205902,
    },
    {
      value: "Governador Celso Ramos",
      label: "Governador Celso Ramos",
      ibge: 4206009,
    },
    {
      value: "Grão Pará",
      label: "Grão Pará",
    },
    {
      value: "Gravatal",
      label: "Gravatal",
      ibge: 4206207,
    },
    {
      value: "Guabiruba",
      label: "Guabiruba",
      ibge: 4206306,
    },
    {
      value: "Guaraciaba",
      label: "Guaraciaba",
      ibge: 4206405,
    },
    {
      value: "Guaramirim",
      label: "Guaramirim",
      ibge: 4206504,
    },
    {
      value: "Guarujá do Sul",
      label: "Guarujá do Sul",
      ibge: 4206603,
    },
    {
      value: "Guatambú",
      label: "Guatambú",
      ibge: 4206652,
    },
    {
      value: "Herval d'Oeste",
      label: "Herval d'Oeste",
      ibge: 4206702,
    },
    {
      value: "Ibiam",
      label: "Ibiam",
      ibge: 4206751,
    },
    {
      value: "Ibicaré",
      label: "Ibicaré",
      ibge: 4206801,
    },
    {
      value: "Ibirama",
      label: "Ibirama",
      ibge: 4206900,
    },
    {
      value: "Içara",
      label: "Içara",
      ibge: 4207007,
    },
    {
      value: "Ilhota",
      label: "Ilhota",
      ibge: 4207106,
    },
    {
      value: "Imaruí",
      label: "Imaruí",
      ibge: 4207205,
    },
    {
      value: "Imbituba",
      label: "Imbituba",
      ibge: 4207304,
    },
    {
      value: "Imbuia",
      label: "Imbuia",
      ibge: 4207403,
    },
    {
      value: "Indaial",
      label: "Indaial",
      ibge: 4207502,
    },
    {
      value: "Iomerê",
      label: "Iomerê",
      ibge: 4207577,
    },
    {
      value: "Ipira",
      label: "Ipira",
      ibge: 4207601,
    },
    {
      value: "Iporã do Oeste",
      label: "Iporã do Oeste",
      ibge: 4207650,
    },
    {
      value: "Ipuaçu",
      label: "Ipuaçu",
      ibge: 4207684,
    },
    {
      value: "Ipumirim",
      label: "Ipumirim",
      ibge: 4207700,
    },
    {
      value: "Iraceminha",
      label: "Iraceminha",
      ibge: 4207759,
    },
    {
      value: "Irani",
      label: "Irani",
      ibge: 4207809,
    },
    {
      value: "Irati",
      label: "Irati",
      ibge: 4207858,
    },
    {
      value: "Irineópolis",
      label: "Irineópolis",
      ibge: 4207908,
    },
    {
      value: "Itá",
      label: "Itá",
      ibge: 4208005,
    },
    {
      value: "Itaiópolis",
      label: "Itaiópolis",
      ibge: 4208104,
    },
    {
      value: "Itajaí",
      label: "Itajaí",
      ibge: 4208203,
    },
    {
      value: "Itapema",
      label: "Itapema",
      ibge: 4208302,
    },
    {
      value: "Itapiranga",
      label: "Itapiranga",
      ibge: 4208401,
    },
    {
      value: "Itapoá",
      label: "Itapoá",
      ibge: 4208450,
    },
    {
      value: "Ituporanga",
      label: "Ituporanga",
      ibge: 4208500,
    },
    {
      value: "Jaborá",
      label: "Jaborá",
      ibge: 4208609,
    },
    {
      value: "Jacinto Machado",
      label: "Jacinto Machado",
      ibge: 4208708,
    },
    {
      value: "Jaguaruna",
      label: "Jaguaruna",
      ibge: 4208807,
    },
    {
      value: "Jaraguá do Sul",
      label: "Jaraguá do Sul",
      ibge: 4208906,
    },
    {
      value: "Jardinópolis",
      label: "Jardinópolis",
      ibge: 4208955,
    },
    {
      value: "Joaçaba",
      label: "Joaçaba",
      ibge: 4209003,
    },
    {
      value: "Joinville",
      label: "Joinville",
      ibge: 4209102,
    },
    {
      value: "José Boiteux",
      label: "José Boiteux",
      ibge: 4209151,
    },
    {
      value: "Jupiá",
      label: "Jupiá",
      ibge: 4209177,
    },
    {
      value: "Lacerdópolis",
      label: "Lacerdópolis",
      ibge: 4209201,
    },
    {
      value: "Lages",
      label: "Lages",
      ibge: 4209300,
    },
    {
      value: "Laguna",
      label: "Laguna",
      ibge: 4209409,
    },
    {
      value: "Lajeado Grande",
      label: "Lajeado Grande",
      ibge: 4209458,
    },
    {
      value: "Laurentino",
      label: "Laurentino",
      ibge: 4209508,
    },
    {
      value: "Lauro Muller",
      label: "Lauro Muller",
    },
    {
      value: "Lebon Régis",
      label: "Lebon Régis",
      ibge: 4209706,
    },
    {
      value: "Leoberto Leal",
      label: "Leoberto Leal",
      ibge: 4209805,
    },
    {
      value: "Lindóia do Sul",
      label: "Lindóia do Sul",
      ibge: 4209854,
    },
    {
      value: "Lontras",
      label: "Lontras",
      ibge: 4209904,
    },
    {
      value: "Luiz Alves",
      label: "Luiz Alves",
      ibge: 4210001,
    },
    {
      value: "Luzerna",
      label: "Luzerna",
      ibge: 4210035,
    },
    {
      value: "Macieira",
      label: "Macieira",
      ibge: 4210050,
    },
    {
      value: "Mafra",
      label: "Mafra",
      ibge: 4210100,
    },
    {
      value: "Major Gercino",
      label: "Major Gercino",
      ibge: 4210209,
    },
    {
      value: "Major Vieira",
      label: "Major Vieira",
      ibge: 4210308,
    },
    {
      value: "Maracajá",
      label: "Maracajá",
      ibge: 4210407,
    },
    {
      value: "Maravilha",
      label: "Maravilha",
      ibge: 4210506,
    },
    {
      value: "Marema",
      label: "Marema",
      ibge: 4210555,
    },
    {
      value: "Massaranduba",
      label: "Massaranduba",
      ibge: 4210605,
    },
    {
      value: "Matos Costa",
      label: "Matos Costa",
      ibge: 4210704,
    },
    {
      value: "Meleiro",
      label: "Meleiro",
      ibge: 4210803,
    },
    {
      value: "Mirim Doce",
      label: "Mirim Doce",
      ibge: 4210852,
    },
    {
      value: "Modelo",
      label: "Modelo",
      ibge: 4210902,
    },
    {
      value: "Mondaí",
      label: "Mondaí",
      ibge: 4211009,
    },
    {
      value: "Monte Carlo",
      label: "Monte Carlo",
      ibge: 4211058,
    },
    {
      value: "Monte Castelo",
      label: "Monte Castelo",
      ibge: 4211108,
    },
    {
      value: "Morro da Fumaça",
      label: "Morro da Fumaça",
      ibge: 4211207,
    },
    {
      value: "Morro Grande",
      label: "Morro Grande",
      ibge: 4211256,
    },
    {
      value: "Navegantes",
      label: "Navegantes",
      ibge: 4211306,
    },
    {
      value: "Nova Erechim",
      label: "Nova Erechim",
      ibge: 4211405,
    },
    {
      value: "Nova Itaberaba",
      label: "Nova Itaberaba",
      ibge: 4211454,
    },
    {
      value: "Nova Trento",
      label: "Nova Trento",
      ibge: 4211504,
    },
    {
      value: "Nova Veneza",
      label: "Nova Veneza",
      ibge: 4211603,
    },
    {
      value: "Novo Horizonte",
      label: "Novo Horizonte",
      ibge: 4211652,
    },
    {
      value: "Orleans",
      label: "Orleans",
      ibge: 4211702,
    },
    {
      value: "Otacílio Costa",
      label: "Otacílio Costa",
      ibge: 4211751,
    },
    {
      value: "Ouro",
      label: "Ouro",
      ibge: 4211801,
    },
    {
      value: "Ouro Verde",
      label: "Ouro Verde",
      ibge: 4211850,
    },
    {
      value: "Paial",
      label: "Paial",
      ibge: 4211876,
    },
    {
      value: "Painel",
      label: "Painel",
      ibge: 4211892,
    },
    {
      value: "Palhoça",
      label: "Palhoça",
      ibge: 4211900,
    },
    {
      value: "Palma Sola",
      label: "Palma Sola",
      ibge: 4212007,
    },
    {
      value: "Palmeira",
      label: "Palmeira",
      ibge: 4212056,
    },
    {
      value: "Palmitos",
      label: "Palmitos",
      ibge: 4212106,
    },
    {
      value: "Papanduva",
      label: "Papanduva",
      ibge: 4212205,
    },
    {
      value: "Paraíso",
      label: "Paraíso",
      ibge: 4212239,
    },
    {
      value: "Passo de Torres",
      label: "Passo de Torres",
      ibge: 4212254,
    },
    {
      value: "Passos Maia",
      label: "Passos Maia",
      ibge: 4212270,
    },
    {
      value: "Paulo Lopes",
      label: "Paulo Lopes",
      ibge: 4212304,
    },
    {
      value: "Pedras Grandes",
      label: "Pedras Grandes",
      ibge: 4212403,
    },
    {
      value: "Penha",
      label: "Penha",
      ibge: 4212502,
    },
    {
      value: "Peritiba",
      label: "Peritiba",
      ibge: 4212601,
    },
    {
      value: "Petrolândia",
      label: "Petrolândia",
      ibge: 4212700,
    },
    {
      value: "Piçarras",
      label: "Piçarras",
    },
    {
      value: "Pinhalzinho",
      label: "Pinhalzinho",
      ibge: 4212908,
    },
    {
      value: "Pinheiro Preto",
      label: "Pinheiro Preto",
      ibge: 4213005,
    },
    {
      value: "Piratuba",
      label: "Piratuba",
      ibge: 4213104,
    },
    {
      value: "Planalto Alegre",
      label: "Planalto Alegre",
      ibge: 4213153,
    },
    {
      value: "Pomerode",
      label: "Pomerode",
      ibge: 4213203,
    },
    {
      value: "Ponte Alta",
      label: "Ponte Alta",
      ibge: 4213302,
    },
    {
      value: "Ponte Alta do Norte",
      label: "Ponte Alta do Norte",
      ibge: 4213351,
    },
    {
      value: "Ponte Serrada",
      label: "Ponte Serrada",
      ibge: 4213401,
    },
    {
      value: "Porto Belo",
      label: "Porto Belo",
      ibge: 4213500,
    },
    {
      value: "Porto União",
      label: "Porto União",
      ibge: 4213609,
    },
    {
      value: "Pouso Redondo",
      label: "Pouso Redondo",
      ibge: 4213708,
    },
    {
      value: "Praia Grande",
      label: "Praia Grande",
      ibge: 4213807,
    },
    {
      value: "Presidente Castelo Branco",
      label: "Presidente Castelo Branco",
    },
    {
      value: "Presidente Getúlio",
      label: "Presidente Getúlio",
      ibge: 4214003,
    },
    {
      value: "Presidente Nereu",
      label: "Presidente Nereu",
      ibge: 4214102,
    },
    {
      value: "Princesa",
      label: "Princesa",
      ibge: 4214151,
    },
    {
      value: "Quilombo",
      label: "Quilombo",
      ibge: 4214201,
    },
    {
      value: "Rancho Queimado",
      label: "Rancho Queimado",
      ibge: 4214300,
    },
    {
      value: "Rio das Antas",
      label: "Rio das Antas",
      ibge: 4214409,
    },
    {
      value: "Rio do Campo",
      label: "Rio do Campo",
      ibge: 4214508,
    },
    {
      value: "Rio do Oeste",
      label: "Rio do Oeste",
      ibge: 4214607,
    },
    {
      value: "Rio do Sul",
      label: "Rio do Sul",
      ibge: 4214805,
    },
    {
      value: "Rio dos Cedros",
      label: "Rio dos Cedros",
      ibge: 4214706,
    },
    {
      value: "Rio Fortuna",
      label: "Rio Fortuna",
      ibge: 4214904,
    },
    {
      value: "Rio Negrinho",
      label: "Rio Negrinho",
      ibge: 4215000,
    },
    {
      value: "Rio Rufino",
      label: "Rio Rufino",
      ibge: 4215059,
    },
    {
      value: "Riqueza",
      label: "Riqueza",
      ibge: 4215075,
    },
    {
      value: "Rodeio",
      label: "Rodeio",
      ibge: 4215109,
    },
    {
      value: "Romelândia",
      label: "Romelândia",
      ibge: 4215208,
    },
    {
      value: "Salete",
      label: "Salete",
      ibge: 4215307,
    },
    {
      value: "Saltinho",
      label: "Saltinho",
      ibge: 4215356,
    },
    {
      value: "Salto Veloso",
      label: "Salto Veloso",
      ibge: 4215406,
    },
    {
      value: "Sangão",
      label: "Sangão",
      ibge: 4215455,
    },
    {
      value: "Santa Cecília",
      label: "Santa Cecília",
      ibge: 4215505,
    },
    {
      value: "Santa Helena",
      label: "Santa Helena",
      ibge: 4215554,
    },
    {
      value: "Santa Rosa de Lima",
      label: "Santa Rosa de Lima",
      ibge: 4215604,
    },
    {
      value: "Santa Rosa do Sul",
      label: "Santa Rosa do Sul",
      ibge: 4215653,
    },
    {
      value: "Santa Terezinha",
      label: "Santa Terezinha",
      ibge: 4215679,
    },
    {
      value: "Santa Terezinha do Progresso",
      label: "Santa Terezinha do Progresso",
      ibge: 4215687,
    },
    {
      value: "Santiago do Sul",
      label: "Santiago do Sul",
      ibge: 4215695,
    },
    {
      value: "Santo Amaro da Imperatriz",
      label: "Santo Amaro da Imperatriz",
      ibge: 4215703,
    },
    {
      value: "São Bento do Sul",
      label: "São Bento do Sul",
      ibge: 4215802,
    },
    {
      value: "São Bernardino",
      label: "São Bernardino",
      ibge: 4215752,
    },
    {
      value: "São Bonifácio",
      label: "São Bonifácio",
      ibge: 4215901,
    },
    {
      value: "São Carlos",
      label: "São Carlos",
      ibge: 4216008,
    },
    {
      value: "São Cristovão do Sul",
      label: "São Cristovão do Sul",
    },
    {
      value: "São Domingos",
      label: "São Domingos",
      ibge: 4216107,
    },
    {
      value: "São Francisco do Sul",
      label: "São Francisco do Sul",
      ibge: 4216206,
    },
    {
      value: "São João Batista",
      label: "São João Batista",
      ibge: 4216305,
    },
    {
      value: "São João do Itaperiú",
      label: "São João do Itaperiú",
      ibge: 4216354,
    },
    {
      value: "São João do Oeste",
      label: "São João do Oeste",
      ibge: 4216255,
    },
    {
      value: "São João do Sul",
      label: "São João do Sul",
      ibge: 4216404,
    },
    {
      value: "São Joaquim",
      label: "São Joaquim",
      ibge: 4216503,
    },
    {
      value: "São José",
      label: "São José",
      ibge: 4216602,
    },
    {
      value: "São José do Cedro",
      label: "São José do Cedro",
      ibge: 4216701,
    },
    {
      value: "São José do Cerrito",
      label: "São José do Cerrito",
      ibge: 4216800,
    },
    {
      value: "São Lourenço do Oeste",
      label: "São Lourenço do Oeste",
      ibge: 4216909,
    },
    {
      value: "São Ludgero",
      label: "São Ludgero",
      ibge: 4217006,
    },
    {
      value: "São Martinho",
      label: "São Martinho",
      ibge: 4217105,
    },
    {
      value: "São Miguel da Boa Vista",
      label: "São Miguel da Boa Vista",
      ibge: 4217154,
    },
    {
      value: "São Miguel do Oeste",
      label: "São Miguel do Oeste",
      ibge: 4217204,
    },
    {
      value: "São Pedro de Alcântara",
      label: "São Pedro de Alcântara",
      ibge: 4217253,
    },
    {
      value: "Saudades",
      label: "Saudades",
      ibge: 4217303,
    },
    {
      value: "Schroeder",
      label: "Schroeder",
      ibge: 4217402,
    },
    {
      value: "Seara",
      label: "Seara",
      ibge: 4217501,
    },
    {
      value: "Serra Alta",
      label: "Serra Alta",
      ibge: 4217550,
    },
    {
      value: "Siderópolis",
      label: "Siderópolis",
      ibge: 4217600,
    },
    {
      value: "Sombrio",
      label: "Sombrio",
      ibge: 4217709,
    },
    {
      value: "Sul Brasil",
      label: "Sul Brasil",
      ibge: 4217758,
    },
    {
      value: "Taió",
      label: "Taió",
      ibge: 4217808,
    },
    {
      value: "Tangará",
      label: "Tangará",
      ibge: 4217907,
    },
    {
      value: "Tigrinhos",
      label: "Tigrinhos",
      ibge: 4217956,
    },
    {
      value: "Tijucas",
      label: "Tijucas",
      ibge: 4218004,
    },
    {
      value: "Timbé do Sul",
      label: "Timbé do Sul",
      ibge: 4218103,
    },
    {
      value: "Timbó",
      label: "Timbó",
      ibge: 4218202,
    },
    {
      value: "Timbó Grande",
      label: "Timbó Grande",
      ibge: 4218251,
    },
    {
      value: "Três Barras",
      label: "Três Barras",
      ibge: 4218301,
    },
    {
      value: "Treviso",
      label: "Treviso",
      ibge: 4218350,
    },
    {
      value: "Treze de Maio",
      label: "Treze de Maio",
      ibge: 4218400,
    },
    {
      value: "Treze Tílias",
      label: "Treze Tílias",
      ibge: 4218509,
    },
    {
      value: "Trombudo Central",
      label: "Trombudo Central",
      ibge: 4218608,
    },
    {
      value: "Tubarão",
      label: "Tubarão",
      ibge: 4218707,
    },
    {
      value: "Tunápolis",
      label: "Tunápolis",
      ibge: 4218756,
    },
    {
      value: "Turvo",
      label: "Turvo",
      ibge: 4218806,
    },
    {
      value: "União do Oeste",
      label: "União do Oeste",
      ibge: 4218855,
    },
    {
      value: "Urubici",
      label: "Urubici",
      ibge: 4218905,
    },
    {
      value: "Urupema",
      label: "Urupema",
      ibge: 4218954,
    },
    {
      value: "Urussanga",
      label: "Urussanga",
      ibge: 4219002,
    },
    {
      value: "Vargeão",
      label: "Vargeão",
      ibge: 4219101,
    },
    {
      value: "Vargem",
      label: "Vargem",
      ibge: 4219150,
    },
    {
      value: "Vargem Bonita",
      label: "Vargem Bonita",
      ibge: 4219176,
    },
    {
      value: "Vidal Ramos",
      label: "Vidal Ramos",
      ibge: 4219200,
    },
    {
      value: "Videira",
      label: "Videira",
      ibge: 4219309,
    },
    {
      value: "Vitor Meireles",
      label: "Vitor Meireles",
      ibge: 4219358,
    },
    {
      value: "Witmarsum",
      label: "Witmarsum",
      ibge: 4219408,
    },
    {
      value: "Xanxerê",
      label: "Xanxerê",
      ibge: 4219507,
    },
    {
      value: "Xavantina",
      label: "Xavantina",
      ibge: 4219606,
    },
    {
      value: "Xaxim",
      label: "Xaxim",
      ibge: 4219705,
    },
    {
      value: "Zortéa",
      label: "Zortéa",
      ibge: 4219853,
    },
    {
      value: "Balneário Piçarras",
      label: "Balneário Piçarras",
      ibge: 4212809,
    },
    {
      value: "Balneário Rincão",
      label: "Balneário Rincão",
      ibge: 4220000,
    },
    {
      value: "Grão-Pará",
      label: "Grão-Pará",
      ibge: 4206108,
    },
    {
      value: "Lauro Müller",
      label: "Lauro Müller",
      ibge: 4209607,
    },
    {
      value: "Pescaria Brava",
      label: "Pescaria Brava",
      ibge: 4212650,
    },
    {
      value: "Presidente Castello Branco",
      label: "Presidente Castello Branco",
      ibge: 4213906,
    },
    {
      value: "São Cristóvão do Sul",
      label: "São Cristóvão do Sul",
      ibge: 4216057,
    },
  ],
  SE: [
    {
      value: "Amparo de São Francisco",
      label: "Amparo de São Francisco",
    },
    {
      value: "Aquidabã",
      label: "Aquidabã",
      ibge: 2800209,
    },
    {
      value: "Aracaju",
      label: "Aracaju",
      ibge: 2800308,
    },
    {
      value: "Arauá",
      label: "Arauá",
      ibge: 2800407,
    },
    {
      value: "Areia Branca",
      label: "Areia Branca",
      ibge: 2800506,
    },
    {
      value: "Barra dos Coqueiros",
      label: "Barra dos Coqueiros",
      ibge: 2800605,
    },
    {
      value: "Boquim",
      label: "Boquim",
      ibge: 2800670,
    },
    {
      value: "Brejo Grande",
      label: "Brejo Grande",
      ibge: 2800704,
    },
    {
      value: "Campo do Brito",
      label: "Campo do Brito",
      ibge: 2801009,
    },
    {
      value: "Canhoba",
      label: "Canhoba",
      ibge: 2801108,
    },
    {
      value: "Canindé de São Francisco",
      label: "Canindé de São Francisco",
      ibge: 2801207,
    },
    {
      value: "Capela",
      label: "Capela",
      ibge: 2801306,
    },
    {
      value: "Carira",
      label: "Carira",
      ibge: 2801405,
    },
    {
      value: "Carmópolis",
      label: "Carmópolis",
      ibge: 2801504,
    },
    {
      value: "Cedro de São João",
      label: "Cedro de São João",
      ibge: 2801603,
    },
    {
      value: "Cristinápolis",
      label: "Cristinápolis",
      ibge: 2801702,
    },
    {
      value: "Cumbe",
      label: "Cumbe",
      ibge: 2801900,
    },
    {
      value: "Divina Pastora",
      label: "Divina Pastora",
      ibge: 2802007,
    },
    {
      value: "Estância",
      label: "Estância",
      ibge: 2802106,
    },
    {
      value: "Feira Nova",
      label: "Feira Nova",
      ibge: 2802205,
    },
    {
      value: "Frei Paulo",
      label: "Frei Paulo",
      ibge: 2802304,
    },
    {
      value: "Gararu",
      label: "Gararu",
      ibge: 2802403,
    },
    {
      value: "General Maynard",
      label: "General Maynard",
      ibge: 2802502,
    },
    {
      value: "Gracho Cardoso",
      label: "Gracho Cardoso",
      ibge: 2802601,
    },
    {
      value: "Ilha das Flores",
      label: "Ilha das Flores",
      ibge: 2802700,
    },
    {
      value: "Indiaroba",
      label: "Indiaroba",
      ibge: 2802809,
    },
    {
      value: "Itabaiana",
      label: "Itabaiana",
      ibge: 2802908,
    },
    {
      value: "Itabaianinha",
      label: "Itabaianinha",
      ibge: 2803005,
    },
    {
      value: "Itabi",
      label: "Itabi",
      ibge: 2803104,
    },
    {
      value: "Itaporanga d'Ajuda",
      label: "Itaporanga d'Ajuda",
      ibge: 2803203,
    },
    {
      value: "Japaratuba",
      label: "Japaratuba",
      ibge: 2803302,
    },
    {
      value: "Japoatã",
      label: "Japoatã",
      ibge: 2803401,
    },
    {
      value: "Lagarto",
      label: "Lagarto",
      ibge: 2803500,
    },
    {
      value: "Laranjeiras",
      label: "Laranjeiras",
      ibge: 2803609,
    },
    {
      value: "Macambira",
      label: "Macambira",
      ibge: 2803708,
    },
    {
      value: "Malhada dos Bois",
      label: "Malhada dos Bois",
      ibge: 2803807,
    },
    {
      value: "Malhador",
      label: "Malhador",
      ibge: 2803906,
    },
    {
      value: "Maruim",
      label: "Maruim",
      ibge: 2804003,
    },
    {
      value: "Moita Bonita",
      label: "Moita Bonita",
      ibge: 2804102,
    },
    {
      value: "Monte Alegre de Sergipe",
      label: "Monte Alegre de Sergipe",
      ibge: 2804201,
    },
    {
      value: "Muribeca",
      label: "Muribeca",
      ibge: 2804300,
    },
    {
      value: "Neópolis",
      label: "Neópolis",
      ibge: 2804409,
    },
    {
      value: "Nossa Senhora Aparecida",
      label: "Nossa Senhora Aparecida",
      ibge: 2804458,
    },
    {
      value: "Nossa Senhora da Glória",
      label: "Nossa Senhora da Glória",
      ibge: 2804508,
    },
    {
      value: "Nossa Senhora das Dores",
      label: "Nossa Senhora das Dores",
      ibge: 2804607,
    },
    {
      value: "Nossa Senhora de Lourdes",
      label: "Nossa Senhora de Lourdes",
      ibge: 2804706,
    },
    {
      value: "Nossa Senhora do Socorro",
      label: "Nossa Senhora do Socorro",
      ibge: 2804805,
    },
    {
      value: "Pacatuba",
      label: "Pacatuba",
      ibge: 2804904,
    },
    {
      value: "Pedra Mole",
      label: "Pedra Mole",
      ibge: 2805000,
    },
    {
      value: "Pedrinhas",
      label: "Pedrinhas",
      ibge: 2805109,
    },
    {
      value: "Pinhão",
      label: "Pinhão",
      ibge: 2805208,
    },
    {
      value: "Pirambu",
      label: "Pirambu",
      ibge: 2805307,
    },
    {
      value: "Poço Redondo",
      label: "Poço Redondo",
      ibge: 2805406,
    },
    {
      value: "Poço Verde",
      label: "Poço Verde",
      ibge: 2805505,
    },
    {
      value: "Porto da Folha",
      label: "Porto da Folha",
      ibge: 2805604,
    },
    {
      value: "Propriá",
      label: "Propriá",
      ibge: 2805703,
    },
    {
      value: "Riachão do Dantas",
      label: "Riachão do Dantas",
      ibge: 2805802,
    },
    {
      value: "Riachuelo",
      label: "Riachuelo",
      ibge: 2805901,
    },
    {
      value: "Ribeirópolis",
      label: "Ribeirópolis",
      ibge: 2806008,
    },
    {
      value: "Rosário do Catete",
      label: "Rosário do Catete",
      ibge: 2806107,
    },
    {
      value: "Salgado",
      label: "Salgado",
      ibge: 2806206,
    },
    {
      value: "Santa Luzia do Itanhy",
      label: "Santa Luzia do Itanhy",
      ibge: 2806305,
    },
    {
      value: "Santa Rosa de Lima",
      label: "Santa Rosa de Lima",
      ibge: 2806503,
    },
    {
      value: "Santana do São Francisco",
      label: "Santana do São Francisco",
      ibge: 2806404,
    },
    {
      value: "Santo Amaro das Brotas",
      label: "Santo Amaro das Brotas",
      ibge: 2806602,
    },
    {
      value: "São Cristóvão",
      label: "São Cristóvão",
      ibge: 2806701,
    },
    {
      value: "São Domingos",
      label: "São Domingos",
      ibge: 2806800,
    },
    {
      value: "São Francisco",
      label: "São Francisco",
      ibge: 2806909,
    },
    {
      value: "São Miguel do Aleixo",
      label: "São Miguel do Aleixo",
      ibge: 2807006,
    },
    {
      value: "Simão Dias",
      label: "Simão Dias",
      ibge: 2807105,
    },
    {
      value: "Siriri",
      label: "Siriri",
      ibge: 2807204,
    },
    {
      value: "Telha",
      label: "Telha",
      ibge: 2807303,
    },
    {
      value: "Tobias Barreto",
      label: "Tobias Barreto",
      ibge: 2807402,
    },
    {
      value: "Tomar do Geru",
      label: "Tomar do Geru",
      ibge: 2807501,
    },
    {
      value: "Umbaúba",
      label: "Umbaúba",
      ibge: 2807600,
    },
    {
      value: "Amparo do São Francisco",
      label: "Amparo do São Francisco",
      ibge: 2800100,
    },
  ],
  SP: [
    {
      value: "Adamantina",
      label: "Adamantina",
      ibge: 3500105,
    },
    {
      value: "Adolfo",
      label: "Adolfo",
      ibge: 3500204,
    },
    {
      value: "Aguaí",
      label: "Aguaí",
      ibge: 3500303,
    },
    {
      value: "Águas da Prata",
      label: "Águas da Prata",
      ibge: 3500402,
    },
    {
      value: "Águas de Lindóia",
      label: "Águas de Lindóia",
      ibge: 3500501,
    },
    {
      value: "Águas de Santa Bárbara",
      label: "Águas de Santa Bárbara",
      ibge: 3500550,
    },
    {
      value: "Águas de São Pedro",
      label: "Águas de São Pedro",
      ibge: 3500600,
    },
    {
      value: "Agudos",
      label: "Agudos",
      ibge: 3500709,
    },
    {
      value: "Alambari",
      label: "Alambari",
      ibge: 3500758,
    },
    {
      value: "Alfredo Marcondes",
      label: "Alfredo Marcondes",
      ibge: 3500808,
    },
    {
      value: "Altair",
      label: "Altair",
      ibge: 3500907,
    },
    {
      value: "Altinópolis",
      label: "Altinópolis",
      ibge: 3501004,
    },
    {
      value: "Alto Alegre",
      label: "Alto Alegre",
      ibge: 3501103,
    },
    {
      value: "Alumínio",
      label: "Alumínio",
      ibge: 3501152,
    },
    {
      value: "Álvares Florence",
      label: "Álvares Florence",
      ibge: 3501202,
    },
    {
      value: "Álvares Machado",
      label: "Álvares Machado",
      ibge: 3501301,
    },
    {
      value: "Álvaro de Carvalho",
      label: "Álvaro de Carvalho",
      ibge: 3501400,
    },
    {
      value: "Alvinlândia",
      label: "Alvinlândia",
      ibge: 3501509,
    },
    {
      value: "Americana",
      label: "Americana",
      ibge: 3501608,
    },
    {
      value: "Américo Brasiliense",
      label: "Américo Brasiliense",
      ibge: 3501707,
    },
    {
      value: "Américo de Campos",
      label: "Américo de Campos",
      ibge: 3501806,
    },
    {
      value: "Amparo",
      label: "Amparo",
      ibge: 3501905,
    },
    {
      value: "Analândia",
      label: "Analândia",
      ibge: 3502002,
    },
    {
      value: "Andradina",
      label: "Andradina",
      ibge: 3502101,
    },
    {
      value: "Angatuba",
      label: "Angatuba",
      ibge: 3502200,
    },
    {
      value: "Anhembi",
      label: "Anhembi",
      ibge: 3502309,
    },
    {
      value: "Anhumas",
      label: "Anhumas",
      ibge: 3502408,
    },
    {
      value: "Aparecida",
      label: "Aparecida",
      ibge: 3502507,
    },
    {
      value: "Aparecida d'Oeste",
      label: "Aparecida d'Oeste",
      ibge: 3502606,
    },
    {
      value: "Apiaí",
      label: "Apiaí",
      ibge: 3502705,
    },
    {
      value: "Araçariguama",
      label: "Araçariguama",
      ibge: 3502754,
    },
    {
      value: "Araçatuba",
      label: "Araçatuba",
      ibge: 3502804,
    },
    {
      value: "Araçoiaba da Serra",
      label: "Araçoiaba da Serra",
      ibge: 3502903,
    },
    {
      value: "Aramina",
      label: "Aramina",
      ibge: 3503000,
    },
    {
      value: "Arandu",
      label: "Arandu",
      ibge: 3503109,
    },
    {
      value: "Arapeí",
      label: "Arapeí",
      ibge: 3503158,
    },
    {
      value: "Araraquara",
      label: "Araraquara",
      ibge: 3503208,
    },
    {
      value: "Araras",
      label: "Araras",
      ibge: 3503307,
    },
    {
      value: "Arco-Íris",
      label: "Arco-Íris",
      ibge: 3503356,
    },
    {
      value: "Arealva",
      label: "Arealva",
      ibge: 3503406,
    },
    {
      value: "Areias",
      label: "Areias",
      ibge: 3503505,
    },
    {
      value: "Areiópolis",
      label: "Areiópolis",
      ibge: 3503604,
    },
    {
      value: "Ariranha",
      label: "Ariranha",
      ibge: 3503703,
    },
    {
      value: "Artur Nogueira",
      label: "Artur Nogueira",
      ibge: 3503802,
    },
    {
      value: "Arujá",
      label: "Arujá",
      ibge: 3503901,
    },
    {
      value: "Aspásia",
      label: "Aspásia",
      ibge: 3503950,
    },
    {
      value: "Assis",
      label: "Assis",
      ibge: 3504008,
    },
    {
      value: "Atibaia",
      label: "Atibaia",
      ibge: 3504107,
    },
    {
      value: "Auriflama",
      label: "Auriflama",
      ibge: 3504206,
    },
    {
      value: "Avaí",
      label: "Avaí",
      ibge: 3504305,
    },
    {
      value: "Avanhandava",
      label: "Avanhandava",
      ibge: 3504404,
    },
    {
      value: "Avaré",
      label: "Avaré",
      ibge: 3504503,
    },
    {
      value: "Bady Bassitt",
      label: "Bady Bassitt",
      ibge: 3504602,
    },
    {
      value: "Balbinos",
      label: "Balbinos",
      ibge: 3504701,
    },
    {
      value: "Bálsamo",
      label: "Bálsamo",
      ibge: 3504800,
    },
    {
      value: "Bananal",
      label: "Bananal",
      ibge: 3504909,
    },
    {
      value: "Barão de Antonina",
      label: "Barão de Antonina",
      ibge: 3505005,
    },
    {
      value: "Barbosa",
      label: "Barbosa",
      ibge: 3505104,
    },
    {
      value: "Bariri",
      label: "Bariri",
      ibge: 3505203,
    },
    {
      value: "Barra Bonita",
      label: "Barra Bonita",
      ibge: 3505302,
    },
    {
      value: "Barra do Chapéu",
      label: "Barra do Chapéu",
      ibge: 3505351,
    },
    {
      value: "Barra do Turvo",
      label: "Barra do Turvo",
      ibge: 3505401,
    },
    {
      value: "Barretos",
      label: "Barretos",
      ibge: 3505500,
    },
    {
      value: "Barrinha",
      label: "Barrinha",
      ibge: 3505609,
    },
    {
      value: "Barueri",
      label: "Barueri",
      ibge: 3505708,
    },
    {
      value: "Bastos",
      label: "Bastos",
      ibge: 3505807,
    },
    {
      value: "Batatais",
      label: "Batatais",
      ibge: 3505906,
    },
    {
      value: "Bauru",
      label: "Bauru",
      ibge: 3506003,
    },
    {
      value: "Bebedouro",
      label: "Bebedouro",
      ibge: 3506102,
    },
    {
      value: "Bento de Abreu",
      label: "Bento de Abreu",
      ibge: 3506201,
    },
    {
      value: "Bernardino de Campos",
      label: "Bernardino de Campos",
      ibge: 3506300,
    },
    {
      value: "Bertioga",
      label: "Bertioga",
      ibge: 3506359,
    },
    {
      value: "Bilac",
      label: "Bilac",
      ibge: 3506409,
    },
    {
      value: "Birigui",
      label: "Birigui",
      ibge: 3506508,
    },
    {
      value: "Biritiba-Mirim",
      label: "Biritiba-Mirim",
    },
    {
      value: "Boa Esperança do Sul",
      label: "Boa Esperança do Sul",
      ibge: 3506706,
    },
    {
      value: "Bocaina",
      label: "Bocaina",
      ibge: 3506805,
    },
    {
      value: "Bofete",
      label: "Bofete",
      ibge: 3506904,
    },
    {
      value: "Boituva",
      label: "Boituva",
      ibge: 3507001,
    },
    {
      value: "Bom Jesus dos Perdões",
      label: "Bom Jesus dos Perdões",
      ibge: 3507100,
    },
    {
      value: "Bom Sucesso de Itararé",
      label: "Bom Sucesso de Itararé",
      ibge: 3507159,
    },
    {
      value: "Borá",
      label: "Borá",
      ibge: 3507209,
    },
    {
      value: "Boracéia",
      label: "Boracéia",
      ibge: 3507308,
    },
    {
      value: "Borborema",
      label: "Borborema",
      ibge: 3507407,
    },
    {
      value: "Borebi",
      label: "Borebi",
      ibge: 3507456,
    },
    {
      value: "Botucatu",
      label: "Botucatu",
      ibge: 3507506,
    },
    {
      value: "Bragança Paulista",
      label: "Bragança Paulista",
      ibge: 3507605,
    },
    {
      value: "Braúna",
      label: "Braúna",
      ibge: 3507704,
    },
    {
      value: "Brejo Alegre",
      label: "Brejo Alegre",
      ibge: 3507753,
    },
    {
      value: "Brodowski",
      label: "Brodowski",
      ibge: 3507803,
    },
    {
      value: "Brotas",
      label: "Brotas",
      ibge: 3507902,
    },
    {
      value: "Buri",
      label: "Buri",
      ibge: 3508009,
    },
    {
      value: "Buritama",
      label: "Buritama",
      ibge: 3508108,
    },
    {
      value: "Buritizal",
      label: "Buritizal",
      ibge: 3508207,
    },
    {
      value: "Cabrália Paulista",
      label: "Cabrália Paulista",
      ibge: 3508306,
    },
    {
      value: "Cabreúva",
      label: "Cabreúva",
      ibge: 3508405,
    },
    {
      value: "Caçapava",
      label: "Caçapava",
      ibge: 3508504,
    },
    {
      value: "Cachoeira Paulista",
      label: "Cachoeira Paulista",
      ibge: 3508603,
    },
    {
      value: "Caconde",
      label: "Caconde",
      ibge: 3508702,
    },
    {
      value: "Cafelândia",
      label: "Cafelândia",
      ibge: 3508801,
    },
    {
      value: "Caiabu",
      label: "Caiabu",
      ibge: 3508900,
    },
    {
      value: "Caieiras",
      label: "Caieiras",
      ibge: 3509007,
    },
    {
      value: "Caiuá",
      label: "Caiuá",
      ibge: 3509106,
    },
    {
      value: "Cajamar",
      label: "Cajamar",
      ibge: 3509205,
    },
    {
      value: "Cajati",
      label: "Cajati",
      ibge: 3509254,
    },
    {
      value: "Cajobi",
      label: "Cajobi",
      ibge: 3509304,
    },
    {
      value: "Cajuru",
      label: "Cajuru",
      ibge: 3509403,
    },
    {
      value: "Campina do Monte Alegre",
      label: "Campina do Monte Alegre",
      ibge: 3509452,
    },
    {
      value: "Campinas",
      label: "Campinas",
      ibge: 3509502,
    },
    {
      value: "Campo Limpo Paulista",
      label: "Campo Limpo Paulista",
      ibge: 3509601,
    },
    {
      value: "Campos do Jordão",
      label: "Campos do Jordão",
      ibge: 3509700,
    },
    {
      value: "Campos Novos Paulista",
      label: "Campos Novos Paulista",
      ibge: 3509809,
    },
    {
      value: "Cananéia",
      label: "Cananéia",
      ibge: 3509908,
    },
    {
      value: "Canas",
      label: "Canas",
      ibge: 3509957,
    },
    {
      value: "Cândido Mota",
      label: "Cândido Mota",
      ibge: 3510005,
    },
    {
      value: "Cândido Rodrigues",
      label: "Cândido Rodrigues",
      ibge: 3510104,
    },
    {
      value: "Canitar",
      label: "Canitar",
      ibge: 3510153,
    },
    {
      value: "Capão Bonito",
      label: "Capão Bonito",
      ibge: 3510203,
    },
    {
      value: "Capela do Alto",
      label: "Capela do Alto",
      ibge: 3510302,
    },
    {
      value: "Capivari",
      label: "Capivari",
      ibge: 3510401,
    },
    {
      value: "Caraguatatuba",
      label: "Caraguatatuba",
      ibge: 3510500,
    },
    {
      value: "Carapicuíba",
      label: "Carapicuíba",
      ibge: 3510609,
    },
    {
      value: "Cardoso",
      label: "Cardoso",
      ibge: 3510708,
    },
    {
      value: "Casa Branca",
      label: "Casa Branca",
      ibge: 3510807,
    },
    {
      value: "Cássia dos Coqueiros",
      label: "Cássia dos Coqueiros",
      ibge: 3510906,
    },
    {
      value: "Castilho",
      label: "Castilho",
      ibge: 3511003,
    },
    {
      value: "Catanduva",
      label: "Catanduva",
      ibge: 3511102,
    },
    {
      value: "Catiguá",
      label: "Catiguá",
      ibge: 3511201,
    },
    {
      value: "Cedral",
      label: "Cedral",
      ibge: 3511300,
    },
    {
      value: "Cerqueira César",
      label: "Cerqueira César",
      ibge: 3511409,
    },
    {
      value: "Cerquilho",
      label: "Cerquilho",
      ibge: 3511508,
    },
    {
      value: "Cesário Lange",
      label: "Cesário Lange",
      ibge: 3511607,
    },
    {
      value: "Charqueada",
      label: "Charqueada",
      ibge: 3511706,
    },
    {
      value: "Chavantes",
      label: "Chavantes",
      ibge: 3557204,
    },
    {
      value: "Clementina",
      label: "Clementina",
      ibge: 3511904,
    },
    {
      value: "Colina",
      label: "Colina",
      ibge: 3512001,
    },
    {
      value: "Colômbia",
      label: "Colômbia",
      ibge: 3512100,
    },
    {
      value: "Conchal",
      label: "Conchal",
      ibge: 3512209,
    },
    {
      value: "Conchas",
      label: "Conchas",
      ibge: 3512308,
    },
    {
      value: "Cordeirópolis",
      label: "Cordeirópolis",
      ibge: 3512407,
    },
    {
      value: "Coroados",
      label: "Coroados",
      ibge: 3512506,
    },
    {
      value: "Coronel Macedo",
      label: "Coronel Macedo",
      ibge: 3512605,
    },
    {
      value: "Corumbataí",
      label: "Corumbataí",
      ibge: 3512704,
    },
    {
      value: "Cosmópolis",
      label: "Cosmópolis",
      ibge: 3512803,
    },
    {
      value: "Cosmorama",
      label: "Cosmorama",
      ibge: 3512902,
    },
    {
      value: "Cotia",
      label: "Cotia",
      ibge: 3513009,
    },
    {
      value: "Cravinhos",
      label: "Cravinhos",
      ibge: 3513108,
    },
    {
      value: "Cristais Paulista",
      label: "Cristais Paulista",
      ibge: 3513207,
    },
    {
      value: "Cruzália",
      label: "Cruzália",
      ibge: 3513306,
    },
    {
      value: "Cruzeiro",
      label: "Cruzeiro",
      ibge: 3513405,
    },
    {
      value: "Cubatão",
      label: "Cubatão",
      ibge: 3513504,
    },
    {
      value: "Cunha",
      label: "Cunha",
      ibge: 3513603,
    },
    {
      value: "Descalvado",
      label: "Descalvado",
      ibge: 3513702,
    },
    {
      value: "Diadema",
      label: "Diadema",
      ibge: 3513801,
    },
    {
      value: "Dirce Reis",
      label: "Dirce Reis",
      ibge: 3513850,
    },
    {
      value: "Divinolândia",
      label: "Divinolândia",
      ibge: 3513900,
    },
    {
      value: "Dobrada",
      label: "Dobrada",
      ibge: 3514007,
    },
    {
      value: "Dois Córregos",
      label: "Dois Córregos",
      ibge: 3514106,
    },
    {
      value: "Dolcinópolis",
      label: "Dolcinópolis",
      ibge: 3514205,
    },
    {
      value: "Dourado",
      label: "Dourado",
      ibge: 3514304,
    },
    {
      value: "Dracena",
      label: "Dracena",
      ibge: 3514403,
    },
    {
      value: "Duartina",
      label: "Duartina",
      ibge: 3514502,
    },
    {
      value: "Dumont",
      label: "Dumont",
      ibge: 3514601,
    },
    {
      value: "Echaporã",
      label: "Echaporã",
      ibge: 3514700,
    },
    {
      value: "Eldorado",
      label: "Eldorado",
      ibge: 3514809,
    },
    {
      value: "Elias Fausto",
      label: "Elias Fausto",
      ibge: 3514908,
    },
    {
      value: "Elisiário",
      label: "Elisiário",
      ibge: 3514924,
    },
    {
      value: "Embaúba",
      label: "Embaúba",
      ibge: 3514957,
    },
    {
      value: "Embu",
      label: "Embu",
    },
    {
      value: "Embu-Guaçu",
      label: "Embu-Guaçu",
      ibge: 3515103,
    },
    {
      value: "Emilianópolis",
      label: "Emilianópolis",
      ibge: 3515129,
    },
    {
      value: "Engenheiro Coelho",
      label: "Engenheiro Coelho",
      ibge: 3515152,
    },
    {
      value: "Espírito Santo do Pinhal",
      label: "Espírito Santo do Pinhal",
      ibge: 3515186,
    },
    {
      value: "Espírito Santo do Turvo",
      label: "Espírito Santo do Turvo",
      ibge: 3515194,
    },
    {
      value: "Estiva Gerbi",
      label: "Estiva Gerbi",
      ibge: 3557303,
    },
    {
      value: "Estrela d'Oeste",
      label: "Estrela d'Oeste",
      ibge: 3515202,
    },
    {
      value: "Estrela do Norte",
      label: "Estrela do Norte",
      ibge: 3515301,
    },
    {
      value: "Euclides da Cunha Paulista",
      label: "Euclides da Cunha Paulista",
      ibge: 3515350,
    },
    {
      value: "Fartura",
      label: "Fartura",
      ibge: 3515400,
    },
    {
      value: "Fernando Prestes",
      label: "Fernando Prestes",
      ibge: 3515608,
    },
    {
      value: "Fernandópolis",
      label: "Fernandópolis",
      ibge: 3515509,
    },
    {
      value: "Fernão",
      label: "Fernão",
      ibge: 3515657,
    },
    {
      value: "Ferraz de Vasconcelos",
      label: "Ferraz de Vasconcelos",
      ibge: 3515707,
    },
    {
      value: "Flora Rica",
      label: "Flora Rica",
      ibge: 3515806,
    },
    {
      value: "Floreal",
      label: "Floreal",
      ibge: 3515905,
    },
    {
      value: "Florínia",
      label: "Florínia",
    },
    {
      value: "Flórida Paulista",
      label: "Flórida Paulista",
      ibge: 3516002,
    },
    {
      value: "Franca",
      label: "Franca",
      ibge: 3516200,
    },
    {
      value: "Francisco Morato",
      label: "Francisco Morato",
      ibge: 3516309,
    },
    {
      value: "Franco da Rocha",
      label: "Franco da Rocha",
      ibge: 3516408,
    },
    {
      value: "Gabriel Monteiro",
      label: "Gabriel Monteiro",
      ibge: 3516507,
    },
    {
      value: "Gália",
      label: "Gália",
      ibge: 3516606,
    },
    {
      value: "Garça",
      label: "Garça",
      ibge: 3516705,
    },
    {
      value: "Gastão Vidigal",
      label: "Gastão Vidigal",
      ibge: 3516804,
    },
    {
      value: "Gavião Peixoto",
      label: "Gavião Peixoto",
      ibge: 3516853,
    },
    {
      value: "General Salgado",
      label: "General Salgado",
      ibge: 3516903,
    },
    {
      value: "Getulina",
      label: "Getulina",
      ibge: 3517000,
    },
    {
      value: "Glicério",
      label: "Glicério",
      ibge: 3517109,
    },
    {
      value: "Guaiçara",
      label: "Guaiçara",
      ibge: 3517208,
    },
    {
      value: "Guaimbê",
      label: "Guaimbê",
      ibge: 3517307,
    },
    {
      value: "Guaíra",
      label: "Guaíra",
      ibge: 3517406,
    },
    {
      value: "Guapiaçu",
      label: "Guapiaçu",
      ibge: 3517505,
    },
    {
      value: "Guapiara",
      label: "Guapiara",
      ibge: 3517604,
    },
    {
      value: "Guará",
      label: "Guará",
      ibge: 3517703,
    },
    {
      value: "Guaraçaí",
      label: "Guaraçaí",
      ibge: 3517802,
    },
    {
      value: "Guaraci",
      label: "Guaraci",
      ibge: 3517901,
    },
    {
      value: "Guarani d'Oeste",
      label: "Guarani d'Oeste",
      ibge: 3518008,
    },
    {
      value: "Guarantã",
      label: "Guarantã",
      ibge: 3518107,
    },
    {
      value: "Guararapes",
      label: "Guararapes",
      ibge: 3518206,
    },
    {
      value: "Guararema",
      label: "Guararema",
      ibge: 3518305,
    },
    {
      value: "Guaratinguetá",
      label: "Guaratinguetá",
      ibge: 3518404,
    },
    {
      value: "Guareí",
      label: "Guareí",
      ibge: 3518503,
    },
    {
      value: "Guariba",
      label: "Guariba",
      ibge: 3518602,
    },
    {
      value: "Guarujá",
      label: "Guarujá",
      ibge: 3518701,
    },
    {
      value: "Guarulhos",
      label: "Guarulhos",
      ibge: 3518800,
    },
    {
      value: "Guatapará",
      label: "Guatapará",
      ibge: 3518859,
    },
    {
      value: "Guzolândia",
      label: "Guzolândia",
      ibge: 3518909,
    },
    {
      value: "Herculândia",
      label: "Herculândia",
      ibge: 3519006,
    },
    {
      value: "Holambra",
      label: "Holambra",
      ibge: 3519055,
    },
    {
      value: "Hortolândia",
      label: "Hortolândia",
      ibge: 3519071,
    },
    {
      value: "Iacanga",
      label: "Iacanga",
      ibge: 3519105,
    },
    {
      value: "Iacri",
      label: "Iacri",
      ibge: 3519204,
    },
    {
      value: "Iaras",
      label: "Iaras",
      ibge: 3519253,
    },
    {
      value: "Ibaté",
      label: "Ibaté",
      ibge: 3519303,
    },
    {
      value: "Ibirá",
      label: "Ibirá",
      ibge: 3519402,
    },
    {
      value: "Ibirarema",
      label: "Ibirarema",
      ibge: 3519501,
    },
    {
      value: "Ibitinga",
      label: "Ibitinga",
      ibge: 3519600,
    },
    {
      value: "Ibiúna",
      label: "Ibiúna",
      ibge: 3519709,
    },
    {
      value: "Icém",
      label: "Icém",
      ibge: 3519808,
    },
    {
      value: "Iepê",
      label: "Iepê",
      ibge: 3519907,
    },
    {
      value: "Igaraçu do Tietê",
      label: "Igaraçu do Tietê",
      ibge: 3520004,
    },
    {
      value: "Igarapava",
      label: "Igarapava",
      ibge: 3520103,
    },
    {
      value: "Igaratá",
      label: "Igaratá",
      ibge: 3520202,
    },
    {
      value: "Iguape",
      label: "Iguape",
      ibge: 3520301,
    },
    {
      value: "Ilha Comprida",
      label: "Ilha Comprida",
      ibge: 3520426,
    },
    {
      value: "Ilha Solteira",
      label: "Ilha Solteira",
      ibge: 3520442,
    },
    {
      value: "Ilhabela",
      label: "Ilhabela",
      ibge: 3520400,
    },
    {
      value: "Indaiatuba",
      label: "Indaiatuba",
      ibge: 3520509,
    },
    {
      value: "Indiana",
      label: "Indiana",
      ibge: 3520608,
    },
    {
      value: "Indiaporã",
      label: "Indiaporã",
      ibge: 3520707,
    },
    {
      value: "Inúbia Paulista",
      label: "Inúbia Paulista",
      ibge: 3520806,
    },
    {
      value: "Ipauçu",
      label: "Ipauçu",
    },
    {
      value: "Iperó",
      label: "Iperó",
      ibge: 3521002,
    },
    {
      value: "Ipeúna",
      label: "Ipeúna",
      ibge: 3521101,
    },
    {
      value: "Ipiguá",
      label: "Ipiguá",
      ibge: 3521150,
    },
    {
      value: "Iporanga",
      label: "Iporanga",
      ibge: 3521200,
    },
    {
      value: "Ipuã",
      label: "Ipuã",
      ibge: 3521309,
    },
    {
      value: "Iracemápolis",
      label: "Iracemápolis",
      ibge: 3521408,
    },
    {
      value: "Irapuã",
      label: "Irapuã",
      ibge: 3521507,
    },
    {
      value: "Irapuru",
      label: "Irapuru",
      ibge: 3521606,
    },
    {
      value: "Itaberá",
      label: "Itaberá",
      ibge: 3521705,
    },
    {
      value: "Itaí",
      label: "Itaí",
      ibge: 3521804,
    },
    {
      value: "Itajobi",
      label: "Itajobi",
      ibge: 3521903,
    },
    {
      value: "Itaju",
      label: "Itaju",
      ibge: 3522000,
    },
    {
      value: "Itanhaém",
      label: "Itanhaém",
      ibge: 3522109,
    },
    {
      value: "Itaóca",
      label: "Itaóca",
    },
    {
      value: "Itapecerica da Serra",
      label: "Itapecerica da Serra",
      ibge: 3522208,
    },
    {
      value: "Itapetininga",
      label: "Itapetininga",
      ibge: 3522307,
    },
    {
      value: "Itapeva",
      label: "Itapeva",
      ibge: 3522406,
    },
    {
      value: "Itapevi",
      label: "Itapevi",
      ibge: 3522505,
    },
    {
      value: "Itapira",
      label: "Itapira",
      ibge: 3522604,
    },
    {
      value: "Itapirapuã Paulista",
      label: "Itapirapuã Paulista",
      ibge: 3522653,
    },
    {
      value: "Itápolis",
      label: "Itápolis",
      ibge: 3522703,
    },
    {
      value: "Itaporanga",
      label: "Itaporanga",
      ibge: 3522802,
    },
    {
      value: "Itapuí",
      label: "Itapuí",
      ibge: 3522901,
    },
    {
      value: "Itapura",
      label: "Itapura",
      ibge: 3523008,
    },
    {
      value: "Itaquaquecetuba",
      label: "Itaquaquecetuba",
      ibge: 3523107,
    },
    {
      value: "Itararé",
      label: "Itararé",
      ibge: 3523206,
    },
    {
      value: "Itariri",
      label: "Itariri",
      ibge: 3523305,
    },
    {
      value: "Itatiba",
      label: "Itatiba",
      ibge: 3523404,
    },
    {
      value: "Itatinga",
      label: "Itatinga",
      ibge: 3523503,
    },
    {
      value: "Itirapina",
      label: "Itirapina",
      ibge: 3523602,
    },
    {
      value: "Itirapuã",
      label: "Itirapuã",
      ibge: 3523701,
    },
    {
      value: "Itobi",
      label: "Itobi",
      ibge: 3523800,
    },
    {
      value: "Itu",
      label: "Itu",
      ibge: 3523909,
    },
    {
      value: "Itupeva",
      label: "Itupeva",
      ibge: 3524006,
    },
    {
      value: "Ituverava",
      label: "Ituverava",
      ibge: 3524105,
    },
    {
      value: "Jaborandi",
      label: "Jaborandi",
      ibge: 3524204,
    },
    {
      value: "Jaboticabal",
      label: "Jaboticabal",
      ibge: 3524303,
    },
    {
      value: "Jacareí",
      label: "Jacareí",
      ibge: 3524402,
    },
    {
      value: "Jaci",
      label: "Jaci",
      ibge: 3524501,
    },
    {
      value: "Jacupiranga",
      label: "Jacupiranga",
      ibge: 3524600,
    },
    {
      value: "Jaguariúna",
      label: "Jaguariúna",
      ibge: 3524709,
    },
    {
      value: "Jales",
      label: "Jales",
      ibge: 3524808,
    },
    {
      value: "Jambeiro",
      label: "Jambeiro",
      ibge: 3524907,
    },
    {
      value: "Jandira",
      label: "Jandira",
      ibge: 3525003,
    },
    {
      value: "Jardinópolis",
      label: "Jardinópolis",
      ibge: 3525102,
    },
    {
      value: "Jarinu",
      label: "Jarinu",
      ibge: 3525201,
    },
    {
      value: "Jaú",
      label: "Jaú",
      ibge: 3525300,
    },
    {
      value: "Jeriquara",
      label: "Jeriquara",
      ibge: 3525409,
    },
    {
      value: "Joanópolis",
      label: "Joanópolis",
      ibge: 3525508,
    },
    {
      value: "João Ramalho",
      label: "João Ramalho",
      ibge: 3525607,
    },
    {
      value: "José Bonifácio",
      label: "José Bonifácio",
      ibge: 3525706,
    },
    {
      value: "Júlio Mesquita",
      label: "Júlio Mesquita",
      ibge: 3525805,
    },
    {
      value: "Jumirim",
      label: "Jumirim",
      ibge: 3525854,
    },
    {
      value: "Jundiaí",
      label: "Jundiaí",
      ibge: 3525904,
    },
    {
      value: "Junqueirópolis",
      label: "Junqueirópolis",
      ibge: 3526001,
    },
    {
      value: "Juquiá",
      label: "Juquiá",
      ibge: 3526100,
    },
    {
      value: "Juquitiba",
      label: "Juquitiba",
      ibge: 3526209,
    },
    {
      value: "Lagoinha",
      label: "Lagoinha",
      ibge: 3526308,
    },
    {
      value: "Laranjal Paulista",
      label: "Laranjal Paulista",
      ibge: 3526407,
    },
    {
      value: "Lavínia",
      label: "Lavínia",
      ibge: 3526506,
    },
    {
      value: "Lavrinhas",
      label: "Lavrinhas",
      ibge: 3526605,
    },
    {
      value: "Leme",
      label: "Leme",
      ibge: 3526704,
    },
    {
      value: "Lençóis Paulista",
      label: "Lençóis Paulista",
      ibge: 3526803,
    },
    {
      value: "Limeira",
      label: "Limeira",
      ibge: 3526902,
    },
    {
      value: "Lindóia",
      label: "Lindóia",
      ibge: 3527009,
    },
    {
      value: "Lins",
      label: "Lins",
      ibge: 3527108,
    },
    {
      value: "Lorena",
      label: "Lorena",
      ibge: 3527207,
    },
    {
      value: "Lourdes",
      label: "Lourdes",
      ibge: 3527256,
    },
    {
      value: "Louveira",
      label: "Louveira",
      ibge: 3527306,
    },
    {
      value: "Lucélia",
      label: "Lucélia",
      ibge: 3527405,
    },
    {
      value: "Lucianópolis",
      label: "Lucianópolis",
      ibge: 3527504,
    },
    {
      value: "Luís Antônio",
      label: "Luís Antônio",
      ibge: 3527603,
    },
    {
      value: "Luiziânia",
      label: "Luiziânia",
      ibge: 3527702,
    },
    {
      value: "Lupércio",
      label: "Lupércio",
      ibge: 3527801,
    },
    {
      value: "Lutécia",
      label: "Lutécia",
      ibge: 3527900,
    },
    {
      value: "Macatuba",
      label: "Macatuba",
      ibge: 3528007,
    },
    {
      value: "Macaubal",
      label: "Macaubal",
      ibge: 3528106,
    },
    {
      value: "Macedônia",
      label: "Macedônia",
      ibge: 3528205,
    },
    {
      value: "Magda",
      label: "Magda",
      ibge: 3528304,
    },
    {
      value: "Mairinque",
      label: "Mairinque",
      ibge: 3528403,
    },
    {
      value: "Mairiporã",
      label: "Mairiporã",
      ibge: 3528502,
    },
    {
      value: "Manduri",
      label: "Manduri",
      ibge: 3528601,
    },
    {
      value: "Marabá Paulista",
      label: "Marabá Paulista",
      ibge: 3528700,
    },
    {
      value: "Maracaí",
      label: "Maracaí",
      ibge: 3528809,
    },
    {
      value: "Marapoama",
      label: "Marapoama",
      ibge: 3528858,
    },
    {
      value: "Mariápolis",
      label: "Mariápolis",
      ibge: 3528908,
    },
    {
      value: "Marília",
      label: "Marília",
      ibge: 3529005,
    },
    {
      value: "Marinópolis",
      label: "Marinópolis",
      ibge: 3529104,
    },
    {
      value: "Martinópolis",
      label: "Martinópolis",
      ibge: 3529203,
    },
    {
      value: "Matão",
      label: "Matão",
      ibge: 3529302,
    },
    {
      value: "Mauá",
      label: "Mauá",
      ibge: 3529401,
    },
    {
      value: "Mendonça",
      label: "Mendonça",
      ibge: 3529500,
    },
    {
      value: "Meridiano",
      label: "Meridiano",
      ibge: 3529609,
    },
    {
      value: "Mesópolis",
      label: "Mesópolis",
      ibge: 3529658,
    },
    {
      value: "Miguelópolis",
      label: "Miguelópolis",
      ibge: 3529708,
    },
    {
      value: "Mineiros do Tietê",
      label: "Mineiros do Tietê",
      ibge: 3529807,
    },
    {
      value: "Mira Estrela",
      label: "Mira Estrela",
      ibge: 3530003,
    },
    {
      value: "Miracatu",
      label: "Miracatu",
      ibge: 3529906,
    },
    {
      value: "Mirandópolis",
      label: "Mirandópolis",
      ibge: 3530102,
    },
    {
      value: "Mirante do Paranapanema",
      label: "Mirante do Paranapanema",
      ibge: 3530201,
    },
    {
      value: "Mirassol",
      label: "Mirassol",
      ibge: 3530300,
    },
    {
      value: "Mirassolândia",
      label: "Mirassolândia",
      ibge: 3530409,
    },
    {
      value: "Mococa",
      label: "Mococa",
      ibge: 3530508,
    },
    {
      value: "Mogi das Cruzes",
      label: "Mogi das Cruzes",
      ibge: 3530607,
    },
    {
      value: "Mogi-Guaçu",
      label: "Mogi-Guaçu",
    },
    {
      value: "Mogi-Mirim",
      label: "Mogi-Mirim",
    },
    {
      value: "Mombuca",
      label: "Mombuca",
      ibge: 3530904,
    },
    {
      value: "Monções",
      label: "Monções",
      ibge: 3531001,
    },
    {
      value: "Mongaguá",
      label: "Mongaguá",
      ibge: 3531100,
    },
    {
      value: "Monte Alegre do Sul",
      label: "Monte Alegre do Sul",
      ibge: 3531209,
    },
    {
      value: "Monte Alto",
      label: "Monte Alto",
      ibge: 3531308,
    },
    {
      value: "Monte Aprazível",
      label: "Monte Aprazível",
      ibge: 3531407,
    },
    {
      value: "Monte Azul Paulista",
      label: "Monte Azul Paulista",
      ibge: 3531506,
    },
    {
      value: "Monte Castelo",
      label: "Monte Castelo",
      ibge: 3531605,
    },
    {
      value: "Monte Mor",
      label: "Monte Mor",
      ibge: 3531803,
    },
    {
      value: "Monteiro Lobato",
      label: "Monteiro Lobato",
      ibge: 3531704,
    },
    {
      value: "Morro Agudo",
      label: "Morro Agudo",
      ibge: 3531902,
    },
    {
      value: "Morungaba",
      label: "Morungaba",
      ibge: 3532009,
    },
    {
      value: "Motuca",
      label: "Motuca",
      ibge: 3532058,
    },
    {
      value: "Murutinga do Sul",
      label: "Murutinga do Sul",
      ibge: 3532108,
    },
    {
      value: "Nantes",
      label: "Nantes",
      ibge: 3532157,
    },
    {
      value: "Narandiba",
      label: "Narandiba",
      ibge: 3532207,
    },
    {
      value: "Natividade da Serra",
      label: "Natividade da Serra",
      ibge: 3532306,
    },
    {
      value: "Nazaré Paulista",
      label: "Nazaré Paulista",
      ibge: 3532405,
    },
    {
      value: "Neves Paulista",
      label: "Neves Paulista",
      ibge: 3532504,
    },
    {
      value: "Nhandeara",
      label: "Nhandeara",
      ibge: 3532603,
    },
    {
      value: "Nipoã",
      label: "Nipoã",
      ibge: 3532702,
    },
    {
      value: "Nova Aliança",
      label: "Nova Aliança",
      ibge: 3532801,
    },
    {
      value: "Nova Campina",
      label: "Nova Campina",
      ibge: 3532827,
    },
    {
      value: "Nova Canaã Paulista",
      label: "Nova Canaã Paulista",
      ibge: 3532843,
    },
    {
      value: "Nova Castilho",
      label: "Nova Castilho",
      ibge: 3532868,
    },
    {
      value: "Nova Europa",
      label: "Nova Europa",
      ibge: 3532900,
    },
    {
      value: "Nova Granada",
      label: "Nova Granada",
      ibge: 3533007,
    },
    {
      value: "Nova Guataporanga",
      label: "Nova Guataporanga",
      ibge: 3533106,
    },
    {
      value: "Nova Independência",
      label: "Nova Independência",
      ibge: 3533205,
    },
    {
      value: "Nova Luzitânia",
      label: "Nova Luzitânia",
      ibge: 3533304,
    },
    {
      value: "Nova Odessa",
      label: "Nova Odessa",
      ibge: 3533403,
    },
    {
      value: "Novais",
      label: "Novais",
      ibge: 3533254,
    },
    {
      value: "Novo Horizonte",
      label: "Novo Horizonte",
      ibge: 3533502,
    },
    {
      value: "Nuporanga",
      label: "Nuporanga",
      ibge: 3533601,
    },
    {
      value: "Ocauçu",
      label: "Ocauçu",
      ibge: 3533700,
    },
    {
      value: "Óleo",
      label: "Óleo",
      ibge: 3533809,
    },
    {
      value: "Olímpia",
      label: "Olímpia",
      ibge: 3533908,
    },
    {
      value: "Onda Verde",
      label: "Onda Verde",
      ibge: 3534005,
    },
    {
      value: "Oriente",
      label: "Oriente",
      ibge: 3534104,
    },
    {
      value: "Orindiúva",
      label: "Orindiúva",
      ibge: 3534203,
    },
    {
      value: "Orlândia",
      label: "Orlândia",
      ibge: 3534302,
    },
    {
      value: "Osasco",
      label: "Osasco",
      ibge: 3534401,
    },
    {
      value: "Oscar Bressane",
      label: "Oscar Bressane",
      ibge: 3534500,
    },
    {
      value: "Osvaldo Cruz",
      label: "Osvaldo Cruz",
      ibge: 3534609,
    },
    {
      value: "Ourinhos",
      label: "Ourinhos",
      ibge: 3534708,
    },
    {
      value: "Ouro Verde",
      label: "Ouro Verde",
      ibge: 3534807,
    },
    {
      value: "Ouroeste",
      label: "Ouroeste",
      ibge: 3534757,
    },
    {
      value: "Pacaembu",
      label: "Pacaembu",
      ibge: 3534906,
    },
    {
      value: "Palestina",
      label: "Palestina",
      ibge: 3535002,
    },
    {
      value: "Palmares Paulista",
      label: "Palmares Paulista",
      ibge: 3535101,
    },
    {
      value: "Palmeira d'Oeste",
      label: "Palmeira d'Oeste",
      ibge: 3535200,
    },
    {
      value: "Palmital",
      label: "Palmital",
      ibge: 3535309,
    },
    {
      value: "Panorama",
      label: "Panorama",
      ibge: 3535408,
    },
    {
      value: "Paraguaçu Paulista",
      label: "Paraguaçu Paulista",
      ibge: 3535507,
    },
    {
      value: "Paraibuna",
      label: "Paraibuna",
      ibge: 3535606,
    },
    {
      value: "Paraíso",
      label: "Paraíso",
      ibge: 3535705,
    },
    {
      value: "Paranapanema",
      label: "Paranapanema",
      ibge: 3535804,
    },
    {
      value: "Paranapuã",
      label: "Paranapuã",
      ibge: 3535903,
    },
    {
      value: "Parapuã",
      label: "Parapuã",
      ibge: 3536000,
    },
    {
      value: "Pardinho",
      label: "Pardinho",
      ibge: 3536109,
    },
    {
      value: "Pariquera-Açu",
      label: "Pariquera-Açu",
      ibge: 3536208,
    },
    {
      value: "Parisi",
      label: "Parisi",
      ibge: 3536257,
    },
    {
      value: "Patrocínio Paulista",
      label: "Patrocínio Paulista",
      ibge: 3536307,
    },
    {
      value: "Paulicéia",
      label: "Paulicéia",
      ibge: 3536406,
    },
    {
      value: "Paulínia",
      label: "Paulínia",
      ibge: 3536505,
    },
    {
      value: "Paulistânia",
      label: "Paulistânia",
      ibge: 3536570,
    },
    {
      value: "Paulo de Faria",
      label: "Paulo de Faria",
      ibge: 3536604,
    },
    {
      value: "Pederneiras",
      label: "Pederneiras",
      ibge: 3536703,
    },
    {
      value: "Pedra Bela",
      label: "Pedra Bela",
      ibge: 3536802,
    },
    {
      value: "Pedranópolis",
      label: "Pedranópolis",
      ibge: 3536901,
    },
    {
      value: "Pedregulho",
      label: "Pedregulho",
      ibge: 3537008,
    },
    {
      value: "Pedreira",
      label: "Pedreira",
      ibge: 3537107,
    },
    {
      value: "Pedrinhas Paulista",
      label: "Pedrinhas Paulista",
      ibge: 3537156,
    },
    {
      value: "Pedro de Toledo",
      label: "Pedro de Toledo",
      ibge: 3537206,
    },
    {
      value: "Penápolis",
      label: "Penápolis",
      ibge: 3537305,
    },
    {
      value: "Pereira Barreto",
      label: "Pereira Barreto",
      ibge: 3537404,
    },
    {
      value: "Pereiras",
      label: "Pereiras",
      ibge: 3537503,
    },
    {
      value: "Peruíbe",
      label: "Peruíbe",
      ibge: 3537602,
    },
    {
      value: "Piacatu",
      label: "Piacatu",
      ibge: 3537701,
    },
    {
      value: "Piedade",
      label: "Piedade",
      ibge: 3537800,
    },
    {
      value: "Pilar do Sul",
      label: "Pilar do Sul",
      ibge: 3537909,
    },
    {
      value: "Pindamonhangaba",
      label: "Pindamonhangaba",
      ibge: 3538006,
    },
    {
      value: "Pindorama",
      label: "Pindorama",
      ibge: 3538105,
    },
    {
      value: "Pinhalzinho",
      label: "Pinhalzinho",
      ibge: 3538204,
    },
    {
      value: "Piquerobi",
      label: "Piquerobi",
      ibge: 3538303,
    },
    {
      value: "Piquete",
      label: "Piquete",
      ibge: 3538501,
    },
    {
      value: "Piracaia",
      label: "Piracaia",
      ibge: 3538600,
    },
    {
      value: "Piracicaba",
      label: "Piracicaba",
      ibge: 3538709,
    },
    {
      value: "Piraju",
      label: "Piraju",
      ibge: 3538808,
    },
    {
      value: "Pirajuí",
      label: "Pirajuí",
      ibge: 3538907,
    },
    {
      value: "Pirangi",
      label: "Pirangi",
      ibge: 3539004,
    },
    {
      value: "Pirapora do Bom Jesus",
      label: "Pirapora do Bom Jesus",
      ibge: 3539103,
    },
    {
      value: "Pirapozinho",
      label: "Pirapozinho",
      ibge: 3539202,
    },
    {
      value: "Pirassununga",
      label: "Pirassununga",
      ibge: 3539301,
    },
    {
      value: "Piratininga",
      label: "Piratininga",
      ibge: 3539400,
    },
    {
      value: "Pitangueiras",
      label: "Pitangueiras",
      ibge: 3539509,
    },
    {
      value: "Planalto",
      label: "Planalto",
      ibge: 3539608,
    },
    {
      value: "Platina",
      label: "Platina",
      ibge: 3539707,
    },
    {
      value: "Poá",
      label: "Poá",
      ibge: 3539806,
    },
    {
      value: "Poloni",
      label: "Poloni",
      ibge: 3539905,
    },
    {
      value: "Pompéia",
      label: "Pompéia",
      ibge: 3540002,
    },
    {
      value: "Pongaí",
      label: "Pongaí",
      ibge: 3540101,
    },
    {
      value: "Pontal",
      label: "Pontal",
      ibge: 3540200,
    },
    {
      value: "Pontalinda",
      label: "Pontalinda",
      ibge: 3540259,
    },
    {
      value: "Pontes Gestal",
      label: "Pontes Gestal",
      ibge: 3540309,
    },
    {
      value: "Populina",
      label: "Populina",
      ibge: 3540408,
    },
    {
      value: "Porangaba",
      label: "Porangaba",
      ibge: 3540507,
    },
    {
      value: "Porto Feliz",
      label: "Porto Feliz",
      ibge: 3540606,
    },
    {
      value: "Porto Ferreira",
      label: "Porto Ferreira",
      ibge: 3540705,
    },
    {
      value: "Potim",
      label: "Potim",
      ibge: 3540754,
    },
    {
      value: "Potirendaba",
      label: "Potirendaba",
      ibge: 3540804,
    },
    {
      value: "Pracinha",
      label: "Pracinha",
      ibge: 3540853,
    },
    {
      value: "Pradópolis",
      label: "Pradópolis",
      ibge: 3540903,
    },
    {
      value: "Praia Grande",
      label: "Praia Grande",
      ibge: 3541000,
    },
    {
      value: "Pratânia",
      label: "Pratânia",
      ibge: 3541059,
    },
    {
      value: "Presidente Alves",
      label: "Presidente Alves",
      ibge: 3541109,
    },
    {
      value: "Presidente Bernardes",
      label: "Presidente Bernardes",
      ibge: 3541208,
    },
    {
      value: "Presidente Epitácio",
      label: "Presidente Epitácio",
      ibge: 3541307,
    },
    {
      value: "Presidente Prudente",
      label: "Presidente Prudente",
      ibge: 3541406,
    },
    {
      value: "Presidente Venceslau",
      label: "Presidente Venceslau",
      ibge: 3541505,
    },
    {
      value: "Promissão",
      label: "Promissão",
      ibge: 3541604,
    },
    {
      value: "Quadra",
      label: "Quadra",
      ibge: 3541653,
    },
    {
      value: "Quatá",
      label: "Quatá",
      ibge: 3541703,
    },
    {
      value: "Queiroz",
      label: "Queiroz",
      ibge: 3541802,
    },
    {
      value: "Queluz",
      label: "Queluz",
      ibge: 3541901,
    },
    {
      value: "Quintana",
      label: "Quintana",
      ibge: 3542008,
    },
    {
      value: "Rafard",
      label: "Rafard",
      ibge: 3542107,
    },
    {
      value: "Rancharia",
      label: "Rancharia",
      ibge: 3542206,
    },
    {
      value: "Redenção da Serra",
      label: "Redenção da Serra",
      ibge: 3542305,
    },
    {
      value: "Regente Feijó",
      label: "Regente Feijó",
      ibge: 3542404,
    },
    {
      value: "Reginópolis",
      label: "Reginópolis",
      ibge: 3542503,
    },
    {
      value: "Registro",
      label: "Registro",
      ibge: 3542602,
    },
    {
      value: "Restinga",
      label: "Restinga",
      ibge: 3542701,
    },
    {
      value: "Ribeira",
      label: "Ribeira",
      ibge: 3542800,
    },
    {
      value: "Ribeirão Bonito",
      label: "Ribeirão Bonito",
      ibge: 3542909,
    },
    {
      value: "Ribeirão Branco",
      label: "Ribeirão Branco",
      ibge: 3543006,
    },
    {
      value: "Ribeirão Corrente",
      label: "Ribeirão Corrente",
      ibge: 3543105,
    },
    {
      value: "Ribeirão do Sul",
      label: "Ribeirão do Sul",
      ibge: 3543204,
    },
    {
      value: "Ribeirão dos Índios",
      label: "Ribeirão dos Índios",
      ibge: 3543238,
    },
    {
      value: "Ribeirão Grande",
      label: "Ribeirão Grande",
      ibge: 3543253,
    },
    {
      value: "Ribeirão Pires",
      label: "Ribeirão Pires",
      ibge: 3543303,
    },
    {
      value: "Ribeirão Preto",
      label: "Ribeirão Preto",
      ibge: 3543402,
    },
    {
      value: "Rifaina",
      label: "Rifaina",
      ibge: 3543600,
    },
    {
      value: "Rincão",
      label: "Rincão",
      ibge: 3543709,
    },
    {
      value: "Rinópolis",
      label: "Rinópolis",
      ibge: 3543808,
    },
    {
      value: "Rio Claro",
      label: "Rio Claro",
      ibge: 3543907,
    },
    {
      value: "Rio das Pedras",
      label: "Rio das Pedras",
      ibge: 3544004,
    },
    {
      value: "Rio Grande da Serra",
      label: "Rio Grande da Serra",
      ibge: 3544103,
    },
    {
      value: "Riolândia",
      label: "Riolândia",
      ibge: 3544202,
    },
    {
      value: "Riversul",
      label: "Riversul",
      ibge: 3543501,
    },
    {
      value: "Rosana",
      label: "Rosana",
      ibge: 3544251,
    },
    {
      value: "Roseira",
      label: "Roseira",
      ibge: 3544301,
    },
    {
      value: "Rubiácea",
      label: "Rubiácea",
      ibge: 3544400,
    },
    {
      value: "Rubinéia",
      label: "Rubinéia",
      ibge: 3544509,
    },
    {
      value: "Sabino",
      label: "Sabino",
      ibge: 3544608,
    },
    {
      value: "Sagres",
      label: "Sagres",
      ibge: 3544707,
    },
    {
      value: "Sales",
      label: "Sales",
      ibge: 3544806,
    },
    {
      value: "Sales Oliveira",
      label: "Sales Oliveira",
      ibge: 3544905,
    },
    {
      value: "Salesópolis",
      label: "Salesópolis",
      ibge: 3545001,
    },
    {
      value: "Salmourão",
      label: "Salmourão",
      ibge: 3545100,
    },
    {
      value: "Saltinho",
      label: "Saltinho",
      ibge: 3545159,
    },
    {
      value: "Salto",
      label: "Salto",
      ibge: 3545209,
    },
    {
      value: "Salto de Pirapora",
      label: "Salto de Pirapora",
      ibge: 3545308,
    },
    {
      value: "Salto Grande",
      label: "Salto Grande",
      ibge: 3545407,
    },
    {
      value: "Sandovalina",
      label: "Sandovalina",
      ibge: 3545506,
    },
    {
      value: "Santa Adélia",
      label: "Santa Adélia",
      ibge: 3545605,
    },
    {
      value: "Santa Albertina",
      label: "Santa Albertina",
      ibge: 3545704,
    },
    {
      value: "Santa Bárbara d'Oeste",
      label: "Santa Bárbara d'Oeste",
      ibge: 3545803,
    },
    {
      value: "Santa Branca",
      label: "Santa Branca",
      ibge: 3546009,
    },
    {
      value: "Santa Clara d'Oeste",
      label: "Santa Clara d'Oeste",
      ibge: 3546108,
    },
    {
      value: "Santa Cruz da Conceição",
      label: "Santa Cruz da Conceição",
      ibge: 3546207,
    },
    {
      value: "Santa Cruz da Esperança",
      label: "Santa Cruz da Esperança",
      ibge: 3546256,
    },
    {
      value: "Santa Cruz das Palmeiras",
      label: "Santa Cruz das Palmeiras",
      ibge: 3546306,
    },
    {
      value: "Santa Cruz do Rio Pardo",
      label: "Santa Cruz do Rio Pardo",
      ibge: 3546405,
    },
    {
      value: "Santa Ernestina",
      label: "Santa Ernestina",
      ibge: 3546504,
    },
    {
      value: "Santa Fé do Sul",
      label: "Santa Fé do Sul",
      ibge: 3546603,
    },
    {
      value: "Santa Gertrudes",
      label: "Santa Gertrudes",
      ibge: 3546702,
    },
    {
      value: "Santa Isabel",
      label: "Santa Isabel",
      ibge: 3546801,
    },
    {
      value: "Santa Lúcia",
      label: "Santa Lúcia",
      ibge: 3546900,
    },
    {
      value: "Santa Maria da Serra",
      label: "Santa Maria da Serra",
      ibge: 3547007,
    },
    {
      value: "Santa Mercedes",
      label: "Santa Mercedes",
      ibge: 3547106,
    },
    {
      value: "Santa Rita d'Oeste",
      label: "Santa Rita d'Oeste",
      ibge: 3547403,
    },
    {
      value: "Santa Rita do Passa Quatro",
      label: "Santa Rita do Passa Quatro",
      ibge: 3547502,
    },
    {
      value: "Santa Rosa de Viterbo",
      label: "Santa Rosa de Viterbo",
      ibge: 3547601,
    },
    {
      value: "Santa Salete",
      label: "Santa Salete",
      ibge: 3547650,
    },
    {
      value: "Santana da Ponte Pensa",
      label: "Santana da Ponte Pensa",
      ibge: 3547205,
    },
    {
      value: "Santana de Parnaíba",
      label: "Santana de Parnaíba",
      ibge: 3547304,
    },
    {
      value: "Santo Anastácio",
      label: "Santo Anastácio",
      ibge: 3547700,
    },
    {
      value: "Santo André",
      label: "Santo André",
      ibge: 3547809,
    },
    {
      value: "Santo Antônio da Alegria",
      label: "Santo Antônio da Alegria",
      ibge: 3547908,
    },
    {
      value: "Santo Antônio de Posse",
      label: "Santo Antônio de Posse",
      ibge: 3548005,
    },
    {
      value: "Santo Antônio do Aracanguá",
      label: "Santo Antônio do Aracanguá",
      ibge: 3548054,
    },
    {
      value: "Santo Antônio do Jardim",
      label: "Santo Antônio do Jardim",
      ibge: 3548104,
    },
    {
      value: "Santo Antônio do Pinhal",
      label: "Santo Antônio do Pinhal",
      ibge: 3548203,
    },
    {
      value: "Santo Expedito",
      label: "Santo Expedito",
      ibge: 3548302,
    },
    {
      value: "Santópolis do Aguapeí",
      label: "Santópolis do Aguapeí",
      ibge: 3548401,
    },
    {
      value: "Santos",
      label: "Santos",
      ibge: 3548500,
    },
    {
      value: "São Bento do Sapucaí",
      label: "São Bento do Sapucaí",
      ibge: 3548609,
    },
    {
      value: "São Bernardo do Campo",
      label: "São Bernardo do Campo",
      ibge: 3548708,
    },
    {
      value: "São Caetano do Sul",
      label: "São Caetano do Sul",
      ibge: 3548807,
    },
    {
      value: "São Carlos",
      label: "São Carlos",
      ibge: 3548906,
    },
    {
      value: "São Francisco",
      label: "São Francisco",
      ibge: 3549003,
    },
    {
      value: "São João da Boa Vista",
      label: "São João da Boa Vista",
      ibge: 3549102,
    },
    {
      value: "São João das Duas Pontes",
      label: "São João das Duas Pontes",
      ibge: 3549201,
    },
    {
      value: "São João de Iracema",
      label: "São João de Iracema",
      ibge: 3549250,
    },
    {
      value: "São João do Pau d'Alho",
      label: "São João do Pau d'Alho",
      ibge: 3549300,
    },
    {
      value: "São Joaquim da Barra",
      label: "São Joaquim da Barra",
      ibge: 3549409,
    },
    {
      value: "São José da Bela Vista",
      label: "São José da Bela Vista",
      ibge: 3549508,
    },
    {
      value: "São José do Barreiro",
      label: "São José do Barreiro",
      ibge: 3549607,
    },
    {
      value: "São José do Rio Pardo",
      label: "São José do Rio Pardo",
      ibge: 3549706,
    },
    {
      value: "São José do Rio Preto",
      label: "São José do Rio Preto",
      ibge: 3549805,
    },
    {
      value: "São José dos Campos",
      label: "São José dos Campos",
      ibge: 3549904,
    },
    {
      value: "São Lourenço da Serra",
      label: "São Lourenço da Serra",
      ibge: 3549953,
    },
    {
      value: "São Luís do Paraitinga",
      label: "São Luís do Paraitinga",
    },
    {
      value: "São Manuel",
      label: "São Manuel",
      ibge: 3550100,
    },
    {
      value: "São Miguel Arcanjo",
      label: "São Miguel Arcanjo",
      ibge: 3550209,
    },
    {
      value: "São Paulo",
      label: "São Paulo",
      ibge: 3550308,
    },
    {
      value: "São Pedro",
      label: "São Pedro",
      ibge: 3550407,
    },
    {
      value: "São Pedro do Turvo",
      label: "São Pedro do Turvo",
      ibge: 3550506,
    },
    {
      value: "São Roque",
      label: "São Roque",
      ibge: 3550605,
    },
    {
      value: "São Sebastião",
      label: "São Sebastião",
      ibge: 3550704,
    },
    {
      value: "São Sebastião da Grama",
      label: "São Sebastião da Grama",
      ibge: 3550803,
    },
    {
      value: "São Simão",
      label: "São Simão",
      ibge: 3550902,
    },
    {
      value: "São Vicente",
      label: "São Vicente",
      ibge: 3551009,
    },
    {
      value: "Sarapuí",
      label: "Sarapuí",
      ibge: 3551108,
    },
    {
      value: "Sarutaiá",
      label: "Sarutaiá",
      ibge: 3551207,
    },
    {
      value: "Sebastianópolis do Sul",
      label: "Sebastianópolis do Sul",
      ibge: 3551306,
    },
    {
      value: "Serra Azul",
      label: "Serra Azul",
      ibge: 3551405,
    },
    {
      value: "Serra Negra",
      label: "Serra Negra",
      ibge: 3551603,
    },
    {
      value: "Serrana",
      label: "Serrana",
      ibge: 3551504,
    },
    {
      value: "Sertãozinho",
      label: "Sertãozinho",
      ibge: 3551702,
    },
    {
      value: "Sete Barras",
      label: "Sete Barras",
      ibge: 3551801,
    },
    {
      value: "Severínia",
      label: "Severínia",
      ibge: 3551900,
    },
    {
      value: "Silveiras",
      label: "Silveiras",
      ibge: 3552007,
    },
    {
      value: "Socorro",
      label: "Socorro",
      ibge: 3552106,
    },
    {
      value: "Sorocaba",
      label: "Sorocaba",
      ibge: 3552205,
    },
    {
      value: "Sud Mennucci",
      label: "Sud Mennucci",
      ibge: 3552304,
    },
    {
      value: "Sumaré",
      label: "Sumaré",
      ibge: 3552403,
    },
    {
      value: "Suzanápolis",
      label: "Suzanápolis",
      ibge: 3552551,
    },
    {
      value: "Suzano",
      label: "Suzano",
      ibge: 3552502,
    },
    {
      value: "Tabapuã",
      label: "Tabapuã",
      ibge: 3552601,
    },
    {
      value: "Tabatinga",
      label: "Tabatinga",
      ibge: 3552700,
    },
    {
      value: "Taboão da Serra",
      label: "Taboão da Serra",
      ibge: 3552809,
    },
    {
      value: "Taciba",
      label: "Taciba",
      ibge: 3552908,
    },
    {
      value: "Taguaí",
      label: "Taguaí",
      ibge: 3553005,
    },
    {
      value: "Taiaçu",
      label: "Taiaçu",
      ibge: 3553104,
    },
    {
      value: "Taiúva",
      label: "Taiúva",
      ibge: 3553203,
    },
    {
      value: "Tambaú",
      label: "Tambaú",
      ibge: 3553302,
    },
    {
      value: "Tanabi",
      label: "Tanabi",
      ibge: 3553401,
    },
    {
      value: "Tapiraí",
      label: "Tapiraí",
      ibge: 3553500,
    },
    {
      value: "Tapiratiba",
      label: "Tapiratiba",
      ibge: 3553609,
    },
    {
      value: "Taquaral",
      label: "Taquaral",
      ibge: 3553658,
    },
    {
      value: "Taquaritinga",
      label: "Taquaritinga",
      ibge: 3553708,
    },
    {
      value: "Taquarituba",
      label: "Taquarituba",
      ibge: 3553807,
    },
    {
      value: "Taquarivaí",
      label: "Taquarivaí",
      ibge: 3553856,
    },
    {
      value: "Tarabai",
      label: "Tarabai",
      ibge: 3553906,
    },
    {
      value: "Tarumã",
      label: "Tarumã",
      ibge: 3553955,
    },
    {
      value: "Tatuí",
      label: "Tatuí",
      ibge: 3554003,
    },
    {
      value: "Taubaté",
      label: "Taubaté",
      ibge: 3554102,
    },
    {
      value: "Tejupá",
      label: "Tejupá",
      ibge: 3554201,
    },
    {
      value: "Teodoro Sampaio",
      label: "Teodoro Sampaio",
      ibge: 3554300,
    },
    {
      value: "Terra Roxa",
      label: "Terra Roxa",
      ibge: 3554409,
    },
    {
      value: "Tietê",
      label: "Tietê",
      ibge: 3554508,
    },
    {
      value: "Timburi",
      label: "Timburi",
      ibge: 3554607,
    },
    {
      value: "Torre de Pedra",
      label: "Torre de Pedra",
      ibge: 3554656,
    },
    {
      value: "Torrinha",
      label: "Torrinha",
      ibge: 3554706,
    },
    {
      value: "Trabiju",
      label: "Trabiju",
      ibge: 3554755,
    },
    {
      value: "Tremembé",
      label: "Tremembé",
      ibge: 3554805,
    },
    {
      value: "Três Fronteiras",
      label: "Três Fronteiras",
      ibge: 3554904,
    },
    {
      value: "Tuiuti",
      label: "Tuiuti",
      ibge: 3554953,
    },
    {
      value: "Tupã",
      label: "Tupã",
      ibge: 3555000,
    },
    {
      value: "Tupi Paulista",
      label: "Tupi Paulista",
      ibge: 3555109,
    },
    {
      value: "Turiúba",
      label: "Turiúba",
      ibge: 3555208,
    },
    {
      value: "Turmalina",
      label: "Turmalina",
      ibge: 3555307,
    },
    {
      value: "Ubarana",
      label: "Ubarana",
      ibge: 3555356,
    },
    {
      value: "Ubatuba",
      label: "Ubatuba",
      ibge: 3555406,
    },
    {
      value: "Ubirajara",
      label: "Ubirajara",
      ibge: 3555505,
    },
    {
      value: "Uchoa",
      label: "Uchoa",
      ibge: 3555604,
    },
    {
      value: "União Paulista",
      label: "União Paulista",
      ibge: 3555703,
    },
    {
      value: "Urânia",
      label: "Urânia",
      ibge: 3555802,
    },
    {
      value: "Uru",
      label: "Uru",
      ibge: 3555901,
    },
    {
      value: "Urupês",
      label: "Urupês",
      ibge: 3556008,
    },
    {
      value: "Valentim Gentil",
      label: "Valentim Gentil",
      ibge: 3556107,
    },
    {
      value: "Valinhos",
      label: "Valinhos",
      ibge: 3556206,
    },
    {
      value: "Valparaíso",
      label: "Valparaíso",
      ibge: 3556305,
    },
    {
      value: "Vargem",
      label: "Vargem",
      ibge: 3556354,
    },
    {
      value: "Vargem Grande do Sul",
      label: "Vargem Grande do Sul",
      ibge: 3556404,
    },
    {
      value: "Vargem Grande Paulista",
      label: "Vargem Grande Paulista",
      ibge: 3556453,
    },
    {
      value: "Várzea Paulista",
      label: "Várzea Paulista",
      ibge: 3556503,
    },
    {
      value: "Vera Cruz",
      label: "Vera Cruz",
      ibge: 3556602,
    },
    {
      value: "Vinhedo",
      label: "Vinhedo",
      ibge: 3556701,
    },
    {
      value: "Viradouro",
      label: "Viradouro",
      ibge: 3556800,
    },
    {
      value: "Vista Alegre do Alto",
      label: "Vista Alegre do Alto",
      ibge: 3556909,
    },
    {
      value: "Vitória Brasil",
      label: "Vitória Brasil",
      ibge: 3556958,
    },
    {
      value: "Votorantim",
      label: "Votorantim",
      ibge: 3557006,
    },
    {
      value: "Votuporanga",
      label: "Votuporanga",
      ibge: 3557105,
    },
    {
      value: "Zacarias",
      label: "Zacarias",
      ibge: 3557154,
    },
    {
      value: "Biritiba Mirim",
      label: "Biritiba Mirim",
      ibge: 3506607,
    },
    {
      value: "Embu das Artes",
      label: "Embu das Artes",
      ibge: 3515004,
    },
    {
      value: "Florínea",
      label: "Florínea",
      ibge: 3516101,
    },
    {
      value: "Ipaussu",
      label: "Ipaussu",
      ibge: 3520905,
    },
    {
      value: "Itaoca",
      label: "Itaoca",
      ibge: 3522158,
    },
    {
      value: "Mogi Guaçu",
      label: "Mogi Guaçu",
      ibge: 3530706,
    },
    {
      value: "Mogi Mirim",
      label: "Mogi Mirim",
      ibge: 3530805,
    },
    {
      value: "São Luiz do Paraitinga",
      label: "São Luiz do Paraitinga",
      ibge: 3550001,
    },
  ],
  TO: [
    {
      value: "Abreulândia",
      label: "Abreulândia",
      ibge: 1700251,
    },
    {
      value: "Aguiarnópolis",
      label: "Aguiarnópolis",
      ibge: 1700301,
    },
    {
      value: "Aliança do Tocantins",
      label: "Aliança do Tocantins",
      ibge: 1700350,
    },
    {
      value: "Almas",
      label: "Almas",
      ibge: 1700400,
    },
    {
      value: "Alvorada",
      label: "Alvorada",
      ibge: 1700707,
    },
    {
      value: "Ananás",
      label: "Ananás",
      ibge: 1701002,
    },
    {
      value: "Angico",
      label: "Angico",
      ibge: 1701051,
    },
    {
      value: "Aparecida do Rio Negro",
      label: "Aparecida do Rio Negro",
      ibge: 1701101,
    },
    {
      value: "Aragominas",
      label: "Aragominas",
      ibge: 1701309,
    },
    {
      value: "Araguacema",
      label: "Araguacema",
      ibge: 1701903,
    },
    {
      value: "Araguaçu",
      label: "Araguaçu",
      ibge: 1702000,
    },
    {
      value: "Araguaína",
      label: "Araguaína",
      ibge: 1702109,
    },
    {
      value: "Araguanã",
      label: "Araguanã",
      ibge: 1702158,
    },
    {
      value: "Araguatins",
      label: "Araguatins",
      ibge: 1702208,
    },
    {
      value: "Arapoema",
      label: "Arapoema",
      ibge: 1702307,
    },
    {
      value: "Arraias",
      label: "Arraias",
      ibge: 1702406,
    },
    {
      value: "Augustinópolis",
      label: "Augustinópolis",
      ibge: 1702554,
    },
    {
      value: "Aurora do Tocantins",
      label: "Aurora do Tocantins",
      ibge: 1702703,
    },
    {
      value: "Axixá do Tocantins",
      label: "Axixá do Tocantins",
      ibge: 1702901,
    },
    {
      value: "Babaçulândia",
      label: "Babaçulândia",
      ibge: 1703008,
    },
    {
      value: "Bandeirantes do Tocantins",
      label: "Bandeirantes do Tocantins",
      ibge: 1703057,
    },
    {
      value: "Barra do Ouro",
      label: "Barra do Ouro",
      ibge: 1703073,
    },
    {
      value: "Barrolândia",
      label: "Barrolândia",
      ibge: 1703107,
    },
    {
      value: "Bernardo Sayão",
      label: "Bernardo Sayão",
      ibge: 1703206,
    },
    {
      value: "Bom Jesus do Tocantins",
      label: "Bom Jesus do Tocantins",
      ibge: 1703305,
    },
    {
      value: "Brasilândia do Tocantins",
      label: "Brasilândia do Tocantins",
      ibge: 1703602,
    },
    {
      value: "Brejinho de Nazaré",
      label: "Brejinho de Nazaré",
      ibge: 1703701,
    },
    {
      value: "Buriti do Tocantins",
      label: "Buriti do Tocantins",
      ibge: 1703800,
    },
    {
      value: "Cachoeirinha",
      label: "Cachoeirinha",
      ibge: 1703826,
    },
    {
      value: "Campos Lindos",
      label: "Campos Lindos",
      ibge: 1703842,
    },
    {
      value: "Cariri do Tocantins",
      label: "Cariri do Tocantins",
      ibge: 1703867,
    },
    {
      value: "Carmolândia",
      label: "Carmolândia",
      ibge: 1703883,
    },
    {
      value: "Carrasco Bonito",
      label: "Carrasco Bonito",
      ibge: 1703891,
    },
    {
      value: "Caseara",
      label: "Caseara",
      ibge: 1703909,
    },
    {
      value: "Centenário",
      label: "Centenário",
      ibge: 1704105,
    },
    {
      value: "Chapada da Natividade",
      label: "Chapada da Natividade",
      ibge: 1705102,
    },
    {
      value: "Chapada de Areia",
      label: "Chapada de Areia",
      ibge: 1704600,
    },
    {
      value: "Colinas do Tocantins",
      label: "Colinas do Tocantins",
      ibge: 1705508,
    },
    {
      value: "Colméia",
      label: "Colméia",
      ibge: 1716703,
    },
    {
      value: "Combinado",
      label: "Combinado",
      ibge: 1705557,
    },
    {
      value: "Conceição do Tocantins",
      label: "Conceição do Tocantins",
      ibge: 1705607,
    },
    {
      value: "Couto de Magalhães",
      label: "Couto de Magalhães",
    },
    {
      value: "Cristalândia",
      label: "Cristalândia",
      ibge: 1706100,
    },
    {
      value: "Crixás do Tocantins",
      label: "Crixás do Tocantins",
      ibge: 1706258,
    },
    {
      value: "Darcinópolis",
      label: "Darcinópolis",
      ibge: 1706506,
    },
    {
      value: "Dianópolis",
      label: "Dianópolis",
      ibge: 1707009,
    },
    {
      value: "Divinópolis do Tocantins",
      label: "Divinópolis do Tocantins",
      ibge: 1707108,
    },
    {
      value: "Dois Irmãos do Tocantins",
      label: "Dois Irmãos do Tocantins",
      ibge: 1707207,
    },
    {
      value: "Dueré",
      label: "Dueré",
      ibge: 1707306,
    },
    {
      value: "Esperantina",
      label: "Esperantina",
      ibge: 1707405,
    },
    {
      value: "Fátima",
      label: "Fátima",
      ibge: 1707553,
    },
    {
      value: "Figueirópolis",
      label: "Figueirópolis",
      ibge: 1707652,
    },
    {
      value: "Filadélfia",
      label: "Filadélfia",
      ibge: 1707702,
    },
    {
      value: "Formoso do Araguaia",
      label: "Formoso do Araguaia",
      ibge: 1708205,
    },
    {
      value: "Fortaleza do Tabocão",
      label: "Fortaleza do Tabocão",
    },
    {
      value: "Goianorte",
      label: "Goianorte",
      ibge: 1708304,
    },
    {
      value: "Goiatins",
      label: "Goiatins",
      ibge: 1709005,
    },
    {
      value: "Guaraí",
      label: "Guaraí",
      ibge: 1709302,
    },
    {
      value: "Gurupi",
      label: "Gurupi",
      ibge: 1709500,
    },
    {
      value: "Ipueiras",
      label: "Ipueiras",
      ibge: 1709807,
    },
    {
      value: "Itacajá",
      label: "Itacajá",
      ibge: 1710508,
    },
    {
      value: "Itaguatins",
      label: "Itaguatins",
      ibge: 1710706,
    },
    {
      value: "Itapiratins",
      label: "Itapiratins",
      ibge: 1710904,
    },
    {
      value: "Itaporã do Tocantins",
      label: "Itaporã do Tocantins",
      ibge: 1711100,
    },
    {
      value: "Jaú do Tocantins",
      label: "Jaú do Tocantins",
      ibge: 1711506,
    },
    {
      value: "Juarina",
      label: "Juarina",
      ibge: 1711803,
    },
    {
      value: "Lagoa da Confusão",
      label: "Lagoa da Confusão",
      ibge: 1711902,
    },
    {
      value: "Lagoa do Tocantins",
      label: "Lagoa do Tocantins",
      ibge: 1711951,
    },
    {
      value: "Lajeado",
      label: "Lajeado",
      ibge: 1712009,
    },
    {
      value: "Lavandeira",
      label: "Lavandeira",
      ibge: 1712157,
    },
    {
      value: "Lizarda",
      label: "Lizarda",
      ibge: 1712405,
    },
    {
      value: "Luzinópolis",
      label: "Luzinópolis",
      ibge: 1712454,
    },
    {
      value: "Marianópolis do Tocantins",
      label: "Marianópolis do Tocantins",
      ibge: 1712504,
    },
    {
      value: "Mateiros",
      label: "Mateiros",
      ibge: 1712702,
    },
    {
      value: "Maurilândia do Tocantins",
      label: "Maurilândia do Tocantins",
      ibge: 1712801,
    },
    {
      value: "Miracema do Tocantins",
      label: "Miracema do Tocantins",
      ibge: 1713205,
    },
    {
      value: "Miranorte",
      label: "Miranorte",
      ibge: 1713304,
    },
    {
      value: "Monte do Carmo",
      label: "Monte do Carmo",
      ibge: 1713601,
    },
    {
      value: "Monte Santo do Tocantins",
      label: "Monte Santo do Tocantins",
      ibge: 1713700,
    },
    {
      value: "Muricilândia",
      label: "Muricilândia",
      ibge: 1713957,
    },
    {
      value: "Natividade",
      label: "Natividade",
      ibge: 1714203,
    },
    {
      value: "Nazaré",
      label: "Nazaré",
      ibge: 1714302,
    },
    {
      value: "Nova Olinda",
      label: "Nova Olinda",
      ibge: 1714880,
    },
    {
      value: "Nova Rosalândia",
      label: "Nova Rosalândia",
      ibge: 1715002,
    },
    {
      value: "Novo Acordo",
      label: "Novo Acordo",
      ibge: 1715101,
    },
    {
      value: "Novo Alegre",
      label: "Novo Alegre",
      ibge: 1715150,
    },
    {
      value: "Novo Jardim",
      label: "Novo Jardim",
      ibge: 1715259,
    },
    {
      value: "Oliveira de Fátima",
      label: "Oliveira de Fátima",
      ibge: 1715507,
    },
    {
      value: "Palmas",
      label: "Palmas",
      ibge: 1721000,
    },
    {
      value: "Palmeirante",
      label: "Palmeirante",
      ibge: 1715705,
    },
    {
      value: "Palmeiras do Tocantins",
      label: "Palmeiras do Tocantins",
      ibge: 1713809,
    },
    {
      value: "Palmeirópolis",
      label: "Palmeirópolis",
      ibge: 1715754,
    },
    {
      value: "Paraíso do Tocantins",
      label: "Paraíso do Tocantins",
      ibge: 1716109,
    },
    {
      value: "Paranã",
      label: "Paranã",
      ibge: 1716208,
    },
    {
      value: "Pau d'Arco",
      label: "Pau d'Arco",
      ibge: 1716307,
    },
    {
      value: "Pedro Afonso",
      label: "Pedro Afonso",
      ibge: 1716505,
    },
    {
      value: "Peixe",
      label: "Peixe",
      ibge: 1716604,
    },
    {
      value: "Pequizeiro",
      label: "Pequizeiro",
      ibge: 1716653,
    },
    {
      value: "Pindorama do Tocantins",
      label: "Pindorama do Tocantins",
      ibge: 1717008,
    },
    {
      value: "Piraquê",
      label: "Piraquê",
      ibge: 1717206,
    },
    {
      value: "Pium",
      label: "Pium",
      ibge: 1717503,
    },
    {
      value: "Ponte Alta do Bom Jesus",
      label: "Ponte Alta do Bom Jesus",
      ibge: 1717800,
    },
    {
      value: "Ponte Alta do Tocantins",
      label: "Ponte Alta do Tocantins",
      ibge: 1717909,
    },
    {
      value: "Porto Alegre do Tocantins",
      label: "Porto Alegre do Tocantins",
      ibge: 1718006,
    },
    {
      value: "Porto Nacional",
      label: "Porto Nacional",
      ibge: 1718204,
    },
    {
      value: "Praia Norte",
      label: "Praia Norte",
      ibge: 1718303,
    },
    {
      value: "Presidente Kennedy",
      label: "Presidente Kennedy",
      ibge: 1718402,
    },
    {
      value: "Pugmil",
      label: "Pugmil",
      ibge: 1718451,
    },
    {
      value: "Recursolândia",
      label: "Recursolândia",
      ibge: 1718501,
    },
    {
      value: "Riachinho",
      label: "Riachinho",
      ibge: 1718550,
    },
    {
      value: "Rio da Conceição",
      label: "Rio da Conceição",
      ibge: 1718659,
    },
    {
      value: "Rio dos Bois",
      label: "Rio dos Bois",
      ibge: 1718709,
    },
    {
      value: "Rio Sono",
      label: "Rio Sono",
      ibge: 1718758,
    },
    {
      value: "Sampaio",
      label: "Sampaio",
      ibge: 1718808,
    },
    {
      value: "Sandolândia",
      label: "Sandolândia",
      ibge: 1718840,
    },
    {
      value: "Santa Fé do Araguaia",
      label: "Santa Fé do Araguaia",
      ibge: 1718865,
    },
    {
      value: "Santa Maria do Tocantins",
      label: "Santa Maria do Tocantins",
      ibge: 1718881,
    },
    {
      value: "Santa Rita do Tocantins",
      label: "Santa Rita do Tocantins",
      ibge: 1718899,
    },
    {
      value: "Santa Rosa do Tocantins",
      label: "Santa Rosa do Tocantins",
      ibge: 1718907,
    },
    {
      value: "Santa Tereza do Tocantins",
      label: "Santa Tereza do Tocantins",
      ibge: 1719004,
    },
    {
      value: "Santa Terezinha Tocantins",
      label: "Santa Terezinha Tocantins",
    },
    {
      value: "São Bento do Tocantins",
      label: "São Bento do Tocantins",
      ibge: 1720101,
    },
    {
      value: "São Félix do Tocantins",
      label: "São Félix do Tocantins",
      ibge: 1720150,
    },
    {
      value: "São Miguel do Tocantins",
      label: "São Miguel do Tocantins",
      ibge: 1720200,
    },
    {
      value: "São Salvador do Tocantins",
      label: "São Salvador do Tocantins",
      ibge: 1720259,
    },
    {
      value: "São Sebastião do Tocantins",
      label: "São Sebastião do Tocantins",
      ibge: 1720309,
    },
    {
      value: "São Valério da Natividade",
      label: "São Valério da Natividade",
    },
    {
      value: "Silvanópolis",
      label: "Silvanópolis",
      ibge: 1720655,
    },
    {
      value: "Sítio Novo do Tocantins",
      label: "Sítio Novo do Tocantins",
      ibge: 1720804,
    },
    {
      value: "Sucupira",
      label: "Sucupira",
      ibge: 1720853,
    },
    {
      value: "Taguatinga",
      label: "Taguatinga",
      ibge: 1720903,
    },
    {
      value: "Taipas do Tocantins",
      label: "Taipas do Tocantins",
      ibge: 1720937,
    },
    {
      value: "Talismã",
      label: "Talismã",
      ibge: 1720978,
    },
    {
      value: "Tocantínia",
      label: "Tocantínia",
      ibge: 1721109,
    },
    {
      value: "Tocantinópolis",
      label: "Tocantinópolis",
      ibge: 1721208,
    },
    {
      value: "Tupirama",
      label: "Tupirama",
      ibge: 1721257,
    },
    {
      value: "Tupiratins",
      label: "Tupiratins",
      ibge: 1721307,
    },
    {
      value: "Wanderlândia",
      label: "Wanderlândia",
      ibge: 1722081,
    },
    {
      value: "Xambioá",
      label: "Xambioá",
      ibge: 1722107,
    },
    {
      value: "Couto Magalhães",
      label: "Couto Magalhães",
      ibge: 1706001,
    },
    {
      value: "Santa Terezinha do Tocantins",
      label: "Santa Terezinha do Tocantins",
      ibge: 1720002,
    },
    {
      value: "São Valério",
      label: "São Valério",
      ibge: 1720499,
    },
    {
      value: "Tabocão",
      label: "Tabocão",
      ibge: 1708254,
    },
  ],
};

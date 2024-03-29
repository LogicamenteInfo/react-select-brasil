import { ActionMeta, OnChangeValue } from "react-select";
import { CommonSelect, Option, SelectProps } from "./CommonSelect";

type EstadosOption = Option & {
  ibge?: number;
}

type EstadosSelectProps = Omit<SelectProps, "onChange"> & {
  onChange: (newValue: OnChangeValue<EstadosOption, false>, actionMeta: ActionMeta<EstadosOption>) => void;
}

export const EstadosOptions = [
  { value: "AC", label: "Acre", ibge: 12 },
  { value: "AL", label: "Alagoas", ibge: 27 },
  { value: "AP", label: "Amapá", ibge: 16 },
  { value: "AM", label: "Amazonas", ibge: 13 },
  { value: "BA", label: "Bahia", ibge: 29 },
  { value: "CE", label: "Ceará", ibge: 23 },
  { value: "DF", label: "Distrito Federal", ibge: 53 },
  { value: "ES", label: "Espírito Santo", ibge: 32 },
  { value: "GO", label: "Goiás", ibge: 52 },
  { value: "MA", label: "Maranhão", ibge: 21 },
  { value: "MT", label: "Mato Grosso", ibge: 51 },
  { value: "MS", label: "Mato Grosso do Sul", ibge: 50 },
  { value: "MG", label: "Minas Gerais", ibge: 31 },
  { value: "PA", label: "Pará", ibge: 15 },
  { value: "PB", label: "Paraíba", ibge: 25 },
  { value: "PR", label: "Paraná", ibge: 41 },
  { value: "PE", label: "Pernambuco", ibge: 26 },
  { value: "PI", label: "Piauí", ibge: 22 },
  { value: "RJ", label: "Rio de Janeiro", ibge: 33 },
  { value: "RN", label: "Rio Grande do Norte", ibge: 24 },
  { value: "RS", label: "Rio Grande do Sul", ibge: 43 },
  { value: "RO", label: "Rondônia", ibge: 11 },
  { value: "RR", label: "Roraima", ibge: 14 },
  { value: "SC", label: "Santa Catarina", ibge: 42 },
  { value: "SP", label: "São Paulo", ibge: 35 },
  { value: "SE", label: "Sergipe", ibge: 28 },
  { value: "TO", label: "Tocantins", ibge: 17 },
];

export const Estados = (props: EstadosSelectProps) => (
  <CommonSelect options={EstadosOptions} {...props} />
);

import { CommonSelect, SelectProps } from "./CommonSelect";

export const Generos = (props: SelectProps) => (
  <CommonSelect
    options={[
      { value: "Homem", label: "Homem" },
      { value: "Mulher", label: "Mulher" },
      { value: "Não binário", label: "Não binário" },
      { value: "Cisgênero", label: "Cisgênero" },
      { value: "Transexual", label: "Transexual" },
    ]}
    {...props}
  />
);

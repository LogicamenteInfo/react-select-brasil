import { CommonSelect, SelectProps } from "./CommonSelect";

export const Racas = (props: SelectProps) => (
  <CommonSelect
    options={[
      { value: "Branca", label: "Branca" },
      { value: "Parda", label: "Parda" },
      { value: "Preta", label: "Preta" },
      { value: "Amarela", label: "Amarela" },
      { value: "Indígena", label: "Indígena" },
    ]}
    {...props}
  />
);

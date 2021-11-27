import { CommonSelect, SelectProps } from "./CommonSelect";

export const EstadosCivis = (props: SelectProps) => (
  <CommonSelect
    options={[
      { value: "Solteiro(a)", label: "Solteiro(a)" },
      { value: "Casado(a)", label: "Casado(a)" },
      { value: "Divorciado(a)", label: "Divorciado(a)" },
      { value: "Separado(a)", label: "Separado(a)" },
      { value: "Viúvo(a)", label: "Viúvo(a)" },
    ]}
    {...props}
  />
);

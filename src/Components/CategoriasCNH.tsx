import { CommonSelect, SelectProps } from "./CommonSelect";

export const CategoriasCNH = (props: SelectProps) => (
  <CommonSelect
    options={[
      { value: "A", label: "A" },
      { value: "B", label: "B" },
      { value: "AB", label: "AB" },
      { value: "C", label: "C" },
      { value: "D", label: "D" },
      { value: "E", label: "E" },
    ]}
    {...props}
  />
);

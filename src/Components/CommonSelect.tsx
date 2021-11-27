import React from "react";
import Select, { Props, GroupBase } from "react-select";

export interface Option {
  value: any;
  label: string;
}

type InternalSelectProps = Props<Option, false, GroupBase<Option>>;

export type SelectProps = Omit<InternalSelectProps, "options">;

export const CommonSelect = (props: InternalSelectProps) => {
  const value = props.value
    ? props.options?.find((o) => (o as Option).value === props.value)
    : null;
  return <Select isClearable={true} {...props} value={value as Option} />;
};

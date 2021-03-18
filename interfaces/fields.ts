interface Option {
  value: string | number
  label: string
}

export type SelectFieldProps = {
  options: Option[]
  defaultValue: string | number
}

import * as React from 'react'
import { Controller, Control, Path, FieldValues } from 'react-hook-form'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

import { FormControl, FormHelperText, TextField, TextFieldProps } from '@mui/material'

interface Props<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  errorMessage?: string
  pattern: Omit<PatternFormatProps, 'value' | 'customInput'>
}

type InputProps = Omit<TextFieldProps, 'value' | 'onBlur' | 'onChange' | 'error'>

export function ControlledInputPattern<T extends FieldValues>({
  name,
  control,
  errorMessage,
  pattern,
  ...inputProps
}: Props<T> & InputProps) {
  const CustomInput = (props: any) => <TextField error={Boolean(errorMessage)} {...inputProps} {...props} />

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        shouldUnregister={false}
        render={({ field: { value, onChange, onBlur } }) => (
          <PatternFormat sx={{ backgroundColor: "light.100", borderRadius: 1 }} value={value} onChange={onChange} onBlur={onBlur} customInput={CustomInput} {...pattern} />
        )}
      />
      {errorMessage && <FormHelperText sx={{ color: 'error.main' }}>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

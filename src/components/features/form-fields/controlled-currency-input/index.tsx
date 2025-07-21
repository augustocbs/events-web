import * as React from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import { CurrencyInput } from "react-currency-mask";

import { FormControl, FormHelperText, TextField, TextFieldProps } from "@mui/material";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  errorMessage?: string;
  maxValue?: number;
}

type InputProps = Omit<TextFieldProps, "value" | "onBlur" | "onChange" | "error">;

export function ControlledCurrencyInput<T extends FieldValues>({
  name,
  control,
  errorMessage,
  maxValue,
  ...inputProps
}: Props<T> & InputProps) {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <CurrencyInput
            onBlur={onBlur}
            value={value}
            max={maxValue}
            onChangeValue={(event, originalValue, maskedValue) => {
              onChange(originalValue);
            }}
            InputElement={
              <TextField
                sx={{ backgroundColor: "light.100", borderRadius: 1 }}
                error={Boolean(errorMessage)}
                {...inputProps}
              />
            }
          />
        )}
      />
      {errorMessage && <FormHelperText sx={{ color: "error.main" }}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

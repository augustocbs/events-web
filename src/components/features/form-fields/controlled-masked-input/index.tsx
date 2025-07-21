"use client";
import * as React from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { FormControl, FormHelperText, TextField, TextFieldProps } from '@mui/material';
import InputMask from 'react-input-mask';

interface Props<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errorMessage?: string;
    mask?: string;
    maskChar?: string;
    onValueChange?: (event: { value: string }) => void;
}

type InputProps = Omit<TextFieldProps, 'value' | 'onBlur' | 'onChange' | 'error'>;

export function ControlledInputMask<T extends FieldValues>({
    name,
    control,
    errorMessage,
    mask,
    maskChar,
    onValueChange,
    ...inputProps
}: Props<T> & InputProps) {
    return (
        <FormControl fullWidth>
            <Controller
                name={name}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                    <InputMask
                      mask={mask || ''}
                      maskChar={maskChar || ''}
                      value={value || ''}
                      onBlur={onBlur}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e);
                        if (onValueChange) {
                          onValueChange({ value: e.target.value });
                        }
                      }}
                      disabled={inputProps.disabled}
                    >
                      {(maskedInputProps: TextFieldProps) => (
                        <TextField
                          {...maskedInputProps}
                          {...inputProps}
                          sx={{ backgroundColor: "light.100", borderRadius: 1 }}
                          error={Boolean(errorMessage)}
                        />
                      )}
                    </InputMask>
                )}
            />
            {errorMessage && <FormHelperText sx={{ color: 'error.main' }}>{errorMessage}</FormHelperText>}
        </FormControl>
    );
}

"use client";
import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  RadioProps as MuiRadioProps,
  Box,
  Typography,
} from "@mui/material";
import { Controller, Control, Path, FieldValues } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface Props<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  options: Option[];
  errorMessage?: string;
}

type RadioProps = Omit<MuiRadioProps, "checked" | "onChange" | "value" | "name">;

export function ControlledRadioGroup<T extends FieldValues>({
  label,
  name,
  control,
  options,
  errorMessage,
  ...radioProps
}: Props<T> & RadioProps) {
  return (
    <FormControl fullWidth error={!!errorMessage}>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Box
          sx={{
            backgroundColor: "light.100",
            border: "1px solid",
            borderColor: errorMessage ? "error.main" : "rgba(0, 0, 0, 0.23)",
            borderRadius: 1,
            px: 2,
            py: 1.5,
          }}
          >
            {label && <FormHelperText sx={{ ml: 0, mb: 1 }}>{label}</FormHelperText>}
            <RadioGroup row value={value} onChange={onChange} onBlur={onBlur}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio {...radioProps} />}
                  label={<Typography variant="body2">{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </Box>
        )}
      />
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

"use client";
import React from 'react'
import dynamic from 'next/dynamic'
import { Controller, Control, Path, FieldValues } from 'react-hook-form'

import { FormControl, FormHelperText } from '@mui/material'

import { Label } from './styles'
// import { CKEditor } from "@/components";

interface Props<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  errorMessage?: string
  disabled?: boolean
}

const CKEditor = dynamic(() => import('@/components/atoms/ckeditor'), { ssr: false });

export function ControlledEditor<T extends FieldValues>({ name, control, label, errorMessage, disabled }: Props<T>) {
  if (typeof window === "undefined") return null;
  return (
    <FormControl fullWidth>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          return <CKEditor value={value} disabled={disabled} onChange={newValue => onChange(newValue)} />
        }}
      />
      {errorMessage && <FormHelperText sx={{ color: 'error.main' }}>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

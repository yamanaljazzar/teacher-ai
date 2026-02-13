'use client';

import type { ComponentProps } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { Input } from 'src/components/ui/input';
import { Field, FieldError, FieldLabel, FieldDescription } from 'src/components/ui/field';

// ----------------------------------------------------------------------

type InputProps = ComponentProps<typeof Input>;

export type RHFTextFieldProps = Omit<InputProps, 'name'> & {
  name: string;
  label?: string;
  required?: boolean;
  helperText?: string;
};

export function RHFTextField({
  name,
  label,
  required,
  helperText,
  type = 'text',
  icon,
  suffix,
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  const isNumberType = type === 'number';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid || undefined}>
          {label && (
            <FieldLabel htmlFor={name} required={required}>
              {label}
            </FieldLabel>
          )}

          <Input
            {...field}
            {...other}
            id={name}
            type={isNumberType ? 'text' : type}
            icon={icon}
            suffix={suffix}
            aria-invalid={fieldState.invalid || undefined}
            value={
              isNumberType
                ? field.value === 0
                  ? ''
                  : String(field.value ?? '')
                : (field.value ?? '')
            }
            onChange={(event) => {
              if (isNumberType) {
                const val = event.target.value;
                field.onChange(val === '' ? '' : Number(val));
              } else {
                field.onChange(event);
              }
            }}
            onBlur={(event) => {
              if (isNumberType) {
                const val = event.target.value;
                field.onChange(val === '' ? '' : Number(val));
              }
              field.onBlur();
            }}
            {...(isNumberType && {
              inputMode: 'decimal' as const,
              pattern: '[0-9]*\\.?[0-9]*',
            })}
          />

          {helperText && !fieldState.invalid && <FieldDescription>{helperText}</FieldDescription>}

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

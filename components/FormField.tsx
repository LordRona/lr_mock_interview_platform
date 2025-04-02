import React from 'react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, FieldValues, Control, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    description?: string;
}

const FormFields = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder = '',
    type = 'text',
    description = ''
}: FormFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className='label'>{label}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            type={type}
                            {...field}
                        />
                    </FormControl>
                    {description && (
                        <FormDescription>
                            {description}
                        </FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormFields;
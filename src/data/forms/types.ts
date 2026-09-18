export type FormFieldType = 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox' | 'file';

export type FormFieldDef = {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  fullWidth?: boolean;
  accept?: string;
};

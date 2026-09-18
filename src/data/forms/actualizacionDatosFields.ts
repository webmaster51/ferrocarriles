import type { FormFieldDef } from './types';

// Réplica visual del formulario Contact Form 7 "ACTUALIZACIÓN DE DATOS" del
// sitio original. Envío deshabilitado por decisión del usuario — ver VisualForm.astro.
export const actualizacionDatosFields: FormFieldDef[] = [
  { name: 'nombreCompleto', label: 'Nombre completo', type: 'text', required: true },
  { name: 'tipoDocumento', label: 'Tipo de documento', type: 'select', required: true, options: ['CC', 'TI', 'RC', 'Pasaporte', 'Documento de extranjería'] },
  { name: 'ciudad', label: 'Ciudad', type: 'text', required: true },
  { name: 'barrio', label: 'Barrio', type: 'text', required: true },
  { name: 'telefono', label: 'Número de teléfono', type: 'tel', required: true },
  { name: 'correo', label: 'Correo electrónico', type: 'email', required: true },
  { name: 'numeroDocumento', label: 'Número de documento', type: 'text', required: true },
  { name: 'localidad', label: 'Localidad', type: 'text', required: true },
  { name: 'direccion', label: 'Dirección', type: 'text', required: true },
  { name: 'politica', label: 'Acepto la política de tratamiento de datos', type: 'checkbox', required: true, fullWidth: true },
];

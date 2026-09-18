import type { FormFieldDef } from './types';

// Réplica visual del formulario Contact Form 7 "CITAS" del sitio original.
// Envío deshabilitado por decisión del usuario — ver VisualForm.astro.
export const citasFields: FormFieldDef[] = [
  { name: 'nombreCompleto', label: 'Nombre completo', type: 'text', required: true },
  { name: 'tipoDocumento', label: 'Tipo de documento', type: 'select', required: true, options: ['CC', 'TI', 'RC', 'Pasaporte', 'Documento de extranjería'] },
  { name: 'numeroDocumento', label: 'Número de documento', type: 'text', required: true },
  { name: 'correo', label: 'Correo electrónico', type: 'email', required: true },
  { name: 'direccion', label: 'Dirección', type: 'text', required: true },
  { name: 'telefono', label: 'Número de teléfono', type: 'tel', required: true },
  { name: 'servicioSolicitado', label: 'Servicio solicitado', type: 'text', required: true, fullWidth: true },
  { name: 'historiaClinica', label: 'Historia clínica (si aplica)', type: 'file', accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png' },
  { name: 'ordenMedica', label: 'Orden médica (si aplica)', type: 'file', accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png' },
  { name: 'politica', label: 'Acepto la política de tratamiento de datos', type: 'checkbox', required: true, fullWidth: true },
];

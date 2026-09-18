import type { FormFieldDef } from './types';

// Réplica visual del formulario Contact Form 7 "PQRS" del sitio original.
// Envío deshabilitado por decisión del usuario — ver VisualForm.astro.
export const pqrsFields: FormFieldDef[] = [
  { name: 'nombres', label: 'Nombres', type: 'text', required: true },
  { name: 'apellidos', label: 'Apellidos', type: 'text', required: true },
  { name: 'tipoDocumento', label: 'Tipo de documento', type: 'select', required: true, options: ['Cédula', 'Cédula de extranjería', 'Tarjeta de identidad'] },
  { name: 'numeroDocumento', label: 'Número de documento', type: 'text', required: true },
  { name: 'direccion', label: 'Dirección de residencia', type: 'text', required: true, fullWidth: true },
  { name: 'correo', label: 'Correo electrónico', type: 'email', required: true },
  { name: 'telefono', label: 'Número telefónico o celular', type: 'tel', required: true },
  {
    name: 'municipio',
    label: 'Municipio donde es atendido',
    type: 'select',
    required: true,
    options: [
      'Bogotá', 'Facatativá', 'Girardot', 'Chiquinquirá', 'Duitama', 'Moniquirá', 'Sogamoso', 'Tunja',
      'Cachipay', 'Chocontá', 'Fusagasugá', 'Guaduas', 'La Mesa', 'Útica', 'Villeta', 'Zipaquirá',
      'Neiva', 'Villavicencio', 'Ambalema', 'Honda', 'Ibagué', 'Mariquita', 'Natagaima', 'La Dorada', 'Puente Nacional',
    ],
  },
  { name: 'tipoSolicitud', label: 'Tipo de solicitud', type: 'select', required: true, options: ['Felicitaciones', 'Peticiones', 'Quejas', 'Reclamos', 'Sugerencias', 'Denuncias'] },
  { name: 'descripcion', label: 'Descripción', type: 'textarea', required: true, fullWidth: true },
  { name: 'politica', label: 'Acepto la política de tratamiento de datos', type: 'checkbox', required: true, fullWidth: true },
];

import { pdfs, type PdfKey } from './pdfs';

export type SedeContact = {
  label: string;
  email?: string;
  whatsapp?: string;
  note?: string;
};

export type Sede = {
  id: string;
  nombre: string;
  direccion: string;
  mapEmbedSrc: string;
  horarios?: {
    lineaFrente: string;
    dispensacion: string;
    tomaMuestras: string;
    siau: string;
  };
  contacts: SedeContact[];
  brochurePdfKey: PdfKey;
  hasServiciosGrid: boolean;
  hasScheduleTable: boolean;
};

export const sedes: Sede[] = [
  {
    id: 'country',
    nombre: 'Sede Exclusiva Country',
    direccion: 'Carrera 16a #85-29, Bogotá',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!4v1748379127589!6m8!1m7!1szpWV5VK4yseSEj5rtMcPkQ!2m2!1d4.671071256079526!2d-74.05619366306776!3f271.30807!4f0!5f0.7820865974627469',
    horarios: {
      lineaFrente: 'Lunes a viernes: 7:00 a.m. – 6:00 p.m. · Sábados: 8:00 a.m. – 12:00 p.m.',
      dispensacion: 'Lunes a viernes: 7:00 a.m. – 6:00 p.m. · Sábados: 7:00 a.m. – 12:00 m.',
      tomaMuestras: 'Lunes a sábado: 7:00 a.m. – 12:00 m.',
      siau: 'Lunes a viernes: 7:00 a.m. – 1:00 p.m. y 2:00 p.m. – 5:00 p.m.',
    },
    contacts: [
      { label: 'Línea de frente', email: 'citas.sedes.ferro@gmail.com', whatsapp: '3187126397' },
      { label: 'Autorizaciones', email: 'autorizaciones.ferro@emcosalud.com', note: 'Presencial o por correo, con historia clínica y orden médica legibles.' },
      { label: 'Dispensación de medicamentos', email: 'emcofarma.country@gmail.com', whatsapp: '3160252182' },
      { label: 'Atención al usuario (SIAU)', email: 'atus.ferro@emcosalud.com', whatsapp: '3502142363', note: 'Oficina física y buzón de sugerencias.' },
    ],
    brochurePdfKey: 'sedeCountry',
    hasServiciosGrid: true,
    hasScheduleTable: false,
  },
  {
    id: 'ups-bogota',
    nombre: 'Sede UPS Bogotá',
    direccion: 'Av. El Dorado No. 32a - 33, Bogotá',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!4v1750305282363!6m8!1m7!1s2UzuvJq1H09eii8NGaL0Jg!2m2!1d4.629566849390442!2d-74.08284724658404!3f228.95562960225402!4f2.3899216003747767!5f2.2203552242846865',
    horarios: {
      lineaFrente: 'Lunes a viernes: 7:00 a.m. – 6:00 p.m. (jornada continua) · Sábados: 8:00 a.m. – 12:00 p.m.',
      dispensacion: 'Lunes a viernes: 7:00 a.m. – 6:00 p.m. · Sábados: 7:00 a.m. – 12:00 m.',
      tomaMuestras: 'Lunes a sábado: 7:00 a.m. – 12:00 m.',
      siau: 'Lunes a viernes: 7:00 a.m. – 1:00 p.m. y 2:00 p.m. – 5:00 p.m.',
    },
    contacts: [
      { label: 'Línea de frente', email: 'citas.sedes.ferro@gmail.com', whatsapp: '3187126397' },
      { label: 'Autorizaciones', email: 'autorizaciones.ferro@emcosalud.com', note: 'Presencial o por correo, con historia clínica y orden médica legibles.' },
      { label: 'Dispensación de medicamentos', email: 'emcofarma.corferias@gmail.com', whatsapp: '3160252181' },
      { label: 'Atención al usuario (SIAU)', email: 'atus.ferro@emcosalud.com', whatsapp: '3502142363', note: 'Oficina física y buzón de sugerencias.' },
    ],
    brochurePdfKey: 'sedeUPSBogota',
    hasServiciosGrid: false,
    hasScheduleTable: false,
  },
  {
    id: 'girardot',
    nombre: 'Sede Girardot',
    direccion: 'Calle 20 No. 8-28, Barrio Granada, Girardot',
    mapEmbedSrc: 'https://www.google.com/maps?q=Calle+20+No+8-28+Girardot,+Colombia&output=embed',
    contacts: [
      { label: 'Teléfono de citas', whatsapp: '3219068336' },
      { label: 'Línea de frente', email: 'girardotferro.sce@gmail.com' },
      { label: 'Atención al usuario', email: 'usuariosgirardot.sce@gmail.com' },
    ],
    brochurePdfKey: 'sedeGirardot',
    hasServiciosGrid: false,
    hasScheduleTable: true,
  },
];

export function pdfUrlFor(sede: Sede): string {
  return pdfs[sede.brochurePdfKey];
}

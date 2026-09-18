export type ScheduleRow = {
  servicio: string;
  lunesAViernes: string;
  sabados: string;
};

export const girardotSchedule: ScheduleRow[] = [
  { servicio: 'Medicina General', lunesAViernes: '7:00 a.m. – 12:00 m. / 2:00 p.m. – 6:00 p.m.', sabados: '7:00 a.m. – 12:00 m.' },
  { servicio: 'Enfermería', lunesAViernes: '7:00 a.m. – 12:00 m. / 2:00 p.m. – 6:00 p.m.', sabados: '7:00 a.m. – 12:00 m.' },
  { servicio: 'Odontología', lunesAViernes: 'Martes a jueves: 7:00 a.m. – 12:00 m. / 2:00 p.m. – 6:00 p.m.', sabados: '—' },
  { servicio: 'Atención al Usuario', lunesAViernes: '7:00 a.m. – 12:00 m. / 2:00 p.m. – 6:00 p.m.', sabados: '7:00 a.m. – 12:00 m.' },
];

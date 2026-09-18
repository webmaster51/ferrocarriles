export const site = {
  name: 'Ferrocarriles',
  shortName: 'Emcosalud',
  legalName: 'Sociedad Clínica Emcosalud S.A.',
  description:
    'IPS privada que presta servicios de salud a los pensionados y beneficiarios del Fondo de Pasivo Social de Ferrocarriles Nacionales de Colombia, en Bogotá, Girardot, Ibagué, Mariquita, Honda y Neiva.',
  url: 'https://ferrocarriles.clinicaemcosalud.com',
  lineaNacional: '018000111322',
  lineaBogota: '2088339',
  whatsappChannel: 'https://whatsapp.com/channel/0029VaaGjS23QxS1mwMhoD13',
  utmaisfenUrl: 'https://utmaisfen.com',
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavLink[];
};

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    children: [
      { label: 'Sedes', href: '/services/' },
      { label: 'Red de atención', href: '/red-de-atencion/' },
      {
        label: 'Verificación de derechos',
        href: 'https://docs.google.com/spreadsheets/d/1n81vwSGHK6eIOhXqEUMIWVfzTNnuTrGO/edit?gid=342008644#gid=342008644',
        external: true,
      },
    ],
  },
  { label: 'Nosotros', href: '/about-us/' },
  { label: 'Mejoremos Juntos', href: '/mejoremos-juntos/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contact/' },
];

export const quickLinks: NavItem[] = [
  { label: 'Red de Atención', href: '/red-de-atencion/' },
  { label: 'Solicitar Citas', href: '/citas/' },
  { label: 'PQRSDF', href: '/pqrs/' },
  { label: 'Actualización de Datos', href: '/actualizacion-de-datos/' },
  { label: 'Política de Protección de Datos', href: '/politica-de-proteccion-de-datos/' },
];
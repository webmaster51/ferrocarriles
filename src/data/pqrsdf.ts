export type PqrsdfCard = {
  letra: string;
  titulo: string;
  descripcion: string;
};

export const pqrsdfCards: PqrsdfCard[] = [
  { letra: 'P', titulo: 'Peticiones', descripcion: 'Solicitud formal para recibir información o servicios. Recibimos y resolvemos derechos de petición — sé claro en tu comunicación.' },
  { letra: 'Q', titulo: 'Quejas', descripcion: 'Inconformidad por mala atención o trato recibido. Repórtanos cualquier conducta inadecuada por parte de nuestros funcionarios.' },
  { letra: 'R', titulo: 'Reclamos', descripcion: 'Exigencia para corregir una situación que afectó al usuario. Infórmanos sobre inconvenientes con la prestación de servicios.' },
  { letra: 'D', titulo: 'Denuncias', descripcion: 'Informe sobre conducta irregular o ilegal. Comunícanos posibles irregularidades o actos de corrupción.' },
  { letra: 'S', titulo: 'Sugerencias', descripcion: 'Propuesta para mejorar procesos o servicios. Haznos recomendaciones para mejorar nuestros trámites.' },
  { letra: 'F', titulo: 'Felicitaciones', descripcion: 'Reconocimiento por atención o servicio satisfactorio. Envíanos tus felicitaciones para nuestro equipo.' },
];

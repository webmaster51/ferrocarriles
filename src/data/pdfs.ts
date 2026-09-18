// Registro central de documentos PDF. Se enlazan absolutos al sitio WordPress
// original ya que el XML no incluyó los binarios — decisión confirmada: no
// descargar/migrar los archivos en esta fase.
const base = '';

export const pdfs = {
  autorizacionesProceso:'/documentos/AUTORIZACIONES.pdf' ,
  fiebreAmarilla: '/documentos/fiebre-amarilla-EMCOSALUD.pdf',
  sedeGirardot: '/documentos/FERROCARRILES-DE-COLOMBIA-GIRARDOT.pdf',
  sedeCountry: '/documentos/FERROCARRILES-DE-COLOMBIA-COUNTRY.pdf',
  sedeUPSBogota: '/documentos/FERROCARRILES-DE-COLOMBIA-UPS.pdf',
  derechosDeberes: '/documentos/DERECHOS-Y-DEBERES-ATENCION-AL-USUARIO.pdf',
  participacionCiudadana: '/documentos/GUIA-PARA-LA-PARTICIPACION-CIUDADANA.pdf',
  politicaTratamientoDatos: '/documentos/POLITICA-TRATRAMIENTO-DE-DATOS-SCE.pdf',
  formatoAutorizacionDatos: '/documentos/FORMULARIO-AUTORIZACION-TRATAMIENTO-DE-DATOS-CLINICA-EMCOSALUD.pdf',
} as const;

export type PdfKey = keyof typeof pdfs;

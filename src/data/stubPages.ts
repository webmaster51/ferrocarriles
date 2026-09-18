// Páginas heredadas de WooCommerce/tema demo sin contenido real en el XML
// original. Se mantienen como rutas mínimas por decisión explícita del
// usuario, en vez de excluirse.
export type StubPage = {
  slug: string;
  title: string;
  message: string;
};

export const stubPages: StubPage[] = [
  {
    slug: 'tienda',
    title: 'Tienda',
    message: 'Esta sección no está disponible actualmente. Sociedad Clínica Emcosalud no ofrece venta de productos en línea.',
  },
  {
    slug: 'carrito',
    title: 'Carrito',
    message: 'Esta sección no está disponible actualmente. Sociedad Clínica Emcosalud no ofrece venta de productos en línea.',
  },
  {
    slug: 'finalizar-compra',
    title: 'Finalizar compra',
    message: 'Esta sección no está disponible actualmente. Sociedad Clínica Emcosalud no ofrece venta de productos en línea.',
  },
  {
    slug: 'mi-cuenta',
    title: 'Mi cuenta',
    message: 'Esta sección no está disponible actualmente. Para trámites y solicitudes, visita PQRS, Citas o Actualización de Datos.',
  },
];

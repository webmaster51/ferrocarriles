import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Falta configurar la variable RESEND_API_KEY en el servidor.' }),
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Recibimos FormData en lugar de JSON para capturar archivos binarios y textos
    const formData = await request.formData();
    const formType = formData.get('formType')?.toString() || '';

    const formValues: Record<string, any> = {};
    const attachments: any[] = [];

    // 2. Procesamos cada campo del formulario (detectando textos y archivos)
    for (const [key, value] of formData.entries()) {
      if (key === 'formType') continue;

      if (value instanceof File) {
        if (value.size > 0) {
          formValues[key] = value.name; // Muestra el nombre del archivo en la tabla del correo
          
          // Convertimos el archivo binario a Buffer para que Resend lo pueda adjuntar
          const arrayBuffer = await value.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          attachments.push({
            filename: value.name,
            content: buffer,
          });
        } else {
          formValues[key] = 'Sin archivo adjunto';
        }
      } else {
        formValues[key] = value.toString();
      }
    }

    let recipientEmail = 'citas.sedes.ferro@gmail.com';
    let subject = 'Nuevo mensaje desde la web';

    // 3. Asuntos dinámicos basados en el tipo de formulario
    if (formType === 'pqrs') {
      const nombreUsuario = [formValues.nombres, formValues.apellidos].filter(Boolean).join(' ') || 'Sin nombre';
      subject = `[PQRS] Nueva radicación - ${nombreUsuario}`;
    } else if (formType === 'cita') {
      const nombreCita = formValues.nombreCompleto || 'Sin nombre';
      subject = `[CITA] Nueva solicitud - ${nombreCita}`;
    } else if (formType === 'actualizacion') {
      const nombreActualizacion = [formValues.nombres, formValues.apellidos].filter(Boolean).join(' ') 
        || formValues.nombreCompleto 
        || 'Sin nombre';
      subject = `[ACTUALIZACIÓN] Solicitud de actualización - ${nombreActualizacion}`;
    }

    // 4. Construcción de la tabla HTML con los datos
    const rows = Object.entries(formValues)
      .map(([key, value]) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; text-transform: capitalize;">${key.replace(/_/g, ' ')}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
        </tr>
      `)
      .join('');

    // Título dinámico para el encabezado del correo según el tipo de formulario
    let tituloHtml = 'Nuevo Mensaje Web';
    if (formType === 'pqrs') {
      tituloHtml = 'Nueva Solicitud de PQRS';
    } else if (formType === 'cita') {
      tituloHtml = 'Nueva Solicitud de Cita';
    } else if (formType === 'actualizacion') {
      tituloHtml = 'Nueva Solicitud de Actualización de Datos ';
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2 style="color: #1e293b;">${tituloHtml}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${rows}
        </table>
      </div>
    `;

    // 5. Envío del correo a través de Resend con los archivos adjuntos (si existen)
    const response = await resend.emails.send({
      from: 'Ferrocarriles Web <onboarding@gestion.emcosalud.com.co>',
      to: [recipientEmail],
      subject,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (response.error) {
      console.error('Error de Resend:', response.error);
      return new Response(JSON.stringify({ error: response.error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, id: response.data?.id }), { status: 200 });
  } catch (error) {
    console.error('Error al procesar la solicitud en el servidor:', error);
    return new Response(JSON.stringify({ error: 'Error al procesar la solicitud' }), { status: 500 });
  }
};
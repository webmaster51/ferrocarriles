// Especialidades y servicios ofrecidos en Sede Exclusiva Country (según el
// HTML fuente, esta lista está asociada específicamente a esa sede).
// Los íconos son genéricos (lucide-astro) — el XML no trae un ícono propio
// por especialidad, solo 6 íconos decorativos genéricos del tema demo.
export type ServiceItem = {
  name: string;
  icon: string;
};

export const services: ServiceItem[] = [
  { name: 'Medicina general', icon: 'Stethoscope' },
  { name: 'Enfermería PyM', icon: 'HeartPulse' },
  { name: 'Medicina interna', icon: 'Activity' },
  { name: 'Medicina familiar', icon: 'Users' },
  { name: 'Nefrología', icon: 'Droplet' },
  { name: 'Cardiología', icon: 'Heart' },
  { name: 'Cardiología procedimientos eco', icon: 'Waves' },
  { name: 'Dermatología', icon: 'Sparkles' },
  { name: 'Dolor y cuidados paliativos', icon: 'LifeBuoy' },
  { name: 'Endocrinología', icon: 'Dna' },
  { name: 'Ginecoobstetricia', icon: 'Baby' },
  { name: 'Neumología', icon: 'Wind' },
  { name: 'Neurología', icon: 'Brain' },
  { name: 'Nutrición y dietética', icon: 'Apple' },
  { name: 'Odontología general', icon: 'Smile' },
  { name: 'Ortopedia y traumatología', icon: 'Bone' },
  { name: 'Otorrinolaringología', icon: 'Ear' },
  { name: 'Psicología', icon: 'BrainCircuit' },
  { name: 'Psiquiatría', icon: 'BrainCog' },
  { name: 'Urología', icon: 'Droplets' },
  { name: 'Cirugía oral', icon: 'Syringe' },
  { name: 'Toma de muestras de laboratorio clínico', icon: 'TestTube' },
  { name: 'Servicio farmacéutico', icon: 'Pill' },
  { name: 'Terapia ocupacional', icon: 'HandHeart' },
  { name: 'Fonoaudiología', icon: 'Mic' },
  { name: 'Toma de muestras de cuello uterino y ginecológicas', icon: 'TestTubes' },
  { name: 'Periodoncia', icon: 'SmilePlus' },
  { name: 'Trabajo Social', icon: 'HandHelping' },
  { name: 'Reumatología', icon: 'Bone' },
];

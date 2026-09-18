export type IPSRow = {
  departamento: string;
  municipio: string;
  nombreIPS: string;
  direccion: string;
  telefono: string;
  servicios?: string;
};

// "Sedes propias" — red de sedes operadas directamente por Emcosalud.
export const sedesPropias: IPSRow[] = [
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'EMCOSALUD IPS – SEDE COUNTRY', direccion: 'CARRERA 16 A # 85- 29, BARRIO ANTIGUO COUNTRY', telefono: '7560842 - 39005418', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'CLINICA EMCOSALUD UPS', direccion: 'AV CL 26 # 32 A 33 LC 101-102, BARRIO GRAN AMÉRICA', telefono: '7560842 - 39005418', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Girardot', nombreIPS: 'CLINICA EMCOSALUD - GIRARDOT', direccion: 'Calle 20 #8-28', telefono: '3219068336', servicios: 'Medicina general, odontología, farmacia' },
  { departamento: 'Tolima', municipio: 'Ibagué', nombreIPS: 'EMCOSALUD - IBAGUÉ', direccion: 'CRA 8 NUMERO 17-10 BARRIO INTERLAKEN', telefono: '2623081 - 3219068344', servicios: 'Medicina general y farmacia' },
  { departamento: 'Tolima', municipio: 'Ibagué', nombreIPS: 'EMCOSALUD', direccion: 'Carrera 5 No 25-26 y 25-28', telefono: '2623081 - 3219068344', servicios: 'Odontología, laboratorio clínico' },
  { departamento: 'Tolima', municipio: 'Mariquita', nombreIPS: 'EMCOSALUD SEDE MARIQUITA', direccion: 'CRA 2A No.6-60 (AL LADO DE NOTARIA UNICA)', telefono: '3164728805', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Tolima', municipio: 'Honda', nombreIPS: 'EMCOSALUD SEDE HONDA', direccion: 'Calle 7 No.22-40 Barrio La Aurora', telefono: 'N/A', servicios: 'Medicina general, odontología, laboratorio clínico' },
  { departamento: 'Huila', municipio: 'Neiva', nombreIPS: 'EMPRESA COOPERATIVA DE SERVICIOS DE SALUD “EMCOSALUD”', direccion: 'Calle 8 # 10-45', telefono: '(098) 8743080', servicios: 'Medicina general, odontología, laboratorio clínico' },
];

// Red primaria — IPS asociadas donde también puede solicitarse atención.
export const redPrimaria: IPSRow[] = [
  // CUNDINAMARCA - BOGOTÁ
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'HOSPITAL INFANTIL UNIVERSITARIO DE SAN JOSÉ', direccion: 'KR 52 # 67 A 71', telefono: '4377540', servicios: 'Urgencias y hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'EMPRESA SOCIAL DEL ESTADO HOSPITAL UNIVERSITARIO DE LA SAMARITANA', direccion: 'CRA 8 No. 0-29 SUR', telefono: '3371664', servicios: 'Urgencias y de hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'SOCIEDAD DE CIRUGÍA DE BOGOTÁ - HOSPITAL DE SAN JOSÉ', direccion: 'CL 10 No. 18 – 75', telefono: '3538000', servicios: 'Urgencias y hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'FUNDACION HOSPITAL SAN CARLOS', direccion: 'Carrera 13 N 32-44 sur', telefono: '3730000', servicios: 'Urgencias y hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'CLINICA MEDICAL SAS', direccion: 'Cr 102 No 17 49 / 57', telefono: '3168757999', servicios: 'Urgencias' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'CLINICA MEDICAL SAS', direccion: 'Calle 36 Sur No 77 - 33', telefono: '3168757999', servicios: 'Urgencias y hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'CEREN S.A.S.', direccion: 'AVENIDACALLE 13 No. 35 - 13', telefono: '312 3686296', servicios: 'Hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'ONKOS SALUD', direccion: 'AC 33 # 14 37', telefono: '3208400 ext 420 – 3204924655', servicios: 'Hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'FUNSABIAM', direccion: 'Cra 17 No 36 62', telefono: '3012583012, 3223791347', servicios: 'Hospitalización' },
  { departamento: 'DC', municipio: 'Bogotá', nombreIPS: 'RED HUMANA SAS', direccion: 'CARRERA 45A No.94-71', telefono: '2095042 - 3166915562', servicios: 'Hospitalización' },

  // CUNDINAMARCA - OTROS MUNICIPIOS
  { departamento: 'Cundinamarca', municipio: 'Facatativá', nombreIPS: 'IMPROVEQUALITY REDUCE COST SAVE LIFES AUDITORES SAS QCL AUDITORES', direccion: 'CALLE 15 No 9 - 56 - Barrio: PENSILVANIA', telefono: '6210905 - 6210910', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Facatativá', nombreIPS: 'E.S.E HOSPITAL SAN RAFAEL DE FACATATIVÁ', direccion: 'KR 11 No. 13-24', telefono: '8901818, 3143952090', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización' },
  { departamento: 'Cundinamarca', municipio: 'Facatativá', nombreIPS: 'MEDIFACA IPS S.A.S', direccion: 'Carrera 7# 13-95', telefono: '8439102', servicios: 'Laboratorio clínico, urgencias, hospitalización' },
  { departamento: 'Cundinamarca', municipio: 'Girardot', nombreIPS: 'DUMIAN MÉDICAL S.A.S', direccion: 'CRA 5 CALLE 22 ESQUINA', telefono: '8886000', servicios: 'Laboratorio clínico, urgencias, hospitalización, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Girardot', nombreIPS: 'IDIME', direccion: 'Cra 7A #21 - 06', telefono: '8350529', servicios: 'Laboratorio clínico' },
  { departamento: 'Cundinamarca', municipio: 'Zipaquirá', nombreIPS: 'IMPROVEQUALITY REDUCE COST SAVE LIFES AUDITORES SAS QCL AUDITORES', direccion: 'Calle 3 D # 13 - 78', telefono: '8813821', servicios: 'Medicina general, odontología, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Zipaquirá', nombreIPS: 'EMPRESA SOCIAL DEL ESTADO HOSPITAL UNIVERSITARIO DE LA SAMARITANA', direccion: 'CALLE 1 SUR N° 11-90 - Barrio: LA FRAGUITA', telefono: '4077075 EXT. 10702', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias' },
  { departamento: 'Cundinamarca', municipio: 'Zipaquirá', nombreIPS: 'ESE HOSPITAL UNIVERSITARIO DE LA SAMARITANA', direccion: 'Calle 10 N. 7-52', telefono: '4077075 ext. 10702 - 8522456', servicios: 'Urgencias, hospitalización' },
  { departamento: 'Cundinamarca', municipio: 'Zipaquirá', nombreIPS: 'MALCA ZIPAQUIRÁ', direccion: 'CALLE 2 No. 9 24 CENTRO', telefono: '8527945', servicios: 'Farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Villeta', nombreIPS: 'UNIDAD MEDICA CENTRAL IPS', direccion: 'CALLE 5 # 6 - 51', telefono: '311 5389876 – 8444742', servicios: 'Medicina general, laboratorio clínico' },
  { departamento: 'Cundinamarca', municipio: 'Villeta', nombreIPS: 'E.S.E. HOSPITAL SALAZAR VILLETA', direccion: 'CL 1 No. 7-56', telefono: '3185743159 – 8444118', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización' },
  { departamento: 'Cundinamarca', municipio: 'Villeta', nombreIPS: 'DROGUERÍA COLSUBSIDIO', direccion: 'CARRERA 9 #4-27', telefono: 'N/A', servicios: 'Farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Chocontá', nombreIPS: 'OSDOKSALUD SERVICIOS INTEGRALES EN SALUD EU', direccion: 'Calle 6 No. 3 - 80', telefono: '(091) 8562256', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Chocontá', nombreIPS: 'E.S.E. HOSPITAL SAN MARTIN DE PORRES DE CHOCONTÁ', direccion: 'CARRERA 4 N° 8-12', telefono: '8561301', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'La Mesa', nombreIPS: 'MESALUD IPS', direccion: 'CALLE 4A No 27-85', telefono: '8471777', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'La Mesa', nombreIPS: 'E.S.E. HOSPITAL PEDRO LEÓN ÁLVAREZ DIAZ', direccion: 'CALLE 8 # 25 34', telefono: '3172601556', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'La Mesa', nombreIPS: 'COLSUBSIDIO SF LA MESA', direccion: 'CRA. 25 NO. 4 A -47', telefono: '8470002', servicios: 'Farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Guaduas', nombreIPS: 'E.S.E. HOSPITAL SAN JOSÉ DE GUADUAS', direccion: 'CL 4 No. 12-41', telefono: '8466366', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Guaduas', nombreIPS: 'COLSUBSIDIO SF. GUADUAS CUNDINAMARCA', direccion: 'CLL 4 NO. 6-50', telefono: '8-416207', servicios: 'Farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Fusagasugá', nombreIPS: 'SERVISALUD QCL FUSAGASUGÁ', direccion: 'CAR 7 N. 17 A 15', telefono: '8717071 - 3115533962', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Fusagasugá', nombreIPS: 'SOCIEDAD MEDICA DE ESPECIALISTAS DIAGNOSTICO E IMAGENOLOGIA MEDSALUD S.A.S.', direccion: 'KR 13A 16A -08', telefono: '3108802387', servicios: 'Medicina general' },
  { departamento: 'Cundinamarca', municipio: 'Fusagasugá', nombreIPS: 'SOCIEDAD MEDICO QUIRÚRGICA NUESTRA SEÑORA DE BELÉN DE FUSAGASUGÁ S.A.S', direccion: 'CL 17 No. 12-38', telefono: '8868888 - 300638516', servicios: 'Urgencias y hospitalización' },
  { departamento: 'Cundinamarca', municipio: 'Fusagasugá', nombreIPS: 'COLSUBSIDIO SF. FUSA LA PALMA', direccion: 'CLL 8 NO 26-34 AV LAS PALMAS', telefono: '8-738379 // 8-864528', servicios: 'Farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Cachipay', nombreIPS: 'E.S.E. HOSPITAL PEDRO LEÓN ÁLVAREZ DIAZ', direccion: 'KR 8 CON CLL 4', telefono: '3203026625', servicios: 'Medicina general, odontología, laboratorio clínico' },
  { departamento: 'Cundinamarca', municipio: 'Cachipay', nombreIPS: 'MESALUD LIMITADA', direccion: 'Calle 4 A No. 27-85', telefono: '(091) 8470994', servicios: 'Medicina general, odontología, laboratorio clínico, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Cachipay', nombreIPS: 'CENTRO MEDICO SAN JOSÉ', direccion: 'Carrera 3B No. 3-24', telefono: '(091) 8443150', servicios: 'Urgencias, hospitalización' },
  { departamento: 'Cundinamarca', municipio: 'Cachipay', nombreIPS: 'E.S.E HOSPITAL PEDRO LEÓN ÁLVAREZ', direccion: 'Calle 8 # 25-34 La Mesa', telefono: '5878570', servicios: 'Urgencias, hospitalización, farmacia' },
  { departamento: 'Cundinamarca', municipio: 'Útica', nombreIPS: 'UNIDAD MEDICA MANOS AMIGAS IPS SAS', direccion: 'CALL 5 NO 5-40', telefono: '3112409513', servicios: 'Medicina general, laboratorio clínico' },
  { departamento: 'Cundinamarca', municipio: 'Útica', nombreIPS: 'UNIDAD MEDICA CENTRAL IPS', direccion: 'Calle 5 No. 6 -51', telefono: '(091) 8445513 ext. 14', servicios: 'Odontología' },
  { departamento: 'Cundinamarca', municipio: 'Útica', nombreIPS: 'E.S.E. HOSPITAL SALAZAR VILLETA', direccion: 'CL 1 No. 7-56', telefono: '3185743159 - 8444118', servicios: 'Urgencias' },
  { departamento: 'Cundinamarca', municipio: 'Útica', nombreIPS: 'DROGUERIA VIDA Y SALUD UTICA', direccion: 'CR 3 N.4 BRR.CENTRO', telefono: '320 4120603', servicios: 'Farmacia' },

  // CALDAS
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'VICTORIA SAS CLÍNICA MEDICOQUIRURGICA', direccion: 'Calle 11 # 3-48', telefono: '3113482039 – 8576985', servicios: 'Medicina General' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'DENTISTAR IPS S.A.S.', direccion: 'CLL 12 3 - 31', telefono: '2520569 - 3127891469', servicios: 'Odontología' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'LABORATORIO CLINICO, ANA MYLENA DEVIA', direccion: 'Calle 11 #4-55', telefono: '(036) 8573113', servicios: 'Laboratorio clínico' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'LABORATORIO CLINICO SANDRA PATRICIA CORDERO LEON', direccion: 'CALLE 11 No 4 – 10', telefono: '3148795812', servicios: 'Laboratorio clínico' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'ESE HOSPITAL SAN FELIX', direccion: 'CALLE 12 No. 4-20', telefono: '8571811', servicios: 'Urgencias, Hospitalización, Farmacia' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'CLINICA DE FRACTURAS VITA S.A.S', direccion: 'CALLE 12 No 2 03', telefono: '8570973', servicios: 'Urgencias' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'CLINICA FLAVIO RESTREPO S.A.S', direccion: 'Calle 12 Número 3 - 28', telefono: '8576290 – 8572207', servicios: 'Urgencias, Hospitalización' },
  { departamento: 'Caldas', municipio: 'La Dorada', nombreIPS: 'EMCOFARMA', direccion: 'CALLE 12 # 6-50 CENTRO', telefono: '3118112336', servicios: 'Farmacia' },

  // TOLIMA
  { departamento: 'Tolima', municipio: 'Ibagué', nombreIPS: 'CLINICA TOLIMA', direccion: 'Cra 1 #12-22, Ibagué, Tolima', telefono: '2708000', servicios: 'Urgencias y hospitalización' },
  { departamento: 'Tolima', municipio: 'Ibagué', nombreIPS: 'HOSPITAL FEDERICO LLERAS ACOSTA E.S.E.', direccion: 'CALLE 33 #4A-50', telefono: '2739805', servicios: 'Hospitalización y farmacia' },
  { departamento: 'Tolima', municipio: 'Ibagué', nombreIPS: 'CLINICA IBAGUÉ S.A', direccion: 'CRA 5 #12-15', telefono: '2639374', servicios: 'Hospitalización' },
  { departamento: 'Tolima', municipio: 'Mariquita', nombreIPS: 'HOSPITAL SAN JOSÉ E.S.E.', direccion: 'CRA 4 CALLES 10 Y 11', telefono: '(09)82522485', servicios: 'Laboratorio clínico, urgencias, hospitalización y farmacia' },
  { departamento: 'Tolima', municipio: 'Honda', nombreIPS: 'HOSPITAL SAN JUAN DE DIOS HONDA E.S.E', direccion: 'CALLE 9a AV. CENTENARIO', telefono: '982513100', servicios: 'Urgencias, hospitalización y farmacia' },
  { departamento: 'Tolima', municipio: 'Honda', nombreIPS: 'Empresa Cooperativa de Servicios de Salud "Emcosalud"', direccion: 'CALLE 9 N 21-208 AV CENTENARIO', telefono: '2513933', servicios: 'Farmacia' },
  { departamento: 'Tolima', municipio: 'Ambalema', nombreIPS: 'HOSPITAL SAN ANTONIO DE AMBALEMA', direccion: 'CRA 5 NUMERO 2-89 BARRIO CAMPOALEGRE', telefono: '3156519175', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización y farmacia' },
  { departamento: 'Tolima', municipio: 'Ambalema', nombreIPS: 'EMCOFARMA AMBALEMA', direccion: 'CARRERA 5 # 10-01 CENTRO', telefono: '3212502550', servicios: 'Farmacia' },
  { departamento: 'Tolima', municipio: 'Natagaima', nombreIPS: 'HOSPITAL SAN ANTONIO DE NATAGAIMA', direccion: 'CALLE 6 CARRERA 11 ESQUINA', telefono: '2269829', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización y farmacia' },
  { departamento: 'Tolima', municipio: 'Natagaima', nombreIPS: 'EMCOFARMA NATAGAIMA', direccion: 'CALLE 6 #3-34 (CENTRO)', telefono: '3168595823', servicios: 'Farmacia' },

  // BOYACÁ
  { departamento: 'Boyacá', municipio: 'Tunja', nombreIPS: 'DANSOSALUD', direccion: 'CARRERA 11N.11-51', telefono: '3227678916', servicios: 'Medicina general' },
  { departamento: 'Boyacá', municipio: 'Tunja', nombreIPS: 'SOCIEDAD ODONTOLOGÍCA DE BOYACÁ', direccion: 'CARRERA 9 N°22-34', telefono: '3185321581', servicios: 'Odontología' },
  { departamento: 'Boyacá', municipio: 'Tunja', nombreIPS: 'CARVAJAL LABORATORIOS IPS SAS', direccion: 'CALLE 24 N. 9-38', telefono: '7434956', servicios: 'Laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Tunja', nombreIPS: 'MEDILASER', direccion: 'Cr2 Este 67 B-90 Los Muiscas', telefono: '7453000', servicios: 'Urgencias y hospitalización' },
  { departamento: 'Boyacá', municipio: 'Tunja', nombreIPS: 'INVERSIONES MEDICAS DE LOS ANDES S.A.S.', direccion: 'TRANSVERSAL 11 Nº 30 - 61', telefono: '7446060', servicios: 'Urgencias, hospitalización y farmacia' },
  { departamento: 'Boyacá', municipio: 'Tunja', nombreIPS: 'COLSUBSIDIO SF. TUNJA', direccion: 'TRANSVERSAL 11 No. 31 -34 Barrio Belalcazar', telefono: '7-409022', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'CLINICSALUD', direccion: 'CALLE 19 9-12', telefono: '3209034875', servicios: 'Medicina general' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'CLAUDIA MARCELA PEÑA SIERRA', direccion: 'CALLE 14 NO.7-78', telefono: '7268014', servicios: 'Odontología' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'CARVAJAL LABORATORIOS I.P.S. S.A.S.', direccion: 'CRA 13 N 12 A 54 LOCAL 4 EDIFICIO TORRES DE SION', telefono: '7493280', servicios: 'Laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'INSTITUTO DE DIAGNOSTICO MEDICO S.A.', direccion: 'KR 9 No.14-10', telefono: '83438770 - 3103298113', servicios: 'Laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'HOSPITAL REGIONAL DE CHIQUINQUIRÁ', direccion: 'CARRERA 13 N. 18-60', telefono: '7261999', servicios: 'Urgencias y hospitalización' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'FARMAVIDA DROGUERIA COMERCIALIZADORA & SPA SAS', direccion: 'CARRERA 9#18-04', telefono: '3188623633, 3214667144', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Chiquinquirá', nombreIPS: 'COLSUBSIDIO SF CHIQUINQUIRÁ AC', direccion: 'CALLE 14 NO. 9 - 72', telefono: '7-260381', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Sogamoso', nombreIPS: 'SERVICIOS INTEGRALES DE REHABILITACIÓN EN BOYACÁ LTDA (SIREB IPS)', direccion: 'CALLE 9A No.13-39', telefono: '6087722714, 3157836971 - 3158609790', servicios: 'Medicina general y odontología' },
  { departamento: 'Boyacá', municipio: 'Sogamoso', nombreIPS: 'CARVAJAL LABORATORIOS IPS SAS', direccion: 'CARRERA 11 N. 14-14 LOCAL 205', telefono: '3112524825', servicios: 'Laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Sogamoso', nombreIPS: 'HOSPITAL REGIONAL DE SOGAMOSO', direccion: 'CALLE 8 N.11A-43', telefono: '7702210', servicios: 'Urgencias' },
  { departamento: 'Boyacá', municipio: 'Sogamoso', nombreIPS: 'CLINICA DE ESPECIALISTAS LTDA.', direccion: 'KR 9A # 14-17', telefono: '6087708686', servicios: 'Urgencias y hospitalización' },
  { departamento: 'Boyacá', municipio: 'Sogamoso', nombreIPS: 'DROGUERÍA FARMALU', direccion: 'CARRERA 10 N° 16-04 LOCAL 2', telefono: '3202327462', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Sogamoso', nombreIPS: 'COLSUBSIDIO DROGUERÍA SOGAMOSO A.C. – MIXTA', direccion: 'CALLE 13 No. 11 - 61', telefono: '7-722180', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Moniquirá', nombreIPS: 'HOSPITAL REGIONAL DE MONIQUIRÁ ESE', direccion: 'Calle 4 A No. 9-101 Barrio Ricaurte', telefono: '7282630', servicios: 'Medicina general, odontología, laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Moniquirá', nombreIPS: 'CARVAJAL LABORATORIOS IPS SAS', direccion: 'CALLE 24 N. 9-38', telefono: '7434956', servicios: 'Laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Moniquirá', nombreIPS: 'HOSPITAL REGIONAL DE MONIQUIRÁ', direccion: 'CALLE 19 N. 8-10', telefono: '87632323', servicios: 'Urgencias, hospitalización' },
  { departamento: 'Boyacá', municipio: 'Moniquirá', nombreIPS: 'COLSUBSIDIO SF. TUNJA', direccion: 'TRANSVERSAL 11 No. 31 -34 Barrio Belalcazar', telefono: '7-409022', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Moniquirá', nombreIPS: 'DROGUERÍA MONIQUIRÁ', direccion: 'CALLE 19 N° 4-14 CENTRO', telefono: 'N/A', servicios: 'Farmacia' },
  { departamento: 'Boyacá', municipio: 'Duitama', nombreIPS: 'SERVICIOS INTEGRALES DE REHABILITACIÓN EN BOYACÁ LTDA (SIREB IPS)', direccion: 'CARRERA 16 No.6-21', telefono: '6087703039 - 3157836971', servicios: 'Medicina general y odontología' },
  { departamento: 'Boyacá', municipio: 'Duitama', nombreIPS: 'COLCAN S.A.S.', direccion: 'Calle 9 No. 24-117', telefono: '3153519082', servicios: 'Laboratorio clínico' },
  { departamento: 'Boyacá', municipio: 'Duitama', nombreIPS: 'HOSPITAL REGIONAL DE DUITAMA', direccion: 'AVENIDA LAS AMERICAS CARRERA 35', telefono: '7632323', servicios: 'Urgencias, hospitalización y farmacia' },
  { departamento: 'Boyacá', municipio: 'Duitama', nombreIPS: 'COLSUBSIDIO DROGUERÍA DUITAMA A.C. – MIXTA', direccion: 'CARRERA 16 NO. 14 – 42', telefono: '7-623938', servicios: 'Farmacia' },

  // SANTANDER
  { departamento: 'Santander', municipio: 'Puente Nacional', nombreIPS: 'E.S.E. HOSPITAL INTEGRADO SAN ANTONIO', direccion: 'CARRERA 6 # 8-61', telefono: '3158887504', servicios: 'Medicina general, odontología, laboratorio clínico, urgencias, hospitalización y farmacia' },

  // META
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'SERVICIOS MEDICOS INTEGRALES DE SALUD', direccion: 'Calle 33 No. 41-36 Barzal', telefono: '(098) 6706810', servicios: 'Medicina general, odontología' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'COLCAN S.A.S.', direccion: 'Carr 35 Nro 35 - 18', telefono: '316 2545676', servicios: 'Laboratorio clínico' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'SERVICIOS MEDICOS INTEGRALES DE SALUD SAS SERVIMEDICOS SAS', direccion: 'CALLE 32 No.40A-40', telefono: '315 3806404 - 6623137', servicios: 'Laboratorio clínico, urgencias y hospitalización' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'CLINICA ESPECIALIZADA EN SALUD MENTAL FENIX S.A.S.', direccion: 'KILOMETRO 04 VIA PUERTO LOPEZ', telefono: '3203341170', servicios: 'Urgencias' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'CORPORACION CLINICA LA PRIMAVERA', direccion: 'CL 36 35-70', telefono: '6614300 ext 201 - 3225216941', servicios: 'Urgencias, hospitalización' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'HOSPITAL DEPARTAMENTAL DE VILLAVICENCIO', direccion: 'Calle 37 a número 28-53 barrio barzal alto', telefono: '3155455991 – 6817901', servicios: 'Urgencias' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'NUEVA CLÍNICA EL BARZAL S.A.S', direccion: 'CRA 37 No 35 - 12', telefono: '6726521', servicios: 'Hospitalización y farmacia' },
  { departamento: 'Meta', municipio: 'Villavicencio', nombreIPS: 'DROGUERIA COLSUBSIDIO', direccion: 'Calle 33 No. 36-50, local 105 Barzal', telefono: 'N/A', servicios: 'Farmacia' },

  // HUILA
  { departamento: 'Huila', municipio: 'Neiva', nombreIPS: 'SOCIEDAD CLINICA EMCOSALUD S.A.', direccion: 'Calle 5 # 6-73', telefono: '(098) 8743080', servicios: 'Laboratorio clínico, urgencias, hospitalización' },
  { departamento: 'Huila', municipio: 'Neiva', nombreIPS: 'CLINICA MEDILASER S.A.S.', direccion: 'CRA 7 # 11-65', telefono: '3152197100', servicios: 'Urgencias' },
  { departamento: 'Huila', municipio: 'Neiva', nombreIPS: 'E.S.E. HOSPITAL UNIVERSITARIO HERNANDO MONCALEANO PERDOMO DE NEIVA', direccion: 'CALLE 9 # 15-25', telefono: '8715907 ext 1162', servicios: 'Urgencias y hospitalización' },
  { departamento: 'Huila', municipio: 'Neiva', nombreIPS: 'EMCOFARMA', direccion: 'CARRERA 7 # 16 A 05', telefono: '8751754', servicios: 'Farmacia' },
];
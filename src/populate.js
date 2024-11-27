const { sequelize, Carrera, Materia } = require('./db');

(async () => {
    try {
        await sequelize.sync({ force: true });

        // Crear carreras
        const psicologia = await Carrera.create({
            nombre: 'Psicología',
            descripcion: 'Carrera enfocada en el estudio del comportamiento humano y los procesos mentales.',
        });

        const Derecho = await Carrera.create({
            nombre: 'Derecho',
            descripcion: 'Carrera enfocada en el estudio y la aplicación de las leyes, con el objetivo de formar profesionales capacitados en la defensa de los Derechos humanos, la resolución de conflictos, y la gestión de la justicia en diferentes ámbitos sociales, políticos y económicos.',
        });
        
        const Medicina = await Carrera.create({
            nombre: 'Medicina',
            descripcion: 'Carrera centrada en la formación de profesionales en el área de la salud, con el objetivo de diagnosticar, prevenir y tratar enfermedades, además de promover el bienestar físico y mental de las personas a través de la práctica clínica, la investigación médica y la atención integral.',
        });
        

        const ingenieriaSistemas = await Carrera.create({
            nombre: 'Ingeniería de Sistemas',
            descripcion: 'Carrera enfocada en el desarrollo de software y sistemas computacionales.',
        });

        // Crear materias para Psicología
        await Materia.bulkCreate([
            // Primer semestre
            { nombre: 'ANTROPOLOGÍA SOCIOECONÓMICA BOL.', creditos: 4, semestre: 1, CarreraId: psicologia.id },
            { nombre: 'DESARROLLO HUMANO I', creditos: 4, semestre: 1, CarreraId: psicologia.id },
            { nombre: 'ESCUELAS PSICOLÓGICAS', creditos: 4, semestre: 1, CarreraId: psicologia.id },
            { nombre: 'INGLÉS TÉCNICO I', creditos: 3, semestre: 1, CarreraId: psicologia.id },
            { nombre: 'INTRODUCCIÓN A LA PSICOLOGÍA', creditos: 4, semestre: 1, CarreraId: psicologia.id },
            { nombre: 'PSICOFISIOLOGÍA', creditos: 4, semestre: 1, CarreraId: psicologia.id },

            // Segundo semestre
            { nombre: 'DESARROLLO HUMANO II', creditos: 4, semestre: 2, CarreraId: psicologia.id },
            { nombre: 'ESTADÍSTICA APLICADA A SOCIALES', creditos: 4, semestre: 2, CarreraId: psicologia.id },
            { nombre: 'INGLÉS TÉCNICO II', creditos: 3, semestre: 2, CarreraId: psicologia.id },
            { nombre: 'NEUROPSICOLOGÍA', creditos: 4, semestre: 2, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA HUMANISTA', creditos: 4, semestre: 2, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA SOCIAL', creditos: 4, semestre: 2, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA DE LA CONDUCTA', creditos: 4, semestre: 2, CarreraId: psicologia.id },

            // Tercer semestre
            { nombre: 'INTERVENCIÓN PSICOSOCIAL', creditos: 4, semestre: 3, CarreraId: psicologia.id },
            { nombre: 'PSICOANÁLISIS I', creditos: 4, semestre: 3, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA COGNITIVA', creditos: 4, semestre: 3, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA DE LA COMUNICACIÓN', creditos: 4, semestre: 3, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA EDUCATIVA', creditos: 4, semestre: 3, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA INSTITUCIONAL', creditos: 4, semestre: 3, CarreraId: psicologia.id },
            { nombre: 'PSICOMETRÍA I', creditos: 4, semestre: 3, CarreraId: psicologia.id },

            // Cuarto semestre
            { nombre: 'ELECTIVA I', creditos: 4, semestre: 4, CarreraId: psicologia.id },
            { nombre: 'PSICOANÁLISIS II', creditos: 4, semestre: 4, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA ORGANIZACIONAL I', creditos: 4, semestre: 4, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA SISTÉMICA', creditos: 4, semestre: 4, CarreraId: psicologia.id },
            { nombre: 'PSICOMETRÍA II', creditos: 4, semestre: 4, CarreraId: psicologia.id },
            { nombre: 'PSICOPATOLOGÍA I', creditos: 4, semestre: 4, CarreraId: psicologia.id },
            { nombre: 'PSICOPEDAGOGÍA', creditos: 4, semestre: 4, CarreraId: psicologia.id },

            // Quinto semestre
            { nombre: 'ELECTIVA II', creditos: 4, semestre: 5, CarreraId: psicologia.id },
            { nombre: 'EPISTEMOLOGÍA', creditos: 4, semestre: 5, CarreraId: psicologia.id },
            { nombre: 'PROCESOS GRUPALES', creditos: 4, semestre: 5, CarreraId: psicologia.id },
            { nombre: 'PROYECTIVAS I', creditos: 4, semestre: 5, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA ORGANIZACIONAL II', creditos: 4, semestre: 5, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA PREVENTIVA', creditos: 4, semestre: 5, CarreraId: psicologia.id },
            { nombre: 'PSICOPATOLOGÍA II', creditos: 4, semestre: 5, CarreraId: psicologia.id },

            // Sexto semestre
            { nombre: 'CLÍNICA INFANTO JUVENIL', creditos: 4, semestre: 6, CarreraId: psicologia.id },
            { nombre: 'EDUCACIÓN ESPECIAL', creditos: 4, semestre: 6, CarreraId: psicologia.id },
            { nombre: 'METODOLOGÍA DE LA INVESTIGACIÓN', creditos: 4, semestre: 6, CarreraId: psicologia.id },
            { nombre: 'PROGRAMA EMPRENDEDOR', creditos: 4, semestre: 6, CarreraId: psicologia.id },
            { nombre: 'PROYECTIVAS II', creditos: 4, semestre: 6, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA COMUNITARIA', creditos: 4, semestre: 6, CarreraId: psicologia.id },
            { nombre: 'PSICOTERAPIA INFANTIL', creditos: 4, semestre: 6, CarreraId: psicologia.id },

            // Séptimo semestre
            { nombre: 'BIOÉTICA', creditos: 4, semestre: 7, CarreraId: psicologia.id },
            { nombre: 'CLÍNICA DEL ADULTO', creditos: 4, semestre: 7, CarreraId: psicologia.id },
            { nombre: 'ESTRATEGIAS DE INTERVENCIÓN EDUCATIVA', creditos: 4, semestre: 7, CarreraId: psicologia.id },
            { nombre: 'GESTIÓN DE CONFLICTOS', creditos: 4, semestre: 7, CarreraId: psicologia.id },
            { nombre: 'PROYECTO INTEGRADOR DE CONOCIMIENTOS', creditos: 4, semestre: 7, CarreraId: psicologia.id },
            { nombre: 'PSICODIAGNÓSTICO', creditos: 4, semestre: 7, CarreraId: psicologia.id },
            { nombre: 'PSICOTERAPIA DEL ADULTO', creditos: 4, semestre: 7, CarreraId: psicologia.id },

            // Octavo semestre
            { nombre: 'PRÁCTICA PRE-PROFESIONAL', creditos: 6, semestre: 8, CarreraId: psicologia.id },
            { nombre: 'PSICOLOGÍA FORENSE', creditos: 4, semestre: 8, CarreraId: psicologia.id },
            { nombre: 'SEMINARIO MODALIDAD DE TITULACIÓN', creditos: 6, semestre: 8, CarreraId: psicologia.id },
        ]);

        // Crear materias para Ingeniería de Sistemas
        await Materia.bulkCreate([
            // Primer semestre
            { nombre: 'Animación Digital', creditos: 3, semestre: 1, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Fundamentos de Desarrollo de Software', creditos: 4, semestre: 1, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Fundamentos de las Ciencias de la Computación', creditos: 4, semestre: 1, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación I', creditos: 4, semestre: 1, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Inglés Técnico I', creditos: 3, semestre: 1, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Matemática Computacional', creditos: 4, semestre: 1, CarreraId: ingenieriaSistemas.id },
        
            // Segundo semestre
            { nombre: 'Base de Datos I', creditos: 4, semestre: 2, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Electrónica Digital Aplicada', creditos: 4, semestre: 2, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación II', creditos: 4, semestre: 2, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación Web I', creditos: 4, semestre: 2, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Sistemas Operativos', creditos: 4, semestre: 2, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Inglés Técnico II', creditos: 3, semestre: 2, CarreraId: ingenieriaSistemas.id },
        
            // Tercer semestre
            { nombre: 'Arquitectura de Computadores', creditos: 4, semestre: 3, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Base de Datos II', creditos: 4, semestre: 3, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Estructuras de Datos', creditos: 4, semestre: 3, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Ingeniería de Requisitos', creditos: 4, semestre: 3, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación Orientada a Objetos', creditos: 4, semestre: 3, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Matemáticas Discretas', creditos: 4, semestre: 3, CarreraId: ingenieriaSistemas.id },
        
            // Cuarto semestre
            { nombre: 'Análisis y Diseño de Sistemas', creditos: 4, semestre: 4, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Gestión de Proyectos de Software', creditos: 4, semestre: 4, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación Web II', creditos: 4, semestre: 4, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Redes de Computadoras', creditos: 4, semestre: 4, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Ingeniería de Software I', creditos: 4, semestre: 4, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Probabilidad y Estadística', creditos: 4, semestre: 4, CarreraId: ingenieriaSistemas.id },
        
            // Quinto semestre
            { nombre: 'Diseño de Interfaces de Usuario', creditos: 4, semestre: 5, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Ingeniería de Software II', creditos: 4, semestre: 5, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Seguridad Informática', creditos: 4, semestre: 5, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación Móvil I', creditos: 4, semestre: 5, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Gestión de Recursos TI', creditos: 4, semestre: 5, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Modelado y Simulación', creditos: 4, semestre: 5, CarreraId: ingenieriaSistemas.id },
        
            // Sexto semestre
            { nombre: 'Arquitectura de Software', creditos: 4, semestre: 6, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Inteligencia Artificial', creditos: 4, semestre: 6, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Programación Móvil II', creditos: 4, semestre: 6, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Redes Avanzadas', creditos: 4, semestre: 6, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Taller de Innovación Tecnológica', creditos: 4, semestre: 6, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Sistemas Distribuidos', creditos: 4, semestre: 6, CarreraId: ingenieriaSistemas.id },
        
            // Séptimo semestre
            { nombre: 'Big Data y Analítica', creditos: 4, semestre: 7, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Computación en la Nube', creditos: 4, semestre: 7, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Minería de Datos', creditos: 4, semestre: 7, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Gestión de Seguridad TI', creditos: 4, semestre: 7, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Seminario de Investigación', creditos: 4, semestre: 7, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Tópicos Avanzados de Programación', creditos: 4, semestre: 7, CarreraId: ingenieriaSistemas.id },
        
            // Octavo semestre
            { nombre: 'Arquitectura Empresarial', creditos: 4, semestre: 8, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Desarrollo de Software Ágil', creditos: 4, semestre: 8, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Proyecto Final de Carrera', creditos: 6, semestre: 8, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Práctica Profesional Supervisada', creditos: 6, semestre: 8, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Ciberseguridad', creditos: 4, semestre: 8, CarreraId: ingenieriaSistemas.id },
            { nombre: 'Ética Profesional en TI', creditos: 4, semestre: 8, CarreraId: ingenieriaSistemas.id },
        ]);

        await Materia.bulkCreate([
            // Primer semestre
            { nombre: 'Teorías del Estado', creditos: 4, semestre: 1, CarreraId: Derecho.id },
            { nombre: 'Criminología y Victimología', creditos: 4, semestre: 1, CarreraId: Derecho.id },
            { nombre: 'Historia del Derecho', creditos: 4, semestre: 1, CarreraId: Derecho.id },
            { nombre: 'Sociología Jurídica', creditos: 3, semestre: 1, CarreraId: Derecho.id },
            { nombre: 'Teoría General del Derecho', creditos: 3, semestre: 1, CarreraId: Derecho.id },
            { nombre: 'Pluralismo Jurídico', creditos: 3, semestre: 1, CarreraId: Derecho.id },
            { nombre: 'Análisis e Interpretación Jurídica', creditos: 3, semestre: 1, CarreraId: Derecho.id },
        
            // Segundo semestre
            { nombre: 'Deontología Jurídica', creditos: 4, semestre: 2, CarreraId: Derecho.id },
            { nombre: 'Derecho de las Personas', creditos: 4, semestre: 2, CarreraId: Derecho.id },
            { nombre: 'Derecho Constitucional I', creditos: 4, semestre: 2, CarreraId: Derecho.id },
            { nombre: 'Derecho Penal I', creditos: 4, semestre: 2, CarreraId: Derecho.id },
            { nombre: 'Derecho de Propiedad Intelectual y Protección de Datos', creditos: 3, semestre: 2, CarreraId: Derecho.id },
            { nombre: 'Taller de Oratoria', creditos: 2, semestre: 2, CarreraId: Derecho.id },
        
            // Tercer semestre
            { nombre: 'Derecho Administrativo I', creditos: 4, semestre: 3, CarreraId: Derecho.id },
            { nombre: 'Bienes y Derechos Reales', creditos: 4, semestre: 3, CarreraId: Derecho.id },
            { nombre: 'Derecho Constitucional II', creditos: 4, semestre: 3, CarreraId: Derecho.id },
            { nombre: 'Medicina Legal', creditos: 3, semestre: 3, CarreraId: Derecho.id },
            { nombre: 'Derecho Penal II', creditos: 4, semestre: 3, CarreraId: Derecho.id },
            { nombre: 'Derecho Procesal y Ley del Órgano Judicial', creditos: 3, semestre: 3, CarreraId: Derecho.id },
            { nombre: 'Derecho Corporativo I', creditos: 3, semestre: 3, CarreraId: Derecho.id },
        
            // Cuarto semestre
            { nombre: 'Derecho Administrativo II', creditos: 4, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Derecho de las Obligaciones', creditos: 4, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Taller de Interpretación y Lógica en la Argumentación Jurídica', creditos: 3, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Derecho Agroambiental', creditos: 3, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Derecho Tributario', creditos: 4, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Derecho Internacional Público', creditos: 4, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Derecho Corporativo II', creditos: 3, semestre: 4, CarreraId: Derecho.id },
            { nombre: 'Derecho de los Recursos Naturales', creditos: 3, semestre: 4, CarreraId: Derecho.id },
        
            // Quinto semestre
            { nombre: 'Derecho de los Contratos', creditos: 4, semestre: 5, CarreraId: Derecho.id },
            { nombre: 'Derecho Corporativo III', creditos: 4, semestre: 5, CarreraId: Derecho.id },
            { nombre: 'Derecho de las Familias y del Niño, Niña y Adolescente', creditos: 3, semestre: 5, CarreraId: Derecho.id },
            { nombre: 'Derecho Notarial y Registral', creditos: 3, semestre: 5, CarreraId: Derecho.id },
            { nombre: 'Derecho Procesal Civil', creditos: 4, semestre: 5, CarreraId: Derecho.id },
            { nombre: 'Derecho Procesal Penal', creditos: 4, semestre: 5, CarreraId: Derecho.id },
            { nombre: 'Derecho Informático y de las Telecomunicaciones', creditos: 3, semestre: 5, CarreraId: Derecho.id },
        
            // Sexto semestre
            { nombre: 'Derecho de las Sucesiones', creditos: 3, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Argumentación Jurídica para la Litigación Oral', creditos: 3, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Derecho Laboral', creditos: 4, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Derecho Internacional Privado', creditos: 4, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Metodología de la Investigación', creditos: 3, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Métodos Alternativos de Solución de Controversias', creditos: 3, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Procedimientos Especiales', creditos: 4, semestre: 6, CarreraId: Derecho.id },
            { nombre: 'Derecho Procesal Constitucional', creditos: 4, semestre: 6, CarreraId: Derecho.id },
        
            // Séptimo semestre
            { nombre: 'Forense Civil', creditos: 3, semestre: 7, CarreraId: Derecho.id },
            { nombre: 'Forense Penal', creditos: 3, semestre: 7, CarreraId: Derecho.id },
            { nombre: 'Derecho de las Autoridades de Fiscalización y Entidades Autónomas', creditos: 4, semestre: 7, CarreraId: Derecho.id },
            { nombre: 'Derecho Procesal Laboral', creditos: 3, semestre: 7, CarreraId: Derecho.id },
            { nombre: 'Derecho de la Seguridad Social', creditos: 4, semestre: 7, CarreraId: Derecho.id },
            { nombre: 'Taller de Análisis Jurídico de Casos - ABP', creditos: 3, semestre: 7, CarreraId: Derecho.id },
            { nombre: 'Electiva I', creditos: 2, semestre: 7, CarreraId: Derecho.id },
        
            // Octavo semestre
            { nombre: 'Técnicas Legislativas', creditos: 4, semestre: 8, CarreraId: Derecho.id },
            { nombre: 'Práctica Preprofesional', creditos: 6, semestre: 8, CarreraId: Derecho.id },
            { nombre: 'Electiva II', creditos: 3, semestre: 8, CarreraId: Derecho.id },
            { nombre: 'Seminario de Modalidad de Titulación', creditos: 6, semestre: 8, CarreraId: Derecho.id },
        ]);
        

        await Materia.bulkCreate([
            // Primer semestre
            { nombre: 'ANATOMÍA HUMANA I', creditos: 21, semestre: 1, CarreraId: Medicina.id },
            { nombre: 'GENÉTICA', creditos: 8, semestre: 1, CarreraId: Medicina.id },
            { nombre: 'HISTOLOGÍA I', creditos: 8, semestre: 1, CarreraId: Medicina.id },
            { nombre: 'INFORMÁTICA APLICADA', creditos: 6, semestre: 1, CarreraId: Medicina.id },
        
            // Segundo semestre
            { nombre: 'ANATOMÍA HUMANA II', creditos: 21, semestre: 2, CarreraId: Medicina.id },
            { nombre: 'EMBRIOLOGÍA', creditos: 8, semestre: 2, CarreraId: Medicina.id },
            { nombre: 'HISTOLOGÍA II', creditos: 8, semestre: 2, CarreraId: Medicina.id },
            { nombre: 'BIOQUÍMICA I', creditos: 8, semestre: 2, CarreraId: Medicina.id },
            { nombre: 'SALUD PÚBLICA I', creditos: 6, semestre: 2, CarreraId: Medicina.id },
            { nombre: 'INGLÉS TÉCNICO I', creditos: 6, semestre: 2, CarreraId: Medicina.id },
        
            // Tercer semestre
            { nombre: 'BIOQUÍMICA II', creditos: 10, semestre: 3, CarreraId: Medicina.id },
            { nombre: 'FISIOLOGÍA I', creditos: 14, semestre: 3, CarreraId: Medicina.id },
            { nombre: 'MICROBIOLOGÍA I', creditos: 10, semestre: 3, CarreraId: Medicina.id },
            { nombre: 'PATOLOGÍA I', creditos: 8, semestre: 3, CarreraId: Medicina.id },
            { nombre: 'BIOFÍSICA', creditos: 6, semestre: 3, CarreraId: Medicina.id },
            { nombre: 'INGLÉS TÉCNICO II', creditos: 6, semestre: 3, CarreraId: Medicina.id },
        
            // Cuarto semestre
            { nombre: 'BIOQUÍMICA III', creditos: 10, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'FISIOLOGÍA II', creditos: 14, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'MICROBIOLOGÍA II', creditos: 10, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'PARASITOLOGÍA', creditos: 10, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'PATOLOGÍA II', creditos: 8, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'PSICOLOGÍA MÉDICA', creditos: 8, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'SOCIOLOGÍA Y ÉTICA MÉDICA', creditos: 4, semestre: 4, CarreraId: Medicina.id },
            { nombre: 'ELECTIVA', creditos: 6, semestre: 4, CarreraId: Medicina.id },
        
            // Quinto semestre (Preclínico)
            { nombre: 'SEMIOLOGÍA GENERAL Y ESPECIAL I', creditos: 18, semestre: 5, CarreraId: Medicina.id },
            { nombre: 'TÉCNICA QUIRÚRGICA I', creditos: 11, semestre: 5, CarreraId: Medicina.id },
            { nombre: 'FARMACOLOGÍA Y TERAPÉUTICA I', creditos: 12, semestre: 5, CarreraId: Medicina.id },
            { nombre: 'FISIOPATOLOGÍA I', creditos: 8, semestre: 5, CarreraId: Medicina.id },
            { nombre: 'PATOLOGÍA III', creditos: 8, semestre: 5, CarreraId: Medicina.id },
            { nombre: 'INMUNOLOGÍA', creditos: 4, semestre: 5, CarreraId: Medicina.id },
        
            // Sexto semestre (Preclínico)
            { nombre: 'SEMIOLOGÍA GENERAL Y ESPECIAL II', creditos: 18, semestre: 6, CarreraId: Medicina.id },
            { nombre: 'TÉCNICA QUIRÚRGICA II', creditos: 11, semestre: 6, CarreraId: Medicina.id },
            { nombre: 'FARMACOLOGÍA Y TERAPÉUTICA II', creditos: 12, semestre: 6, CarreraId: Medicina.id },
            { nombre: 'FISIOPATOLOGÍA II', creditos: 8, semestre: 6, CarreraId: Medicina.id },
            { nombre: 'ANESTESIOLOGÍA', creditos: 4, semestre: 6, CarreraId: Medicina.id },
            { nombre: 'SALUD PÚBLICA II', creditos: 4, semestre: 6, CarreraId: Medicina.id },
            { nombre: 'IMAGENOLOGÍA', creditos: 4, semestre: 6, CarreraId: Medicina.id },
        
            // Cuarto año (Ciclo Clínico)
            { nombre: 'CIRUGÍA I', creditos: 14, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'GINECOLOGÍA Y OBSTETRICIA I', creditos: 14, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA I - CARDIOLOGÍA', creditos: 7, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA I - NEFROLOGÍA', creditos: 7, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA I - NEUMOLOGÍA', creditos: 7, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA I - REUMATOLOGÍA', creditos: 7, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'OFTALMOLOGÍA', creditos: 6, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'OTORRINOLARINGOLOGÍA', creditos: 6, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'PEDIATRÍA I', creditos: 14, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'TRAUMATOLOGÍA Y ORTOPEDIA', creditos: 6, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'UROLOGÍA', creditos: 6, semestre: 7, CarreraId: Medicina.id },
            { nombre: 'EPIDEMIOLOGÍA', creditos: 5, semestre: 7, CarreraId: Medicina.id },
        
            // Quinto año
            { nombre: 'CIRUGÍA II', creditos: 14, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'DERMATOLOGÍA', creditos: 6, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'GINECOLOGÍA Y OBSTETRICIA II', creditos: 14, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA II-ENDOCRINOLOGÍA', creditos: 7, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA II-GASTROENTEROL.', creditos: 7, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA II-HEMATOLOGÍA', creditos: 7, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'Medicina INTERNA II-INFECTOLOGÍA', creditos: 7, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'Medicina LEGAL', creditos: 4, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'NEUROLOGÍA Y NEUROCIRUGÍA', creditos: 9, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'PEDIATRÍA II', creditos: 14, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'PSIQUIATRÍA', creditos: 4, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'SALUD PÚBLICA III', creditos: 6, semestre: 8, CarreraId: Medicina.id },
            { nombre: 'ADMINISTRACION HOSPITALARIA', creditos: 5, semestre: 8, CarreraId: Medicina.id },
        
            // Sexto año (Internado rotatorio)
            { nombre: 'INTERNADO ROTATORIO CIRUGIA', creditos: 50, semestre: 9, CarreraId: Medicina.id },
        ]);
        
        

        console.log("Base de datos poblada con éxito.");
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    } finally {
        sequelize.close();
    }
})();

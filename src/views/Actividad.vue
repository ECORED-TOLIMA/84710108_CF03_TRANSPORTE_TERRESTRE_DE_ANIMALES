<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> validar la comprensión de los procedimientos técnicos de planificación, manejo y bioseguridad en el transporte de animales en pie.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Las paradas de descanso obligatorias, después de superar el tiempo máximo de viaje, deben realizarse en lugares autorizados para que los animales descansen, se hidraten y sean alimentados.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La normativa exige estas paradas en lugares adecuados para prevenir la fatiga extrema y garantizar el bienestar animal.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Para agilizar el embarque, se recomienda que las rampas tengan una pendiente pronunciada, idealmente superior a 20 grados.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La pendiente debe ser suave, idealmente menor a 20 grados, para evitar caídas, resbalones y lesiones en los animales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Una densidad de carga muy baja (pocos animales en un espacio grande) es ideal porque reduce el estrés térmico y el hacinamiento.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una baja densidad es peligrosa, ya que puede causar que los animales pierdan el equilibrio y caigan en curvas o frenadas."',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El hacinamiento (alta densidad de carga) es un factor crítico que puede causar asfixia, aplastamiento y estrés térmico.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La densidad de carga debe ajustarse correctamente al peso, especie y tamaño para garantizar el bienestar.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La conducción del vehículo de transporte de animales debe ser defensiva y anticipada, evitando aceleraciones, frenadas y giros bruscos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Un manejo suave es esencial para evitar que los animales se caigan, pierdan el equilibrio y sufran lesiones.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El control de las condiciones térmicas dentro del vehículo se logra principalmente sellando la unidad para evitar la entrada de aire exterior.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se logra mediante una ventilación adecuada que permita el flujo de aire para disipar el calor corporal y la humedad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Los porcinos son muy resistentes al estrés térmico porque sudan eficientemente, por lo que la ventilación no es una prioridad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Los porcinos son muy susceptibles al estrés térmico precisamente porque no sudan eficientemente, haciendo la ventilación crucial.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El uso de picanas eléctricas está terminantemente prohibido en zonas sensibles del animal, como los ojos, el ano o los genitales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. El manejo debe ser de bajo estrés, usando elementos de guía como banderas o paletas, y evitando el maltrato.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'No es necesario separar a los animales durante el transporte si son de especies similares, como bovinos y equinos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Es obligatorio separar a los animales de diferentes especies. También deben separarse por tamaño, presencia de cuernos y hostilidad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Se considera "apto para el transporte" a un animal que no puede mantenerse en pie, siempre que vaya cómodo en el piso del camión.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Está explícitamente prohibido transportar animales que no puedan mantenerse en pie por sí mismos, ya que no son aptos para el viaje.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Una hembra bovina en el último tercio de gestación no es considerada apta para el transporte debido al alto riesgo para ella y la cría.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tampoco se deben transportar hembras recién paridas o animales enfermos. La aptitud es clave.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La "zona de fuga" es el área de descanso designada en el vehículo donde los animales pueden escapar del hacinamiento.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La zona de fuga es un término etológico que define el espacio personal del animal; el operario la usa para guiarlo sin invadirlo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Los animales son sensibles a ruidos agudos como gritos y silbidos metálicos, los cuales les causan estrés, por lo que el manejo debe ser silencioso.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. El manejo de bajo estrés (etología) implica respetar los sentidos de los animales, incluyendo el oído.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El suministro de agua y alimento a los animales debe realizarse con el vehículo en movimiento para ahorrar tiempo en el trayecto.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El suministro de agua y alimento se realiza únicamente durante las paradas de descanso obligatorias en lugares autorizados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La obligación principal del propietario o tenedor del animal es entregar únicamente animales aptos para el viaje y con la Guía Sanitaria de Movilización Interna (GSMI) correspondiente.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La responsabilidad del transporte es compartida, y la del propietario inicia con la correcta selección y documentación de los animales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Tener un plan de contingencia escrito es opcional y solo se requiere para viajes que duren más de 24 horas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Toda operación de transporte debe tener un plan de contingencia escrito para emergencias (accidentes, fallas mecánicas, bloqueos).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Los operarios deben usar los mismos Elementos de Protección Personal (EPP) para el manejo de animales y para la Limpieza y Desinfección (L&D).',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El manejo requiere EPP contra golpes (botas de seguridad, guantes de vaqueta), mientras que la L&D requiere EPP contra químicos (gafas, máscara, guantes de nitrilo).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La Limpieza y Desinfección (L&D) del vehículo es un procedimiento técnico obligatorio que se debe realizar antes del embarque y después de la descarga.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Es un pilar fundamental de la bioseguridad para prevenir la diseminación de enfermedades entre predios.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La "higiene postural" se refiere a la limpieza personal del conductor antes de iniciar un viaje.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La higiene postural se refiere a la ergonomía; las buenas prácticas para mantener una posición corporal correcta al conducir o levantar cargas y prevenir lesiones.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El ayuno previo al transporte es una práctica recomendada que incluye la restricción de alimento, pero nunca la restricción de agua.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. El ayuno de sólidos reduce la defecación, pero los animales deben tener acceso a agua para mantenerse hidratados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

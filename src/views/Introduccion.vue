<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El éxito del transporte de animales en pie no se define únicamente por el viaje en carretera, sino por la rigurosidad de las operaciones en sus extremos: el precargado y la carga en origen, así como la descarga en destino. Estas fases son las de más alta interacción directa entre el hombre y el animal, y, por lo tanto, las de mayor riesgo de estrés, lesiones y accidentes.

    .row.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0
        .bg1.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.p-0.d-none.d-lg-block
              figure
                img.img-fluid(src="@/assets/curso/temas/introduccion/img-01.svg" alt="Icono 1")
            .col-lg-11
              p.mb-0 Un error en la selección de un animal no apto, un mal manejo en la rampa de embarque o una distribución incorrecta de la carga, pueden anular todos los esfuerzos de una buena planificación. Asimismo, la operación de transporte no está exenta de imprevistos; un accidente vial, una falla mecánica o un bloqueo en la vía, requieren una respuesta inmediata y profesional para mitigar el sufrimiento animal y el riesgo para el personal.
      .col-lg-3
        figure
          img.img-fluid(src="@/assets/curso/temas/introduccion/img-02.png" alt="Icono 1")

    .row.justify-content-center.mb-4
      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/introduccion/img-03.png" alt="Icono 1")
      .col-lg-9
        p Por consiguiente, este componente formativo aborda estas operaciones críticas. Se detallarán los procedimientos técnicos para la selección y el manejo de animales en el precargado, las técnicas de carga y descarga basadas en la etología y el bienestar, así como la gestión de la Seguridad y Salud en el Trabajo (SST) del personal.
        .row
          .col-lg-1.d-none.d-lg-block
            figure
              img.img-fluid(src="@/assets/curso/temas/introduccion/img-04.svg" alt="Icono 1")
          .col-lg-11
            p Finalmente, se establece la importancia del plan de contingencia como herramienta de gestión de emergencias y se introducen los principios de gestión ambiental para el manejo de los residuos generados, cerrando así el ciclo de una operación de transporte profesional, ética y responsable con la normativa vigente.
            p En este espacio formativo se conocerán los fundamentos esenciales para realizar un transporte responsable, seguro y conforme a la normativa colombiana; explorando técnicas de manejo de bajo estrés, el uso adecuado de instalaciones, el control de variables críticas durante el viaje y los protocolos de limpieza y bioseguridad. Este conocimiento es clave para garantizar el bienestar animal y fortalecer la calidad de la producción pecuaria en el país. 

    p.mb-4 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

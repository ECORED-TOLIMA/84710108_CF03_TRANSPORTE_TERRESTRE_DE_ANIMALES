<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este contenido ofrece una visión general del proceso de transporte de animales en pie, abarcando los aspectos esenciales que intervienen en el cargue, la movilización y el descargue. Su enfoque permite comprender los principios básicos, los procedimientos generales y las prácticas que orientan una operación organizada, segura y respetuosa con el bienestar animal. 
    p.mb-4 También integra una perspectiva ambiental y de gestión del riesgo, incluyendo los elementos fundamentales para manejar adecuadamente los residuos, prevenir incidentes y responder ante situaciones de emergencia. En conjunto, proporciona una guía amplia que facilita la toma de decisiones responsables y el cumplimiento de los requisitos operativos y normativos asociados a este tipo de actividades. 

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo ABC del transporte de animales en pie, presenta un recorrido que inicia con la comprensión general de los procesos de cargue y descargue de animales en pie, abordando de manera progresiva los procedimientos, implementos, técnicas y métodos que sustentan una movilización ordenada y segura. Luego avanza hacia los principios de la gestión ambiental aplicados a la actividad, destacando la identificación de residuos y las prácticas básicas para su adecuada disposición. Finalmente, se orienta al estudio de las emergencias y contingencias que pueden surgir durante el transporte, integrando los protocolos de atención, las medidas de prevención y protección, así como las acciones necesarias para el manejo de novedades y la comunicación con los puestos de control del ICA, con el fin de asegurar una operación responsable y conforme a la normativa vigente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

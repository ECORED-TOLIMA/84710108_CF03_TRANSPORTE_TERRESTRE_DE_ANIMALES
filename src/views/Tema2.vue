<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Gestión ambiental: concepto, tipos de residuos y técnicas de disposición

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img-01.png" alt="Imagen decorativa")
      .col-lg-7
        .tarjeta.bg-color-3.p-4
          .row.mb-4
            .col-lg-4
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img-02.svg" alt="Icono decorativo")
          p.mb-0 La #[b gestión ambiental] en el transporte de animales en pie no se trata solo de la limpieza, sino de la aplicación de técnicas de #[b bioseguridad y control sanitario] para evitar la #[b contaminación ambiental] y la diseminación de riesgos biológicos generados por los residuos de la carga viva en la vía pública o en los lugares de descanso.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h3.mb-0 Concepto de gestión ambiental (contexto sanitario)

    .BGM01.px-md-5.px-4.mb-4
      p.mb-4 La gestión ambiental se define como la responsabilidad de minimizar el impacto de las operaciones de transporte en el entorno, lo cual se logra mediante el cumplimiento de los protocolos de bioseguridad y las condiciones sanitarias. Al respecto se deben tener en cuenta estos aspectos:

      .row.justify-content-center.mb-0
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 23.
            i Aspectos de la gestión ambiental
          .tabla-a.color-acento-contenido.mb-4
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "background-color: #DAE4E3; width: 16.6%") Aspecto
                  th(data-aos="fade-down")(style= "background-color: #DAE4E3; width: 16.6%") Detalle de la definición/propósito
                  th(data-aos="fade-down")(style= "background-color: #DAE4E3; width: 16.6%") Soporte documental (texto exacto)
              tbody
                tr(data-aos="fade-right")
                  td.text-center(style= "background-color: #FFFF") #[b Finalidad regulatoria]
                  td(style= "background-color: #FFFF") La normativa se expide para proveer condiciones #[b sanitarias] y #[b fitosanitarias] que eviten el sufrimiento y mejoren la calidad del producto, pero la contención de residuos es un requisito de salud pública y ambiental.
                  td(style= "background-color: #FFFF") "Con la expedición de este acto administrativo, se proveen condiciones #[b sanitarias, fitosanitarias] y de bienestar animal...". ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (pág. 2).
                tr(data-aos="fade-right")
                  td.text-center(style= "background-color: #FFFF") #[b Vigilancia ambiental]
                  td(style= "background-color: #FFFF") La gestión se somete al #[b control oficial] del ICA, que vigila la aplicación de protocolos de #[b limpieza y desinfección], directamente relacionados con la gestión de desechos.
                  td(style= "background-color: #FFFF") El ICA realiza la #[b inspección, vigilancia y control] de las disposiciones sanitarias. Resolución 20223040006915 (Art. 4, Parágrafo).
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h3.mb-0 Tipos de residuos generados

    p.mb-4 En el transporte de animales en pie, se generan dos tipos principales de residuos que representan un riesgo biológico y de contaminación, como son:

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta.BG03.p-4.h-100
          .row.mb-3
            .col-lg-12.fondoh4.p-2
              h4.mb-0 Residuos sólidos y líquidos biológicos
          ul.lista-ul.mb-0
            li(data-aos="fade-right")
              ul
                li(data-aos="fade-right") 
                  i.lista-ul__vineta
                  span #[b Composición del residuo: Excretas (heces y orina)]. Son el residuo más abundante, con alto riesgo de contener patógenos (riesgo biológico) y de contaminar el suelo y el agua (riesgo ambiental).
                li(data-aos="fade-right") 
                  i.lista-ul__vineta
                  span #[b Técnica de gestión ambiental (asociada): Contención y estanqueidad] del vehículo.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right") 
        .tarjeta.BG03.p-4.h-100
          .row.mb-3
            .col-lg-12.fondoh4.p-2
              h4.mb-0 Residuos sólidos y líquidos biológicos
          ul.lista-ul.mb-0
            li(data-aos="fade-right")
              ul
                li(data-aos="fade-right") 
                  i.lista-ul__vineta
                  span #[b Composición del residuo: Animales muertos] (por muerte natural, estrés térmico o sacrificio humanitario).
                li(data-aos="fade-right") 
                  i.lista-ul__vineta
                  span #[b Técnica de gestión ambiental (asociada):] Disposición sanitaria (plan de contingencia).
      .col-lg-4(data-aos="fade-right")
        .tarjeta.h-100
          figure
            img(src='@/assets/curso/temas/tema2/img-03.png', alt='Texto que describa la imagen')

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h3.mb-0 Técnicas de disposición y control de residuos

    p.mb-4 La gestión ambiental se ejecuta a través de dos técnicas primarias: la contención del vehículo y el protocolo de emergencia. Al respecto de estas técnicas se encuentran los siguientes dos tipos:

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 A. Técnica de disposición para excretas (contención)

    p.mb-4 El método más importante de gestión ambiental es la #[b contención] de los desechos biológicos dentro del vehículo para evitar su disposición inadecuada en la vía pública. De igual manera, es importante conocer las disposiciones:

    .row.justify-content-center.mb-0
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 24.
          i Técnicas de disposición y requisitos
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #DAE4E3; width: 16.6%") Técnica de disposición
                th(data-aos="fade-down")(style= "background-color: #DAE4E3; width: 16.6%") Requisito técnico del vehículo
                th(data-aos="fade-down")(style= "background-color: #DAE4E3; width: 16.6%") Soporte documental (texto exacto)
            tbody
              tr(data-aos="fade-right")
                td.text-center(style= "background-color: #FFFF") #[b Estanqueidad del piso]
                td(style= "background-color: #FFFF") El diseño del piso debe contar con un #[b sistema que evite la filtración de orina y heces hacia la vía pública.]
                td(style= "background-color: #FFFF") "...contar con un #[b sistema que evite la filtración de orina y heces hacia la vía pública"]. Resolución 20223040006915 (Núm. 2.2.c.ii).
              tr(data-aos="fade-right")
                td.text-center(style= "background-color: #FFFF") #[b Limpieza y desinfección]
                td(style= "background-color: #FFFF") La técnica de gestión ambiental final es el #[b lavado y desinfección] del vehículo después del descargue, lo cual implica la #[b disposición adecuada] de los residuos sólidos y líquidos acumulados.
                td(style= "background-color: #FFFF") "...que permita su #[b lavado y desinfección"]. Resolución 20223040006915 (Núm. 2.2.c.i).

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 B. Técnica de disposición para animales muertos (contingencia)

    p.mb-4 El manejo de cadáveres es un protocolo de emergencia sanitaria que requiere una disposición inmediata y controlada para prevenir riesgos biológicos y se basa en los siguientes procesos:

    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0
        .col-lg-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img-05.svg' alt='AvatarTop')
            .tarjeta.color1
              .p-4
                h5 Protocolo de sacrificio y disposición
                p.mb-0 El plan de contingencia debe incluir las acciones a tomar, que incluyen el #[b sacrificio humanitario] (si aplica) y las #[b disposiciones de los animales muertos] (cadáveres) según las directrices sanitarias del ICA.
        .col-lg-12
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img-06.svg' alt='AvatarTop')
            .tarjeta.color1
              .p-4
                h5 Soporte documental
                p.mb-0 El plan de contingencia debe incluir "...sacrificio y #[b disposiciones de los animales muertos"]. ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (pág. 6).
                  
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img-04.png', alt='Imagen decorativa')

    p.mb-4.text-center Con base en la información anterior, la siguiente imagen resume los principales aspectos tratados en este tema:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 2.
          span <em>Gestión ambiental en el transporte animal</em>    

        .row.bg-color-1.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure.desktop
              img(src='@/assets/curso/temas/tema2/figura-1.svg', alt='Figura 2 que resume por medio de una infografía, todo el procedimiento que se realiza en la gestión ambiental cuando se transporta animales en pie; destacando su concepto, los tipos de residuos y las técnicas de disposición para dicho fin.', style="width: 1043px").m-auto
            figure.movil
              img(src='@/assets/curso/temas/tema2/figura-2.svg', alt='Figura 2 que resume por medio de una infografía, todo el procedimiento que se realiza en la gestión ambiental cuando se transporta animales en pie; destacando su concepto, los tipos de residuos y las técnicas de disposición para dicho fin.', style="width: 1043px").m-auto


</template>

<script>
export default {
  name: 'Tema2',
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

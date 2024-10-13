<template>
  <div class="carnet">
    <aside>
      <div>
        <span>CEDULA DE INDENTIDAD</span>
        <img width="40" src="/chile_bandera.png" alt="" />
      </div>

      <img src="/foto_elon.jpg" alt="" />
      <p>RUN {{ run }}</p>
    </aside>

    <main>
      <header>
        <p>REPUBLICA DE CHILE</p>
        <span>SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN</span>
      </header>
      <section>
        <article>
          <header>APELLIDOS</header>
          <span>{{ surnames }}</span>
        </article>
        <article>
          <header>NOMBRES</header>
          <span>{{ names }}</span>
        </article>

        <div class="grid-2-colums">
          <article>
            <header>NACIONALIDAD</header>
            <span>{{ nationality }}</span>
          </article>
          <article>
            <header>SEXO</header>
            <span>{{ gender }}</span>
          </article>
        </div>
        <div class="grid-2-colums">
          <article>
            <header>FECHA DE NACIMIENTO</header>
            <span>{{ birthdate }}</span>
          </article>
          <article>
            <header>NÙMERO DOCUMENTO</header>
            <span>{{ documentNumber }}</span>
          </article>
        </div>
        <div class="grid-2-colums">
          <article>
            <header>FECHA DE EMISIÒN</header>
            <span>{{ issueDate }}</span>
          </article>
          <article>
            <header>FECHA DE VENCIMIENTO</header>
            <span>{{ expirationDate }}</span>
          </article>
        </div>
        <article>
          <header>FIRMA DEL TITULAR</header>
          <span>X Æ A-12</span>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      run: "22.222.222-2",
      names: "ELON REEVE",
      surnames: "MUSK",
      nationality: "SUDAFRICANO",
      gender: "M",
      birthdate: "28 JUN 1971",
      documentNumber: "222.222.222",
      issueDate: "01 ENE 2025",
      expirationDate: "01 ENE 2030",
    };
  },
};
</script>

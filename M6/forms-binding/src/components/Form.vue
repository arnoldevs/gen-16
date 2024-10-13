<template>
  <div id="app">
    <form>
      <div>
        <label>Título de la tarjeta: </label>
        <input type="text" v-model="title" />
      </div>

      <div>
        <label>Chip SRC: </label>
        <input type="text" v-model="chip" />
      </div>

      <div>
        <label>Número: </label>
        <input type="number" v-model="number" />
      </div>

      <div>
        <label>Fecha de expiración: </label>
        <input type="text" v-model="date" />
      </div>

      <div>
        <label>Propietario: </label>
        <input type="text" v-model="owner" />
      </div>

      <div>
        <label>Tipo de tarjeta SRC: </label>
        <input type="text" v-model="type" />
      </div>
    </form>

    <div class="tarjeta">
      <h3>{{ title }}</h3>
      <img width="40" :src="chip" alt="chip de tarjeta" />
      <div>
        <h2>{{ number }}</h2>
        <span
          >Fecha Exp: <b>{{ date }}</b></span
        >
      </div>
      <footer>
        <span>{{ owner }}</span>
        <img :src="type" width="60" alt="tipo de tarjeta" />
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      title: "",
      chip: "/chip.png",
      number: "",
      date: "",
      owner: "",
      type: "/visa.png",
    };
  },
};
</script>

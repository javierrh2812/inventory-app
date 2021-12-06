<script setup>
import TextField from "components/TextField.vue";
import Dropdown from "components/Dropdown.vue";
import request from "../request/index";

const handleSubmit = e => {
  const data = {
    producto: producto.value,
    nro_lote_pt: nro_lote_pt.value,
    peso: peso.value,
    orden_de_fabricacion: orden_de_fabricación.value,
    fecha_registro: new Date().toISOString(),
  };
  request
    .post("registroPt", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(`error`, error));
};

const productos = [
  { id: 1, value: "HARINA DE TARA" },
  { id: 2, value: "DESECHO" },
];
</script>

<template>
  <h2 class="pl-16">
    Registro de productos resultantes de cada orden de fabricacion
  </h2>
  <div
    class="
      bg-gray-50
      max-w-screen-xxl
      p-4
      mx-auto
      sm:px-6
      lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
    "
  >
    <form class="w-full mt-5 flex flex-wrap" @submit.prevent="handleSubmit">
      <Dropdown
        label="Producto"
        class="md:w-1/2 px-3 mb-6 md:mb-0"
        :options="productos"
      />
      <TextField
        label="Nro Lote PT"
        class="md:w-1/2 px-3 mb-6 md:mb-0"
        required
        min="0"
        type="number"
      />
      <TextField
        label="Peso"
        class="md:w-1/2 px-3 mb-6 md:mb-0"
        required
        min="0"
        type="number"
      />
      <TextField
        label="Orden de fabricación"
        class="md:w-1/2 px-3 mb-6 md:mb-0"
        required
        min="0"
        type="number"
      />

      <div class="w-full">
        <button
          type="submit"
          class="ml-auto p-4 m-4 rounded-md bg-neutral-800 text-white"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>

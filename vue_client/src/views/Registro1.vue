<script setup>
import TextField from "components/TextField.vue";
import Dropdown from "components/Dropdown.vue";
import request from "../request/index";

const handleSubmit = e => {
  const data = {
    producto: producto.value,
    nro_lote_mp: nro_lote_mp.value,
    operario: operario.value,
    peso: peso.value,
    orden_de_fabricacion: orden_de_fabricación.value,
    fecha_registro: new Date().toISOString(),
  };
  request
    .post("registroMp", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(`error`, error));
};

//TODO deberia jalarse desde bd
const productos = [{ id: 1, value: "TARA SECA" }];
const operarios = [
  { id: 1, value: "JUAN" },
  { id: 2, value: "JULIO" },
];
</script>

<template>
  <h2 class="pl-16">
    Registro de las entregas de materia prima a procesos de limpieza
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
        required
      />
      <TextField
        label="Nro Lote MP"
        class="md:w-1/2 px-3 mb-6 md:mb-0"
        required
        min="0"
        type="number"
      />
      <Dropdown
        label="Operario"
        class="md:w-1/2 px-3 mb-6 md:mb-0"
        required
        :options="operarios"
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
